import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { ChamberBadge } from "@/components/site/ChamberBadge";
import { IMAGES } from "@/lib/data";
import { PRESS_CONTENT as C } from "@/lib/staticPages";
import { pageSchema } from "@/lib/pageSchema";

const SCHEMA = pageSchema("WebPage", "/press", C.title, C.description);

const Bullets = ({ items }) => (
  <ul className="mt-4 space-y-2.5 text-neutral-700">
    {items.map((t) => (
      <li key={t} className="flex items-start gap-3 leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
        {t}
      </li>
    ))}
  </ul>
);

export default function PressPage() {
  return (
    <>
      <Seo title={C.title} description={C.description} path="/press" schema={SCHEMA} />
      <PageHero eyebrow="PRESS & MEDIA" title={C.h1} subtitle={C.subtitle} image={IMAGES.corporate} alt="92 Limo Service chauffeur with a black luxury SUV" height="min-h-[48vh]" />

      <section className="py-16 lg:py-20 bg-white" data-testid="press-boilerplate">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{C.boilerplateHeading}</h2>
            <div className="mt-4 space-y-4 text-neutral-700 leading-relaxed">
              {C.boilerplate.map((t) => (
                <p key={t.slice(0, 40)}>{t}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="press-facts">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{C.factsHeading}</h2>
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {C.facts.map((f) => (
              <div key={f.label} className="bg-white border border-black/10 rounded-2xl p-6">
                <dt className="text-xs uppercase tracking-wider text-neutral-500">{f.label}</dt>
                <dd className="mt-1 text-[#0A0A0A] font-semibold leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white" data-testid="press-recognition">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{C.recognitionHeading}</h2>
            <Bullets items={C.recognition} />
            <ChamberBadge className="mt-8" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{C.topicsHeading}</h2>
            <Bullets items={C.topics} />
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="press-contact">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{C.contactHeading}</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">{C.contact}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <img src="/92-limo-logo.png" alt="92 Limo Service logo" width="160" height="160" loading="lazy" className="h-28 w-auto rounded-md border border-black/10" />
            <a href="/92-limo-logo.png" download className="text-sm font-semibold text-[#B8860B] hover:underline">
              Download logo (PNG)
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
