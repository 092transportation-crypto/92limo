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

// Per-pillar-service-page related landing-page links, rendered in the
// "Related Services & Popular Pages" section of each /SERVICE_PAGES/<slug>
// page. Moved here (2026-10-28, round 8) from a local constant inside
// src/components/site/ServiceDetail.jsx, which scripts/prerender.js's
// buildService() never mirrored — a real drift bug where crawled HTML on
// every /airport-transportation, /corporate-transportation, etc. page carried
// fewer internal links than real visitors saw. Single source of truth now,
// same pattern as PILLAR_LINKS/relatedLandingPages above.
export const SERVICE_RELATED_LANDING_PAGES = {
  "airport-transportation": [
    { label: "BWI Airport Transportation", to: "/bwi-airport-transportation" },
    { label: "DCA Reagan Airport Limo", to: "/dca-airport-limo" },
    { label: "IAD Dulles Airport Limo", to: "/iad-airport-limo" },
    { label: "Georgetown University Car Service", to: "/georgetown-university-car-service" },
    { label: "Johns Hopkins University Car Service", to: "/johns-hopkins-university-car-service" },
  ],
  "corporate-transportation": [
    { label: "Corporate Limo Service Washington DC", to: "/corporate-limo-dc" },
    { label: "Executive Car Service Maryland", to: "/executive-car-service-maryland" },
    { label: "Black Car Service Baltimore", to: "/black-car-service-baltimore" },
    { label: "Black Car Service Washington DC", to: "/black-car-service-dc" },
    { label: "Chauffeur Service Baltimore", to: "/chauffeur-service-baltimore" },
    { label: "Chauffeur Service Washington DC", to: "/chauffeur-service-washington-dc" },
    { label: "Potomac, MD Corporate Car Service", to: "/potomac-corporate-car-service" },
    { label: "McLean, VA Corporate Car Service", to: "/mclean-va-corporate-car-service" },
    { label: "Reston, VA Corporate Car Service", to: "/reston-va-corporate-car-service" },
    { label: "Employee Shuttle Service — Maryland & DC", to: "/employee-shuttle-service-maryland" },
  ],
  "wedding-transportation": [
    { label: "Wedding Limo Service Maryland", to: "/wedding-limo-maryland" },
    { label: "Wedding Car Service Washington DC", to: "/wedding-car-service-dc" },
    { label: "Laurel, MD Wedding Limo Service", to: "/laurel-md-wedding-limo-service" },
    { label: "Owings Mills, MD Wedding Limo Service", to: "/owings-mills-wedding-limo-service" },
    { label: "Arlington, VA Wedding Limo Service", to: "/arlington-va-wedding-limo-service" },
    { label: "Alexandria, VA Wedding Limo Service", to: "/alexandria-va-wedding-limo-service" },
    { label: "Fairfax, VA Wedding Limo Service", to: "/fairfax-va-wedding-limo-service" },
  ],
  "wine-tours": [
    { label: "Wine Tour Limo Maryland", to: "/wine-tour-limo-maryland" },
    { label: "Brewery & Distillery Tour Transportation — Maryland", to: "/brewery-distillery-tour-transportation-maryland" },
  ],
  "birthday-celebrations": [
    { label: "Birthday Limo Service Maryland", to: "/birthday-limo-maryland" },
    { label: "Bachelorette Party Limo", to: "/bachelorette-party-limo" },
    { label: "Casino Trip Limo Service", to: "/casino-trip-limo" },
    { label: "Quinceañera Limo Service — Maryland", to: "/quinceanera-limo-service-maryland" },
  ],
  "anniversary-limo-service": [
    { label: "Luxury Car Service Maryland", to: "/luxury-car-service-maryland" },
    { label: "Laurel Park Racetrack Transportation", to: "/laurel-park-racetrack-transportation" },
    { label: "National Cherry Blossom Festival Transportation", to: "/national-cherry-blossom-festival-transportation-dc" },
  ],
  "prom-transportation": [
    { label: "Prom Limo Service Maryland", to: "/prom-limo-maryland" },
    { label: "Prom Limo Baltimore", to: "/prom-limo-baltimore" },
    { label: "Graduation Limo Service Maryland", to: "/graduation-limo-maryland" },
    { label: "Hunt Valley Prom Limo Service", to: "/hunt-valley-prom-limo-service" },
    { label: "Owings Mills Prom Limo Service", to: "/owings-mills-prom-limo-service" },
    { label: "Laurel, MD Prom Limo Service", to: "/laurel-md-prom-limo-service" },
    { label: "Potomac Prom Limo Service", to: "/potomac-prom-limo-service" },
  ],
  "hourly-chauffeur": [
    { label: "Chauffeur Service Baltimore", to: "/chauffeur-service-baltimore" },
    { label: "Chauffeur Service Washington DC", to: "/chauffeur-service-washington-dc" },
    { label: "Executive Car Service Maryland", to: "/executive-car-service-maryland" },
    { label: "Brewery & Distillery Tour Transportation — Maryland", to: "/brewery-distillery-tour-transportation-maryland" },
  ],
  "long-distance-transportation": [
    { label: "Baltimore to Philadelphia Limo", to: "/baltimore-to-philadelphia-limo" },
    { label: "DC to New York Car Service", to: "/dc-to-new-york-car-service" },
    { label: "Maryland to JFK Airport Car Service", to: "/maryland-to-jfk-airport" },
  ],
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
