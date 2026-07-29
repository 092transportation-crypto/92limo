import { Link } from "react-router-dom";
import { Phone, ArrowRight, Baby, Armchair, CarFront, CalendarCheck, MessageSquarePlus, Wrench, ShieldCheck, Sparkles, BadgeCheck, UserCheck } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { BRAND, IMAGES } from "@/lib/data";

const SEAT_TYPES = [
  {
    icon: Baby,
    title: "Infant Car Seat",
    range: "0–12 months · up to 22 lbs",
    desc: "Rear-facing infant seats with a secure base, ideal for newborns and babies flying in or out of BWI, DCA, and IAD.",
  },
  {
    icon: Armchair,
    title: "Convertible Car Seat",
    range: "1–4 years",
    desc: "Forward- or rear-facing convertible seats sized for toddlers and preschoolers, adjusted to your child before pickup.",
  },
  {
    icon: CarFront,
    title: "Booster Seat",
    range: "4–8 years",
    desc: "Belt-positioning boosters that keep older kids safe and comfortable on longer airport rides.",
  },
];

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book Your Ride",
    desc: "Reserve your airport transfer online or by phone — any vehicle in our fleet, any hour of the day.",
  },
  {
    icon: MessageSquarePlus,
    title: "Request a Car Seat",
    desc: "Tell us your child's age and weight when you book, or add it in the notes — we'll match the right seat.",
  },
  {
    icon: Wrench,
    title: "Chauffeur Installs It",
    desc: "Your chauffeur installs and secures the seat before pickup, so it's ready the moment you step in.",
  },
];

const TRUST_SIGNALS = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "MD PSC Carrier #6325" },
  { icon: UserCheck, label: "Professional Chauffeurs" },
];

const FAQS = [
  {
    q: "Is there an extra charge for car seats?",
    a: "Car seats are available on request for a small add-on fee that is included in your fixed quote up front — no surprises at pickup. Let us know how many seats you need when you book and we'll confirm the exact price.",
  },
  {
    q: "What age/weight car seats do you provide?",
    a: "We provide three types: infant car seats for babies 0–12 months up to 22 lbs, convertible car seats for children 1–4 years, and booster seats for children 4–8 years. Tell us your child's age and weight when booking and we'll bring the correct seat.",
  },
  {
    q: "How do I request a car seat?",
    a: "Simply select a car seat when booking online, add it in the reservation notes, or call us at (877) 609-1919. We'll confirm the seat type with you before your trip and have it installed before pickup.",
  },
  {
    q: "Are the car seats clean and sanitized?",
    a: "Yes. Every car seat is inspected, cleaned, and sanitized before each trip. Our chauffeurs check straps, buckles, and padding, and seats are properly installed in the vehicle before your pickup.",
  },
  {
    q: "Can I bring my own car seat?",
    a: "Absolutely. You're welcome to bring your own car seat, and your chauffeur will help install it and store it during your trip. If you're flying, we can also stow it with your luggage at no extra charge.",
  },
];

export default function CarSeatServicePage() {
  return (
    <>
      <Seo
        title="Car Seat Airport Transfers MD | 92 Limo Service"
        description="Safe, clean car seats for infants, toddlers & kids on every airport transfer. Inspected, sanitized & chauffeur-installed. Book 24/7: (877) 609-1919."
        path="/car-seat-service"
      />
      <PageHero
        eyebrow="FAMILY AIRPORT TRANSFERS"
        title="Car Seat Service — Safe Airport Transportation for Families"
        subtitle="We provide safe, clean car seats for infants, toddlers, and children on all airport transfers — installed by your chauffeur before pickup."
        image={IMAGES.airportPickup}
        alt="Chauffeur-driven SUV with child car seat for a family airport transfer — 92 Limo Service"
      />

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-white" data-testid="landing-car-seat-service">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="space-y-5 text-[15px] sm:text-base text-neutral-700 leading-relaxed">
              <p>
                Traveling with little ones? 92 Limo Service provides safe, clean car seats for infants, toddlers, and
                children on all airport transfers to and from BWI, DCA, and IAD. Skip the hassle of hauling your own
                seat through the airport — request one when you book and it will be installed and waiting when your
                chauffeur arrives.
              </p>
              <p>
                Every seat is inspected before each trip and fitted to your child's age and weight, so your family
                rides in comfort and you travel with peace of mind. Available on every vehicle in our fleet, 24/7,
                across Maryland, Washington DC, and Northern Virginia.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                data-testid="landing-book-btn"
                className="btn-press inline-flex items-center justify-center gap-2 gold-gradient text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:brightness-110"
              >
                Book with Car Seat <ArrowRight size={18} />
              </Link>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-black/15 text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:border-[#C9A227] hover:text-[#B8860B] transition-all"
              >
                <Phone size={18} /> {BRAND.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Car seat types */}
      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="car-seat-types">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">CAR SEAT TYPES</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">
              The Right Seat for Every Age
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEAT_TYPES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-6 hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A227]/12 flex items-center justify-center">
                    <s.icon size={18} className="text-[#B8860B]" />
                  </div>
                  <h3 className="mt-4 text-base font-display font-semibold text-[#0A0A0A]">{s.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#B8860B]">{s.range}</p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-white" data-testid="car-seat-how-it-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">HOW IT WORKS</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">
              Three Simple Steps
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full gold-gradient text-[#0A0A0A] font-bold flex items-center justify-center tabnums">
                      {i + 1}
                    </span>
                    <s.icon size={20} className="text-[#B8860B]" />
                  </div>
                  <h3 className="mt-4 text-base font-display font-semibold text-[#0A0A0A]">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]" data-testid="car-seat-safety">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37]">SAFETY FIRST</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-white">
                Inspected, Cleaned, and Properly Installed
              </h2>
              <p className="mt-4 text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                All car seats are inspected, cleaned, and properly installed by professional chauffeurs before every
                trip. Straps, buckles, and anchors are checked each time, and every seat is sanitized between families
                — so your child rides as safely as they would in your own car.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { icon: ShieldCheck, label: "Inspected before every trip" },
                  { icon: Sparkles, label: "Cleaned & sanitized" },
                  { icon: Wrench, label: "Installed by your chauffeur" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    <b.icon size={16} className="text-[#D4AF37]" /> {b.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq faqs={FAQS} heading="Car Seat Service FAQs" schemaId="faq-car-seat-service" />

      {/* Trust signals */}
      <section className="py-10 bg-white border-t border-black/5" data-testid="car-seat-trust">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            {TRUST_SIGNALS.map((t) => (
              <span key={t.label} className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <t.icon size={18} className="text-[#B8860B]" /> {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Book with Car Seat"
        subtitle={`Reserve your family's airport transfer in minutes — car seat installed before pickup. Call ${BRAND.phone}, available 24/7.`}
      />
    </>
  );
}
