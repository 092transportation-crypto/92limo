/**
 * Fire-and-forget webhook dispatch to Make.com. Used so a booking submission
 * also drives external automation (SMS alert, Google Sheet logging, etc.)
 * without that automation ever being able to break or slow down the booking
 * response — a missing/unreachable/slow webhook URL is swallowed and logged,
 * never thrown.
 */
const WEBHOOK_TIMEOUT_MS = 6000;

/**
 * POST `payload` as JSON to `process.env.MAKE_BOOKING_WEBHOOK_URL`.
 * No-ops (resolves false) when the env var isn't set, so this is safe to call
 * in every environment before the Make.com scenario exists yet.
 */
async function notifyMakeWebhook(payload) {
  const url = process.env.MAKE_BOOKING_WEBHOOK_URL;
  if (!url) {
    console.log("MAKE_BOOKING_WEBHOOK_URL not set — skipping Make.com webhook dispatch.");
    return false;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`Make.com webhook responded ${res.status} ${res.statusText}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Make.com webhook dispatch failed:", err && err.message);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { notifyMakeWebhook };
