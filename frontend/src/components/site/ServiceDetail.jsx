import { Link } from "react-router-dom";
import { Check, Users, Briefcase, ChevronRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Faq } from "@/components/site/Faq";
import { Testimonials } from "@/components/site/Testimonials";
import { FLEET, SERVICE_PAGES, NAV_SERVICES, vehicleLabel } from "@/lib/data";
import { PAGE_FAQS } from "@/lib/pageFaqs";

// Cross-links shown on every service page (besides the sibling services).
const POPULAR_LINKS = [
  { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
  { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
  { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
  { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
  { label: "DCA Airport Meet & Greet", to: "/dca-airport-meet-and-greet" },
  { label: "All Service Areas", to: "/service-areas" },
  { label: "Our Fleet", to: "/fleet" },
  { label: "Booking & Cancellation Policies", to: "/policies" },
];

// City/region-specific landing pages that belong under each pillar service
// page. Keeps the broad service page as the head term and funnels equity
// down to the geo long-tail pages (and back up), rather than letting them
// compete for the same query unlinked.
const RELATED_LANDING_PAGES = {
  "airport-transportation": [
    { label: "BWI Airport Transportation", to: "/bwi-airport-transportation" },
    { label: "DCA Reagan Airport Limo", to: "/dca-airport-limo" },
    { label: "IAD Dulles Airport Limo", to: "/iad-airport-limo" },
  ],
  "corporate-transportation": [
    { label: "Corporate Limo Service Washington DC", to: "/corporate-limo-dc" },
    { label: "Executive Car Service Maryland", to: "/executive-car-service-maryland" },
    { label: "Black Car Service Baltimore", to: "/black-car-service-baltimore" },
    { label: "Black Car Service Washington DC", to: "/black-car-service-dc" },
    { label: "Chauffeur Service Baltimore", to: "/chauffeur-service-baltimore" },
    { label: "Chauffeur Service Washington DC", to: "/chauffeur-service-washington-dc" },
  ],
  "wedding-transportation": [
    { label: "Wedding Limo Service Maryland", to: "/wedding-limo-maryland" },
    { label: "Wedding Car Service Washington DC", to: "/wedding-car-service-dc" },
  ],
  "wine-tours": [
    { label: "Wine Tour Limo Maryland", to: "/wine-tour-limo-maryland" },
  ],
  "birthday-celebrations": [
    { label: "Birthday Limo Service Maryland", to: "/birthday-limo-maryland" },
    { label: "Bachelorette Party Limo", to: "/bachelorette-party-limo" },
    { label: "Casino Trip Limo Service", to: "/casino-trip-limo" },
  ],
  "anniversary-limo-service": [
    { label: "Luxury Car Service Maryland", to: "/luxury-car-service-maryland" },
  ],
  "prom-transportation": [
    { label: "Prom Limo Service Maryland", to: "/prom-limo-maryland" },
    { label: "Prom Limo Baltimore", to: "/prom-limo-baltimore" },
    { label: "Graduation Limo Service Maryland", to: "/graduation-limo-maryland" },
  ],
  "hourly-chauffeur": [
    { label: "Chauffeur Service Baltimore", to: "/chauffeur-service-baltimore" },
    { label: "Chauffeur Service Washington DC", to: "/chauffeur-service-washington-dc" },
    { label: "Executive Car Service Maryland", to: "/executive-car-service-maryland" },
  ],
  "long-distance-transportation": [
    { label: "Baltimore to Philadelphia Limo", to: "/baltimore-to-philadelphia-limo" },
    { label: "DC to New York Car Service", to: "/dc-to-new-york-car-service" },
    { label: "Maryland to JFK Airport Car Service", to: "/maryland-to-jfk-airport" },
  ],
};

export default function ServiceDetail({ slug }) {
  const d = SERVICE_PAGES[slug];
  const vehicles = FLEET.filter((f) => d.vehicles.includes(vehicleLabel(f)));
  const related = [
    ...NAV_SERVICES.filter((s) => s.to !== `/${slug}`),
    ...(RELATED_LANDING_PAGES[slug] || []),
    ...POPULAR_LINKS,
  ];

  return (
    <>
      <Seo title={d.metaTitle} description={d.metaDescription} path={`/${slug}`} />
      <PageHero eyebrow={d.eyebrow} title={d.h1} subtitle={d.subtitle} image={d.image} alt={d.alt} />

      <section className="py-20 lg:py-24 bg-white" data-testid={`service-detail-${slug}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-lg text-neutral-700 leading-relaxed">{d.intro}</p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.bullets.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.07}>
                <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-6 hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A227]/12 flex items-center justify-center">
                    <Check size={18} className="text-[#B8860B]" />
                  </div>
                  <h3 className="mt-4 text-base font-display font-semibold text-[#0A0A0A]">{b.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">
              Recommended Vehicles
            </h2>
            <p className="mt-2 text-neutral-600">Hand-picked for this service. View the full fleet for more options.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.08}>
                <div className="group h-full bg-white border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-44 overflow-hidden bg-[#0A0A0A]">
                    {v.img ? (
                      <img src={v.img} alt={v.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 bg-[#0A0A0A]">
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C9A227]">{v.category}</span>
                        <span className="mt-1 text-white font-display font-semibold">{v.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B8860B]">{v.category}</span>
                    <h3 className="mt-1 text-base font-display font-semibold text-[#0A0A0A] leading-snug">{v.name}</h3>
                    <div className="mt-3 flex items-center gap-4 text-sm text-neutral-700 tabnums">
                      <span className="flex items-center gap-1.5"><Users size={15} className="text-[#B8860B]" /> {v.pax}</span>
                      <span className="flex items-center gap-1.5"><Briefcase size={15} className="text-[#B8860B]" /> {v.bags}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:gap-3 transition-all">
              View full fleet <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {d.details && (
        <section className="py-16 lg:py-20 bg-white" data-testid="service-details">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">
            {d.details.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-neutral-700 leading-relaxed">
                  {s.paragraphs.map((t) => (
                    <p key={t.slice(0, 40)}>{t}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Testimonials
        featuredOnly
        limit={3}
        eyebrow="CLIENT REVIEWS"
        heading="What Riders Say About 92 Limo Service"
      />

      <Faq faqs={PAGE_FAQS[`/${slug}`]} heading={`${d.h1} FAQs`} schemaId={`faq-${slug}`} />

      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="service-related">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">Related Services &amp; Popular Pages</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {related.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-center justify-between bg-white border border-black/10 rounded-xl px-5 py-4 hover:border-[#D4AF37]/60 hover:shadow-md transition-all"
              >
                <span className="text-sm font-semibold text-[#0A0A0A] group-hover:text-[#B8860B] transition-colors pr-3">{l.label}</span>
                <ChevronRight size={16} className="flex-shrink-0 text-[#B8860B]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
