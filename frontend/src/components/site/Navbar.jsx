import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BRAND, NAV_SERVICES } from "@/lib/data";

const ROUTES_MENU = [
  { to: "/bwi-to-washington-dc", label: "BWI → Washington DC" },
  { to: "/bwi-to-baltimore", label: "BWI → Baltimore" },
  { to: "/bwi-to-annapolis", label: "BWI → Annapolis" },
  { to: "/bwi-to-bethesda", label: "BWI → Bethesda" },
  { to: "/bwi-to-columbia", label: "BWI → Columbia" },
  { to: "/bwi-to-arlington", label: "BWI → Arlington" },
  { to: "/bwi-to-alexandria", label: "BWI → Alexandria" },
  { to: "/bwi-to-dulles", label: "BWI → Dulles (IAD)" },
  { to: "/dca-to-washington-dc", label: "DCA → Washington DC" },
  { to: "/iad-to-washington-dc", label: "IAD → Washington DC" },
  { to: "/bwi-to-ocean-city-md", label: "BWI → Ocean City, MD" },
  { to: "/bwi-to-rehoboth-beach", label: "BWI → Rehoboth Beach" },
  { to: "/bwi-to-bethany-beach", label: "BWI → Bethany Beach" },
  { to: "/dc-to-bethany-beach", label: "DC → Bethany Beach" },
  { to: "/coverage", label: "View all coverage →" },
];

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Fleet", to: "/fleet" },
  { label: "Services", to: "/services", children: NAV_SERVICES },
  { label: "Routes", to: "/coverage", children: ROUTES_MENU, wide: true },
  { label: "Service Areas", to: "/service-areas" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // which desktop dropdown is open
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const solid = scrolled || open;
  const baseText = solid ? "text-neutral-700" : "text-white/90";
  const linkCls = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-[#B8860B]" : `${baseText} hover:text-[#B8860B]`
    }`;

  return (
    <motion.header
      data-testid="main-navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "glass border-b border-black/10 py-2.5 shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link data-testid="logo-home" to="/" className="flex items-center group shrink-0">
          <img
            src="/92-limo-logo.png"
            alt="92 Limo Service"
            className={`w-auto rounded-md transition-all duration-300 group-hover:scale-105 ${
              solid ? "h-12" : "h-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
            }`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {LINKS.map((l) =>
            l.children ? (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => setOpenMenu(l.to)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <NavLink to={l.to} data-testid={`nav-${l.label.toLowerCase()}`} className={linkCls}>
                  <span className="flex items-center gap-1">
                    {l.label} <ChevronDown size={14} />
                  </span>
                </NavLink>
                {openMenu === l.to && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div
                      className={`bg-white border border-black/10 rounded-xl p-2 shadow-xl ${
                        l.wide ? "w-[34rem] grid grid-cols-2 gap-x-1" : "w-60"
                      }`}
                    >
                      {l.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          data-testid={`nav-dropdown-${c.to}`}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:text-[#B8860B] hover:bg-[#F6F5F2] rounded-lg transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`} className={linkCls}>
                {l.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            data-testid="nav-call-btn"
            href={BRAND.phoneHref}
            className={`hidden xl:flex items-center gap-2 text-sm font-semibold transition-colors ${solid ? "text-[#0A0A0A]" : "text-white"} hover:text-[#B8860B]`}
          >
            <Phone size={16} strokeWidth={1.8} /> {BRAND.phone}
          </a>
          <Link
            data-testid="nav-book-btn"
            to="/booking"
            className="gold-gradient text-[#0A0A0A] text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-105 hover:scale-[1.04] active:scale-95 transition-all shadow-sm"
          >
            Book Now
          </Link>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          className={solid ? "lg:hidden text-[#0A0A0A]" : "lg:hidden text-white"}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-black/10 mt-3 px-6 py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {LINKS.map((l) => (
            <div key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className="block py-3 text-base font-medium text-neutral-800 hover:text-[#B8860B]"
              >
                {l.label}
              </NavLink>
              {l.children && (
                <div className="pl-4 pb-2 flex flex-col gap-1 border-l border-black/10 ml-1">
                  {l.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      data-testid={`mobile-dropdown-${c.to}`}
                      className="py-2 text-sm text-neutral-500 hover:text-[#B8860B]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={BRAND.phoneHref} className="flex items-center gap-2 py-3 text-base font-semibold text-[#0A0A0A]">
            <Phone size={18} /> {BRAND.phone}
          </a>
          <Link
            data-testid="mobile-book-btn"
            to="/booking"
            className="gold-gradient text-[#0A0A0A] font-bold px-5 py-3 rounded-full text-center mt-2"
          >
            Book Now
          </Link>
        </div>
      )}
    </motion.header>
  );
};
