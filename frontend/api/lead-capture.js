/**
 * POST /api/lead-capture
 *
 * Captures a lead from one of the site's passive lead-gen surfaces — the
 * 30-second lead popup, the desktop exit-intent popup, or (in principle) any
 * other `source` tag — and alerts the team by SMS + a Make.com-style webhook.
 * Unlike /api/quote-requests, there is no email round-trip here: this is a
 * lightweight "someone is interested" signal, not a full booking inquiry.
 *
 * Body: { source, name, phone, email? }
 * Returns 201 regardless of whether the SMS/webhook actually delivered —
 * delivery is best-effort and never blocks the response to the visitor.
 */
const { readBody, applyCors, isEmail, isValidPhone, uuid, nowIso } = require("../lib/http");
const { sendSms } = require("../lib/sms");
const { notifyLeadWebhook } = require("../lib/leadWebhook");

const clip = (v, max) => String(v == null ? "" : v).trim().slice(0, max);
const VALID_SOURCES = new Set(["lead_popup", "exit_intent", "chat_widget"]);

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);

  const name = clip(body.name, 120);
  const phone = clip(body.phone, 40);
  const email = clip(body.email, 200);
  const source = VALID_SOURCES.has(body.source) ? body.source : "lead_popup";

  const missing = [];
  if (!name) missing.push("name");
  if (!phone || !isValidPhone(phone)) missing.push("phone");
  if (email && !isEmail(email)) missing.push("email");
  if (missing.length) {
    return res.status(400).json({ detail: `Missing or invalid fields: ${missing.join(", ")}` });
  }

  const doc = {
    id: uuid(),
    source,
    name,
    phone,
    email: email ? email.toLowerCase() : "",
    created_at: nowIso(),
  };

  const sourceLabel = source.replace(/_/g, " ");
  const smsBody =
    `New ${sourceLabel} lead: ${name} — ${phone}` + (doc.email ? ` — ${doc.email}` : "");

  const [smsResult, webhookResult] = await Promise.allSettled([
    sendSms(smsBody),
    notifyLeadWebhook(doc),
  ]);
  if (smsResult.status === "rejected") {
    console.error("Lead SMS dispatch failed:", smsResult.reason && smsResult.reason.message);
  }
  if (webhookResult.status === "rejected") {
    console.error("Lead webhook dispatch failed:", webhookResult.reason && webhookResult.reason.message);
  }

  return res.status(201).json(doc);
};
