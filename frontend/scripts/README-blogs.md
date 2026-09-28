# Automated blog posting system

Generates and publishes SEO'd blog posts for 92limo.com on a daily schedule,
with no human in the loop once it's set up.

## How it fits together

```
scripts/blogQueue.json            111+ pre-written ideas (keyword, title, outline)
        │
        ▼  (GitHub Actions cron, daily)
scripts/generateBlogs.js          picks N random pending ideas, calls the
        │                         Anthropic API, validates the result
        ▼
scripts/generatedBlogPosts.json   canonical state — every post ever generated
        │
        ├──► src/lib/blogPostsGenerated.js   regenerated from the JSON state.
        │       │                            This is what the LIVE SITE reads:
        │       ▼                            src/lib/blogPosts.js imports it
        │    BLOG_POSTS (src/lib/blogPosts.js) ──► every place that already
        │       │                                   reads BLOG_POSTS: the
        │       │                                   /blog index, /blog/<slug>
        │       │                                   pages, prerendering,
        │       │                                   the sitemap generator
        │       ▼
        │    scripts/prerender.js renders real HTML + JSON-LD for the post
        │    at build time (runs automatically as part of `npm run build`)
        │
        └──► content/blog/<slug>.md          a human-readable markdown copy
                                              of the same post, for archival/
                                              portability — not what the site
                                              renders from directly.

scripts/blogQueue.json's matching idea gets status: "published" so it's
never picked again.

public/sitemap-static.xml gets regenerated (via `npm run sitemap`) so new
posts are indexed immediately.

.github/workflows/daily-blog-posts.yml runs all of the above once a day,
then commits and pushes whatever changed. That push triggers the site's
existing Vercel GitHub integration, which builds and deploys automatically —
there's no separate "deploy" step to configure.
```

## Adding more ideas to the queue

Open `scripts/blogQueue.json` and append an object in this shape:

```json
{
  "id": "unique-kebab-case-id",
  "keyword": "the target search phrase",
  "title": "A working title (the AI may refine it slightly)",
  "category": "Airport Guides",
  "outline": [
    "First point the post should cover",
    "Second point",
    "Third point",
    "Fourth point"
  ],
  "status": "pending"
}
```

- `id` just needs to be unique in the file — it's for tracking, not the final URL.
- `outline` becomes the post's H2 sections (the AI may adapt headings slightly for flow, but is instructed to cover every point).
- Always add new ideas with `"status": "pending"`. The script only ever
  picks from ideas that aren't `"published"` yet, so the queue never repeats
  a topic. Check `git log -- scripts/blogQueue.json` or search the file for
  `"status": "published"` to see what's already gone out.
- There's no hard limit — add as many as you want, whenever you want. The
  daily job will just keep working through them, oldest additions first
  only in the sense that they're all shuffled and picked at random each run.

If the queue runs low, the workflow will still run and publish whatever's
left, and will log a warning; if it's fully exhausted it exits cleanly
without publishing anything until you add more ideas.

## Running it manually

```bash
cd frontend
export ANTHROPIC_API_KEY=sk-ant-...        # or set it in your shell profile

npm run blogs:generate                     # generates BLOG_COUNT (default 4)
BLOG_COUNT=1 npm run blogs:generate         # generate just one, for testing
node scripts/generateBlogs.js --dry-run    # picks ideas + builds prompts,
                                            # makes NO API call and writes
                                            # NO files — free to run anytime
```

The script never commits or pushes anything itself (see below) — that's
the GitHub Actions workflow's job, so running it locally is safe and just
leaves modified/new files in your working tree for you to review or commit
by hand.

## Setup

### 1. Add the Anthropic API key as a GitHub Actions secret

The original brief said "add `ANTHROPIC_API_KEY` to Vercel env vars," but
nothing in this project's Vercel deployment (the React build, or any
`api/*.js` serverless function) calls the Anthropic API — only
`scripts/generateBlogs.js` does, and it only ever runs inside the GitHub
Actions workflow, never on Vercel. Adding the key to Vercel would do
nothing; it needs to be a **repository secret** instead:

1. GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
3. Name: `ANTHROPIC_API_KEY`, value: your key
4. (Optional) Add `ANTHROPIC_MODEL` too if you want to pin a specific model
   — defaults to `claude-sonnet-5` if unset.

### 2. Test it

```bash
cd frontend
BLOG_COUNT=1 npm run blogs:generate
```

Check that a new entry landed in `scripts/generatedBlogPosts.json`, a
matching `.md` file appeared in `content/blog/`, and
`src/lib/blogPostsGenerated.js` was rewritten. Then `npm start` and visit
`/blog` to see it listed, and `/blog/<the-new-slug>` to read it. If it
looks right, commit and push — or just let the scheduled workflow handle it
from here on.

### 3. The scheduler

`.github/workflows/daily-blog-posts.yml` is already wired up to run daily
at 9 AM (see the cron note in that file — it drifts an hour with DST twice
a year, which is harmless for a content job) via GitHub Actions, chosen
over Vercel Cron because this job needs to `git commit` and `git push` —
Vercel Cron only invokes an HTTP endpoint on a schedule, which isn't a
natural fit for "check out the repo, write files, push a commit." GitHub
Actions does that natively.

You can also trigger it on demand from the **Actions** tab → **Daily blog
posts** → **Run workflow**, optionally overriding how many posts to
generate that run.

## SEO checklist (per generated post)

Every post that comes out of `finalizePost()` in `generateBlogs.js`
includes:

- ✅ **Meta description** — `metaDescription`, truncated to 160 chars
- ✅ **H1 / H2 tags** — `title` renders as the page H1; each `sections[]`
  entry renders as an H2 (rendered by `BlogPostPage.jsx`, and statically by
  `prerender.js` for crawlers)
- ✅ **Internal links to 3 landing pages** — `relatedLinks`, always exactly
  3, and always validated against a whitelist of real, existing pages
  (services, cities, and landing pages pulled live from the site's own
  data) — the AI can never link to a page that doesn't exist
- ✅ **Image** — a real, on-topic photo already on the site (picked by
  keyword match against a small pool in `IMAGE_POOL`), not a broken or
  generic placeholder graphic
- ✅ **Schema markup** — `BlogPosting` JSON-LD (both statically at build
  time via `prerender.js` and client-side via `BlogPostPage.jsx`), plus a
  `FAQPage` block from the post's `faqs[]`
