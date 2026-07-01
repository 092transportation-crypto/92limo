import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/lib/data";
import { ROUTE_SLUGS, BEACH_SLUGS, LANDING_PAGES } from "@/lib/landingPages";

const REGIONS = [
  {
    title: "Maryland — All 23 Counties + Baltimore City",
    items: [
      "Baltimore City",
      "Allegany County", "Anne Arundel County", "Baltimore County", "Calvert County",
      "Caroline County", "Carroll County", "Cecil County", "Charles County",
      "Dorchester County", "Frederick County", "Garrett County", "Harford County",
      "Howard County", "Kent County", "Montgomery County", "Prince George's County",
      "Queen Anne's County", "St. Mary's County", "Somerset County", "Talbot County",
      "Washington County", "Wicomico County", "Worcester County",
    ],
  },
  {
    title: "Washington, D.C.",
    items: [
      "Downtown / Penn Quarter", "Capitol Hill", "Georgetown", "Dupont Circle",
      "Foggy Bottom", "Navy Yard", "Convention Center", "All DC neighborhoods",
    ],
  },
  {
    title: "Northern Virginia",
    items: ["Arlington", "Alexandria", "Fairfax", "Tysons Corner", "McLean", "Falls Church", "Reston"],
  },
  {
    title: "Delaware",
    items: ["Wilmington", "Newark", "Dover", "Bethany Beach", "Rehoboth Beach", "Lewes", "Dewey Beach"],
  },
  {
    title: "Pennsylvania",
    items: ["York", "York County"],
  },
  {
    title: "Airports Served",
    items: ["BWI Marshall (BWI)", "Reagan National (DCA)", "Washington Dulles (IAD)", "Martin State (MTN)", "Philadelphia (PHL)"],
  },
];

export default function CoveragePage() {
  const popular = [...ROUTE_SLUGS, ...BEACH_SLUGS];
  return (
    <>
      <Seo
        title="Service Area & Coverage | Maryland, DC, Virginia, Delaware & PA | 92 Limo Service"
        description="92 Limo Service coverage: all 23 Maryland counties, Baltimore City, Washington DC, Northern Virginia, Delaware (incl. Bethany & Rehoboth), and York, PA."
        path="/coverage"
      />
      <PageHero
        eyebrow="COVERAGE"
        title="Where We Provide Service"
        subtitle="Luxury chauffeur and airport car service across Maryland, Washington DC, Northern Virginia, Delaware, and southern Pennsylvania — plus long-distance trips up and down the East Coast."
        image={IMAGES.dcSkyline}
        alt="Regional skyline — 92 Limo Service coverage area"
      />

      <section className="py-20 lg:py-24 bg-white" data-testid="coverage-regions">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">COMPREHENSIVE COVERAGE</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
              A Full Regional Footprint
            </h2>
            <p className="mt-3 text-neutral-600">
              From Baltimore and the DMV to the Delaware beaches and York, PA, 92 Limo Service covers
              the communities below — and travels well beyond them for long-distance trips.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REGIONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-7">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#B8860B]" />
                    <h3 className="text-lg font-display font-semibold text-[#0A0A0A]">{r.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.items.map((it) => (
                      <span
                        key={it}
                        className="text-sm text-neutral-700 bg-white border border-black/10 rounded-full px-3 py-1"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular routes internal links */}
      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="coverage-routes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">POPULAR ROUTES</span>
            <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">Featured Routes & Beach Transfers</h2>
            <p className="mt-3 text-neutral-600">Flat-rate, all-inclusive pricing on our most-requested point-to-point and long-distance routes.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popular.map((slug) => (
              <Link
                key={slug}
                to={`/${slug}`}
                data-testid={`coverage-route-${slug}`}
                className="group flex items-center justify-between bg-white border border-black/10 rounded-xl px-5 py-4 shadow-sm hover:border-[#C9A227]/60 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-[#0A0A0A] font-semibold text-sm">{LANDING_PAGES[slug].eyebrow}</span>
                <ChevronRight size={16} className="text-[#B8860B] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Don't See Your Town?" subtitle="If you're anywhere in the region — or need a long-distance trip — we can help. Call 877-679-0100 or request a quote." />
    </>
  );
}
