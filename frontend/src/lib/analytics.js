// Lightweight GA4 helper. No-ops gracefully until REACT_APP_GA4_ID is set
// and the gtag script has loaded (handled by the Analytics component).
export const GA_ID = process.env.REACT_APP_GA4_ID || "";

export const track = (name, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};

export const trackPageView = (path) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: path, page_location: window.location.href });
  }
};
