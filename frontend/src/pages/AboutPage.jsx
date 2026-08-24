import { Link } from "react-router-dom";
import { Shield, Award, Clock, Heart, BadgeCheck, Building2, Plane, MapPin, Car, Radio, Users, FileCheck } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES, BRAND, FLEET, AIRPORTS } from "@/lib/data";

const VALUES = [
  { icon: Shield, title: "Safety First", desc: "Licensed, insured, and rigorously maintained vehicles operated by professional chauffeurs." },
  { icon: Award, title: "Uncompromising Quality", desc: "A meticulously detailed, late-model fleet and white-glove service on every ride." },
  { icon: Clock, title: "Punctuality", desc: "Traffic-aware planning and built-in buffers mean we're early, never late." },
  { icon: Heart, title: "Genuine Hospitality", desc: "Courteous, discreet chauffeurs who treat every guest like a VIP." },
];

// Verifiable company facts — the "who we are" block is built from these so
// the About page, footer and schema markup never drift apart.
const FACTS = [
  { icon: Building2, label: "Legal entity", value: "92 Transportation LLC, doing business as 92 Limo Service" },
  { icon: MapPin, label: "Headquarters", value: "Maryland-based, serving the DC–Baltimore metro" },
  { icon: BadgeCheck, label: "Operating authority", value: "Maryland Public Service Commission Carrier #6325" },
  { icon: FileCheck, label: "Insurance", value: "Commercial auto liability coverage on every vehicle; certificates of insurance available to corporate clients on request" },
  { icon: Award, label: "Experience", value: "15+ years of transportation industry experience across our leadership and chauffeur team" },
  { icon: Radio, label: "Dispatch", value: "24/7 live dispatch and reservations — 365 days a year" },
];

const STANDARDS = [
  "Licensed, background-checked and drug-tested chauffeurs",
  "Business attire, name-sign greetings and luggage assistance",
  "Defensive-driving standards and traffic-aware route planning",
  "Vehicles detailed before every ride and inspected daily",
  "Real-time flight tracking on every airport pickup",
  "Discretion: what is said in the car stays in the car",
];

const CORPORATE = [
  "Monthly consolidated invoicing and itemized receipts",
  "Dedicated account contact and priority dispatch",
  "Roadshow, conference and multi-stop coordination",
  "Certificates of insurance and vendor onboarding paperwork",
  "Standing airport pickups for visiting executives and clients",
];

