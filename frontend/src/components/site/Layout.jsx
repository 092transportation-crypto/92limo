import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { StickyBar } from "@/components/site/StickyBar";
import { Analytics } from "@/components/site/Analytics";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
};

export default function Layout() {
  return (
    <div className="bg-[#090A0C] min-h-screen pb-16 lg:pb-0">
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
