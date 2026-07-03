/**
 * Post-build static prerender — no browser, no Puppeteer.
 *
 * Vercel's build image does not ship Chromium's shared libraries (the build was
 * failing with "libnspr4.so: cannot open shared object file"), so the previous
 * headless-Chromium prerender silently skipped and every route shipped as an
 * empty SPA shell — "0 words on the page", no <h1>, no crawlable links.
 *
 * This version needs nothing but Node. It loads the site's own content data
 * (SERVICE_PAGES / LANDING_PAGES / CITIES) plus a small map for the static
 * marketing pages, renders real HTML (heading, paragraphs, lists, FAQs and an
 * internal-link footer) and injects it into the <div id="root"> of each route's
 * index.html, while rewriting <title>, meta description and canonical per page.
 *
 * The app boots with ReactDOM.createRoot(root).render(...), which *replaces*
 * whatever is inside #root, so this static markup is what crawlers read while
 * real users get the full React app after hydration-free client render. No
 * browser dependency means it runs identically on Vercel and locally.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(ROOT, "build");
const PHONE = "877-679-0100";
const ORIGIN = "https://www.92limo.com";

// ---------------------------------------------------------------------------
// Load the site content data (data.js is self-contained; landingPages.js only
// imports IMAGES from it). Strip module syntax and evaluate both in one sandbox.
// ---------------------------------------------------------------------------
function loadData() {
  const dataSrc = fs
    .readFileSync(path.join(ROOT, "src/lib/data.js"), "utf8")
    .replace(/export\s+const/g, "const")
    .replace(/export\s+function/g, "function")
    .replace(/export\s+/g, "");
  const landingSrc = fs
    .readFileSync(path.join(ROOT, "src/lib/landingPages.js"), "utf8")
    .replace(/^\s*import[^\n]*\n/m, "")
    .replace(/export\s+const/g, "const")
    .replace(/export\s+/g, "");
  const ctx = { console };
  vm.runInNewContext(
    `${dataSrc}\n${landingSrc}\nthis.__data = { SERVICE_PAGES, LANDING_PAGES, CITIES, HOME_ABOUT, EXTERNAL_LINKS, FAQS, AREAS, WHY };`,
    ctx
  );
  return ctx.__data;
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------
const esc = (s) =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const a = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`;
const p = (t) => (t ? `<p>${esc(t)}</p>` : "");
const h = (n, t) => `<h${n}>${esc(t)}</h${n}>`;
const ul = (items) => (items && items.length ? `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>` : "");

// ---------------------------------------------------------------------------
// Static marketing pages (content not held in data files)
// ---------------------------------------------------------------------------
const STATIC_PAGES = {
  "/": {
    title: "92 Limo Service | Luxury Chauffeur DC, MD & VA",
    description:
      "Luxury black car & chauffeur service in DC, Maryland & Virginia — airport transfers (BWI, DCA, IAD), corporate travel, weddings & 24/7 rides.",
    h1: "Luxury Black Car Service in Washington DC, Maryland & Virginia",
    paras: [
      "Professional airport transfers, corporate travel, hourly chauffeur service, weddings, and long-distance transportation — delivered with precision, discretion, and uncompromising comfort.",
      "92 Limo Service (92 Transportation LLC) provides 24/7 chauffeured car service across the DMV, with real-time flight tracking, meet & greet pickups, and a fleet of immaculate late-model sedans, SUVs and Sprinter vans.",
    ],
  },
  "/fleet": {
    title: "Luxury Fleet | Sedans, SUVs & Sprinter Vans | 92 Limo",
    description:
      "Explore the 92 Limo Service fleet: Mercedes E-Class, BMW 7 Series, Lincoln Nautilus, Chevrolet Suburban, Cadillac Escalade, Sprinter vans & limousines.",
    h1: "A Luxury Vehicle for Every Journey",
    paras: [
      "From discreet executive sedans to spacious Sprinter vans and limousines — every vehicle is late-model, immaculately detailed, and chauffeur-driven.",
      "Our fleet includes the Mercedes E-Class, BMW 7 Series, Lincoln Nautilus, Chevrolet Suburban, Cadillac Escalade, and Mercedes Sprinter vans and limos for groups.",
    ],
  },
  "/services": {
    title: "Our Services | Airport, Corporate & Wedding | 92 Limo",
    description:
      "Airport car service (BWI, DCA, IAD), corporate travel, hourly chauffeur, weddings, and long-distance private car service across DC, Maryland & Virginia.",
    h1: "Premium Chauffeur Services Across the DMV",
    paras: [
      "Whatever the occasion, 92 Limo Service delivers reliable, luxurious transportation tailored to you — airport transfers, corporate travel, hourly chauffeur hire, weddings, proms, wine tours, birthdays and long-distance trips.",
    ],
  },
  "/service-areas": {
    title: "Service Areas | DC, Maryland & Virginia | 92 Limo",
    description:
      "92 Limo Service covers Washington DC, Maryland and Northern Virginia — Baltimore, Annapolis, Bethesda, Arlington and more, plus BWI, DCA and IAD.",
    h1: "Serving the Greater DMV & Beyond",
    paras: [
      "Luxury chauffeur service throughout Maryland, Washington DC, and Northern Virginia — plus long-distance trips up and down the East Coast.",
    ],
  },
  "/about": {
    title: "About 92 Limo Service | Chauffeurs in DC, MD & VA",
    description:
      "Learn about 92 Limo Service (92 Transportation LLC) — luxury black car and chauffeur service across Washington DC, Maryland & Northern Virginia.",
    h1: "The Standard for Luxury Chauffeur Service",
    paras: [
      "92 Transportation LLC has built its reputation on punctuality, pristine vehicles, and chauffeurs who care about every detail of your journey.",
    ],
  },
  "/reviews": {
    title: "Reviews & Testimonials | 92 Limo | DC, MD & VA",
    description:
      "Read verified Google reviews from 92 Limo Service clients across Washington DC, Maryland & Northern Virginia — airport, corporate, weddings & more.",
    h1: "What Our Clients Say",
    paras: [
      "Five-star experiences from executives, families, and event planners who trust 92 Limo Service across the DMV.",
    ],
  },
  "/gallery": {
    title: "Gallery | Luxury Fleet & Chauffeur Service | 92 Limo",
    description:
      "Browse the 92 Limo Service gallery — luxury sedans, Cadillac Escalade, Sprinter vans, chauffeurs, and airport pickups across DC, Maryland & Virginia.",
    h1: "Our Fleet & Service in Pictures",
    paras: [
      "A closer look at the vehicles, interiors, and white-glove chauffeur experience that define 92 Limo Service.",
    ],
  },
  "/faq": {
    title: "FAQ | Booking, Pricing & Pickup Answers | 92 Limo",
    description:
      "Answers to common questions about 92 Limo Service — booking, pricing, flight tracking, vehicles, service areas, and 24/7 availability in DC, MD & VA.",
    h1: "Frequently Asked Questions",
    paras: [
      "Everything you need to know about booking luxury chauffeur service with 92 Limo Service — pricing, flight tracking, vehicles, service areas and 24/7 availability.",
    ],
  },
  "/contact": {
    title: "Contact Us | 92 Limo Service | DC, MD & VA",
    description:
      "Contact 92 Limo Service for general questions and special requests — by phone, email, or our form. Open 24/7. To reserve a ride, visit our booking page.",
    h1: "Contact 92 Limo Service",
    paras: [
      `General questions, special requests, or feedback? Reach us by phone at ${PHONE}, by email, or through our contact form. We are available 24/7. To reserve a ride, visit our booking page.`,
    ],
  },
  "/booking": {
    title: "Book a Ride | 92 Limo Service | DC, MD & VA Chauffeur",
    description:
      "Reserve luxury chauffeur and airport car service with 92 Limo Service across DC, Maryland & Virginia. Request an all-inclusive quote, 24/7.",
    h1: "Reserve Your Ride",
    paras: [
      "Tell us about your trip and we will confirm a chauffeur with flat, all-inclusive pricing. Reserve airport transfers, corporate travel, weddings and long-distance rides across DC, Maryland and Virginia, 24/7.",
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy & SMS Terms | 92 Limo Service",
    description:
      "92 Limo Service Privacy Policy & SMS Terms — what we collect, how we use it, and SMS opt-in/opt-out. Mobile opt-in data is never shared for marketing.",
    h1: "Privacy Policy & SMS Terms and Conditions",
    paras: [
      "This policy explains what information 92 Limo Service collects, how we use it, and your choices — including SMS opt-in and opt-out. Mobile opt-in data and consent are never shared with third parties for marketing.",
    ],
  },
  "/terms-conditions": {
    title: "Terms & Conditions | 92 Limo Service",
    description:
      "92 Limo Service Terms & Conditions — SMS terms, bookings, payment, cancellation, liability, and service area across DC, Maryland & Virginia.",
    h1: "Terms and Conditions",
    paras: [
      "These terms cover bookings, payment, cancellation, liability, SMS messaging, and our service area across DC, Maryland and Virginia. By booking with 92 Limo Service you agree to these terms.",
    ],
  },
  "/coverage": {
    title: "Coverage Area | MD, DC, VA, DE & PA | 92 Limo Service",
    description:
      "92 Limo Service coverage: all 23 Maryland counties, Baltimore City, Washington DC, Northern Virginia, Delaware (incl. Bethany & Rehoboth), and York, PA.",
    h1: "Where We Provide Service",
    paras: [
      "Luxury chauffeur and airport car service across Maryland, Washington DC, Northern Virginia, Delaware, and southern Pennsylvania — plus long-distance trips up and down the East Coast.",
    ],
  },
};

// ---------------------------------------------------------------------------
// Per-route content builders -> { title, description, path, body }
// ---------------------------------------------------------------------------
function buildStatic(route, data) {
  const s = STATIC_PAGES[route];
  return {
    title: s.title,
    description: s.description,
    body: route === "/"
      ? buildHomeBody(s, data)
      : h(1, s.h1) + s.paras.map(p).join(""),
  };
}

// Rich, crawlable homepage body: heading + intro, About (repeats the H1 phrase),
// Why-Choose-Us list, service-area list, FAQ Q&A, and authoritative external
// links. Keeps the served HTML well past 800 words with real paragraphs.
function buildHomeBody(s, data) {
  const about = data.HOME_ABOUT || { heading: "", paragraphs: [] };
  const why = (data.WHY || []).map((w) => `${esc(w.title)} — ${esc(w.desc)}`);
  const areas = data.AREAS || [];
  const faqs = (data.FAQS || []).map((f) => h(3, f.q) + p(f.a)).join("");
  const links = (data.EXTERNAL_LINKS || [])
    .map((l) => `<li>${a(l.href, l.label)}</li>`)
    .join("");
  return (
    h(1, s.h1) +
    s.paras.map(p).join("") +
    (about.heading ? h(2, about.heading) : "") +
    (about.paragraphs || []).map(p).join("") +
    (why.length ? h(2, "Why Choose 92 Limo Service") + ul(why) : "") +
    (areas.length
      ? h(2, "Service Areas Across DC, Maryland & Virginia") +
        p(
          "92 Limo Service provides luxury black car service throughout Washington DC, Maryland, and Northern Virginia, including these cities and communities:"
        ) +
        ul(areas.map(esc))
      : "") +
    (faqs ? h(2, "Frequently Asked Questions") + faqs : "") +
    (links ? h(2, "Helpful Travel Resources") + `<ul>${links}</ul>` : "")
  );
}

function buildService(slug, data) {
  const d = data.SERVICE_PAGES[slug];
  const bullets = (d.bullets || []).map((b) => `${esc(b.title)} — ${esc(b.desc)}`);
  const vehicles = (d.vehicles || []).map((v) => esc(v));
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    body:
      h(1, d.h1) +
      p(d.subtitle) +
      p(d.intro) +
      (bullets.length ? h(2, "Why choose 92 Limo Service") + ul(bullets) : "") +
      (vehicles.length ? h(2, "Recommended vehicles") + ul(vehicles) : ""),
  };
}

function buildLanding(slug, data) {
  const d = data.LANDING_PAGES[slug];
  const intro = Array.isArray(d.intro) ? d.intro.map(p).join("") : p(d.intro);
  const highlights = (d.highlights || []).map((x) => `${esc(x.title)} — ${esc(x.desc)}`);
  const faqs = (d.faqs || []).map((f) => h(3, f.q) + p(f.a)).join("");
  const vehicles = (d.vehicles || []).map((v) => esc(v));
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    body:
      h(1, d.h1) +
      p(d.subtitle) +
      intro +
      (highlights.length ? h(2, d.highlightsHeading || "Highlights") + ul(highlights) : "") +
      (vehicles.length ? h(2, "Recommended vehicles") + ul(vehicles) : "") +
      (faqs ? h(2, "Frequently asked questions") + faqs : "") +
      (d.ctaTitle ? h(2, d.ctaTitle) + p(d.ctaSubtitle) : ""),
  };
}

function buildCity(slug, data) {
  const c = data.CITIES.find((x) => x.slug === slug);
  return {
    title: `Airport Car Service in ${c.name}, MD | 92 Limo`,
    description: `Luxury airport car and limo service in ${c.name}, MD — on-time BWI, DCA and IAD transfers plus corporate, wedding and wine-tour rides.`,
    body:
      h(1, `Airport Car & Limo Service in ${c.name}, MD`) +
      p(
        `Premium, on-time chauffeur service in ${c.name}, ${c.region} — airport transfers to ${c.airport} and beyond, corporate travel, weddings, wine tours and more.`
      ) +
      p(
        `92 Limo Service provides luxury black car and limo service throughout ${c.name} and the surrounding ${c.region} area, with flat-rate transfers to BWI, DCA, IAD, PHL and Martin State airports, 24/7.`
      ) +
      h(2, `Chauffeur services in ${c.name}`) +
      ul([
        "Airport transfers with flight tracking and meet & greet",
        "Corporate and executive black car service",
        "Weddings, proms and special events",
        "Hourly and as-directed chauffeur hire",
        "Maryland and Virginia wine tours",
      ]),
  };
}

// ---------------------------------------------------------------------------
// Shared internal-link footer (present on every page)
// ---------------------------------------------------------------------------
function buildLinksFooter(data) {
  const nav = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/fleet", "Fleet"],
    ["/service-areas", "Service Areas"],
    ["/coverage", "Coverage"],
    ["/about", "About"],
    ["/reviews", "Reviews"],
    ["/gallery", "Gallery"],
    ["/faq", "FAQ"],
    ["/contact", "Contact"],
    ["/booking", "Book a Ride"],
  ];
  const services = Object.entries(data.SERVICE_PAGES).map(([slug, d]) => [`/${slug}`, d.h1]);
  const cities = data.CITIES.map((c) => [`/airport-car-service/${c.slug}`, `${c.name} Car Service`]);
  const landings = Object.entries(data.LANDING_PAGES).map(([slug, d]) => [`/${slug}`, d.h1]);
  const group = (heading, links) =>
    h(2, heading) + `<ul>${links.map(([href, t]) => `<li>${a(href, t)}</li>`).join("")}</ul>`;
  return (
    `<nav aria-label="Primary">${nav.map(([href, t]) => a(href, t)).join(" ")}</nav>` +
    group("Our services", services) +
    group("Airport car service by city", cities) +
    group("Popular routes", landings) +
    `<p>Call 92 Limo Service 24/7 at <a href="tel:+18776790100">${PHONE}</a>.</p>`
  );
}

// ---------------------------------------------------------------------------
// Head rewriting + injection
// ---------------------------------------------------------------------------
function rewriteHead(html, { title, description, url }) {
  const t = esc(title);
  const d = esc(description);
  const set = (re, replacement) => {
    html = re.test(html) ? html.replace(re, replacement) : html;
  };
  set(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  set(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${d}">`);
  set(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${t}">`);
  set(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${d}">`);
  set(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${esc(url)}">`);
  set(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${esc(url)}">`);
  return html;
}

function render(shell, route, content, footer) {
  const url = ORIGIN + (route === "/" ? "/" : route);
  let html = rewriteHead(shell, { title: content.title, description: content.description, url });
  const main = `<div id="prerender-content"><main>${content.body}</main><footer>${footer}</footer></div>`;
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${main}</div>`);
  return html;
}

function routesFromSitemap() {
  const smPath = path.join(BUILD_DIR, "sitemap.xml");
  if (!fs.existsSync(smPath)) return Object.keys(STATIC_PAGES);
  const xml = fs.readFileSync(smPath, "utf8");
  const out = [];
  const seen = new Set();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    let pth;
    try {
      pth = new URL(m[1]).pathname || "/";
    } catch {
      continue;
    }
    if (pth.startsWith("/admin") || seen.has(pth)) continue;
    seen.add(pth);
    out.push(pth);
  }
  return out.length ? out : Object.keys(STATIC_PAGES);
}

function main() {
  const shellPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(shellPath)) throw new Error(`No build at ${BUILD_DIR}; run the build first.`);
  const shell = fs.readFileSync(shellPath, "utf8");
  const data = loadData();
  const footer = buildLinksFooter(data);
  const routes = routesFromSitemap();

  let ok = 0;
  for (const route of routes) {
    let content;
    const slug = route.replace(/^\//, "");
    if (STATIC_PAGES[route]) content = buildStatic(route, data);
    else if (data.SERVICE_PAGES[slug]) content = buildService(slug, data);
    else if (route.startsWith("/airport-car-service/")) content = buildCity(route.split("/").pop(), data);
    else if (data.LANDING_PAGES[slug]) content = buildLanding(slug, data);
    else continue; // unknown route -> leave as SPA shell

    const html = render(shell, route, content, footer);
    const out = route === "/" ? shellPath : path.join(BUILD_DIR, slug, "index.html");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, "utf8");
    ok++;
  }
  console.log(`[prerender] wrote ${ok} static pages (of ${routes.length} routes).`);
}

try {
  main();
} catch (err) {
  // Do not fail the deploy; log loudly so it is visible in build output.
  console.error("[prerender] ERROR:", err && err.stack ? err.stack : err);
  process.exit(0);
}
