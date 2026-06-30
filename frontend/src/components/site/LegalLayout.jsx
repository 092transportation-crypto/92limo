import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

// Shared layout + typography for legal pages (Privacy Policy, Terms).
export const LegalLayout = ({ eyebrow, title, effectiveDate, children }) => (
  <>
    <section className="relative bg-[#090A0C] pt-32 pb-16 overflow-hidden grain">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C9A227]/15 blur-3xl" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37]">{eyebrow}</span>
          )}
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            {title}
          </h1>
          {effectiveDate && (
            <p className="mt-4 text-sm text-neutral-400">Effective Date: {effectiveDate}</p>
          )}
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-16 lg:py-20">
      <Reveal className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-[#0A0A0A]">{children}</div>
      </Reveal>
    </section>
  </>
);

export const LH2 = ({ children }) => (
  <h2 className="mt-12 first:mt-0 text-2xl font-display font-bold text-[#0A0A0A] border-b border-black/10 pb-2">
    {children}
  </h2>
);

export const LH3 = ({ children }) => (
  <h3 className="mt-8 text-lg font-display font-semibold text-[#B8860B]">{children}</h3>
);

export const LP = ({ children }) => (
  <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">{children}</p>
);

export const LUL = ({ items }) => (
  <ul className="mt-4 space-y-2 list-disc pl-5 text-[15px] leading-relaxed text-neutral-700 marker:text-[#C9A227]">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);
