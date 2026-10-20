/**
 * Fire-and-forget SMS alert dispatch via the Twilio REST API (direct HTTP,
 * no SDK dependency). Used to ping the on-call team the moment a lead comes
 * in (chat widget booking, lead popup, exit-intent popup) — a missing,
 * misconfigured, slow, or failing Twilio call is swallowed and logged, never
 * thrown, so it can never break or slow down the response to the visitor.
 */
const SMS_TIMEOUT_MS = 6000;

/**
 * Send `body` as an SMS to process.env.ALERT_PHONE_NUMBER from
 * process.env.TWILIO_FROM_NUMBER, via the Twilio account identified by
 * TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN.
 *
 * No-ops (resolves false) when any required env var is missing, and never
 * throws — safe to call in every environment before Twilio is configured.
 */
async function sendSms(body) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;
  const toNumber = process.env.ALERT_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    console.log("Twilio env vars not fully set — skipping SMS alert dispatch.");
    return false;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SMS_TIMEOUT_MS);
  try {
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
    const params = new URLSearchParams({ To: toNumber, From: fromNumber, Body: body });
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        signal: controller.signal,
      }
    );
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`Twilio SMS send failed ${res.status}: ${detail.slice(0, 300)}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Twilio SMS dispatch failed:", err && err.message);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { sendSms };
