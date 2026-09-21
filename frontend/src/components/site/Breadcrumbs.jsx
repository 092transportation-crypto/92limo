import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SERVICE_PAGES, CITIES } from "@/lib/data";
import { LANDING_PAGES } from "@/lib/landingPages";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { GUIDES } from "@/lib/guides";
import { breadcrumbTrail, breadcrumbSchema } from "@/lib/breadcrumbs";

const DATA = { services: SERVICE_PAGES, landing: LANDING_PAGES, cities: CITIES, posts: BLOG_POSTS, guides: GUIDES };

const useTrail = () => {
  const { pathname } = useLocation();
  return useMemo(() => breadcrumbTrail(pathname, DATA), [pathname]);
};

// Visible trail. Rendered inside the dark page headers (PageHero, LegalLayout,
// article header), so colours assume a dark background.
export const Breadcrumbs = ({ className = "" }) => {
  const trail = useTrail();
  if (!trail) return null;
  return (
    <nav aria-label="Breadcrumb" data-testid="breadcrumbs" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-neutral-400">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.to} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-neutral-600" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className="text-neutral-300">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:text-[#D4AF37] transition-colors">{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// BreadcrumbList JSON-LD — mounted once in Layout so every page gets it.
export const BreadcrumbSchema = () => {
  const trail = useTrail();
  useEffect(() => {
    if (!trail) return undefined;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "breadcrumb-schema";
    el.text = JSON.stringify(breadcrumbSchema(trail));
    document.head.appendChild(el);
    return () => el.remove();
  }, [trail]);
  return null;
};
