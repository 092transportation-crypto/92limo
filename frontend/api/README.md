# Form API (Vercel serverless functions)

Gmail-SMTP (nodemailer) endpoints that power the site's forms — same approach as
the bwichauffeur site.

| Endpoint                   | Used by                                   |
| -------------------------- | ----------------------------------------- |
| `POST /api/quote-requests` | Booking / quote form (`BookingForm`)      |
| `POST /api/contact`        | Contact "Send Us a Message" (`ContactForm`) |
| `POST /api/chat`           | AI chat widget (`ChatWidget`) — Anthropic API, with `get_instant_quote` + `submit_booking_lead` tools |
| `POST /api/lead-capture`   | Lead popup (`LeadPopup`) + exit-intent popup (`ExitIntentPopup`) |

`/api/quote-requests` and `/api/contact` each validate the submission, email
the admin (`NOTIFICATION_EMAIL`) and a confirmation to the customer, and
return `201` on success.

`/api/quote-requests` also fires a webhook to Make.com (`lib/webhooks.js`,
`MAKE_BOOKING_WEBHOOK_URL`) alongside the emails — see `docs/make-automation.md`
for the automation this drives and how to set it up. The dispatch is
fire-and-forget with a 6s timeout: a missing, slow, or failing webhook never
blocks or fails the booking response.

`/api/chat` calls the Anthropic Messages API directly (no SDK). When it
captures a booking lead via the `submit_booking_lead` tool, and whenever
`/api/lead-capture` is hit (lead popup / exit-intent popup), it dispatches an
SMS alert (`lib/sms.js`, Twilio REST API) and a webhook (`lib/leadWebhook.js`,
`LEAD_WEBHOOK_URL`) — both fire-and-forget with a 6s timeout, same contract as
the Make.com booking webhook above. **`LEAD_WEBHOOK_URL` is intentionally
separate from `MAKE_BOOKING_WEBHOOK_URL`** — the latter is scoped only to the
booking form and may already be wired to a live Make.com scenario; don't merge
the two.

## Required Vercel environment variables (Production + Preview)

| Variable             | Required | Default                       | Notes |
| -------------------- | -------- | ----------------------------- | ----- |
| `SMTP_USER`          | ✅ yes   | —                             | Gmail address that sends mail |
| `SMTP_PASSWORD`      | ✅ yes   | —                             | Gmail **App Password** (needs 2-Step Verification; not the normal password) |
| `NOTIFICATION_EMAIL` | ✅ yes   | `092transportation@gmail.com` | Where inquiries are delivered |
| `SMTP_HOST`          | no       | `smtp.gmail.com`              | Override for a non-Gmail SMTP provider |
| `SMTP_PORT`          | no       | `587`                         | `465` for implicit TLS |
| `ANTHROPIC_API_KEY`  | ✅ yes   | —                             | Anthropic API key for the AI chat widget (`/api/chat`). Server-side only — never expose in the frontend. Without it, `/api/chat` still returns 200 with a friendly fallback reply pointing to the phone number — it never crashes. |
| `ANTHROPIC_CHAT_MODEL` | no    | `claude-haiku-5-5`            | Override the chat model. |
| `MAKE_BOOKING_WEBHOOK_URL` | no | — (webhook dispatch is skipped if unset) | Make.com "Custom webhook" trigger URL for the booking-automation scenario (SMS alert, Google Sheet logging, etc.) — see `docs/make-automation.md`. **Booking form only** — do not repurpose for the lead-gen surfaces below. |
| `TWILIO_ACCOUNT_SID` | no       | —                             | Twilio Account SID. SMS alert dispatch (`lib/sms.js`) no-ops if any Twilio var is missing. |
| `TWILIO_AUTH_TOKEN`  | no       | —                             | Twilio Auth Token. |
| `TWILIO_FROM_NUMBER` | no       | —                             | Twilio phone number the alert SMS is sent from. |
| `ALERT_PHONE_NUMBER` | no       | —                             | Phone number the alert SMS is sent to (the on-call team). |
| `LEAD_WEBHOOK_URL`   | no       | — (webhook dispatch is skipped if unset) | Webhook URL for the new lead-gen surfaces: chat-widget booking leads, the lead popup, and the exit-intent popup (`lib/leadWebhook.js`). **Separate from `MAKE_BOOKING_WEBHOOK_URL`.** |

> The frontend posts to the same origin (`/api/...`). To point it at a different
> backend host, set `REACT_APP_BACKEND_URL`; otherwise leave it unset.

A Gmail App Password requires 2-Step Verification on the Google account:
Google Account → Security → 2-Step Verification → App passwords.

## Local end-to-end test

`node scripts/test-form-api.js` runs both handlers against a sandbox (Ethereal)
SMTP account and prints email preview URLs — no real credentials needed.
