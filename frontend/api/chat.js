/**
 * POST /api/chat
 *
 * AI assistant endpoint for the site's chat widget. Accepts a conversation
 * history ({ messages: [{role, content}, ...] }), forwards it to the
 * Anthropic Messages API with the 92 Limo Service system prompt + two tools
 * (get_instant_quote, submit_booking_lead), and returns { reply } — or
 * { reply, leadCaptured: true } once a booking lead has been submitted.
 *
 * The API key lives server-side only (ANTHROPIC_API_KEY env var). Migrated
 * off Groq — see git history for the prior implementation.
 */
const { readBody, applyCors, isValidPhone, nowIso } = require("../lib/http");
const { sendSms } = require("../lib/sms");
const { notifyLeadWebhook } = require("../lib/leadWebhook");
const { computeQuote, MAX_MILES } = require("./_pricing.js");
const { getDistanceMiles } = require("./distance.js");

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
const PHONE = "(877) 609-1919";

const FALLBACK_REPLY =
  `Thanks for reaching out! Our live assistant isn't available right now, but we'd love to help — ` +
  `call us anytime at ${PHONE}, or fill out the quick booking form on our site and a dispatcher ` +
  `will confirm your trip right away.`;

const SYSTEM_PROMPT = `You are the 92 Limo Service chat assistant — a professional luxury chauffeur company serving Maryland, Washington DC, Northern Virginia, and Delaware.

FACTS ABOUT THIS COMPANY (use only these — never invent services, vehicles, or policies):
- Phone: ${PHONE} (available for booking, questions, and live quotes)
- Services: airport transfers (BWI, DCA, IAD), corporate travel, weddings, proms, wine tours, birthdays/anniversaries, special events, hourly/point-to-point chauffeur service, long-distance trips
- Service areas: Maryland, Washington DC, Northern Virginia, Delaware
- Our fleet (use this exact list when asked "what cars do you have"):
  • Business Sedan — Mercedes E-Class (up to 3 passengers, 2 bags) — airport transfers, corporate travel
  • First Class Sedan — BMW 7 Series or Mercedes S-Class (up to 3 passengers, 2 bags) — executive travel, weddings, VIP airport transfers
  • Midsize SUV — Lincoln Nautilus (up to 4 passengers, 4 bags) — small families, extra luggage
  • Luxury SUV — Chevrolet Suburban (up to 6 passengers, 5 bags) — larger groups, extended journeys
  • Premium SUV — Lincoln Navigator (up to 6 passengers, 5 bags) — airport transfers, corporate, weddings & events
  • Sprinter Shuttle — Mercedes Sprinter (up to 13 passengers) — group airport runs, team travel, event shuttles
  • Sprinter Executive — Mercedes Sprinter, upgraded interior (up to 13 passengers) — corporate groups, weddings, proms, nights out
- Booking: the booking form on the site, or calling ${PHONE}

NON-NEGOTIABLE GUARDRAILS:
1. NEVER state a specific dollar price yourself. The only prices you may say out loud are numbers that came back from the get_instant_quote tool in this same conversation. If you don't have a tool result yet, explain that pricing depends on distance and vehicle, and offer to collect trip details (pickup, destination, vehicle) so you can run an instant quote, or so a dispatcher can follow up with an exact price.
2. NEVER claim to know real calendar availability for a specific date. Say the fleet is large and availability is usually open, and offer to collect trip details so a dispatcher can confirm the booking.
3. After 2–3 exchanges, or as soon as the visitor shows booking interest, ask: "Would you like to book a ride? I can get you a quote right now." If they say yes, collect — ONE AT A TIME, waiting for each answer before asking the next — their name, phone number, pickup location, destination, date, and time. Once you have all six, call submit_booking_lead. Do not call submit_booking_lead until you have all six fields.
4. When a visitor gives you a pickup and destination and wants pricing, call get_instant_quote with those locations (and a vehicle if they named one) rather than guessing at a number.
5. Keep responses warm, professional, and concise — 2–4 sentences unless the visitor asks for more detail.`;

// Keep requests bounded: cap history depth and per-message size.
const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 2000;
const MAX_TOKENS = 1024;
const MODEL = process.env.ANTHROPIC_CHAT_MODEL || "claude-haiku-5-5";

