import { Phone, Mail, Globe, Clock, MapPin } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { BookingForm } from "@/components/site/BookingForm";
import { QuoteEstimator } from "@/components/site/QuoteEstimator";
import { Reveal } from "@/components/site/Reveal";
import { BRAND, IMAGES, AREAS } from "@/lib/data";

const CARDS = [
  { icon: Phone, label: "Call / Text", value: BRAND.phone, href: BRAND.phoneHref },
  { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: Globe, label: "Website", value: BRAND.website, href: "https://92limo.com" },
  { icon: Clock, label: "Hours", value: "Open 24/7 · 365 days", href: null },
];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | 92 Limo Service | DC, MD & VA Car Service"
        description="Contact 92 Limo Service for luxury chauffeur and airport car service across Washington DC, Maryland & Northern Virginia. Call 877-679-0100, get an instant estimate, or send us a message."
        path="/contact"
      />
      <PageHero
        eyebrow="CONTACT US"
        title="Get in Touch With 92 Limo Service"
        subtitle="Call us anytime, get an instant estimate, or send us a message below — we respond promptly, 24/7."
        image={IMAGES.airportPickup}
        alt="Chauffeur meeting a client at the airport for 92 Limo Service"
        height="min-h-[48vh]"
      />

      <section className="py-16 bg-white" data-testid="contact-info">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARDS.map((c, i) => {
              const inner = (
                <div className="h-full bg-[#F6F5F2] border border-black/10 rounded-2xl p-6 hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300">
                  <c.icon size={22} strokeWidth={1.6} className="text-[#B8860B]" />
                  <div className="mt-4 text-xs uppercase tracking-wider text-neutral-500">{c.label}</div>
                  <div className="mt-1 text-[#0A0A0A] font-semibold tabnums">{c.value}</div>
                </div>
              );
              return (
                <Reveal key={c.label} delay={(i % 4) * 0.06}>
                  {c.href ? (
                    <a href={c.href} data-testid={`contact-card-${i}`} className="block h-full">{inner}</a>
                  ) : (
                    <div data-testid={`contact-card-${i}`} className="h-full">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-6 bg-[#F6F5F2] border border-black/10 rounded-2xl p-6 flex items-start gap-3">
              <MapPin size={20} className="text-[#B8860B] mt-0.5 shrink-0" />
              <p className="text-sm text-neutral-700 leading-relaxed">
                <span className="text-[#0A0A0A] font-semibold">Service Areas: </span>
                {AREAS.join(" · ")} — and long-distance trips to NYC, Philadelphia &amp; Delaware.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteEstimator />
      <BookingForm />
      <ContactForm />
    </>
  );
}
