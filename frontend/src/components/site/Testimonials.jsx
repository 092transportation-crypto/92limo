import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export const Testimonials = () => {
  return (
    <section data-testid="reviews-section" className="py-20 lg:py-28 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">CLIENT REVIEWS</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
            Trusted by Travelers Across the DMV
          </h2>
          <p className="mt-3 text-neutral-600">
            Real experiences from the executives, families, and event planners who
            ride with us.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <div
                data-testid={`review-card-${i}`}
                className="h-full bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:border-[#C9A227]/40 hover:shadow-lg transition-all duration-300"
              >
                <Quote size={28} className="text-[#C9A227]/50" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={16} className="text-[#C9A227] fill-[#C9A227]" />
                  ))}
                </div>
                <p className="mt-4 text-neutral-700 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-[#0A0A0A] font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#0A0A0A] font-semibold text-sm">{t.name}</div>
                    <div className="text-neutral-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
