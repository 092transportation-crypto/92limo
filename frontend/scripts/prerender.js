/**
 * Post-build prerender step.
 *
 * CRA produces a pure client-side SPA: every route serves an empty
 * `<div id="root"></div>`, so crawlers (and any fetcher that does not execute
 * JavaScript) see zero words, no <h1>, and only the fallback <title>. That is
 * exactly why 92limo.com was flagged for "0 words on the page".
 *
 * This script boots the freshly built bundle in headless Chromium, visits every
 * indexable route (sourced from build/sitemap.xml so it always stays in sync),
 * lets React + the Seo component render, and writes the fully-rendered HTML to
 * `build/<route>/index.html`. Vercel serves those static files ahead of the
 * catch-all SPA rewrite, so:
 *   - no-JS clients (crawlers) get real, readable content with a proper <h1>,
 *     <title>, meta description and canonical;
 *   - JS clients load the same bundle and React hydrates the markup.
 *
 * The captured markup already contains the correct hashed <script>/<link> tags
 * from build/index.html, so no asset paths need patching.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..", "build");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// Derive the list of routes to prerender from the built sitemap.xml.
function readRoutes() {
  const sitemapPath = path.join(BUILD_DIR, "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) return ["/"];
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = locs.map((u) => {
    try {
      return new URL(u).pathname || "/";
    } catch {
      return null;
    }
  });
  // De-dupe, drop the private /admin route, keep a stable order.
  const seen = new Set();
  const out = [];
  for (const p of paths) {
    if (!p || p.startsWith("/admin") || seen.has(p)) continue;
    seen.add(p);
    out.push(p);
  }
  return out.length ? out : ["/"];
}

// Serve build/ statically; fall back to index.html so the SPA boots for routes
// that do not yet have a generated file (which is all of them at this point).
function createServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const filePath = path.join(BUILD_DIR, urlPath);
    if (
      filePath.startsWith(BUILD_DIR) &&
      fs.existsSync(filePath) &&
      fs.statSync(filePath).isFile()
    ) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fs.createReadStream(path.join(BUILD_DIR, "index.html")).pipe(res);
  });
}

function outputPath(routePath) {
  if (routePath === "/") return path.join(BUILD_DIR, "index.html");
  return path.join(BUILD_DIR, routePath.replace(/^\/+/, ""), "index.html");
}

async function main() {
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    throw new Error(`No build found at ${BUILD_DIR}. Run the build first.`);
  }

  // puppeteer is an optionalDependency: it may be absent (or its Chromium
  // download may have been skipped) in some environments. Require it lazily so
  // that case degrades gracefully rather than crashing at load.
  const puppeteer = require("puppeteer");

  const routes = readRoutes();
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  let ok = 0;
  let failed = 0;
  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        // Avoid hanging on long-lived third-party connections (analytics, etc.).
        await page.setRequestInterception(true);
        page.on("request", (r) => {
          if (/posthog|google-analytics|googletagmanager|hotjar|clarity/i.test(r.url())) r.abort();
          else r.continue();
        });

        await page.goto(`${base}${route}`, { waitUntil: "networkidle0", timeout: 45000 });
        // The Seo component and hero render client-side; wait for a real <h1>.
        await page.waitForSelector("#root h1", { timeout: 20000 }).catch(() => {});
        // Let react flush the <head> (title/description/canonical) and settle.
        await new Promise((r) => setTimeout(r, 400));

        const html = "<!doctype html>\n" + (await page.content()).replace(/^<!doctype html>/i, "");
        const out = outputPath(route);
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, html, "utf-8");
        ok++;
        console.log(`prerendered ${route} -> ${path.relative(BUILD_DIR, out)}`);
      } catch (e) {
        failed++;
        console.warn(`[prerender] skipped ${route}: ${e && e.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log(`\n[prerender] done: ${ok} rendered, ${failed} skipped, ${routes.length} total.`);
}

main().catch((err) => {
  // Never fail the build because of prerendering. If Chromium is unavailable in
  // the build environment, the site still deploys (the SPA and serverless
  // functions work); only the static prerendered HTML is skipped. Logged loudly
  // so it can be addressed.
  console.warn("\n[prerender] WARNING: prerendering was skipped:", err && err.message);
  console.warn("[prerender] The deploy will continue without static prerendered HTML.\n");
  process.exit(0);
});
