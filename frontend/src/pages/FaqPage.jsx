import { useEffect } from "react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { FAQS, IMAGES } from "@/lib/data";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "faq-schema";
    el.text = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      const ex = document.getElementById("faq-schema");
      if (ex) ex.remove();
    };
  }, []);

  return (
    <>
      <Seo
        title="FAQ | Frequently Asked Questions | 92 Limo Service DC, MD & VA"
        description="Answers to common questions about 92 Limo Service — booking, pricing, flight tracking, vehicles, service areas, and 24/7 availability in DC, MD & VA."
        path="/faq"
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking luxury chauffeur service with 92 Limo Service."
        image={IMAGES.chauffeur}
        alt="92 Limo Service chauffeur assisting a client"
      />

      <section className="py-20 lg:py-24 bg-white" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="bg-[#F6F5F2] border border-black/10 rounded-xl px-5"
                >
                  <AccordionTrigger className="text-left text-[#0A0A0A] font-semibold hover:no-underline hover:text-[#B8860B]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
