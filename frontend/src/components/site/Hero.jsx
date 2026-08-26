import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ChevronRight, Star, ChevronDown } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/data";

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
          className="max-w-3xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 mb-6">
            <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wide text-[#D4AF37]">
              PREMIER CHAUFFEUR SERVICE · DC · MD · VA
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight">
            Luxury Black Car Service in{" "}
            <span className="gold-text">Washington DC, Maryland &amp; Virginia</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Professional airport transfers, corporate travel, hourly chauffeur
            service, weddings, and long-distance transportation — delivered with
            precision, discretion, and uncompromising comfort.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              data-testid="hero-book-btn"
              to="/booking"
              className="group btn-press gold-gradient text-[#090A0C] font-bold px-8 py-4 rounded-full hover:brightness-110 flex items-center justify-center gap-2 text-base"
            >
              Book Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              data-testid="hero-fleet-btn"
              to="/fleet"
              className="btn-press border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center gap-2 text-base"
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
  );
};
