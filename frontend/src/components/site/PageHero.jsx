import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/data";

export const PageHero = ({ eyebrow, title, subtitle, image, alt, height = "min-h-[62vh]" }) => {
  return (
    <section className={`relative ${height} flex items-center overflow-hidden grain`}>
      <div className="absolute inset-0 z-0">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/75 to-[#090A0C]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37]">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              data-testid="pagehero-book-btn"
              to="/contact"
              className="group gold-gradient text-[#090A0C] font-bold px-7 py-3.5 rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Book Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              data-testid="pagehero-call-btn"
              href={BRAND.phoneHref}
              className="border border-white/25 text-white font-semibold px-7 py-3.5 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} strokeWidth={1.8} /> Call {BRAND.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