const TERRITORY = [
  "Washington, DC — all neighborhoods",
  "Maryland — all 23 counties and Baltimore City",
  "Northern Virginia — Arlington, Alexandria, Fairfax, Tysons, Loudoun",
  "Delaware beaches and Wilmington · York & Lancaster, PA",
  "Long-distance to Philadelphia, New York City and the I-95 corridor",
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About 92 Transportation LLC | Maryland Chauffeurs | 92 Limo"
        description="92 Limo Service is 92 Transportation LLC — a Maryland-based, MD PSC-licensed (Carrier #6325) chauffeur company with 15+ years of industry experience, a real fleet, corporate accounts and 24/7 dispatch."
        path="/about"
      />
      <PageHero
        eyebrow="ABOUT US"
        title="The Standard for Luxury Chauffeur Service"
        subtitle="92 Transportation LLC is a Maryland-based, PSC-licensed chauffeur company built on punctuality, pristine vehicles, and a team with 15+ years of transportation industry experience."
        image={IMAGES.escaladeAngle}
        alt="92 Limo Service black Cadillac Escalade luxury SUV"
      />

      <section className="py-20 lg:py-24 bg-white" data-testid="about-who">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">Who We Are</h2>
            <div className="mt-5 space-y-4 text-neutral-700 leading-relaxed">
              <p>
                {BRAND.name} is the trade name of <strong className="text-[#0A0A0A]">92 Transportation LLC</strong>,
                a Maryland-based luxury ground transportation company licensed by the Maryland Public
                Service Commission as <strong className="text-[#0A0A0A]">Carrier #6325</strong>. We provide
                chauffeured airport, corporate, hourly, wedding and long-distance transportation across
                Washington DC, Maryland, and Northern Virginia.
              </p>
              <p>
                Our leadership and chauffeur team bring more than 15 years of transportation industry
                experience — airport operations, executive travel and event logistics — to every
                reservation. That experience shows in the details: chauffeurs positioned early, flights
                tracked in real time, and a live dispatcher on the phone 24 hours a day.
              </p>
              <p>
                Every vehicle we dispatch is commercially insured, inspected daily and detailed before
                each ride. Whether you're a frequent business traveler, planning a wedding, or
                coordinating group transportation, 92 Limo Service is the partner you can count on —
                every mile, every time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
              <img
                src={IMAGES.corporate}
                alt="Executive entering a black luxury SUV with a professional chauffeur"
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="about-facts">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">COMPANY FACTS</span>
            <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">Licensed, Insured &amp; Accountable</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={(i % 3) * 0.07}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
                  <f.icon size={24} strokeWidth={1.6} className="text-[#B8860B]" />
                  <div className="mt-4 text-xs uppercase tracking-wider text-neutral-500">{f.label}</div>
                  <p className="mt-1 text-[#0A0A0A] font-semibold leading-snug">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white" data-testid="about-standards">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-[#B8860B]" />
                <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">Professional Chauffeur Standards</h2>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-neutral-700">
                {STANDARDS.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <BadgeCheck size={16} className="text-[#B8860B] mt-0.5 shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <Building2 size={22} className="text-[#B8860B]" />
                <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">Corporate Accounts</h2>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-neutral-700">
                {CORPORATE.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <BadgeCheck size={16} className="text-[#B8860B] mt-0.5 shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              <Link to="/corporate-transportation" className="mt-5 inline-block text-sm font-semibold text-[#B8860B] hover:underline">
                Corporate transportation →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="about-territory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <Plane size={22} className="text-[#B8860B]" />
              <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">Airports We Cover</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AIRPORTS.map((a) => (
                <div key={a.code} className="bg-white border border-black/10 rounded-xl p-4">
                  <span className="text-lg font-display font-bold gold-text">{a.code}</span>
                  <p className="mt-1 text-sm text-neutral-700 font-medium">{a.name.replace(" Car Service", "")}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Real-time flight tracking on every pickup, with 60 minutes of complimentary waiting time on
              domestic arrivals and 90 minutes on international. Meet &amp; greet inside baggage claim is
              available for an additional charge.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-[#B8860B]" />
              <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">Service Territory</h2>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-700">
              {TERRITORY.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#B8860B] mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/service-areas" className="mt-5 inline-block text-sm font-semibold text-[#B8860B] hover:underline">
              View all service areas →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white" data-testid="about-fleet">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-8">
            <div className="flex items-center gap-3">
              <Car size={22} className="text-[#B8860B]" />
              <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">Our Real Fleet</h2>
            </div>
            <p className="mt-3 text-neutral-600 max-w-2xl">
              Late-model sedans, SUVs and Mercedes Sprinter vans owned and maintained by 92 Transportation
              LLC — no brokered rides. Reservations are made by vehicle class; see our{" "}
              <Link to="/policies#vehicle-substitution" className="text-[#B8860B] underline">Vehicle Substitution Policy</Link>.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {FLEET.map((v) => (
              <Link key={v.category} to="/fleet" className="group bg-[#F6F5F2] border border-black/10 rounded-xl p-4 hover:border-[#C9A227]/60 hover:shadow-md transition-all">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B8860B]">{v.category}</span>
                <span className="mt-1 block text-sm font-semibold text-[#0A0A0A]">{v.name}</span>
                <span className="mt-1 block text-xs text-neutral-500">{v.pax} passengers · {v.bags} bags</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">OUR VALUES</span>
            <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">What Drives Us</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.07}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300">
                  <v.icon size={24} strokeWidth={1.6} className="text-[#B8860B]" />
                  <h3 className="mt-4 text-base font-display font-semibold text-[#0A0A0A]">{v.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
