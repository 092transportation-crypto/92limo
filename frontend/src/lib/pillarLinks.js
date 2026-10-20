// Maps a geo/service landing page back to its broader pillar service page
// (data.js SERVICE_PAGES) so the two always link to each other instead of
// competing for the same head keyword unlinked.
//
// Import-free (no `@/...` imports) so scripts/prerender.js can evaluate this
// file directly in its vm sandbox alongside the rest of the content data —
// this is the single source of truth shared with
// src/components/site/LandingPage.jsx, which imports it normally. Keeping
// one file means the "Also Serving" related-links block that crawlers see
// (via prerender.js) always matches what real visitors see (via the live
// React page) instead of the two silently drifting apart.
export const PILLAR_LINKS = {
  "bwi-airport-car-service": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "bwi-airport-transportation": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "bwi-airport-shuttle": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "dca-airport-limo": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "dca-airport-car-service": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "iad-airport-limo": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "iad-airport-car-service": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "airport-limo-baltimore": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "airport-limo-washington-dc": { slug: "airport-transportation", title: "Airport Car Service — BWI, DCA, IAD, MTN & PHL" },
  "wedding-limo-maryland": { slug: "wedding-transportation", title: "Wedding Limo & Chauffeur Service" },
  "wedding-car-service-dc": { slug: "wedding-transportation", title: "Wedding Limo & Chauffeur Service" },
  "corporate-limo-dc": { slug: "corporate-transportation", title: "Corporate & Executive Car Service" },
  "executive-car-service-maryland": { slug: "corporate-transportation", title: "Corporate & Executive Car Service" },
  "black-car-service-baltimore": { slug: "corporate-transportation", title: "Corporate & Executive Car Service" },
  "black-car-service-dc": { slug: "corporate-transportation", title: "Corporate & Executive Car Service" },
  "chauffeur-service-baltimore": { slug: "hourly-chauffeur", title: "Hourly Chauffeur Service" },
  "chauffeur-service-washington-dc": { slug: "hourly-chauffeur", title: "Hourly Chauffeur Service" },
  "wine-tour-limo-maryland": { slug: "wine-tours", title: "Wine Tour Chauffeur Service" },
  "birthday-limo-maryland": { slug: "birthday-celebrations", title: "Birthday Limo & Party Transportation" },
  "bachelorette-party-limo": { slug: "birthday-celebrations", title: "Birthday Limo & Party Transportation" },
  "prom-limo-maryland": { slug: "prom-transportation", title: "Prom Limo Service" },
  "prom-limo-baltimore": { slug: "prom-transportation", title: "Prom Limo Service" },
  "graduation-limo-maryland": { slug: "prom-transportation", title: "Prom Limo Service" },
  "luxury-car-service-maryland": { slug: "anniversary-limo-service", title: "Anniversary Limo & Chauffeur Service" },
  "baltimore-to-philadelphia-limo": { slug: "long-distance-transportation", title: "Long-Distance Private Car Service" },
  "baltimore-to-new-york-limo": { slug: "long-distance-transportation", title: "Long-Distance Private Car Service" },
  "dc-to-new-york-car-service": { slug: "long-distance-transportation", title: "Long-Distance Private Car Service" },
  "maryland-to-jfk-airport": { slug: "long-distance-transportation", title: "Long-Distance Private Car Service" },
  "maryland-to-newark-airport": { slug: "long-distance-transportation", title: "Long-Distance Private Car Service" },
};

// Ranks sibling landing pages by slug-token overlap (ignoring generic words),
// then backfills in key order so every page — including the generated ones —
// always cross-links six others. Shared by LandingPage.jsx (live) and
// scripts/prerender.js (crawled HTML) so both compute the identical list.
export function relatedLandingPages(slug, LANDING_PAGES) {
  const STOP = new Set(["limo", "service", "car", "airport", "transportation", "to", "from", "the", "md", "pa", "de", "va", "dc"]);
  const tokens = new Set(slug.split("-").filter((t) => !STOP.has(t)));
  const ranked = Object.keys(LANDING_PAGES)
    .filter((s) => s !== slug)
    .map((s) => ({
      slug: s,
      title: LANDING_PAGES[s].h1 || s,
      score: s.split("-").filter((t) => tokens.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score);
  const pillar = PILLAR_LINKS[slug];
  if (!pillar) return ranked.slice(0, 6);
  return [pillar, ...ranked.filter((r) => r.slug !== pillar.slug)].slice(0, 6);
}
