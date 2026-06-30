import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";

export const CTASection = ({
  title = "Ready to Ride in Luxury?",
  subtitle = "Reserve your chauffeur in minutes. Available 24/7 across DC, Maryland & Northern Virginia.",
}) => {
  return (
    <section data-testid="cta-section" className="py-20 lg:py-24 bg-[#F6F5F2]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0A0A0A] p-10 sm:p-14 text-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#C9A227]/20 blur-3xl" />
            <h2 className="relative text-3xl sm:text-4xl font-display font-bold text-white">
              {title}
            </h2>
            <p className="relative mt-4 text-neutral-300 max-w-xl mx-auto">{subtitle}</p>
            <div className="relative mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                data-testid="cta-book-btn"
                to="/contact"
                className="group btn-press gold-gradient text-[#0A0A0A] font-bold px-8 py-4 rounded-full hover:brightness-105 flex items-center justify-center gap-2"
              >
                Book Now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                data-testid="cta-call-btn"
                href={BRAND.phoneHref}
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-[#C9A227] hover:text-[#C9A227] transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call {BRAND.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
