// 2026-10-23 SEO round-6 push, batch 11 — 20 new hand-written landing pages.
// Same shape as MARYLAND_LANDING_PAGES / MARYLAND_BATCH3-9_PAGES (see
// marylandPages.js header). Merged into LANDING_PAGES by src/lib/landingPages.js.
//
// NOTE ON NUMBERING: this file was originally drafted as
// marylandPagesBatch10.js, but a concurrent session working the same round
// independently created, used and later deleted that filename (along with
// all its own wiring) as part of its own refactor into bwiAirportPages.js /
// semrushKeywordGapPages.js. Per instructions not to revert or fight
// concurrent-session edits, this content was moved to batch 11 (matching
// blogPostsBatch11.js, which hit the same original-name collision on the
// blog side) and re-wired from scratch rather than restoring the old name.
//
// Before drafting, every existing landing-page slug across landingPages.js,
// landingPagesGenerated.js and marylandPagesBatch3-9.js (335 pages) was
// reviewed to avoid duplicating existing coverage — the site already has a
// dedicated page for nearly every MD/DC/VA/DE/PA city and most city+service
// combinations. Three genuinely open categories were identified and filled:
//
// 1. County-wide landing pages (5) — the site has individual city pages for
//    Annapolis, Glen Burnie, Severna Park, etc., and a Howard County WEDDING
//    page (batch 9), but no general county-wide page for any Maryland
//    county existed before this batch: Montgomery, Prince George's, Anne
//    Arundel, Howard (general) and Baltimore County (distinct from the
//    existing Baltimore CITY page, baltimore-limo-service).
// 2. City + missing service-tier combinations (10) — cities that already
//    have a -limo-service page but are missing one specific service tier
//    other similarly sized cities already have (e.g. Frederick and Laurel
//    are missing a -corporate-car-service page that Annapolis, Bethesda,
//    Columbia, Gaithersburg, Hunt Valley and Towson already have; Baltimore
//    city itself has no dedicated wedding-limo-service page despite having
//    general wedding-transportation and county-level wedding pages).
// 3. Five new corporate-by-industry verticals, extending the five industry
//    pages already shipped in batch 9 (healthcare, law, tech, government,
//    finance) into five more genuinely distinct verticals not yet covered:
//    real estate/title, higher education, nonprofit/association (K Street
//    advocacy, distinct from law firms and government contractors),
//    hospitality/hotel-concierge partnerships, and embassy/diplomatic —
//    the last pairs directly with the "Chevy Chase & Bethesda: Discreet
//    Car Service for Diplomats" blog post in blogPostsBatch11.js.
//
// Every entry here is picked up automatically by the shared
// relatedLandingPages() helper in src/lib/pillarLinks.js for its "Also
// Serving" cross-links (live React page + prerender.js both read it), so no
// separate wiring is needed for that — this file only needs to be imported
// and spread into LANDING_PAGES in src/lib/landingPages.js, and added to the
// hardcoded source-file lists in scripts/prerender.js, scripts/
// generateSitemap.js and scripts/generateRouteSlugs.js (all three evaluate
// this content in a VM sandbox and silently omit anything not explicitly
// listed there).
import { IMAGES } from "@/lib/data";

