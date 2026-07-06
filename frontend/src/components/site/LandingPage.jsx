import { Link } from "react-router-dom";
import { Check, Users, Briefcase, ChevronRight, ArrowRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Faq } from "@/components/site/Faq";
import { Reveal } from "@/components/site/Reveal";
import { FLEET, vehicleLabel } from "@/lib/data";
import { LANDING_PAGES } from "@/lib/landingPages";

export default function LandingPage({ slug }) {
  const d = LANDING_PAGES[slug];
  if (!d) return null;
  const vehicles = FLEET.filter((f) => (d.vehicles || []).includes(vehicleLabel(f)));

  return (
    <>
      <Seo title={d.metaTitle} description={d.metaDescription} path={`/${slug}`} />
      <PageHero eyebrow={d.eyebrow} title={d.h1} subtitle={d.subtitle} image={d.image} alt={d.alt} />

      {/* Intro copy */}
      <section className="py-20 lg:py-24 bg-white" data-testid={`landing-${slug}`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="space-y-5 text-[15px] sm:text-base text-neutral-700 leading-relaxed">
              {d.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                data-testid="landing-book-btn"
                className="btn-press inline-flex items-center justify-center gap-2 gold-gradient text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:brightness-110"
              >
                Book This Ride <ArrowRight size={18} />
              </Link>
              <Link
                to="/fleet"
                className="inline-flex items-center justify-center gap-2 border border-black/15 text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:border-[#C9A227] hover:text-[#B8860B] transition-all"
              >
                View Our Fleet
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {d.highlightsHeading && (
            <Reveal className="mb-10 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">
                {d.highlightsHeading}
              </h2>
            </Reveal>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.highlights.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.07}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-6 hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300">
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

      {/* Areas we serve (optional, grouped by region) */}
      {d.areas && (
        <section className="py-16 lg:py-20 bg-white" data-testid="landing-areas">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal className="mb-10 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">Areas We Serve</h2>
              <p className="mt-2 text-neutral-600">
                Door-to-door service across five states and the District — wherever your trip starts.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.areas.map((group) => (
                <Reveal key={group.region}>
                  <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-6">
                    <h3 className="text-base font-display font-semibold text-[#0A0A0A]">{group.region}</h3>
                    {group.note && <p className="mt-2 text-sm text-neutral-600">{group.note}</p>}
                    <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5">
                      {group.places.map((p) => (
                        <li key={p.label} className="text-sm">
                          {p.to ? (
                            <Link to={p.to} className="text-neutral-700 underline decoration-[#C9A227]/50 underline-offset-2 hover:text-[#B8860B]">
                              {p.label}
                            </Link>
                          ) : (
                            <span className="text-neutral-600">{p.label}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommended vehicles */}
      {vehicles.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">Recommended Vehicles</h2>
              <p className="mt-2 text-neutral-600">Travel in comfort — choose the vehicle that fits your party and luggage.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vehicles.map((v, i) => (
                <Reveal key={v.name} delay={i * 0.08}>
                  <div className="group h-full bg-[#F6F5F2] border border-black/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-xl transition-all duration-300">
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
              <Link to="/booking" className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:gap-3 transition-all">
                Reserve your ride <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Faq faqs={d.faqs} heading={d.faqHeading || "Frequently Asked Questions"} schemaId={`faq-${slug}`} />

      <CTASection title={d.ctaTitle} subtitle={d.ctaSubtitle} />
    </>
  );
}
