import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ROUTES } from "@/lib/data";

export const PopularRoutes = () => {
  return (
    <section data-testid="routes-section" className="py-20 lg:py-28 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">POPULAR ROUTES</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">Where We Take You</h2>
          <p className="mt-3 text-neutral-600">
            Fixed, all-inclusive pricing on our most-requested point-to-point and
            long-distance routes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROUTES.map((r, i) => (
            <Reveal key={`${r.from}-${r.to}`} delay={(i % 4) * 0.06}>
              <Link
                data-testid={`route-card-${i}`}
                to="/booking"
                className="group block w-full text-left bg-white border border-black/10 rounded-xl p-5 shadow-sm hover:border-[#C9A227]/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-xs text-neutral-500 uppercase tracking-wider">From</div>
                <div className="text-[#0A0A0A] font-semibold">{r.from}</div>
                <div className="my-2 flex items-center gap-2 text-[#B8860B]">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">To</div>
                <div className="text-[#0A0A0A] font-semibold">{r.to}</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
