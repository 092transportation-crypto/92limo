import { Link } from "react-router-dom";
import { Check, Users, Briefcase, ChevronRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { FLEET, SERVICE_PAGES, vehicleLabel } from "@/lib/data";

export default function ServiceDetail({ slug }) {
  const d = SERVICE_PAGES[slug];
  const vehicles = FLEET.filter((f) => d.vehicles.includes(vehicleLabel(f)));

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

      <CTASection />
    </>
  );
}
