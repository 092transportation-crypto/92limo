import { Link } from "react-router-dom";
import { ChevronRight, PlaneLanding } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const BWI_LINKS = [
  { label: "BWI Airport Limo", to: "/bwi-airport-limo" },
  { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
  { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
  { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
  { label: "BWI Airport Meet & Greet", to: "/bwi-airport-meet-and-greet" },
  { label: "BWI 24 Hour Car Service", to: "/bwi-24-hour-airport-car-service" },
  { label: "BWI to Laurel, MD", to: "/bwi-to-laurel-md" },
  { label: "BWI to Silver Spring", to: "/bwi-to-silver-spring" },
  { label: "BWI to Tysons", to: "/bwi-to-tysons" },
  { label: "BWI to McLean", to: "/bwi-to-mclean" },
];

const DCA_LINKS = [
  { label: "DCA Airport Limo", to: "/dca-airport-limo" },
  { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
  { label: "DCA to Washington DC", to: "/dca-to-washington-dc" },
  { label: "DCA Airport Meet & Greet", to: "/dca-airport-meet-and-greet" },
  { label: "DCA to Georgetown", to: "/dca-to-georgetown" },
  { label: "DCA to Arlington", to: "/dca-to-arlington" },
  { label: "DCA to Alexandria", to: "/dca-to-alexandria" },
  { label: "DCA to Tysons", to: "/dca-to-tysons" },
  { label: "DCA to McLean", to: "/dca-to-mclean" },
  { label: "DCA to Silver Spring", to: "/dca-to-silver-spring" },
];

const LinkColumn = ({ code, name, links }) => (
  <Reveal className="h-full">
    <div className="h-full bg-white border border-black/10 rounded-2xl p-7">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-[#C9A227]/12 flex items-center justify-center">
          <PlaneLanding size={20} strokeWidth={1.6} className="text-[#B8860B]" />
        </div>
        <div>
          <div className="text-2xl font-display font-bold gold-text tabnums">{code}</div>
          <div className="text-xs text-neutral-500">{name}</div>
        </div>
      </div>
      <ul className="mt-6 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="group flex items-center justify-between text-sm text-neutral-700 hover:text-[#B8860B] transition-colors"
            >
              <span>{l.label}</span>
              <ChevronRight size={14} className="flex-shrink-0 text-[#B8860B] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
);

export const BwiDcaHighlights = () => {
  return (
    <section data-testid="bwi-dca-highlights" className="py-20 lg:py-28 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">BWI &amp; DCA CAR SERVICE</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
            Explore BWI &amp; DCA Transportation
          </h2>
          <p className="mt-3 text-neutral-600">
            Flat-rate, flight-tracked chauffeur service to and from BWI Marshall
            Airport and Reagan National Airport (DCA) — corporate transportation,
            meet &amp; greet, and point-to-point routes across Maryland, DC and
            Northern Virginia.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LinkColumn code="BWI" name="Baltimore/Washington Marshall Airport" links={BWI_LINKS} />
          <LinkColumn code="DCA" name="Reagan National Airport" links={DCA_LINKS} />
        </div>
      </div>
    </section>
  );
};
