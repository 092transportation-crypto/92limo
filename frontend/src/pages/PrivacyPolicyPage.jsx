import { Seo } from "@/components/site/Seo";
import { LegalLayout, LH2, LH3, LP, LUL } from "@/components/site/LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy & SMS Terms | 92 Limo Service"
        description="92 Limo Service Privacy Policy & SMS Terms — what we collect, how we use it, and SMS opt-in/opt-out. Mobile opt-in data is never shared for marketing."
        path="/privacy-policy"
      />
      <LegalLayout
        eyebrow="LEGAL"
        title="Privacy Policy & SMS Terms and Conditions"
        effectiveDate="June 29, 2026"
      >
        <LH2>Privacy Policy</LH2>

        <LH3>Information We Collect</LH3>
        <LP>92 Limo Service may collect the following information from customers:</LP>
        <LUL
          items={[
            "Name",
            "Phone number",
            "Email address",
            "Billing information",
            "Service and rental information",
            "Information submitted through phone calls, forms, emails, or customer interactions",
          ]}
        />

        <LH3>How We Use Your Information</LH3>
        <LP>We use your information to:</LP>
        <LUL
          items={[
            "Provide rental services and customer support",
            "Schedule deliveries and pickups",
            "Send appointment reminders and service updates",
            "Process payments and billing inquiries",
            "Respond to customer requests",
            "Send SMS communications when consent has been provided",
          ]}
        />

        <LH3>How We Share Your Information</LH3>
        <LP>
          We do not sell, rent, or share personal information with third parties for marketing
          purposes.
        </LP>
        <LP>
          We may share information with service providers who assist us in operating our business
          and delivering services. These providers are required to protect your information and use
          it only for authorized business purposes.
        </LP>

        <LH3>SMS Consent</LH3>
        <LP>
          Customers may provide consent to receive SMS messages by submitting a web form via our
          website{" "}
          <a href="https://92limo.com/contact" className="text-[#B8860B] underline">
            https://92limo.com/contact
          </a>
          .
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">
            Mobile opt-in information and SMS consent data will never be sold, rented, or shared with
            any third parties or affiliates for marketing or promotional purposes.
          </strong>{" "}
          This includes your phone number and the fact that you opted in. No mobile information is
          shared with third parties for their own marketing.
        </LP>
        <LP>
          Phone numbers collected for SMS communications are used solely by 92 Limo Service for the
          purposes for which consent was provided (such as reservation updates and customer care).
        </LP>

        <LH2>SMS Terms and Conditions</LH2>

        <LH3>Types of Messages You May Receive</LH3>
        <LP>By providing consent, you may receive SMS messages related to:</LP>
        <LUL
          items={[
            "Rental confirmations",
            "Delivery and pickup notifications",
            "Appointment reminders",
            "Account notifications",
            "Billing and payment reminders",
            "Customer service follow-ups",
            "Service updates regarding your rental order",
          ]}
        />

        <LH3>Message Frequency</LH3>
        <LP>
          Messaging frequency may vary depending on your interactions with 92 Limo Service.
          Customers may receive approximately 2–5 messages per customer related to active rentals,
          scheduling, or account updates.
        </LP>

        <LH3>Message and Data Rates</LH3>
        <LP>
          Message and data rates may apply. Charges are determined by your mobile carrier and
          service plan.
        </LP>

        <LH3>Opt-In Method</LH3>
        <LP>
          Customers opt in to receive SMS messages by submitting the web form on our website (
          <a href="https://92limo.com/contact" className="text-[#B8860B] underline">
            https://92limo.com/contact
          </a>
          ), or by providing verbal consent during a phone call or in-person conversation with a 92
          Limo Service representative.
        </LP>
        <LP>At the time consent is obtained, customers are informed that:</LP>
        <LUL
          items={[
            "Message frequency may vary.",
            "Message and data rates may apply.",
            "Reply STOP to unsubscribe.",
            "Reply HELP for assistance.",
          ]}
        />

        <LH3>Opt-Out</LH3>
        <LP>
          You may opt out of SMS communications at any time by replying STOP to any message.
        </LP>
        <LP>
          After opting out, you will receive a confirmation message and no further SMS messages will
          be sent unless you provide new consent or reply START to re-subscribe.
        </LP>

        <LH3>Help</LH3>
        <LP>
          For assistance, reply HELP to any SMS message or contact us through our website:{" "}
          <a href="https://92limo.com/contact" className="text-[#B8860B] underline">
            https://92limo.com/contact
          </a>
          .
        </LP>

        <LH3>Standard Messaging Disclosures</LH3>
        <LUL
          items={[
            "Messaging frequency may vary.",
            "Message and data rates may apply.",
            "To opt out at any time, text STOP.",
            "For assistance, text HELP or visit https://92limo.com/contact.",
            "SMS consent is not shared with third parties or affiliates for marketing purposes.",
          ]}
        />

        <LH3>Contact Information</LH3>
        <LP>
          92 Limo Service
          <br />
          Phone: 877-679-0100
          <br />
          Email: info@92limo.com
          <br />
          Website:{" "}
          <a href="https://92limo.com" className="text-[#B8860B] underline">
            https://92limo.com
          </a>
        </LP>

        <LH3>Policy Links</LH3>
        <LP>
          Visit{" "}
          <a href="https://92limo.com/privacy-policy" className="text-[#B8860B] underline">
            https://92limo.com/privacy-policy
          </a>{" "}
          for our Privacy Policy and SMS Terms and Conditions.
        </LP>
      </LegalLayout>
    </>
  );
}
