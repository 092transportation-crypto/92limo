import { Link } from "react-router-dom";
import { PlaneLanding, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { AIRPORTS, AIRPORT_FEATURES } from "@/lib/data";

export const Airports = () => {
  return (
    <section data-testid="airports-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">AIRPORT TRANSFERS</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
            On-Time Service to BWI, DCA, IAD, Martin State &amp; PHL
          </h2>
          <p className="mt-3 text-neutral-600">
            We track your flight in real time and adjust for delays — so your
            chauffeur is always ready the moment you land.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {AIRPORTS.map((a, i) => (
            <Reveal key={a.code} delay={i * 0.08}>
              <div
                data-testid={`airport-card-${a.code}`}
                className="group h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-7 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A227]/12 flex items-center justify-center">
                    <PlaneLanding size={22} strokeWidth={1.6} className="text-[#B8860B]" />
                  </div>
                  <span className="text-3xl font-display font-bold gold-text tabnums">{a.code}</span>
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold text-[#0A0A0A]">{a.name}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{a.desc}</p>
                <Link
                  data-testid={`airport-book-${a.code}`}
                  to="/booking"
                  className="mt-5 inline-block text-sm font-semibold text-[#B8860B] hover:underline"
                >
                  Book {a.code} transfer →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {AIRPORT_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                <span className="w-5 h-5 rounded-full bg-[#C9A227]/15 flex items-center justify-center">
                  <Check size={13} className="text-[#B8860B]" />
                </span>
                {f}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
