/**
 * POST /api/chat
 *
 * AI assistant endpoint for the site's chat widget. Accepts a conversation
 * history ({ messages: [{role, content}, ...] }), forwards it to the Anthropic
 * API with the 92 Limo Service system prompt, and returns { reply }.
 *
 * The API key lives server-side only (ANTHROPIC_API_KEY env var).
 */
const { readBody, applyCors } = require("../lib/http");

const SYSTEM_PROMPT = `You are a helpful assistant for 92 Limo Service, a professional luxury chauffeur company serving Maryland, Washington DC, and Virginia.

Answer customer questions about:
- Services: airport transfers (BWI, DCA, IAD), corporate travel, weddings, special events, hourly service
- Fleet: Business Sedan (Mercedes E-Class), First Class Sedan (BMW 7 Series, Mercedes S-Class), Midsize SUV (Lincoln Nautilus), Luxury SUV (Chevrolet Suburban), Premium SUV (Cadillac Escalade), Sprinter Van, Sprinter Limo
- Service areas: Maryland, Washington DC, Northern Virginia, Delaware
- Booking: direct customers to call (877) 679-0100 or visit the booking page
- Pricing: explain that pricing is based on route and vehicle, offer to connect them with a quote

Always be professional, warm, and helpful. If you don't know something specific, direct them to call (877) 679-0100. Keep responses concise — 2-3 sentences max.`;

// Keep requests bounded: cap history depth and per-message size.
const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 2000;

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ detail: "Chat is not configured" });
  }

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

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error(`[chat] Anthropic API ${response.status}: ${detail.slice(0, 500)}`);
      const friendly =
        response.status === 429
          ? "The assistant is busy right now. Please try again in a moment."
          : "The assistant is temporarily unavailable. Please call (877) 679-0100.";
      return res.status(502).json({ detail: friendly });
    }

    const data = await response.json();
    const reply = (data.content || [])
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("")
      .trim();

    if (!reply) {
      return res
        .status(502)
        .json({ detail: "The assistant could not answer. Please call (877) 679-0100." });
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("[chat] request failed:", err);
    return res
      .status(502)
      .json({ detail: "The assistant is temporarily unavailable. Please call (877) 679-0100." });
  }
};
