import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { Airports } from "@/components/site/Airports";
import { PopularRoutes } from "@/components/site/PopularRoutes";
import { CTASection } from "@/components/site/CTASection";
import { IMAGES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Airport, Corporate, Hourly & Wedding Car Service | 92 Limo"
        description="92 Limo Service offers airport car service (BWI, DCA, IAD), corporate transportation, hourly chauffeur, weddings, point-to-point and long-distance private car service across DC, Maryland & Northern Virginia. Call 877-679-0100."
        path="/services"
      />
      <PageHero
        eyebrow="OUR SERVICES"
        title="Premium Chauffeur Services Across the DMV"
        subtitle="Whatever the occasion, 92 Limo Service delivers reliable, luxurious transportation tailored to you."
        image={IMAGES.chauffeur}
        alt="Professional chauffeur opening the door of a black luxury car at night"
      />
      <Services eyebrow="EXPLORE" heading="What We Offer" intro="Select a service to learn more, or call us to plan a custom itinerary." />
      <Airports />
      <PopularRoutes />
      <CTASection />
    </>
  );
}
