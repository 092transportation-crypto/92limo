import { Link } from "react-router-dom";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CopyCards } from "@/components/site/PageCopy";
import { ChamberBadge } from "@/components/site/ChamberBadge";
import { BRAND, IMAGES } from "@/lib/data";
import { PARTNERS_CONTENT as C } from "@/lib/staticPages";
import { pageSchema } from "@/lib/pageSchema";

const SCHEMA = pageSchema("WebPage", "/partners", C.title, C.description);

export default function PartnersPage() {
  return (
    <>
      <Seo title={C.title} description={C.description} path="/partners" schema={SCHEMA} />
      <PageHero eyebrow="PARTNERS" title={C.h1} subtitle={C.subtitle} image={IMAGES.chauffeur} alt="Professional chauffeur opening the door of a black luxury sedan" height="min-h-[48vh]" />

      <section className="py-16 lg:py-20 bg-white" data-testid="partners-intro">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              {C.intro.map((t) => (
                <p key={t.slice(0, 40)}>{t}</p>
              ))}
            </div>
            <ChamberBadge className="mt-8" />
          </Reveal>
        </div>
      </section>

      <div className="bg-[#F6F5F2]">
        <CopyCards eyebrow="WHO IT'S FOR" heading={C.whoHeading} items={C.who} testId="partners-who" />
      </div>
      <CopyCards eyebrow="STEP BY STEP" heading={C.howHeading} items={C.how} numbered testId="partners-how" />

      <section className="py-16 lg:py-20 bg-[#F6F5F2]" data-testid="partners-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0A0A]">{C.ctaHeading}</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">{C.cta}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={`mailto:${BRAND.email}?subject=Partnership`} className="btn-press inline-flex items-center justify-center gold-gradient text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:brightness-110">
              Email {BRAND.email}
            </a>
            <Link to="/corporate-transportation" className="inline-flex items-center justify-center border border-black/15 text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:border-[#C9A227] hover:text-[#B8860B] transition-all">
              Corporate accounts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