const TOOLS = [
  {
    name: "get_instant_quote",
    description:
      "Compute a real instant price quote from this site's actual mileage-bracket rate table. " +
      "Call this whenever the visitor gives (or you have collected) a pickup location and a " +
      "destination and wants to know pricing. Do not guess a price without calling this tool.",
    input_schema: {
      type: "object",
      properties: {
        pickup: { type: "string", description: "Pickup address, airport, or location." },
        dropoff: { type: "string", description: "Destination address or location." },
        vehicle: {
          type: "string",
          description:
            "Vehicle category the visitor wants, e.g. 'Business Sedan', 'Premium SUV', " +
            "'Sprinter Executive'. Optional — defaults to the Business Sedan if omitted.",
        },
      },
      required: ["pickup", "dropoff"],
    },
  },
  {
    name: "submit_booking_lead",
    description:
      "Submit a captured booking lead so a dispatcher can confirm it. Only call this once you " +
      "have collected ALL SIX fields one at a time in conversation: name, phone, pickup, " +
      "destination, date, and time.",
    input_schema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Visitor's full name." },
        phone: { type: "string", description: "Visitor's phone number." },
        pickup: { type: "string", description: "Pickup location." },
        destination: { type: "string", description: "Destination location." },
        date: { type: "string", description: "Trip date, as given by the visitor." },
        time: { type: "string", description: "Trip time, as given by the visitor." },
      },
      required: ["name", "phone", "pickup", "destination", "date", "time"],
    },
  },
];

// Maps loosely-typed vehicle names (however the visitor or Claude phrases
// them) onto the exact keys api/_pricing.js's PRICING table uses.
const VEHICLE_ALIASES = {
  "business sedan": "Business Sedan",
  sedan: "Business Sedan",
  "mercedes e-class": "Business Sedan",
  "first class": "First Class",
  "first class sedan": "First Class",
  "bmw 7 series": "First Class",
  "mercedes s-class": "First Class",
  "midsize suv": "Mid-Size SUV",
  "mid-size suv": "Mid-Size SUV",
  "mid size suv": "Mid-Size SUV",
  "lincoln nautilus": "Mid-Size SUV",
  "luxury suv": "Luxury SUV",
  "chevrolet suburban": "Luxury SUV",
  suburban: "Luxury SUV",
  "premium suv": "Premium SUV",
  "lincoln navigator": "Premium SUV",
  navigator: "Premium SUV",
  "cadillac escalade": "Premium SUV",
  escalade: "Premium SUV",
  "sprinter shuttle": "Sprinter Van",
  "sprinter van": "Sprinter Van",
  sprinter: "Sprinter Van",
  "mercedes sprinter": "Sprinter Van",
  "sprinter executive": "Sprinter Executive",
};

function normalizeVehicle(raw) {
  const key = String(raw || "").trim().toLowerCase();
  return VEHICLE_ALIASES[key] || "Business Sedan";
}

const clip = (v, max) => String(v == null ? "" : v).trim().slice(0, max);

/**
 * Core of the get_instant_quote tool: real distance lookup + real pricing
 * math (api/_pricing.js's computeQuote — the same table api/quote-requests.js
 * uses). Pulled out as its own function, with an injectable distance lookup,
 * so it's unit-testable without a network call (see scripts/test-form-api.js).
 */
async function buildInstantQuote(pickup, dropoff, vehicleRaw, distanceFn = getDistanceMiles) {
  const vehicle = normalizeVehicle(vehicleRaw);
  const { miles } = await distanceFn(pickup, dropoff);
  const quote = computeQuote(miles, vehicle, false);
  if (!quote) {
    return { ok: false, reason: `No instant pricing available for "${vehicle}".` };
  }
  if (quote.overLimit) {
    return {
      ok: false,
      overLimit: true,
      miles: quote.miles,
      reason:
        `This trip is ${quote.miles} miles, which is over the ${MAX_MILES}-mile instant-quote ` +
        `range. A dispatcher needs to put together a custom quote for a trip this long.`,
    };
  }
  return {
    ok: true,
    vehicle,
    miles: quote.miles,
    total: quote.total,
    note:
      "This total already includes the automatic 10% discount and the 3% card-processing fee. " +
      "It does not include the short-notice surcharge, which only applies if pickup is within 4 hours.",
  };
}

