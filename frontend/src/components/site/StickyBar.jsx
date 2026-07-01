import { Link } from "react-router-dom";
import { Phone, CalendarCheck } from "lucide-react";
import { BRAND } from "@/lib/data";

export const StickyBar = () => {
  return (
    <div
      data-testid="mobile-sticky-bar"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 glass border-t border-white/10 px-4 py-3 flex gap-3"
    >
      <a
        data-testid="sticky-call-btn"
        href={BRAND.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-white font-semibold py-3 rounded-full text-sm"
      >
        <Phone size={17} /> Call Now
      </a>
      <Link
        data-testid="sticky-book-btn"
        to="/booking"
        className="flex-1 btn-press flex items-center justify-center gap-2 gold-gradient text-[#090A0C] font-bold py-3 rounded-full text-sm"
      >
        <CalendarCheck size={17} /> Book Now
      </Link>
    </div>
  );
};
