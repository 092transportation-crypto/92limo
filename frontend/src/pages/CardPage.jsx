import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquareText,
  CalendarCheck,
  Globe,
  ShieldCheck,
  Clock,
  Plane,
  UserRoundCheck,
  UserPlus,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";

const PHONE_DISPLAY = "(877) 609-1919";
const PHONE_E164 = "+18776091919";

const ACTIONS = [
  { label: "Call Now", sub: PHONE_DISPLAY, href: `tel:${PHONE_E164}`, Icon: Phone, primary: true },
  { label: "Text Us", sub: PHONE_DISPLAY, href: `sms:${PHONE_E164}`, Icon: MessageSquareText },
  { label: "Book a Ride", sub: "Instant online booking", href: "/booking", Icon: CalendarCheck },
  { label: "Visit Website", sub: "92limo.com", href: "/", Icon: Globe },
];

const BADGES = [
  { Icon: ShieldCheck, label: "Licensed & Insured", sub: "Maryland Carrier" },
  { Icon: Clock, label: "24/7 Availability", sub: "Day or night" },
  { Icon: Plane, label: "Flight Tracking", sub: "Real-time monitoring" },
  { Icon: UserRoundCheck, label: "Professional", sub: "Chauffeurs" },
];

const FLEET = [
  { name: "Business Sedan", detail: "Mercedes E-Class", img: "/images/mercedes-e-class.jpg" },
  { name: "First Class Sedan", detail: "BMW 7 Series", img: "/fleet/bmw-7-series.jpg" },
  { name: "Luxury SUV", detail: "Chevrolet Suburban", img: "/images/chevy-suburban.jpg" },
  { name: "Sprinter Van", detail: "Mercedes Sprinter", img: "/images/mercedes-sprinter.jpg" },
];

const AREAS = ["Maryland", "Washington DC", "Virginia", "Delaware"];

const SOCIALS = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/p/92-Limo-Services-61564505260156/" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/92_limo_service/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function CardPage() {
  useEffect(() => {
    document.title = "92 Limo Service | Premier Luxury Transportation";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.55), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.4), transparent 70%)" }}
      />

      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-md flex-col px-5 pb-12 pt-12"
      >
        {/* Hero */}
        <motion.header variants={fadeUp} className="text-center">
          <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border border-[#C9A227]/40 shadow-[0_0_40px_rgba(201,162,39,0.25)]">
            <img src="/92-limo-logo.png" alt="92 Limo Service logo" className="h-full w-full object-cover" />
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight">
            <span className="gold-text">92 Limo Service</span>
          </h1>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
            Premier Luxury Transportation
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
        </motion.header>

        {/* Contact actions */}
        <motion.section variants={fadeUp} aria-label="Contact options" className="mt-8 grid grid-cols-2 gap-3">
          {ACTIONS.map(({ label, sub, href, Icon, primary }) => (
            <a
              key={label}
              href={href}
              className={`btn-press flex min-h-[92px] flex-col items-center justify-center gap-1.5 rounded-2xl px-3 py-4 text-center ${
                primary
                  ? "gold-gradient text-black shadow-[0_8px_30px_rgba(201,162,39,0.35)]"
                  : "border border-[#C9A227]/25 bg-white/[0.04] text-white"
              }`}
            >
              <Icon className={`h-6 w-6 ${primary ? "text-black" : "text-[#C9A227]"}`} strokeWidth={1.8} />
              <span className="text-sm font-bold">{label}</span>
              <span className={`text-[11px] ${primary ? "text-black/70" : "text-neutral-400"}`}>{sub}</span>
            </a>
          ))}
        </motion.section>

        {/* Badges */}
        <motion.section variants={fadeUp} aria-label="Why ride with us" className="mt-8 grid grid-cols-2 gap-3">
          {BADGES.map(({ Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3"
            >
              <Icon className="h-5 w-5 shrink-0 text-[#C9A227]" strokeWidth={1.8} />
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-tight">{label}</p>
                <p className="text-[11px] text-neutral-500">{sub}</p>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Fleet */}
        <motion.section variants={fadeUp} aria-label="Our fleet" className="mt-10">
          <h2 className="font-display text-center text-xl font-bold text-white">
            Our <span className="gold-text">Fleet</span>
          </h2>
          <div className="-mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FLEET.map(({ name, detail, img }) => (
              <div
                key={name}
                className="w-56 shrink-0 snap-center overflow-hidden rounded-2xl border border-[#C9A227]/20 bg-[#111]"
              >
                <img src={img} alt={`${name} — ${detail}`} className="h-36 w-full object-cover" loading="lazy" />
                <div className="px-4 py-3">
                  <p className="text-sm font-bold">{name}</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#C9A227]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Service areas */}
        <motion.section variants={fadeUp} aria-label="Service areas" className="mt-9 text-center">
          <p className="mb-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            <MapPin className="h-3.5 w-3.5 text-[#C9A227]" /> Serving
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 text-[13px] font-medium text-[#E3C04A]"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Save contact */}
        <motion.section variants={fadeUp} className="mt-10">
          <a
            href="/92limo.vcf"
            download="92-limo-service.vcf"
            className="btn-press flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#C9A227] py-4 text-base font-bold text-[#E3C04A]"
          >
            <UserPlus className="h-5 w-5" strokeWidth={1.8} />
            Save Contact
          </a>
        </motion.section>

        {/* Socials */}
        <motion.footer variants={fadeUp} className="mt-9 text-center">
          <div className="flex justify-center gap-4">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`92 Limo Service on ${label}`}
                className="btn-press flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]"
              >
                <Icon className="h-5 w-5 text-[#C9A227]" strokeWidth={1.8} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-[11px] text-neutral-600">
            © {new Date().getFullYear()} 92 Limo Service · {PHONE_DISPLAY}
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}
