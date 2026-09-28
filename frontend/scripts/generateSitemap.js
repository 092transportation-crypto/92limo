/**
 * Regenerates public/sitemap-static.xml from the site's own route data
 * (SERVICE_PAGES, CITIES, LANDING_PAGES, GUIDES, BLOG_POSTS + the fixed
 * marketing pages) so the sitemap can never drift out of sync with what
 * scripts/prerender.js actually renders — prerender.js reads its route list
 * straight back out of this same file (routesFromSitemap()).
 *
 * The live https://www.92limo.com/sitemap.xml is served by api/sitemap.js,
 * which reads this file and merges in event landing pages fetched live from
 * the 92 Limo platform backend at request time. Writing directly to
 * public/sitemap.xml instead would shadow that rewrite (Vercel serves a
 * static file at an exact path before evaluating rewrites), silently
 * disabling the live event-page merge — so this script always targets
 * sitemap-static.xml, the file that pipeline actually reads.
 *
 * Usage: node scripts/generateSitemap.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ORIGIN = "https://www.92limo.com";
const OUT = path.join(ROOT, "public/sitemap-static.xml");
const MAX_URLS_PER_SITEMAP = 50000; // Google/sitemaps.org limit

// ---------------------------------------------------------------------------
// Load the site's own content data the same way scripts/prerender.js does —
// strip ES module syntax and evaluate in a throwaway VM context.
// ---------------------------------------------------------------------------
function loadData() {
  const plain = (file) =>
    fs
      .readFileSync(path.join(ROOT, file), "utf8")
      .replace(/^\s*import[^\n]*\n/gm, "")
      .replace(/export\s+const/g, "const")
      .replace(/export\s+function/g, "function")
      .replace(/export\s+/g, "");
  const src = [
    "src/lib/data.js",
    "src/lib/landingPagesGenerated.js",
    "src/lib/marylandPages.js",
    "src/lib/marylandPagesBatch3.js",
    "src/lib/marylandPagesBatch4.js",
    "src/lib/marylandPagesBatch5.js",
    "src/lib/blogPostsBatch2.js",
    "src/lib/blogPostsGenerated.js",
    "src/lib/landingPages.js",
    "src/lib/staticPages.js",
    "src/lib/pageSchema.js",
    "src/lib/pageFaqs.js",
    "src/lib/breadcrumbs.js",
    "src/lib/guides.js",
    "src/lib/blogPosts.js",
    "src/lib/keywordSection.js",
  ]
    .map(plain)
    .join("\n");
  const ctx = { console };
  vm.runInNewContext(
    `${src}\nthis.__data = { SERVICE_PAGES, LANDING_PAGES, CITIES, GUIDES, BLOG_POSTS };`,
    ctx
  );
  return ctx.__data;
}

// Fixed marketing pages — mirrors STATIC_PAGES in scripts/prerender.js.
// [path, changefreq, priority]
const STATIC_ROUTES = [
  ["/", "weekly", "1.0"],
  ["/services", "weekly", "0.9"],
  ["/fleet", "weekly", "0.9"],
  ["/service-areas", "weekly", "0.8"],
  ["/about", "monthly", "0.7"],
  ["/reviews", "weekly", "0.8"],
  ["/gallery", "monthly", "0.6"],
  ["/faq", "monthly", "0.7"],
  ["/contact", "monthly", "0.6"],
  ["/booking", "weekly", "0.9"],
  ["/blog", "weekly", "0.7"],
  ["/car-seat-service", "monthly", "0.6"],
  ["/press", "monthly", "0.5"],
  ["/partners", "monthly", "0.5"],
  ["/coverage", "monthly", "0.6"],
  ["/privacy-policy", "yearly", "0.3"],
  ["/terms-conditions", "yearly", "0.3"],
  ["/policies", "yearly", "0.4"],
];

function xmlEscape(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function urlEntry(loc, lastmod, changefreq, priority) {
  return (
    `  <url>\n` +
    `    <loc>${xmlEscape(loc)}</loc>\n` +
    (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : "") +
    `    <changefreq>${changefreq}</changefreq>\n` +
    `    <priority>${priority}</priority>\n` +
    `  </url>\n`
  );
}

function buildEntries() {
  const data = loadData();
  const today = new Date().toISOString().slice(0, 10);
  const entries = [];
  const seen = new Set();

  const add = (slug, changefreq, priority, lastmod) => {
    const loc = `${ORIGIN}${slug}`;
    if (seen.has(loc)) return; // sitemaps.org: no duplicate <loc>
    seen.add(loc);
    entries.push(urlEntry(loc, lastmod || today, changefreq, priority));
  };

  for (const [route, changefreq, priority] of STATIC_ROUTES) add(route, changefreq, priority);

  // Service pages — high-intent core service pages.
  for (const slug of Object.keys(data.SERVICE_PAGES)) add(`/${slug}`, "weekly", "0.9");

  // City pages — one per served city.
  for (const c of data.CITIES) add(`/airport-car-service/${c.slug}`, "weekly", "0.8");

  // Programmatic landing pages (airport/route/venue/vehicle keyword pages).
  for (const slug of Object.keys(data.LANDING_PAGES)) add(`/${slug}`, "monthly", "0.7");

  // Guides — evergreen long-form articles at their own top-level slug.
  for (const g of data.GUIDES) add(`/${g.slug}`, "monthly", "0.6", g.date);

  // Blog posts.
  for (const b of data.BLOG_POSTS) add(`/blog/${b.slug}`, "monthly", "0.6", b.date);

  return entries;
}

function writeSitemapFiles(entries) {
  if (entries.length <= MAX_URLS_PER_SITEMAP) {
    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      entries.join("") +
      `</urlset>\n`;
    fs.writeFileSync(OUT, xml, "utf8");
    console.log(`[sitemap] wrote ${entries.length} URLs -> public/sitemap-static.xml`);
    return;
  }

  // Over the 50k-per-file limit: split into numbered sitemaps + an index.
  const chunks = [];
  for (let i = 0; i < entries.length; i += MAX_URLS_PER_SITEMAP) {
    chunks.push(entries.slice(i, i + MAX_URLS_PER_SITEMAP));
  }
  const today = new Date().toISOString().slice(0, 10);
  chunks.forEach((chunk, i) => {
    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      chunk.join("") +
      `</urlset>\n`;
    fs.writeFileSync(path.join(ROOT, `public/sitemap-static-${i + 1}.xml`), xml, "utf8");
  });
  const indexXml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    chunks
      .map(
        (_, i) =>
          `  <sitemap>\n    <loc>${ORIGIN}/sitemap-static-${i + 1}.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n`
      )
      .join("") +
    `</sitemapindex>\n`;
  fs.writeFileSync(OUT, indexXml, "utf8");
  console.log(
    `[sitemap] ${entries.length} URLs exceeded ${MAX_URLS_PER_SITEMAP}/file — wrote ${chunks.length} sitemap files + an index at public/sitemap-static.xml`
  );
}

writeSitemapFiles(buildEntries());
