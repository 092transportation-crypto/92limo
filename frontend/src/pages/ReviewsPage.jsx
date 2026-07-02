import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { IMAGES } from "@/lib/data";

export default function ReviewsPage() {
  return (
    <>
      <Seo
        title="Reviews & Testimonials | 92 Limo | DC, MD & VA"
        description="Read verified Google reviews from 92 Limo Service clients across Washington DC, Maryland & Northern Virginia — airport, corporate, weddings & more."
        path="/reviews"
      />
      <PageHero
        eyebrow="REVIEWS"
        title="What Our Clients Say"
        subtitle="Five-star experiences from executives, families, and event planners who trust 92 Limo Service across the DMV."
        image={IMAGES.corporate}
        alt="Satisfied 92 Limo Service corporate client with chauffeur"
      />
      <Testimonials
        eyebrow="GOOGLE REVIEWS"
        heading="Every Review, Straight From Google"
        intro="Verified 5-star reviews from real 92 Limo Service clients across Washington DC, Maryland, and Virginia."
      />
      <CTASection title="Join Our Happy Riders" subtitle="Experience the 92 Limo difference on your next trip across DC, Maryland & Virginia." />
    </>
  );
}
