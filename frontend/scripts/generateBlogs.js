/**
 * Daily blog automation.
 *
 * Picks N random pending ideas from scripts/blogQueue.json, generates a full
 * SEO'd blog post for each via the Anthropic Messages API, validates the
 * result (internal links are constrained to a real, whitelisted set of
 * landing pages — never hallucinated), and persists everything:
 *
 *   - scripts/generatedBlogPosts.json   canonical state (source of truth)
 *   - src/lib/blogPostsGenerated.js     regenerated from that state — this is
 *                                       what the live site actually imports
 *                                       (BLOG_POSTS in src/lib/blogPosts.js)
 *   - content/blog/<slug>.md            human-readable markdown archive per
 *                                       post (front-matter + body)
 *   - scripts/blogQueue.json            idea statuses updated to "published"
 *   - public/sitemap-static.xml         regenerated so new posts are indexed
 *
 * Nothing here commits or pushes to git — that's the CI workflow's job
 * (.github/workflows/daily-blog-posts.yml), so this script behaves the same
 * whether it's run locally or in CI.
 *
 * Usage:
 *   node scripts/generateBlogs.js                # generate BLOG_COUNT (default 4)
 *   BLOG_COUNT=1 node scripts/generateBlogs.js    # generate just one, for testing
 *   node scripts/generateBlogs.js --dry-run       # pick ideas + build prompts, no API call, no writes
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const ORIGIN = "https://www.92limo.com";
const QUEUE_PATH = path.join(ROOT, "scripts/blogQueue.json");
const STATE_PATH = path.join(ROOT, "scripts/generatedBlogPosts.json");
const GENERATED_MODULE_PATH = path.join(ROOT, "src/lib/blogPostsGenerated.js");
const MARKDOWN_DIR = path.join(ROOT, "content/blog");

const ARGS = process.argv.slice(2);
const DRY_RUN = ARGS.includes("--dry-run") || process.env.DRY_RUN === "1";
const COUNT = Math.max(1, parseInt(process.env.BLOG_COUNT || "4", 10) || 4);
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// ---------------------------------------------------------------------------
// Site data — reused across scripts (prerender.js / generateSitemap.js use
// the same pattern): strip ES module syntax, evaluate in a throwaway VM.
// ---------------------------------------------------------------------------
function loadSiteData() {
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
    "src/lib/blogPostsBatch3.js",
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const readJson = (p, fallback) => {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return fallback;
  }
};
const writeJson = (p, data) => fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n", "utf8");

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const truncate = (s, max) => (String(s || "").length > max ? `${String(s).slice(0, max - 1).trim()}…` : s);

// Real photography already on the site — no broken/fake placeholder images.
// Picked per post by simple keyword match against the idea's category/keyword.
const IMAGE_POOL = {
  airport: "/images/site/airport-pickup.webp",
  wedding: "/images/site/wedding.webp",
  event: "/images/site/celebration.webp",
  corporate: "/images/site/corporate.webp",
  wine: "/images/site/wine-tour.webp",
  longDistance: "/images/site/long-distance.webp",
  chauffeur: "/images/site/chauffeur.webp",
  city: "/images/site/dc-skyline.webp",
  vehicle: "/images/site/suv.webp",
  default: "/images/site/sedan.webp",
};
function pickImage(idea) {
  const text = `${idea.category} ${idea.keyword} ${idea.title}`.toLowerCase();
  if (/wedding/.test(text)) return IMAGE_POOL.wedding;
  if (/wine/.test(text)) return IMAGE_POOL.wine;
  if (/corporate|business|executive|conference/.test(text)) return IMAGE_POOL.corporate;
  if (/airport|bwi|dca|iad|phl|flight/.test(text)) return IMAGE_POOL.airport;
  if (/city guide|local guide|dc |baltimore|annapolis|georgetown|columbia/.test(text)) return IMAGE_POOL.city;
  if (/long.distance|road trip/.test(text)) return IMAGE_POOL.longDistance;
  if (/sedan|suv|sprinter|vehicle|fleet/.test(text)) return IMAGE_POOL.vehicle;
  if (/event|birthday|anniversary|prom|quincea|graduation|holiday|bachelor/.test(text)) return IMAGE_POOL.event;
  return IMAGE_POOL.default;
}

// Build the whitelist of real internal pages a generated post is allowed to
// link to, and score them against an idea so the AI sees the most relevant
// ~12 first. The AI must pick `to` values from this list — never invent one.
function buildLinkCandidates(data) {
  const pool = [
    { to: "/booking", label: "Book a Ride" },
    { to: "/fleet", label: "Our Fleet" },
    { to: "/service-areas", label: "All Service Areas" },
    { to: "/faq", label: "FAQ" },
    { to: "/policies", label: "Booking & Cancellation Policies" },
    { to: "/car-seat-service", label: "Car Seat Service" },
    { to: "/about", label: "About 92 Limo Service" },
    { to: "/reviews", label: "Reviews & Testimonials" },
    { to: "/contact", label: "Contact Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/coverage", label: "Coverage Area" },
  ];
  for (const [slug, d] of Object.entries(data.SERVICE_PAGES)) {
    pool.push({ to: `/${slug}`, label: d.h1 || slug });
  }
  for (const c of data.CITIES) {
    pool.push({ to: `/airport-car-service/${c.slug}`, label: `${c.name}, MD Car Service` });
  }
  for (const [slug, d] of Object.entries(data.LANDING_PAGES)) {
    pool.push({ to: `/${slug}`, label: d.eyebrow || d.h1 || slug });
  }
  return pool;
}
function scoreCandidates(candidates, idea, limit = 14) {
  const words = `${idea.keyword} ${idea.title}`
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 3);
  const scored = candidates.map((c) => {
    const hay = `${c.to} ${c.label}`.toLowerCase();
    const score = words.reduce((n, w) => n + (hay.includes(w) ? 1 : 0), 0);
    return { ...c, score };
  });
  scored.sort((a, b) => b.score - a.score);
  // Always keep the always-available fallbacks in the pool even if unscored.
  const top = scored.slice(0, limit);
  const fallbacks = ["/booking", "/fleet", "/service-areas"];
  for (const to of fallbacks) {
    if (!top.some((c) => c.to === to)) top.push(scored.find((c) => c.to === to));
  }
  return top.filter(Boolean);
}

// ---------------------------------------------------------------------------
// Anthropic call
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `You are the content writer for 92 Limo Service (92 Transportation LLC), a licensed, insured luxury chauffeur company serving Washington DC, Maryland, and Northern Virginia (MD PSC Carrier #6325), based in Laurel, MD. Phone: (877) 609-1919. You write helpful, specific, non-salesy blog content for their website — practical, locally grounded, and genuinely useful to someone researching the topic, with natural (not forced) mentions of 92 Limo Service's actual services: airport transfers (BWI, DCA, IAD, PHL), corporate travel, weddings, hourly chauffeur, long-distance trips, flat-rate pricing, real-time flight tracking, and 24/7 dispatch. Never invent statistics, awards, or specific prices you are not given. Write at a 9th-10th grade reading level, active voice, no fluff, no em-dash overuse, no generic AI-sounding filler ("in today's fast-paced world", "it's important to note").

You must respond with ONLY a single valid JSON object — no markdown code fences, no commentary before or after. The JSON must match this exact shape:

{
  "title": "string, compelling H1, under 70 chars",
  "metaTitle": "string, under 60 chars, includes the main keyword",
  "metaDescription": "string, under 155 chars, includes the main keyword, ends with a soft call to action",
  "excerpt": "string, 1-2 sentences, under 200 chars, used as the blog card teaser",
  "intro": ["1-2 paragraph strings that open the article"],
  "sections": [
    { "heading": "H2 string", "paragraphs": ["paragraph string", "..."], "list": ["optional bullet string", "..."] }
  ],
  "faqs": [ { "q": "question string", "a": "answer string, 1-3 sentences" } ],
  "relatedLinks": [ { "to": "/exact-path-from-the-candidate-list-below", "label": "matching label from the candidate list" } ]
}

Rules:
- "sections" must have 4-7 entries covering the provided outline (you may adapt headings slightly for flow, but cover every outline point).
- Total body word count (intro + all section paragraphs) should be 900-1400 words.
- "faqs" must have exactly 5 entries, specific to this topic (not generic).
- "relatedLinks" must have EXACTLY 3 entries, and every "to" value must be copied character-for-character from the candidate list provided in the user message — never invent a path. Pick the 3 most topically relevant.
- Do not include a phone number inside "sections" paragraphs more than once total across the whole article; it's fine to include it once naturally.`;

function buildUserPrompt(idea, candidates) {
  const candidateLines = candidates.map((c) => `- ${c.to} — ${c.label}`).join("\n");
  return `Write a blog post for this idea:

Title (working, you may refine it): ${idea.title}
Target keyword: ${idea.keyword}
Category: ${idea.category}

Outline to cover (as H2 sections, in a natural order):
${idea.outline.map((o) => `- ${o}`).join("\n")}

Candidate internal links (choose exactly 3 for "relatedLinks", using the "to" value exactly as written):
${candidateLines}

Respond with only the JSON object described in the system prompt.`;
}

async function callAnthropic(idea, candidates) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(idea, candidates) }],
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Anthropic API ${res.status}: ${detail.slice(0, 400)}`);
  }
  const data = await res.json();
  const text = (data.content || []).map((b) => b.text || "").join("");
  const jsonText = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "");
  return JSON.parse(jsonText);
}

// ---------------------------------------------------------------------------
// Validation + finalization of the AI's response into a BLOG_POSTS entry
// ---------------------------------------------------------------------------
function finalizePost(raw, idea, candidates, existingSlugs) {
  const title = String(raw.title || idea.title).trim();
  if (!title) throw new Error("missing title");
  const sections = Array.isArray(raw.sections) ? raw.sections : [];
  if (sections.length < 3) throw new Error(`only ${sections.length} sections returned`);
  const faqs = Array.isArray(raw.faqs) ? raw.faqs.filter((f) => f && f.q && f.a) : [];
  if (faqs.length < 3) throw new Error(`only ${faqs.length} usable FAQs returned`);
  const intro = Array.isArray(raw.intro) ? raw.intro.filter(Boolean) : [String(raw.intro || "")].filter(Boolean);
  if (intro.length < 1) throw new Error("missing intro");

  // Slug: prefer a slugified title, guarantee uniqueness against every real
  // route on the site plus everything generated earlier in this run.
  let slug = slugify(title) || idea.id;
  let n = 2;
  while (existingSlugs.has(slug)) slug = `${slugify(title) || idea.id}-${n++}`;
  existingSlugs.add(slug);

  // relatedLinks: only accept `to` values present in the candidate whitelist;
  // pad with top-scored candidates if the model returned fewer than 3 valid ones.
  const validTo = new Set(candidates.map((c) => c.to));
  const byTo = new Map(candidates.map((c) => [c.to, c]));
  let relatedLinks = (Array.isArray(raw.relatedLinks) ? raw.relatedLinks : [])
    .filter((l) => l && validTo.has(l.to))
    .map((l) => ({ to: l.to, label: byTo.get(l.to).label }));
  for (const c of candidates) {
    if (relatedLinks.length >= 3) break;
    if (!relatedLinks.some((l) => l.to === c.to)) relatedLinks.push({ to: c.to, label: c.label });
  }
  relatedLinks = relatedLinks.slice(0, 3);

  const wordCount = [...intro, ...sections.flatMap((s) => s.paragraphs || [])]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    slug,
    title,
    metaTitle: truncate(raw.metaTitle || title, 60),
    metaDescription: truncate(raw.metaDescription || raw.excerpt || title, 160),
    category: idea.category,
    date: new Date().toISOString().slice(0, 10),
    readTime: `${Math.max(4, Math.round(wordCount / 200))} min read`,
    excerpt: truncate(raw.excerpt || intro[0], 200),
    image: pickImage(idea),
    intro,
    sections: sections.map((s) => ({
      heading: String(s.heading || "").trim(),
      paragraphs: Array.isArray(s.paragraphs) ? s.paragraphs.filter(Boolean) : [],
      ...(Array.isArray(s.list) && s.list.length ? { list: s.list.filter(Boolean) } : {}),
    })),
    faqs: faqs.map((f) => ({ q: String(f.q).trim(), a: String(f.a).trim() })),
    relatedLinks,
  };
}

// ---------------------------------------------------------------------------
// Markdown export — human-readable archive per post (content/blog/<slug>.md)
// ---------------------------------------------------------------------------
function toMarkdown(post) {
  const front = [
    "---",
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `slug: ${post.slug}`,
    `date: ${post.date}`,
    `category: ${post.category}`,
    `metaTitle: "${post.metaTitle.replace(/"/g, '\\"')}"`,
    `metaDescription: "${post.metaDescription.replace(/"/g, '\\"')}"`,
    `image: ${post.image}`,
    `url: ${ORIGIN}/blog/${post.slug}`,
    "---",
    "",
  ].join("\n");
  const body = [
    `# ${post.title}`,
    "",
    post.intro.join("\n\n"),
    "",
    ...post.sections.flatMap((s) => [
      `## ${s.heading}`,
      "",
      s.paragraphs.join("\n\n"),
      ...(s.list ? ["", ...s.list.map((i) => `- ${i}`)] : []),
      "",
    ]),
    "## Frequently Asked Questions",
    "",
    ...post.faqs.flatMap((f) => [`**${f.q}**`, "", f.a, ""]),
    "## Related Pages",
    "",
    ...post.relatedLinks.map((l) => `- [${l.label}](${ORIGIN}${l.to})`),
    "",
  ].join("\n");
  return front + body;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!ANTHROPIC_API_KEY && !DRY_RUN) {
    console.error(
      "[generateBlogs] ANTHROPIC_API_KEY is not set. Add it as a repo secret (GitHub Actions) " +
        "or export it locally, or re-run with --dry-run to test idea selection without calling the API."
    );
    process.exit(1);
  }

  const queue = readJson(QUEUE_PATH, []);
  if (!Array.isArray(queue) || queue.length === 0) {
    console.error(`[generateBlogs] ${QUEUE_PATH} is missing or empty.`);
    process.exit(1);
  }

  const pending = queue.filter((q) => q.status !== "published");
  if (pending.length === 0) {
    console.log("[generateBlogs] Queue is exhausted — every idea has been published. Add more to scripts/blogQueue.json.");
    process.exit(0);
  }
  if (pending.length < COUNT) {
    console.warn(`[generateBlogs] Only ${pending.length} pending idea(s) left (wanted ${COUNT}). Add more soon.`);
  }

  const picked = shuffle(pending).slice(0, Math.min(COUNT, pending.length));
  console.log(`[generateBlogs] Selected ${picked.length} idea(s): ${picked.map((p) => p.id).join(", ")}`);

  const data = loadSiteData();
  const linkPool = buildLinkCandidates(data);
  const existingSlugs = new Set([
    ...data.BLOG_POSTS.map((b) => b.slug),
    ...data.GUIDES.map((g) => g.slug),
    ...Object.keys(data.LANDING_PAGES),
    ...Object.keys(data.SERVICE_PAGES),
  ]);

  if (DRY_RUN) {
    for (const idea of picked) {
      const candidates = scoreCandidates(linkPool, idea);
      console.log(`\n--- ${idea.id} ---`);
      console.log("candidate links:", candidates.map((c) => c.to).join(", "));
    }
    console.log("\n[generateBlogs] Dry run complete — no API call made, no files written.");
    return;
  }

  const state = readJson(STATE_PATH, []);
  const succeeded = [];
  const failed = [];

  for (const idea of picked) {
    const candidates = scoreCandidates(linkPool, idea);
    try {
      const raw = await callAnthropic(idea, candidates);
      const post = finalizePost(raw, idea, candidates, existingSlugs);
      state.push(post);
      fs.mkdirSync(MARKDOWN_DIR, { recursive: true });
      fs.writeFileSync(path.join(MARKDOWN_DIR, `${post.slug}.md`), toMarkdown(post), "utf8");
      idea.status = "published";
      idea.publishedSlug = post.slug;
      idea.publishedDate = post.date;
      succeeded.push(post.slug);
      console.log(`[generateBlogs] ✓ ${idea.id} -> /blog/${post.slug}`);
    } catch (err) {
      failed.push({ id: idea.id, error: err.message });
      console.error(`[generateBlogs] ✗ ${idea.id}: ${err.message}`);
    }
  }

  if (succeeded.length > 0) {
    writeJson(STATE_PATH, state);
    const moduleSrc =
      "// AUTO-GENERATED — do not hand-edit. Regenerated by scripts/generateBlogs.js\n" +
      "// from scripts/generatedBlogPosts.json every time the daily automation runs.\n" +
      "// Same shape as BLOG_POSTS (see blogPosts.js header comment). Merged into\n" +
      "// BLOG_POSTS at the bottom of blogPosts.js.\n" +
      `export const GENERATED_BLOG_POSTS = ${JSON.stringify(state, null, 2)};\n`;
    fs.writeFileSync(GENERATED_MODULE_PATH, moduleSrc, "utf8");
    writeJson(QUEUE_PATH, queue);

    console.log("[generateBlogs] Regenerating sitemap...");
    execFileSync(process.execPath, [path.join(ROOT, "scripts/generateSitemap.js")], { stdio: "inherit" });
  }

  console.log(
    `\n[generateBlogs] Done. ${succeeded.length} published, ${failed.length} failed. ` +
      `${pending.length - picked.length} idea(s) still pending in the queue.`
  );

  if (succeeded.length === 0) process.exit(1);
}

main().catch((err) => {
  console.error("[generateBlogs] fatal:", err);
  process.exit(1);
});
