#!/usr/bin/env node
/**
 * Full SEO error audit over build/**\/index.html. Checks all 10 categories
 * requested: dup titles, dup descriptions, dup content, broken internal
 * links, missing titles, missing canonicals, invalid structured data,
 * sitemap hygiene, missing H1s, broken internal images.
 */
const fs = require("fs");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");
const ORIGIN = "https://www.92limo.com";

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, out);
    else if (name === "index.html") out.push(p);
  }
  return out;
}

function routeFromFile(file) {
  let rel = path.relative(BUILD, file).replace(/\/index\.html$/, "");
  if (rel === "index.html" || rel === "") return "/";
  return "/" + rel;
}

const files = walk(BUILD);
console.log(`Scanning ${files.length} pages...`);

const titles = new Map(); // title -> [routes]
const descs = new Map();
const contentHashes = new Map(); // normalized main-content text -> [routes]
const missingTitle = [];
const missingCanonical = [];
const missingH1 = [];
const multiH1 = [];
const brokenLinks = [];
const brokenImages = [];
const badSchema = [];
const routeSet = new Set(files.map(routeFromFile));

// also allow routes that 301 via vercel.json (treat redirect targets as valid)
let vercelRedirects = [];
try {
  const vc = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "vercel.json"), "utf8"));
  // Conditional redirects (gated by a "has" clause, e.g. a specific query param)
  // don't apply to the bare path itself, so exclude them from path-only matching.
  vercelRedirects = (vc.redirects || []).filter((r) => !r.has);
} catch (e) {}

function normalize(s) {
  return s.replace(/\s+/g, " ").trim();
}

// Converts a vercel.json route-source pattern (":name", ":name*", ":name+",
// ":name(customRegex)", "{/}?") into an equivalent JS regex source string.
function sourceToRegex(src) {
  let out = "";
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === ":") {
      let j = i + 1;
      while (j < src.length && /[a-zA-Z0-9_]/.test(src[j])) j++;
      if (src[j] === "(") {
        let depth = 1;
        let k = j + 1;
        while (k < src.length && depth > 0) {
          if (src[k] === "(") depth++;
          else if (src[k] === ")") depth--;
          k++;
        }
        out += src.slice(j, k);
        i = k;
        continue;
      }
      if (src[j] === "+") {
        out += ".+";
        i = j + 1;
        continue;
      }
      if (src[j] === "*") {
        out += ".*";
        i = j + 1;
        continue;
      }
      out += "[^/]+";
      i = j;
      continue;
    }
    if (ch === "{") {
      const k = src.indexOf("}", i);
      const inner = src.slice(i + 1, k);
      if (src[k + 1] === "?") {
        out += "(?:" + inner + ")?";
        i = k + 2;
      } else {
        out += "(?:" + inner + ")";
        i = k + 1;
      }
      continue;
    }
    out += ch;
    i++;
  }
  return out;
}

function matchesRedirectSource(pattern, testPath) {
  try {
    return new RegExp("^" + sourceToRegex(pattern) + "$").test(testPath);
  } catch (e) {
    return false;
  }
}

