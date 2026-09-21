import { useEffect } from "react";

const upsertMeta = (selector, attr, value, content) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

// `schema` (optional) is a JSON-LD object injected as <script id="page-schema">;
// keep it referentially stable (module-level const) so it is not re-injected.
export const Seo = ({ title, description, path = "", schema = null }) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      upsertMeta('meta[name="description"]', "name", "description", description);
      upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    }
    if (title) {
      upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    }
    const url = `https://www.92limo.com${path}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
  }, [title, description, path]);

  useEffect(() => {
    if (!schema) return undefined;
    const prev = document.getElementById("page-schema");
    if (prev) prev.remove();
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "page-schema";
    el.text = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => el.remove();
  }, [schema]);

  return null;
};
