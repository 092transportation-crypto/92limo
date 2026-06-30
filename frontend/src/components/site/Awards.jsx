import { Award } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const AWARDS = [
  {
    img: "/awards/award-quality-winner.jpg",
    alt: "92 Limo Service — 2026 Quality Business Award Winner, quality rating over 95%",
    caption: "2026 Quality Business Award Winner",
  },
  {
    img: "/awards/award-top-1-percent.jpg",
    alt: "92 Transportation LLC recognized among the top 1% of American businesses for quality",
    caption: "Top 1% of American Businesses",
  },
  {
    img: "/awards/award-press-release.jpg",
    alt: "92 Limo Service recognized as the leading limousine service in Reisterstown, MD",
    caption: "Leading Limousine Service — Reisterstown, MD",
  },
];

export const Awards = () => {
  return (
    <section data-testid="awards-section" className="py-20 lg:py-28 bg-[#090A0C] grain">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF37]">
            <Award size={15} /> AWARDS &amp; RECOGNITION
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-white">
            Award-Winning Limousine Service
          </h2>
          <p className="mt-3 text-neutral-400">
            Proud to be recognized among the top 1% of American businesses for quality and
            customer satisfaction — including the 2026 Quality Business Award with a 95%+ rating.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((a, i) => (
            <Reveal key={a.img} delay={(i % 3) * 0.08}>
              <a
                href={a.img}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`award-card-${i}`}
                className="group block h-full rounded-2xl overflow-hidden border border-[#C9A227]/25 bg-[#0c0d10] hover:border-[#C9A227]/70 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C9A227]/10 transition-all duration-300"
              >
                <div className="h-[420px] lg:h-[440px] flex items-center justify-center bg-[#0c0d10] p-3">
                  <img
                    src={a.img}
                    alt={a.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="px-5 py-4 border-t border-white/5 flex items-center gap-2">
                  <Award size={16} className="text-[#C9A227] shrink-0" />
                  <span className="text-sm font-semibold text-neutral-200">{a.caption}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
