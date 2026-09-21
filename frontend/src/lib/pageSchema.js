// JSON-LD for the static Booking / Contact / About pages. Import-free so
// scripts/prerender.js can evaluate it and emit identical markup for crawlers.
// The business node is referenced by @id — the full LimousineService entity
// lives in public/index.html.

const SCHEMA_ORIGIN = "https://www.92limo.com";
const BUSINESS_ID = `${SCHEMA_ORIGIN}/#business`;

export const pageSchema = (type, path, name, description, crumb) => ({
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
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SCHEMA_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: crumb, item: `${SCHEMA_ORIGIN}${path}` },
      ],
    },
  ],
});
