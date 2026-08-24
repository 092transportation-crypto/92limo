import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Seo } from "@/components/site/Seo";
import { LegalLayout, LH2, LP, LUL } from "@/components/site/LegalLayout";
import { POLICY, BRAND } from "@/lib/data";

// Combined policies page. Each section has a stable id so the footer and
// booking page can deep-link (e.g. /policies#cancellation).
export const POLICY_SECTIONS = [
  { id: "pricing", title: "Pricing & What's Included" },
  { id: "cancellation", title: "Cancellation Policy" },
  { id: "waiting-time", title: "Waiting-Time Policy" },
  { id: "no-show", title: "No-Show Policy" },
  { id: "vehicle-substitution", title: "Vehicle Substitution Policy" },
  { id: "payment-authorization", title: "Payment Authorization Policy" },
];

const Anchor = ({ id, children }) => (
  <div id={id} className="scroll-mt-28">
    <LH2>{children}</LH2>
  </div>
);

export default function PoliciesPage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
  }, [hash]);

  return (
    <>
      <Seo
        title="Booking & Cancellation Policies | 92 Limo Service"
        description="92 Limo Service booking policies — pricing inclusions, cancellation, waiting time (60/90 min airport, 15 min standard), no-show, vehicle substitution and payment authorization."
        path="/policies"
      />
      <LegalLayout eyebrow="POLICIES" title="Booking & Service Policies" effectiveDate="August 24, 2026">
        <LP>
          These policies apply to every reservation with 92 Limo Service ({BRAND.legal}, {BRAND.psc})
          and form part of our{" "}
          <Link to="/terms-conditions" className="text-[#B8860B] underline">Terms &amp; Conditions</Link>.
          Questions? Call {BRAND.phone} — we answer 24/7.
        </LP>
        <nav aria-label="Policy sections" className="mt-6 flex flex-wrap gap-2">
          {POLICY_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F6F5F2] border border-black/10 text-neutral-700 hover:border-[#C9A227]/60 hover:text-[#B8860B] transition-all"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <Anchor id="pricing">Pricing &amp; What's Included</Anchor>
        <LP>{POLICY.pricing}</LP>
        <LUL
          items={[
            "Quotes are flat and never metered or surge-priced. The base transportation charge is confirmed before you ride.",
            "Extra stops, additional mileage, after-hours or holiday service, child seats and special requests are itemized on your confirmation.",
            `${POLICY.meetGreetTitle} — ${POLICY.meetGreet} Curbside pickup at the arrivals level is always available at no extra charge.`,
            "A 3% processing fee applies to card payments made online through our instant-quote checkout.",
          ]}
        />

        <Anchor id="cancellation">Cancellation Policy</Anchor>
        <LUL
          items={[
            "Sedans & SUVs: cancel at least 24 hours before the scheduled pickup for a full refund. Cancellations within 24 hours may be charged up to 100% of the quoted fare.",
            "Sprinter vans, limousines and group/event bookings: cancel at least 72 hours before the scheduled pickup. Later cancellations may forfeit the deposit and/or be charged up to 100% of the quoted fare.",
            "Weddings, proms and multi-vehicle events: deposits are non-refundable within 14 days of the event date.",
            "To cancel or change a reservation, call (877) 609-1919 or reply to your confirmation email. Changes are subject to availability and may change the quoted rate — any difference is disclosed before we re-confirm.",
            "Approved refunds are issued to the original payment method and may take several business days to appear.",
          ]}
        />

        <Anchor id="waiting-time">Waiting-Time Policy</Anchor>
        <LP>{POLICY.waiting}</LP>
        <LUL
          items={[
            `Airport pickups — domestic arrivals: ${POLICY.waitAirportDomestic} minutes complimentary, timed from the actual landing time we track for your flight.`,
            `Airport pickups — international arrivals: ${POLICY.waitAirportInternational} minutes complimentary, to allow for passport control and customs.`,
            `All other pickups (home, office, hotel, venue): ${POLICY.waitStandard} minutes complimentary from the scheduled pickup time.`,
            "Additional waiting time is billed in 15-minute increments at the applicable rate for your vehicle and is always disclosed before confirmation.",
            "Flight tracking is included on every airport pickup — delays and early arrivals shift your pickup automatically at no charge.",
          ]}
        />

        <Anchor id="no-show">No-Show Policy</Anchor>
        <LUL
          items={[
            "A reservation is treated as a no-show when the passenger cannot be reached and does not appear within the complimentary waiting-time allowance above.",
            "No-shows are charged the full quoted fare plus any waiting time and applicable charges already incurred.",
            "Airport arrivals: please call or text (877) 609-1919 before leaving the terminal if you cannot locate your chauffeur. Leaving with another provider without notifying us is treated as a no-show.",
            "If your plans change, cancelling before the pickup time (see Cancellation Policy) always costs less than a no-show.",
          ]}
        />

        <Anchor id="vehicle-substitution">Vehicle Substitution Policy</Anchor>
        <LUL
          items={[
            "Vehicle images and model names on this site are representative. Your reservation is for a vehicle class (e.g. Business Sedan, Premium SUV, Sprinter) — the exact make and model may vary within that class.",
            "If the reserved vehicle becomes unavailable due to mechanical issues, safety concerns or circumstances beyond our control, we will provide a comparable or upgraded vehicle at no additional cost.",
            "We will never substitute a smaller vehicle than the class you reserved without your agreement. If no comparable vehicle is available, you may cancel for a full refund.",
            "Requests for a specific make or model are accommodated when possible but cannot be guaranteed.",
          ]}
        />

        <Anchor id="payment-authorization">Payment Authorization Policy</Anchor>
        <LUL
          items={[
            "A valid credit or debit card is required to confirm every reservation. By booking you authorize 92 Transportation LLC to charge that card for the confirmed fare and any applicable charges disclosed at confirmation.",
            "Online instant-quote bookings are charged at the time of booking through our secure Stripe checkout. Requested (non-instant) bookings are charged only after we confirm the rate with you.",
            "A temporary pre-authorization hold may be placed on your card before the trip; it is released or applied to the final charge after service.",
            "Post-trip charges — additional waiting time, extra stops, tolls, parking, gratuity you elect to add, or cleaning/damage fees — are itemized on your receipt and charged to the card on file.",
            "Corporate accounts may be invoiced under separate written terms.",
            "Disputed charges should be reported within 7 days to info@92limo.com so we can review trip records with you.",
          ]}
        />

        <LH2>Contact</LH2>
        <LP>
          92 Limo Service ({BRAND.legal})
          <br />
          Phone: {BRAND.phone}
          <br />
          Email: {BRAND.email}
          <br />
          See also our{" "}
          <Link to="/privacy-policy" className="text-[#B8860B] underline">Privacy Policy</Link> and{" "}
          <Link to="/terms-conditions" className="text-[#B8860B] underline">Terms &amp; Conditions</Link>.
        </LP>
      </LegalLayout>
    </>
  );
}
