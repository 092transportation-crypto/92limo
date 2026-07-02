import { Link } from "react-router-dom";
import { Users, Briefcase, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FLEET } from "@/lib/data";

export const Fleet = ({
  heading = "A Vehicle for Every Occasion",
  eyebrow = "OUR FLEET",
  intro = "Late-model, meticulously maintained luxury vehicles — from executive sedans to spacious Sprinter vans.",
}) => {
  return (
    <section data-testid="fleet-section" className="py-20 lg:py-28 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">{eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">{heading}</h2>
          <p className="mt-3 text-neutral-600">{intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET.map((v, i) => (
            <Reveal key={v.name} delay={(i % 3) * 0.08}>
              <div
                data-testid={`fleet-card-${i}`}
                className="group h-full bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-[#0A0A0A]">
                  {v.img ? (
                    <img
                      src={v.img}
                      alt={v.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-[#0A0A0A]">
                      <span className="font-display text-2xl font-bold text-[#C9A227]">{v.category}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-[#B8860B] leading-snug">{v.category}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{v.description}</p>

                  <div className="mt-4 flex items-center gap-5 text-sm text-neutral-700 tabnums">
                    <span className="flex items-center gap-1.5">
                      <Users size={16} strokeWidth={1.6} className="text-[#B8860B]" />
                      {v.pax} passengers
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={16} strokeWidth={1.6} className="text-[#B8860B]" />
                      {v.bags} bags
                    </span>
                  </div>

                  <Link
                    data-testid={`fleet-reserve-${i}`}
                    to="/booking"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B] hover:gap-2.5 transition-all"
                  >
                    Book Now <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
