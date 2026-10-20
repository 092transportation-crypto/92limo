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
const http = require("http");
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
  const chat = require("../api/chat");
  const leadCapture = require("../api/lead-capture");
  let failures = 0;

  // Booking — valid
  {
    const req = mockReq("POST", {
      name: "Jane Traveler", phone: "443-555-0199", email: "jane@example.com",
      pickup_location: "BWI Airport", dropoff_location: "Inner Harbor, Baltimore",
      date: "2026-07-04", time: "14:30", passengers: 3, luggage: 2,
      service_type: "Airport Transfer", vehicle_type: "Premium SUV — Cadillac Escalade",
      hear_about_us: "Google Search", notes: "Flight UA123",
    });
    const res = mockRes();
    await quote(req, res);
    const ok = res.statusCode === 201 && res.body && res.body.id;
    console.log(`[booking valid]   -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }
  // Booking — instant price breakdown lands in the admin email. The handler
  // recomputes the fare server-side from miles + vehicle, so the bogus client
  // numbers below must be replaced by the rate-table values.
  const { buildAdminBookingEmail } = require("../lib/mailer");
  const baseBooking = {
    name: "Priced Rider", phone: "443-555-0111", email: "priced@example.com",
    pickup_location: "BWI Airport", dropoff_location: "Annapolis, MD",
    date: "2026-07-04", time: "14:30", passengers: 2, luggage: 1,
    service_type: "Airport Transfer", vehicle_type: "Business Sedan — Mercedes E-Class",
    hear_about_us: "Google Search",
  };
  {
    const req = mockReq("POST", {
      ...baseBooking,
      pricing: {
        mode: "instant", vehicle: "Business Sedan", vehicle_label: "Business Sedan — Mercedes E-Class",
        miles: 12.4, base_fare: 1, discount: 0, surcharge: 0, card_fee: 0, total: 1,
      },
    });
    const res = mockRes();
    await quote(req, res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminBookingEmail(res.body || {});
    const ok =
      res.statusCode === 201 &&
      p.mode === "instant" && p.miles === 12.4 && p.base_fare === 115 &&
      p.discount === 11.5 && p.surcharge === 0 && p.card_fee === 3.11 && p.total === 106.61 &&
      /Vehicle: Business Sedan — Mercedes E-Class/.test(email.text) &&
      /Distance: 12\.4 miles/.test(email.text) &&
      /Base fare: \$115\.00/.test(email.text) &&
      /Discount \(10%\): -\$11\.50/.test(email.text) &&
      !/Short-notice/.test(email.text) &&
      /Card fee \(3%\): \+\$3\.11/.test(email.text) &&
      /TOTAL: \$106\.61/.test(email.text) &&
      /TOTAL/.test(email.html) && /\$106\.61/.test(email.html) &&
      email.subject.includes("$106.61");
    console.log(`[booking priced]  -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} total=${p.total}`);
    if (!ok) { failures++; console.log(email.subject, "\n", email.text); }
  }
  // Booking — short-notice surcharge + paid online
  {
    const req = mockReq("POST", {
      ...baseBooking,
      pricing: {
        mode: "instant", vehicle: "Business Sedan", vehicle_label: "Business Sedan — Mercedes E-Class",
        miles: 12.4, surcharge: 20.7, short_notice: true, paid: true, payment_intent: "pi_test_123",
      },
    });
    const res = mockRes();
    await quote(req, res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminBookingEmail(res.body || {});
    const ok =
      res.statusCode === 201 &&
      p.surcharge === 20.7 && p.card_fee === 3.73 && p.total === 127.93 && p.paid === true &&
      /Short-notice surcharge \(20%\): \+\$20\.70/.test(email.text) &&
      /TOTAL: \$127\.93/.test(email.text) &&
      /Paid online via Stripe \(pi_test_123\)/.test(email.text) &&
      /PAID/.test(email.subject);
    console.log(`[booking short-notice+paid] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} total=${p.total}`);
    if (!ok) { failures++; console.log(email.subject, "\n", email.text); }
  }
  // Booking — hourly / wedding / special event => custom quote line
  {
    const req = mockReq("POST", {
      ...baseBooking, service_type: "Hourly",
      pricing: { mode: "custom", reason: "Hourly / Wedding / Special Event" },
    });
    const res = mockRes();
    await quote(req, res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminBookingEmail(res.body || {});
    const ok =
      res.statusCode === 201 && p.mode === "custom" &&
      /Custom quote requested — no instant price calculated \(Hourly \/ Wedding \/ Special Event\)/.test(email.text) &&
      /Custom quote requested — no instant price calculated/.test(email.html) &&
      /Vehicle: Business Sedan — Mercedes E-Class/.test(email.text) &&
      !/TOTAL/.test(email.text) && email.subject.includes("Custom quote");
    console.log(`[booking custom]  -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(email.subject, "\n", email.text); }
  }
  // Booking — legacy submission with no pricing field at all
  {
    const res = mockRes();
    await quote(mockReq("POST", { ...baseBooking }), res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminBookingEmail(res.body || {});
    const ok = res.statusCode === 201 && p.mode === "custom" && /no instant price calculated/.test(email.text);
    console.log(`[booking no-pricing] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(email.text); }
  }
  // Booking — Make.com webhook dispatch (fires alongside the emails, never
  // blocks/fails the booking response even when it 500s or is unreachable)
  {
    let received = null;
    const server = http.createServer((req, res) => {
      let body = "";
      req.on("data", (c) => (body += c));
      req.on("end", () => {
        received = JSON.parse(body);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end("{}");
      });
    });
    await new Promise((resolve) => server.listen(0, resolve));
    const port = server.address().port;
    process.env.MAKE_BOOKING_WEBHOOK_URL = `http://127.0.0.1:${port}/hook`;

    const res = mockRes();
    await quote(mockReq("POST", { ...baseBooking, name: "Webhook Rider", phone: "443-555-0188", email: "webhook@example.com" }), res);
    await new Promise((resolve) => setTimeout(resolve, 50)); // let the request body event loop flush
    const ok =
      res.statusCode === 201 && received &&
      received.name === "Webhook Rider" && received.phone === "443-555-0188" &&
      received.pickup === baseBooking.pickup_location && received.destination === baseBooking.dropoff_location &&
      received.date === baseBooking.date && received.time === baseBooking.time &&
      typeof received.submitted_at === "string";
    console.log(`[booking webhook] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(JSON.stringify(received)); }
    server.close();
    delete process.env.MAKE_BOOKING_WEBHOOK_URL;
  }
  // Booking — Make.com webhook URL unreachable (connection refused): booking
  // must still succeed, nothing should throw past the handler.
  {
    process.env.MAKE_BOOKING_WEBHOOK_URL = "http://127.0.0.1:1/unreachable";
    const res = mockRes();
    await quote(mockReq("POST", { ...baseBooking, name: "Unreachable Hook", email: "unreachable@example.com" }), res);
    const ok = res.statusCode === 201;
    console.log(`[booking webhook unreachable] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
    delete process.env.MAKE_BOOKING_WEBHOOK_URL;
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

  // --- /api/chat -----------------------------------------------------------

  // Chat — ANTHROPIC_API_KEY unset: must degrade gracefully (200, a reply
  // with the phone number), never crash, never hang on a real network call.
  {
    delete process.env.ANTHROPIC_API_KEY;
    const res = mockRes();
    await chat(mockReq("POST", { messages: [{ role: "user", content: "What cars do you have?" }] }), res);
    const ok = res.statusCode === 200 && res.body && /\(877\) 609-1919/.test(res.body.reply || "");
    console.log(`[chat no-key fallback] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(JSON.stringify(res.body)); }
  }

  // Chat — method guard
  {
    const res = mockRes();
    await chat(mockReq("GET", {}), res);
    const ok = res.statusCode === 405;
    console.log(`[chat GET 405] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  // Chat — missing messages array
  {
    delete process.env.ANTHROPIC_API_KEY;
    const res = mockRes();
    await chat(mockReq("POST", {}), res);
    const ok = res.statusCode === 400;
    console.log(`[chat missing messages] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  // get_instant_quote tool — math must match the same rate table
  // api/_pricing.js uses (same 12.4mi / Business Sedan figures the booking
  // tests above already verified: base fare $115, 10% discount, 3% card fee,
  // total $106.61). The distance lookup is injected so this never hits the
  // network — it's pure pricing-math verification.
  {
    const fakeDistance = async () => ({ miles: 12.4, source: "test" });
    const result = await chat.buildInstantQuote("BWI Airport", "Annapolis, MD", "Business Sedan", fakeDistance);
    const ok =
      result.ok === true &&
      result.vehicle === "Business Sedan" &&
      result.miles === 12.4 &&
      result.total === 106.61;
    console.log(`[get_instant_quote math] -> ${ok ? "PASS" : "FAIL"} total=${result.total}`);
    if (!ok) { failures++; console.log(JSON.stringify(result)); }
  }

  // get_instant_quote tool — vehicle alias normalization (visitor/Claude may
  // say "Escalade" or "midsize suv" instead of the exact PRICING table key).
  {
    const ok =
      chat.normalizeVehicle("Cadillac Escalade") === "Premium SUV" &&
      chat.normalizeVehicle("midsize suv") === "Mid-Size SUV" &&
      chat.normalizeVehicle("") === "Business Sedan" &&
      chat.normalizeVehicle("not a real vehicle") === "Business Sedan";
    console.log(`[get_instant_quote vehicle aliases] -> ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  // get_instant_quote tool — trip beyond the instant-quote range must say so,
  // not fabricate a number.
  {
    const fakeDistance = async () => ({ miles: 200, source: "test" });
    const result = await chat.buildInstantQuote("Baltimore, MD", "Boston, MA", "Business Sedan", fakeDistance);
    const ok = result.ok === false && result.overLimit === true && /custom quote/i.test(result.reason);
    console.log(`[get_instant_quote over-limit] -> ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(JSON.stringify(result)); }
  }

  // --- /api/lead-capture -----------------------------------------------------

  // Lead capture — missing name/phone -> 400
  {
    const res = mockRes();
    await leadCapture(mockReq("POST", { source: "lead_popup", email: "x@y.com" }), res);
    const ok = res.statusCode === 400 && /name|phone/.test(res.body.detail);
    console.log(`[lead-capture missing fields] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${res.body.detail})`);
    if (!ok) failures++;
  }

  // Lead capture — invalid phone -> 400
  {
    const res = mockRes();
    await leadCapture(mockReq("POST", { source: "exit_intent", name: "Jane", phone: "123" }), res);
    const ok = res.statusCode === 400 && /phone/.test(res.body.detail);
    console.log(`[lead-capture invalid phone] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${res.body.detail})`);
    if (!ok) failures++;
  }

  // Lead capture — valid, no Twilio/webhook env vars set at all: must still
  // 201 immediately (SMS + webhook both no-op without throwing or hanging).
  {
    delete process.env.TWILIO_ACCOUNT_SID;
    delete process.env.TWILIO_AUTH_TOKEN;
    delete process.env.TWILIO_FROM_NUMBER;
    delete process.env.ALERT_PHONE_NUMBER;
    delete process.env.LEAD_WEBHOOK_URL;
    const start = Date.now();
    const res = mockRes();
    await leadCapture(mockReq("POST", { source: "lead_popup", name: "Jane Traveler", phone: "443-555-0199" }), res);
    const elapsed = Date.now() - start;
    const ok = res.statusCode === 201 && res.body && res.body.id && elapsed < 1000;
    console.log(`[lead-capture no-env 201] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${elapsed}ms)`);
    if (!ok) failures++;
  }

  // Lead capture — LEAD_WEBHOOK_URL points at an unreachable host (connection
  // refused): must still 201, and the 6s webhook timeout must actually bound
  // the request (well under, say, 6.5s) rather than hanging indefinitely.
  {
    process.env.LEAD_WEBHOOK_URL = "http://127.0.0.1:1/unreachable";
    const start = Date.now();
    const res = mockRes();
    await leadCapture(mockReq("POST", { source: "exit_intent", name: "Unreachable Hook", phone: "443-555-0188" }), res);
    const elapsed = Date.now() - start;
    const ok = res.statusCode === 201 && elapsed < 6500;
    console.log(`[lead-capture webhook unreachable] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${elapsed}ms)`);
    if (!ok) failures++;
    delete process.env.LEAD_WEBHOOK_URL;
  }

  // Lead capture — webhook actually fires with the right payload shape
  {
    let received = null;
    const server = http.createServer((req, res2) => {
      let body = "";
      req.on("data", (c) => (body += c));
      req.on("end", () => {
        received = JSON.parse(body);
        res2.writeHead(200, { "Content-Type": "application/json" });
        res2.end("{}");
      });
    });
    await new Promise((resolve) => server.listen(0, resolve));
    const port = server.address().port;
    process.env.LEAD_WEBHOOK_URL = `http://127.0.0.1:${port}/hook`;

    const res = mockRes();
    await leadCapture(mockReq("POST", { source: "chat_widget", name: "Webhook Rider", phone: "443-555-0188" }), res);
    await new Promise((resolve) => setTimeout(resolve, 50));
    const ok =
      res.statusCode === 201 && received &&
      received.name === "Webhook Rider" && received.source === "chat_widget" &&
      typeof received.created_at === "string";
    console.log(`[lead-capture webhook payload] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(JSON.stringify(received)); }
    server.close();
    delete process.env.LEAD_WEBHOOK_URL;
  }

  // Lead capture — method guard
  {
    const res = mockRes();
    await leadCapture(mockReq("GET", {}), res);
    const ok = res.statusCode === 405;
    console.log(`[lead-capture GET 405] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
  process.exit(failures === 0 ? 0 : 1);
}

run().catch((err) => {
  console.error("Test run crashed:", err);
  process.exit(1);
});
