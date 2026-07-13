/**
 * Email service for the Vercel serverless form endpoints (Gmail SMTP via
 * nodemailer). Configured via env vars (same approach as the bwichauffeur site):
 *   SMTP_HOST           (default smtp.gmail.com)
 *   SMTP_PORT           (default 587)
 *   SMTP_USER           - the Gmail address that sends mail
 *   SMTP_PASSWORD       - Gmail app password
 *   NOTIFICATION_EMAIL  - where booking/contact notifications are delivered
 */
const nodemailer = require("nodemailer");

const GOLD = "#D4AF37";
const PHONE = "(877) 609-1919";
const PHONE_HREF = "tel:+18776091919";
const SITE = "92limo.com";

let cachedTransport = null;

function getTransport() {
  if (cachedTransport) return cachedTransport;

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "Email is not configured: set SMTP_USER and SMTP_PASSWORD environment variables."
    );
  }

  cachedTransport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user, pass },
  });
  return cachedTransport;
}

function fromAddress() {
  const user = process.env.SMTP_USER || "no-reply@92limo.com";
  return `92 Limo Service <${user}>`;
}

/** Send one email. Returns the nodemailer info object. Throws on failure. */
async function sendEmail(to, subject, text, html) {
  const transport = getTransport();
  const info = await transport.sendMail({ from: fromAddress(), to, subject, text, html });
  const preview = nodemailer.getTestMessageUrl && nodemailer.getTestMessageUrl(info);
  if (preview) console.log("Email preview URL:", preview);
  return info;
}

// ----------------- Templates -----------------

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function row(label, value) {
  if (value === undefined || value === null || value === "") return "";
  return (
    `<tr><td style="padding:8px 14px;border-bottom:1px solid #2a2a2a;color:#999;` +
    `font-size:13px;width:160px;">${label}</td>` +
    `<td style="padding:8px 14px;border-bottom:1px solid #2a2a2a;color:#fff;` +
    `font-size:14px;">${escapeHtml(value)}</td></tr>`
  );
}

