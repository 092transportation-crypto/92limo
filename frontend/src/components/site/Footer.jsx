import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { BRAND, NAV_SERVICES } from "@/lib/data";

const QUICK = [
  { label: "Home", to: "/" },
  { label: "Fleet", to: "/fleet" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Coverage", to: "/coverage" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Book a Ride", to: "/booking" },
  { label: "Contact Us", to: "/contact" },
];

const FOOTER_ROUTES = [
  { label: "BWI → Washington DC", to: "/bwi-to-washington-dc" },
  { label: "BWI → Baltimore", to: "/bwi-to-baltimore" },
  { label: "BWI → Annapolis", to: "/bwi-to-annapolis" },
  { label: "DCA → Washington DC", to: "/dca-to-washington-dc" },
  { label: "IAD → Washington DC", to: "/iad-to-washington-dc" },
  { label: "BWI → Ocean City, MD", to: "/bwi-to-ocean-city-md" },
  { label: "BWI → Rehoboth Beach", to: "/bwi-to-rehoboth-beach" },
  { label: "BWI → Bethany Beach", to: "/bwi-to-bethany-beach" },
];

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-[#070809] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          <div>
            <Link to="/" className="inline-block">
              <img src="/92-limo-logo.png" alt="92 Limo Service" className="h-20 w-auto rounded-md" />
            </Link>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              {BRAND.legal}. Luxury black car &amp; chauffeur service across
              Washington DC, Maryland, and Northern Virginia.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="https://92limo.com"
                  data-testid={`social-link-${i}`}
                  aria-label="92 Limo Service social media"
                  className="w-9 h-9 rounded-full bg-[#15161A] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link
                    data-testid={`footer-link-${q.to}`}
                    to={q.to}
                    className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_SERVICES.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/fleet" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">
                  Group Sprinter Van Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Popular Routes</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_ROUTES.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">
                    {r.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/coverage" className="text-sm text-[#B8860B] font-medium hover:text-[#D4AF37] transition-colors">
                  View all coverage →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Contact &amp; Airports</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={BRAND.phoneHref} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-[#D4AF37]">
                  <Phone size={15} className="text-[#D4AF37]" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-[#D4AF37]">
                  <Mail size={15} className="text-[#D4AF37]" /> {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-300">
                <Globe size={15} className="text-[#D4AF37]" /> {BRAND.website}
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin size={15} className="text-[#D4AF37] mt-0.5" />
                <span>BWI · DCA · IAD · DMV-wide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              data-testid="footer-privacy-link"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-700">·</span>
            <Link
              to="/terms-conditions"
              data-testid="footer-terms-link"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-neutral-700 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Available 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
