import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import FleetPage from "@/pages/FleetPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetail from "@/components/site/ServiceDetail";
import ServiceAreasPage from "@/pages/ServiceAreasPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ReviewsPage from "@/pages/ReviewsPage";
import FaqPage from "@/pages/FaqPage";
import GalleryPage from "@/pages/GalleryPage";
import CityPage from "@/pages/CityPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsConditionsPage from "@/pages/TermsConditionsPage";
import Admin from "@/pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/airport-transportation" element={<ServiceDetail slug="airport-transportation" />} />
            <Route path="/corporate-transportation" element={<ServiceDetail slug="corporate-transportation" />} />
            <Route path="/hourly-chauffeur" element={<ServiceDetail slug="hourly-chauffeur" />} />
            <Route path="/wedding-transportation" element={<ServiceDetail slug="wedding-transportation" />} />
            <Route path="/wine-tours" element={<ServiceDetail slug="wine-tours" />} />
            <Route path="/birthday-celebrations" element={<ServiceDetail slug="birthday-celebrations" />} />
            <Route path="/prom-transportation" element={<ServiceDetail slug="prom-transportation" />} />
            <Route path="/long-distance-transportation" element={<ServiceDetail slug="long-distance-transportation" />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/airport-car-service/:city" element={<CityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
