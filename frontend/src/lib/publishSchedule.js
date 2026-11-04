// Scheduled publishing for blog posts.
//
// Opt-in: a post with `scheduled: true` whose `date` (YYYY-MM-DD, America/
// New_York) is later than the build's publish cutoff is left out of BLOG_POSTS,
// so it has no /blog/<slug> route, no card on /blog, no related-post link, no
// sitemap entry and no prerendered HTML. Posts without the flag are always live
// (some older posts carry future dates and are already indexed).
// A daily Vercel cron (api/cron/rebuild.js) redeploys the site, which moves the
// cutoff forward and publishes posts on their date with no manual step.
//
// Import-free on purpose: scripts/prerender.js, generateSitemap.js and
// generateRouteSlugs.js evaluate this file in a vm sandbox.
//
// Cutoff source: the client bundle gets REACT_APP_PUBLISH_CUTOFF inlined at
// build time (set in craco.config.js), so the browser never uses its own clock.
// Node scripts have no `process` in the sandbox and use today's Eastern date.

export const PUBLISH_TZ = "America/New_York";

export function easternDate(d = new Date()) {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PUBLISH_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function readCutoff() {
  let fromEnv = "";
  try {
    // Written literally so CRA's DefinePlugin can inline it.
    fromEnv = process.env.REACT_APP_PUBLISH_CUTOFF || "";
  } catch (e) {
    fromEnv = "";
  }
  return /^\d{4}-\d{2}-\d{2}$/.test(fromEnv) ? fromEnv : easternDate();
}

export const PUBLISH_CUTOFF = readCutoff();

export function isPublished(post) {
  if (!post || post.scheduled !== true) return true;
  return typeof post.date === "string" && post.date <= PUBLISH_CUTOFF;
}
