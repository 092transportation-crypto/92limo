import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ChevronRight, Star } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/data";

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-center overflow-hidden grain"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Luxury black car service driving through Washington DC at night"
          className="w-full h-full object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/70 to-[#090A0C]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 mb-6">
            <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wide text-[#D4AF37]">
              PREMIER CHAUFFEUR SERVICE · DC · MD · VA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight">
            Luxury Black Car Service in{" "}
            <span className="gold-text">Washington DC, Maryland &amp; Virginia</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Professional airport transfers, corporate travel, hourly chauffeur
            service, weddings, and long-distance transportation — delivered with
            precision, discretion, and uncompromising comfort.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              data-testid="hero-book-btn"
              to="/contact"
              className="group gold-gradient text-[#090A0C] font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2 text-base"
            >
              Book Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              data-testid="hero-fleet-btn"
              to="/fleet"
              className="border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center justify-center gap-2 text-base"
            >
              View Fleet
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-neutral-400">
            {["24/7 Reservations", "Flight Tracking", "All-Inclusive Pricing"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                {t}
              </div>
            ))}
          </div>

          <a
            href={BRAND.phoneHref}
            data-testid="hero-call-link"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
          >
            <Phone size={16} /> Call {BRAND.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
