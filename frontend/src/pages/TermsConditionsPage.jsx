import { Seo } from "@/components/site/Seo";
import { LegalLayout, LH2, LP, LUL } from "@/components/site/LegalLayout";

export default function TermsConditionsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions | 92 Limo Service"
        description="92 Limo Service Terms & Conditions — SMS terms, bookings, payment, cancellation, liability, and service area across DC, Maryland & Virginia."
        path="/terms-conditions"
      />
      <LegalLayout eyebrow="LEGAL" title="Terms and Conditions" effectiveDate="June 29, 2026">
        <LP>
          These Terms and Conditions ("Terms") govern your use of the transportation services
          provided by 92 Limo Service, operated by 92 Transportation LLC ("92 Limo Service," "we,"
          "us," or "our"). By booking or using our services, you ("Client" or "Customer") agree to
          these Terms.
        </LP>

        <LH2>SMS Terms &amp; Conditions</LH2>
        <LP>
          <strong className="text-[#0A0A0A]">1. SMS Consent Communication.</strong> Phone numbers
          obtained as part of the SMS consent process will not be shared with third parties for
          marketing purposes.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">2. Types of SMS Communications.</strong> Recipients may
          receive appointment reminders, follow-up messages, billing inquiries, and transportation
          reservation updates.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">3. Message Frequency.</strong> Message frequency may
          vary; you may receive up to 5 SMS messages per week related to your appointments and
          transportation reservations.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">4. Potential Fees.</strong> Standard message and data
          rates may apply depending on your carrier and plan, and may vary for domestic and
          international messages.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">5. Opt-In Method.</strong> Customers opt in to receive
          SMS messages by submitting an online form on our website.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">6. Opt-Out Method.</strong> You may opt out at any time
          by replying "STOP" to any SMS message, or by contacting us directly.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">7. Help.</strong> For help, reply HELP to any SMS
          message, or contact us at info@92limo.com.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">8. Additional Options.</strong> If you do not wish to
          receive SMS messages, simply do not check the SMS consent box on our forms.
        </LP>
        <LP>
          <strong className="text-[#0A0A0A]">9. Standard Disclosures.</strong> Message and data rates
          may apply. Text STOP to opt out at any time. Text HELP, or visit our Privacy Policy and
          these Terms &amp; Conditions, for assistance. Message frequency may vary.
        </LP>

        <LH2>Transportation Service Terms</LH2>

        <LH2>1. Bookings &amp; Reservations</LH2>
        <LP>
          Reservations may be made by phone, email, or through the booking form on our website.
          All reservations are subject to vehicle availability and are confirmed only once you
          receive a confirmation from us. A reservation is considered binding once confirmed. You
          are responsible for providing accurate pickup and drop-off details, contact information,
          flight numbers (where applicable), passenger count, and any special requests at the time
          of booking.
        </LP>

        <LH2>2. Payment Terms</LH2>
        <LUL
          items={[
            "Quoted rates are all-inclusive of base fare, tolls, taxes, and standard gratuity unless otherwise stated.",
            "Additional charges may apply for extra stops, extended wait time, additional mileage, after-hours or holiday service, and special requests.",
            "We accept major credit and debit cards. A valid card may be required to guarantee a reservation.",
            "For certain bookings (hourly, group, weddings, or long-distance), a deposit may be required at the time of booking, with the balance due before or on the date of service.",
            "Wait time beyond the included grace period is billed in 15-minute increments at the applicable hourly rate.",
          ]}
        />

        <LH2>3. Cancellation &amp; Refund Policy</LH2>
        <LUL
          items={[
            "Sedans & SUVs: cancel at least 24 hours before the scheduled pickup for a full refund. Cancellations within 24 hours may be charged up to 100% of the fare.",
            "Vans, Limousines & Group/Event Bookings: cancel at least 72 hours before the scheduled pickup. Later cancellations may forfeit the deposit and/or be charged up to 100% of the quoted fare.",
            "No-shows are charged the full fare. For airport pickups, please contact us before leaving the terminal — leaving without notifying us is treated as a no-show.",
            "Approved refunds are issued to the original payment method and may take several business days to process.",
          ]}
        />

        <LH2>4. Wait Time, Delays &amp; Flight Tracking</LH2>
        <LP>
          For airport arrivals we track your flight and adjust pickup for early arrivals or delays.
          A complimentary grace period is typically provided (commonly 60 minutes for airport
          arrivals and 15 minutes for all other pickups); additional wait time is billed at the
          applicable rate. While we plan routes carefully and build in buffers, we are not
          responsible for delays caused by traffic, weather, road conditions, or other
          circumstances beyond our reasonable control.
        </LP>

        <LH2>5. Passenger Conduct</LH2>
        <LUL
          items={[
            "Seat belts must be worn where provided, and all passengers must comply with applicable laws.",
            "Smoking is prohibited in all vehicles.",
            "Alcohol consumption is permitted only where lawful and only by passengers of legal drinking age; illegal substances are strictly prohibited.",
            "The chauffeur may refuse service to, or end a trip for, any passenger who is disruptive, intoxicated to the point of risk, or behaving unlawfully or unsafely, without refund.",
            "The number of passengers may not exceed the vehicle's lawful seating capacity.",
          ]}
        />

        <LH2>6. Damage &amp; Cleaning Fees</LH2>
        <LP>
          Clients are responsible for damage to the vehicle caused by them or any member of their
          party during the service. Excessive cleaning resulting from spills, sickness, or misuse
          may incur a cleaning fee. Any such fees will be charged to the payment method on file.
        </LP>

        <LH2>7. Liability</LH2>
        <LP>
          92 Limo Service is not responsible for personal belongings or luggage left in the vehicle;
          please confirm you have all items before exiting. To the fullest extent permitted by law,
          our total liability arising out of or relating to the service shall not exceed the amount
          paid for that service. We are not liable for indirect, incidental, or consequential
          damages, including missed flights, events, or connections, except where caused by our
          gross negligence or willful misconduct.
        </LP>

        <LH2>8. Force Majeure</LH2>
        <LP>
          We are not liable for failure or delay in performance due to events beyond our reasonable
          control, including weather, natural disasters, accidents, road closures, strikes,
          mechanical failure, or government actions. Where reasonably possible, we will provide an
          alternate vehicle or reschedule the service.
        </LP>

        <LH2>9. Service Area</LH2>
        <LP>
          92 Limo Service operates throughout Washington, D.C., Maryland, and Northern Virginia —
          including Annapolis, Baltimore, the greater DMV region, and the BWI, DCA, IAD, Martin
          State (MTN), and Philadelphia (PHL) airports. We also provide long-distance and
          point-to-point service to destinations such as New York City, Philadelphia, and Delaware.
          Service outside our standard area may be available by arrangement and may be subject to
          additional charges.
        </LP>

        <LH2>10. Changes to These Terms</LH2>
        <LP>
          We may update these Terms from time to time. The version in effect at the time of your
          booking applies to that booking. Continued use of our services after changes are posted
          constitutes acceptance of the updated Terms.
        </LP>

        <LH2>11. Governing Law</LH2>
        <LP>
          These Terms are governed by the laws of the State of Maryland, without regard to its
          conflict-of-law provisions. Any disputes shall be resolved in the state or federal courts
          located in Maryland.
        </LP>

        <LH2>12. Contact</LH2>
        <LP>
          92 Limo Service
          <br />
          Phone: (877) 609-1919
          <br />
          Email: info@92limo.com
          <br />
          Website:{" "}
          <a href="https://92limo.com" className="text-[#B8860B] underline">
            https://92limo.com
          </a>
        </LP>
      </LegalLayout>
    </>
  );
}
