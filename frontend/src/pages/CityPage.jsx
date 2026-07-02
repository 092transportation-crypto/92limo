import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Check, PlaneLanding, ChevronRight, MapPin } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { CITIES, SERVICES, AIRPORTS, BRAND, IMAGES } from "@/lib/data";

export default function CityPage() {
  const { city } = useParams();
  const data = CITIES.find((c) => c.slug === city);

  useEffect(() => {
    if (!data) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "LimousineService",
      name: `92 Limo Service — ${data.name}, MD`,
      url: `https://92limo.com/airport-car-service/${data.slug}`,
      telephone: "+1-877-679-0100",
      email: BRAND.email,
      image: IMAGES.logo,
      priceRange: "$$$",
      areaServed: { "@type": "City", name: `${data.name}, Maryland` },
      address: { "@type": "PostalAddress", addressLocality: data.name, addressRegion: "MD", addressCountry: "US" },
      description: `Luxury airport car and limo service in ${data.name}, ${data.region}, with transfers to BWI, DCA, IAD, PHL and Martin State airports.`,
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "city-schema";
    el.text = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      const ex = document.getElementById("city-schema");
      if (ex) ex.remove();
    };
  }, [data]);

  if (!data) return <Navigate to="/service-areas" replace />;

  const others = CITIES.filter((c) => c.slug !== data.slug).slice(0, 8);

  return (
    <>
      <Seo
        title={`Airport Car Service in ${data.name}, MD | 92 Limo`}
        description={`Luxury airport car and limo service in ${data.name}, MD — on-time BWI, DCA and IAD transfers plus corporate, wedding and wine-tour rides.`}
        path={`/airport-car-service/${data.slug}`}
      />
      <PageHero
        eyebrow={`${data.region.toUpperCase()} · MARYLAND`}
        title={`Airport Car & Limo Service in ${data.name}, MD`}
        subtitle={`Premium, on-time chauffeur service in ${data.name} — airport transfers to ${data.airport} and beyond, corporate travel, weddings, wine tours and more.`}
        image={IMAGES.airportPickup}
        alt={`Luxury airport car service in ${data.name}, Maryland`}
      />

      <section className="py-20 lg:py-24 bg-white" data-testid={`city-${data.slug}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
            <p className="text-lg">
              <strong className="text-[#0A0A0A]">92 Limo Service</strong> provides dependable,
              professional luxury transportation in {data.name}, {data.region}. Whether you're
              heading to {data.airport} for an early flight, hosting visiting clients, or
              celebrating a special occasion, our chauffeurs deliver a clean, comfortable, and
              punctual ride every time.
            </p>
            <p>
              We specialize in timely airport pickups and drop-offs, point-to-point transfers,
              corporate travel, weddings, proms, birthdays, and chauffeured wine tours throughout
              {` ${data.name}`} and surrounding Maryland communities. With transparent all-inclusive
              pricing and 24/7 availability, booking your {data.name} car service takes just minutes.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(0, 8).map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group flex items-center gap-2 bg-[#F6F5F2] border border-black/10 rounded-xl p-4 hover:border-[#C9A227]/60 hover:shadow-md transition-all"
              >
                <Check size={16} className="text-[#B8860B] shrink-0" />
                <span className="text-sm font-medium text-[#0A0A0A]">{s.title} in {data.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">AIRPORTS NEAR {data.name.toUpperCase()}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">
              Airport Transfers from {data.name}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AIRPORTS.map((a) => (
              <div key={a.code} className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A227]/12 flex items-center justify-center">
                    <PlaneLanding size={20} className="text-[#B8860B]" />
                  </div>
                  <span className="text-2xl font-display font-bold gold-text">{a.code}</span>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{data.name} to {a.name.replace(" Car Service", "")}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-6">
            <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">Nearby Communities We Serve</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/airport-car-service/${c.slug}`}
                data-testid={`nearby-city-${c.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F6F5F2] border border-black/10 text-sm text-neutral-700 hover:border-[#C9A227]/60 hover:text-[#B8860B] transition-all"
              >
                <MapPin size={14} className="text-[#B8860B]" /> {c.name}
                <ChevronRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Book Your ${data.name} Car Service`} subtitle={`Luxury chauffeur service in ${data.name} and across the DMV — available 24/7.`} />
    </>
  );
}
