import { Link } from "react-router-dom";
import { Check, Users, MapPin, Phone, ChevronRight, ArrowRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/lib/data";

const SITE_URL = "https://www.92limo.com";

// Auto-generated event landing pages (created in the 92 Limo platform admin
// and fetched at runtime by EventRoute). Same visual system as LandingPage.
export default function EventLandingPage({ page }) {
  if (!page) return null;
  const url = `${SITE_URL}/${page.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "92 Limo Service",
        telephone: "+1-877-609-1919",
        url: SITE_URL,
        priceRange: "$$",
        address: { "@type": "PostalAddress", streetAddress: "9836 Lyon Ave", addressLocality: "Laurel", addressRegion: "MD", postalCode: "20723", addressCountry: "US" },
        areaServed: page.schema.areaServed.map((a) => ({ "@type": "Place", name: a })),
        openingHours: "Mo-Su 00:00-23:59",
      },
      { "@type": "Service", name: page.h1, serviceType: page.schema.serviceType, url, description: page.metaDescription, provider: { "@id": `${SITE_URL}/#business` } },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: page.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Seo title={page.metaTitle} description={page.metaDescription} path={`/${page.slug}`} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <PageHero eyebrow={page.badge} title={page.h1} subtitle={page.intro[0]} image={IMAGES.suv} alt={`${page.name} — 92 Limo Service`} />

      {/* Stats + intro */}
      <section className="py-16 lg:py-20 bg-white" data-testid={`event-${page.slug}`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {page.stats.map((s) => (
                <div key={s.label} className="bg-[#F6F5F2] border border-black/10 rounded-2xl p-4">
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B8860B]">{s.label}</div>
                  <div className="mt-1 text-sm font-semibold text-[#0A0A0A]">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="space-y-5 text-[15px] sm:text-base text-neutral-700 leading-relaxed">
              {page.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/booking" data-testid="event-book-btn" className="btn-press inline-flex items-center justify-center gap-2 gold-gradient text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:brightness-110">
                Book This Ride <ArrowRight size={18} />
              </Link>
              <a href="tel:+18776091919" className="inline-flex items-center justify-center gap-2 border border-black/15 text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:border-[#C9A227] hover:text-[#B8860B] transition-all">
                <Phone size={16} /> (877) 609-1919
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">How 92 Limo Service Handles {page.name}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.06}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-5 flex items-start gap-3">
                  <Check size={18} className="text-[#B8860B] mt-0.5 shrink-0" />
                  <p className="text-sm text-neutral-700 leading-relaxed">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">
          {page.sections.map((s) => (
            <Reveal key={s.h2}>
              <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">{s.h2}</h2>
              <div className="mt-4 space-y-4 text-[15px] sm:text-base text-neutral-700 leading-relaxed">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-16 lg:py-20 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">Vehicles for {page.name}</h2>
            <p className="mt-2 text-neutral-600">Choose the vehicle that fits your party.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.vehicles.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.06}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-5">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B8860B]">{v.cls}</span>
                  <h3 className="mt-1 text-base font-display font-semibold text-[#0A0A0A]">{v.name}</h3>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-neutral-700"><Users size={15} className="text-[#B8860B]" /> Up to {v.seats} · {v.best}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:gap-3 transition-all">
              View the full fleet <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Faq faqs={page.faqs} heading={`${page.name} — Frequently Asked Questions`} schemaId={`faq-${page.slug}`} />

      {/* Related */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="text-2xl font-display font-bold text-[#0A0A0A]">Related Pages</h2>
          </Reveal>
          <ul className="flex flex-wrap gap-3">
            {page.related.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="inline-flex items-center gap-1.5 border border-black/10 rounded-full px-4 py-2 text-sm text-neutral-700 hover:border-[#C9A227] hover:text-[#B8860B]">
                  <MapPin size={14} className="text-[#B8860B]" /> {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white">Book {page.name} Transportation</h2>
          <p className="mt-3 text-neutral-400">Flat, transparent pricing and a chauffeur staged before you are ready. Call (877) 609-1919.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-press inline-flex items-center justify-center gap-2 gold-gradient text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:brightness-110">
              Book Now <ArrowRight size={18} />
            </Link>
            <a href="tel:+18776091919" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
              <Phone size={16} /> (877) 609-1919
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
