import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { BookingForm } from "@/components/site/BookingForm";
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
        subtitle="Tell us about your trip and we'll confirm your booking with an all-inclusive quote. No payment required to request."
        image={IMAGES.airportPickup}
        alt="92 Limo Service chauffeur ready for an airport pickup"
        height="min-h-[48vh]"
      />
      <BookingForm />
      <CTASection
        title="Questions Before You Book?"
        subtitle="Call 877-679-0100 anytime, or visit our contact page for general inquiries."
      />
    </>
  );
}
