import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Fleet } from "@/components/site/Fleet";
import { CTASection } from "@/components/site/CTASection";
import { IMAGES } from "@/lib/data";

export default function FleetPage() {
  return (
    <>
      <Seo
        title="Our Fleet | Luxury Sedans, SUVs & Sprinter Vans | 92 Limo Service"
        description="Explore the 92 Limo Service fleet: executive sedans, Mercedes-Benz S-Class, Cadillac Escalade ESV, Chevrolet Suburban, GMC Yukon XL, and Mercedes Sprinter executive vans. Serving DC, MD & VA. Call 877-679-0100."
        path="/fleet"
      />
      <PageHero
        eyebrow="OUR FLEET"
        title="A Luxury Vehicle for Every Journey"
        subtitle="From discreet executive sedans to spacious Sprinter vans — every vehicle is late-model, immaculately detailed, and chauffeur-driven."
        image={IMAGES.sClassNav}
        alt="Black Mercedes-Benz S-Class sedan and luxury SUV in the 92 Limo Service fleet"
      />
      <Fleet
        eyebrow="THE FLEET"
        heading="Choose Your Ride"
        intro="Passenger and luggage capacities are listed for each vehicle. Need help selecting? Call us at 877-679-0100."
      />
      <CTASection title="Found Your Vehicle?" subtitle="Reserve it now — our team confirms every booking with an all-inclusive quote." />
    </>
  );
}
