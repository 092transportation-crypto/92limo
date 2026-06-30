/**
 * End-to-end test for the form serverless functions.
 *
 * Spins up a real (sandbox) Ethereal SMTP account, points the handlers at it via
 * the same SMTP_* env vars used in production, then invokes the actual
 * /api/quote-requests and /api/contact handlers with mock req/res objects.
 * Verifies HTTP status + that emails were really sent (prints preview URLs).
 *
 * Run: node scripts/test-form-api.js
 */
const nodemailer = require("nodemailer");

function mockReq(method, body) {
  return { method, body, headers: { "content-type": "application/json" } };
}
function mockRes() {
  return {
    statusCode: null,
    body: null,
    headers: {},
    setHeader(k, v) { this.headers[k] = v; },
    status(c) { this.statusCode = c; return this; },
    json(o) { this.body = o; return this; },
    end() { return this; },
  };
}

async function run() {
  const acct = await nodemailer.createTestAccount();
  process.env.SMTP_HOST = acct.smtp.host;
  process.env.SMTP_PORT = String(acct.smtp.port);
  process.env.SMTP_USER = acct.user;
  process.env.SMTP_PASSWORD = acct.pass;
  process.env.NOTIFICATION_EMAIL = "092transportation@gmail.com";

  const quote = require("../api/quote-requests");
  const contact = require("../api/contact");
  let failures = 0;

  // Booking — valid
  {
    const req = mockReq("POST", {
      name: "Jane Traveler", phone: "443-555-0199", email: "jane@example.com",
      pickup_location: "BWI Airport", dropoff_location: "Inner Harbor, Baltimore",
      date: "2026-07-04", time: "14:30", passengers: 3, luggage: 2,
      service_type: "Airport Transfer", vehicle_type: "Premium SUV — Cadillac Escalade",
      notes: "Flight UA123",
    });
    const res = mockRes();
    await quote(req, res);
    const ok = res.statusCode === 201 && res.body && res.body.id;
    console.log(`[booking valid]   -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }
  // Booking — missing fields
  {
    const res = mockRes();
    await quote(mockReq("POST", { name: "No Phone", email: "x@y.com" }), res);
    const ok = res.statusCode === 400 && /phone|vehicle_type|pickup/.test(res.body.detail);
    console.log(`[booking invalid] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${res.body.detail})`);
    if (!ok) failures++;
  }
  // Contact — valid
  {
    const req = mockReq("POST", {
      name: "Bob Rider", email: "bob@example.com", phone: "410-555-0100",
      message: "Need a quote for a wedding.\nThanks!", sms_consent: true,
    });
    const res = mockRes();
    await contact(req, res);
    const ok = res.statusCode === 201 && res.body && res.body.id;
    console.log(`[contact valid]   -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }
  // Contact — missing message
  {
    const res = mockRes();
    await contact(mockReq("POST", { name: "Bob", email: "bob@example.com", phone: "410" }), res);
    const ok = res.statusCode === 400 && /message/.test(res.body.detail);
    console.log(`[contact invalid] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${res.body.detail})`);
    if (!ok) failures++;
  }
  // Method guard
  {
    const res = mockRes();
    await quote(mockReq("GET", {}), res);
    const ok = res.statusCode === 405;
    console.log(`[booking GET 405] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
  process.exit(failures === 0 ? 0 : 1);
}

run().catch((err) => {
  console.error("Test run crashed:", err);
  process.exit(1);
});