export const MARYLAND_BATCH11_PAGES = {
  // ============================================================
  // COUNTY-WIDE PAGES (5)
  // ============================================================
  "montgomery-county-md-limo-service": {
    metaTitle: "Montgomery County, MD Limo Service | 92 Limo",
    metaDescription:
      "Limo & car service across Montgomery County, MD — Bethesda, Rockville, Silver Spring, Gaithersburg & more. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "MONTGOMERY COUNTY, MD",
    h1: "Limo & Car Service in Montgomery County, MD",
    subtitle: "Chauffeured transportation across every Montgomery County community — Bethesda, Rockville, Silver Spring, Gaithersburg, Potomac and beyond.",
    image: IMAGES.dcSkyline,
    alt: "Luxury chauffeured sedan serving a Montgomery County, MD client — 92 Limo Service",
    highlightsHeading: "Why Montgomery County Chooses 92 Limo Service",
    intro: [
      "Montgomery County is Maryland's most populous county and one of the most varied — the federal and biotech employers of Bethesda and Rockville, the dense residential corridor through Silver Spring and Wheaton, the I-270 tech corridor through Gaithersburg and Germantown, and the quieter, larger-lot communities of Potomac and North Potomac. 92 Limo Service covers all of it with the same flat, transparent pricing and professional chauffeurs, 24 hours a day.",
      "We run airport transfers to BWI, DCA and IAD from every part of the county daily, and we're equally familiar with the NIH and Walter Reed campuses in Bethesda, the county government center in Rockville, the I-270 corporate corridor, and the wedding and event venues scattered across Potomac and the county's northern communities.",
      "Each booking is planned around your exact pickup address and destination, whether that's an early flight from Olney, a corporate roadshow across several Gaithersburg office parks, or a wedding in Potomac. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch reachable around the clock.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a Premium SUV (Cadillac Escalade) for a family or executive with luggage, or a Sprinter Executive van for a group traveling together — and mix vehicles under one reservation for a multi-stop day.",
      "Montgomery County residents also book us regularly for weddings, proms, corporate accounts, and medical-appointment transportation to the county's many hospitals and specialty clinics.",
    ],
    highlights: [
      { title: "Every Montgomery County Community", desc: "Bethesda, Rockville, Silver Spring, Gaithersburg, Germantown, Potomac, Olney and every community between them." },
      { title: "NIH & Walter Reed Familiar", desc: "Chauffeurs who know the Bethesda federal medical campuses and their visitor check-in processes." },
      { title: "I-270 Corridor Coverage", desc: "Daily corporate and airport trips through the Gaithersburg and Germantown tech corridor." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early flights, late events and last-minute schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Montgomery County Communities",
        places: [
          { label: "Bethesda", to: "/bethesda-limo-service" },
          { label: "Rockville", to: "/rockville-limo-service" },
          { label: "Silver Spring", to: "/silver-spring-limo-service" },
          { label: "Gaithersburg", to: "/gaithersburg-limo-service" },
          { label: "Germantown", to: "/germantown-limo-service" },
          { label: "Potomac", to: "/potomac-limo-service" },
          { label: "North Potomac", to: "/north-potomac-limo-service" },
          { label: "Olney", to: "/olney-limo-service" },
          { label: "Chevy Chase", to: "/chevy-chase-limo-service" },
          { label: "North Bethesda", to: "/north-bethesda-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Tech Company Car Service — Maryland", to: "/tech-company-car-service-maryland" },
          { label: "Healthcare Corporate Car Service — Maryland", to: "/healthcare-corporate-car-service-maryland" },
          { label: "Chevy Chase & Bethesda: Diplomatic & Executive Car Service", to: "/blog/chevy-chase-bethesda-diplomatic-executive-car-service" },
          { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve every community in Montgomery County?", a: "Yes — Bethesda, Rockville, Silver Spring, Gaithersburg, Germantown, Potomac, Olney and every community between them are part of our regular service area." },
      { q: "How much does Montgomery County car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 or request a quote online." },
      { q: "Can you handle corporate travel across multiple Montgomery County office parks in one day?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur for the whole day, moving between stops along the I-270 corridor or elsewhere in the county." },
      { q: "Which airports do you serve from Montgomery County?", a: "BWI, DCA and IAD are all served daily from every part of the county, with flight tracking and complimentary wait time on every pickup." },
      { q: "Can we set up a corporate account for a Montgomery County office?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Book Montgomery County Car Service",
    ctaSubtitle: "Reserve chauffeured transportation anywhere in Montgomery County. Call (877) 609-1919.",
  },

  "prince-georges-county-md-limo-service": {
    metaTitle: "Prince George's County, MD Limo Service | 92 Limo",
    metaDescription:
      "Limo & car service across Prince George's County, MD — Bowie, Greenbelt, Laurel, Hyattsville, College Park & more. Call (877) 609-1919.",
    eyebrow: "PRINCE GEORGE'S COUNTY, MD",
    h1: "Limo & Car Service in Prince George's County, MD",
    subtitle: "Chauffeured transportation across Prince George's County — Bowie, Greenbelt, Laurel, Hyattsville, College Park and every community between.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan serving a Prince George's County, MD client — 92 Limo Service",
    highlightsHeading: "Why Prince George's County Chooses 92 Limo Service",
    intro: [
      "92 Limo Service is headquartered in Laurel, right at the edge of Prince George's County, which makes the county's full range of communities — from College Park's university corridor to National Harbor's waterfront entertainment district — genuinely home territory rather than an outer service area.",
      "We regularly serve the University of Maryland campus in College Park, the federal offices around Greenbelt, National Harbor's hotels and MGM casino, and the residential communities of Bowie, Hyattsville, Largo and Upper Marlboro, with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "Each booking is planned around your exact pickup and destination, whether that's a UMD move-in day, a flight from BWI or DCA, a wedding at one of the county's event venues, or a corporate trip to the federal campuses near Greenbelt. We confirm the itinerary the day before and keep dispatch reachable around the clock.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard trip, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van for a group — and mix vehicles under one reservation for move-in day, a wedding, or a group outing to National Harbor.",
      "Because BWI and DCA sit close to much of Prince George's County, airport transfers are among our most frequent bookings here, with flight tracking and complimentary wait time on every pickup.",
    ],
    highlights: [
      { title: "Headquartered Nearby, in Laurel", desc: "92 Limo Service's home office sits at the edge of Prince George's County — this is core territory, not a far reach." },
      { title: "UMD College Park Familiar", desc: "Move-in days, graduation weekends and parent visits to the University of Maryland campus are regular bookings." },
      { title: "National Harbor & MGM Coverage", desc: "Evenings out, conventions and casino trips to National Harbor are a frequent and well-known route." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early flights and last-minute schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Prince George's County Communities",
        places: [
          { label: "Bowie", to: "/bowie-md-limo-service" },
          { label: "Greenbelt", to: "/greenbelt-md-limo-service" },
          { label: "Laurel", to: "/laurel-md-limo-service" },
          { label: "College Park", to: "/college-park-limo-service" },
          { label: "Hyattsville", to: "/hyattsville-limo-service" },
          { label: "Largo", to: "/largo-md-limo-service" },
          { label: "Upper Marlboro", to: "/upper-marlboro-limo-service" },
          { label: "New Carrollton", to: "/new-carrollton-limo-service" },
          { label: "Lanham", to: "/lanham-md-limo-service" },
          { label: "Oxon Hill", to: "/oxon-hill-md-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
          { label: "MGM National Harbor Transportation", to: "/mgm-national-harbor-transportation" },
          { label: "University of Maryland Transportation", to: "/university-of-maryland-transportation" },
          { label: "Fort Meade, NSA & Laurel Corporate Campus Guide", to: "/blog/fort-meade-nsa-laurel-corporate-campus-transportation" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve all of Prince George's County, or just a few cities?", a: "All of it — Bowie, Greenbelt, Laurel, College Park, Hyattsville, Largo, Upper Marlboro and every community between them are part of our regular service area." },
      { q: "How close is 92 Limo Service to Prince George's County?", a: "Our office is in Laurel, at the edge of the county — this is one of our core service areas, not an outer reach." },
      { q: "Can you handle UMD move-in day or graduation weekend?", a: "Yes — these are among our most common Prince George's County bookings. Reserve a few weeks ahead for move-in weekend and graduation season, since vehicle demand peaks on those specific dates." },
      { q: "Do you serve National Harbor and MGM from Prince George's County addresses?", a: "Yes, regularly — National Harbor evenings, conventions and casino trips are a frequent, well-known route for us." },
      { q: "How much does Prince George's County car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Prince George's County Car Service",
    ctaSubtitle: "Reserve chauffeured transportation anywhere in Prince George's County. Call (877) 609-1919.",
  },

  "anne-arundel-county-md-limo-service": {
    metaTitle: "Anne Arundel County, MD Limo Service | 92 Limo",
    metaDescription:
      "Limo & car service across Anne Arundel County, MD — Annapolis, Glen Burnie, Severna Park, Odenton, Pasadena & more. Call (877) 609-1919.",
    eyebrow: "ANNE ARUNDEL COUNTY, MD",
    h1: "Limo & Car Service in Anne Arundel County, MD",
    subtitle: "Chauffeured transportation across Anne Arundel County — Annapolis, Glen Burnie, Severna Park, Odenton, Pasadena and the waterfront communities between.",
    image: IMAGES.suv,
    alt: "Luxury chauffeured SUV serving an Anne Arundel County, MD client — 92 Limo Service",
    highlightsHeading: "Why Anne Arundel County Chooses 92 Limo Service",
    intro: [
      "Anne Arundel County stretches from BWI Marshall Airport's immediate neighborhoods through the state capital of Annapolis and out along the Chesapeake Bay's western shore — a mix of airport-adjacent communities, the historic waterfront, and quieter residential peninsulas like Gibson Island and Riva. 92 Limo Service covers all of it with the same flat, transparent pricing and professional chauffeurs.",
      "We're based close enough to the county that BWI transfers from anywhere in Anne Arundel are among our most frequent trips, and we regularly serve the Annapolis waterfront and Naval Academy area, the Live! Casino & Hotel in Hanover, and wedding venues scattered across Severna Park, Arnold and the bay-adjacent communities.",
      "Each booking is planned around your exact pickup and destination, whether that's an early BWI departure from Glen Burnie, a wedding on the Annapolis waterfront, or a casino night at Live! Maryland. We confirm the itinerary the day before and keep dispatch reachable around the clock.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for a wedding or VIP occasion, or a Sprinter Executive van for a group — and mix vehicles under one reservation.",
      "Anne Arundel County residents also book us regularly for corporate travel tied to Fort Meade and the NSA corridor, boat show transportation in Annapolis, and golf outings at the county's country clubs.",
    ],
    highlights: [
      { title: "BWI's Home County", desc: "Anne Arundel surrounds BWI Marshall Airport, making airport transfers one of our most frequent routes here." },
      { title: "Annapolis Waterfront Familiar", desc: "Weddings, the Naval Academy, Ego Alley and the historic district are regular bookings." },
      { title: "Live! Casino & Hotel Coverage", desc: "Evenings out and conventions at Live! Maryland in Hanover are a well-known route." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early flights and last-minute schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Anne Arundel County Communities",
        places: [
          { label: "Annapolis", to: "/annapolis-limo-service" },
          { label: "Glen Burnie", to: "/glen-burnie-limo-service" },
          { label: "Severna Park", to: "/severna-park-limo-service" },
          { label: "Odenton", to: "/odenton-limo-service" },
          { label: "Arnold", to: "/arnold-limo-service" },
          { label: "Pasadena", to: "/limo-service-pasadena-md" },
          { label: "Crofton", to: "/crofton-limo-service" },
          { label: "Gibson Island", to: "/gibson-island-limo-service" },
          { label: "Riva", to: "/riva-limo-service" },
          { label: "Cape St. Claire", to: "/cape-st-claire-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Live! Casino Hotel Maryland Transportation", to: "/live-casino-hotel-maryland-transportation" },
          { label: "Annapolis Boat Show Transportation", to: "/annapolis-boat-show-transportation" },
          { label: "Fort Meade, NSA & Laurel Corporate Campus Guide", to: "/blog/fort-meade-nsa-laurel-corporate-campus-transportation" },
          { label: "Living Next to BWI: Glen Burnie & Linthicum Guide", to: "/blog/glen-burnie-linthicum-bwi-neighbor-guide-airport-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve the entire Anne Arundel County, including the waterfront communities?", a: "Yes — Annapolis, Glen Burnie, Severna Park, Odenton, Arnold, Pasadena, Gibson Island, Riva and every community between them are part of our regular service area." },
      { q: "How quickly can you reach BWI from an Anne Arundel County address?", a: "Most of the county sits within 10 to 25 minutes of BWI, and airport transfers from here are among our most frequent bookings." },
      { q: "Do you serve weddings on the Annapolis waterfront?", a: "Yes, regularly — the Naval Academy area, Ego Alley and the historic waterfront district are familiar territory for our chauffeurs." },
      { q: "Can you take us to Live! Casino & Hotel in Hanover?", a: "Yes — this is a well-known, frequently booked route from across Anne Arundel County." },
      { q: "How much does Anne Arundel County car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Anne Arundel County Car Service",
    ctaSubtitle: "Reserve chauffeured transportation anywhere in Anne Arundel County. Call (877) 609-1919.",
  },

  "howard-county-md-limo-service": {
    metaTitle: "Howard County, MD Limo Service | 92 Limo Service",
    metaDescription:
      "Limo & car service across Howard County, MD — Columbia, Ellicott City, Clarksville, Fulton & more. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "HOWARD COUNTY, MD",
    h1: "Limo & Car Service in Howard County, MD",
    subtitle: "Chauffeured transportation across Howard County — Columbia, Ellicott City, Clarksville, Fulton and every community between them.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Howard County, MD client — 92 Limo Service",
    highlightsHeading: "Why Howard County Chooses 92 Limo Service",
    intro: [
      "Howard County sits almost exactly between Baltimore and Washington, which has made it one of the region's fastest-growing corporate and residential corridors — Columbia's planned-community town center and corporate campuses, historic Ellicott City's Main Street district, and the newer, larger-lot communities of Clarksville and Fulton. 92 Limo Service is based nearby in Laurel and covers all of Howard County with the same flat, transparent pricing we bring to every trip.",
      "We regularly serve Columbia's corporate office parks along US-29 and MD-175, Merriweather Post Pavilion's concert season, historic Ellicott City's Main Street and B&O Railroad Station, and the resort and historic wedding venues across the county. Airport transfers to BWI — a short, well-known trip from most of Howard County — are among our most frequent bookings here.",
      "Each booking is planned around your exact pickup and destination, whether that's a corporate roadshow across Columbia's tech campuses, a concert at Merriweather, or a wedding at Turf Valley or Belmont Manor. We confirm the itinerary the day before and keep dispatch reachable around the clock.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard trip, a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for a wedding or executive occasion, or a Sprinter Executive van for a group — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "Between Baltimore and DC", desc: "Howard County's central location makes it a natural hub for airport transfers to BWI, DCA and IAD alike." },
      { title: "Columbia's Corporate Corridor", desc: "Daily corporate trips through Columbia's US-29/MD-175 office and tech campuses." },
      { title: "Merriweather Post Pavilion Familiar", desc: "Concert-night pickup and drop-off is a frequent, well-known booking." },
      { title: "Historic Ellicott City & Resort Weddings", desc: "Chauffeurs experienced with both the historic Main Street district and resort venues like Turf Valley." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Howard County Communities",
        places: [
          { label: "Columbia", to: "/columbia-md-limo-service" },
          { label: "Ellicott City", to: "/ellicott-city-limo-service" },
          { label: "Clarksville", to: "/clarksville-limo-service" },
          { label: "Fulton", to: "/fulton-md-limo-service" },
          { label: "Elkridge", to: "/elkridge-limo-service" },
          { label: "Savage", to: "/savage-md-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Howard County's Corporate Corridor Guide", to: "/blog/howard-county-columbia-corporate-corridor-transportation" },
          { label: "Wedding Limo Service — Howard County", to: "/wedding-limo-howard-county-md" },
          { label: "Merriweather Post Pavilion Transportation", to: "/merriweather-post-pavilion-transportation" },
          { label: "Tech Company Car Service — Maryland", to: "/tech-company-car-service-maryland" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve all of Howard County, including Clarksville and Fulton?", a: "Yes — Columbia, Ellicott City, Clarksville, Fulton, Elkridge and Savage are all part of our regular service area." },
      { q: "How close is Howard County to BWI?", a: "Most of the county is a 15-to-30-minute drive to BWI, making airport transfers one of our most frequent bookings from here." },
      { q: "Can you handle a corporate day with multiple stops across Columbia's office parks?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur for the whole day, moving between Columbia's corporate campuses." },
      { q: "Do you serve concerts at Merriweather Post Pavilion?", a: "Yes, regularly — concert-night drop-off and pickup is a well-known, frequently booked route for us." },
      { q: "How much does Howard County car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Howard County Car Service",
    ctaSubtitle: "Reserve chauffeured transportation anywhere in Howard County. Call (877) 609-1919.",
  },

  "baltimore-county-md-limo-service": {
    metaTitle: "Baltimore County, MD Limo Service | 92 Limo",
    metaDescription:
      "Limo & car service across Baltimore County, MD — Towson, Hunt Valley, Timonium, Cockeysville, Dundalk & more. Call (877) 609-1919.",
    eyebrow: "BALTIMORE COUNTY, MD",
    h1: "Limo & Car Service in Baltimore County, MD",
    subtitle: "Chauffeured transportation across Baltimore County — Towson, Hunt Valley, Timonium, Cockeysville, Dundalk and the communities that surround Baltimore City.",
    image: IMAGES.sClassFirst,
    alt: "Luxury chauffeured sedan serving a Baltimore County, MD client — 92 Limo Service",
    highlightsHeading: "Why Baltimore County Chooses 92 Limo Service",
    intro: [
      "Baltimore County wraps entirely around Baltimore City without including it — a distinction that matters when you're searching for local car service, since this page covers the surrounding county communities specifically: Towson's courthouse and university district, the Hunt Valley and Timonium corporate corridor, Cockeysville and the county's northern suburbs, and the eastern communities of Dundalk, Essex and White Marsh. 92 Limo Service covers all of Baltimore County with the same flat, transparent pricing we bring to every trip.",
      "We regularly serve the Towson County Courthouse area, corporate offices throughout Hunt Valley and Timonium, Goucher and Towson University, and the county's wedding and event venues. Airport transfers to BWI are a quick, well-known trip from most of Baltimore County, and we also run frequent transfers to Baltimore City's Inner Harbor, stadiums and entertainment venues.",
      "Each booking is planned around your exact pickup and destination, whether that's a Towson corporate meeting, a Hunt Valley roadshow, or a wedding in one of the county's event venues. We confirm the itinerary the day before and keep dispatch reachable around the clock.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard trip, a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for a wedding or corporate occasion, or a Sprinter Executive van for a group — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "Surrounds Baltimore City", desc: "Towson, Hunt Valley, Timonium, Cockeysville, Dundalk, Essex and the rest of the county encircling Baltimore City." },
      { title: "Towson & Hunt Valley Corporate Corridor", desc: "Daily corporate trips through Towson's courthouse district and the Hunt Valley/Timonium business corridor." },
      { title: "Easy Reach to BWI & Baltimore City", desc: "Quick, well-known trips to BWI, the Inner Harbor and Baltimore's stadiums and arenas." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early flights and last-minute schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Baltimore County Communities",
        places: [
          { label: "Towson", to: "/towson-limo-service" },
          { label: "Hunt Valley", to: "/hunt-valley-limo-service" },
          { label: "Timonium", to: "/timonium-limo-service" },
          { label: "Cockeysville", to: "/cockeysville-limo-service" },
          { label: "Dundalk", to: "/dundalk-limo-service" },
          { label: "Essex", to: "/essex-md-limo-service" },
          { label: "White Marsh", to: "/white-marsh-limo-service" },
          { label: "Pikesville", to: "/pikesville-limo-service" },
          { label: "Owings Mills", to: "/owings-mills-limo-service" },
          { label: "Lutherville", to: "/lutherville-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Baltimore Limo Service (Baltimore City)", to: "/baltimore-limo-service" },
          { label: "Towson Corporate Car Service", to: "/towson-corporate-car-service" },
          { label: "Hunt Valley Corporate Car Service", to: "/hunt-valley-corporate-car-service" },
          { label: "Canton & Fells Point Bar Crawl Car Service", to: "/blog/canton-fells-point-baltimore-nightlife-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Is Baltimore County the same as Baltimore City?", a: "No — Baltimore County surrounds Baltimore City but is a separate jurisdiction. This page covers the surrounding county communities (Towson, Hunt Valley, Timonium, Dundalk and others); see our Baltimore Limo Service page for the city itself." },
      { q: "Do you serve Towson and the Hunt Valley corporate corridor regularly?", a: "Yes — both are frequent bookings, including Towson's courthouse-area travel and daily corporate trips through Hunt Valley and Timonium." },
      { q: "How close is Baltimore County to BWI?", a: "Most of the county is within 20 to 35 minutes of BWI, depending on the specific community, making airport transfers a common booking here." },
      { q: "Can you take us from Baltimore County into the city for a game or event?", a: "Yes — transfers to the Inner Harbor, Camden Yards, M&T Bank Stadium and other Baltimore City destinations are a regular route from across the county." },
      { q: "How much does Baltimore County car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Baltimore County Car Service",
    ctaSubtitle: "Reserve chauffeured transportation anywhere in Baltimore County. Call (877) 609-1919.",
  },

  // ============================================================
  // CITY + MISSING SERVICE-TIER PAGES (10)
  // ============================================================
  "frederick-md-corporate-car-service": {
    metaTitle: "Frederick, MD Corporate Car Service | 92 Limo",
    metaDescription:
      "Chauffeured corporate car service in Frederick, MD — executive travel, airport transfers & roadshows. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "FREDERICK, MD · CORPORATE CAR SERVICE",
    h1: "Corporate Car Service in Frederick, MD",
    subtitle: "Chauffeured corporate transportation for Frederick's biotech, government and business community — flat rates, 24/7 dispatch.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Frederick, MD corporate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Frederick Corporate Travel",
    intro: [
      "Frederick has grown into a genuine business hub of its own — the Fort Detrick and National Cancer Institute biotech corridor, a historic downtown that hosts conferences and corporate events, and a business community that regularly needs airport transfers to BWI, DCA and IAD. 92 Limo Service provides corporate car service here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "We regularly serve the Fort Detrick/National Cancer Institute satellite campus, downtown Frederick's business and conference district, and the office parks along US-15 and I-70. Knowing the fastest route out to each of the region's three airports from Frederick, and the visitor procedures at the biotech campuses, is what turns a nice vehicle into a reliable one on a tight meeting schedule.",
      "Each booking is planned around visiting-executive pickups, Fort Detrick visitor logistics, and recurring commutes between Frederick and Baltimore, DC or Northern Virginia offices. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout.",
      "Choose a Business Sedan (Mercedes E-Class) for a single executive, a Premium SUV (Cadillac Escalade) for a small team with luggage, or a Sprinter Executive van for a larger group — and mix vehicles under one reservation.",
      "Confidentiality is standard practice for every trip, and consolidated monthly invoicing with itemized receipts keeps Frederick-based finance teams comfortable managing recurring corporate travel.",
    ],
    highlights: [
      { title: "Fort Detrick & Biotech Corridor Familiar", desc: "Regular visits to the National Cancer Institute satellite campus and Frederick's biotech employers." },
      { title: "Three-Airport Reach", desc: "Confident, flat-rate service to BWI, DCA and IAD alike from Frederick." },
      { title: "Downtown Conference District", desc: "Historic downtown Frederick's event and conference venues are familiar territory." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early departures and schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Frederick, MD Limo Service", to: "/frederick-md-limo-service" },
          { label: "Healthcare Corporate Car Service — Maryland", to: "/healthcare-corporate-car-service-maryland" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "Wine Tour Limo Service — Frederick County, MD", to: "/wine-tour-limo-frederick-county-md" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do your chauffeurs know the Fort Detrick and biotech corridor?", a: "Yes — this is a regular part of our Frederick service, including visitor check-in procedures at the National Cancer Institute satellite campus and nearby employers." },
      { q: "Which airports can you reach from Frederick?", a: "BWI, DCA and IAD are all served confidently and at a flat, transparent rate from Frederick." },
      { q: "Can you coordinate a multi-stop corporate day in Frederick?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur for the whole day, moving between downtown Frederick, Fort Detrick and other stops." },
      { q: "Can our Frederick company set up a corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "How much does Frederick corporate car service cost?", a: "It's a flat or hourly rate confirmed before you book, based on vehicle class and trip details. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Frederick, MD Corporate Car Service",
    ctaSubtitle: "Reserve chauffeured corporate transportation in Frederick. Call (877) 609-1919.",
  },

  "laurel-md-corporate-car-service": {
    metaTitle: "Laurel, MD Corporate Car Service | 92 Limo Service",
    metaDescription:
      "Chauffeured corporate car service based in Laurel, MD — Fort Meade, NSA corridor & executive travel. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "LAUREL, MD · CORPORATE CAR SERVICE",
    h1: "Corporate Car Service in Laurel, MD",
    subtitle: "92 Limo Service is headquartered in Laurel — corporate transportation for the Fort Meade/NSA corridor and Laurel's business community.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Laurel, MD corporate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Laurel Corporate Travel",
    intro: [
      "92 Limo Service is headquartered right in Laurel, which makes corporate travel here more than just another service area — it's home. We regularly serve the Fort Meade and NSA corridor, Laurel's own growing office and business park community, and the airport transfers to BWI that are often the shortest, most frequently booked trip in our entire network.",
      "We know Fort Meade's visitor-control procedures, Laurel's business parks along Route 198 and the ICC, and the fastest routes between Laurel and BWI, DCA or IAD at any hour of the day. That local familiarity is what turns a nice vehicle into a dependably on-time one for a tight meeting schedule.",
      "Each booking is planned around facility-access windows at Fort Meade, visiting-executive pickups, and recurring commutes between Laurel and Baltimore, DC or Northern Virginia. We confirm the itinerary the day before, stage the vehicle early — often literally around the corner from the pickup — and keep dispatch on the line throughout.",
      "Choose a Business Sedan (Mercedes E-Class) for a single executive or contractor, a Premium SUV (Cadillac Escalade) for a small team, or a Sprinter Executive van for a larger group — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "Headquartered Right Here", desc: "92 Limo Service's home office is in Laurel — this is our most familiar territory, not an outer service area." },
      { title: "Fort Meade & NSA Corridor Ready", desc: "Chauffeurs understand facility visitor-control procedures and gate logistics for the corridor." },
      { title: "Shortest Route to BWI", desc: "Laurel sits close enough to BWI that airport transfers here are among the quickest, most frequently booked trips we run." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch, Fast Response", desc: "Being headquartered in Laurel means faster response for last-minute Laurel bookings." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Laurel, MD Limo Service", to: "/laurel-md-limo-service" },
          { label: "Government & Defense Contractor Car Service — Maryland", to: "/government-contractor-car-service-maryland" },
          { label: "Fort Meade, NSA & Laurel Corporate Campus Guide", to: "/blog/fort-meade-nsa-laurel-corporate-campus-transportation" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Is 92 Limo Service actually based in Laurel?", a: "Yes — our office is at 9836 Lyon Ave, Laurel, MD 20723, which makes Laurel and the surrounding Fort Meade corridor our most familiar, closely covered territory." },
      { q: "Can your chauffeurs work around Fort Meade's visitor-control procedures?", a: "Yes. Chauffeurs regularly serving this corridor understand ID checks, gate procedures and approved staging areas." },
      { q: "How quickly can you respond to a last-minute Laurel pickup?", a: "Being headquartered in Laurel generally allows faster response than for more distant parts of our service area — call (877) 609-1919 to check same-day availability." },
      { q: "How much does Laurel corporate car service cost?", a: "It's a flat or hourly rate confirmed before you book. Call (877) 609-1919 or request a quote online." },
      { q: "Can our Laurel-area company set up a recurring corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Book Laurel, MD Corporate Car Service",
    ctaSubtitle: "Reserve chauffeured corporate transportation with the company headquartered right in Laurel. Call (877) 609-1919.",
  },

  "bowie-corporate-car-service": {
    metaTitle: "Bowie, MD Corporate Car Service | 92 Limo Service",
    metaDescription:
      "Chauffeured corporate car service in Bowie, MD — executive travel, airport transfers to BWI, DCA & IAD. Flat rates. Call (877) 609-1919.",
    eyebrow: "BOWIE, MD · CORPORATE CAR SERVICE",
    h1: "Corporate Car Service in Bowie, MD",
    subtitle: "Chauffeured corporate transportation for Bowie's business community — flat rates, airport transfers, 24/7 dispatch.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Bowie, MD corporate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Bowie Corporate Travel",
    intro: [
      "Bowie sits conveniently between Washington, Annapolis and BWI, which has made it a popular base for executives and professionals who commute in several directions. 92 Limo Service provides corporate car service here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "We regularly serve Bowie's business parks and the nearby federal and corporate offices around Route 50 and the Beltway, with daily airport transfers to BWI, DCA and IAD. Knowing the fastest route out of Bowie toward each airport at any hour is what keeps an early-morning or evening meeting on schedule.",
      "Each booking is planned around visiting-executive pickups, roadshow days with stops across the DC-Baltimore corridor, and recurring commutes. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout.",
      "Choose a Business Sedan (Mercedes E-Class) for a single executive, a Premium SUV (Cadillac Escalade) for a small team with luggage, or a Sprinter Executive van for a larger group — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "Central to Three Directions", desc: "Bowie's position between DC, Annapolis and BWI makes it a convenient base for multi-destination corporate travel." },
      { title: "Three-Airport Reach", desc: "Confident, flat-rate service to BWI, DCA and IAD alike from Bowie." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early departures and schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Bowie, MD Limo Service", to: "/bowie-md-limo-service" },
          { label: "Bowie Wedding Limo Service", to: "/bowie-wedding-limo-service" },
          { label: "Prince George's County, MD Limo Service", to: "/prince-georges-county-md-limo-service" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Which airports can you reach from Bowie?", a: "BWI, DCA and IAD are all served confidently and at a flat, transparent rate from Bowie." },
      { q: "Can you coordinate a multi-stop corporate roadshow from Bowie?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur for the whole day across the DC-Baltimore corridor." },
      { q: "Can our Bowie-area company set up a corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "How much does Bowie corporate car service cost?", a: "It's a flat or hourly rate confirmed before you book. Call (877) 609-1919 or request a quote online." },
      { q: "Do you also serve weddings and personal travel in Bowie?", a: "Yes — see our Bowie Limo Service and Bowie Wedding Limo Service pages for non-corporate bookings." },
    ],
    ctaTitle: "Book Bowie, MD Corporate Car Service",
    ctaSubtitle: "Reserve chauffeured corporate transportation in Bowie. Call (877) 609-1919.",
  },

  "towson-wedding-limo-service": {
    metaTitle: "Towson, MD Wedding Limo Service | 92 Limo Service",
    metaDescription:
      "Chauffeured wedding limo service in Towson, MD — professional chauffeurs, flat rates, Sprinter vans for the wedding party. Call (877) 609-1919.",
    eyebrow: "TOWSON, MD · WEDDING TRANSPORTATION",
    h1: "Wedding Limo Service in Towson, MD",
    subtitle: "Chauffeured wedding transportation in Towson — Goucher College area venues, downtown Towson and the surrounding Baltimore County wedding scene.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Towson, MD wedding — 92 Limo Service",
    highlightsHeading: "Why Towson Couples Choose 92 Limo Service",
    intro: [
      "Towson's mix of historic venues, the Goucher College area, and its proximity to Baltimore's broader wedding venue scene makes it a frequent wedding-transportation booking for us. 92 Limo Service provides chauffeured wedding transportation here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "Each booking is planned around the getting-ready location, the ceremony, any photo stops, the reception, and the end-of-night departure. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout — spring and fall Saturdays are the busiest wedding dates of the year in the Towson area, so reserve early for those weekends.",
      "Choose a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for the couple, and a Sprinter Executive van for the wedding party — and coordinate both under one reservation so everyone arrives on the same schedule.",
      "A parent, planner or wedding-party member should be the point of contact for day-of logistics, and we're glad to confirm the final timeline with your coordinator or venue directly in the week before the wedding.",
    ],
    highlights: [
      { title: "Towson Venues Familiar", desc: "The Goucher College area and downtown Towson's event spaces are regular bookings." },
      { title: "Flat, Transparent Pricing", desc: "One hourly quote with a minimum, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Couple + Wedding Party, One Booking", desc: "Coordinate a sedan or SUV for the couple and a Sprinter for the wedding party under one reservation." },
      { title: "Photo-Ready Vehicles", desc: "Immaculately detailed cars that photograph beautifully for the wedding album." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Towson, MD Limo Service", to: "/towson-limo-service" },
          { label: "Towson Corporate Car Service", to: "/towson-corporate-car-service" },
          { label: "Towson Prom Limo Service", to: "/towson-prom-limo-service" },
          { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
          { label: "How to Book a Limo for a Wedding in Maryland", to: "/blog/how-to-book-a-limo-for-a-wedding-in-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "How far ahead should we book a Towson wedding?", a: "Three to six months ahead for a spring or fall Saturday, since those are the busiest wedding dates of the year in the Towson area." },
      { q: "Can one reservation cover the couple and the wedding party?", a: "Yes — a sedan or SUV for the couple and a Sprinter van for the wedding party are commonly coordinated under a single reservation so both arrive on the same schedule." },
      { q: "What's the cancellation policy for a wedding booking?", a: "Special-event bookings, including weddings, cancel free of charge up to 12 hours before the scheduled pickup. Inside 12 hours, the deposit may be forfeited and up to 100% of the quoted fare may be charged." },
      { q: "Do you coordinate with our wedding planner or venue?", a: "Yes — share the timeline and contacts and we'll confirm the pickup schedule directly with your coordinator or venue in the week before the wedding." },
      { q: "How much does Towson wedding transportation cost?", a: "It's typically booked hourly with a minimum, quoted as a flat rate before you book. Call (877) 609-1919 for a quote." },
    ],
    ctaTitle: "Book Towson Wedding Transportation",
    ctaSubtitle: "Reserve chauffeured wedding transportation in Towson. Call (877) 609-1919.",
  },

  "silver-spring-corporate-car-service": {
    metaTitle: "Silver Spring, MD Corporate Car Service | 92 Limo",
    metaDescription:
      "Chauffeured corporate car service in Silver Spring, MD — downtown offices, airport transfers & roadshows. Flat rates. Call (877) 609-1919.",
    eyebrow: "SILVER SPRING, MD · CORPORATE CAR SERVICE",
    h1: "Corporate Car Service in Silver Spring, MD",
    subtitle: "Chauffeured corporate transportation for Silver Spring's downtown business district — flat rates, 24/7 dispatch.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Silver Spring, MD corporate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Silver Spring Corporate Travel",
    intro: [
      "Silver Spring's downtown has grown into one of Montgomery County's busiest office and media hubs, close enough to DC to draw a steady mix of commuters, federal contractors and corporate offices. 92 Limo Service provides corporate car service here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "We regularly serve downtown Silver Spring's office towers along Colesville Road and Georgia Avenue, with daily airport transfers to BWI, DCA and IAD and corporate trips connecting to nearby DC and the rest of the I-270 corridor.",
      "Each booking is planned around visiting-executive pickups, roadshow days with multiple office stops, and recurring commutes. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout.",
      "Choose a Business Sedan (Mercedes E-Class) for a single executive, a Premium SUV (Cadillac Escalade) for a small team with luggage, or a Sprinter Executive van for a larger group — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "Downtown Silver Spring Familiar", desc: "Office towers along Colesville Road and Georgia Avenue are regular stops." },
      { title: "Close to DC and the I-270 Corridor", desc: "Easy connections to downtown DC meetings and the rest of the Montgomery County corporate corridor." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early departures and schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Silver Spring, MD Limo Service", to: "/silver-spring-limo-service" },
          { label: "Montgomery County, MD Limo Service", to: "/montgomery-county-md-limo-service" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve downtown Silver Spring's office towers regularly?", a: "Yes — Colesville Road and Georgia Avenue office buildings are a regular part of our Montgomery County corporate service." },
      { q: "Which airports do you serve from Silver Spring?", a: "BWI, DCA and IAD are all served confidently and at a flat, transparent rate from Silver Spring." },
      { q: "Can you coordinate a multi-stop corporate roadshow from Silver Spring?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur for the whole day." },
      { q: "Can our Silver Spring company set up a corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "How much does Silver Spring corporate car service cost?", a: "It's a flat or hourly rate confirmed before you book. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Silver Spring Corporate Car Service",
    ctaSubtitle: "Reserve chauffeured corporate transportation in Silver Spring. Call (877) 609-1919.",
  },

  "rockville-corporate-car-service": {
    metaTitle: "Rockville, MD Corporate Car Service | 92 Limo",
    metaDescription:
      "Chauffeured corporate car service in Rockville, MD — biotech, I-270 corridor offices & airport transfers. Flat rates. Call (877) 609-1919.",
    eyebrow: "ROCKVILLE, MD · CORPORATE CAR SERVICE",
    h1: "Corporate Car Service in Rockville, MD",
    subtitle: "Chauffeured corporate transportation for Rockville's biotech and I-270 corridor offices — flat rates, 24/7 dispatch.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Rockville, MD corporate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Rockville Corporate Travel",
    intro: [
      "Rockville sits at the southern end of Montgomery County's I-270 biotech and technology corridor, with a dense mix of pharmaceutical, biotech and government-adjacent offices around the county government center and Rockville Pike. 92 Limo Service provides corporate car service here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "We regularly serve Rockville's biotech office parks, the county government center, and corporate campuses along Rockville Pike, with daily airport transfers to BWI, DCA and IAD and roadshow travel connecting to the rest of the I-270 corridor and downtown DC.",
      "Each booking is planned around visiting-executive pickups, same-day interview loops, and recurring commutes. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout.",
      "Choose a Business Sedan (Mercedes E-Class) for a single executive or candidate, a Premium SUV (Cadillac Escalade) for a small team with luggage, or a Sprinter Executive van for a larger group — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "I-270 Biotech Corridor Familiar", desc: "Rockville's pharmaceutical and biotech office parks are regular stops." },
      { title: "County Government Center Coverage", desc: "Visitor and official travel to Rockville's county government offices is well-understood territory." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early departures and schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Rockville, MD Limo Service", to: "/rockville-limo-service" },
          { label: "Tech Company Car Service — Maryland", to: "/tech-company-car-service-maryland" },
          { label: "Healthcare Corporate Car Service — Maryland", to: "/healthcare-corporate-car-service-maryland" },
          { label: "Montgomery County, MD Limo Service", to: "/montgomery-county-md-limo-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Rockville's biotech office parks regularly?", a: "Yes — Rockville Pike's pharmaceutical and biotech employers are a regular part of our Montgomery County corporate service." },
      { q: "Can you handle a same-day interview loop with multiple candidates in Rockville?", a: "Yes — this is a common booking. We coordinate pickups in sequence so each candidate arrives on schedule." },
      { q: "Which airports do you serve from Rockville?", a: "BWI, DCA and IAD are all served confidently and at a flat, transparent rate from Rockville." },
      { q: "Can our Rockville company set up a corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "How much does Rockville corporate car service cost?", a: "It's a flat or hourly rate confirmed before you book. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Rockville Corporate Car Service",
    ctaSubtitle: "Reserve chauffeured corporate transportation in Rockville. Call (877) 609-1919.",
  },

  "gaithersburg-prom-limo-service": {
    metaTitle: "Gaithersburg, MD Prom Limo Service | 92 Limo",
    metaDescription:
      "Safe, supervised prom limo service in Gaithersburg, MD — Sprinter vans for groups, licensed chauffeurs, flat packages. Call (877) 609-1919.",
    eyebrow: "GAITHERSBURG, MD · PROM TRANSPORTATION",
    h1: "Prom Limo Service in Gaithersburg, MD",
    subtitle: "Safe, supervised prom transportation in Gaithersburg — professional chauffeurs and pristine vehicles that parents trust.",
    image: IMAGES.celebration,
    alt: "Luxury limousine and SUV for a Gaithersburg, MD prom night — 92 Limo Service",
    highlightsHeading: "Why Gaithersburg Families Choose 92 Limo Service",
    intro: [
      "Gaithersburg's high schools send a steady wave of prom bookings our way every spring, and 92 Limo Service provides safe, supervised prom transportation here with the same reliable timing and professional chauffeurs parents trust across the rest of our Montgomery County service area.",
      "Every chauffeur working a prom booking is licensed, background-checked and trained on our zero-tolerance alcohol and substance policy, with a clear plan to stop the vehicle and contact the booking parent immediately if a violation occurs. A parent or guardian books and remains our point of contact for the night.",
      "Groups commonly book a Sprinter van seating up to 13 or 14, splitting the cost across the group for a reasonable per-student rate, with photo stops and dinner built into the same hourly reservation as the ride to and from the dance.",
    ],
    highlights: [
      { title: "Safety First", desc: "Licensed, vetted chauffeurs and a strict no-tolerance safety policy." },
      { title: "Group Packages", desc: "Sprinter vans and SUVs keep the whole group together in style." },
      { title: "Parent Point of Contact", desc: "A parent or guardian books and is our contact for the night, consistent with how we handle every prom booking." },
      { title: "Photo-Ready Arrival", desc: "A spotless luxury vehicle for that perfect prom entrance." },
      { title: "Transparent Pricing", desc: "Upfront prom packages with no hidden fees." },
    ],
    vehicles: [
      "Sprinter Executive — Mercedes Sprinter",
      "Sprinter Shuttle — Mercedes Sprinter",
      "Premium SUV — Cadillac Escalade",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Gaithersburg, MD Limo Service", to: "/gaithersburg-limo-service" },
          { label: "Gaithersburg Corporate Car Service", to: "/gaithersburg-corporate-car-service" },
          { label: "Gaithersburg Wedding Limo Service", to: "/gaithersburg-wedding-limo-service" },
          { label: "Best Limo Service for Prom in Maryland", to: "/blog/best-limo-service-for-prom-in-maryland" },
          { label: "Prom Limo Service (Pillar Page)", to: "/prom-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "How many students fit in one vehicle?", a: "Up to 5 in a Luxury or Premium SUV and up to 13 or 14 in a Mercedes Sprinter van." },
      { q: "Who should book — the student or a parent?", a: "A parent or guardian should book. A valid card is required to confirm the reservation, and that adult is our point of contact for the night." },
      { q: "What happens if alcohol is found in the vehicle?", a: "Our chauffeurs enforce a zero-tolerance policy and will stop the vehicle and contact the booking parent immediately." },
      { q: "How far ahead should we book for Gaithersburg prom season?", a: "As soon as the group and date are set. Spring weekends are the busiest nights of the year, and Sprinters sell out first." },
      { q: "Can the group stop for photos and dinner before prom?", a: "Yes — prom bookings are typically hourly, so photo locations, dinner and the return home are all covered by the same vehicle and chauffeur." },
    ],
    ctaTitle: "Book Gaithersburg Prom Transportation",
    ctaSubtitle: "Reserve a safe, supervised ride for prom night in Gaithersburg. Call (877) 609-1919.",
  },

  "annapolis-wedding-limo-service": {
    metaTitle: "Annapolis, MD Wedding Limo Service | 92 Limo Service",
    metaDescription:
      "Chauffeured wedding limo service in Annapolis, MD — waterfront venues, Naval Academy weddings, flat rates. Call (877) 609-1919.",
    eyebrow: "ANNAPOLIS, MD · WEDDING TRANSPORTATION",
    h1: "Wedding Limo Service in Annapolis, MD",
    subtitle: "Chauffeured wedding transportation along the Annapolis waterfront — Naval Academy weddings, historic downtown venues, and the harbor.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for an Annapolis, MD waterfront wedding — 92 Limo Service",
    highlightsHeading: "Why Annapolis Couples Choose 92 Limo Service",
    intro: [
      "Annapolis weddings have a flavor all their own — Naval Academy chapel ceremonies, waterfront receptions along Ego Alley and the harbor, and historic downtown venues within the City Dock area. 92 Limo Service provides chauffeured wedding transportation here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "Each booking is planned around the getting-ready location, the ceremony (often at the Naval Academy Chapel or a downtown church), a photo stop along the harbor, the reception, and the end-of-night departure. We know the narrow historic streets around City Dock and the Naval Academy's visitor and security procedures, which matters for timing a wedding-day arrival correctly.",
      "Choose a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for the couple, and a Sprinter Executive van for the wedding party — and coordinate both under one reservation so everyone arrives on the same schedule.",
      "Spring and fall Saturdays are the busiest wedding dates of the year in Annapolis — reserve early for those weekends, especially around Naval Academy commissioning season when the city is especially busy.",
    ],
    highlights: [
      { title: "Naval Academy Weddings Familiar", desc: "We understand the Academy's visitor and security procedures for chapel weddings." },
      { title: "Harbor & Historic Downtown", desc: "Ego Alley, City Dock and the narrow historic streets around downtown Annapolis are well-known territory." },
      { title: "Flat, Transparent Pricing", desc: "One hourly quote with a minimum, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Couple + Wedding Party, One Booking", desc: "Coordinate a sedan or SUV for the couple and a Sprinter for the wedding party under one reservation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Annapolis Limo Service", to: "/annapolis-limo-service" },
          { label: "Annapolis Corporate Car Service", to: "/annapolis-corporate-car-service" },
          { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
          { label: "Anne Arundel County, MD Limo Service", to: "/anne-arundel-county-md-limo-service" },
          { label: "How to Book a Limo for a Wedding in Maryland", to: "/blog/how-to-book-a-limo-for-a-wedding-in-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you handle Naval Academy chapel weddings?", a: "Yes — we understand the Academy's visitor and security procedures, which matters for timing a chapel wedding-day arrival correctly." },
      { q: "Can you navigate the narrow historic streets around City Dock?", a: "Yes, regularly — our chauffeurs know downtown Annapolis's historic street layout and the best staging points near popular venues." },
      { q: "How far ahead should we book an Annapolis wedding?", a: "Three to six months ahead for a spring or fall Saturday, and especially early around Naval Academy commissioning season when the city is unusually busy." },
      { q: "Can one reservation cover the couple and the wedding party?", a: "Yes — a sedan or SUV for the couple and a Sprinter van for the wedding party are commonly coordinated under a single reservation." },
      { q: "What's the cancellation policy for a wedding booking?", a: "Special-event bookings, including weddings, cancel free of charge up to 12 hours before the scheduled pickup. Inside 12 hours, the deposit may be forfeited and up to 100% of the quoted fare may be charged." },
    ],
    ctaTitle: "Book Annapolis Wedding Transportation",
    ctaSubtitle: "Reserve chauffeured wedding transportation along the Annapolis waterfront. Call (877) 609-1919.",
  },

  "ellicott-city-wedding-limo-service": {
    metaTitle: "Ellicott City, MD Wedding Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured wedding limo service in historic Ellicott City, MD — Main Street venues, B&O Station photo stops, flat rates. Call (877) 609-1919.",
    eyebrow: "ELLICOTT CITY, MD · WEDDING TRANSPORTATION",
    h1: "Wedding Limo Service in Ellicott City, MD",
    subtitle: "Chauffeured wedding transportation through historic Ellicott City — Main Street venues, B&O Railroad Station photo stops, and the Patapsco River valley.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a historic Ellicott City, MD wedding — 92 Limo Service",
    highlightsHeading: "Why Ellicott City Couples Choose 92 Limo Service",
    intro: [
      "Historic Ellicott City's steep, narrow Main Street and 19th-century stone buildings make for a genuinely beautiful wedding backdrop — and a layout that calls for a chauffeur who already knows where to stage a vehicle rather than discovering the street's limitations on the wedding day itself. 92 Limo Service provides chauffeured wedding transportation here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "Each booking is planned around the getting-ready location, the ceremony, a photo stop at the B&O Railroad Station or along Main Street, the reception, and the end-of-night departure. We confirm the itinerary the day before, stage the vehicle at a workable spot given Main Street's limited vehicle access, and keep dispatch on the line throughout.",
      "Choose a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for the couple, and a Sprinter Executive van for the wedding party — and coordinate both under one reservation so everyone arrives on the same schedule.",
    ],
    highlights: [
      { title: "Main Street Layout Familiar", desc: "Chauffeurs know where to stage given Main Street's steep grade and limited vehicle access." },
      { title: "B&O Railroad Station Photo Stops", desc: "A popular, well-known photo location worked into the day's timeline." },
      { title: "Flat, Transparent Pricing", desc: "One hourly quote with a minimum, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Couple + Wedding Party, One Booking", desc: "Coordinate a sedan or SUV for the couple and a Sprinter for the wedding party under one reservation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Ellicott City, MD Limo Service", to: "/ellicott-city-limo-service" },
          { label: "Wedding Limo Service — Howard County", to: "/wedding-limo-howard-county-md" },
          { label: "Howard County, MD Limo Service", to: "/howard-county-md-limo-service" },
          { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
          { label: "How to Book a Limo for a Wedding in Maryland", to: "/blog/how-to-book-a-limo-for-a-wedding-in-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Can a wedding vehicle actually navigate Main Street in Ellicott City?", a: "Our chauffeurs know the street's steep grade and limited vehicle access and plan the staging point accordingly, so the logistics are handled before the wedding day rather than during it." },
      { q: "Can we add a photo stop at the B&O Railroad Station?", a: "Yes — this is a popular, frequently requested stop, and we'll build it into the day's timeline." },
      { q: "How far ahead should we book an Ellicott City wedding?", a: "Three to six months ahead for a spring or fall Saturday, since those are the busiest wedding dates of the year in this area." },
      { q: "Can one reservation cover the couple and the wedding party?", a: "Yes — a sedan or SUV for the couple and a Sprinter van for the wedding party are commonly coordinated under a single reservation." },
      { q: "What's the cancellation policy for a wedding booking?", a: "Special-event bookings, including weddings, cancel free of charge up to 12 hours before the scheduled pickup. Inside 12 hours, the deposit may be forfeited and up to 100% of the quoted fare may be charged." },
    ],
    ctaTitle: "Book Ellicott City Wedding Transportation",
    ctaSubtitle: "Reserve chauffeured wedding transportation through historic Ellicott City. Call (877) 609-1919.",
  },

  "baltimore-wedding-limo-service": {
    metaTitle: "Baltimore, MD Wedding Limo Service | 92 Limo Service",
    metaDescription:
      "Chauffeured wedding limo service in Baltimore, MD — Inner Harbor, Mount Vernon & Harbor East venues, flat rates. Call (877) 609-1919.",
    eyebrow: "BALTIMORE, MD · WEDDING TRANSPORTATION",
    h1: "Wedding Limo Service in Baltimore, MD",
    subtitle: "Chauffeured wedding transportation across Baltimore City — Inner Harbor, Mount Vernon, Harbor East and the city's historic churches and venues.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Baltimore, MD city wedding — 92 Limo Service",
    highlightsHeading: "Why Baltimore Couples Choose 92 Limo Service",
    intro: [
      "Baltimore's wedding scene spans the Inner Harbor's hotel ballrooms, Mount Vernon's historic churches and mansions, Harbor East's modern venues, and the city's many neighborhood parishes with deep family history. 92 Limo Service provides chauffeured wedding transportation across all of it with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "Each booking is planned around the getting-ready location, the ceremony, a photo stop (the Inner Harbor and Mount Vernon's Washington Monument are popular choices), the reception, and the end-of-night departure. We know downtown Baltimore's event-night traffic patterns and parking constraints well enough to keep a tight wedding-day schedule on time.",
      "Choose a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for the couple, and a Sprinter Executive van for the wedding party — and coordinate both under one reservation so everyone arrives on the same schedule.",
      "Spring and fall Saturdays are the busiest wedding dates of the year in Baltimore — reserve early for those weekends, especially if your date overlaps with an Orioles or Ravens home game downtown.",
    ],
    highlights: [
      { title: "City-Wide Venue Knowledge", desc: "Inner Harbor hotels, Mount Vernon's historic churches, Harbor East and neighborhood parishes are all familiar territory." },
      { title: "Downtown Traffic Awareness", desc: "We plan around downtown Baltimore's event-night traffic and parking constraints to keep the schedule on time." },
      { title: "Flat, Transparent Pricing", desc: "One hourly quote with a minimum, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Couple + Wedding Party, One Booking", desc: "Coordinate a sedan or SUV for the couple and a Sprinter for the wedding party under one reservation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
          { label: "Top Things to Do in Baltimore and How to Get There", to: "/blog/top-things-to-do-in-baltimore-and-how-to-get-there" },
          { label: "Baltimore County, MD Limo Service", to: "/baltimore-county-md-limo-service" },
          { label: "How to Book a Limo for a Wedding in Maryland", to: "/blog/how-to-book-a-limo-for-a-wedding-in-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve weddings anywhere in Baltimore City?", a: "Yes — the Inner Harbor, Mount Vernon, Harbor East and the city's many neighborhood churches and venues are all part of our regular Baltimore wedding service." },
      { q: "Do you plan around downtown event-night traffic?", a: "Yes — we check for Orioles, Ravens or other downtown events on your wedding date and plan the route and timing accordingly." },
      { q: "Can we add a photo stop at the Inner Harbor or Mount Vernon?", a: "Yes — both are popular, frequently requested photo stops, and we'll build them into the day's timeline." },
      { q: "Can one reservation cover the couple and the wedding party?", a: "Yes — a sedan or SUV for the couple and a Sprinter van for the wedding party are commonly coordinated under a single reservation." },
      { q: "How far ahead should we book a Baltimore wedding?", a: "Three to six months ahead for a spring or fall Saturday — the busiest wedding dates of the year in Baltimore." },
    ],
    ctaTitle: "Book Baltimore Wedding Transportation",
    ctaSubtitle: "Reserve chauffeured wedding transportation anywhere in Baltimore City. Call (877) 609-1919.",
  },

  // ============================================================
  // CORPORATE-BY-INDUSTRY PAGES (5)
  // ============================================================
  "real-estate-title-company-car-service-maryland": {
    metaTitle: "Real Estate & Title Company Car Service | Maryland",
    metaDescription:
      "Chauffeured transportation for real estate agents, title companies & closing attorneys across Maryland — client showings, closings. (877) 609-1919.",
    eyebrow: "REAL ESTATE & TITLE COMPANY CAR SERVICE — MARYLAND",
    h1: "Real Estate & Title Company Car Service in Maryland",
    subtitle: "Chauffeured transportation for real estate agents, title companies and closing attorneys moving clients between showings, inspections and the closing table.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan serving a Maryland real estate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Supports Maryland Real Estate & Title Professionals",
    intro: [
      "92 Limo Service provides chauffeured transportation for real estate agents, brokerages and title companies across Maryland, with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer.",
      "We regularly serve relocating clients flying into BWI, DCA or IAD for a multi-stop day of home showings, out-of-town buyers and sellers who need reliable transportation between a hotel and several properties, and closing attorneys and title company staff moving between law offices and settlement appointments on a tight schedule.",
      "Each booking is planned around a showing-day itinerary with multiple stops, flight-tracked pickups for relocating clients, and recurring transportation for high-volume agents and brokerages. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout a multi-stop showing day.",
      "Choose a Business Sedan (Mercedes E-Class) for an agent and a single client, a Premium SUV (Cadillac Escalade) for a family touring several properties with children, or a Sprinter Executive van for a larger relocating family or group of investors — and mix vehicles under one reservation.",
      "Discretion is standard practice for every trip, and consolidated monthly invoicing with itemized receipts keeps brokerages and title companies comfortable billing recurring client transportation.",
    ],
    highlights: [
      { title: "Multi-Stop Showing Days", desc: "One vehicle and chauffeur stay with the agent and client for a full day of property showings." },
      { title: "Relocating Client Pickups", desc: "Flight-tracked airport pickups for out-of-town buyers and sellers, timed to a showing-day itinerary." },
      { title: "Closing-Day Reliability", desc: "On-time transportation between law offices and settlement appointments when a closing can't be delayed." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Last-minute showing changes and early flights handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Real Estate Closing & Showing Transportation — Maryland", to: "/blog/real-estate-closing-showing-transportation-maryland" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "Law Firm Car Service — Maryland & DC", to: "/law-firm-car-service-maryland-dc" },
          { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you coordinate a full day of home showings in multiple cities?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur with the agent and client for the whole day, moving between showings in sequence." },
      { q: "Do you handle airport pickups for relocating clients?", a: "Yes. Flight-tracked pickups at BWI, DCA and IAD are planned backward from a showing-day itinerary, with meet-and-greet available for clients who prefer to be met inside baggage claim." },
      { q: "Can a brokerage or title company set up a recurring account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "Can you get an attorney or client to a closing on time if traffic is bad?", a: "We build realistic buffer into every closing-day pickup based on time of day and traffic, and dispatch stays reachable to adjust if something changes." },
      { q: "How much does real estate car service cost?", a: "It's a flat or hourly rate confirmed before you book, based on vehicle class and the day's stops. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Real Estate & Title Company Car Service",
    ctaSubtitle: "Reserve reliable transportation for showings, closings and relocating clients. Call (877) 609-1919.",
  },

  "higher-education-university-car-service-maryland": {
    metaTitle: "Higher Education & University Car Service | Maryland",
    metaDescription:
      "Chauffeured transportation for university administrators, visiting faculty, trustees & commencement speakers across Maryland. Call (877) 609-1919.",
    eyebrow: "HIGHER EDUCATION & UNIVERSITY CAR SERVICE — MARYLAND",
    h1: "Higher Education & University Car Service in Maryland",
    subtitle: "Chauffeured transportation for university administrators, visiting faculty, trustees and commencement speakers across Maryland's colleges and universities.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Maryland university client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Supports Maryland Higher Education",
    intro: [
      "92 Limo Service provides chauffeured transportation for Maryland's colleges and universities — administrators, visiting faculty, board of trustees members, and commencement or distinguished-speaker travel — with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer. This is distinct from student-focused travel like move-in day or UMD college-town bookings; it's built around the institution's official and executive travel.",
      "We regularly serve the University of Maryland College Park, Johns Hopkins University, Towson University, Goucher College and the other institutions across our service area, coordinating visiting faculty and trustee pickups from BWI, DCA and IAD, and transportation for board meetings, fundraising events and commencement weekends.",
      "Each booking is planned around a visiting speaker's or trustee's full campus visit, flight-tracked airport pickups, and recurring administrative travel between campuses or to downtown DC and Annapolis for advocacy and funding meetings. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout commencement weekend's especially tight scheduling.",
      "Choose a First Class Sedan (BMW 7 Series) for a trustee or commencement speaker, a Premium SUV (Cadillac Escalade) for an administrator with a multi-stop day, or a Sprinter Executive van for a visiting delegation or board group — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "Campuses We Know", desc: "University of Maryland College Park, Johns Hopkins, Towson University and Goucher College are regular stops." },
      { title: "Commencement & Board Weekend Ready", desc: "Extra planning and vehicle availability for the year's tightest-scheduled campus weekends." },
      { title: "Discreet, Professional Presentation", desc: "Appropriate for trustees, distinguished speakers and official institutional travel." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Delayed speaker flights and schedule changes handled without disrupting the rest of a visit's schedule." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "University of Maryland Transportation", to: "/university-of-maryland-transportation" },
          { label: "College Graduation Season Transportation — Maryland & UMD", to: "/blog/college-graduation-season-transportation-maryland-umd" },
          { label: "Limo Service for UMD & College Park Students and Parents", to: "/blog/limo-service-umd-college-park-students-parents" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Is this different from your college move-in day or student transportation?", a: "Yes — this page covers institutional and executive travel (administrators, trustees, visiting faculty and speakers). See our move-in day and UMD student guides for family and student-focused transportation." },
      { q: "Can you coordinate a visiting commencement speaker's full campus visit?", a: "Yes — airport pickup, campus events and departure can all be coordinated as one reservation, with extra planning for commencement weekend's especially tight scheduling." },
      { q: "Do you serve board of trustees meetings?", a: "Yes — trustee and board-related travel, including coordinated pickups for multiple members arriving from different flights, is a regular booking." },
      { q: "Can a university set up a recurring institutional account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "How much does university car service cost?", a: "It's a flat or hourly rate confirmed before you book, based on vehicle class and trip details. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Higher Education & University Car Service",
    ctaSubtitle: "Reserve professional transportation for administrators, trustees and visiting speakers. Call (877) 609-1919.",
  },

  "nonprofit-association-car-service-dc": {
    metaTitle: "Nonprofit & Association Car Service | Washington DC",
    metaDescription:
      "Chauffeured transportation for K Street nonprofits, trade associations & advocacy organizations — galas, Hill visits, airport transfers. (877) 609-1919.",
    eyebrow: "NONPROFIT & ASSOCIATION CAR SERVICE — WASHINGTON DC",
    h1: "Nonprofit & Association Car Service in Washington DC",
    subtitle: "Chauffeured transportation for nonprofit organizations, trade associations and advocacy groups along K Street and across DC.",
    image: IMAGES.dcSkyline,
    alt: "Luxury chauffeured sedan serving a Washington DC nonprofit or association client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Nonprofit & Association Travel",
    intro: [
      "Washington DC's K Street corridor and the blocks around it host thousands of nonprofit organizations, trade associations and advocacy groups — a distinct community from the law firms and government contractors we also serve, with its own travel pattern built around annual galas, Capitol Hill visits, board meetings and visiting-member logistics. 92 Limo Service provides chauffeured transportation here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "We regularly serve K Street's association headquarters, Capitol Hill for advocacy-day visits and testimony, and the hotel and convention venues used for annual conferences and galas. Each booking is planned around a board member's or visiting delegate's full-day schedule, gala and fundraiser logistics, and recurring executive travel.",
      "Choose a Business Sedan (Mercedes E-Class) for a staff member or single board visitor, a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for an executive director or gala evening, or a Sprinter Executive van for a visiting delegation of chapter leaders or members — and mix vehicles under one reservation.",
      "Confidentiality and a polished, professional presentation are standard for every trip, and consolidated monthly invoicing with itemized receipts keeps nonprofit finance teams — often working from grant-funded or donor-restricted budgets — comfortable tracking the expense.",
    ],
    highlights: [
      { title: "K Street Corridor Familiar", desc: "Association headquarters and advocacy-focused office buildings along K Street are regular stops." },
      { title: "Capitol Hill Advocacy Days", desc: "Coordinated pickups for visiting members or chapter leaders attending Hill meetings and testimony." },
      { title: "Gala & Conference Season Ready", desc: "Extra planning for annual conference and black-tie fundraiser weeks, when demand across DC peaks." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation — useful for grant-funded or donor-restricted budgets." },
      { title: "24/7 Dispatch", desc: "Early Hill visits and schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Nonprofit Gala & Black-Tie Fundraiser Transportation — DC", to: "/blog/nonprofit-gala-black-tie-fundraiser-transportation-dc" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "Law Firm Car Service — Maryland & DC", to: "/law-firm-car-service-maryland-dc" },
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve K Street's nonprofit and association headquarters?", a: "Yes, regularly — K Street and the surrounding advocacy-focused office buildings are a familiar part of our DC corporate service." },
      { q: "Can you coordinate transportation for a Capitol Hill advocacy day?", a: "Yes — pickups for visiting members or chapter leaders attending Hill meetings can be coordinated across multiple arrivals and timed to testimony or meeting schedules." },
      { q: "Can you handle gala and annual conference season?", a: "Yes — we plan ahead for the busiest conference and black-tie fundraiser weeks, when demand across DC peaks, so reserve early for your organization's key dates." },
      { q: "Is pricing workable for a grant-funded or donor-restricted budget?", a: "Pricing is a flat, transparent rate confirmed before you book, with every charge disclosed up front — call (877) 609-1919 to discuss your event and budget." },
      { q: "Can our organization set up a recurring account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Book Nonprofit & Association Car Service",
    ctaSubtitle: "Reserve professional transportation for galas, Hill visits and board travel. Call (877) 609-1919.",
  },

  "hospitality-hotel-concierge-car-service-maryland": {
    metaTitle: "Hotel Concierge Car Service Partner | Maryland & DC",
    metaDescription:
      "A reliable chauffeured car service partner for Maryland & DC hotel concierge desks — guest airport transfers, dinner reservations, tours. (877) 609-1919.",
    eyebrow: "HOSPITALITY & HOTEL CONCIERGE CAR SERVICE — MARYLAND & DC",
    h1: "Hotel Concierge Car Service Partner — Maryland & DC",
    subtitle: "A reliable chauffeured transportation partner for hotel concierge desks across Maryland and DC — guest airport transfers, dinner reservations, tours and events.",
    image: IMAGES.dcSkyline,
    alt: "Luxury chauffeured sedan serving a hotel guest in Maryland or DC — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Partners With Hotel Concierge Teams",
    intro: [
      "A hotel concierge desk's reputation rides on every recommendation it makes, which is exactly why 92 Limo Service works as a direct partner to concierge teams across Maryland and DC — a car service a concierge can confidently recommend for a guest's airport transfer, dinner reservation, business meeting or full-day tour, knowing the guest's experience will reflect well on the hotel.",
      "We regularly coordinate with concierge desks for flight-tracked airport transfers (with the guest's flight number passed along by the hotel so nothing gets lost between booking and pickup), restaurant and theater reservations timed to the hotel's own dinner or show bookings, and full-day touring itineraries for guests visiting Baltimore, Annapolis, DC or the region's wine country.",
      "Each booking is planned around the guest's actual stay — a VIP arrival the concierge wants handled personally, a group booking tied to a hotel-hosted event, or a recurring need for guests attending a nearby conference. A direct relationship with the hotel's concierge team, rather than a one-off guest booking, is what keeps the experience consistent across repeat guests.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard guest transfer, a First Class Sedan (BMW 7 Series) or Premium SUV (Cadillac Escalade) for a VIP guest, or a Sprinter Executive van for a hotel-hosted group — and mix vehicles under one coordinated booking.",
    ],
    highlights: [
      { title: "Direct Concierge Relationship", desc: "A standing partnership with the hotel's concierge team, not a one-off guest booking each time." },
      { title: "VIP Guest Handling", desc: "Extra care and communication for guests the concierge wants personally looked after." },
      { title: "Flight-Tracked Guest Transfers", desc: "Flight numbers passed from the concierge desk directly, so nothing is lost between booking and pickup." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation, easy for a hotel to pass through to a guest folio." },
      { title: "24/7 Dispatch", desc: "Guest schedule changes and early flights handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "Maryland Wine Tour Transportation", to: "/maryland-wine-tour-transportation" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "How does a hotel concierge actually book through 92 Limo Service?", a: "Concierge teams can reach dispatch directly by phone to set up a standing arrangement, so individual guest requests move quickly without re-establishing the relationship each time." },
      { q: "Can a hotel pass the cost through to a guest's folio?", a: "Pricing is a flat, transparent rate confirmed before the trip, which makes it straightforward for a hotel's front desk to handle as part of a guest's bill — ask your reservation specialist about the specifics for your property." },
      { q: "Can you handle a VIP guest the concierge wants personally looked after?", a: "Yes — tell us the guest's needs and preferences and we'll coordinate accordingly, with meet-and-greet, flight tracking and any special requests built into the booking." },
      { q: "Do you coordinate full-day touring itineraries for hotel guests?", a: "Yes — a day trip to Annapolis, Baltimore, DC or regional wine country is a common concierge-arranged booking, planned as one hourly reservation." },
      { q: "Can a hotel set up a standing relationship rather than booking guest by guest?", a: "Yes — a direct concierge partnership with consolidated invoicing is available. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Partner With 92 Limo Service for Guest Transportation",
    ctaSubtitle: "Set up a direct concierge relationship for reliable guest car service. Call (877) 609-1919.",
  },

  "embassy-diplomatic-car-service-washington-dc": {
    metaTitle: "Embassy & Diplomatic Car Service | Washington DC",
    metaDescription:
      "Discreet, credentialed chauffeured transportation for embassies, diplomats & international organizations in Washington DC. Call (877) 609-1919.",
    eyebrow: "EMBASSY & DIPLOMATIC CAR SERVICE — WASHINGTON DC",
    h1: "Embassy & Diplomatic Car Service in Washington DC",
    subtitle: "Discreet, professional chauffeured transportation for embassies, diplomats, visiting delegations and international organizations in Washington DC.",
    image: IMAGES.sClassFirst,
    alt: "Luxury chauffeured sedan serving a Washington DC embassy or diplomatic client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Embassy & Diplomatic Travel",
    intro: [
      "Washington DC's Embassy Row along Massachusetts Avenue and the broader diplomatic community around the World Bank, IMF and international organizations create a specific transportation need — discretion, protocol awareness, and reliability for official travel that doesn't tolerate the uncertainty of an on-demand ride. 92 Limo Service provides chauffeured transportation for this community with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "We regularly serve embassy staff and diplomats along Massachusetts Avenue's Embassy Row, international organization headquarters near the World Bank and IMF, and visiting delegations attending conferences, state visits and official functions. Chauffeurs working this clientele are trained on basic protocol expectations and discreet pickup procedures rather than a generic curbside approach.",
      "Each booking is planned around an official function's schedule, flight-tracked airport pickups for arriving delegations, and recurring transportation for embassy staff and their principals. We confirm the itinerary the day before, stage the vehicle at an approved or discreet location, and keep dispatch on the line throughout an evening of diplomatic functions.",
      "Choose a First Class Sedan (BMW 7 Series) for official or representational travel, a Premium SUV (Cadillac Escalade) for a principal with a security detail or larger party, or a Sprinter Executive van for a visiting delegation — and mix vehicles under one reservation.",
    ],
    highlights: [
      { title: "Embassy Row Familiar", desc: "Massachusetts Avenue's embassies and the World Bank/IMF corridor are regular stops." },
      { title: "Protocol-Aware Chauffeurs", desc: "Trained on discreet pickup procedures and basic protocol expectations for official travel." },
      { title: "Confidential by Default", desc: "Conversations and destinations stay private, shared only with the people who booked." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "State visits, late-running receptions and schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Chevy Chase & Bethesda: Diplomatic & Executive Car Service", to: "/blog/chevy-chase-bethesda-diplomatic-executive-car-service" },
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Nonprofit & Association Car Service — DC", to: "/nonprofit-association-car-service-dc" },
          { label: "Corporate & Executive Car Service (Pillar Page)", to: "/corporate-transportation" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve embassies along Massachusetts Avenue's Embassy Row?", a: "Yes, regularly — Embassy Row and the broader diplomatic and international-organization community are a familiar part of our Washington DC service." },
      { q: "How is confidentiality handled for diplomatic travel?", a: "Confidentiality is standard practice for every trip. Conversations and destinations stay private and are shared only with the people who booked." },
      { q: "Can you coordinate transportation for a visiting delegation's full official schedule?", a: "Yes — delegation travel is commonly coordinated as a single reservation spanning airport arrival, official functions and hotel transfers." },
      { q: "Do your chauffeurs understand protocol expectations for official travel?", a: "Yes. Chauffeurs working this clientele are trained on discreet pickup procedures and basic protocol expectations rather than a generic curbside approach." },
      { q: "Can an embassy or international organization set up a standing account?", a: "Yes — with consolidated monthly invoicing, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Book Embassy & Diplomatic Car Service",
    ctaSubtitle: "Reserve discreet, protocol-aware transportation for official and diplomatic travel. Call (877) 609-1919.",
  },
};

export const MARYLAND_BATCH11_SLUGS = Object.keys(MARYLAND_BATCH11_PAGES);
