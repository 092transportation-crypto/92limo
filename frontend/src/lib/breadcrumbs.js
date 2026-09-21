// Breadcrumb trail for any pathname. Import-free: the React <Breadcrumbs> and
// scripts/prerender.js both call breadcrumbTrail() with the site data maps so
// the visible trail, the BreadcrumbList JSON-LD and the crawler HTML agree.

const CRUMB_ORIGIN = "https://www.92limo.com";

const STATIC_CRUMBS = {
  "/fleet": "Fleet",
  "/services": "Services",
  "/service-areas": "Service Areas",
  "/about": "About",
  "/reviews": "Reviews",
  "/gallery": "Gallery",
  "/faq": "FAQ",
  "/contact": "Contact",
  "/booking": "Book a Ride",
  "/privacy-policy": "Privacy Policy",
  "/terms-conditions": "Terms & Conditions",
  "/policies": "Policies",
  "/coverage": "Coverage Area",
  "/blog": "Blog",
  "/press": "Press & Media",
  "/partners": "Partners",
};

const HOME_CRUMB = { label: "Home", to: "/" };
const SERVICES_CRUMB = { label: "Services", to: "/services" };
const AREAS_CRUMB = { label: "Service Areas", to: "/service-areas" };
const BLOG_CRUMB = { label: "Blog", to: "/blog" };

// data: { services, landing, cities, posts, guides } — any may be omitted.
export const breadcrumbTrail = (pathname, data = {}) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (path === "/" || path === "") return null;
  const slug = path.slice(1);
  const here = (label) => ({ label, to: path });

  if (STATIC_CRUMBS[path]) return [HOME_CRUMB, here(STATIC_CRUMBS[path])];
  if (path === "/car-seat-service") return [HOME_CRUMB, SERVICES_CRUMB, here("Car Seat Service")];
  if (data.services && data.services[slug]) return [HOME_CRUMB, SERVICES_CRUMB, here(data.services[slug].h1)];
  if (path.startsWith("/airport-car-service/")) {
    const city = (data.cities || []).find((c) => c.slug === path.split("/").pop());
    return [HOME_CRUMB, AREAS_CRUMB, here(city ? `${city.name} Airport Car Service` : "Airport Car Service")];
  }
  if (path.startsWith("/blog/")) {
    const post = (data.posts || []).find((p) => p.slug === path.split("/").pop());
    return [HOME_CRUMB, BLOG_CRUMB, here(post ? post.title : "Article")];
  }
  const guide = (data.guides || []).find((g) => g.slug === slug);
  if (guide) return [HOME_CRUMB, BLOG_CRUMB, here(guide.title)];
  if (data.landing && data.landing[slug]) return [HOME_CRUMB, AREAS_CRUMB, here(data.landing[slug].h1)];
  // Runtime event pages and anything unknown: title-case the slug.
  const label = slug.split("/").pop().split("-").map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(" ");
  return [HOME_CRUMB, here(label)];
};

export const breadcrumbSchema = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: `${CRUMB_ORIGIN}${c.to === "/" ? "/" : c.to}`,
  })),
});
