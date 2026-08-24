import { Link } from "react-router-dom";
import { BadgeDollarSign, Timer, UserCheck, FileText } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { POLICY } from "@/lib/data";

// Policy summary shown beneath the booking form so the pricing, waiting-time
// and meet & greet language matches the FAQ, service pages and emails exactly.
const ITEMS = [
  { icon: BadgeDollarSign, title: "What your quote includes", text: POLICY.pricing, to: "/policies#pricing" },
  { icon: Timer, title: "Waiting time", text: POLICY.waiting, to: "/policies#waiting-time" },
  { icon: UserCheck, title: POLICY.meetGreetTitle, text: POLICY.meetGreet, to: "/policies#pricing" },
];

export const BookingPolicies = () => (
  <section data-testid="booking-policies" className="py-14 bg-[#F6F5F2] border-t border-black/5">
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <Reveal className="mb-8">
        <span className="text-xs font-semibold tracking-widest text-[#B8860B]">BEFORE YOU BOOK</span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">Pricing &amp; Waiting-Time Policy</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.07}>
            <div className="h-full bg-white border border-black/10 rounded-2xl p-6">
              <it.icon size={22} strokeWidth={1.6} className="text-[#B8860B]" />
              <h3 className="mt-4 text-base font-display font-semibold text-[#0A0A0A]">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{it.text}</p>
              <Link to={it.to} className="mt-4 inline-block text-sm font-semibold text-[#B8860B] hover:underline">
                Read the full policy →
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-6 flex items-center gap-2 text-sm text-neutral-600">
          <FileText size={16} className="text-[#B8860B]" />
          See our{" "}
          <Link to="/policies#cancellation" className="font-semibold text-[#B8860B] hover:underline">Cancellation</Link>,{" "}
          <Link to="/policies#no-show" className="font-semibold text-[#B8860B] hover:underline">No-Show</Link>,{" "}
          <Link to="/policies#vehicle-substitution" className="font-semibold text-[#B8860B] hover:underline">Vehicle Substitution</Link>{" "}
          and{" "}
          <Link to="/policies#payment-authorization" className="font-semibold text-[#B8860B] hover:underline">Payment Authorization</Link>{" "}
          policies.
        </p>
      </Reveal>
    </div>
  </section>
);