for (const file of files) {
  const route = routeFromFile(file);
  const html = fs.readFileSync(file, "utf8");

  // TITLE
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? normalize(titleMatch[1]) : "";
  if (!title) missingTitle.push(route);
  else {
    if (!titles.has(title)) titles.set(title, []);
    titles.get(title).push(route);
  }

  // DESCRIPTION
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? normalize(descMatch[1]) : "";
  if (desc) {
    if (!descs.has(desc)) descs.set(desc, []);
    descs.get(desc).push(route);
  }

  // CANONICAL
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (!canonMatch) {
    missingCanonical.push(route);
  } else {
    const expected = (ORIGIN + route).replace(/\/$/, "") || ORIGIN;
    const got = canonMatch[1].replace(/\/$/, "");
    if (got !== expected && got !== expected + "/") {
      missingCanonical.push(`${route} (canonical points to ${canonMatch[1]}, expected ${expected})`);
    }
  }

  // H1
  const h1s = html.match(/<h1[^>]*>/gi) || [];
  if (h1s.length === 0) missingH1.push(route);
  if (h1s.length > 1) multiH1.push(`${route} (${h1s.length} h1 tags)`);

  // MAIN CONTENT fingerprint for duplicate-content detection:
  // strip script/style/nav/header/footer tags, collapse whitespace, take body text
  let body = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ");
  body = normalize(body);
  // Only flag as duplicate if body is reasonably long (skip trivial/empty pages)
  if (body.length > 400) {
    const fingerprint = body.slice(0, 2000); // first 2000 chars after header/footer/nav strip
    if (!contentHashes.has(fingerprint)) contentHashes.set(fingerprint, []);
    contentHashes.get(fingerprint).push(route);
  }

  // INTERNAL LINKS (anchor tags only — <link>/<script> hrefs are assets, not page links)
  const hrefs = [...html.matchAll(/<a\s+[^>]*href=["']([^"'#][^"']*)["']/gi)].map((m) => m[1]);
  for (let href of hrefs) {
    if (/^https?:\/\//i.test(href)) {
      if (!href.startsWith(ORIGIN)) continue; // external, skip
      href = href.slice(ORIGIN.length) || "/";
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;
    if (!href.startsWith("/")) continue;
    let clean = href.split("?")[0].split("#")[0];
    if (clean.length > 1) clean = clean.replace(/\/$/, "");
    if (clean === "") clean = "/";
    if (!routeSet.has(clean) && !fs.existsSync(path.join(BUILD, clean.replace(/^\//, "")))) {
      // check if it's covered by a vercel.json redirect to somewhere valid
      const redirected = vercelRedirects.find((r) => matchesRedirectSource(r.source || "", clean));
      if (!redirected) {
        brokenLinks.push(`${route} -> ${href}`);
      }
    }
  }

  // INTERNAL IMAGES
  const imgSrcs = [...html.matchAll(/<img[^>]+src=["']([^"']*)["']/gi)].map((m) => m[1]);
  for (const src of imgSrcs) {
    if (/^https?:\/\//i.test(src) || src.startsWith("data:")) continue;
    const clean = src.split("?")[0];
    const imgPath = path.join(BUILD, clean.replace(/^\//, ""));
    if (!fs.existsSync(imgPath)) {
      brokenImages.push(`${route} -> ${src}`);
    }
  }

  // STRUCTURED DATA
  const ldScripts = [...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  for (const [, json] of ldScripts) {
    let parsed;
    try {
      parsed = JSON.parse(json);
    } catch (e) {
      badSchema.push(`${route}: invalid JSON (${e.message})`);
      continue;
    }
    const items = Array.isArray(parsed) ? parsed : parsed["@graph"] || [parsed];
    for (const item of items) {
      const type = item["@type"];
      if (!type) {
        badSchema.push(`${route}: schema block missing @type`);
        continue;
      }
      if (type === "FAQPage") {
        const main = item.mainEntity || [];
        if (!Array.isArray(main) || main.length < 1) {
          badSchema.push(`${route}: FAQPage has no mainEntity Q&A`);
        } else {
          for (const q of main) {
            if (!q.name || !q.acceptedAnswer || !q.acceptedAnswer.text) {
              badSchema.push(`${route}: FAQPage question missing name/answer text`);
              break;
            }
          }
        }
      }
      if (type === "BlogPosting" || type === "Article") {
        if (!item.headline) badSchema.push(`${route}: ${type} missing headline`);
        if (!item.datePublished) badSchema.push(`${route}: ${type} missing datePublished`);
      }
      if (type === "BreadcrumbList") {
        const list = item.itemListElement || [];
        if (!Array.isArray(list) || list.length < 1) {
          badSchema.push(`${route}: BreadcrumbList empty`);
        }
      }
      if (type === "LocalBusiness") {
        if (!item.name) badSchema.push(`${route}: LocalBusiness missing name`);
      }
    }
  }
}

const dupTitles = [...titles.entries()].filter(([, routes]) => routes.length > 1);
const dupDescs = [...descs.entries()].filter(([, routes]) => routes.length > 1);
const dupContent = [...contentHashes.entries()].filter(([, routes]) => routes.length > 1);

// SITEMAP HYGIENE
const sitemapPath = path.join(__dirname, "..", "public", "sitemap-static.xml");
const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const badSitemapEntries = [];
for (const url of sitemapUrls) {
  let p = url.replace(ORIGIN, "");
  if (p === "") p = "/";
  p = p.replace(/\/$/, "") || "/";
  if (!routeSet.has(p)) {
    // check redirect
    const redirected = vercelRedirects.find((r) => matchesRedirectSource(r.source || "", p));
    badSitemapEntries.push(`${url} (redirects: ${!!redirected}, resolves: false)`);
  }
}
// also check for redirect-source URLs present in sitemap (shouldn't list a URL that itself just redirects)
for (const url of sitemapUrls) {
  let p = url.replace(ORIGIN, "");
  if (p === "") p = "/";
  p = p.replace(/\/$/, "") || "/";
  const isRedirectSource = vercelRedirects.find(
    (r) => matchesRedirectSource(r.source || "", p) && r.destination !== p
  );
  if (isRedirectSource) badSitemapEntries.push(`${url} (sitemap lists a URL that 301-redirects via vercel.json)`);
}

console.log("\n=== DUPLICATE TITLES ===", dupTitles.length);
dupTitles.forEach(([t, routes]) => console.log(`  "${t}" => ${routes.join(", ")}`));

console.log("\n=== DUPLICATE DESCRIPTIONS ===", dupDescs.length);
dupDescs.forEach(([d, routes]) => console.log(`  "${d.slice(0, 80)}..." => ${routes.join(", ")}`));

console.log("\n=== DUPLICATE CONTENT (fingerprint match) ===", dupContent.length);
dupContent.forEach(([, routes]) => console.log(`  => ${routes.join(", ")}`));

console.log("\n=== MISSING TITLE ===", missingTitle.length);
missingTitle.forEach((r) => console.log(`  ${r}`));

console.log("\n=== MISSING/WRONG CANONICAL ===", missingCanonical.length);
missingCanonical.forEach((r) => console.log(`  ${r}`));

console.log("\n=== MISSING H1 ===", missingH1.length);
missingH1.forEach((r) => console.log(`  ${r}`));

console.log("\n=== MULTIPLE H1 ===", multiH1.length);
multiH1.forEach((r) => console.log(`  ${r}`));

console.log("\n=== BROKEN INTERNAL LINKS ===", brokenLinks.length);
brokenLinks.forEach((r) => console.log(`  ${r}`));

console.log("\n=== BROKEN INTERNAL IMAGES ===", brokenImages.length);
brokenImages.forEach((r) => console.log(`  ${r}`));

console.log("\n=== INVALID STRUCTURED DATA ===", badSchema.length);
badSchema.forEach((r) => console.log(`  ${r}`));

console.log("\n=== SITEMAP HYGIENE ISSUES ===", badSitemapEntries.length);
badSitemapEntries.forEach((r) => console.log(`  ${r}`));

console.log("\n=== TOTAL PAGES SCANNED ===", files.length);

const totalIssues =
  dupTitles.length +
  dupDescs.length +
  dupContent.length +
  missingTitle.length +
  missingCanonical.length +
  missingH1.length +
  multiH1.length +
  brokenLinks.length +
  brokenImages.length +
  badSchema.length +
  badSitemapEntries.length;

console.log("\n=== TOTAL ISSUES ===", totalIssues);
process.exit(totalIssues > 0 ? 1 : 0);
