# PRD — 92 Limo Service Website

## Original Problem Statement
Build a highly professional, luxury black car service website for **92 Limo Service / 92 Transportation LLC** (92limo.com, 877-679-0100), serving Maryland, Washington DC, Northern Virginia, BWI/DCA/IAD and long-distance trips. Luxury dark theme with gold accents, white text, smooth animations, mobile-first, SEO + schema, conversion-focused, no Emergent watermark. Inspired by (not copied from) ridelux.com.

## User Choices
- Booking inquiries: emailed to **info@92limo.com** (via Resend, optional) **and** saved to DB.
- Password-protected **admin dashboard** to view/manage inquiries.
- Elegant placeholder testimonials.
- User uploaded **real fleet photos** (Cadillac Escalade ESV, Mercedes S-Class, Lincoln Navigator, Mercedes Sprinter executive van interior).
- Hero: video-style animated background.

## Architecture
- **Frontend**: React (CRA) + Tailwind + shadcn/ui + framer-motion. Single-page marketing site (`/`) + admin (`/admin`).
- **Backend**: FastAPI + MongoDB (Motor). Resend for optional email.
- Theme: "Deep Void" dark (#090A0C) with gold (#D4AF37) accents; Playfair Display + Manrope fonts.

## Implemented (2026-06)
### Phase 6 — Local SEO city landing pages
- Added data-driven city landing pages at /airport-car-service/:city for 16 Maryland communities (Annapolis, Baltimore, Bowie, Crofton, Crownsville, Davidsonville, Odenton, Edgewater, Arnold, Severna Park, Riva, Columbia, Laurel, Rockville, Bethesda, Silver Spring).
- Each has unique title/meta, single localized H1, localized copy, service + nearby-airport + nearby-community links, CTA, and injected LocalBusiness JSON-LD schema.
- /service-areas now has a "Cities We Serve" directory; sitemap expanded to 33 URLs. Invalid slugs redirect to /service-areas. Verified 100% (0 broken images, backend 13/13).

### Phase 5 — Rebuilt from live 92limo.com content + image audit
- Crawled https://92limo.com and aligned all info (excluded injected pharmacy-spam links found on the live site).
- Fleet matched to real classes + capacities: Economy (Sedan 3/2), Business (Mercedes E-Class 3/2), First (Mercedes S-Class 3/2), Premium SUV (Cadillac Escalade 5/5), Sprinter Van (13/12).
- Services expanded to match: Airport, Corporate, Wedding, Wine Tours, Birthdays, Proms, Hourly, Long-Distance. Airports now BWI, DCA, IAD, Martin State (MTN), PHL. Maryland service areas + FAQs from live site.
- Added 3 new pages: /wine-tours, /birthday-celebrations, /prom-transportation. Sitemap = 17 URLs.
- Image audit: all 20 image URLs return 200; testing agent confirmed 0 broken images across all 17 routes.

### Phase 4 — White/Black Theme + More Pages
- Fixed broken hero image (old Pexels URL returned 403) → replaced with reliable CDN image.
- Converted entire public site + admin from dark to a **white & black theme** with gold accents (white/ivory sections, black text, gold buttons, black footer; navbar light over hero → white glass on scroll).
- Added pages: Long-Distance Transportation, Reviews, Gallery, FAQ (with FAQPage JSON-LD schema). Sitemap updated to 14 URLs.
- Verified 100% (backend 13/13 + frontend 14 pages, theme, images, FAQ, admin, booking, redirect, sitemap).

### Phase 3 — Logo, Estimator & SEO files
- Converted to react-router multi-page architecture with shared Layout (Navbar + Footer + sticky mobile bar + scroll-to-top).
- Pages: Home `/`, Fleet `/fleet`, Services `/services`, Airport `/airport-transportation`, Corporate `/corporate-transportation`, Hourly `/hourly-chauffeur`, Wedding `/wedding-transportation`, Service Areas `/service-areas`, About `/about`, Contact/Book `/contact`, Admin `/admin`. Unknown routes redirect to `/`.
- Per-page unique `<title>` + meta description + canonical (Seo component); single H1 per page; clean URL structure.
- Navbar with Services dropdown; all CTAs route to `/contact`; booking form lives on `/contact`.
- Generated 6 luxury scene images (airport, chauffeur, corporate, wedding, Sprinter exterior); fleet/about heroes use client's real photos (avoided an AI image with competitor "Range Rover" text). All images have alt text + lazy loading.
- Tested: 100% backend (13/13) + frontend (routing, SEO, booking, admin, mobile) — no broken links/images, no Emergent watermark.

### Phase 1 — Initial build
- Hero with animated/zoom luxury car background + dual CTAs (Book Now / Call).
- Booking inquiry form (all required fields) → POST `/api/bookings`, saves to DB, attempts email.
- Fleet (5 vehicles, real photos + 2 generated), hover animations, pax/luggage capacity.
- Services (7), Airport transfers (BWI/DCA/IAD + flight tracking/meet & greet), Popular routes (8), Why Choose Us (7), Testimonials (4), Service Areas (15 chips), Footer.
- Sticky mobile Call/Book bar; sticky glass navbar; smooth scroll; framer-motion reveals.
- SEO meta + LocalBusiness/LimousineService JSON-LD schema; Emergent badge removed.
- Admin: password login (`/admin`), bookings table, stats, status updates (token-protected).
- Tested: 100% backend (13/13 pytest) + frontend flows.

## Backlog
- **P1**: Provide RESEND_API_KEY + verify 92limo.com sending domain to enable live email delivery (currently graceful no-op, `email_sent=false`).
- **P1**: Replace text logo with uploaded brand logo when available.
- **P2**: shadcn Calendar/TimePicker for date/time; real Google reviews; OG share image; sitemap.xml/robots.txt; signed JWT for admin.

## Credentials
- Admin password: `92Limo!Admin2026` (see /app/memory/test_credentials.md)
