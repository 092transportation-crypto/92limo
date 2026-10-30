// SEO round-5 push (2026-10-21), batch 9 — 10 new hand-written landing pages.
// Same shape as MARYLAND_LANDING_PAGES / MARYLAND_BATCH3-8_PAGES (see
// marylandPages.js header). Merged into LANDING_PAGES by src/lib/landingPages.js.
//
// Five industry-specific corporate pages (healthcare, law firms, tech
// companies, government/defense contractors, finance) that don't fit the
// city-shaped template in scripts/generateLandingPages.js, so — like the
// existing maryland-corporate-car-service / maryland-prom-limo pages — they
// are hand-written here rather than generated. One event-venue page (Pier
// Six Pavilion, not yet covered by any existing landing page or blog post).
// Four new city/county+service combinations not previously covered:
// Howard County wedding transportation, Tysons Corner corporate transport,
// Frederick County wine touring (a landing page to pair with the existing
// blog-only coverage), and statewide funeral/memorial limousine service.
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

export const MARYLAND_BATCH9_PAGES = {
  // ---------------------------------------------------- HEALTHCARE CORPORATE
  "healthcare-corporate-car-service-maryland": {
    metaTitle: "Healthcare Corporate Car Service | 92 Limo Service",
    metaDescription:
      "Chauffeured transportation for hospitals, biotech & life sciences across Maryland's NIH, Walter Reed & Johns Hopkins corridors. Call (877) 609-1919.",
    eyebrow: "HEALTHCARE CORPORATE CAR SERVICE — MARYLAND",
    h1: "Healthcare Corporate Car Service in Maryland",
    subtitle: "Chauffeured transportation for hospitals, biotech and life-sciences organizations across the NIH, Walter Reed and Johns Hopkins corridors.",
    image: IMAGES.suv,
    alt: "Luxury chauffeured SUV serving a Maryland healthcare and biotech corporate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Supports Maryland Healthcare & Life Sciences",
    intro: [
      "Maryland's healthcare and life-sciences sector runs on a tight, often confidential travel calendar — visiting physicians between NIH and Walter Reed in Bethesda, researchers moving between Johns Hopkins and the University of Maryland Medical Center in Baltimore, and biotech executives flying in and out of BWI for a single day of board meetings. 92 Limo Service provides chauffeured corporate transportation built around that calendar, with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer.",
      "We regularly serve the NIH campus and Walter Reed National Military Medical Center in Bethesda, Johns Hopkins Hospital and the Johns Hopkins Bayview campus in Baltimore, the University of Maryland Medical Center downtown, and the Frederick biotech corridor around Fort Detrick and the National Cancer Institute's satellite campus. Knowing each campus's visitor-check-in process and loading zone is what turns a nice vehicle into a reliable one for a traveler who has one hour between flight and meeting.",
      "Each booking is planned around visiting-physician and researcher pickups, board and conference travel tied to the Baltimore Convention Center's life-sciences events, and recurring executive commutes between Maryland campuses and Washington. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout — demand peaks around major conference weeks, so reserve early for those dates.",
      "Choose a Luxury SUV (Chevrolet Suburban) or Premium SUV (Lincoln Navigator) for an executive with bags, a Business Sedan (Mercedes E-Class) for a single visiting physician, or a Sprinter Executive van for a research team traveling together — and mix vehicles under one reservation.",
      "Confidentiality is standard practice for every trip, not an add-on: conversations and destinations stay private, and trip details are shared only with the people who booked. Consolidated monthly invoicing with itemized receipts and a dedicated account contact keep hospital and biotech finance teams comfortable with recurring travel.",
    ],
    highlights: [
      { title: "Campuses We Know", desc: "NIH and Walter Reed in Bethesda, Johns Hopkins and UMMC in Baltimore, and the Fort Detrick/Frederick biotech corridor are regular stops." },
      { title: "Confidential by Default", desc: "Conversations and destinations stay private, shared only with the people who booked the trip." },
      { title: "Full Fleet, One Booking", desc: "Sedans, SUVs and Sprinter vans coordinated together for a visiting research team or delegation." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "Itinerary Confirmed", desc: "A named chauffeur and a confirmed timeline the day before — important when a visiting physician has one hour between flight and meeting." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Premium SUV — Lincoln Navigator",
      "Business Sedan — Mercedes E-Class",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Campuses & Destinations",
        places: [
          { label: "NIH and Walter Reed in Bethesda" },
          { label: "Johns Hopkins Hospital & Bayview, Baltimore" },
          { label: "University of Maryland Medical Center" },
          { label: "Fort Detrick / Frederick biotech corridor" },
          { label: "Baltimore Convention Center (life-sciences conferences)" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Financial Services Car Service — Maryland & DC", to: "/financial-services-car-service-maryland-dc" },
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "Bethesda Limo Service", to: "/bethesda-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do your chauffeurs understand hospital and campus visitor procedures?", a: "Yes. We regularly serve NIH, Walter Reed, Johns Hopkins and UMMC, and our chauffeurs know each campus's visitor check-in, loading zone and the fastest route between them." },
      { q: "Is confidentiality handled differently for healthcare clients?", a: "Confidentiality is standard practice for every 92 Limo Service trip — conversations and destinations stay private and are shared only with the people who booked." },
      { q: "Can you coordinate transportation for a visiting research team or delegation?", a: "Yes. Teams and delegations are coordinated as a single reservation with multiple vehicles arriving together — sedans for individuals, SUVs or Sprinters for groups." },
      { q: "How far in advance should we book for a conference week?", a: "Two to four weeks ahead for major life-sciences conference weeks at the Baltimore Convention Center, since SUVs and Sprinters book first for those dates." },
      { q: "Can our hospital or biotech company set up a corporate account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Book Healthcare Corporate Car Service",
    ctaSubtitle: "Reserve discreet, confirmed transportation for physicians, researchers and executives. Call (877) 609-1919.",
  },

  // ---------------------------------------------------------- LAW FIRM
  "law-firm-car-service-maryland-dc": {
    metaTitle: "Law Firm Car Service | Maryland & DC | 92 Limo Service",
    metaDescription:
      "Discreet chauffeured transportation for attorneys, clients & opposing counsel across Maryland & DC courthouses and firms. Call (877) 609-1919.",
    eyebrow: "LAW FIRM CAR SERVICE — MARYLAND & DC",
    h1: "Law Firm Car Service in Maryland & DC",
    subtitle: "Discreet chauffeured transportation for attorneys, clients and opposing counsel across the Baltimore-Washington legal corridor.",
    image: IMAGES.sClassFirst,
    alt: "First Class Sedan serving a Maryland or DC law firm client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Law Firm Car Service",
    intro: [
      "92 Limo Service provides chauffeured transportation for law firms across Baltimore, Washington DC, Annapolis and the suburban Maryland and Northern Virginia courthouses, with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer.",
      "We regularly serve the U.S. District Court for Maryland in Baltimore and Greenbelt, DC Superior Court and the federal courthouses on Constitution Avenue, Anne Arundel County Circuit Court in Annapolis, and the downtown Baltimore and K Street firm offices clients travel between before and after a hearing. Knowing which courthouse entrance avoids the security line and which firm's building has the awkward loading dock is what turns a nice vehicle into a reliable one on a trial day.",
      "Each booking is planned around multi-day trial schedules, client and opposing-counsel pickups from BWI, DCA and IAD, deposition travel, and partner commutes between Baltimore and Washington offices. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout a trial week.",
      "Choose a First Class Sedan (BMW 7 Series) for a partner or visiting client, a Premium SUV (Lincoln Navigator) for a client with substantial document boxes, or a Sprinter Executive van for a full litigation team traveling together — and mix vehicles under one reservation for a multi-day trial.",
      "Discretion is standard practice, not an add-on: conversations and destinations stay private, and the same chauffeur can be requested for a full trial week so a client or opposing party sees a consistent, professional presence throughout. Consolidated monthly invoicing with itemized receipts keeps firm billing and client-matter accounting straightforward.",
    ],
    highlights: [
      { title: "Courthouses We Know", desc: "U.S. District Court Maryland (Baltimore and Greenbelt), DC Superior and federal courthouses, and Anne Arundel County Circuit Court in Annapolis are regular stops." },
      { title: "Discretion by Default", desc: "Conversations and destinations stay private — a standard practice, not a special request." },
      { title: "Same Chauffeur for Trial Week", desc: "Request a consistent chauffeur across a multi-day trial for continuity and a professional first impression." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation — straightforward for client-matter billing." },
      { title: "24/7 Dispatch", desc: "Early court calls and last-minute schedule changes handled by phone or text." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Courthouses & Firm Districts",
        places: [
          { label: "U.S. District Court Maryland (Baltimore & Greenbelt)" },
          { label: "DC Superior Court & federal courthouses" },
          { label: "Anne Arundel County Circuit Court, Annapolis" },
          { label: "Downtown Baltimore legal district" },
          { label: "K Street, Washington DC" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Client & Visitor Transportation for Maryland Law Firms", to: "/blog/law-firm-client-transportation-maryland" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Annapolis Limo Service", to: "/annapolis-limo-service" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Financial Services Car Service — Maryland & DC", to: "/financial-services-car-service-maryland-dc" },
        ],
      },
    ],
    faqs: [
      { q: "Can we request the same chauffeur for a multi-day trial?", a: "Yes. We accommodate the request whenever the schedule allows, which gives your firm, your client and opposing counsel a consistent, professional presence throughout the trial week." },
      { q: "Do you handle client and opposing-counsel airport pickups?", a: "Yes — BWI, DCA and IAD pickups are flight-tracked and coordinated with your firm's schedule, with meet-and-greet available for clients who prefer to be met inside baggage claim." },
      { q: "How is discretion handled for sensitive matters?", a: "Discretion is standard practice for every trip. Conversations and destinations stay private and are shared only with the people who booked." },
      { q: "How does billing work for firm or client-matter accounts?", a: "Consolidated monthly invoicing with itemized receipts, which drops directly into client-matter billing. Email info@92limo.com to set up a firm account." },
      { q: "Can you transport a full litigation team together?", a: "Yes — a litigation team and its document boxes are commonly coordinated as a single reservation with sedans for individuals and a Sprinter van for the larger group and materials." },
    ],
    ctaTitle: "Book Law Firm Car Service",
    ctaSubtitle: "Reserve discreet, confirmed transportation for attorneys, clients and trial teams. Call (877) 609-1919.",
  },

  // ---------------------------------------------------------- TECH COMPANY
  "tech-company-car-service-maryland": {
    metaTitle: "Tech Company Car Service | Maryland | 92 Limo Service",
    metaDescription:
      "Chauffeured transportation for tech companies along Maryland's I-270 corridor — candidates, engineers & executives. Call (877) 609-1919.",
    eyebrow: "TECH COMPANY CAR SERVICE — MARYLAND",
    h1: "Tech Company Car Service in Maryland",
    subtitle: "Chauffeured transportation for technology companies along the I-270 corridor and Columbia's tech campuses — candidates, engineers and executives.",
    image: IMAGES.corporate,
    alt: "Business Sedan serving a Maryland technology company client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Tech Company Car Service",
    intro: [
      "92 Limo Service provides corporate transportation for technology companies across Rockville, Gaithersburg, Germantown and the rest of the I-270 corridor, plus Columbia's growing tech campuses, with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer.",
      "We regularly serve I-270 corridor office parks, Columbia's corporate campuses off US-29 and MD-175, and the BWI and Dulles terminals where visiting engineers, candidates and executives land. Knowing which office park's visitor badge process takes ten minutes and which takes thirty is what turns a nice vehicle into a reliable one on an interview day with a packed schedule.",
      "Each booking is planned around same-day interview loops with multiple candidates, visiting-engineer campus-to-campus transfers, executive roadshows, and conference travel tied to regional tech events. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout — a late-arriving candidate flight doesn't have to mean a scrambled interview schedule.",
      "Choose a Business Sedan (Mercedes E-Class) for a single candidate or engineer, a Premium SUV (Lincoln Navigator) for an executive with a tight multi-stop day, or a Sprinter Executive van for a visiting team — and mix vehicles under one reservation.",
      "Confidentiality is standard practice for every trip, which matters for unannounced hires, acquisition-related travel and pre-launch visits. Consolidated monthly invoicing with itemized receipts and a dedicated account contact keep recurring recruiting and campus-transfer travel simple to manage.",
    ],
    highlights: [
      { title: "I-270 Corridor Knowledge", desc: "Rockville, Gaithersburg, Germantown and Columbia tech campuses, plus the fastest routes between them and BWI or IAD." },
      { title: "Same-Day Interview Loops", desc: "Multiple candidate pickups coordinated in sequence so a packed interview day runs on schedule." },
      { title: "Confidential by Default", desc: "Conversations and destinations stay private — useful for unannounced hires or acquisition-related travel." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Delayed candidate or executive flights are handled without disrupting the rest of the day's schedule." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Corridors & Campuses",
        places: [
          { label: "Rockville & North Bethesda" },
          { label: "Gaithersburg & Germantown" },
          { label: "Columbia tech campuses (US-29 / MD-175)" },
          { label: "BWI Marshall Airport" },
          { label: "Washington Dulles (IAD)" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Howard County's Corporate Corridor Guide", to: "/blog/howard-county-columbia-corporate-corridor-transportation" },
          { label: "Rockville & North Bethesda Night Out Guide", to: "/blog/rockville-north-bethesda-night-out-car-service" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Corporate Car Service — Tysons Corner, VA", to: "/corporate-car-service-tysons-corner-va" },
          { label: "Columbia, MD Limo Service", to: "/columbia-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you handle a same-day interview loop with multiple candidates?", a: "Yes — this is a common booking. We coordinate pickups in sequence so each candidate arrives on schedule without the recruiting team needing to manage multiple separate rides." },
      { q: "Do you serve office parks along the I-270 corridor?", a: "Yes, regularly — Rockville, Gaithersburg, Germantown and the rest of the corridor, along with Columbia's tech campuses off US-29 and MD-175." },
      { q: "Is confidentiality available for sensitive hiring or acquisition travel?", a: "Confidentiality is standard practice for every trip. Conversations and destinations stay private and are shared only with the people who booked." },
      { q: "Can we set up a recurring recruiting or campus-transfer account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "What if a candidate's or executive's flight is delayed?", a: "Flight tracking adjusts the pickup automatically with built-in complimentary wait time, so a delay doesn't have to disrupt the rest of the day's schedule." },
    ],
    ctaTitle: "Book Tech Company Car Service",
    ctaSubtitle: "Reserve confirmed transportation for candidates, engineers and executives. Call (877) 609-1919.",
  },

  // --------------------------------------------- GOVERNMENT/DEFENSE CONTRACTOR
  "government-contractor-car-service-maryland": {
    metaTitle: "Government & Defense Contractor Car Service | 92 Limo",
    metaDescription:
      "Discreet, credentialed chauffeured transportation for government & defense contractors near Fort Meade, APG & federal DC agencies. (877) 609-1919.",
    eyebrow: "GOVERNMENT & DEFENSE CONTRACTOR CAR SERVICE — MARYLAND",
    h1: "Government & Defense Contractor Car Service in Maryland",
    subtitle: "Discreet, credentialed chauffeured transportation for contractors and visitors working with Fort Meade, Aberdeen Proving Ground and federal agencies.",
    image: IMAGES.suv,
    alt: "Luxury SUV serving a government or defense contractor client in Maryland — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Government & Defense Contractor Travel",
    intro: [
      "92 Limo Service provides chauffeured transportation for government and defense contractors across the Fort Meade corridor, Aberdeen Proving Ground, and the federal agencies downtown Washington, with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer.",
      "We regularly serve the Fort Meade/Laurel corridor, Aberdeen Proving Ground in Harford County, and the federal office buildings and agency headquarters around downtown DC and the Pentagon area. Knowing each facility's visitor-control process, ID requirements and gate procedures is what turns a nice vehicle into a reliable one when a contractor has a scheduled badge appointment and no room for delay.",
      "Each booking is planned around visitor and contractor pickups tied to facility-access windows, conference and proposal-team travel, and recurring commutes for teams supporting federal programs. We confirm the itinerary the day before, stage the vehicle early at an approved waiting area, and keep dispatch on the line throughout.",
      "Choose a Luxury SUV (Chevrolet Suburban) or Premium SUV (Lincoln Navigator) for an individual contractor or small team, a Business Sedan (Mercedes E-Class) for a single visitor, or a Sprinter Executive van for a proposal or program team traveling together — and mix vehicles under one reservation.",
      "Discretion and professionalism are standard practice, not an add-on: chauffeurs are background-checked, drug-tested and trained to work around facility security procedures without becoming part of the conversation. Consolidated monthly invoicing with itemized receipts and certificates of insurance on request keep contractor finance and compliance teams comfortable with recurring travel.",
    ],
    highlights: [
      { title: "Facilities We Know", desc: "The Fort Meade/Laurel corridor, Aberdeen Proving Ground, and federal agency buildings around downtown DC are regular stops." },
      { title: "Visitor-Control Ready", desc: "Chauffeurs understand facility ID checks, gate procedures and approved staging areas, so appointments aren't put at risk." },
      { title: "Discretion by Default", desc: "Professional, background-checked chauffeurs who work around security procedures without becoming part of the conversation." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Facility delays and schedule changes handled by phone or text." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with certificates of insurance available to contractor clients on request." },
    ],
    vehicles: [
      "Luxury SUV — Chevrolet Suburban",
      "Business Sedan — Mercedes E-Class",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Facilities & Destinations",
        places: [
          { label: "Fort Meade & the Laurel corridor" },
          { label: "Aberdeen Proving Ground" },
          { label: "Federal agency offices, downtown DC" },
          { label: "BWI Marshall Airport" },
          { label: "Reagan National (DCA)" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Fort Meade, NSA & Laurel Corporate Campus Guide", to: "/blog/fort-meade-nsa-laurel-corporate-campus-transportation" },
          { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "Laurel, MD Limo Service", to: "/laurel-md-limo-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can your chauffeurs work around facility visitor-control procedures?", a: "Yes. We regularly serve the Fort Meade corridor, Aberdeen Proving Ground and federal buildings downtown, and our chauffeurs understand ID checks, gate procedures and approved staging areas at each." },
      { q: "Do you provide certificates of insurance for contractor compliance paperwork?", a: "Yes — certificates of insurance are available on request, which many contractor procurement and compliance teams require before approving a transportation vendor." },
      { q: "How is confidentiality handled for sensitive program travel?", a: "Chauffeurs are background-checked and trained to work around facility security without becoming part of the conversation. Trip details are shared only with the people who booked." },
      { q: "Can you coordinate a proposal or program team's travel as one booking?", a: "Yes — teams are commonly coordinated as a single reservation with multiple vehicles, scheduled to arrive together around a facility-access window." },
      { q: "Can our company set up a recurring contractor account?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Book Government & Defense Contractor Car Service",
    ctaSubtitle: "Reserve discreet, credentialed-ready transportation for contractor and program travel. Call (877) 609-1919.",
  },

  // --------------------------------------------------------- FINANCIAL SERVICES
  "financial-services-car-service-maryland-dc": {
    metaTitle: "Financial Services Car Service | MD & DC | 92 Limo",
    metaDescription:
      "Chauffeured transportation for banks, asset managers & financial firms across Maryland and Washington DC. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "FINANCIAL SERVICES CAR SERVICE — MARYLAND & DC",
    h1: "Financial Services Car Service in Maryland & DC",
    subtitle: "Polished, reliable chauffeured transportation for banks, asset managers and financial firms moving executives and clients across the corridor.",
    image: IMAGES.sClassFirst,
    alt: "First Class Sedan serving a financial services client in Maryland or DC — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Financial Services Car Service",
    intro: [
      "92 Limo Service provides chauffeured transportation for banks, asset managers and financial firms across downtown Baltimore's financial district, K Street and the rest of downtown Washington, with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer.",
      "We regularly serve Baltimore's financial district around T. Rowe Price and the Inner Harbor office towers, K Street and the government-affairs corridor in DC, and the BWI, DCA and IAD terminals where visiting investors, analysts and executives arrive. Knowing each office tower's loading zone and which terminal door gets an executive to a 9 a.m. meeting fastest is what turns a nice vehicle into a reliable one on an earnings-week schedule.",
      "Each booking is planned around investor-meeting roadshows, same-day multi-city trips connecting Baltimore, DC, Philadelphia and New York, earnings-week travel surges, and recurring executive commutes. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout — demand peaks around earnings season and major investor conferences, so reserve early for those weeks.",
      "Choose a First Class Sedan (BMW 7 Series) for an executive or analyst, a Premium SUV (Lincoln Navigator) for a visiting investor with a tight multi-stop day, or a Sprinter Executive van for a roadshow team traveling together — and mix vehicles under one reservation.",
      "Discretion is standard practice for every trip, which matters when conversations can touch on market-moving information: destinations and conversations stay private, shared only with the people who booked. Consolidated monthly invoicing with itemized receipts keeps finance teams comfortable reconciling recurring travel.",
    ],
    highlights: [
      { title: "Financial Districts We Know", desc: "Baltimore's Inner Harbor financial district and DC's K Street corridor, plus the fastest routes to BWI, DCA and IAD." },
      { title: "Earnings-Week Ready", desc: "Extra vehicles and confirmed itineraries during the highest-demand weeks of the quarter." },
      { title: "Discretion by Default", desc: "Conversations and destinations stay private — a standard practice for conversations that can touch on sensitive information." },
      { title: "Multi-City Roadshow Coordination", desc: "Same-day connections to Philadelphia and New York coordinated as a single itinerary." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Districts & Destinations",
        places: [
          { label: "Baltimore financial district / Inner Harbor towers" },
          { label: "K Street, Washington DC" },
          { label: "BWI Marshall Airport" },
          { label: "Reagan National (DCA)" },
          { label: "Washington Dulles (IAD)" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Multi-City Business Trip Guide: Baltimore, DC & Philadelphia", to: "/blog/multi-city-business-trip-baltimore-dc-philadelphia" },
          { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "Law Firm Car Service — Maryland & DC", to: "/law-firm-car-service-maryland-dc" },
        ],
      },
    ],
    faqs: [
      { q: "Can you handle an investor roadshow across multiple cities in one day?", a: "Yes — same-day connections between Baltimore, DC, Philadelphia and New York are coordinated as a single itinerary with a confirmed schedule and, where helpful, the same chauffeur throughout." },
      { q: "How is discretion handled for sensitive financial conversations?", a: "Discretion is standard practice for every trip. Conversations and destinations stay private and are shared only with the people who booked." },
      { q: "Do you add capacity during earnings season or major investor conferences?", a: "Yes — demand is anticipated around those weeks, and reserving early for your firm's key dates keeps your preferred vehicle class available." },
      { q: "Can our firm set up a corporate account for recurring travel?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
      { q: "Can you pick up a visiting investor or client directly from the airport before a meeting?", a: "Yes — flight-tracked pickups at BWI, DCA and IAD are planned backward from the meeting time, with meet-and-greet available for clients who prefer to be met inside baggage claim." },
    ],
    ctaTitle: "Book Financial Services Car Service",
    ctaSubtitle: "Reserve polished, confirmed transportation for executives, analysts and investors. Call (877) 609-1919.",
  },

  // ---------------------------------------------------------- PIER SIX PAVILION
  "pier-six-pavilion-transportation": {
    metaTitle: "Pier Six Pavilion Transportation | 92 Limo Service",
    metaDescription:
      "Chauffeured transportation to Pier Six Pavilion's Inner Harbor concert season — skip the garage search and the post-show crowd. Call (877) 609-1919.",
    eyebrow: "PIER SIX PAVILION — BALTIMORE'S INNER HARBOR",
    h1: "Pier Six Pavilion Transportation",
    subtitle: "Chauffeured transportation to Pier Six Pavilion's summer concert season at Baltimore's Inner Harbor — no garage search, no post-show scramble.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured vehicle for a Pier Six Pavilion concert night at Baltimore's Inner Harbor — 92 Limo Service",
    highlightsHeading: "Why Concertgoers Ride With 92 Limo Service to Pier Six Pavilion",
    intro: [
      "Pier Six Pavilion is Baltimore's open-air waterfront concert venue at the edge of the Inner Harbor, and its summer concert season draws large crowds to a stretch of downtown that was never built for easy parking. 92 Limo Service runs chauffeured drop-off and pickup for Pier Six shows all season — flat transparent pricing, a professional chauffeur, and no need to find a garage spot before the opening act.",
      "The venue's waterfront location is part of its appeal and part of its parking problem: the closest garages fill early on a popular show night, street parking near the harbor disappears fast, and the walk from an open spot can eat into the time you wanted for dinner at one of the Inner Harbor restaurants beforehand.",
      "We drop you as close to the pavilion entrance as event-night traffic control allows, then stage nearby and return to a pre-arranged pickup point when the show lets out — so you skip both the pre-show garage hunt and the post-show crush of everyone leaving the lot at once.",
      "Many groups pair a Pier Six show with dinner at the Inner Harbor or Fells Point beforehand; we're glad to build that into the same reservation as a single evening itinerary rather than two separate bookings.",
      "Choose a Business Sedan (Mercedes E-Class) or First Class Sedan (BMW 7 Series) for a couple, a Premium SUV (Lincoln Navigator) for a small group, or a Sprinter Shuttle for a full group of friends or coworkers headed to the same show.",
    ],
    highlights: [
      { title: "No Parking to Find", desc: "Dropped at the entrance, picked up after — the Inner Harbor's parking crunch becomes someone else's problem." },
      { title: "Post-Show Pickup, Planned", desc: "We stage nearby and return to a pre-arranged point when the show ends, instead of you searching a packed lot." },
      { title: "Pair It With Dinner", desc: "Build an Inner Harbor or Fells Point dinner into the same reservation as a single evening out." },
      { title: "Groups Travel Together", desc: "Sprinter vans carry a full group to the same show without splitting across multiple cars." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the ride, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Nearby & Related",
        places: [
          { label: "Baltimore's Inner Harbor" },
          { label: "Fells Point" },
          { label: "Oriole Park at Camden Yards" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "Concert Transportation in Baltimore", to: "/blog/concert-transportation-baltimore" },
          { label: "CFG Bank Arena Transportation", to: "/cfg-bank-arena-transportation" },
          { label: "Oriole Park at Camden Yards Transportation", to: "/oriole-park-camden-yards-transportation" },
          { label: "Top Things to Do in Baltimore and How to Get There", to: "/blog/top-things-to-do-in-baltimore-and-how-to-get-there" },
        ],
      },
    ],
    faqs: [
      { q: "Where does the chauffeur drop off and pick up at Pier Six Pavilion?", a: "We drop as close to the pavilion entrance as event-night traffic control allows, then stage nearby and return to a pre-set pickup point when the show ends." },
      { q: "How much does Pier Six Pavilion transportation cost?", a: "Point-to-point drop-off and pickup is one flat rate by vehicle and address; if you want the vehicle to wait through the show, we quote an hourly rate with a minimum instead. Call (877) 609-1919 for a quote." },
      { q: "Can we add dinner at the Inner Harbor before the show?", a: "Yes — tell us the restaurant and we'll build it into the same evening reservation as one itinerary rather than two separate bookings." },
      { q: "Can you take a group to a Pier Six show?", a: "Yes. Premium SUVs seat up to 5 and Sprinter vans carry larger groups together, so everyone arrives and leaves at the same time." },
      { q: "What about parking near Pier Six Pavilion?", a: "Parking near the Inner Harbor is limited and fills early on popular show nights, with street parking scarce and a walk that eats into pre-show time. With a chauffeur there's nothing to park." },
    ],
    ctaTitle: "Book Pier Six Pavilion Transportation",
    ctaSubtitle: "Reserve a chauffeur for your next Pier Six Pavilion show — flat, transparent pricing. Call (877) 609-1919.",
  },

  // ----------------------------------------------- HOWARD COUNTY WEDDING
  "wedding-limo-howard-county-md": {
    metaTitle: "Howard County, MD Wedding Limo | 92 Limo Service",
    metaDescription:
      "Wedding limo service across Howard County, MD — Turf Valley, Belmont Manor & more. Flat rates, professional chauffeurs. Call (877) 609-1919.",
    eyebrow: "HOWARD COUNTY, MD · WEDDING TRANSPORTATION",
    h1: "Wedding Limo Service in Howard County, MD",
    subtitle: "Chauffeured wedding transportation across Howard County — Turf Valley, Belmont Manor, historic Ellicott City and Columbia's venues.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Howard County, MD wedding — 92 Limo Service",
    highlightsHeading: "Why Howard County Couples Choose 92 Limo Service",
    intro: [
      "92 Limo Service is based in Laurel, right at Howard County's doorstep, which means Turf Valley, Belmont Manor and Historic Park, and the historic Main Street district in Ellicott City are home territory for our chauffeurs — not an unfamiliar drive on your wedding day.",
      "Howard County weddings tend to split between two very different settings: resort-style venues like Turf Valley Resort with sprawling grounds and multiple photo locations, and smaller historic or garden venues like Belmont Manor and Historic Park, where a narrower driveway or a grass lot calls for a chauffeur who already knows the layout. We work both regularly, which matters more than it sounds like on a day with a tight photo schedule.",
      "Each booking is planned around the getting-ready location, the ceremony, a photo stop (Ellicott City's Main Street and the B&O Railroad Station are popular choices), the reception, and the end-of-night departure. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout — spring and fall Saturdays are the busiest dates of the year in Howard County, so reserve early for those weekends.",
      "Choose a First Class Sedan (BMW 7 Series) or Premium SUV (Lincoln Navigator) for the couple, and a Sprinter Executive van for the wedding party — and coordinate both under one reservation so everyone arrives on the same schedule.",
      "A parent, planner or wedding-party member should be the point of contact for day-of logistics, and we're glad to confirm the final timeline with your coordinator or venue directly in the week before the wedding.",
    ],
    highlights: [
      { title: "Venues We Know", desc: "Turf Valley Resort, Belmont Manor and Historic Park, and historic Ellicott City's Main Street district are regular stops." },
      { title: "Resort or Historic, Either Way", desc: "Chauffeurs experienced with both sprawling resort grounds and the tighter layouts of smaller historic venues." },
      { title: "Photo-Stop Friendly", desc: "Built-in time for a Main Street Ellicott City or B&O Railroad Station photo stop between ceremony and reception." },
      { title: "Flat, Transparent Pricing", desc: "One hourly quote with a minimum, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Couple + Wedding Party, One Booking", desc: "Coordinate a sedan or SUV for the couple and a Sprinter for the wedding party under one reservation." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Howard County Venues & Neighborhoods",
        places: [
          { label: "Turf Valley Resort" },
          { label: "Belmont Manor and Historic Park" },
          { label: "Historic Ellicott City" },
          { label: "Columbia", to: "/columbia-md-limo-service" },
          { label: "Clarksville" },
          { label: "Fulton" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
          { label: "Wedding Limo & Chauffeur Service", to: "/wedding-transportation" },
          { label: "How to Book a Limo for a Wedding in Maryland", to: "/blog/how-to-book-a-limo-for-a-wedding-in-maryland" },
          { label: "How Many Cars Do You Actually Need for Your Wedding Party?", to: "/blog/how-many-cars-wedding-party-maryland" },
          { label: "Howard County's Corporate Corridor Guide", to: "/blog/howard-county-columbia-corporate-corridor-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "Do you know Turf Valley Resort and Belmont Manor specifically?", a: "Yes — both are regular bookings, and our chauffeurs know the driveway, loading area and photo spots at each." },
      { q: "Can we add a photo stop in historic Ellicott City?", a: "Yes. Main Street and the B&O Railroad Station are popular stops between ceremony and reception; tell your reservation specialist and we'll build it into the timeline." },
      { q: "How far ahead should we book for a Howard County wedding?", a: "Three to six months ahead for a spring or fall Saturday, since those are the busiest wedding dates of the year in Howard County." },
      { q: "What's the cancellation policy for a wedding booking?", a: "Special-event bookings, including weddings, cancel free of charge up to 12 hours before the scheduled pickup. Inside 12 hours, the deposit may be forfeited and up to 100% of the quoted fare may be charged." },
      { q: "Can one reservation cover the couple and the wedding party?", a: "Yes — a sedan or SUV for the couple and a Sprinter van for the wedding party are commonly coordinated under a single reservation so both arrive on the same schedule." },
    ],
    ctaTitle: "Book Howard County Wedding Transportation",
    ctaSubtitle: "Reserve chauffeured wedding transportation across Howard County. Call (877) 609-1919.",
  },

  // ---------------------------------------------- TYSONS CORNER CORPORATE
  "corporate-car-service-tysons-corner-va": {
    metaTitle: "Tysons Corner, VA Corporate Car Service | 92 Limo",
    metaDescription:
      "Chauffeured corporate car service for Tysons Corner, VA — close to IAD, flat transparent pricing, 24/7 dispatch. Call (877) 609-1919.",
    eyebrow: "TYSONS CORNER, VA · CORPORATE CAR SERVICE",
    h1: "Corporate Car Service in Tysons Corner, VA",
    subtitle: "Chauffeured transportation for Tysons Corner's corporate campuses — close to IAD, convenient to DCA, flat transparent pricing.",
    image: IMAGES.dcSkyline,
    alt: "Luxury chauffeured vehicle serving a Tysons Corner, VA corporate client — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Handles Tysons Corner Corporate Travel",
    intro: [
      "Tysons Corner is one of the largest business districts in the Washington DC region — a dense cluster of corporate headquarters and offices along the Dulles Toll Road corridor, anchored by the Tysons Corner Center and Tysons Galleria retail hubs and served directly by the Silver Line Metro. 92 Limo Service provides chauffeured corporate transportation here with the same flat, transparent pricing and professional chauffeurs we bring to every airport transfer.",
      "Tysons sits about 20 to 35 minutes from Washington Dulles via the Dulles Toll Road, which makes it the fastest of the three regional airports for most Tysons trips — and about 25 to 40 minutes from Reagan National via the Beltway, depending on the hour. Every airport pickup is flight-tracked, with 45 minutes of complimentary wait time on domestic arrivals and 60 on international.",
      "Each booking is planned around visiting-executive airport transfers, roadshow days with multiple office stops, and recurring commutes between Tysons and downtown DC or Maryland offices. We confirm the itinerary the day before, stage the vehicle early, and keep dispatch on the line throughout — demand around major corporate events at the Tysons convention and conference venues books out early, so reserve ahead for those dates.",
      "Choose a First Class Sedan (BMW 7 Series) for an executive, a Premium SUV (Lincoln Navigator) for a small team with luggage, or a Sprinter Executive van for a larger group — and mix vehicles under one reservation.",
      "Confidentiality is standard practice, and consolidated monthly invoicing with itemized receipts keeps Tysons-based finance and travel teams comfortable managing recurring corporate travel.",
    ],
    highlights: [
      { title: "Fastest Airport: IAD", desc: "About 20 to 35 minutes via the Dulles Toll Road, with flight tracking on every pickup." },
      { title: "DCA Also Covered", desc: "About 25 to 40 minutes via the Beltway, with the same flat-rate pricing and flight tracking." },
      { title: "Corporate Campus Knowledge", desc: "Chauffeurs who know Tysons' office towers, loading areas and the Silver Line Metro corridor." },
      { title: "Flat or Hourly Pricing", desc: "Quoted before you book, with every charge disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Pre-dawn departures and delayed arrivals handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Tysons & Nearby",
        places: [
          { label: "Tysons Corner Center / Tysons Galleria" },
          { label: "Dulles Toll Road corridor" },
          { label: "Reston" },
          { label: "McLean" },
          { label: "Vienna" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "Corporate Travel Guide for Tysons Corner, VA", to: "/corporate-travel-guide-tysons-corner-va" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "Tech Company Car Service — Maryland", to: "/tech-company-car-service-maryland" },
          { label: "BWI vs. DCA vs. IAD by Destination", to: "/blog/bwi-vs-dca-vs-iad-closest-airport-by-destination" },
        ],
      },
    ],
    faqs: [
      { q: "Which airport is fastest for a Tysons Corner pickup?", a: "Washington Dulles (IAD), typically 20 to 35 minutes via the Dulles Toll Road. Reagan National (DCA) is also well covered at about 25 to 40 minutes via the Beltway." },
      { q: "Do you serve Tysons' corporate office towers regularly?", a: "Yes. Chauffeurs know the major Tysons office campuses, loading areas and the Silver Line Metro corridor." },
      { q: "Can you coordinate a multi-stop roadshow day around Tysons?", a: "Yes — hourly as-directed service keeps the same vehicle and chauffeur for the whole day, with the vehicle waiting between stops." },
      { q: "How much does Tysons Corner corporate car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and trip details. Call (877) 609-1919 or request a quote online." },
      { q: "Can our company set up a corporate account for Tysons travel?", a: "Yes — with consolidated monthly invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
    ],
    ctaTitle: "Book Tysons Corner Corporate Car Service",
    ctaSubtitle: "Reserve chauffeured corporate transportation for Tysons Corner, close to IAD and DCA. Call (877) 609-1919.",
  },

  // --------------------------------------------- FREDERICK COUNTY WINE TOUR
  "wine-tour-limo-frederick-county-md": {
    metaTitle: "Frederick County, MD Wine Tour Limo | 92 Limo Service",
    metaDescription:
      "Chauffeured wine tour transportation across Frederick County, MD's vineyards — no driving, multiple stops. Call (877) 609-1919 to plan your route.",
    eyebrow: "FREDERICK COUNTY, MD · WINE TOUR TRANSPORTATION",
    h1: "Wine Tour Limo Service in Frederick County, MD",
    subtitle: "Chauffeured wine touring across Frederick County's vineyards — multiple stops, no driving, no designated driver needed.",
    image: IMAGES.wineTour,
    alt: "Luxury chauffeured vehicle for a Frederick County, MD wine tour — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Plans Frederick County Wine Tours",
    intro: [
      "Frederick County has become one of Maryland's most-visited wine regions, with a cluster of vineyards spread across rolling countryside that's genuinely beautiful to drive through — and genuinely risky to drive through after a few tastings. 92 Limo Service plans chauffeured wine tours across the county so the whole group can taste without anyone needing to stay sober behind the wheel.",
      "We regularly route groups through Linganore Winecellars, Black Ankle Vineyards, Springfield Manor Winery & Distillery, and Distillery Lane Ciderworks, among others. Each is a genuine destination with its own tasting room hours and reservation requirements, so the route is planned around confirmed tasting times rather than guesswork.",
      "Most groups enjoy three wineries comfortably in a day with a relaxed lunch worked in between stops — reserve the tastings directly with each winery, send us the confirmed times, and we build the driving route and timing around them so no one is rushed between pours.",
      "Choose a Premium SUV (Lincoln Navigator) for a small group, or a Sprinter Shuttle for a larger party — either way, the vehicle waits at each stop and the same chauffeur drives the whole route.",
      "Bachelorette parties, milestone birthdays, and corporate team outings are all common reasons to book a Frederick County wine day; tell us the occasion and group size, and we'll help plan a route that fits the day you want.",
    ],
    highlights: [
      { title: "Wineries We Know", desc: "Linganore Winecellars, Black Ankle Vineyards, Springfield Manor and Distillery Lane Ciderworks are regular stops." },
      { title: "Route Planned Around Reservations", desc: "We build the driving route and timing around your confirmed tasting reservations, not the other way around." },
      { title: "No Designated Driver Needed", desc: "Everyone in the group gets to taste — the chauffeur drives, waits, and drives again." },
      { title: "Hourly, Flat-Transparent Pricing", desc: "Quoted as an hourly rate with a minimum, confirmed before you book." },
      { title: "Groups Travel Together", desc: "Sprinter vans keep a larger party in one vehicle for the whole route." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Frederick County Wineries",
        places: [
          { label: "Linganore Winecellars" },
          { label: "Black Ankle Vineyards" },
          { label: "Springfield Manor Winery & Distillery" },
          { label: "Distillery Lane Ciderworks" },
          { label: "Downtown Frederick", to: "/frederick-md-limo-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Frederick County Wine Country by Chauffeur", to: "/blog/frederick-county-wine-country-chauffeur-service" },
          { label: "Maryland Wine Tour Transportation", to: "/maryland-wine-tour-transportation" },
          { label: "Wine Tour Chauffeur Service", to: "/wine-tours" },
          { label: "Bachelor & Bachelorette Party Transportation", to: "/blog/bachelor-bachelorette-party-transportation-maryland" },
          { label: "Frederick, MD Limo Service", to: "/frederick-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Which Frederick County wineries do you typically route through?", a: "Linganore Winecellars, Black Ankle Vineyards, Springfield Manor Winery & Distillery and Distillery Lane Ciderworks are regular stops, among others — tell us your preferences and we'll build the route." },
      { q: "How many wineries can we visit in one day?", a: "Most groups comfortably enjoy three with a relaxed lunch worked in. Reserve the tastings with the wineries directly, send us the confirmed times, and we'll plan the route and drive times around them." },
      { q: "Do we need to book tasting reservations ourselves?", a: "Yes — tasting room reservations are made directly with each winery. We plan the driving route and schedule around whatever times you've confirmed." },
      { q: "How is a wine tour priced?", a: "As an hourly rate with a minimum, confirmed before you book — gratuity, tolls and any other applicable charges disclosed before confirmation. Call (877) 609-1919 for a quote." },
      { q: "Can you handle a larger group, like a bachelorette party?", a: "Yes — Sprinter vans comfortably carry a larger group through the full route together, which is a common booking for bachelorette parties and milestone birthdays." },
    ],
    ctaTitle: "Book a Frederick County Wine Tour",
    ctaSubtitle: "Reserve a chauffeured wine tour across Frederick County's vineyards. Call (877) 609-1919.",
  },

  // ------------------------------------------------------- FUNERAL LIMOUSINE
  "funeral-limousine-service-maryland": {
    metaTitle: "Funeral Limousine Service | Maryland | 92 Limo Service",
    metaDescription:
      "Respectful, reliable funeral limousine service across Maryland — family car coordination with your funeral home. Call (877) 609-1919.",
    eyebrow: "MARYLAND · FUNERAL & MEMORIAL TRANSPORTATION",
    h1: "Funeral Limousine Service in Maryland",
    subtitle: "Respectful, reliable limousine transportation for funerals and memorial services across Maryland.",
    image: IMAGES.sedan,
    alt: "Dignified black luxury sedan for funeral and memorial transportation in Maryland — 92 Limo Service",
    highlightsHeading: "How 92 Limo Service Supports Maryland Families",
    intro: [
      "92 Limo Service provides respectful, reliable limousine transportation for funerals and memorial services across Maryland, coordinated directly with your funeral home's schedule rather than treated as a standalone booking.",
      "We work with funeral directors to confirm pickup times at the family's home or hotel, the service location, and the cemetery or reception that follows, so the family car arrives exactly when it's needed without anyone needing to manage logistics on an already difficult day.",
      "Out-of-town family members flying in for a service are a common part of these bookings — we coordinate flight-tracked airport pickups from BWI, DCA or IAD timed to the service schedule, so visiting relatives arrive with time to spare rather than rushing in at the last minute.",
      "Choose a Business Sedan (Mercedes E-Class) or First Class Sedan (BMW 7 Series) for the immediate family, or a Luxury SUV (Chevrolet Suburban) or Sprinter Shuttle for a larger family group traveling together to the service and cemetery.",
      "Our chauffeurs dress and conduct themselves accordingly for the occasion, and the vehicle is scheduled with enough margin to never rush a grieving family. Call as early as you're able — even same-day requests are accommodated whenever possible.",
    ],
    highlights: [
      { title: "Coordinated With Your Funeral Home", desc: "Pickup and service timing confirmed directly with your funeral director, not managed separately by the family." },
      { title: "Out-of-Town Family Pickups", desc: "Flight-tracked airport transportation for visiting relatives, timed to the service schedule." },
      { title: "Dignified Vehicles", desc: "Clean, late-model sedans and SUVs suited to the occasion, with a chauffeur who understands the day's tone." },
      { title: "Family Group Transportation", desc: "SUVs and Sprinter vans for a larger family group traveling together between service and cemetery." },
      { title: "Flat, Transparent Pricing", desc: "One quote confirmed before the day, with no surprises added afterward." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Coverage",
        places: [
          { label: "All of Maryland" },
          { label: "Baltimore", to: "/baltimore-limo-service" },
          { label: "Washington DC", to: "/washington-dc-limo-service" },
          { label: "BWI, DCA & IAD airport pickups for family" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Funeral & Memorial Limousine Etiquette Guide", to: "/blog/funeral-memorial-limousine-etiquette-guide" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Senior & Medical Appointment Transportation Guide", to: "/senior-and-medical-appointment-transportation-maryland" },
          { label: "Laurel, MD Limo Service", to: "/laurel-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you coordinate directly with the funeral home?", a: "Yes — we confirm pickup times, the service location, and the cemetery or reception that follows directly with your funeral director, so the family doesn't need to manage that coordination." },
      { q: "Can you pick up out-of-town family from the airport?", a: "Yes. Flight-tracked pickups from BWI, DCA or IAD are timed to the service schedule so visiting relatives arrive with time to spare." },
      { q: "How much notice do you need for a funeral service?", a: "As much as you're able to give, but same-day and short-notice requests are accommodated whenever possible — call (877) 609-1919 directly for the fastest response." },
      { q: "Can you transport a larger extended family group?", a: "Yes — a Luxury SUV or Sprinter Shuttle keeps a larger family group together for the ride between the service and the cemetery or reception." },
      { q: "What is the cost for funeral limousine service?", a: "It's a flat rate confirmed before the service, based on vehicle class and the day's stops. Call (877) 609-1919 for a quote — there are no surprise charges added afterward." },
    ],
    ctaTitle: "Arrange Funeral Limousine Service",
    ctaSubtitle: "Call (877) 609-1919 to coordinate respectful transportation for a service — we're here to help.",
  },
};

export const MARYLAND_BATCH9_SLUGS = Object.keys(MARYLAND_BATCH9_PAGES);
