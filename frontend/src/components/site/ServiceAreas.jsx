import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { AREAS } from "@/lib/data";

export const ServiceAreas = () => {
  return (
    <section data-testid="areas-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#B8860B]">SERVICE AREAS</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-[#0A0A0A]">
            Serving the Greater DMV &amp; Beyond
          </h2>
          <p className="mt-3 text-neutral-600">
            Proudly providing luxury chauffeur service throughout Maryland,
            Washington DC, and Northern Virginia.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <span
                key={a}
                data-testid={`area-chip-${a}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F6F5F2] border border-black/10 text-sm text-neutral-700 hover:border-[#C9A227]/60 hover:text-[#B8860B] transition-all"
              >
                <MapPin size={14} strokeWidth={1.6} className="text-[#B8860B]" />
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
