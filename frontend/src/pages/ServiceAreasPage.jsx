import { Link } from "react-router-dom";
import { MapPin, ChevronRight, Plane, Route, Car, Sparkles, Building2 } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES, CITIES, SERVICE_PAGES } from "@/lib/data";
import { LANDING_PAGES, ROUTE_SLUGS, BEACH_SLUGS } from "@/lib/landingPages";

// ---------------------------------------------------------------------------
// Build the complete directory of every location, airport, route, vehicle and
// event page on the site. This page is the single home for the long link list
// that used to sit in every page footer.
// ---------------------------------------------------------------------------
const ROUTE_SET = new Set([...ROUTE_SLUGS, ...BEACH_SLUGS]);
const AIRPORT_HANDWRITTEN = new Set(["bwi-airport-limo", "phl-airport-to-philadelphia", "philadelphia-airport-car-service"]);

function categorize(slug, page) {
  if (page.category) return page.category; // generated pages carry a category
  if (ROUTE_SET.has(slug) || /-to-/.test(slug)) return "route";
  if (AIRPORT_HANDWRITTEN.has(slug)) return "airport";
  return "service";
}

const label = (page) => page.eyebrow || page.h1;

const GROUPS = { city: [], airport: [], route: [], vehicle: [], service: [] };
Object.entries(LANDING_PAGES).forEach(([slug, page]) => {
  const cat = categorize(slug, page);
  (GROUPS[cat] || GROUPS.service).push({ slug, label: label(page), h1: page.h1 });
});
Object.values(GROUPS).forEach((g) => g.sort((a, b) => a.label.localeCompare(b.label)));

// Split city landing pages by state for scannability.
const byState = (st) => GROUPS.city.filter((c) => new RegExp(`, ${st}$`).test(c.label));
const CITY_GROUPS = [
  { title: "Maryland", items: byState("MD") },
  { title: "Virginia", items: byState("VA") },
  { title: "Pennsylvania", items: byState("PA") },
  { title: "Delaware", items: byState("DE") },
  { title: "Washington, DC", items: GROUPS.city.filter((c) => /DC$/.test(c.label)) },
].filter((g) => g.items.length);

const SERVICE_LINKS = Object.entries(SERVICE_PAGES).map(([slug, d]) => ({ slug, label: d.h1 }));

