// JSON-LD for the static Booking / Contact / About pages. Import-free so
// scripts/prerender.js can evaluate it and emit identical markup for crawlers.
// The business node is referenced by @id — the full LimousineService entity
// lives in public/index.html.

const SCHEMA_ORIGIN = "https://www.92limo.com";
const BUSINESS_ID = `${SCHEMA_ORIGIN}/#business`;

// BreadcrumbList is emitted site-wide by <BreadcrumbSchema> / the prerender.
//
// `about` and `mainEntity` below reference the business node by @id. That
// reference must resolve to an actual node *within this same @graph* — a
// bare {"@id": ...} with no matching @type-bearing node in the document is a
// dangling reference (the LimousineService entity in public/index.html lives
// in a separate <script> block, which structured-data parsers do not merge
// with this one). Previously this graph only ever contained the WebPage node
// itself, so `about`/`mainEntity` resolved to a typeless object — this is
// the "Invalid object type for field" error GSC reports. Including the
// LocalBusiness node here (same pattern already used by buildService/
// buildLanding/buildCity in scripts/prerender.js and the Landing/Event/City
// page components) makes the reference self-contained and valid.
export const pageSchema = (type, path, name, description) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": type,
      "@id": `${SCHEMA_ORIGIN}${path}#webpage`,
      url: `${SCHEMA_ORIGIN}${path}`,
      name,
      description,
      inLanguage: "en-US",
      isPartOf: { "@type": "WebSite", "@id": `${SCHEMA_ORIGIN}/#website`, url: `${SCHEMA_ORIGIN}/`, name: "92 Limo Service" },
      about: { "@id": BUSINESS_ID },
      mainEntity: { "@id": BUSINESS_ID },
    },
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "92 Limo Service",
      telephone: "+1-877-609-1919",
      url: SCHEMA_ORIGIN,
      priceRange: "$$$",
    },
  ],
});
