import {
  CheckCircle2, BadgeCheck, Sparkles, Clock, DollarSign, Plane, Building2,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WHY, IMAGES } from "@/lib/data";

const ICONS = { CheckCircle2, BadgeCheck, Sparkles, Clock, DollarSign, Plane, Building2 };

export const WhyChooseUs = () => {
  return (
    <section data-testid="why-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold tracking-widest text-[#B8860B]">
                WHY CHOOSE 92 LIMO
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A] leading-tight">
                The Standard for Luxury Chauffeur Service
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Every detail is engineered for your comfort and peace of mind —
                from the gleam of the vehicle to the professionalism of your
                chauffeur.
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden border border-black/10 shadow-sm">
                <img
                  src={IMAGES.escaladeAngle}
                  alt="92 Limo Service black Cadillac Escalade luxury SUV"
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY.map((w, i) => {
              const Icon = ICONS[w.icon];
              return (
                <Reveal key={w.title} delay={(i % 2) * 0.08}>
                  <div
                    data-testid={`why-card-${i}`}
                    className="h-full bg-[#F6F5F2] border border-black/10 rounded-xl p-6 hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300"
                  >
                    <Icon size={22} strokeWidth={1.6} className="text-[#B8860B]" />
                    <h3 className="mt-4 text-base font-display font-semibold text-[#0A0A0A]">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
