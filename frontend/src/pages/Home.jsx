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
import { pageSchema } from "@/lib/pageSchema";

const TITLE = "Limo & Car Service in Maryland, DC & Virginia | 92 Limo";
const DESCRIPTION =
  "Chauffeured luxury limo & black car service across Maryland, DC & Virginia — airport transfers, weddings, corporate travel. Flat rates, 24/7. (877) 609-1919.";
const SCHEMA = pageSchema("WebPage", "/", TITLE, DESCRIPTION);

export default function Home() {
  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path="/" schema={SCHEMA} />
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
