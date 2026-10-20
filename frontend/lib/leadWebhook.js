/**
 * Fire-and-forget webhook dispatch for the NEW lead-gen surfaces added in
 * this task (chat-widget booking leads, the lead popup, the exit-intent
 * popup) — deliberately separate from lib/webhooks.js's notifyMakeWebhook,
 * which is scoped only to the booking FORM (api/quote-requests.js) and may
 * already be wired to a live Make.com scenario. Do not merge these.
 *
 * Same fire-and-forget contract: a missing/unreachable/slow webhook URL is
 * swallowed and logged, never thrown, so it can never break or slow down
 * the response to the visitor.
 */
const WEBHOOK_TIMEOUT_MS = 6000;

/**
 * POST `payload` as JSON to process.env.LEAD_WEBHOOK_URL.
 * No-ops (resolves false) when the env var isn't set.
 */
async function notifyLeadWebhook(payload) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.log("LEAD_WEBHOOK_URL not set — skipping lead webhook dispatch.");
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
      console.error(`Lead webhook responded ${res.status} ${res.statusText}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Lead webhook dispatch failed:", err && err.message);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { notifyLeadWebhook };
