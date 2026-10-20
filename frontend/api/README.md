# Form API (Vercel serverless functions)

Gmail-SMTP (nodemailer) endpoints that power the site's forms — same approach as
the bwichauffeur site.

| Endpoint                   | Used by                                   |
| -------------------------- | ----------------------------------------- |
| `POST /api/quote-requests` | Booking / quote form (`BookingForm`)      |
| `POST /api/contact`        | Contact "Send Us a Message" (`ContactForm`) |
| `POST /api/chat`           | AI chat widget (`ChatWidget`) — Groq API |

Each endpoint validates the submission, emails the admin (`NOTIFICATION_EMAIL`)
and a confirmation to the customer, and returns `201` on success.

`/api/quote-requests` also fires a webhook to Make.com (`lib/webhooks.js`,
`MAKE_BOOKING_WEBHOOK_URL`) alongside the emails — see `docs/make-automation.md`
for the automation this drives and how to set it up. The dispatch is
fire-and-forget with a 6s timeout: a missing, slow, or failing webhook never
blocks or fails the booking response.

## Required Vercel environment variables (Production + Preview)

| Variable             | Required | Default                       | Notes |
| -------------------- | -------- | ----------------------------- | ----- |
| `SMTP_USER`          | ✅ yes   | —                             | Gmail address that sends mail |
| `SMTP_PASSWORD`      | ✅ yes   | —                             | Gmail **App Password** (needs 2-Step Verification; not the normal password) |
| `NOTIFICATION_EMAIL` | ✅ yes   | `092transportation@gmail.com` | Where inquiries are delivered |
| `SMTP_HOST`          | no       | `smtp.gmail.com`              | Override for a non-Gmail SMTP provider |
| `SMTP_PORT`          | no       | `587`                         | `465` for implicit TLS |
| `GROQ_API_KEY`       | ✅ yes   | —                             | Groq API key for the AI chat widget (`/api/chat`). Server-side only — never expose in the frontend. |
| `MAKE_BOOKING_WEBHOOK_URL` | no | — (webhook dispatch is skipped if unset) | Make.com "Custom webhook" trigger URL for the booking-automation scenario (SMS alert, Google Sheet logging, etc.) — see `docs/make-automation.md`. |

> The frontend posts to the same origin (`/api/...`). To point it at a different
> backend host, set `REACT_APP_BACKEND_URL`; otherwise leave it unset.

A Gmail App Password requires 2-Step Verification on the Google account:
Google Account → Security → 2-Step Verification → App passwords.

## Local end-to-end test

`node scripts/test-form-api.js` runs both handlers against a sandbox (Ethereal)
SMTP account and prints email preview URLs — no real credentials needed.