/** One call to the Anthropic Messages API. Returns the parsed response body, or throws. */
async function callAnthropic(apiKey, messages) {
  const res = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": ANTHROPIC_VERSION,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages,
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Anthropic API ${res.status}: ${detail.slice(0, 500)}`);
  }
  return res.json();
}

const textOf = (content) =>
  (Array.isArray(content) ? content : [])
    .filter((b) => b && b.type === "text" && typeof b.text === "string")
    .map((b) => b.text.trim())
    .filter(Boolean)
    .join("\n\n");

const findToolUse = (content) =>
  (Array.isArray(content) ? content : []).find((b) => b && b.type === "tool_use");

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);
  const raw = Array.isArray(body.messages) ? body.messages : null;
  if (!raw || raw.length === 0) {
    return res.status(400).json({ detail: "messages array is required" });
  }

  // Sanitize: only role/content pairs with valid roles, trimmed and capped.
  const messages = raw
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim()
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));

  if (messages.length === 0 || messages[0].role !== "user") {
    return res.status(400).json({ detail: "Conversation must start with a user message" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Never crash, never 500 — degrade to an honest, still-useful reply.
    return res.status(200).json({ reply: FALLBACK_REPLY });
  }

  try {
    const first = await callAnthropic(apiKey, messages);

    if (first.stop_reason === "refusal") {
      return res.status(200).json({ reply: FALLBACK_REPLY });
    }

    const toolUse = findToolUse(first.content);

    if (!toolUse) {
      const reply = textOf(first.content);
      return res
        .status(200)
        .json({ reply: reply || `I didn't quite catch that. You can also reach us at ${PHONE}.` });
    }

    if (toolUse.name === "submit_booking_lead") {
      const input = toolUse.input || {};
      const leadName = clip(input.name, 120) || "there";
      const leadPhone = clip(input.phone, 40);
      const leadPickup = clip(input.pickup, 200);
      const leadDestination = clip(input.destination, 200);
      const leadDate = clip(input.date, 40);
      const leadTime = clip(input.time, 40);

      const lead = {
        source: "chat_widget",
        name: leadName,
        phone: leadPhone,
        pickup: leadPickup,
        destination: leadDestination,
        date: leadDate,
        time: leadTime,
        submitted_at: nowIso(),
      };

      const smsBody =
        `New chat booking lead: ${leadName} — ${leadPhone}\n` +
        `${leadPickup} -> ${leadDestination}\n${leadDate} ${leadTime}`;

      const [smsResult, webhookResult] = await Promise.allSettled([
        sendSms(smsBody),
        notifyLeadWebhook(lead),
      ]);
      if (smsResult.status === "rejected") {
        console.error("[chat] lead SMS dispatch failed:", smsResult.reason && smsResult.reason.message);
      }
      if (webhookResult.status === "rejected") {
        console.error("[chat] lead webhook dispatch failed:", webhookResult.reason && webhookResult.reason.message);
      }

      const phoneNote = leadPhone && !isValidPhone(leadPhone) ? " (please double check that number)" : "";
      const reply =
        `Thanks, ${leadName.split(" ")[0]}! I've got your trip from ${leadPickup} to ${leadDestination} ` +
        `on ${leadDate} at ${leadTime}. A dispatcher will reach out to ${leadPhone}${phoneNote} shortly to confirm — talk soon!`;

      return res.status(200).json({ reply, leadCaptured: true });
    }

    if (toolUse.name === "get_instant_quote") {
      const input = toolUse.input || {};
      let toolResult;
      try {
        toolResult = await buildInstantQuote(clip(input.pickup, 300), clip(input.dropoff, 300), input.vehicle);
      } catch (err) {
        console.error("[chat] get_instant_quote distance lookup failed:", err && err.message);
        toolResult = { ok: false, reason: "Could not determine the distance for those locations right now." };
      }

      const followUpMessages = [
        ...messages,
        { role: "assistant", content: first.content },
        {
          role: "user",
          content: [
            {
              type: "tool_result",
              tool_use_id: toolUse.id,
              content: JSON.stringify(toolResult),
            },
          ],
        },
      ];

      try {
        const second = await callAnthropic(apiKey, followUpMessages);
        const reply = textOf(second.content);
        if (reply) return res.status(200).json({ reply });
      } catch (err) {
        console.error("[chat] follow-up Anthropic call failed:", err && err.message);
      }

      // Fallback phrasing if the second Claude call failed or returned no text —
      // still surfaces the real computed number, never a guess.
      if (toolResult.ok) {
        return res.status(200).json({
          reply:
            `For a ${toolResult.vehicle} on that route (about ${toolResult.miles} miles), the instant quote ` +
            `is $${toolResult.total.toFixed(2)}, including our automatic discount and card fee. Would you like to book it?`,
        });
      }
      return res.status(200).json({
        reply: toolResult.reason || `I couldn't price that trip instantly — call us at ${PHONE} for a custom quote.`,
      });
    }

    // Unknown tool name (shouldn't happen — defensive fallback).
    return res.status(200).json({ reply: FALLBACK_REPLY });
  } catch (err) {
    console.error("[chat] request failed:", err);
    return res
      .status(502)
      .json({ detail: `The assistant is temporarily unavailable. Please call ${PHONE}.` });
  }
};

// Exposed for unit testing (scripts/test-form-api.js) — not used in prod flow.
module.exports.buildInstantQuote = buildInstantQuote;
module.exports.normalizeVehicle = normalizeVehicle;
