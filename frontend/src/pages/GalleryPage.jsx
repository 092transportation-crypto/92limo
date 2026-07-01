import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/lib/data";

const GALLERY = [
  { img: IMAGES.escaladeFront, alt: "Black Cadillac Escalade ESV at night in Maryland" },
  { img: IMAGES.sClassNav, alt: "Black Mercedes-Benz S-Class sedan and Lincoln Navigator SUV" },
  { img: IMAGES.sprinterGreen, alt: "Mercedes Sprinter executive van luxury interior with ambient lighting" },
  { img: IMAGES.escaladeAngle, alt: "Black Cadillac Escalade ESV luxury SUV" },
  { img: IMAGES.sprinterPink, alt: "Mercedes Sprinter executive van interior with mood lighting" },
  { img: IMAGES.chauffeur, alt: "Professional chauffeur opening the door of a black luxury sedan" },
  { img: IMAGES.corporate, alt: "Executive entering a black luxury SUV for corporate travel" },
  { img: IMAGES.airportPickup, alt: "Chauffeur meet and greet at airport arrivals" },
  { img: IMAGES.wedding, alt: "Black luxury sedan decorated for a wedding" },
  { img: IMAGES.sprinterExterior, alt: "Black Mercedes Sprinter executive van exterior" },
  { img: IMAGES.sedan, alt: "Black executive luxury sedan on a city street" },
  { img: IMAGES.longDistance, alt: "Black luxury sedan on an open highway for long-distance travel" },
];

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | Our Luxury Fleet & Chauffeur Service | 92 Limo DC, MD & VA"
        description="Browse the 92 Limo Service gallery — luxury sedans, Cadillac Escalade, Sprinter vans, chauffeurs, and airport pickups across DC, Maryland & Virginia."
        path="/gallery"
      />
      <PageHero
        eyebrow="GALLERY"
        title="Our Fleet & Service in Pictures"
        subtitle="A closer look at the vehicles, interiors, and white-glove chauffeur experience that define 92 Limo Service."
        image={IMAGES.escaladeFront}
        alt="92 Limo Service luxury vehicles gallery"
      />

      <section className="py-20 lg:py-24 bg-white" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {GALLERY.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-black/10 shadow-sm group">
                  <img
                    src={g.img}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
