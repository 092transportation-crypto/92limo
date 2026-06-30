import { useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

// Renders an FAQ accordion AND injects FAQPage JSON-LD schema into <head>.
export const Faq = ({
  faqs,
  eyebrow = "FAQ",
  heading = "Frequently Asked Questions",
  schemaId = "faq-schema",
}) => {
  useEffect(() => {
    if (!faqs || !faqs.length) return undefined;
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = schemaId;
    el.text = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      const ex = document.getElementById(schemaId);
      if (ex) ex.remove();
    };
  }, [faqs, schemaId]);

  if (!faqs || !faqs.length) return null;

  return (
    <section className="py-16 lg:py-24 bg-white" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-10">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">{heading}</h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="bg-[#F6F5F2] border border-black/10 rounded-xl px-5"
              >
                <AccordionTrigger className="text-left text-[#0A0A0A] font-semibold hover:no-underline hover:text-[#B8860B]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
