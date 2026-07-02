import { Shield, Award, Clock, Heart } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES, BRAND } from "@/lib/data";

const VALUES = [
  { icon: Shield, title: "Safety First", desc: "Licensed, insured, and rigorously maintained vehicles operated by professional chauffeurs." },
  { icon: Award, title: "Uncompromising Quality", desc: "A meticulously detailed, late-model fleet and white-glove service on every ride." },
  { icon: Clock, title: "Punctuality", desc: "Traffic-aware planning and built-in buffers mean we're early, never late." },
  { icon: Heart, title: "Genuine Hospitality", desc: "Courteous, discreet chauffeurs who treat every guest like a VIP." },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About 92 Limo Service | Chauffeurs in DC, MD & VA"
        description="Learn about 92 Limo Service (92 Transportation LLC) — luxury black car and chauffeur service across Washington DC, Maryland & Northern Virginia."
        path="/about"
      />
      <PageHero
        eyebrow="ABOUT US"
        title="The Standard for Luxury Chauffeur Service"
        subtitle="92 Transportation LLC has built its reputation on punctuality, pristine vehicles, and chauffeurs who care about every detail of your journey."
        image={IMAGES.escaladeAngle}
        alt="92 Limo Service black Cadillac Escalade luxury SUV"
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">Who We Are</h2>
            <div className="mt-5 space-y-4 text-neutral-700 leading-relaxed">
              <p>
                {BRAND.name} is a premier luxury transportation company proudly serving
                Washington DC, Maryland, and Northern Virginia. From airport transfers and
                corporate travel to weddings and long-distance journeys, we deliver a
                seamless, first-class experience from the moment you book.
              </p>
              <p>
                Our fleet of executive sedans, full-size SUVs, and Mercedes Sprinter vans is
                immaculately maintained and chauffeured by licensed, professional drivers who
                know the region inside out. With 24/7 reservations, real-time flight tracking,
                and transparent all-inclusive pricing, we make luxury travel effortless.
              </p>
              <p>
                Whether you're a frequent business traveler, planning a wedding, or coordinating
                group transportation, 92 Limo Service is the partner you can count on — every
                mile, every time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
              <img
                src={IMAGES.corporate}
                alt="Executive entering a black luxury SUV with a professional chauffeur"
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-10">
            <span className="text-xs font-semibold tracking-widest text-[#B8860B]">OUR VALUES</span>
            <h2 className="mt-3 text-3xl font-display font-bold text-[#0A0A0A]">What Drives Us</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.07}>
                <div className="h-full bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300">
                  <v.icon size={24} strokeWidth={1.6} className="text-[#B8860B]" />
                  <h3 className="mt-4 text-base font-display font-semibold text-[#0A0A0A]">{v.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
