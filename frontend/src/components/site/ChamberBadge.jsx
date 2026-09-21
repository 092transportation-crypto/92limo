import { BadgeCheck, ExternalLink } from "lucide-react";
import { CHAMBER } from "@/lib/data";

// Chamber of Commerce membership badge linking to the verified listing.
export const ChamberBadge = ({ className = "" }) => (
  <a
    href={CHAMBER.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="chamber-badge"
    aria-label={`${CHAMBER.label} — view our listing (opens in a new tab)`}
    className={`group inline-flex items-center gap-4 bg-white border border-[#C9A227]/50 rounded-2xl px-6 py-4 shadow-sm hover:border-[#C9A227] hover:shadow-md transition-all ${className}`}
  >
    <span className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
      <BadgeCheck size={24} className="text-[#0A0A0A]" />
    </span>
    <span>
      <span className="block text-[#0A0A0A] font-display font-semibold">{CHAMBER.label}</span>
      <span className="flex items-center gap-1.5 text-sm text-neutral-600 group-hover:text-[#B8860B] transition-colors">
        {CHAMBER.subtitle} <ExternalLink size={13} />
      </span>
    </span>
  </a>
);
