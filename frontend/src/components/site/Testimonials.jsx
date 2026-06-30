import { Star, Quote, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from "@/lib/data";

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, s) => (
      <Star key={s} size={16} className="text-[#C9A227] fill-[#C9A227]" />
    ))}
  </div>
);

export const Testimonials = ({
  featuredOnly = false,
  eyebrow = "CLIENT REVIEWS",
  heading = "Trusted by Travelers Across the DMV",
  intro = "Real, verified Google reviews from the executives, families, and event planners who ride with us.",
}) => {
  const reviews = featuredOnly ? TESTIMONIALS.filter((t) => t.featured) : TESTIMONIALS;

  return (
    <section data-testid="reviews-section" className="py-20 lg:py-28 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">{eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">{heading}</h2>
          <p className="mt-3 text-neutral-600">{intro}</p>
          <div className="mt-5 flex items-center gap-3">
            <Stars />
            <span className="text-sm font-semibold text-[#0A0A0A]">5.0</span>
            <span className="text-sm text-neutral-500">· Google Reviews</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <div
                data-testid={`review-card-${i}`}
                className="h-full flex flex-col bg-white border border-black/10 rounded-2xl p-7 shadow-sm hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <Stars count={t.rating} />
                  <Quote size={26} className="text-[#C9A227]/40" />
                </div>
                <p className="mt-4 text-[15px] text-neutral-700 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-[#0A0A0A] font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#0A0A0A] font-semibold text-sm">{t.name}</div>
                    <div className="text-neutral-500 text-xs">Google review</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="google-reviews-link"
            className="btn-press inline-flex items-center gap-2 bg-white border border-black/10 text-[#0A0A0A] font-semibold px-6 py-3 rounded-full hover:border-[#C9A227] hover:text-[#B8860B] shadow-sm"
          >
            Read more reviews on Google
            <ExternalLink size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
