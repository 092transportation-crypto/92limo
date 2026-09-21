import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyBar } from "@/components/site/StickyBar";
import { Analytics } from "@/components/site/Analytics";
import { BreadcrumbSchema } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { CITIES, SERVICE_PAGES } from "@/lib/data";
import { PAGE_FAQS, cityFaqs } from "@/lib/pageFaqs";

// FAQ block (accordion + FAQPage JSON-LD) for pages whose questions live in
// lib/pageFaqs.js. Service pages place their own FAQ inline, so skip them here.
const PageFaq = ({ pathname }) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (SERVICE_PAGES[path.slice(1)] || path === "/car-seat-service") return null;
  let faqs = PAGE_FAQS[path];
  if (!faqs && path.startsWith("/airport-car-service/")) {
    const city = CITIES.find((c) => c.slug === path.split("/").pop());
    if (city) faqs = cityFaqs(city);
  }
  if (!faqs) return null;
  return <Faq faqs={faqs} heading="Questions & Answers" schemaId="page-faq-schema" />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
};

export default function Layout() {
  const location = useLocation();
  return (
    <div className="bg-[#090A0C] min-h-screen pb-16 lg:pb-0">
      <ScrollToTop />
      <Analytics />
      <BreadcrumbSchema />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
            <PageFaq pathname={location.pathname} />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
