import { Seo } from "@/components/site/Seo";
import { Hero } from "@/components/site/Hero";
import { Fleet } from "@/components/site/Fleet";
import { Services } from "@/components/site/Services";
import { Airports } from "@/components/site/Airports";
import { PopularRoutes } from "@/components/site/PopularRoutes";
import { BwiDcaHighlights } from "@/components/site/BwiDcaHighlights";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { AboutHome } from "@/components/site/AboutHome";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { Faq } from "@/components/site/Faq";
import { Testimonials } from "@/components/site/Testimonials";
import { Awards } from "@/components/site/Awards";
import { CTASection } from "@/components/site/CTASection";
import { FAQS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Seo
        title="BWI, DCA & IAD Limo & Car Service | 92 Limo Service"
        description="Chauffeured limo & black car service across MD, DC & VA — BWI/DCA/IAD transfers, weddings, corporate travel. Flat rates 24/7. Call (877) 609-1919."
        path="/"
      />
      <Hero />
      <Testimonials featuredOnly limit={5} />
      <Services />
      <Fleet />
      <Airports />
      <BwiDcaHighlights />
      <PopularRoutes />
      <WhyChooseUs />
      <AboutHome />
      <ServiceAreas />
      <Faq
        faqs={FAQS}
        heading="Frequently Asked Questions"
        schemaId="home-faq-schema"
      />
      <Awards />
      <CTASection />
    </>
  );
}
