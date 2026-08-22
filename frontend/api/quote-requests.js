/**
 * POST /api/quote-requests
 *
 * Validates a booking/quote inquiry from the site's booking form, then emails
 * the admin (NOTIFICATION_EMAIL) and a confirmation to the customer via Gmail
 * SMTP (nodemailer). Returns 201 on success.
 */
const { readBody, applyCors, isEmail, uuid, nowIso } = require("../lib/http");
const {
  sendEmail,
  buildAdminBookingEmail,
  buildCustomerBookingEmail,
} = require("../lib/mailer");
const { computeQuote } = require("./_pricing.js");

const clip = (v, max) => String(v == null ? "" : v).trim().slice(0, max);

/**
 * Normalize the instant-quote pricing the form submits so the admin email
 * can show the fare breakdown. When the client says an instant price was
 * shown, the fare is RECOMPUTED here from miles + vehicle (same bracket
 * math as the Stripe endpoint) so the email always reflects our rate table,
 * not whatever numbers arrived in the request.
 *
 *   { mode: "instant", vehicle, vehicle_label, miles, base_fare, discount,
 *     surcharge, short_notice, card_fee, total, paid, payment_intent }
 *   { mode: "custom", reason }   // Hourly / Wedding / Special Event, no
 *                                 // vehicle, over 150 miles, no distance …
 */
function normalizePricing(raw) {
  if (!raw || typeof raw !== "object") {
    return { mode: "custom", reason: "No pricing data submitted" };
  }
  if (raw.mode !== "instant") {
    return { mode: "custom", reason: clip(raw.reason, 200) || "Custom quote" };
  }
  const miles = Number(raw.miles);
  const vehicle = clip(raw.vehicle, 40);
  // The surcharge the customer saw is the source of truth for short notice.
  const shortNotice = Boolean(raw.short_notice) || Number(raw.surcharge) > 0;
  const q = computeQuote(miles, vehicle, shortNotice);
  if (!q) return { mode: "custom", reason: "Vehicle has no instant pricing" };
  if (q.overLimit) {
    return { mode: "custom", reason: `Trip is ${q.miles} miles (over the 150-mile instant-quote limit)` };
  }
  return {
    mode: "instant",
    vehicle,
    vehicle_label: clip(raw.vehicle_label, 60) || vehicle,
    miles: q.miles,
    base_fare: q.baseFare,
    discount: q.discount,
    surcharge: q.surcharge,
    short_notice: shortNotice,
    card_fee: q.cardFee,
    total: q.total,
    paid: Boolean(raw.paid),
    payment_intent: clip(raw.payment_intent, 80),
  };
}

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);

  const missing = [];
  if (!body.name || !String(body.name).trim()) missing.push("name");
  if (!body.phone || !String(body.phone).trim()) missing.push("phone");
  if (!isEmail(body.email)) missing.push("email");
  if (!body.pickup_location || !String(body.pickup_location).trim()) missing.push("pickup_location");
  if (!body.dropoff_location || !String(body.dropoff_location).trim()) missing.push("dropoff_location");
  if (!body.date || !String(body.date).trim()) missing.push("date");
  if (!body.time || !String(body.time).trim()) missing.push("time");
  if (!body.service_type || !String(body.service_type).trim()) missing.push("service_type");
  if (!body.vehicle_type || !String(body.vehicle_type).trim()) missing.push("vehicle_type");
  if (missing.length) {
    return res.status(400).json({ detail: `Missing or invalid fields: ${missing.join(", ")}` });
  }

  const doc = {
    id: uuid(),
    name: String(body.name).trim(),
    phone: String(body.phone).trim(),
    email: String(body.email).toLowerCase().trim(),
    pickup_location: String(body.pickup_location).trim(),
    dropoff_location: String(body.dropoff_location).trim(),
    date: String(body.date).trim(),
    time: String(body.time).trim(),
    passengers: Number(body.passengers) || 1,
    luggage: Number(body.luggage) || 0,
    service_type: String(body.service_type).trim(),
    vehicle_type: String(body.vehicle_type).trim(),
    flight_number: String(body.flight_number || "").trim(),
    notes: String(body.notes || "").trim(),
    pricing: normalizePricing(body.pricing),
    created_at: nowIso(),
  };

  const notifyTo = process.env.NOTIFICATION_EMAIL || "092transportation@gmail.com";
  const admin = buildAdminBookingEmail(doc);
  const customer = buildCustomerBookingEmail(doc);

  const [adminResult, customerResult] = await Promise.allSettled([
    sendEmail(notifyTo, admin.subject, admin.text, admin.html),
    sendEmail(doc.email, customer.subject, customer.text, customer.html),
  ]);

  if (adminResult.status === "rejected") {
    console.error("Admin booking email failed:", adminResult.reason && adminResult.reason.message);
  }
  if (customerResult.status === "rejected") {
    console.error("Customer booking email failed:", customerResult.reason && customerResult.reason.message);
  }

  // The admin notification is the inquiry's system of record — fail if it didn't send.
  if (adminResult.status !== "fulfilled") {
    return res.status(502).json({
      detail: "We could not deliver your request right now. Please call us at (877) 609-1919.",
    });
  }

  return res.status(201).json(doc);
};
