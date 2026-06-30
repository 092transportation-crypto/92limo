import { Seo } from "@/components/site/Seo";
import { Hero } from "@/components/site/Hero";
import { Fleet } from "@/components/site/Fleet";
import { Services } from "@/components/site/Services";
import { QuoteEstimator } from "@/components/site/QuoteEstimator";
import { Airports } from "@/components/site/Airports";
import { PopularRoutes } from "@/components/site/PopularRoutes";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="92 Limo Service | Luxury Black Car & Chauffeur Service in DC, MD & VA"
        description="92 Limo Service provides luxury black car and chauffeur service in Washington DC, Maryland & Northern Virginia. Airport transfers (BWI, DCA, IAD), corporate travel, weddings & long-distance trips. Call 877-679-0100."
        path="/"
      />
      <Hero />
      <Services />
      <Fleet />
      <QuoteEstimator />
      <Airports />
      <PopularRoutes />
      <WhyChooseUs />
      <Testimonials featuredOnly />
      <CTASection />
    </>
  );
}
