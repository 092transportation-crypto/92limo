# Make.com booking automation

What's wired up in this repo vs. what still has to be built in your Make.com
account (I don't have access to Make.com, Twilio, or Google Sheets accounts —
those are account-level connections only you can authorize).

## What's already live in this repo

`POST /api/quote-requests` (the booking form handler) now does three things
on every submission, in parallel:

1. Emails the admin (`NOTIFICATION_EMAIL`) — unchanged.
2. Emails the customer a confirmation — copy now reads exactly:
   > Thank you for choosing 92 Transportation. We received your booking
   > request and will confirm within 15 minutes. Questions? Call
   > (877) 609-1919
3. **New:** POSTs a JSON payload to `process.env.MAKE_BOOKING_WEBHOOK_URL`
   (see `lib/webhooks.js`). If that env var isn't set, this step is skipped
   and logged — it never blocks or fails the booking response.

The webhook payload shape (these are the exact field names to map in Make.com):

```json
{
  "id": "uuid",
  "name": "Jane Traveler",
  "phone": "443-555-0199",
  "email": "jane@example.com",
  "pickup": "BWI Airport",
  "destination": "Inner Harbor, Baltimore",
  "date": "2026-07-04",
  "time": "14:30",
  "submitted_at": "2026-07-04T18:02:11.000Z",
  "service_type": "Airport Transfer",
  "vehicle_type": "Premium SUV — Lincoln Navigator",
  "passengers": 3,
  "flight_number": "",
  "notes": "Flight UA123"
}
```

`date`/`time` come straight from HTML `<input type="date">` / `<input
type="time">` fields, so they're always `YYYY-MM-DD` / `HH:MM` (24-hour) —
clean to combine or filter on in Make.com.

## What you still need to build in Make.com (I can't do this part)

Make.com generates a unique webhook URL only when *you* add a "Custom
webhook" trigger module inside a scenario in your own account — there's no
way for me to create or predict that URL ahead of time. Once you have it,
send it to me (or set it yourself) as the `MAKE_BOOKING_WEBHOOK_URL` env var
on the `92limo` Vercel project (Production **and** Preview), then redeploy.

### Scenario A — "New Booking" (fires immediately, webhook-triggered)

1. **Webhooks → Custom webhook** — click "Add", name it e.g. `92limo-booking`.
   Make.com shows you the URL right after you save it — that's the one to
   send me. Click "Redetermine data structure" and submit a test booking
   from the live site (or `curl`, see below) so Make.com learns the field
   names.
2. **Router** — split into two branches:
   - **Branch 1 — Twilio → Send an SMS.** Connect your Twilio account.
     `To`: your dad's phone number in E.164 format (e.g. `+14105551234`) —
     type this in directly, it's not part of the webhook payload since it's
     always the same number. `Body`, e.g.:
     ```
     New 92 Limo booking: {{name}} {{phone}}
     {{pickup}} -> {{destination}}
     {{date}} {{time}}
     ```
   - **Branch 2 — Google Sheets → Add a Row.** Create a sheet first (see
     below), then map: Name, Phone, Email, Pickup, Destination, Date, Time,
     Submitted At from the matching webhook fields. Leave `Reminder Sent`
     and `Review Sent` columns blank — Scenarios B/C fill those in.
3. **(Missed-inquiry alert)** Add a third branch: **Tools → Sleep** for
   `3600` seconds, then **Twilio → Send an SMS** again to the same number,
   e.g. "URGENT — no response yet on {{name}}'s booking ({{phone}})."
   **Be aware:** this site has no concept of a booking being "responded to"
   — there's no admin dashboard/ticketing state for this form — so this
   second text fires unconditionally one hour after *every* booking, not
   only ones that actually went unanswered. If you want real suppression,
   the clean way is a "Mark Contacted" action in the 92limo-platform admin
   (a separate repo) that flips a column Make.com checks before sending;
   that's a larger follow-up task, not something this scenario alone can do.

**Google Sheet setup:** create a new Sheet named e.g. "92limo Bookings" with
a header row: `Name | Phone | Email | Pickup | Destination | Date | Time |
Submitted At | Reminder Sent | Review Sent`. This sheet is also the data
source for Scenarios B and C below.

### Scenario B — "24h Pickup Reminder" (scheduled)

1. **Schedule** trigger — every hour is a safe cadence (catches every
   pickup's 24-hours-out window without over-fetching).
2. **Google Sheets → Search Rows** — filter: `Date` equals tomorrow's date
   (`formatDate(addDays(now; 1); "YYYY-MM-DD")` in Make.com's function bar)
   AND `Reminder Sent` is empty.
3. **Iterator** over the matched rows.
4. **Gmail → Send an Email** to each row's `Email` — subject "Reminder: your
   92 Limo Service ride is tomorrow", body includes `Pickup`, `Destination`,
   `Date`, `Time`.
5. **Google Sheets → Update a Row** — set `Reminder Sent` = `TRUE` on that
   row, so the next hourly run doesn't re-send it.

### Scenario C — "Review Request" (scheduled, after the ride)

1. **Schedule** trigger — every few hours is enough.
2. **Google Sheets → Search Rows** — filter: combined `Date`+`Time` is more
   than ~3 hours in the past (pick a buffer that covers your typical ride
   length) AND `Review Sent` is empty.
3. **Iterator**.
4. **Gmail → Send an Email** — "Thanks for riding with 92 Limo Service!
   Mind leaving us a quick Google review?" with a link to your Google
   Business Profile review link. **You'll need to paste that link in
   yourself** — get it from Google Business Profile → "Ask for reviews" →
   copy link; I don't have access to your GBP account to pull it.
5. **Google Sheets → Update a Row** — set `Review Sent` = `TRUE`.

### Testing the webhook once you have the URL

```bash
curl -X POST "<your Make.com webhook URL>" \
  -H "Content-Type: application/json" \
  -d '{"id":"test","name":"Test Rider","phone":"443-555-0100","email":"test@example.com","pickup":"BWI Airport","destination":"Downtown Baltimore","date":"2026-07-04","time":"14:30","submitted_at":"2026-07-04T18:00:00.000Z"}'
```

Or just submit a real test booking on the live site once
`MAKE_BOOKING_WEBHOOK_URL` is set and deployed.
