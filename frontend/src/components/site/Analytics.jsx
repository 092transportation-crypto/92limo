import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GA_ID, track, trackPageView } from "@/lib/analytics";

// Loads GA4 (if configured) and fires conversion events for the whole site
// via a single delegated click listener — no per-component wiring needed.
export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID || window.gtag) return;
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest("a, button");
      if (!el) return;
      const tel = e.target.closest('a[href^="tel:"]');
      if (tel) {
        track("click_to_call", { phone: "(877) 609-1919", page_path: location.pathname });
        return;
      }
      const tid = el.getAttribute("data-testid") || "";
      const href = el.getAttribute("href") || "";
      if (tid.includes("book") || href === "/contact") {
        track("book_click", { source: tid || href, page_path: location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [location.pathname]);

  return null;
};
