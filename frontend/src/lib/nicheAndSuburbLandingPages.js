// 2026-10-24 SEO round-6 push — 30 new hand-written landing pages covering
// genuine coverage gaps identified by reviewing every existing landing-page
// slug across landingPages.js, landingPagesGenerated.js, marylandPages.js,
// marylandPagesBatch3-11.js, semrushKeywordGapPages.js and bwiAirportPages.js
// (422 existing entries at the time this file was drafted, including the
// two batches two concurrent sessions added earlier the same day) before
// picking a single target keyword for any of these 30.
//
// Four categories, chosen because they were the only genuinely open gaps
// left after that review — nearly every MD/DC/VA city, BWI route and
// standard occasion already has a dedicated page:
//
// 1. Outer-ring cities/suburbs (14) — real MD, VA, PA and DE towns with no
//    existing page at all: Chestertown, Solomons, Accokeek, District
//    Heights and Cumberland in Maryland; Centreville, Springfield,
//    Annandale, Dumfries and Stafford in Northern Virginia; Carlisle and
//    Mechanicsburg in Pennsylvania; Lewes and Georgetown in Delaware.
// 2. New airport route pairs (6) — IAD/DCA destination combinations not yet
//    covered (the existing iad-to-*/dca-to-* pages cover a different set of
//    towns; verified no overlap before drafting).
// 3. New occasion/vertical pages (9) — retirement parties, college tours,
//    homecoming, baby/bridal showers, Loudoun wine country (the existing
//    wine-tour pages target Maryland wine regions only), senior private
//    car service (explicitly NOT medical transport — see the NEMT
//    disclaimer below, consistent with blogPostsBatch7.js's
//    "what-limo-service-can-cannot-do-non-emergency-medical-transport"
//    post), wedding guest shuttles (a distinct planner/coordinator-facing
//    page from the bride-facing wedding-limo-maryland and
//    wedding-transportation pages), and bar/bat mitzvah service (a
//    transactional landing page — a blog guide on this topic already
//    existed, but no page to actually book from).
// 4. One new long-distance route (1) — Maryland to Virginia Beach, matching
//    the existing long-distance pattern (NYC, Philadelphia, JFK, Newark).
//
// Explicitly NOT duplicated: "baltimore-cruise-port-car-service" was
// dropped from the original draft list after finding the existing
// "cruise-transfers" page already covers the Port of Baltimore cruise
// terminal in detail; "anniversary-limo-service-maryland" was dropped after
// finding SERVICE_PAGES already has a general "anniversary-limo-service"
// pillar page covering the same intent.
//
// Same shape as MARYLAND_LANDING_PAGES / MARYLAND_BATCH3-11_PAGES (see
// marylandPages.js header). Picked up automatically by the shared
// relatedLandingPages() helper in src/lib/pillarLinks.js for "Also Serving"
// cross-links — no separate wiring needed there. This file only needs to be
// imported and spread into LANDING_PAGES in src/lib/landingPages.js, and
// added to the hardcoded source-file lists in scripts/prerender.js, scripts/
// generateSitemap.js and scripts/generateRouteSlugs.js.
import { IMAGES } from "@/lib/data";

