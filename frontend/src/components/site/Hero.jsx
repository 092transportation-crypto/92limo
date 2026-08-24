import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Phone, ChevronRight, Star, ChevronDown, MapPin, Calendar, Clock, Users, ShieldCheck, Plane } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/data";
import { AddressAutocomplete } from "@/components/site/AddressAutocomplete";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const TRUST = [
  { icon: Star, label: "5.0 Google Rating", sub: "Verified reviews" },
  { icon: ShieldCheck, label: BRAND.psc, sub: "Licensed & insured" },
  { icon: Plane, label: "Flight Tracking", sub: "Every airport pickup" },
  { icon: Clock, label: "24/7 Dispatch", sub: "365 days a year" },
];

const fieldCls =
  "w-full h-11 rounded-lg bg-white/[0.06] border border-white/15 px-3 text-sm text-white placeholder:text-neutral-500 " +
  "focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors [color-scheme:dark]";

// Quick-quote widget: collects the trip basics and hands them to the full
// booking form (which prefills from the query string) for the instant quote.
const QuoteWidget = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState({ pickup: "", dropoff: "", date: "", time: "", passengers: "1" });
  const set = (k, v) => setQ((s) => ({ ...s, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(q).forEach(([k, v]) => {
      if (String(v).trim()) params.set(k, String(v).trim());
    });
    navigate(`/booking?${params.toString()}#book`);
  };

  return (
    <form
      onSubmit={submit}
      data-testid="hero-quote-widget"
      className="mt-8 w-full rounded-2xl border border-[#D4AF37]/30 bg-[#0c0d10]/85 backdrop-blur-md p-4 sm:p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <label className="lg:col-span-2 block">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
            <MapPin size={12} className="text-[#D4AF37]" /> Pickup
          </span>
          <AddressAutocomplete
            id="hero-pickup"
            testId="hero-pickup"
            inputClassName={fieldCls}
            placeholder="Address or airport (BWI, DCA, IAD)"
            value={q.pickup}
            onChange={(v) => set("pickup", v)}
          />
        </label>
        <label className="lg:col-span-2 block">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
            <MapPin size={12} className="text-[#D4AF37]" /> Destination
          </span>
          <AddressAutocomplete
            id="hero-dropoff"
            testId="hero-dropoff"
            inputClassName={fieldCls}
            placeholder="Address, hotel, or airport"
            value={q.dropoff}
            onChange={(v) => set("dropoff", v)}
          />
        </label>
        <label className="block">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
            <Calendar size={12} className="text-[#D4AF37]" /> Date
          </span>
          <input data-testid="hero-date" type="date" className={fieldCls} value={q.date} onChange={(e) => set("date", e.target.value)} />
        </label>
        <label className="block">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
            <Clock size={12} className="text-[#D4AF37]" /> Time
          </span>
          <input data-testid="hero-time" type="time" className={fieldCls} value={q.time} onChange={(e) => set("time", e.target.value)} />
        </label>
        <label className="block sm:col-span-1 lg:col-span-1">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
            <Users size={12} className="text-[#D4AF37]" /> Passengers
          </span>
          <input data-testid="hero-passengers" type="number" min="1" max="14" className={fieldCls} value={q.passengers} onChange={(e) => set("passengers", e.target.value)} />
        </label>
        <div className="sm:col-span-1 lg:col-span-5 flex items-end">
          <button
            type="submit"
            data-testid="hero-quote-btn"
            className="group btn-press w-full h-11 gold-gradient text-[#090A0C] font-bold rounded-lg hover:brightness-110 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Get Instant Quote
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </form>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  // Scroll-linked parallax: background drifts and zooms, content fades as you leave.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-center overflow-hidden grain"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={IMAGES.heroBg}
          alt="Luxury black car service driving through Washington DC at night"
          className="w-full h-full object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/70 to-[#090A0C]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-4xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 mb-6">
            <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wide text-[#D4AF37]">
              PREMIER CHAUFFEUR SERVICE · DC · MD · VA
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-display font-bold text-white leading-[1.1] tracking-tight">
            Luxury Airport &amp; Chauffeur Service —{" "}
            <span className="gold-text whitespace-nowrap">BWI • DCA • IAD</span>{" "}
            <span className="text-white/90">• DC • Maryland • Northern Virginia</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Professional airport transfers, corporate travel, hourly chauffeur
            service, weddings, and long-distance transportation — delivered with
            precision, discretion, and uncompromising comfort.
          </motion.p>

          <motion.div variants={item}>
            <QuoteWidget />
          </motion.div>

          <motion.div
            variants={item}
            data-testid="hero-trust"
            className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {TRUST.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                <span className="w-9 h-9 shrink-0 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center">
                  <Icon size={16} className={`text-[#D4AF37] ${Icon === Star ? "fill-[#D4AF37]" : ""}`} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white leading-tight">{label}</span>
                  <span className="block text-[11px] text-neutral-400">{sub}</span>
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={BRAND.phoneHref}
              data-testid="hero-call-link"
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#D4AF37] transition-colors"
            >
              <Phone size={16} /> Call {BRAND.phone}
            </a>
            <Link data-testid="hero-book-btn" to="/booking" className="text-neutral-300 hover:text-[#D4AF37] transition-colors">
              Full booking form →
            </Link>
            <Link data-testid="hero-fleet-btn" to="/fleet" className="text-neutral-300 hover:text-[#D4AF37] transition-colors">
              View fleet →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-[#D4AF37]/80"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={20} className="float-soft" />
      </motion.div>
    </section>
  );
};
