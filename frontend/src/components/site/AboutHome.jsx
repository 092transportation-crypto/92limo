import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HOME_ABOUT, EXTERNAL_LINKS } from "@/lib/data";

// "About 92 Limo Service" homepage section. Adds substantial, keyword-rich body
// copy (repeating the H1 phrase) plus authoritative external links for SEO.
export const AboutHome = () => {
  return (
    <section data-testid="about-home-section" className="py-20 lg:py-28 bg-[#0B0C0E]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-[#D4AF37]">
            {HOME_ABOUT.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            {HOME_ABOUT.heading}
          </h2>
        </Reveal>

        <div className="mt-6 space-y-5">
          {HOME_ABOUT.paragraphs.map((para, i) => (
            <Reveal key={i} delay={Math.min(i, 3) * 0.06}>
              <p className="text-base text-neutral-300 leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 pt-8 border-t border-white/10">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              Helpful Travel Resources
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {EXTERNAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`external-link-${link.label}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                >
                  {link.label}
                  <ExternalLink size={13} className="opacity-70" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
