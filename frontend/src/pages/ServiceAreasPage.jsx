import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { PopularRoutes } from "@/components/site/PopularRoutes";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { IMAGES, CITIES } from "@/lib/data";

export default function ServiceAreasPage() {
  return (
    <>
      <Seo
        title="Service Areas | DC, Maryland & Northern Virginia | 92 Limo Service"
        description="92 Limo Service covers Washington DC, Maryland, Northern Virginia, Baltimore, Annapolis, Columbia, Laurel, Rockville, Bethesda, Arlington, Alexandria, Tysons, plus BWI, DCA & IAD airports and long-distance trips. Call 877-679-0100."
        path="/service-areas"
      />
      <PageHero
        eyebrow="SERVICE AREAS"
        title="Serving the Greater DMV & Beyond"
        subtitle="Luxury chauffeur service throughout Maryland, Washington DC, and Northern Virginia — plus long-distance trips up and down the East Coast."
        image={IMAGES.dcSkyline}
        alt="Washington DC skyline at night — 92 Limo Service coverage area"
      />
      <ServiceAreas />

      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="cities-directory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">CITIES WE SERVE</span>
            <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">Local Airport Car & Limo Service</h2>
            <p className="mt-3 text-neutral-600">Dedicated chauffeur service pages for the Maryland communities we proudly serve.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to={`/airport-car-service/${c.slug}`}
                data-testid={`city-link-${c.slug}`}
                className="group flex items-center justify-between bg-white border border-black/10 rounded-xl p-5 shadow-sm hover:border-[#C9A227]/60 hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#B8860B]" />
                  <span>
                    <span className="block text-[#0A0A0A] font-semibold">{c.name}, MD</span>
                    <span className="block text-xs text-neutral-500">{c.region}</span>
                  </span>
                </span>
                <ChevronRight size={16} className="text-[#B8860B] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PopularRoutes />
      <CTASection />
    </>
  );
}

