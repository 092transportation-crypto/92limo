import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ChevronRight, Star, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/data";

// Our own BMW 7 Series (G12) — a real fleet photo, served in two sizes so
// phones download the small one. The homepage hero is the only place it's used;
// IMAGES.heroBg (landing pages, OG images) is unchanged.
const HERO_SRC_LG = "/images/site/hero-bmw-7-series-1600.webp";
const HERO_SRC_SM = "/images/site/hero-bmw-7-series-960.webp";
import { QuoteModal } from "@/components/site/QuoteModal";

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

export const Hero = () => {
  const ref = useRef(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Scroll-linked parallax: the car drifts slower than the page and the copy
  // fades as you leave. Disabled for prefers-reduced-motion.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Depth: the car layer leans a few degrees toward the cursor (desktop with a
  // real mouse only; never on touch or with reduced motion).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 60, damping: 18, mass: 0.6 };
  const rotY = useSpring(useTransform(px, [-0.5, 0.5], [-3.5, 3.5]), spring);
  const rotX = useSpring(useTransform(py, [-0.5, 0.5], [2.5, -2.5]), spring);
  const shiftX = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), spring);
  const rimX = useSpring(useTransform(px, [-0.5, 0.5], ["58%", "70%"]), spring);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    if (reduceMotion || typeof window === "undefined") return undefined;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)");
    const update = () => setTiltEnabled(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, [reduceMotion]);

  const onPointerMove = (e) => {
    if (!tiltEnabled || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <>
    <section
      ref={ref}
      data-testid="hero-section"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative min-h-[100svh] flex items-center overflow-hidden grain bg-[#090A0C] [perspective:1400px]"
    >
      {/* ---- Car layer: parallax (scroll) + depth tilt (cursor) ---- */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <motion.div
          className="absolute inset-y-0 right-0 w-full lg:w-[62%] hero-car-mask will-change-transform"
          style={tiltEnabled ? { rotateX: rotX, rotateY: rotY, x: shiftX } : undefined}
        >
          <img
            src={HERO_SRC_LG}
            srcSet={`${HERO_SRC_SM} 960w, ${HERO_SRC_LG} 1600w`}
            sizes="(min-width: 1024px) 62vw, 100vw"
            alt="Black BMW 7 Series sedan from the 92 Limo Service fleet"
            width={1600}
            height={1200}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[64%_50%] lg:object-[34%_58%] hero-settle"
          />
          {/* Gold rim light along the roofline + warm floor glow under the car */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 hero-rim mix-blend-screen pointer-events-none"
            style={tiltEnabled ? { "--rim-x": rimX } : undefined}
          />
          <div aria-hidden="true" className="absolute inset-0 hero-floor mix-blend-screen pointer-events-none" />
          {/* One slow showroom light sweep across the paint */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="hero-sweep" />
          </div>
        </motion.div>
        {/* Legibility overlays (same palette as before, lighter on the car side) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/35 to-[#090A0C]/70 lg:via-transparent lg:to-[#090A0C]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/60 to-transparent lg:via-[#090A0C]/30" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-3xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 mb-6">
            <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wide text-[#D4AF37]">
              PREMIER CHAUFFEUR SERVICE · BWI AIRPORT · DC · MD · VA
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight">
            Luxury Black Car Service in{" "}
            <span className="gold-text">Washington DC, Maryland &amp; Virginia</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Flat-rate, flight-tracked BWI Airport limo and car service, plus
            corporate travel, hourly chauffeur service, weddings, and
            long-distance transportation — delivered with precision,
            discretion, and uncompromising comfort.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-4">
            <motion.button
              type="button"
              data-testid="hero-quote-btn"
              onClick={() => setQuoteOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group btn-press gold-gradient text-[#090A0C] font-extrabold px-10 py-5 sm:px-12 sm:py-6 rounded-full hover:brightness-110 flex items-center justify-center gap-2.5 text-lg sm:text-xl shadow-[0_0_50px_-8px_rgba(201,162,39,0.85)]"
            >
              Get a Free Quote
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <Link
              data-testid="hero-fleet-btn"
              to="/fleet"
              className="btn-press border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center gap-2 text-base self-center sm:self-auto"
            >
              View Fleet
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-neutral-400">
            {["24/7 Reservations", "Flight Tracking", "All-Inclusive Pricing"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                {t}
              </div>
            ))}
          </motion.div>

          <motion.a
            variants={item}
            href={BRAND.phoneHref}
            data-testid="hero-call-link"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
          >
            <Phone size={16} /> Call {BRAND.phone}
          </motion.a>
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
    <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};
