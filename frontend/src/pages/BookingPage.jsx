import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm } from "@/components/site/InquiryForm";
import { CTASection } from "@/components/site/CTASection";
import { BookingPolicies } from "@/components/site/BookingPolicies";
import { Faq } from "@/components/site/Faq";
import { CopyCards, CopySections } from "@/components/site/PageCopy";
import { IMAGES } from "@/lib/data";
import { BOOKING_CONTENT } from "@/lib/staticPages";
import { pageSchema } from "@/lib/pageSchema";

const TITLE = "Book a Ride | 92 Limo Service | DC, MD & VA Chauffeur";
const DESCRIPTION =
  "Reserve luxury chauffeur and airport car service with 92 Limo Service across DC, Maryland & Virginia. Transparent quotes, 24/7.";
const SCHEMA = pageSchema("WebPage", "/booking", TITLE, DESCRIPTION, "Book a Ride");

export default function BookingPage() {
  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path="/booking" schema={SCHEMA} />
      <PageHero
        eyebrow="BOOK NOW"
        title="Reserve Your Ride"
        subtitle="Request your ride in under a minute — we confirm every reservation with a transparent quote, 24/7."
        image={IMAGES.airportPickup}
        alt="92 Limo Service chauffeur ready for an airport pickup"
        height="min-h-[48vh]"
      />
      <InquiryForm />
      <CopyCards eyebrow="STEP BY STEP" heading={BOOKING_CONTENT.stepsHeading} items={BOOKING_CONTENT.steps} numbered testId="booking-steps" />
      <BookingPolicies />
      <CopySections sections={BOOKING_CONTENT.sections} testId="booking-copy" />
      <Faq faqs={BOOKING_CONTENT.faqs} heading={BOOKING_CONTENT.faqHeading} schemaId="booking-faq-schema" />
      <CTASection
        title="Questions Before You Book?"
        subtitle="Call (877) 609-1919 anytime, or visit our contact page for general inquiries."
      />
    </>
  );
}