export const NICHE_AND_SUBURB_LANDING_PAGES = {
  // ============================================================
  // OUTER-RING MARYLAND TOWNS (5)
  // ============================================================
  "chestertown-md-limo-service": {
    metaTitle: "Chestertown, MD Limo & Car Service | 92 Limo",
    metaDescription:
      "Chauffeured car service in Chestertown, MD — BWI, DCA & IAD transfers, Washington College events, Eastern Shore weddings. Flat rates 24/7. (877) 609-1919.",
    eyebrow: "CHESTERTOWN, MD",
    h1: "Limo & Car Service in Chestertown, MD",
    subtitle: "Chauffeured airport transfers, campus trips, and Eastern Shore wedding transportation serving Chestertown and Kent County, Maryland.",
    image: IMAGES.dcSkyline,
    alt: "Luxury chauffeured sedan serving a Chestertown, MD client — 92 Limo Service",
    highlightsHeading: "Why Chestertown Chooses 92 Limo Service",
    intro: [
      "Chestertown sits on the upper Eastern Shore along the Chester River, a historic river town built around Washington College and a downtown of 18th-century homes — a genuinely different driving environment from the Baltimore-Washington corridor most car services never leave. 92 Limo Service runs this route regularly, crossing the Chesapeake Bay Bridge via US-301/US-50 to reach Chestertown with the same flat, transparent pricing and licensed chauffeurs we bring to every trip west of the bay.",
      "Washington College families are among our most frequent Chestertown clients — move-in weekends, parents' weekend, commencement, and the steady flow of flights in and out of BWI for students and visiting faculty. We track every flight in real time, so a delayed connection never turns into a missed pickup on either end of the drive.",
      "Eastern Shore weddings are the other steady draw. Chestertown's waterfront venues, historic inns, and riverfront estates book chauffeured transportation for the couple and bridal party well in advance of peak spring and fall weekends, and we plan the drive time across the bridge into the quoted schedule rather than leaving it as a surprise.",
      "Every booking is planned around your exact pickup address, whether that's a Chestertown home, a Washington College dormitory, or a riverfront venue, with the itinerary confirmed the day before and dispatch reachable around the clock.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van for a wedding party or group of college families traveling together.",
    ],
    highlights: [
      { title: "Bay Bridge Route Experts", desc: "We plan the US-301/US-50 crossing into every quoted time, so Chestertown trips never run on guesswork." },
      { title: "Washington College Familiar", desc: "Move-in weekends, parents' weekend, and commencement traffic handled routinely." },
      { title: "Eastern Shore Wedding Experience", desc: "Riverfront venues, historic inns, and waterfront estates around Chestertown and Kent County." },
      { title: "All Three Airports", desc: "Flat-rate transfers to BWI, DCA and IAD, with real-time flight tracking on every pickup." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Kent County & the Upper Shore",
        places: [
          { label: "Easton", to: "/limo-service-easton-md" },
          { label: "Cambridge", to: "/limo-service-cambridge-md" },
          { label: "St. Michaels", to: "/st-michaels-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Maryland Wedding Limo", to: "/wedding-limo-maryland" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
          { label: "Annapolis Limo Service", to: "/annapolis-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Chestertown and Washington College regularly?", a: "Yes — Chestertown and the Washington College campus are a regular route for us, including move-in weekends, parents' weekend and commencement, with trips to and from BWI, DCA and IAD." },
      { q: "How long is the drive from BWI to Chestertown?", a: "Roughly 75-90 minutes depending on traffic across the Chesapeake Bay Bridge. We build current bridge conditions into your quoted pickup time rather than a flat estimate." },
      { q: "Can you handle a wedding at a Chestertown waterfront venue?", a: "Yes — Eastern Shore weddings are a regular booking for us. Tell us the ceremony and reception addresses and we'll plan the whole-day timeline, including the bridge crossing." },
      { q: "What if our flight into BWI is delayed on a Chestertown pickup?", a: "We track every flight in real time and adjust your pickup automatically at no extra charge, with complimentary wait time built in." },
      { q: "Can a group of Washington College families share one vehicle?", a: "Yes — our Sprinter Executive van seats up to 14 with room for luggage, a popular choice for move-in and commencement weekends." },
      { q: "How much does Chestertown car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Chestertown Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Chestertown, MD. Call (877) 609-1919.",
  },

  "solomons-island-md-limo-service": {
    metaTitle: "Solomons Island, MD Limo Service | 92 Limo",
    metaDescription:
      "Luxury car service to Solomons Island & Calvert County, MD — BWI & DCA airport transfers, waterfront weddings, flat rates, 24/7. (877) 609-1919.",
    eyebrow: "SOLOMONS & CALVERT COUNTY, MD",
    h1: "Limo & Car Service in Solomons, MD",
    subtitle: "Chauffeured airport transfers and waterfront event transportation serving Solomons Island and Calvert County, Maryland.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan serving a Solomons Island, MD client — 92 Limo Service",
    highlightsHeading: "Why Calvert County Chooses 92 Limo Service",
    intro: [
      "Solomons Island sits at the mouth of the Patuxent River on the Chesapeake Bay, a working marina town turned waterfront destination with the Calvert Marine Museum, a walkable boardwalk, and a growing list of waterfront event venues. 92 Limo Service runs the drive south along MD-2/MD-4 from the BWI-Washington corridor regularly, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of Southern Maryland.",
      "Airport transfers are the most common booking out of Solomons and the rest of Calvert County — BWI and DCA are both realistic options depending on your flight, and we track every arrival in real time so a delay never costs you a ride on either end of the drive.",
      "Waterfront weddings and rehearsal dinners along the Solomons harbor and the Patuxent River are a steady seasonal draw, and we plan the full day around your ceremony and reception addresses, including the drive time from Prince Frederick, Dunkirk, and the rest of Calvert County.",
      "Each booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock for a schedule change or early flight.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van for a wedding party or group outing on the water.",
    ],
    highlights: [
      { title: "Southern Maryland Coverage", desc: "Solomons, Prince Frederick, Dunkirk and the rest of Calvert County, covered regularly." },
      { title: "Waterfront Wedding Experience", desc: "Solomons harbor and Patuxent River venues, planned around your full-day timeline." },
      { title: "BWI & DCA Served", desc: "Flat-rate airport transfers with real-time flight tracking on every pickup." },
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
        region: "Calvert County",
        places: [
          { label: "Prince Frederick", to: "/prince-frederick-md-limo-service" },
          { label: "Dunkirk", to: "/dunkirk-md-limo-service" },
          { label: "Chesapeake Beach", to: "/chesapeake-beach-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Maryland Wedding Limo", to: "/wedding-limo-maryland" },
          { label: "Waldorf, MD Limo Service", to: "/waldorf-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Solomons Island and the rest of Calvert County?", a: "Yes — Solomons, Prince Frederick, Dunkirk and Chesapeake Beach are all part of our regular Southern Maryland coverage." },
      { q: "Which airport is better for a Solomons Island pickup, BWI or DCA?", a: "Both are realistic, depending on your flight. We'll help you pick based on your specific airline and schedule when you call." },
      { q: "Can you handle a waterfront wedding in Solomons?", a: "Yes — tell us your ceremony and reception addresses and we'll plan the full-day timeline, including transportation for the bridal party." },
      { q: "How far in advance should I book a Solomons Island airport transfer?", a: "At least 24 hours ahead, earlier during summer boating season and holiday weekends when the area gets busy. Call (877) 609-1919 anytime." },
      { q: "Can a group ride together for a boat trip or family reunion?", a: "Absolutely. Our Sprinter Executive van seats up to 14 passengers with room for gear and luggage." },
      { q: "What does the quoted price include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation — no surge pricing." },
    ],
    ctaTitle: "Book Solomons Island Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Solomons and Calvert County. Call (877) 609-1919.",
  },

  "accokeek-md-limo-service": {
    metaTitle: "Accokeek, MD Limo & Car Service | 92 Limo",
    metaDescription:
      "Chauffeured limo service in Accokeek, MD — fast BWI, DCA & IAD transfers, National Harbor rides, flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "ACCOKEEK, MD",
    h1: "Limo & Car Service in Accokeek, MD",
    subtitle: "Chauffeured airport transfers and event transportation for Accokeek and southern Prince George's County, Maryland.",
    image: IMAGES.suv,
    alt: "Luxury chauffeured SUV serving an Accokeek, MD client — 92 Limo Service",
    highlightsHeading: "Why Accokeek Chooses 92 Limo Service",
    intro: [
      "Accokeek sits along the Potomac River in southern Prince George's County, close to Piscataway Park and the National Colonial Farm, with Washington DC and National Harbor a short drive north. 92 Limo Service covers Accokeek as part of our regular Prince George's County territory, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of the DMV.",
      "Accokeek's location makes it genuinely convenient for all three major airports — DCA is the closest, with BWI and IAD both realistic alternatives depending on your flight — and we track every arrival in real time so a delay never costs you a ride.",
      "National Harbor's hotels, restaurants and the MGM casino are a short, direct drive from Accokeek, making it a popular pickup point for evenings out, conventions, and waterfront events without the Beltway traffic a downtown DC starting point adds.",
      "Each booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock for an early flight or a last-minute schedule change.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van for a group heading to National Harbor or a family event.",
    ],
    highlights: [
      { title: "Close to DCA", desc: "One of the shorter DCA drives in southern Prince George's County, with BWI and IAD also realistic options." },
      { title: "National Harbor Convenience", desc: "A direct, short drive to National Harbor's hotels, casino and waterfront without downtown DC traffic." },
      { title: "All Three Airports Served", desc: "Flat-rate transfers to BWI, DCA and IAD with real-time flight tracking." },
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
        region: "Southern Prince George's County",
        places: [
          { label: "Fort Washington", to: "/fort-washington-limo-service" },
          { label: "Oxon Hill", to: "/oxon-hill-md-limo-service" },
          { label: "Clinton", to: "/clinton-md-limo-service" },
          { label: "Upper Marlboro", to: "/upper-marlboro-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Prince George's County, MD Limo Service", to: "/prince-georges-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Accokeek and southern Prince George's County?", a: "Yes — Accokeek, Fort Washington, Oxon Hill, Clinton and Upper Marlboro are all part of our regular coverage area." },
      { q: "Which airport is closest to Accokeek?", a: "DCA is typically the shortest drive, though BWI and IAD are both realistic depending on your specific flight — we'll help you decide when you book." },
      { q: "Can you take us to National Harbor for the evening?", a: "Yes — Accokeek to National Harbor is a short, direct drive we run regularly for dinners, the casino, and waterfront events." },
      { q: "How far in advance should I book an Accokeek airport transfer?", a: "At least 24 hours ahead, earlier for pre-dawn departures and holiday travel. We accommodate same-day requests when availability allows." },
      { q: "Can a group ride together from Accokeek?", a: "Yes — our Sprinter Executive van seats up to 14 passengers, a popular choice for family events and group nights out at National Harbor." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Accokeek Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Accokeek, MD. Call (877) 609-1919.",
  },

  "district-heights-md-limo-service": {
    metaTitle: "District Heights, MD Limo Service | 92 Limo",
    metaDescription:
      "Car & limo service in District Heights, MD — quick DC, BWI & DCA transfers, flat transparent rates, 24/7 chauffeurs. Call (877) 609-1919.",
    eyebrow: "DISTRICT HEIGHTS, MD",
    h1: "Limo & Car Service in District Heights, MD",
    subtitle: "Chauffeured airport transfers and private car service for District Heights and inner Prince George's County, Maryland.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan serving a District Heights, MD client — 92 Limo Service",
    highlightsHeading: "Why District Heights Chooses 92 Limo Service",
    intro: [
      "District Heights sits just inside the Capital Beltway in Prince George's County, minutes from the Washington DC line and Joint Base Andrews. 92 Limo Service covers District Heights as part of our regular Prince George's County territory, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of the DMV.",
      "The close-in location makes District Heights one of the quicker DC drives in the county, and a convenient staging point for downtown meetings, Capitol Hill visits, and nights out without the longer drive times suburban Maryland pickups carry.",
      "Airport transfers run to all three regional airports — DCA is the closest, with BWI and IAD both realistic depending on your flight — and we track every arrival in real time so a delay on either end never leaves you stranded.",
      "Each booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock for an early flight or a change of plans.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard trip into DC, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van for a group event or corporate outing.",
    ],
    highlights: [
      { title: "Minutes From the DC Line", desc: "One of the shorter downtown DC drives in Prince George's County." },
      { title: "Joint Base Andrews Proximity", desc: "Familiar with the area's military and government travel patterns." },
      { title: "All Three Airports Served", desc: "Flat-rate transfers to BWI, DCA and IAD with real-time flight tracking." },
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
        region: "Inner Prince George's County",
        places: [
          { label: "Largo", to: "/largo-md-limo-service" },
          { label: "Bowie", to: "/bowie-md-limo-service" },
          { label: "Hyattsville", to: "/hyattsville-limo-service" },
          { label: "New Carrollton", to: "/new-carrollton-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Prince George's County, MD Limo Service", to: "/prince-georges-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve District Heights?", a: "Yes — District Heights is part of our regular inner Prince George's County coverage, alongside Largo, Bowie, Hyattsville and New Carrollton." },
      { q: "How quick is the drive from District Heights into DC?", a: "It's one of the shorter downtown DC drives in the county, typically well under 20 minutes outside of peak traffic." },
      { q: "Which airport is closest to District Heights?", a: "DCA is typically the shortest drive, though BWI and IAD are both options depending on your flight." },
      { q: "How far in advance should I book?", a: "At least 24 hours ahead, earlier for pre-dawn departures and holiday travel. Same-day requests are welcome when availability allows." },
      { q: "Can we set up a corporate account for a District Heights office?", a: "Yes — with consolidated monthly invoicing, itemized receipts and priority dispatch. Email info@92limo.com to set one up." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book District Heights Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from District Heights, MD. Call (877) 609-1919.",
  },

  "cumberland-md-limo-service": {
    metaTitle: "Cumberland, MD Limo & Car Service | 92 Limo",
    metaDescription:
      "Long-distance chauffeured car service to Cumberland, MD — BWI & DC airport transfers, flat rates, professional chauffeurs. Call (877) 609-1919.",
    eyebrow: "CUMBERLAND, MD",
    h1: "Limo & Car Service in Cumberland, MD",
    subtitle: "Long-distance chauffeured airport transfers and private car service between Cumberland, Maryland and BWI, DCA and IAD.",
    image: IMAGES.longDistance,
    alt: "Luxury chauffeured sedan prepared for a long-distance Cumberland, MD trip — 92 Limo Service",
    highlightsHeading: "Why Cumberland Chooses 92 Limo Service",
    intro: [
      "Cumberland sits at the far western edge of Maryland in Allegany County, near the Eastern Continental Divide and the terminus of the C&O Canal — genuinely long-distance territory from the Baltimore-Washington corridor, roughly two and a half hours from BWI via I-70 and I-68. 92 Limo Service runs this route as a scheduled long-distance transfer, the same way we handle trips to New York, Philadelphia and the Jersey Shore, with one flat, pre-quoted rate instead of a meter running the whole way.",
      "Most Cumberland bookings are airport transfers for residents flying out of BWI, DCA or IAD rather than the smaller regional options closer to home, since the major carriers' schedules and fares at the bigger airports often make the longer drive worthwhile for travelers heading somewhere a regional connection wouldn't reach directly.",
      "Because the trip runs well over an hour each way, we plan Cumberland bookings as true reservations rather than on-demand pickups — confirmed the day before, with a chauffeur who knows I-68's weather-dependent driving conditions through the Alleghenies and builds a reasonable buffer into the schedule for winter travel.",
      "Business travelers connecting through Cumberland for regional employers, and families managing a relative's travel to or from the area, are the other steady source of bookings on this route.",
      "Every Cumberland trip is quoted as one flat, transparent rate for the full round trip or one-way drive — call to confirm your exact pickup address and flight details before booking.",
    ],
    highlights: [
      { title: "True Long-Distance Service", desc: "A pre-quoted, flat-rate trip the whole way — not a meter running for over two hours." },
      { title: "Mountain Driving Experience", desc: "Chauffeurs familiar with I-68's Allegany County conditions, with weather buffers built in." },
      { title: "All Three Airports Served", desc: "BWI, DCA and IAD, with flight tracking on every arrival." },
      { title: "Reservation-Based Scheduling", desc: "Confirmed the day before rather than treated as a same-day on-demand pickup." },
      { title: "Flat, Transparent Pricing", desc: "One quote for the full trip, with every charge disclosed before confirmation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Western Maryland & Beyond",
        places: [
          { label: "Frederick, MD", to: "/frederick-md-limo-service" },
          { label: "Hagerstown, MD", to: "/limo-service-hagerstown-md" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Long-Distance Private Car Service", to: "/long-distance-transportation" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you really drive as far as Cumberland?", a: "Yes. It's a genuine long-distance route, roughly two and a half hours from BWI, quoted as one flat rate rather than metered, the same way we handle trips to New York or Philadelphia." },
      { q: "Why would someone in Cumberland use a BWI or DCA car service instead of flying regionally?", a: "Mainly fares and flight options — the major airports often have far more nonstop routes and lower fares than the smaller regional alternatives, which can make the longer drive worth it." },
      { q: "How far in advance should I book a Cumberland trip?", a: "At least a few days ahead when possible, since it's scheduled as a true reservation rather than an on-demand pickup — earlier during winter weather season." },
      { q: "What happens if winter weather affects the I-68 drive?", a: "Our chauffeurs build weather buffers into mountain routes and stay in contact if conditions require an adjusted pickup or departure time." },
      { q: "Can a family group travel together from Cumberland?", a: "Yes — our Luxury SUV and Sprinter Executive van both comfortably handle a family or small group with full luggage for the long drive." },
      { q: "What does the quoted rate cover?", a: "One flat price for the entire one-way or round trip, with gratuity, tolls and any other applicable charges disclosed before you confirm." },
    ],
    ctaTitle: "Book Cumberland Long-Distance Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeured trip to or from Cumberland, MD. Call (877) 609-1919.",
  },

  // ============================================================
  // NORTHERN VIRGINIA TOWNS (5)
  // ============================================================
  "centreville-va-limo-service": {
    metaTitle: "Centreville, VA Limo & Car Service | 92 Limo",
    metaDescription:
      "Chauffeured car service in Centreville, VA — fast IAD, DCA & BWI transfers, corporate & wedding rides, flat rates 24/7. Call (877) 609-1919.",
    eyebrow: "CENTREVILLE, VA",
    h1: "Limo & Car Service in Centreville, VA",
    subtitle: "Chauffeured airport transfers and corporate car service serving Centreville and the Route 28 corridor in Fairfax County, Virginia.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Centreville, VA client — 92 Limo Service",
    highlightsHeading: "Why Centreville Chooses 92 Limo Service",
    intro: [
      "Centreville sits in western Fairfax County along the Route 28 and I-66 corridor, close to Manassas National Battlefield Park and a growing residential and office population. 92 Limo Service covers Centreville as part of our regular Northern Virginia territory, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of the DMV.",
      "Dulles International (IAD) is the closest major airport from Centreville, typically a 25 to 35 minute drive depending on Route 28 and the Dulles Toll Road traffic, and we track every flight in real time so a delay never costs you a ride. DCA and BWI are both realistic alternatives depending on your specific flight.",
      "Corporate travel is a steady source of bookings here, with Centreville and the surrounding Route 28 office parks drawing a mix of technology and government-adjacent employers who need discreet, on-time executive transportation and standing corporate accounts.",
      "Weddings and family events at the area's event venues are another regular draw, with our Sprinter Executive vans keeping bridal parties and family groups together for the day.",
      "Every booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock for an early flight or last-minute schedule change.",
    ],
    highlights: [
      { title: "Closest to IAD", desc: "A short Route 28/Dulles Toll Road drive to Washington Dulles International Airport." },
      { title: "Route 28 Corporate Corridor", desc: "Familiar with Centreville's technology and government-adjacent office parks." },
      { title: "All Three Airports Served", desc: "IAD, DCA and BWI, with real-time flight tracking on every pickup." },
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
        region: "Fairfax County & Northern Virginia",
        places: [
          { label: "Fairfax, VA", to: "/fairfax-va-limo-service" },
          { label: "Herndon, VA", to: "/herndon-va-limo-service" },
          { label: "Manassas, VA", to: "/manassas-va-limo-service" },
          { label: "Chantilly, VA", to: "/chantilly-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
          { label: "Maryland Wedding Limo", to: "/wedding-limo-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Centreville, VA?", a: "Yes — Centreville is part of our regular Northern Virginia coverage, alongside Fairfax, Herndon, Manassas and Chantilly." },
      { q: "How far is Centreville from Dulles Airport?", a: "Typically 25 to 35 minutes via Route 28 and the Dulles Toll Road, depending on traffic. We build current conditions into your quoted pickup time." },
      { q: "Can you set up a corporate account for a Centreville office?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "Can you handle a wedding or family event in Centreville?", a: "Yes — our Sprinter Executive van keeps a bridal party or family group together for the full day, planned around your venue's timeline." },
      { q: "How far in advance should I book an airport transfer?", a: "At least 24 hours ahead, earlier for holidays and pre-dawn flights. Same-day requests are welcome when availability allows." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Centreville Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Centreville, VA. Call (877) 609-1919.",
  },

  "springfield-va-limo-service": {
    metaTitle: "Springfield, VA Limo & Car Service | 92 Limo",
    metaDescription:
      "Luxury car service in Springfield, VA — quick DCA, IAD & BWI transfers near Fort Belvoir, flat rates, 24/7 chauffeurs. Call (877) 609-1919.",
    eyebrow: "SPRINGFIELD, VA",
    h1: "Limo & Car Service in Springfield, VA",
    subtitle: "Chauffeured airport transfers and corporate car service serving Springfield, Virginia and the I-95/I-395/I-495 interchange area.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan serving a Springfield, VA client — 92 Limo Service",
    highlightsHeading: "Why Springfield Chooses 92 Limo Service",
    intro: [
      "Springfield sits at the junction of I-95, I-395 and I-495 — the interchange locally known as the \"Mixing Bowl\" — in Fairfax County, close to Fort Belvoir and the National Geospatial-Intelligence Agency campus. 92 Limo Service covers Springfield as part of our regular Northern Virginia territory, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of the DMV.",
      "The location makes Springfield a genuinely fast drive to DCA, typically well under 20 minutes outside of peak traffic, with BWI and IAD both realistic alternatives depending on your flight. We track every arrival in real time, so a delay never leaves you stranded.",
      "Government and defense-adjacent corporate travel is a steady part of our Springfield business, with Fort Belvoir and the surrounding federal and contractor offices generating consistent demand for discreet, on-time transportation and standing corporate accounts.",
      "Residential bookings — weddings, proms, and family events — round out the picture, with our full fleet available for anything from a single executive sedan to a Sprinter van for a large group.",
      "Each booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock.",
    ],
    highlights: [
      { title: "Fast DCA Access", desc: "One of the quicker Reagan National drives in Fairfax County, outside of peak traffic." },
      { title: "Fort Belvoir Area Familiar", desc: "Experience with the area's military and government-contractor travel patterns." },
      { title: "All Three Airports Served", desc: "DCA, IAD and BWI, with real-time flight tracking on every pickup." },
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
        region: "Fairfax County & Northern Virginia",
        places: [
          { label: "Alexandria, VA", to: "/alexandria-va-limo-service" },
          { label: "Arlington, VA", to: "/arlington-va-limo-service" },
          { label: "Fairfax, VA", to: "/fairfax-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
          { label: "Government Contractor Car Service — Maryland", to: "/government-contractor-car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Springfield, VA?", a: "Yes — Springfield is part of our regular Northern Virginia coverage, alongside Alexandria, Arlington and Fairfax." },
      { q: "How far is Springfield from DCA?", a: "Typically well under 20 minutes outside peak traffic, one of the faster DCA drives in the Northern Virginia coverage area." },
      { q: "Do you serve Fort Belvoir and nearby federal offices?", a: "Yes — we're familiar with the access and scheduling needs of military and government-contractor travel around the Fort Belvoir area." },
      { q: "Can we set up a corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com." },
      { q: "How far in advance should I book?", a: "At least 24 hours ahead, earlier for holidays and pre-dawn flights. Same-day requests are welcome when availability allows." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Springfield Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Springfield, VA. Call (877) 609-1919.",
  },

  "annandale-va-limo-service": {
    metaTitle: "Annandale, VA Limo & Car Service | 92 Limo",
    metaDescription:
      "Chauffeured limo service in Annandale, VA — DCA, IAD & BWI airport transfers, corporate & event rides, flat rates 24/7. Call (877) 609-1919.",
    eyebrow: "ANNANDALE, VA",
    h1: "Limo & Car Service in Annandale, VA",
    subtitle: "Chauffeured airport transfers and private car service serving Annandale and central Fairfax County, Virginia.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan serving an Annandale, VA client — 92 Limo Service",
    highlightsHeading: "Why Annandale Chooses 92 Limo Service",
    intro: [
      "Annandale sits in central Fairfax County along Little River Turnpike, home to Northern Virginia Community College's Annandale campus and one of the region's most established Korean-American business districts. 92 Limo Service covers Annandale as part of our regular Northern Virginia territory, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of the DMV.",
      "DCA is the closest major airport from Annandale, typically a 20 to 25 minute drive, with BWI and IAD both realistic alternatives depending on your flight. We track every arrival in real time, so a delay never costs you a ride.",
      "NOVA students and visiting families are a steady source of bookings, alongside business travelers connecting to the area's offices and the Little River Turnpike corridor's restaurants and event spaces.",
      "Weddings, family celebrations, and group outings round out the picture, with our Sprinter Executive van available for anything larger than a standard sedan or SUV booking.",
      "Each booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock.",
    ],
    highlights: [
      { title: "Close to DCA", desc: "A 20-25 minute drive to Reagan National under normal traffic conditions." },
      { title: "NOVA Campus Familiar", desc: "Regular pickups for Northern Virginia Community College students and visiting families." },
      { title: "All Three Airports Served", desc: "DCA, IAD and BWI, with real-time flight tracking on every pickup." },
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
        region: "Fairfax County & Northern Virginia",
        places: [
          { label: "Falls Church, VA", to: "/falls-church-va-limo-service" },
          { label: "Fairfax, VA", to: "/fairfax-va-limo-service" },
          { label: "Arlington, VA", to: "/arlington-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "College Tour Car Service — Maryland & DC", to: "/college-tour-car-service-maryland-dc" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Annandale, VA?", a: "Yes — Annandale is part of our regular Northern Virginia coverage, alongside Falls Church, Fairfax and Arlington." },
      { q: "How far is Annandale from DCA?", a: "Typically a 20 to 25 minute drive under normal traffic, one of the more convenient DCA drives in our Northern Virginia coverage area." },
      { q: "Do you serve NOVA Annandale campus families?", a: "Yes — move-in days, visits and graduations are a regular booking for us at the Annandale campus." },
      { q: "How far in advance should I book an airport transfer?", a: "At least 24 hours ahead, earlier for holidays and pre-dawn flights. Same-day requests are welcome when availability allows." },
      { q: "Can a group ride together?", a: "Yes — our Sprinter Executive van seats up to 14 passengers for family events, weddings, or group outings." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Annandale Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Annandale, VA. Call (877) 609-1919.",
  },

  "dumfries-va-limo-service": {
    metaTitle: "Dumfries, VA Limo & Car Service | 92 Limo",
    metaDescription:
      "Car service in Dumfries, VA — Quantico-area airport transfers to DCA & IAD, flat transparent rates, 24/7. Call (877) 609-1919.",
    eyebrow: "DUMFRIES, VA",
    h1: "Limo & Car Service in Dumfries, VA",
    subtitle: "Chauffeured airport transfers and private car service serving Dumfries and the Quantico area of Prince William County, Virginia.",
    image: IMAGES.suv,
    alt: "Luxury chauffeured SUV serving a Dumfries, VA client — 92 Limo Service",
    highlightsHeading: "Why Dumfries Chooses 92 Limo Service",
    intro: [
      "Dumfries sits along I-95 in eastern Prince William County, next to Marine Corps Base Quantico and the Potomac Mills outlet shopping center. 92 Limo Service covers Dumfries as part of our regular Northern Virginia territory, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of the DMV.",
      "DCA and IAD are both realistic airport options from Dumfries depending on your flight, typically a 35 to 45 minute drive to either, and we track every arrival in real time so a delay never leaves you stranded.",
      "Military families connected to Quantico are a steady source of bookings — relocations, graduations, and visiting family flying in for a ceremony — alongside shoppers and visitors heading to Potomac Mills and the surrounding retail corridor.",
      "Weddings, proms, and family events round out the picture, with our Sprinter Executive van available for a group traveling together.",
      "Each booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock.",
    ],
    highlights: [
      { title: "Quantico Area Familiar", desc: "Experience with Marine Corps Base Quantico family travel patterns, including graduations and relocations." },
      { title: "Potomac Mills Convenience", desc: "Regular pickups and drop-offs at the Potomac Mills retail corridor." },
      { title: "DCA & IAD Served", desc: "Flat-rate transfers with real-time flight tracking on every pickup." },
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
        region: "Prince William County & Northern Virginia",
        places: [
          { label: "Woodbridge, VA", to: "/woodbridge-va-limo-service" },
          { label: "Manassas, VA", to: "/manassas-va-limo-service" },
          { label: "Stafford, VA", to: "/stafford-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Dumfries, VA?", a: "Yes — Dumfries is part of our regular Northern Virginia coverage, alongside Woodbridge, Manassas and Stafford." },
      { q: "Do you serve Marine Corps Base Quantico families?", a: "Yes — we regularly handle Quantico-area graduations, relocations and family visits, including airport pickups for out-of-town relatives." },
      { q: "How far is Dumfries from DCA and IAD?", a: "Typically 35 to 45 minutes to either, depending on traffic. We'll help you pick the better option based on your flight." },
      { q: "How far in advance should I book?", a: "At least 24 hours ahead, earlier for holidays and pre-dawn flights. Same-day requests are welcome when availability allows." },
      { q: "Can a group ride together from Dumfries?", a: "Yes — our Sprinter Executive van seats up to 14 passengers, a popular choice for military family events and weddings." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Dumfries Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Dumfries, VA. Call (877) 609-1919.",
  },

  "stafford-va-limo-service": {
    metaTitle: "Stafford, VA Limo & Car Service | 92 Limo",
    metaDescription:
      "Chauffeured car service in Stafford, VA — DCA & IAD airport transfers, corporate travel, flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "STAFFORD, VA",
    h1: "Limo & Car Service in Stafford, VA",
    subtitle: "Chauffeured airport transfers and corporate car service serving Stafford County, Virginia, along the I-95 corridor south of Washington DC.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan serving a Stafford, VA client — 92 Limo Service",
    highlightsHeading: "Why Stafford Chooses 92 Limo Service",
    intro: [
      "Stafford sits along I-95 roughly 40 miles south of Washington DC, a commuter county that has grown substantially alongside the federal and government-contractor workforce it feeds into the capital region. 92 Limo Service covers Stafford as part of our regular Northern Virginia territory, with the same flat, transparent pricing and licensed chauffeurs we bring across the rest of the DMV.",
      "DCA is the most common airport choice from Stafford, typically a 50 to 60 minute drive depending on traffic, with IAD a realistic alternative for certain flights. We track every arrival in real time, so a delay never costs you a ride.",
      "Daily corporate travel into DC and Northern Virginia's office corridors is the backbone of our Stafford business, and we work with a number of commuting executives on standing hourly and as-directed arrangements rather than one-off bookings.",
      "Weddings, military family events tied to nearby Quantico, and long-distance I-95 corridor trips round out the picture, with vehicles ranging from a single executive sedan to a Sprinter van for a larger group.",
      "Each booking is planned around your exact pickup address, confirmed the day before, with dispatch reachable around the clock.",
    ],
    highlights: [
      { title: "I-95 Corridor Commuter Service", desc: "Standing and one-off trips for Stafford's daily DC and Northern Virginia commuters." },
      { title: "DCA & IAD Served", desc: "Flat-rate airport transfers with real-time flight tracking on every pickup." },
      { title: "Quantico-Adjacent", desc: "Familiar with military family travel patterns for nearby Marine Corps Base Quantico." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early flights, late events and last-minute schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "I-95 Corridor & Northern Virginia",
        places: [
          { label: "Dumfries, VA", to: "/dumfries-va-limo-service" },
          { label: "Woodbridge, VA", to: "/woodbridge-va-limo-service" },
          { label: "Fredericksburg, VA", to: "/fredericksburg-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Stafford, VA?", a: "Yes — Stafford is part of our regular I-95 corridor and Northern Virginia coverage, alongside Dumfries, Woodbridge and Fredericksburg." },
      { q: "How far is Stafford from DCA?", a: "Typically 50 to 60 minutes depending on traffic. IAD is a realistic alternative for certain flights." },
      { q: "Do you offer standing commuter arrangements for Stafford executives?", a: "Yes — we work with a number of daily and weekly commuters on hourly and as-directed arrangements rather than booking each trip individually." },
      { q: "How far in advance should I book?", a: "At least 24 hours ahead, earlier for holidays and pre-dawn flights. Same-day requests are welcome when availability allows." },
      { q: "Can you handle a wedding or family event near Quantico?", a: "Yes — we regularly handle military family events and celebrations around the Stafford and Quantico area." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Stafford Car Service",
    ctaSubtitle: "Reserve chauffeured transportation to or from Stafford, VA. Call (877) 609-1919.",
  },

  // ============================================================
  // PENNSYLVANIA TOWNS (2)
  // ============================================================
  "carlisle-pa-limo-service": {
    metaTitle: "Carlisle, PA Limo & Car Service | 92 Limo",
    metaDescription:
      "Long-distance chauffeured car service to Carlisle, PA — BWI & Philadelphia airport transfers, flat rates. Call (877) 609-1919.",
    eyebrow: "CARLISLE, PA",
    h1: "Limo & Car Service in Carlisle, PA",
    subtitle: "Long-distance chauffeured airport transfers and private car service between Carlisle, Pennsylvania and BWI, PHL and the DMV.",
    image: IMAGES.longDistance,
    alt: "Luxury chauffeured sedan prepared for a Carlisle, PA trip — 92 Limo Service",
    highlightsHeading: "Why Carlisle Chooses 92 Limo Service",
    intro: [
      "Carlisle is the seat of Cumberland County, Pennsylvania, home to Dickinson College and the US Army War College at Carlisle Barracks, roughly 90 minutes to two hours from BWI depending on the route and traffic through the Harrisburg area. 92 Limo Service runs Carlisle as a scheduled long-distance transfer, the same way we handle our other Pennsylvania routes to York, Hershey and Lancaster, with one flat, pre-quoted rate for the full trip.",
      "Dickinson College families are a steady source of bookings — move-in weekends, parents' weekend, and commencement all bring a wave of flights through BWI and Philadelphia that our chauffeurs plan around well in advance.",
      "US Army War College visitors and military families connected to Carlisle Barracks are another regular part of our Carlisle business, with trips planned around official travel schedules and family visits alike.",
      "Because the drive runs well over an hour, we treat Carlisle bookings as confirmed reservations rather than on-demand pickups, with the itinerary set the day before and a chauffeur who knows the central Pennsylvania routes.",
      "Every Carlisle trip is quoted as one flat, transparent rate for the full drive — call to confirm your exact pickup address and flight details before booking.",
    ],
    highlights: [
      { title: "True Long-Distance Service", desc: "One flat, pre-quoted rate for the full Carlisle-to-airport trip." },
      { title: "Dickinson College Familiar", desc: "Move-in weekends, parents' weekend and commencement traffic handled routinely." },
      { title: "Carlisle Barracks & War College Experience", desc: "Military family and official travel scheduling handled with care." },
      { title: "BWI & PHL Served", desc: "Flat-rate transfers with real-time flight tracking on every pickup." },
      { title: "Reservation-Based Scheduling", desc: "Confirmed the day before rather than treated as a same-day on-demand pickup." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Pennsylvania",
        places: [
          { label: "Mechanicsburg, PA", to: "/mechanicsburg-pa-limo-service" },
          { label: "Harrisburg, PA", to: "/harrisburg-pa-limo-service" },
          { label: "York, PA", to: "/york-pa-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Philadelphia Airport Car Service", to: "/philadelphia-airport-car-service" },
          { label: "Long-Distance Private Car Service", to: "/long-distance-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "Do you really drive as far as Carlisle, PA?", a: "Yes — it's a genuine long-distance route, roughly 90 minutes to two hours from BWI, quoted as one flat rate for the full trip." },
      { q: "Do you serve Dickinson College families?", a: "Yes — move-in, parents' weekend and commencement are all regular bookings for us around the Dickinson College campus." },
      { q: "Do you handle trips for Carlisle Barracks and the War College?", a: "Yes — we regularly serve military families and official visitors connected to Carlisle Barracks." },
      { q: "How far in advance should I book a Carlisle trip?", a: "At least a few days ahead when possible, since it's scheduled as a confirmed reservation rather than an on-demand pickup." },
      { q: "Which airports do you serve from Carlisle?", a: "BWI and Philadelphia (PHL) are both realistic options depending on your flight and fare." },
      { q: "What does the quoted rate cover?", a: "One flat price for the entire trip, with gratuity, tolls and any other applicable charges disclosed before you confirm." },
    ],
    ctaTitle: "Book Carlisle Long-Distance Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeured trip to or from Carlisle, PA. Call (877) 609-1919.",
  },

  "mechanicsburg-pa-limo-service": {
    metaTitle: "Mechanicsburg, PA Limo & Car Service | 92 Limo",
    metaDescription:
      "Chauffeured car service to Mechanicsburg, PA — BWI airport transfers, flat transparent rates, 24/7. Call (877) 609-1919.",
    eyebrow: "MECHANICSBURG, PA",
    h1: "Limo & Car Service in Mechanicsburg, PA",
    subtitle: "Long-distance chauffeured airport transfers and private car service between Mechanicsburg, Pennsylvania and BWI.",
    image: IMAGES.longDistance,
    alt: "Luxury chauffeured sedan prepared for a Mechanicsburg, PA trip — 92 Limo Service",
    highlightsHeading: "Why Mechanicsburg Chooses 92 Limo Service",
    intro: [
      "Mechanicsburg sits just west of Harrisburg in Cumberland County, Pennsylvania, home to Naval Support Activity Mechanicsburg and a growing suburban population commuting into the greater Harrisburg area. 92 Limo Service runs Mechanicsburg as a scheduled long-distance transfer to BWI, roughly 90 minutes away, with one flat, pre-quoted rate for the full trip rather than a meter running the whole drive.",
      "Naval Support Activity Mechanicsburg generates a steady stream of military family and official travel bookings, and we plan these trips around official schedules with the same reliability we bring to any corporate account.",
      "Business and leisure travelers across the greater Harrisburg area increasingly choose BWI over the smaller regional airport for its fare and route options, and a reserved, flat-rate car service removes the uncertainty of the longer drive.",
      "Because the trip runs well over an hour, we treat Mechanicsburg bookings as confirmed reservations rather than on-demand pickups, with the itinerary set the day before.",
      "Every Mechanicsburg trip is quoted as one flat, transparent rate for the full drive — call to confirm your exact pickup address and flight details before booking.",
    ],
    highlights: [
      { title: "True Long-Distance Service", desc: "One flat, pre-quoted rate for the full Mechanicsburg-to-BWI trip." },
      { title: "Naval Support Activity Familiar", desc: "Military family and official travel scheduling handled with care." },
      { title: "Harrisburg Area Coverage", desc: "A reliable alternative to the smaller regional airport for fare and route flexibility." },
      { title: "Reservation-Based Scheduling", desc: "Confirmed the day before rather than treated as a same-day on-demand pickup." },
      { title: "Flat, Transparent Pricing", desc: "One quote for the full trip, with every charge disclosed before confirmation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Pennsylvania",
        places: [
          { label: "Carlisle, PA", to: "/carlisle-pa-limo-service" },
          { label: "Harrisburg, PA", to: "/harrisburg-pa-limo-service" },
          { label: "York, PA", to: "/york-pa-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Long-Distance Private Car Service", to: "/long-distance-transportation" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you really drive as far as Mechanicsburg, PA?", a: "Yes — it's a genuine long-distance route, roughly 90 minutes from BWI, quoted as one flat rate for the full trip." },
      { q: "Do you serve Naval Support Activity Mechanicsburg?", a: "Yes — we regularly handle military family and official travel connected to the base." },
      { q: "Why would someone near Harrisburg fly out of BWI instead?", a: "Mainly fares and route options — BWI often has more nonstop flights and lower fares than the smaller regional airport, which can make the longer drive worthwhile." },
      { q: "How far in advance should I book?", a: "At least a few days ahead when possible, since it's scheduled as a confirmed reservation rather than an on-demand pickup." },
      { q: "Can a family group travel together?", a: "Yes — our Luxury SUV and Sprinter Executive van both comfortably handle a family or small group with full luggage for the long drive." },
      { q: "What does the quoted rate cover?", a: "One flat price for the entire trip, with gratuity, tolls and any other applicable charges disclosed before you confirm." },
    ],
    ctaTitle: "Book Mechanicsburg Long-Distance Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeured trip to or from Mechanicsburg, PA. Call (877) 609-1919.",
  },

  // ============================================================
  // DELAWARE TOWNS (2)
  // ============================================================
  "lewes-de-limo-service": {
    metaTitle: "Lewes, DE Limo & Car Service | 92 Limo",
    metaDescription:
      "Chauffeured car service to Lewes, DE — BWI & Philadelphia airport transfers, beach weekend rides, flat rates. Call (877) 609-1919.",
    eyebrow: "LEWES, DE",
    h1: "Limo & Car Service in Lewes, DE",
    subtitle: "Long-distance chauffeured airport transfers and beach-weekend car service between Lewes, Delaware and BWI, PHL and the DMV.",
    image: IMAGES.longDistance,
    alt: "Luxury chauffeured sedan prepared for a Lewes, DE beach trip — 92 Limo Service",
    highlightsHeading: "Why Lewes Chooses 92 Limo Service",
    intro: [
      "Lewes calls itself \"the First Town in the First State,\" a historic harbor town on the Delaware Bay with Cape Henlopen State Park, the Cape May-Lewes Ferry terminal, and a quieter alternative to its busier neighbor Rehoboth Beach just down the coast. 92 Limo Service runs Lewes as a scheduled long-distance transfer, roughly two hours from BWI, with one flat, pre-quoted rate for the full trip.",
      "Beach weekend travelers are the most common Lewes booking — flying into BWI or Philadelphia and riding directly to a Lewes rental or hotel rather than renting a car for a few days at the shore, with return trips timed around checkout.",
      "Weddings at Lewes's historic venues and waterfront properties are a steady seasonal draw, and we plan the full weekend around ceremony, reception and guest transportation as needed.",
      "Cape May-Lewes Ferry connections are another regular use case, with travelers continuing on to New Jersey or arriving from the ferry and needing a reliable ride to their final Delaware destination.",
      "Because the trip runs well over an hour, we treat Lewes bookings as confirmed reservations, with the itinerary set the day before and your return trip scheduled around your actual departure time, not a guess.",
    ],
    highlights: [
      { title: "True Long-Distance Service", desc: "One flat, pre-quoted rate for the full Lewes-to-airport trip." },
      { title: "Beach Weekend Specialists", desc: "Direct airport-to-rental rides that skip the rental-car line entirely." },
      { title: "Cape May-Lewes Ferry Connections", desc: "Reliable pickup and drop-off coordinated around ferry schedules." },
      { title: "BWI & PHL Served", desc: "Flat-rate transfers with real-time flight tracking on every pickup." },
      { title: "Reservation-Based Scheduling", desc: "Confirmed the day before rather than treated as a same-day on-demand pickup." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Delaware Beaches",
        places: [
          { label: "Rehoboth Beach, DE", to: "/limo-service-rehoboth-beach-de" },
          { label: "Bethany Beach", to: "/bwi-to-bethany-beach" },
          { label: "Georgetown, DE", to: "/georgetown-de-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Maryland Wedding Limo", to: "/wedding-limo-maryland" },
          { label: "Long-Distance Private Car Service", to: "/long-distance-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "Do you really drive as far as Lewes, DE?", a: "Yes — it's a genuine long-distance route, roughly two hours from BWI, quoted as one flat rate for the full trip." },
      { q: "Can you pick us up at BWI and take us straight to our Lewes rental?", a: "Yes — this is one of our most common Lewes bookings, skipping the rental-car counter entirely." },
      { q: "Do you coordinate with the Cape May-Lewes Ferry?", a: "Yes — we plan pickup or drop-off around your specific ferry departure or arrival time." },
      { q: "Can you handle a Lewes wedding weekend?", a: "Yes — tell us your ceremony, reception and guest transportation needs and we'll plan the full weekend." },
      { q: "How far in advance should I book a Lewes trip?", a: "At least a few days ahead, earlier during peak summer beach season when vehicles book up." },
      { q: "What does the quoted rate cover?", a: "One flat price for the entire trip, with gratuity, tolls and any other applicable charges disclosed before you confirm." },
    ],
    ctaTitle: "Book Lewes Long-Distance Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeured trip to or from Lewes, DE. Call (877) 609-1919.",
  },

  "georgetown-de-limo-service": {
    metaTitle: "Georgetown, DE Limo & Car Service | 92 Limo",
    metaDescription:
      "Car service to Georgetown, DE — BWI airport transfers, Delaware beach trips, flat transparent rates, 24/7. Call (877) 609-1919.",
    eyebrow: "GEORGETOWN, DE",
    h1: "Limo & Car Service in Georgetown, DE",
    subtitle: "Long-distance chauffeured airport transfers and private car service between Georgetown, Delaware and BWI.",
    image: IMAGES.longDistance,
    alt: "Luxury chauffeured sedan prepared for a Georgetown, DE trip — 92 Limo Service",
    highlightsHeading: "Why Georgetown Chooses 92 Limo Service",
    intro: [
      "Georgetown is the seat of Sussex County, Delaware, an inland town roughly ten miles from the beaches at Lewes and Rehoboth and home to the Delaware State Fair each summer. 92 Limo Service runs Georgetown as a scheduled long-distance transfer, roughly an hour and 45 minutes from BWI, with one flat, pre-quoted rate for the full trip.",
      "Delaware State Fair visitors and vendors are a notable seasonal source of Georgetown bookings, alongside county business travelers and residents who prefer BWI's fares and flight options over smaller regional airports.",
      "Because Georgetown sits close to the Delaware beach towns, many bookings continue on to Lewes, Rehoboth or Bethany Beach after a Georgetown stop, and we plan the full itinerary as one trip rather than splitting it.",
      "Weddings and family events at Sussex County's inland venues round out our regular Georgetown business, with vehicles ranging from a single sedan to a Sprinter van for a larger group.",
      "Because the trip runs well over an hour, we treat Georgetown bookings as confirmed reservations, with the itinerary set the day before your pickup.",
    ],
    highlights: [
      { title: "True Long-Distance Service", desc: "One flat, pre-quoted rate for the full Georgetown-to-BWI trip." },
      { title: "Delaware State Fair Familiar", desc: "Seasonal fair traffic and scheduling handled routinely each summer." },
      { title: "Beach Town Connections", desc: "Combined itineraries continuing on to Lewes, Rehoboth and Bethany Beach." },
      { title: "Reservation-Based Scheduling", desc: "Confirmed the day before rather than treated as a same-day on-demand pickup." },
      { title: "Flat, Transparent Pricing", desc: "One quote for the full trip, with every charge disclosed before confirmation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Delaware",
        places: [
          { label: "Lewes, DE", to: "/lewes-de-limo-service" },
          { label: "Rehoboth Beach, DE", to: "/limo-service-rehoboth-beach-de" },
          { label: "Dover, DE", to: "/dover-de-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Long-Distance Private Car Service", to: "/long-distance-transportation" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you really drive as far as Georgetown, DE?", a: "Yes — it's a genuine long-distance route, roughly an hour and 45 minutes from BWI, quoted as one flat rate for the full trip." },
      { q: "Can you combine a Georgetown stop with a drive to the beach?", a: "Yes — we plan combined itineraries to Lewes, Rehoboth or Bethany Beach as one trip when requested." },
      { q: "Do you handle Delaware State Fair traffic?", a: "Yes — fair-week scheduling is routine for us each summer, including vendor and visitor trips." },
      { q: "How far in advance should I book?", a: "At least a few days ahead when possible, since it's scheduled as a confirmed reservation rather than an on-demand pickup." },
      { q: "Can you handle a wedding or family event near Georgetown?", a: "Yes — Sussex County inland venues are a regular booking, with vehicles sized to your group." },
      { q: "What does the quoted rate cover?", a: "One flat price for the entire trip, with gratuity, tolls and any other applicable charges disclosed before you confirm." },
    ],
    ctaTitle: "Book Georgetown Long-Distance Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeured trip to or from Georgetown, DE. Call (877) 609-1919.",
  },

  // ============================================================
  // NEW AIRPORT ROUTE PAIRS (6)
  // ============================================================
  "iad-to-mclean": {
    metaTitle: "Dulles (IAD) to McLean, VA Car Service | 92 Limo",
    metaDescription:
      "Flat-rate chauffeured transfers from Dulles (IAD) to McLean, VA — flight tracking, meet & greet available, 24/7. Call (877) 609-1919.",
    eyebrow: "IAD TO MCLEAN",
    h1: "IAD Airport to McLean, VA Car Service",
    subtitle: "Flight-tracked chauffeured transfers between Washington Dulles International Airport and McLean, Virginia.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur meeting a traveler at Dulles Airport for a McLean, VA transfer — 92 Limo Service",
    highlightsHeading: "Why Travelers Choose 92 Limo Service for IAD to McLean",
    intro: [
      "McLean is one of the shorter, more direct drives from Washington Dulles International Airport, typically 20 to 25 minutes via the Dulles Access Road and Route 123 outside of peak traffic, which makes it a route we run constantly for McLean's business executives, diplomatic community, and families with international arrivals.",
      "Every IAD to McLean transfer includes real-time flight tracking, so an early landing or a long delay never costs you a ride — your pickup adjusts automatically at no charge, with 60 minutes of complimentary wait time on international arrivals and 45 on domestic.",
      "McLean's concentration of corporate headquarters, embassies, and diplomatic residences means discretion and punctuality matter as much as the drive itself, and our chauffeurs are trained to handle both routine airport runs and more sensitive executive and diplomatic travel with the same professionalism.",
      "Choose a First Class Sedan (BMW 7 Series) for an executive arrival, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van if your group is traveling together.",
      "Every trip is quoted as one flat, transparent price before you book — call (877) 609-1919 or reserve online, any hour of the day.",
    ],
    highlights: [
      { title: "Fast Dulles Access Road Drive", desc: "Typically 20-25 minutes outside of peak traffic, one of the quicker IAD routes." },
      { title: "Flight Tracking", desc: "We monitor every arrival in real time and adjust your pickup automatically." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet you inside baggage claim with a name sign. Additional charge applies." },
      { title: "Diplomatic & Executive Experience", desc: "Discreet, professional service for McLean's corporate and diplomatic community." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the base fare, with all charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye landings and early departures handled around the clock." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Fairfax County",
        places: [
          { label: "McLean, VA", to: "/mclean-va-limo-service" },
          { label: "Vienna, VA", to: "/vienna-va-limo-service" },
          { label: "Tysons Corner, VA", to: "/tysons-corner-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Embassy & Diplomatic Car Service — Washington DC", to: "/embassy-diplomatic-car-service-washington-dc" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
        ],
      },
    ],
    faqs: [
      { q: "How long does the drive from IAD to McLean take?", a: "Typically 20 to 25 minutes via the Dulles Access Road and Route 123, outside of peak traffic. We adjust the estimate for current conditions when you book." },
      { q: "Is pricing flat or metered?", a: "Flat and quoted before you book. Gratuity, tolls, parking and any other applicable charges are disclosed before confirmation." },
      { q: "What happens if my flight into IAD is delayed?", a: "Nothing changes for you — we track your flight and adjust the pickup automatically, with 45 minutes of complimentary wait time on domestic arrivals and 60 on international." },
      { q: "Can my chauffeur meet me inside the terminal?", a: "Yes — meet & greet is available for an additional charge. Curbside pickup at arrivals is always included at no extra cost." },
      { q: "Do you serve McLean's embassy and corporate community discreetly?", a: "Yes — our chauffeurs are experienced with diplomatic and executive travel that requires discretion and punctuality." },
      { q: "Can a group ride together from IAD?", a: "Yes — our Sprinter Executive van seats up to 14 passengers with dedicated luggage space." },
    ],
    ctaTitle: "Book Your IAD to McLean Transfer",
    ctaSubtitle: "Reserve a flight-tracked chauffeured ride from Dulles to McLean, VA. Call (877) 609-1919.",
  },

  "iad-to-vienna": {
    metaTitle: "Dulles (IAD) to Vienna, VA Car Service | 92 Limo",
    metaDescription:
      "Chauffeured transfers from Dulles (IAD) to Vienna, VA — flight tracking, flat rates, professional chauffeurs, 24/7. Call (877) 609-1919.",
    eyebrow: "IAD TO VIENNA",
    h1: "IAD Airport to Vienna, VA Car Service",
    subtitle: "Flight-tracked chauffeured transfers between Washington Dulles International Airport and Vienna, Virginia.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur meeting a traveler at Dulles Airport for a Vienna, VA transfer — 92 Limo Service",
    highlightsHeading: "Why Travelers Choose 92 Limo Service for IAD to Vienna",
    intro: [
      "Vienna sits a short, direct drive from Washington Dulles International Airport via the Dulles Access Road and Route 123, typically 20 to 30 minutes outside of peak traffic, making it one of the more convenient Fairfax County communities to reach straight from the terminal.",
      "Every IAD to Vienna transfer includes real-time flight tracking, so an early landing or a long delay never costs you a ride — your pickup adjusts automatically at no charge, with generous complimentary wait time built into every arrival.",
      "Vienna's mix of corporate headquarters, Metro-connected commuters, and family neighborhoods near the W&OD Trail means our bookings here range from executive airport runs to family arrivals with a full set of luggage.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van if your group is traveling together.",
      "Every trip is quoted as one flat, transparent price before you book — call (877) 609-1919 or reserve online, any hour of the day.",
    ],
    highlights: [
      { title: "Fast Dulles Access Road Drive", desc: "Typically 20-30 minutes outside of peak traffic." },
      { title: "Flight Tracking", desc: "We monitor every arrival in real time and adjust your pickup automatically." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet you inside baggage claim with a name sign. Additional charge applies." },
      { title: "Family & Executive Ready", desc: "Vehicles sized for a solo business traveler or a full family with luggage." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the base fare, with all charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye landings and early departures handled around the clock." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Fairfax County",
        places: [
          { label: "Vienna, VA", to: "/vienna-va-limo-service" },
          { label: "McLean, VA", to: "/mclean-va-limo-service" },
          { label: "Tysons Corner, VA", to: "/tysons-corner-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
          { label: "Reston, VA Limo Service", to: "/reston-va-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How long does the drive from IAD to Vienna take?", a: "Typically 20 to 30 minutes via the Dulles Access Road and Route 123, outside of peak traffic." },
      { q: "Is pricing flat or metered?", a: "Flat and quoted before you book. Gratuity, tolls, parking and any other applicable charges are disclosed before confirmation." },
      { q: "What happens if my flight into IAD is delayed?", a: "We track your flight and adjust the pickup automatically, with 45 minutes of complimentary wait time on domestic arrivals and 60 on international." },
      { q: "Can my chauffeur meet me inside the terminal?", a: "Yes — meet & greet is available for an additional charge. Curbside pickup at arrivals is always included at no extra cost." },
      { q: "Can a group ride together from IAD to Vienna?", a: "Yes — our Sprinter Executive van seats up to 14 passengers with dedicated luggage space." },
      { q: "How far in advance should I book?", a: "At least 24 hours ahead, earlier during holidays. Same-day requests are welcome when availability allows." },
    ],
    ctaTitle: "Book Your IAD to Vienna Transfer",
    ctaSubtitle: "Reserve a flight-tracked chauffeured ride from Dulles to Vienna, VA. Call (877) 609-1919.",
  },

  "iad-to-ashburn": {
    metaTitle: "Dulles (IAD) to Ashburn, VA Car Service | 92 Limo",
    metaDescription:
      "Fast, flat-rate chauffeured transfers from Dulles (IAD) to Ashburn, VA — flight tracking, 24/7 availability. Call (877) 609-1919.",
    eyebrow: "IAD TO ASHBURN",
    h1: "IAD Airport to Ashburn, VA Car Service",
    subtitle: "Flight-tracked chauffeured transfers between Washington Dulles International Airport and Ashburn, Virginia.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur meeting a traveler at Dulles Airport for an Ashburn, VA transfer — 92 Limo Service",
    highlightsHeading: "Why Travelers Choose 92 Limo Service for IAD to Ashburn",
    intro: [
      "Ashburn is one of the closest major communities to Washington Dulles International Airport, typically just 10 to 15 minutes via the Loudoun County Parkway and Route 7, which makes it one of the fastest regular transfers we run out of the terminal.",
      "Every IAD to Ashburn transfer includes real-time flight tracking, so an early landing or a long delay never costs you a ride — your pickup adjusts automatically at no charge, with generous complimentary wait time built into every arrival.",
      "Ashburn's role as the center of \"Data Center Alley\" and a major tech-industry employment hub means a large share of our bookings here are corporate — visiting engineers, executives, and consultants moving between the airport and Loudoun County's office campuses on compressed schedules.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard trip, a First Class Sedan (BMW 7 Series) for an executive arrival, or a Sprinter Executive van for a team traveling together.",
      "Every trip is quoted as one flat, transparent price before you book — call (877) 609-1919 or reserve online, any hour of the day.",
    ],
    highlights: [
      { title: "One of the Fastest IAD Routes", desc: "Typically 10-15 minutes via the Loudoun County Parkway and Route 7." },
      { title: "Flight Tracking", desc: "We monitor every arrival in real time and adjust your pickup automatically." },
      { title: "Data Center Alley Corporate Experience", desc: "Familiar with Ashburn's tech-industry visitor and executive travel patterns." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet you inside baggage claim with a name sign. Additional charge applies." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the base fare, with all charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye landings and early departures handled around the clock." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Loudoun County",
        places: [
          { label: "Ashburn, VA", to: "/ashburn-va-limo-service" },
          { label: "Leesburg, VA", to: "/leesburg-va-limo-service" },
          { label: "Sterling, VA", to: "/sterling-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Tech Company Car Service — Maryland", to: "/tech-company-car-service-maryland" },
          { label: "Loudoun County Wine Country Limo Service", to: "/loudoun-wine-country-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How long does the drive from IAD to Ashburn take?", a: "Typically just 10 to 15 minutes via the Loudoun County Parkway and Route 7, one of the fastest regular transfers we run." },
      { q: "Is pricing flat or metered?", a: "Flat and quoted before you book. Gratuity, tolls, parking and any other applicable charges are disclosed before confirmation." },
      { q: "Do you serve Data Center Alley's corporate campuses?", a: "Yes — visiting executives, engineers and consultants moving between IAD and Ashburn's tech corridor are a regular part of our business." },
      { q: "What happens if my flight into IAD is delayed?", a: "We track your flight and adjust the pickup automatically, with 45 minutes of complimentary wait time on domestic arrivals and 60 on international." },
      { q: "Can a group ride together from IAD to Ashburn?", a: "Yes — our Sprinter Executive van seats up to 14 passengers with dedicated luggage space." },
      { q: "Can we set up a standing corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts and priority dispatch. Email info@92limo.com." },
    ],
    ctaTitle: "Book Your IAD to Ashburn Transfer",
    ctaSubtitle: "Reserve a flight-tracked chauffeured ride from Dulles to Ashburn, VA. Call (877) 609-1919.",
  },

  "iad-to-alexandria": {
    metaTitle: "Dulles (IAD) to Alexandria, VA Car Service | 92 Limo",
    metaDescription:
      "Chauffeured transfers from Dulles (IAD) to Alexandria, VA — Old Town drop-off, flight tracking, flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "IAD TO ALEXANDRIA",
    h1: "IAD Airport to Alexandria, VA Car Service",
    subtitle: "Flight-tracked chauffeured transfers between Washington Dulles International Airport and Alexandria, Virginia, including Old Town.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur meeting a traveler at Dulles Airport for an Alexandria, VA transfer — 92 Limo Service",
    highlightsHeading: "Why Travelers Choose 92 Limo Service for IAD to Alexandria",
    intro: [
      "Alexandria sits roughly 35 to 45 minutes from Washington Dulles International Airport depending on traffic through the Beltway, a longer drive than some of our other IAD routes but one we run constantly for travelers headed to Old Town's hotels, restaurants, and historic waterfront.",
      "Every IAD to Alexandria transfer includes real-time flight tracking, so an early landing or a long delay never costs you a ride — your pickup adjusts automatically at no charge, with generous complimentary wait time built into every arrival.",
      "Old Town Alexandria's narrow, cobblestone side streets and limited parking make a professional chauffeur who already knows the drop-off logistics genuinely useful, particularly for hotel arrivals near King Street and the waterfront.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van if your group is traveling together.",
      "Every trip is quoted as one flat, transparent price before you book — call (877) 609-1919 or reserve online, any hour of the day.",
    ],
    highlights: [
      { title: "Old Town Drop-Off Experience", desc: "Chauffeurs familiar with Alexandria's narrow streets and hotel drop-off logistics." },
      { title: "Flight Tracking", desc: "We monitor every arrival in real time and adjust your pickup automatically." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet you inside baggage claim with a name sign. Additional charge applies." },
      { title: "Family & Executive Ready", desc: "Vehicles sized for a solo traveler or a full family with luggage." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the base fare, with all charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye landings and early departures handled around the clock." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Northern Virginia",
        places: [
          { label: "Alexandria, VA", to: "/alexandria-va-limo-service" },
          { label: "Arlington, VA", to: "/arlington-va-limo-service" },
          { label: "Springfield, VA", to: "/springfield-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Corporate Car Service — Virginia", to: "/executive-car-service-virginia" },
        ],
      },
    ],
    faqs: [
      { q: "How long does the drive from IAD to Alexandria take?", a: "Typically 35 to 45 minutes depending on Beltway traffic. We build current conditions into your quoted pickup time." },
      { q: "Can you handle drop-off in Old Town's narrow streets?", a: "Yes — our chauffeurs are familiar with Old Town's layout, hotel entrances and loading logistics." },
      { q: "Is pricing flat or metered?", a: "Flat and quoted before you book. Gratuity, tolls, parking and any other applicable charges are disclosed before confirmation." },
      { q: "What happens if my flight into IAD is delayed?", a: "We track your flight and adjust the pickup automatically, with 45 minutes of complimentary wait time on domestic arrivals and 60 on international." },
      { q: "Can a group ride together from IAD to Alexandria?", a: "Yes — our Sprinter Executive van seats up to 14 passengers with dedicated luggage space." },
      { q: "Would DCA be a faster option for an Alexandria trip?", a: "Often yes, if your flight serves DCA — we also run that route. We're happy to help you compare based on your specific itinerary." },
    ],
    ctaTitle: "Book Your IAD to Alexandria Transfer",
    ctaSubtitle: "Reserve a flight-tracked chauffeured ride from Dulles to Alexandria, VA. Call (877) 609-1919.",
  },

  "dca-to-annapolis": {
    metaTitle: "Reagan National (DCA) to Annapolis Car Service | 92 Limo",
    metaDescription:
      "Chauffeured transfers from Reagan National (DCA) to Annapolis, MD — flight tracking, flat rates, 24/7 chauffeurs. Call (877) 609-1919.",
    eyebrow: "DCA TO ANNAPOLIS",
    h1: "DCA Airport to Annapolis, MD Car Service",
    subtitle: "Flight-tracked chauffeured transfers between Ronald Reagan Washington National Airport and Annapolis, Maryland.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur meeting a traveler at Reagan National Airport for an Annapolis, MD transfer — 92 Limo Service",
    highlightsHeading: "Why Travelers Choose 92 Limo Service for DCA to Annapolis",
    intro: [
      "Annapolis sits roughly 35 to 45 minutes from Reagan National Airport via Route 50, a drive we run constantly for Naval Academy families, state government visitors, and travelers heading to Annapolis's downtown waterfront hotels and marinas.",
      "Every DCA to Annapolis transfer includes real-time flight tracking, so an early landing or a long delay never costs you a ride — your pickup adjusts automatically at no charge, with generous complimentary wait time built into every arrival.",
      "US Naval Academy events — commissioning week, parents' weekend, and home football games — bring a predictable wave of DCA arrivals, and our chauffeurs plan around the Academy's road closures and gate logistics rather than guessing at drop-off.",
      "Choose a Business Sedan (Mercedes E-Class) for a standard airport run, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van for a group traveling together to a wedding or event.",
      "Every trip is quoted as one flat, transparent price before you book — call (877) 609-1919 or reserve online, any hour of the day.",
    ],
    highlights: [
      { title: "Naval Academy Event Experience", desc: "Commissioning week, parents' weekend and game-day logistics handled routinely." },
      { title: "Flight Tracking", desc: "We monitor every arrival in real time and adjust your pickup automatically." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet you inside baggage claim with a name sign. Additional charge applies." },
      { title: "Downtown Annapolis Familiar", desc: "Chauffeurs who know the waterfront hotels, marinas, and historic district drop-off points." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the base fare, with all charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye landings and early departures handled around the clock." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Anne Arundel County",
        places: [
          { label: "Annapolis, MD", to: "/annapolis-limo-service" },
          { label: "Arnold, MD", to: "/arnold-limo-service" },
          { label: "Severna Park, MD", to: "/severna-park-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "BWI to Annapolis", to: "/bwi-to-annapolis" },
          { label: "Annapolis Wedding Limo Service", to: "/annapolis-wedding-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How long does the drive from DCA to Annapolis take?", a: "Typically 35 to 45 minutes via Route 50, depending on traffic. We build current conditions into your quoted pickup time." },
      { q: "Do you handle Naval Academy event traffic?", a: "Yes — commissioning week, parents' weekend and home football games are all regular bookings, and we plan around the Academy's road closures." },
      { q: "Is pricing flat or metered?", a: "Flat and quoted before you book. Gratuity, tolls, parking and any other applicable charges are disclosed before confirmation." },
      { q: "What happens if my flight into DCA is delayed?", a: "We track your flight and adjust the pickup automatically, with 45 minutes of complimentary wait time on domestic arrivals and 60 on international." },
      { q: "Would BWI be a better option for an Annapolis trip?", a: "Often yes, if your flight serves BWI — that route is typically a shorter drive. We're happy to help you compare based on your itinerary." },
      { q: "Can a group ride together from DCA to Annapolis?", a: "Yes — our Sprinter Executive van seats up to 14 passengers with dedicated luggage space." },
    ],
    ctaTitle: "Book Your DCA to Annapolis Transfer",
    ctaSubtitle: "Reserve a flight-tracked chauffeured ride from Reagan National to Annapolis, MD. Call (877) 609-1919.",
  },

  "dca-to-potomac": {
    metaTitle: "Reagan National (DCA) to Potomac, MD Car Service | 92 Limo",
    metaDescription:
      "Flat-rate chauffeured transfers from Reagan National (DCA) to Potomac, MD — flight tracking, 24/7 availability. Call (877) 609-1919.",
    eyebrow: "DCA TO POTOMAC",
    h1: "DCA Airport to Potomac, MD Car Service",
    subtitle: "Flight-tracked chauffeured transfers between Ronald Reagan Washington National Airport and Potomac, Maryland.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur meeting a traveler at Reagan National Airport for a Potomac, MD transfer — 92 Limo Service",
    highlightsHeading: "Why Travelers Choose 92 Limo Service for DCA to Potomac",
    intro: [
      "Potomac sits roughly 30 to 40 minutes from Reagan National Airport, typically via the Clara Barton Parkway or the Beltway depending on traffic, a route we run regularly for one of Montgomery County's larger-lot, higher-end residential communities.",
      "Every DCA to Potomac transfer includes real-time flight tracking, so an early landing or a long delay never costs you a ride — your pickup adjusts automatically at no charge, with generous complimentary wait time built into every arrival.",
      "Potomac's mix of corporate executives, embassy-adjacent households, and families hosting weddings or large events at home means our bookings here range from a single discreet sedan pickup to a Sprinter van bringing in guests for a private event.",
      "Choose a First Class Sedan (BMW 7 Series) for an executive arrival, a Premium SUV (Cadillac Escalade) for a family with luggage, or a Sprinter Executive van for a group traveling together.",
      "Every trip is quoted as one flat, transparent price before you book — call (877) 609-1919 or reserve online, any hour of the day.",
    ],
    highlights: [
      { title: "Clara Barton Parkway Route", desc: "A direct, chauffeur-planned route avoiding unnecessary Beltway exposure when conditions allow." },
      { title: "Flight Tracking", desc: "We monitor every arrival in real time and adjust your pickup automatically." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet you inside baggage claim with a name sign. Additional charge applies." },
      { title: "Discreet Executive & Private-Event Service", desc: "Experience with Potomac's corporate executives and private at-home events." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the base fare, with all charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye landings and early departures handled around the clock." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Montgomery County",
        places: [
          { label: "Potomac, MD", to: "/potomac-limo-service" },
          { label: "North Potomac, MD", to: "/north-potomac-limo-service" },
          { label: "Bethesda, MD", to: "/bethesda-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Montgomery County, MD Limo Service", to: "/montgomery-county-md-limo-service" },
          { label: "Embassy & Diplomatic Car Service — Washington DC", to: "/embassy-diplomatic-car-service-washington-dc" },
        ],
      },
    ],
    faqs: [
      { q: "How long does the drive from DCA to Potomac take?", a: "Typically 30 to 40 minutes via the Clara Barton Parkway or the Beltway, depending on traffic." },
      { q: "Is pricing flat or metered?", a: "Flat and quoted before you book. Gratuity, tolls, parking and any other applicable charges are disclosed before confirmation." },
      { q: "What happens if my flight into DCA is delayed?", a: "We track your flight and adjust the pickup automatically, with 45 minutes of complimentary wait time on domestic arrivals and 60 on international." },
      { q: "Can you bring guests in for a private event in Potomac?", a: "Yes — our Sprinter Executive van is a popular choice for bringing guests to private at-home events and weddings in Potomac." },
      { q: "Do you provide discreet service for executives and diplomats?", a: "Yes — our chauffeurs are experienced with Potomac's corporate and diplomatic community and the discretion those trips require." },
      { q: "Can a group ride together from DCA to Potomac?", a: "Yes — our Sprinter Executive van seats up to 14 passengers with dedicated luggage space." },
    ],
    ctaTitle: "Book Your DCA to Potomac Transfer",
    ctaSubtitle: "Reserve a flight-tracked chauffeured ride from Reagan National to Potomac, MD. Call (877) 609-1919.",
  },

  // ============================================================
  // NEW OCCASION / VERTICAL / LONG-DISTANCE PAGES (9)
  // ============================================================
  "pharma-biotech-car-service-maryland": {
    metaTitle: "Biotech & Pharma Car Service Maryland | 92 Limo",
    metaDescription:
      "Discreet corporate car service for Maryland's I-270 biotech & pharma corridor — visitor transport, roadshows, billing accounts. (877) 609-1919.",
    eyebrow: "BIOTECH & PHARMA CORPORATE TRAVEL",
    h1: "Biotech & Pharma Company Car Service — Maryland",
    subtitle: "Discreet, reliable chauffeured transportation for Maryland's biotech and pharmaceutical corridor — visiting scientists, executives, and board members.",
    image: IMAGES.corporate,
    alt: "Chauffeur assisting a biotech executive with a Maryland corporate car service — 92 Limo Service",
    highlightsHeading: "Why Maryland's Biotech & Pharma Companies Choose 92 Limo Service",
    intro: [
      "Maryland's I-270 corridor, running from Bethesda and Rockville up through Gaithersburg and Germantown, is one of the country's most concentrated biotech and life-sciences hubs, anchored by the NIH campus and a dense cluster of pharmaceutical, biotech and contract research companies. 92 Limo Service provides dedicated corporate car service to this corridor, moving visiting scientists, board members, and executives with the same discretion and punctuality a regulated industry expects.",
      "Visitor and site-visit transportation is a core part of this work — flying in a board member for a quarterly meeting, moving a visiting research partner between a hotel and a Gaithersburg campus, or coordinating a multi-stop day for a due-diligence team touring several facilities. We confirm each itinerary in advance and keep a chauffeur with the same vehicle for the full visit when requested.",
      "Investor roadshows and conference travel are another regular booking — biotech and pharma companies frequently move groups of executives and scientists to and from BWI, DCA and IAD for industry conferences, investor meetings, and partner visits, often on compressed, multi-city schedules where a missed connection has real cost.",
      "Confidentiality matters as much as punctuality in this sector. Our chauffeurs are trained to maintain a professional, low-key presence around sensitive conversations, and we can accommodate NDAs or specific confidentiality requirements for a standing corporate account.",
      "Set up a corporate account for consolidated monthly billing, a dedicated contact, and priority dispatch — call (877) 609-1919 or email info@92limo.com.",
    ],
    highlights: [
      { title: "I-270 Corridor Specialists", desc: "Daily familiarity with the Bethesda-to-Gaithersburg biotech and pharma campus corridor." },
      { title: "NIH-Area Experience", desc: "Visitor check-in procedures and campus logistics near the NIH Bethesda campus." },
      { title: "Confidential & Discreet", desc: "Chauffeurs trained for sensitive corporate and research-partner conversations." },
      { title: "Investor Roadshow Ready", desc: "Multi-stop, multi-city scheduling for conference and investor travel." },
      { title: "Corporate Billing", desc: "Consolidated monthly invoicing and itemized receipts for standing accounts." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Business Sedan — Mercedes E-Class",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "I-270 Biotech Corridor",
        places: [
          { label: "Bethesda, MD", to: "/bethesda-limo-service" },
          { label: "Rockville, MD", to: "/rockville-limo-service" },
          { label: "Gaithersburg, MD", to: "/gaithersburg-limo-service" },
          { label: "Germantown, MD", to: "/germantown-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Montgomery County, MD Limo Service", to: "/montgomery-county-md-limo-service" },
          { label: "Tech Company Car Service — Maryland", to: "/tech-company-car-service-maryland" },
          { label: "Healthcare Corporate Car Service — Maryland", to: "/healthcare-corporate-car-service-maryland" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve Maryland's biotech and pharma companies?", a: "Yes — the I-270 corridor from Bethesda through Gaithersburg and Germantown is a regular part of our corporate business." },
      { q: "Can you handle confidential site visits or due-diligence tours?", a: "Yes — our chauffeurs maintain a discreet, professional presence and can accommodate NDAs or specific confidentiality requirements for standing accounts." },
      { q: "Can you move an investor roadshow group between multiple stops in one day?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur with you for multi-stop, multi-city travel days." },
      { q: "Do you serve the NIH Bethesda campus?", a: "Yes — our chauffeurs are familiar with NIH-area visitor check-in procedures and campus access." },
      { q: "How do we set up a corporate account?", a: "Email info@92limo.com or call (877) 609-1919. We'll set up consolidated monthly billing, a dedicated contact and priority dispatch." },
      { q: "Which airports do you serve for conference travel?", a: "BWI, DCA and IAD are all served with flight tracking, suitable for executives flying to industry conferences and investor meetings." },
    ],
    ctaTitle: "Set Up Biotech & Pharma Corporate Car Service",
    ctaSubtitle: "Reserve discreet corporate transportation for Maryland's biotech corridor. Call (877) 609-1919.",
  },

  "retirement-party-limo-maryland": {
    metaTitle: "Retirement Party Limo Service Maryland | 92 Limo",
    metaDescription:
      "Chauffeured limo service for Maryland retirement parties — group transportation, flat rates, professional chauffeurs, 24/7. (877) 609-1919.",
    eyebrow: "RETIREMENT CELEBRATIONS",
    h1: "Retirement Party Limo Service — Maryland",
    subtitle: "Chauffeured limo and group transportation for retirement celebrations across Maryland, Washington DC and Northern Virginia.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV prepared for a Maryland retirement party — 92 Limo Service",
    highlightsHeading: "Why Families Choose 92 Limo Service for Retirement Celebrations",
    intro: [
      "A retirement party is one of the few milestone celebrations that spans a genuinely wide guest list — coworkers, longtime friends, and family of several generations — which makes coordinated transportation more useful than most people expect. 92 Limo Service provides chauffeured limo and Sprinter van service for retirement celebrations across Maryland, Washington DC and Northern Virginia, from an intimate dinner for the retiree and spouse to a full group outing with coworkers.",
      "The most common booking is straightforward: a comfortable sedan or SUV for the guest of honor and their spouse, picked up at home and delivered to the venue, with the chauffeur waiting through dinner and the toasts before driving them home at the end of the night — no one worrying about driving after a celebratory glass of wine.",
      "For a larger office celebration, our Sprinter Executive van keeps a group of coworkers together for the ride to and from a restaurant or event space, which is often simpler and more cost-effective than coordinating several individual rides or rideshares for a party that wants to arrive and leave together.",
      "Because the booking is hourly and as-directed, the evening can include a stop for photos, a favorite restaurant, or a second location without renegotiating the reservation — the car and chauffeur are yours for the time you book.",
      "Tell us the date, pickup and venue addresses, and roughly how many hours you need, and we'll confirm a flat, transparent quote before anything is charged.",
    ],
    highlights: [
      { title: "Guest-of-Honor Pickup", desc: "A comfortable sedan or SUV for the retiree and spouse, home to venue and back." },
      { title: "Coworker Group Transportation", desc: "Sprinter Executive van keeps an office party together for one coordinated ride." },
      { title: "Hourly, As-Directed Service", desc: "Multiple stops — dinner, photos, a second venue — under one simple reservation." },
      { title: "No One Has to Drive", desc: "A relaxed night out for everyone, including a celebratory toast, without a designated driver." },
      { title: "Professional Chauffeurs", desc: "Licensed, background-checked, and dressed for the occasion." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
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
          { label: "Birthday Limo & Party Transportation", to: "/birthday-celebrations" },
          { label: "Anniversary Limo & Chauffeur Service", to: "/anniversary-limo-service" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Can you pick up just the retiree and their spouse for a dinner?", a: "Yes — this is our most common retirement-party booking, a sedan or SUV home to the venue and back, with the chauffeur waiting through dinner." },
      { q: "Can a group of coworkers ride together?", a: "Yes — our Sprinter Executive van seats up to 14 and is a popular, cost-effective choice for office celebrations." },
      { q: "Is the booking hourly or a flat one-way trip?", a: "Most retirement parties book hourly, as-directed service, so the car and chauffeur can handle multiple stops without renegotiating the reservation." },
      { q: "How far in advance should we book?", a: "At least a few days ahead for a standard booking, earlier for a Friday or Saturday night during peak event season." },
      { q: "Can we add a stop for photos or a second location?", a: "Yes — tell us your plan when you book, or simply direct your chauffeur during the evening since the car is yours for the booked hours." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book a Retirement Party Limo",
    ctaSubtitle: "Reserve chauffeured transportation for a Maryland retirement celebration. Call (877) 609-1919.",
  },

  "college-tour-car-service-maryland-dc": {
    metaTitle: "College Tour Car Service Maryland & DC | 92 Limo",
    metaDescription:
      "Chauffeured college-tour transportation across Maryland, DC & Virginia campuses — flat rates, flexible multi-stop days. (877) 609-1919.",
    eyebrow: "COLLEGE TOUR TRANSPORTATION",
    h1: "College Tour Car Service — Maryland & DC",
    subtitle: "Chauffeured, multi-stop transportation for families touring college campuses across Maryland, Washington DC and Virginia.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan prepared for a Maryland college tour trip — 92 Limo Service",
    highlightsHeading: "Why Families Choose 92 Limo Service for College Tours",
    intro: [
      "A college tour day rarely involves just one campus — families visiting the DMV often string together two or three schools in a single trip, from the University of Maryland in College Park to Georgetown, American University, George Washington, Johns Hopkins, or a Virginia campus like George Mason. 92 Limo Service provides hourly, as-directed car service built specifically for this kind of multi-stop day, rather than booking and re-booking separate point-to-point rides.",
      "Because the reservation is hourly, your chauffeur waits at each campus through the information session and walking tour, then drives you directly to the next school without the uncertainty of finding parking or a rideshare near an unfamiliar campus center.",
      "Families flying in from out of state often combine an airport pickup at BWI, DCA or IAD with a multi-day campus tour itinerary — we plan the full schedule in advance, including hotel stops, so the whole visit runs as one coordinated trip rather than several separate bookings.",
      "A relaxed, unhurried ride between visits also gives families real time to debrief on each school while it's fresh, something that's harder to do while one parent is driving and navigating an unfamiliar city.",
      "Tell us your target schools, the order you'd like to visit them, and your travel dates, and we'll build a quote around the full day or multi-day itinerary.",
    ],
    highlights: [
      { title: "Multi-Campus Day Trips", desc: "One reservation covers several schools in a single day — no re-booking between stops." },
      { title: "DMV & Virginia Campus Coverage", desc: "UMD, Georgetown, American, GW, Johns Hopkins, George Mason and more." },
      { title: "Airport-to-Campus Coordination", desc: "Combine a BWI, DCA or IAD pickup with your full campus tour itinerary." },
      { title: "Hourly, As-Directed Service", desc: "Your chauffeur waits through each tour and info session, no clock-watching." },
      { title: "Comfortable, Unhurried Travel", desc: "Time between visits to talk through impressions while a parent isn't driving." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Midsize SUV — Lincoln Nautilus",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "University of Maryland Transportation", to: "/university-of-maryland-transportation" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
          { label: "Airport Car Service — BWI, DCA, IAD", to: "/airport-transportation" },
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you take us to multiple campuses in one day?", a: "Yes — this is exactly what hourly, as-directed service is built for. Your chauffeur waits at each stop and drives you directly to the next." },
      { q: "Can we combine an airport pickup with our college tour days?", a: "Yes — tell us your flight details and we'll build the full multi-day itinerary, including hotel stops, around one coordinated schedule." },
      { q: "Which campuses do you regularly serve?", a: "University of Maryland, Georgetown, American University, George Washington, Johns Hopkins, George Mason and most other DMV-area campuses." },
      { q: "How far in advance should we book a college tour trip?", a: "At least a few days ahead, earlier during peak spring and fall touring season when vehicles book up." },
      { q: "Is pricing hourly or per-destination?", a: "Hourly, as-directed — one simple rate covers the whole day's multi-stop itinerary rather than separate point-to-point fares." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge for the booked hours, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book a College Tour Car Service Day",
    ctaSubtitle: "Reserve chauffeured, multi-stop transportation for your campus tour. Call (877) 609-1919.",
  },

  "homecoming-limo-maryland": {
    metaTitle: "Homecoming Limo Service Maryland | 92 Limo",
    metaDescription:
      "Safe, supervised homecoming limo service across Maryland — parent-trusted chauffeurs, flat rates, group vehicles. Call (877) 609-1919.",
    eyebrow: "HOMECOMING",
    h1: "Homecoming Limo Service — Maryland",
    subtitle: "Safe, supervised limo and Sprinter transportation for Maryland high school homecoming dances and dinners.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV prepared for a Maryland homecoming group — 92 Limo Service",
    highlightsHeading: "Why Parents Trust 92 Limo Service for Homecoming",
    intro: [
      "Homecoming comes earlier in the school year than prom, but the same parent concerns apply: a group of teenagers headed to dinner and a dance, and a desire for safe, supervised transportation that doesn't involve a newly licensed driver navigating evening traffic with a full car. 92 Limo Service provides the same background-checked, professional chauffeurs for homecoming groups across Maryland that we provide for prom season.",
      "A typical homecoming booking is a group of 6 to 10 students splitting a Sprinter Executive van or a Premium SUV for dinner at a restaurant before the dance, with the vehicle on hand afterward for the ride home — parents coordinate pickup and drop-off addresses directly with us, and the chauffeur handles the group for the full booked window.",
      "Because homecoming groups are often smaller and less formally organized than a full prom group, we're flexible about vehicle size and timing — a Luxury SUV works well for a smaller group of four to six, while larger groups book the Sprinter Executive.",
      "Parents can book directly, confirm the exact pickup and drop-off schedule in advance, and reach dispatch directly if plans change during the evening.",
      "Every homecoming booking is quoted as one flat, transparent rate before the night begins — call (877) 609-1919 or reserve online.",
    ],
    highlights: [
      { title: "Parent-Trusted Chauffeurs", desc: "Licensed, background-checked drivers trained to supervise teen groups responsibly." },
      { title: "Right-Sized Vehicles", desc: "From a Luxury SUV for a small group to a Sprinter Executive van for a larger one." },
      { title: "Dinner & Dance Coordination", desc: "One booking covers dinner, the dance, and the ride home." },
      { title: "Parent-Coordinated Scheduling", desc: "Pickup and drop-off addresses and times confirmed directly with parents." },
      { title: "24/7 Dispatch", desc: "Reachable directly if evening plans change." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before the night begins, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Luxury SUV — Chevrolet Suburban",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Prom Limo Service", to: "/prom-transportation" },
          { label: "Prom Limo Maryland", to: "/prom-limo-maryland" },
          { label: "Graduation Limo Maryland", to: "/graduation-limo-maryland" },
          { label: "Birthday Limo & Party Transportation", to: "/birthday-celebrations" },
        ],
      },
    ],
    faqs: [
      { q: "How many students fit in one vehicle for homecoming?", a: "A Luxury SUV comfortably fits 5-6, and our Sprinter Executive van fits up to 14 — we'll help you pick based on your group size." },
      { q: "Can parents book and coordinate pickup directly?", a: "Yes — parents typically confirm the exact pickup and drop-off addresses and schedule directly with us when booking." },
      { q: "What's included in a homecoming booking?", a: "One flat rate covers the booked hours, which can include dinner beforehand, the dance, and the ride home." },
      { q: "Do your chauffeurs supervise the group?", a: "Our chauffeurs are licensed and background-checked and maintain a professional, responsible presence, though they are drivers, not chaperones — parents should still set clear expectations with their teens." },
      { q: "How far in advance should we book for homecoming?", a: "At least two to three weeks ahead, since vehicles book up quickly during homecoming season at area high schools." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge for the booked hours, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Homecoming Transportation",
    ctaSubtitle: "Reserve safe, supervised limo service for your group's homecoming night. Call (877) 609-1919.",
  },

  "baby-shower-limo-service-maryland": {
    metaTitle: "Baby & Bridal Shower Limo Service Maryland | 92 Limo",
    metaDescription:
      "Chauffeured group transportation for Maryland baby & bridal showers — comfortable SUVs & Sprinters, flat rates, 24/7. (877) 609-1919.",
    eyebrow: "BABY & BRIDAL SHOWERS",
    h1: "Baby & Bridal Shower Limo Service — Maryland",
    subtitle: "Chauffeured SUV and Sprinter van transportation for Maryland baby showers, bridal showers, and the group celebrations around them.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV prepared for a Maryland baby shower group — 92 Limo Service",
    highlightsHeading: "Why Groups Choose 92 Limo Service for Showers",
    intro: [
      "Baby and bridal showers rarely involve just one address — a group of friends or family often gathers at one home before heading together to a restaurant, a venue, or a planned activity like a winery or spa afternoon, and coordinating everyone's individual cars (or rideshares) is often the most stressful part of planning the day. 92 Limo Service provides chauffeured SUV and Sprinter van service that keeps the whole group together for the ride, so the host and guest of honor can focus on the celebration instead of the logistics.",
      "A common booking is a Premium SUV or Luxury SUV for the mom-to-be or bride-to-be and her closest circle, with a Sprinter Executive van available when the guest list is larger — both vehicles keep the group together rather than splitting across multiple cars.",
      "Because bookings are hourly and as-directed, a shower day can include a stop at the host's home, a restaurant for brunch, and a planned activity afterward, all under one reservation, with the chauffeur waiting through each stop.",
      "Some groups pair a shower celebration with a chauffeured trip to Maryland wine country or Loudoun County's wineries for the afternoon — ask about combining the two when you book.",
      "Tell us the date, pickup and stop addresses, and roughly how many hours you'll need, and we'll confirm a flat, transparent quote before anything is charged.",
    ],
    highlights: [
      { title: "Keep the Group Together", desc: "One vehicle for the whole party instead of splitting across multiple cars or rideshares." },
      { title: "Right-Sized Vehicles", desc: "SUVs for smaller groups, Sprinter Executive vans for larger guest lists." },
      { title: "Hourly, As-Directed Service", desc: "Multiple stops — home, brunch, an activity — under one simple reservation." },
      { title: "Wine Tour Add-On Available", desc: "Pair your shower celebration with a Maryland or Loudoun County winery afternoon." },
      { title: "Professional Chauffeurs", desc: "Licensed, background-checked, and attentive without being intrusive." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Luxury SUV — Chevrolet Suburban",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Wine Tour Chauffeur Service", to: "/wine-tours" },
          { label: "Loudoun County Wine Country Limo Service", to: "/loudoun-wine-country-limo-service" },
          { label: "Birthday Limo & Party Transportation", to: "/birthday-celebrations" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
        ],
      },
    ],
    faqs: [
      { q: "Can one vehicle fit our whole shower group?", a: "Often yes — our Luxury SUV and Premium SUV seat 5-6, and the Sprinter Executive van seats up to 14 for larger guest lists." },
      { q: "Can we include multiple stops in one booking?", a: "Yes — a shower day can include the host's home, a restaurant, and a planned activity, all under one hourly, as-directed reservation." },
      { q: "Can we combine a shower with a wine tour?", a: "Yes — many groups pair a shower celebration with an afternoon at Maryland or Loudoun County wineries. Ask when you book." },
      { q: "How far in advance should we book?", a: "At least a week or two ahead, earlier for a weekend during peak spring and fall shower season." },
      { q: "Is pricing per-person or per-vehicle?", a: "Per vehicle, quoted as a flat rate for the booked hours — not per passenger." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge for the booked hours, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Baby or Bridal Shower Transportation",
    ctaSubtitle: "Reserve chauffeured group transportation for your Maryland shower celebration. Call (877) 609-1919.",
  },

  "loudoun-wine-country-limo-service": {
    metaTitle: "Loudoun Wine Country Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured wine-tour transportation through Loudoun County, VA — Leesburg, Purcellville & Middleburg wineries. Call (877) 609-1919.",
    eyebrow: "LOUDOUN COUNTY WINE COUNTRY",
    h1: "Loudoun County Wine Country Limo Service",
    subtitle: "Chauffeured wine-tour transportation through one of the East Coast's densest winery clusters — Leesburg, Purcellville and Middleburg, Virginia.",
    image: IMAGES.wineTour,
    alt: "Luxury chauffeured SUV prepared for a Loudoun County, VA wine tour — 92 Limo Service",
    highlightsHeading: "Why Groups Choose 92 Limo Service for Loudoun Wine Country",
    intro: [
      "Loudoun County, Virginia has one of the densest clusters of wineries on the East Coast, spread across the rolling countryside around Leesburg, Purcellville and Middleburg — genuinely different terrain from Maryland's Frederick and Carroll County vineyards, and a popular day trip for groups based anywhere in the DMV. 92 Limo Service provides dedicated chauffeured transportation through this wine region, with a driver who waits at each stop rather than treating the day as a single point-to-point drop-off.",
      "Because the booking is hourly and as-directed, a typical Loudoun wine day includes three or four tastings planned around drive time between properties, with your chauffeur handling the route, parking, and timing so your group can focus entirely on the wine rather than logistics or who's driving.",
      "Bachelorette parties, birthday celebrations, and bridal or baby showers are especially common bookings for this route, and our Sprinter Executive van keeps a larger group together for the full day rather than splitting across multiple cars.",
      "Groups flying in from out of town often combine an IAD airport pickup with a same-day or next-day Loudoun wine tour, since Dulles sits closer to Loudoun's wine country than any other regional airport.",
      "Tell us which wineries you'd like to visit, or ask for a recommended itinerary, and we'll build a quote around the full day.",
    ],
    highlights: [
      { title: "Dense Winery Cluster Access", desc: "Leesburg, Purcellville and Middleburg's wine country, all within a single day's itinerary." },
      { title: "Hourly, As-Directed Touring", desc: "Your chauffeur waits at each winery and plans the route between stops." },
      { title: "Bachelorette & Celebration Favorite", desc: "A popular choice for bachelorette parties, birthdays and bridal showers." },
      { title: "IAD Airport Pairing", desc: "Dulles sits closest to Loudoun wine country of any regional airport — combine your arrival with the tour." },
      { title: "Right-Sized Vehicles", desc: "SUVs for smaller groups, Sprinter Executive vans for larger parties." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Luxury SUV — Chevrolet Suburban",
      "Premium SUV — Cadillac Escalade",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Loudoun County",
        places: [
          { label: "Leesburg, VA", to: "/leesburg-va-limo-service" },
          { label: "Ashburn, VA", to: "/ashburn-va-limo-service" },
          { label: "Sterling, VA", to: "/sterling-va-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Wine Tour Chauffeur Service", to: "/wine-tours" },
          { label: "Wine Tour Limo — Maryland", to: "/wine-tour-limo-maryland" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Bachelorette Party Limo", to: "/bachelorette-party-limo" },
        ],
      },
    ],
    faqs: [
      { q: "Which wineries do you cover in Loudoun County?", a: "We regularly serve the Leesburg, Purcellville and Middleburg wine regions — tell us your preferred wineries or ask for a recommended itinerary." },
      { q: "How many wineries can we visit in one day?", a: "Most groups comfortably fit three to four tastings in a day, planned around realistic drive time between properties." },
      { q: "Can we combine an IAD airport pickup with our wine tour?", a: "Yes — Dulles is the closest regional airport to Loudoun wine country, and many groups combine their arrival with a same-day or next-day tour." },
      { q: "Is this a popular bachelorette party option?", a: "Yes — Loudoun wine country is one of our most-booked bachelorette and birthday celebration routes." },
      { q: "How far in advance should we book?", a: "At least a week or two ahead, earlier during peak spring and fall wine-tour season." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge for the booked hours, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book a Loudoun Wine Country Tour",
    ctaSubtitle: "Reserve chauffeured transportation through Loudoun County wine country. Call (877) 609-1919.",
  },

  "senior-car-service-maryland": {
    metaTitle: "Senior Private Car Service Maryland | 92 Limo",
    metaDescription:
      "Patient, professional private car service for Maryland seniors — appointments, family visits & errands. Not medical transport. (877) 609-1919.",
    eyebrow: "SENIOR TRANSPORTATION",
    h1: "Senior Car Service — Maryland",
    subtitle: "Comfortable, patient private car service for Maryland seniors who are mobile but prefer not to drive — appointments, family visits, and errands.",
    image: IMAGES.sedan,
    alt: "Chauffeur assisting a senior passenger with a Maryland private car service — 92 Limo Service",
    highlightsHeading: "Why Families Choose 92 Limo Service for Senior Transportation",
    intro: [
      "Many Maryland seniors are entirely mobile and capable of traveling independently but would simply rather not drive — to a doctor's appointment, a family gathering, or a weekly errand run — and don't want to rely on family members who can't always be available. 92 Limo Service provides private, professional car service built around that need: patient chauffeurs, a comfortable vehicle, and a reliable schedule, without the uncertainty of a different rideshare driver every time.",
      "To be direct about what this is and isn't: this is private, non-medical transportation. Our chauffeurs are professional drivers, not medically trained, and our vehicles are not wheelchair-accessible or equipped for stretcher transport or medical monitoring. A chauffeur can offer a hand for minor support getting in or out of the car, the same courtesy extended to any passenger, but cannot provide physical transfer assistance. A passenger who needs a wheelchair-accessible vehicle, medical monitoring, or hands-on assistance should book a licensed non-emergency medical transport (NEMT) provider instead — we're glad to say so directly rather than accept a booking we're not equipped for.",
      "Where we fit well: a senior heading to a routine doctor's appointment who can get in and out of a standard sedan unassisted or with a companion's help, a parent visiting family across the state without wanting to drive unfamiliar roads, or a weekly or recurring errand schedule where the same familiar chauffeur each time makes a real difference in comfort and consistency.",
      "Families coordinating care from out of state often set up a recurring arrangement — the same chauffeur handling several trips a month — so the senior has a consistent, familiar face rather than a new driver every visit.",
      "Tell us about the passenger's mobility and any specific needs when you book, so we can plan an appropriate pickup and confirm honestly whether the trip is one we can safely handle.",
    ],
    highlights: [
      { title: "Patient, Professional Chauffeurs", desc: "Unhurried pickups and a courteous hand getting in and out of the vehicle." },
      { title: "Consistent, Familiar Service", desc: "Set up a recurring arrangement with the same chauffeur for appointments and visits." },
      { title: "Honest About Limits", desc: "Not medical transport — no wheelchair lift, stretcher capability, or medical monitoring. We'll say so plainly." },
      { title: "Comfortable Vehicles", desc: "Sedans and SUVs with easy entry and a smooth, unhurried ride." },
      { title: "Flexible Scheduling", desc: "Appointments, family visits, and errands booked individually or on a recurring basis." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Midsize SUV — Lincoln Nautilus",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Hospital Transportation — Maryland", to: "/hospital-transportation-maryland" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Is this medical transportation?", a: "No — this is private, non-medical car service for mobile seniors who simply prefer not to drive. For wheelchair-accessible vehicles, stretcher transport, or medical monitoring, a licensed NEMT provider is the right choice." },
      { q: "Can a chauffeur help a passenger get in and out of the vehicle?", a: "A chauffeur can offer a hand for minor support, the same courtesy extended to any passenger, but cannot provide physical transfer assistance or lifting." },
      { q: "Can we set up a recurring arrangement for regular appointments?", a: "Yes — many families set up a recurring schedule with the same chauffeur each time, which keeps the experience familiar and consistent for the passenger." },
      { q: "What should we tell you when booking?", a: "Let us know the passenger's mobility level and any equipment they're bringing (a walker or cane, for example) so we can plan the pickup appropriately." },
      { q: "Do you serve hospital discharge pickups?", a: "Yes, for a mobile patient cleared to travel by private car who simply wants a calm, unhurried ride home — see our hospital transportation page for details." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Senior Car Service",
    ctaSubtitle: "Reserve comfortable, reliable private transportation for a Maryland senior. Call (877) 609-1919.",
  },

  "wedding-guest-shuttle-service-maryland": {
    metaTitle: "Wedding Guest Shuttle Service Maryland | 92 Limo",
    metaDescription:
      "Hotel-to-venue wedding guest shuttle service across Maryland — Sprinter vans, flat group rates, day-of coordination. (877) 609-1919.",
    eyebrow: "WEDDING GUEST SHUTTLES",
    h1: "Wedding Guest Shuttle Service — Maryland",
    subtitle: "Coordinated hotel-to-venue shuttle service for wedding guests across Maryland, Washington DC and Northern Virginia.",
    image: IMAGES.wedding,
    alt: "Mercedes Sprinter shuttle van prepared for a Maryland wedding guest shuttle — 92 Limo Service",
    highlightsHeading: "Why Wedding Planners Choose 92 Limo Service for Guest Shuttles",
    intro: [
      "Transportation for the couple and bridal party is only half of a wedding's logistics — the other half is getting dozens of guests safely between a hotel block and the venue without a parking-lot bottleneck or guests driving unfamiliar roads after an open bar. 92 Limo Service provides dedicated guest-shuttle service, planned separately from (and alongside) the couple's own transportation, built specifically for wedding planners and coordinators managing a full guest list.",
      "A typical guest shuttle runs continuous loops between a hotel block and the venue on a set schedule — ceremony arrival, post-ceremony cocktail hour, and the end-of-night return — with one or more Sprinter Executive vans sized to your guest count rather than a single vehicle trying to do too much.",
      "We work directly with your wedding planner or day-of coordinator to build the shuttle schedule around your actual timeline, including last-minute adjustments if the reception runs long or an unexpected weather delay shifts the schedule.",
      "Guest shuttles are quoted separately from couple and bridal-party transportation, so you can book exactly the coverage you need — a single van for a smaller guest list, or multiple vehicles running simultaneous loops for a larger wedding.",
      "Tell us your hotel block, venue address, estimated guest count, and timeline, and we'll build a shuttle plan and flat quote around it.",
    ],
    highlights: [
      { title: "Continuous Loop Scheduling", desc: "Hotel-to-venue shuttles running on a set schedule through ceremony, cocktail hour, and departure." },
      { title: "Planner & Coordinator Coordination", desc: "We work directly with your wedding planner to build the shuttle timeline." },
      { title: "Sized to Your Guest List", desc: "One Sprinter Executive van or several, scaled to your actual headcount." },
      { title: "Flexible, Day-Of Adjustments", desc: "Schedule changes handled in real time if the reception runs long." },
      { title: "Separate From Couple's Transportation", desc: "Book exactly the guest coverage you need alongside your own wedding-day car." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Sprinter Executive — Mercedes Sprinter",
      "Sprinter Shuttle — Mercedes Sprinter",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Wedding Limo & Chauffeur Service", to: "/wedding-transportation" },
          { label: "Wedding Limo Maryland", to: "/wedding-limo-maryland" },
          { label: "Howard County Wedding Limo", to: "/wedding-limo-howard-county-md" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Is guest shuttle service separate from the couple's transportation?", a: "Yes — guest shuttles are quoted and scheduled separately, so you can book exactly the coverage your guest list needs alongside the couple's own vehicle." },
      { q: "How many vans do we need for our guest list?", a: "It depends on headcount and your venue's distance from the hotel block — tell us your numbers and we'll recommend the right number of vehicles." },
      { q: "Do you work directly with our wedding planner?", a: "Yes — we coordinate the shuttle schedule directly with your planner or day-of coordinator, including any last-minute timeline changes." },
      { q: "What if the reception runs longer than planned?", a: "We build flexibility into the return-shuttle schedule and stay in contact with your coordinator to adjust in real time." },
      { q: "How far in advance should we book guest shuttles?", a: "As early as possible once your venue and hotel block are set — peak wedding season Saturdays book out weeks or months ahead." },
      { q: "What does the quoted rate include?", a: "A flat rate for the vehicles and hours booked, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Wedding Guest Shuttle Service",
    ctaSubtitle: "Reserve coordinated hotel-to-venue shuttles for your Maryland wedding. Call (877) 609-1919.",
  },

  "maryland-to-virginia-beach-car-service": {
    metaTitle: "Maryland to Virginia Beach Car Service | 92 Limo",
    metaDescription:
      "Private long-distance chauffeured car service from Maryland to Virginia Beach — flat rate, door-to-door, 24/7. Call (877) 609-1919.",
    eyebrow: "LONG-DISTANCE TRAVEL",
    h1: "Maryland to Virginia Beach Car Service",
    subtitle: "Private, door-to-door chauffeured car service between Maryland and Virginia Beach, Virginia — one flat rate for the whole trip.",
    image: IMAGES.longDistance,
    alt: "Luxury chauffeured sedan prepared for a Maryland to Virginia Beach long-distance trip — 92 Limo Service",
    highlightsHeading: "Why Travelers Choose 92 Limo Service for Maryland to Virginia Beach",
    intro: [
      "Virginia Beach is roughly a three to four hour drive from the Baltimore-Washington corridor, a popular weekend and summer destination that most car services won't touch. 92 Limo Service runs this route as a scheduled long-distance transfer, the same way we handle trips to New York and Philadelphia, with one flat, pre-quoted rate for the whole drive instead of a meter running for hours.",
      "Family beach weekends are the most common booking — door-to-door service from your Maryland home directly to a Virginia Beach rental or hotel, with no rental car, no parking hassle at the destination, and a comfortable ride the whole way for a full family with luggage.",
      "Military families connected to the Hampton Roads naval bases are another steady source of bookings, along with travelers combining a Virginia Beach weekend with a stop in Williamsburg or Norfolk along the way.",
      "Because the trip runs several hours, we treat Virginia Beach bookings as confirmed reservations, with the pickup and return schedule set in advance and a chauffeur familiar with the I-95/I-64 corridor and its predictable summer beach-traffic patterns.",
      "Every Virginia Beach trip is quoted as one flat, transparent rate for the one-way or round trip — call to confirm your exact pickup address and travel dates before booking.",
    ],
    highlights: [
      { title: "True Long-Distance Service", desc: "One flat, pre-quoted rate for the full Maryland-to-Virginia Beach trip." },
      { title: "Door-to-Door Convenience", desc: "No rental car and no parking hassle at your Virginia Beach destination." },
      { title: "Hampton Roads Military Families", desc: "Familiar with Naval Station Norfolk-area family travel patterns." },
      { title: "Williamsburg & Norfolk Stops Available", desc: "Combine your Virginia Beach trip with a stop along the I-64 corridor." },
      { title: "Reservation-Based Scheduling", desc: "Confirmed pickup and return times set well in advance." },
      { title: "Flat, Transparent Pricing", desc: "One quote for the full trip, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Long-Distance Private Car Service", to: "/long-distance-transportation" },
          { label: "Baltimore to New York Limo", to: "/baltimore-to-new-york-limo" },
          { label: "Baltimore to Philadelphia Limo", to: "/baltimore-to-philadelphia-limo" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Do you really drive as far as Virginia Beach?", a: "Yes — it's a genuine long-distance route, roughly three to four hours from the Baltimore-Washington area, quoted as one flat rate for the full trip." },
      { q: "Is this cheaper than renting a car for the weekend?", a: "For many families, yes once you factor in a rental car, gas, and the stress of unfamiliar driving — and you get a comfortable, chauffeured ride the entire way instead." },
      { q: "Can you stop in Williamsburg or Norfolk along the way?", a: "Yes — tell us when you book and we'll plan the stop into your itinerary and quoted rate." },
      { q: "Do you serve Hampton Roads military families?", a: "Yes — we regularly handle trips connected to Naval Station Norfolk and the surrounding Hampton Roads military community." },
      { q: "How far in advance should I book a Virginia Beach trip?", a: "At least a few days ahead when possible, earlier during peak summer beach season when vehicles book up." },
      { q: "What does the quoted rate cover?", a: "One flat price for the entire one-way or round trip, with gratuity, tolls and any other applicable charges disclosed before you confirm." },
    ],
    ctaTitle: "Book Maryland to Virginia Beach Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeured trip between Maryland and Virginia Beach. Call (877) 609-1919.",
  },

  "bar-bat-mitzvah-limo-service-maryland": {
    metaTitle: "Bar & Bat Mitzvah Limo Service Maryland | 92 Limo",
    metaDescription:
      "Chauffeured limo & Sprinter service for Maryland bar & bat mitzvahs — teen-friendly, parent-trusted, flat rates. Call (877) 609-1919.",
    eyebrow: "BAR & BAT MITZVAH",
    h1: "Bar & Bat Mitzvah Limo Service — Maryland",
    subtitle: "Chauffeured limo and Sprinter transportation for bar and bat mitzvah celebrations across Maryland, Washington DC and Northern Virginia.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV prepared for a Maryland bar mitzvah celebration — 92 Limo Service",
    highlightsHeading: "Why Families Choose 92 Limo Service for Bar & Bat Mitzvahs",
    intro: [
      "A bar or bat mitzvah typically involves moving between the synagogue service and a separate reception venue, often with family flying in from out of town and a group of the honoree's friends needing their own coordinated ride to the party. 92 Limo Service provides chauffeured transportation for every part of that day — the family's car, out-of-town guest airport pickups, and group transportation for the honoree's friends.",
      "The most common booking is a Premium SUV or sedan for the immediate family, picked up at home, taken to the synagogue, and driven to the reception venue afterward, with the chauffeur handling the full day's schedule as one reservation.",
      "For the honoree's friend group, our Sprinter Executive van is a popular choice — teen-friendly, spacious, and a genuinely exciting part of the celebration for a group of 12-to-13-year-olds arriving together rather than being dropped off individually by parents.",
      "Out-of-town family flying in for the celebration is another regular booking, and we coordinate flight tracking and airport pickup at BWI, DCA or IAD as part of the same weekend's transportation plan.",
      "Tell us your synagogue and venue addresses, guest count, and timeline, and we'll build a flat, transparent quote around the full celebration.",
    ],
    highlights: [
      { title: "Full-Day Family Coordination", desc: "Synagogue service to reception venue, planned as one seamless reservation." },
      { title: "Teen-Friendly Group Transportation", desc: "Sprinter Executive van for the honoree's friend group — a memorable part of the celebration." },
      { title: "Out-of-Town Guest Pickups", desc: "Flight-tracked airport transfers for family flying in from out of state." },
      { title: "Professional, Punctual Chauffeurs", desc: "Licensed, background-checked, and dressed appropriately for a formal celebration." },
      { title: "Flexible Vehicle Sizing", desc: "From a single sedan for the family to multiple vehicles for a larger guest list." },
      { title: "Flat, Transparent Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
    ],
    vehicles: [
      "Premium SUV — Cadillac Escalade",
      "Business Sedan — Mercedes E-Class",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Birthday Limo & Party Transportation", to: "/birthday-celebrations" },
          { label: "Quinceanera & Sweet 16 Limousine Maryland", to: "/blog/quinceanera-sweet-16-limousine-maryland" },
          { label: "Airport Car Service — BWI, DCA, IAD", to: "/airport-transportation" },
          { label: "Maryland Car Service", to: "/car-service-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Can you handle both the synagogue service and the reception venue?", a: "Yes — this is our most common bar/bat mitzvah booking, planned as one reservation covering the full day's schedule." },
      { q: "Is a Sprinter van appropriate for a group of young teens?", a: "Yes — our Sprinter Executive van is a popular, teen-friendly choice for the honoree's friend group arriving together at the reception." },
      { q: "Can you pick up out-of-town family from the airport?", a: "Yes — we coordinate flight-tracked airport pickups at BWI, DCA or IAD as part of the same weekend's transportation plan." },
      { q: "How far in advance should we book?", a: "At least a few weeks ahead, since bar and bat mitzvah season weekends book up vehicles quickly." },
      { q: "Can we book multiple vehicles for a larger celebration?", a: "Yes — we can coordinate several vehicles for the family, out-of-town guests, and the friend group simultaneously." },
      { q: "What does the quoted rate include?", a: "A flat base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Bar & Bat Mitzvah Transportation",
    ctaSubtitle: "Reserve chauffeured transportation for your Maryland bar or bat mitzvah celebration. Call (877) 609-1919.",
  },
};