const Section = ({ id, icon: Icon, eyebrow, title, intro, children, tone = "light" }) => (
  <section
    id={id}
    className={`py-16 lg:py-20 scroll-mt-24 ${tone === "light" ? "bg-white" : "bg-[#F6F5F2]"}`}
    data-testid={`areas-${id}`}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <Reveal className="mb-8 max-w-2xl">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B8860B]">
          <Icon size={14} /> {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">{title}</h2>
        {intro && <p className="mt-3 text-neutral-600">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

const LinkGrid = ({ items, prefix = "/", cols = "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }) => (
  <div className={`grid grid-cols-1 ${cols} gap-3`}>
    {items.map((it) => (
      <Link
        key={it.slug}
        to={`${prefix}${it.slug}`}
        data-testid={`area-link-${it.slug}`}
        title={it.h1 || it.label}
        className="group flex items-center justify-between bg-white border border-black/10 rounded-xl px-4 py-3 shadow-sm hover:border-[#C9A227]/60 hover:-translate-y-0.5 hover:shadow-md transition-all"
      >
        <span className="text-sm font-medium text-[#0A0A0A] pr-3">{it.label}</span>
        <ChevronRight size={15} className="shrink-0 text-[#B8860B] group-hover:translate-x-1 transition-transform" />
      </Link>
    ))}
  </div>
);

const JUMP = [
  { href: "#cities", label: "Cities & Towns" },
  { href: "#airports", label: "Airports" },
  { href: "#routes", label: "Routes & Transfers" },
  { href: "#services", label: "Services & Events" },
  { href: "#vehicles", label: "Vehicles" },
];

export default function ServiceAreasPage() {
  const total =
    CITIES.length + GROUPS.city.length + GROUPS.airport.length + GROUPS.route.length +
    GROUPS.service.length + GROUPS.vehicle.length + SERVICE_LINKS.length;

  return (
    <>
      <Seo
        title="All Service Areas | Cities, Airports & Routes | 92 Limo"
        description="Every location 92 Limo Service covers — Maryland, Washington DC, Northern Virginia, Delaware & Pennsylvania cities, BWI/DCA/IAD/PHL airports, point-to-point routes and event venues."
        path="/service-areas"
      />
      <PageHero
        eyebrow="SERVICE AREAS"
        title="Everywhere We Serve"
        subtitle={`The complete directory of ${total} locations, airports, routes, venues and vehicles served by 92 Limo Service across Maryland, Washington DC, Northern Virginia and beyond.`}
        image={IMAGES.dcSkyline}
        alt="Washington DC skyline at night — 92 Limo Service coverage area"
        height="min-h-[52vh]"
      />

      <div className="bg-[#0B0C0E] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 mr-2">JUMP TO</span>
          {JUMP.map((j) => (
            <a key={j.href} href={j.href} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 text-neutral-300 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all">
              {j.label}
            </a>
          ))}
          <Link to="/coverage" className="ml-auto text-xs font-semibold text-[#D4AF37] hover:underline">
            County-by-county coverage map →
          </Link>
        </div>
      </div>

      <Section id="cities" icon={MapPin} eyebrow="CITIES & TOWNS" title="Local Limo & Airport Car Service by City" intro="Dedicated pages for the communities we serve most, with local pickup notes, airport drive times and vehicle recommendations." tone="dark">
        <h3 className="text-lg font-display font-semibold text-[#0A0A0A] mb-3">Anne Arundel, Howard, Montgomery &amp; Prince George's Counties</h3>
        <LinkGrid
          items={CITIES.map((c) => ({ slug: c.slug, label: `${c.name}, MD`, h1: `Airport Car & Limo Service in ${c.name}, MD` }))}
          prefix="/airport-car-service/"
        />
        {CITY_GROUPS.map((g) => (
          <div key={g.title} className="mt-10">
            <h3 className="text-lg font-display font-semibold text-[#0A0A0A] mb-3">{g.title}</h3>
            <LinkGrid items={g.items} />
          </div>
        ))}
      </Section>

      <Section id="airports" icon={Plane} eyebrow="AIRPORTS" title="Airport Car Service — BWI, DCA, IAD & PHL" intro="Flight-tracked pickups with 60 minutes of complimentary waiting time on domestic arrivals and 90 on international. Meet & greet inside baggage claim available for an additional charge.">
        <LinkGrid items={[{ slug: "airport-transportation", label: "All Airport Transportation", h1: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" }, ...GROUPS.airport]} />
      </Section>

      <Section id="routes" icon={Route} eyebrow="ROUTES & TRANSFERS" title="Point-to-Point Routes, Beach Transfers & Long Distance" intro="Flat-rate transfers between the airports, the DMV's major cities, the Delaware and Maryland beaches, Philadelphia and New York." tone="dark">
        <LinkGrid items={GROUPS.route} />
      </Section>

      <Section id="services" icon={Sparkles} eyebrow="SERVICES & EVENTS" title="Occasions, Venues & Specialty Transportation" intro="Corporate travel, weddings, proms, wine tours, concerts, stadiums and arenas, cruise ports, hospitals and more.">
        <h3 className="text-lg font-display font-semibold text-[#0A0A0A] mb-3">Core services</h3>
        <LinkGrid items={SERVICE_LINKS} />
        <h3 className="mt-10 text-lg font-display font-semibold text-[#0A0A0A] mb-3">Events, venues &amp; specialty pages</h3>
        <LinkGrid items={GROUPS.service} />
      </Section>

      <Section id="vehicles" icon={Car} eyebrow="VEHICLES" title="Book by Vehicle" intro="Reserve a specific vehicle class — sedans, SUVs, Sprinter vans, party bus and stretch limousine pages." tone="dark">
        <LinkGrid items={[{ slug: "fleet", label: "Full Fleet Overview", h1: "A Luxury Vehicle for Every Journey" }, ...GROUPS.vehicle]} />
      </Section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
            <Building2 size={16} className="text-[#B8860B]" />
            <Link to="/coverage" className="font-semibold text-[#B8860B] hover:underline">Coverage by county</Link>
            <Link to="/blog" className="font-semibold text-[#B8860B] hover:underline">Travel guides &amp; blog</Link>
            <Link to="/faq" className="font-semibold text-[#B8860B] hover:underline">FAQ</Link>
            <Link to="/policies" className="font-semibold text-[#B8860B] hover:underline">Booking policies</Link>
          </div>
        </div>
      </section>

      <CTASection title="Don't See Your Town?" subtitle="If you're anywhere in the region — or need a long-distance trip — we can help. Call (877) 609-1919 or request a quote." />
    </>
  );
}
