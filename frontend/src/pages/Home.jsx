import { Seo } from "@/components/site/Seo";
import { Hero } from "@/components/site/Hero";
import { Fleet } from "@/components/site/Fleet";
import { Services } from "@/components/site/Services";
import { Airports } from "@/components/site/Airports";
import { PopularRoutes } from "@/components/site/PopularRoutes";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Awards } from "@/components/site/Awards";
import { CTASection } from "@/components/site/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="92 Limo Service | Luxury Chauffeur DC, MD & VA"
        description="Luxury black car & chauffeur service in DC, Maryland & Virginia — airport transfers (BWI, DCA, IAD), corporate travel, weddings & 24/7 rides."
        path="/"
      />
      <Hero />
      <Services />
      <Fleet />
      <Airports />
      <PopularRoutes />
      <WhyChooseUs />
      <Testimonials featuredOnly />
      <Awards />
      <CTASection />
    </>
  );
}
