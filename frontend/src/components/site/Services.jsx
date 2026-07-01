import { Link } from "react-router-dom";
import {
  Plane, Briefcase, Clock, Heart, Route, Wine, Cake, Sparkles, ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/data";

const ICONS = { Plane, Briefcase, Clock, Heart, Route, Wine, Cake, Sparkles };

export const Services = ({
  eyebrow = "WHAT WE OFFER",
  heading = "Premium Transportation Services",
  intro = "From airport runs to weddings and long-distance journeys — one trusted chauffeur partner across the DMV.",
}) => {
  return (
    <section data-testid="services-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">{eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">{heading}</h2>
          <p className="mt-3 text-neutral-600">{intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.07}>
                <Link
                  to={s.link}
                  data-testid={`service-card-${i}`}
                  className="group block h-full bg-white border border-black/10 rounded-2xl p-7 shadow-sm hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C9A227]/12 flex items-center justify-center group-hover:bg-[#C9A227]/20 transition-colors">
                    <Icon size={22} strokeWidth={1.6} className="text-[#B8860B]" />
                  </div>
                  <h3 className="mt-5 text-lg font-display font-semibold text-[#0A0A0A]">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B] group-hover:gap-2.5 transition-all">
                    {`Learn more about ${s.title}`} <ChevronRight size={15} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