function shell(subtitle, innerHtml) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid ${GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,${GOLD},#F4E5C3);padding:22px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:22px;letter-spacing:2px;font-weight:800;">92 LIMO SERVICE</h1>
          <p style="margin:4px 0 0;color:#000;font-size:13px;">${subtitle}</p>
        </div>
        ${innerHtml}
      </div>
    </div>`;
}

// ---- Booking (quote request) ----

function buildAdminBookingEmail(b) {
  const subject = `New Booking Inquiry — ${b.name || "Unknown"} (${b.service_type || "Ride"})`;
  const rows = [
    row("Name", b.name),
    row("Phone", b.phone),
    row("Email", b.email),
    row("Service Type", b.service_type),
    row("Vehicle", b.vehicle_type),
    row("Pickup", b.pickup_location),
    row("Drop-off", b.dropoff_location),
    row("Date", b.date),
    row("Time", b.time),
    row("Passengers", String(b.passengers || "")),
    row("Luggage", String(b.luggage || "")),
    row("Notes", b.notes),
    row("Submitted", b.created_at),
  ].join("");
  const inner = `
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <div style="padding:18px;text-align:center;background:#0a0a0a;">
          <a href="tel:${escapeHtml(b.phone || "")}" style="display:inline-block;padding:10px 22px;background:${GOLD};color:#000;font-weight:bold;text-decoration:none;border-radius:6px;">Call Customer Back</a>
        </div>`;
  const text = [
    "New Booking Inquiry - 92 Limo Service",
    "",
    `Name: ${b.name || ""}`,
    `Phone: ${b.phone || ""}`,
    `Email: ${b.email || ""}`,
    `Service: ${b.service_type || ""}`,
    `Vehicle: ${b.vehicle_type || ""}`,
    `Pickup: ${b.pickup_location || ""}`,
    `Drop-off: ${b.dropoff_location || ""}`,
    `Date: ${b.date || ""}`,
    `Time: ${b.time || ""}`,
    `Passengers: ${b.passengers || ""}`,
    `Luggage: ${b.luggage || ""}`,
    `Notes: ${b.notes || ""}`,
    `Submitted: ${b.created_at || ""}`,
  ].join("\n");
  return { subject, text, html: shell("New Booking Inquiry", inner) };
}

function buildCustomerBookingEmail(b) {
  const name = (b.name || "there").split(" ")[0] || "there";
  const subject = "We received your 92 Limo Service booking request";
  const inner = `
        <div style="padding:30px;color:#fff;">
          <h2 style="color:${GOLD};margin:0 0 16px;font-size:20px;">Hi ${escapeHtml(name)},</h2>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            Thank you for choosing 92 Limo Service. We&rsquo;ve received your booking request and a
            reservation specialist will reach out shortly to confirm your ride with an all-inclusive quote.
          </p>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            <strong style="color:${GOLD};">Need immediate assistance?</strong><br/>
            Call us 24/7 at <a href="${PHONE_HREF}" style="color:${GOLD};">${PHONE}</a>
          </p>
          <div style="margin:24px 0;padding:16px;background:#0a0a0a;border-left:3px solid ${GOLD};border-radius:4px;">
            <p style="margin:0;color:#999;font-size:13px;">Trip summary:</p>
            <p style="margin:6px 0 0;color:#fff;font-size:14px;">
              ${escapeHtml(b.pickup_location || "")} &rarr; ${escapeHtml(b.dropoff_location || "—")}<br/>
              ${escapeHtml(b.date || "")} ${escapeHtml(b.time || "")} &middot; ${escapeHtml(String(b.passengers || ""))} passenger(s)<br/>
              ${escapeHtml(b.vehicle_type || "")}
            </p>
          </div>
          <p style="color:#666;font-size:12px;margin-top:30px;">
            92 Limo Service &middot; Washington DC &middot; Maryland &middot; Virginia<br/>
            <a href="https://${SITE}" style="color:${GOLD};">${SITE}</a>
          </p>
        </div>`;
  const text =
    `Hi ${name},\n\n` +
    "Thank you for choosing 92 Limo Service. We've received your booking request and a " +
    "reservation specialist will reach out shortly to confirm your ride.\n\n" +
    `For immediate assistance, call us 24/7 at ${PHONE}.\n\n` +
    `Trip: ${b.pickup_location || ""} -> ${b.dropoff_location || "—"}\n` +
    `When: ${b.date || ""} ${b.time || ""}\n` +
    `Vehicle: ${b.vehicle_type || ""}\n` +
    `Passengers: ${b.passengers || ""}\n\n` +
    `— 92 Limo Service\n${SITE}`;
  return { subject, text, html: shell("Booking Request Received", inner) };
}

// ---- Contact message ----

function buildAdminContactEmail(m) {
  const subject = `New Contact Message — ${m.name || "Unknown"}`;
  const rows = [
    row("Name", m.name),
    row("Email", m.email),
    row("Phone", m.phone),
    row("Preferred Contact", m.preferred_contact),
    row("SMS Consent", m.sms_consent),
    row("Submitted", m.created_at),
  ].join("");
  const messageHtml = escapeHtml(m.message || "").replace(/\n/g, "<br/>");
  const inner = `
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <div style="padding:18px 22px;background:#0a0a0a;">
          <p style="margin:0 0 8px;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <div style="color:#fff;font-size:14px;line-height:1.6;border-left:3px solid ${GOLD};padding:10px 14px;background:#0f0f0f;border-radius:4px;">${messageHtml}</div>
        </div>
        <div style="padding:18px;text-align:center;background:#0a0a0a;">
          <a href="mailto:${escapeHtml(m.email || "")}" style="display:inline-block;padding:10px 22px;background:${GOLD};color:#000;font-weight:bold;text-decoration:none;border-radius:6px;">Reply to Customer</a>
        </div>`;
  const text = [
    "New Contact Message - 92 Limo Service",
    "",
    `Name: ${m.name || ""}`,
    `Email: ${m.email || ""}`,
    `Phone: ${m.phone || ""}`,
    `Preferred Contact: ${m.preferred_contact || ""}`,
    `SMS Consent: ${m.sms_consent || ""}`,
    `Submitted: ${m.created_at || ""}`,
    "",
    "Message:",
    m.message || "",
  ].join("\n");
  return { subject, text, html: shell("New Contact Message", inner) };
}

function buildCustomerContactEmail(m) {
  const name = (m.name || "there").split(" ")[0] || "there";
  const subject = "We received your message — 92 Limo Service";
  const inner = `
        <div style="padding:30px;color:#fff;">
          <h2 style="color:${GOLD};margin:0 0 16px;font-size:20px;">Hi ${escapeHtml(name)},</h2>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            Thanks for reaching out to 92 Limo Service. We&rsquo;ve received your message and a member
            of our team will get back to you shortly.
          </p>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            <strong style="color:${GOLD};">Need immediate assistance?</strong><br/>
            Call us 24/7 at <a href="${PHONE_HREF}" style="color:${GOLD};">${PHONE}</a>
          </p>
          <p style="color:#666;font-size:12px;margin-top:30px;">
            92 Limo Service &middot; Washington DC &middot; Maryland &middot; Virginia<br/>
            <a href="https://${SITE}" style="color:${GOLD};">${SITE}</a>
          </p>
        </div>`;
  const text =
    `Hi ${name},\n\n` +
    "Thanks for reaching out to 92 Limo Service. We've received your message and a member of our " +
    "team will get back to you shortly.\n\n" +
    `For immediate assistance, call us 24/7 at ${PHONE}.\n\n` +
    `— 92 Limo Service\n${SITE}`;
  return { subject, text, html: shell("Message Received", inner) };
}

module.exports = {
  sendEmail,
  buildAdminBookingEmail,
  buildCustomerBookingEmail,
  buildAdminContactEmail,
  buildCustomerContactEmail,
};
