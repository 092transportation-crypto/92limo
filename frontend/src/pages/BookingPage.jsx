import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { LimoBizWidget } from "@/components/site/LimoBizWidget";
import { CTASection } from "@/components/site/CTASection";
import { IMAGES } from "@/lib/data";

export default function BookingPage() {
  return (
    <>
      <Seo
        title="Book a Ride | 92 Limo Service | DC, MD & VA Chauffeur"
        description="Reserve luxury chauffeur and airport car service with 92 Limo Service across DC, Maryland & Virginia. Request an all-inclusive quote, 24/7."
        path="/booking"
      />
      <PageHero
        eyebrow="BOOK NOW"
        title="Reserve Your Ride"
        subtitle="Book online in minutes with instant quotes and confirmed reservations — 24/7."
        image={IMAGES.airportPickup}
        alt="92 Limo Service chauffeur ready for an airport pickup"
        height="min-h-[48vh]"
      />
      <LimoBizWidget />
      <CTASection
        title="Questions Before You Book?"
        subtitle="Call (877) 609-1919 anytime, or visit our contact page for general inquiries."
      />
    </>
  );
}
