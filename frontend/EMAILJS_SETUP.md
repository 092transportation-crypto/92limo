# Booking Form Email (EmailJS) Setup

The booking/inquiry form (`src/components/site/BookingForm.jsx`) sends each
submission by email using [EmailJS](https://www.emailjs.com/) — a client-side
email service (no backend required). Inquiries are delivered to
**092transportation@gmail.com**.

## One-time setup

1. Create a free account at https://www.emailjs.com/.
2. **Add an Email Service** (e.g., connect the Gmail account that should *send*
   the mail). Note the **Service ID** (looks like `service_xxxxxxx`).
3. **Create an Email Template** with the **To Email** set to
   `092transportation@gmail.com` (or use the `{{to_email}}` variable, which the
   form sends). Set **Reply-To** to `{{email}}` so you can reply to the customer.
   Note the **Template ID** (`template_xxxxxxx`).

   Suggested template **Subject**:
   ```
   {{subject}}
   ```
   Suggested template **Body**:
   ```
   New booking inquiry from 92limo.com

   Name:        {{name}}
   Phone:       {{phone}}
   Email:       {{email}}

   Service:     {{service_type}}
   Vehicle:     {{vehicle_type}}

   Pickup:      {{pickup_location}}
   Drop-off:    {{dropoff_location}}
   Date / Time: {{date}} {{time}}
   Passengers:  {{passengers}}
   Luggage:     {{luggage}}

   Notes:       {{notes}}
   ```
4. Copy your account's **Public Key** (Account → General → Public Key).

## Environment variables (set in Vercel → Settings → Environment Variables)

| Variable                         | Example            |
| -------------------------------- | ------------------ |
| `REACT_APP_EMAILJS_SERVICE_ID`   | `service_xxxxxxx`  |
| `REACT_APP_EMAILJS_TEMPLATE_ID`  | `template_xxxxxxx` |
| `REACT_APP_EMAILJS_PUBLIC_KEY`   | `xxxxxxxxxxxxxxxx` |

> These are `REACT_APP_*` build-time variables (Create React App), so **redeploy**
> after adding/changing them. They are public by design (EmailJS public key);
> protect against abuse with EmailJS's allowed-domains and rate-limit settings.

For local development, put the same three variables in `frontend/.env.local`.

## Template variables sent by the form

`to_email, subject, name, phone, email, service_type, vehicle_type,
pickup_location, dropoff_location, date, time, passengers, luggage, notes`

If the three env vars are not set, the form shows a friendly message asking the
visitor to call 877-679-0100 (and logs a console error) instead of silently
failing.
