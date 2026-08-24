import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BRAND, SOCIAL } from "@/lib/data";

// lucide-react has no TikTok brand glyph, so provide a minimal inline one.
const TikTok = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.5 3c.28 2.02 1.44 3.34 3.5 3.5v2.4c-1.18.11-2.28-.18-3.5-.86v5.86c0 3.62-2.57 5.9-5.86 5.9C7.98 21.8 5.9 19.7 5.9 16.9c0-2.88 2.3-4.86 5.15-4.68v2.5c-.4-.09-.82-.09-1.2-.02-1.1.2-1.86 1-1.78 2.18.08 1.1.98 1.92 2.1 1.86 1.2-.03 2.06-.98 2.06-2.28V3h2.27z" />
  </svg>
);

const SOCIAL_ICONS = { Facebook, Instagram, TikTok };

// Condensed footer. The full location/route directory lives on /service-areas
// (linked below as "View All Service Areas") — keep this list short on purpose.
export const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Airport Transportation", to: "/airport-transportation" },
      { label: "Corporate Transportation", to: "/corporate-transportation" },
      { label: "Hourly Chauffeur", to: "/hourly-chauffeur" },
      { label: "Wedding Transportation", to: "/wedding-transportation" },
      { label: "Long Distance", to: "/long-distance-transportation" },
    ],
  },
  {
    heading: "Airports",
    links: [
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
      { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
      { label: "PHL Airport Car Service", to: "/philadelphia-airport-car-service" },
    ],
  },
  {
    heading: "Popular Areas",
    links: [
      { label: "Baltimore", to: "/baltimore-limo-service" },
      { label: "Washington DC", to: "/washington-dc-limo-service" },
      { label: "Annapolis", to: "/annapolis-limo-service" },
      { label: "Columbia", to: "/columbia-md-limo-service" },
      { label: "Northern Virginia", to: "/executive-car-service-virginia" },
    ],
    more: { label: "View All Service Areas", to: "/service-areas" },
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Fleet", to: "/fleet" },
      { label: "Reviews", to: "/reviews" },
      { label: "Contact", to: "/contact" },
      { label: "Book a Ride", to: "/booking" },
    ],
  },
];

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", to: "/privacy-policy", testId: "footer-privacy-link" },
  { label: "Terms & Conditions", to: "/terms-conditions", testId: "footer-terms-link" },
  { label: "Cancellation Policy", to: "/policies#cancellation" },
  { label: "Waiting-Time Policy", to: "/policies#waiting-time" },
  { label: "No-Show Policy", to: "/policies#no-show" },
  { label: "Vehicle Substitution", to: "/policies#vehicle-substitution" },
  { label: "Payment Authorization", to: "/policies#payment-authorization" },
];

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-[#070809] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img src="/92-limo-logo.png" alt="92 Limo Service" className="h-20 w-auto rounded-md" />
            </Link>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-sm">
              {BRAND.legal}. Luxury airport, corporate and chauffeur service across
              Washington DC, Maryland, and Northern Virginia — {BRAND.psc}.
            </p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a href={BRAND.phoneHref} data-testid="footer-phone" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-[#D4AF37]">
                  <Phone size={15} className="text-[#D4AF37]" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-[#D4AF37]">
                  <Mail size={15} className="text-[#D4AF37]" /> {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin size={15} className="text-[#D4AF37] mt-0.5" />
                <span>Maryland-based · BWI · DCA · IAD · PHL · Available 24/7</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIAL.map((s, i) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`social-link-${i}`}
                    aria-label={`92 Limo Service on ${s.label}`}
                    className="w-9 h-9 rounded-full bg-[#15161A] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white tracking-wide">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      data-testid={`footer-link-${l.to}`}
                      to={l.to}
                      className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                {col.more && (
                  <li>
                    <Link
                      to={col.more.to}
                      data-testid="footer-all-service-areas"
                      className="text-sm text-[#B8860B] font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      {col.more.label} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved. {BRAND.psc}.</span>
          <nav aria-label="Policies" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
            {FOOTER_LEGAL.map((l, i) => (
              <span key={l.to} className="flex items-center gap-3">
                <Link to={l.to} data-testid={l.testId} className="hover:text-[#D4AF37] transition-colors">
                  {l.label}
                </Link>
                {i < FOOTER_LEGAL.length - 1 && <span className="text-neutral-700">·</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
