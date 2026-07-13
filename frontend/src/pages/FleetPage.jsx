import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Fleet } from "@/components/site/Fleet";
import { CTASection } from "@/components/site/CTASection";

export default function FleetPage() {
  return (
    <>
      <Seo
        title="Luxury Fleet | Sedans, SUVs & Sprinter Vans | 92 Limo"
        description="Explore the 92 Limo Service fleet: Mercedes E-Class, BMW 7 Series, Lincoln Nautilus, Chevrolet Suburban, Cadillac Escalade, Sprinter vans & limousines."
        path="/fleet"
      />
      <PageHero
        eyebrow="OUR FLEET"
        title="A Luxury Vehicle for Every Journey"
        subtitle="From discreet executive sedans to spacious Sprinter vans and limousines — every vehicle is late-model, immaculately detailed, and chauffeur-driven."
        image="/fleet/cadillac-escalade.jpg"
        alt="Black Cadillac Escalade premium SUV in the 92 Limo Service fleet"
      />
      <Fleet
        eyebrow="THE FLEET"
        heading="Choose Your Ride"
        intro="Passenger and luggage capacities are listed for each vehicle. Need help selecting? Call us at (877) 609-1919."
      />
      <CTASection title="Found Your Vehicle?" subtitle="Reserve it now — our team confirms every booking with an all-inclusive quote." />
    </>
  );
}
