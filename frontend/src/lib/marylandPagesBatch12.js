// 2026-10-27 SEO round-7 push, batch 12 — 16 new hand-written landing pages.
// Same shape as MARYLAND_LANDING_PAGES / MARYLAND_BATCH3-11_PAGES (see
// marylandPages.js header). Merged into LANDING_PAGES by src/lib/landingPages.js.
//
// Before drafting, all 395 existing landing-page slugs across
// landingPagesGenerated.js, marylandPagesBatch3-11.js, semrushKeywordGapPages.js,
// bwiAirportPages.js and nicheAndSuburbLandingPages.js were checked for
// collisions and topical overlap (see /tmp/audit92/landing_slugs_list.txt from
// this round's audit) — but that check initially missed landingPages.js's OWN
// ~34 hardcoded literal entries (keys written directly in that file, not in
// any spread batch). A post-build verification pass against the actual
// prerendered output caught this: 4 originally-drafted venue pages turned out
// to duplicate existing coverage that lived only in those literal entries —
// capital-one-arena-transportation and merriweather-post-pavilion-transportation
// were exact-slug duplicates (the literal entry silently won the object-spread
// merge, so the build was serving the OLD page under those URLs even with this
// file wired in); mt-bank-stadium-transportation and
// cfg-bank-arena-transportation (the venue formerly called Royal Farms Arena,
// renamed) were same-topic duplicates under different slugs. All 4 were
// dropped and replaced with 2 fresh, verified-unique pages (Foggy Bottom, DC
// and Owings Mills corporate car service) to hold the batch at 16 pages. The
// remaining original categories:
//
// 1. DC neighborhood pages (6) — Georgetown, Capitol Hill, Dupont Circle,
//    Navy Yard, Adams Morgan and Foggy Bottom had no neighborhood-specific
//    landing page; prior DC coverage was airport-route-only
//    (dca-to-georgetown, etc.) or a single citywide washington-dc-limo-service
//    page.
// 2. City + missing service-tier combinations (6) — Baltimore had every
//    tier except corporate; Bethesda had corporate+limo but no wedding or
//    prom; Potomac had limo but no wedding; Annapolis had wedding+corporate
//    but no prom; Hunt Valley had corporate+limo but no wedding; Owings Mills
//    had limo but no corporate.
// 3. New Virginia cities (2) — Purcellville and Haymarket, both growing
//    Loudoun/Prince William County communities with no existing page.
// 4. One niche vertical (1) — pet-friendly car service, a real distinct
//    search term not yet covered (the existing pet-friendly content is a
//    blog guide, not a bookable service landing page).
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

export const MARYLAND_BATCH12_PAGES = {
  // ============================================================
  // DC NEIGHBORHOOD PAGES (5)
  // ============================================================
  "georgetown-dc-limo-service": {
    metaTitle: "Georgetown, DC Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service in Georgetown, DC — M Street dinners, Georgetown University, waterfront events. Flat rates. Call (877) 609-1919.",
    eyebrow: "GEORGETOWN · WASHINGTON, DC",
    h1: "Georgetown, DC Limo Service",
    subtitle: "Chauffeured transportation in and around Georgetown — M Street, the waterfront, Georgetown University and the neighborhood's narrow, valet-unfriendly streets.",
    image: IMAGES.sClassFirst,
    alt: "Luxury chauffeured sedan on a Georgetown, DC street — 92 Limo Service",
    highlightsHeading: "Why Georgetown Books 92 Limo Service",
    intro: [
      "Georgetown's cobblestone side streets, limited and expensive parking, and M Street's constant restaurant and retail traffic make it one of the more difficult DC neighborhoods to drive yourself into for a dinner, event or late night out. A chauffeur who already knows the neighborhood's one-way pattern and loading-zone etiquette turns that into a non-issue.",
      "We run Georgetown dinners, nights out along M Street and Wisconsin Avenue, Georgetown University move-in days, parents' weekends and graduation ceremonies, and waterfront events along the Potomac, for clients across DC, Maryland and Northern Virginia.",
      "Visitors flying in for a Georgetown event are a frequent booking too — a chauffeur meeting a flight at DCA or Dulles and delivering guests directly to a Georgetown hotel or dinner reservation removes the uncertainty of navigating an unfamiliar neighborhood after a long travel day.",
      "A sedan handles a couple or small group heading to dinner; an SUV suits a family during a university weekend; a Sprinter van covers a larger group out for a Georgetown evening together.",
    ],
    highlights: [
      { title: "Narrow-Street Know-How", desc: "Chauffeurs comfortable with Georgetown's cobblestone side streets and tight loading zones." },
      { title: "Georgetown University Familiar", desc: "Move-in days, parents' weekends and commencement are regular bookings." },
      { title: "All Three Airports Covered", desc: "DCA, Dulles and BWI transfers directly to a Georgetown address, with flight tracking." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the ride, with gratuity, tolls and parking disclosed before confirmation." },
      { title: "24/7, 365", desc: "Dinner reservations, late nights on M Street and early campus move-ins — all covered." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "DCA to Georgetown", to: "/dca-to-georgetown" },
          { label: "BWI to Georgetown", to: "/bwi-to-georgetown" },
          { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
          { label: "Capitol Hill Limo Service", to: "/capitol-hill-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can a chauffeur navigate Georgetown's narrow streets?", a: "Yes — our chauffeurs regularly work Georgetown's cobblestone side streets, limited loading zones and one-way pattern, so getting to the door is never a problem." },
      { q: "Do you serve Georgetown University move-in and parents' weekend?", a: "Yes — these are regular bookings, often paired with an airport pickup for family flying in for the weekend." },
      { q: "Can you pick up from DCA or Dulles directly to a Georgetown hotel?", a: "Yes — flight-tracked transfers from DCA, Dulles or BWI directly to any Georgetown address are a routine booking." },
      { q: "How much does Georgetown car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 for a quote." },
      { q: "Can you handle a group night out on M Street?", a: "Yes — a Sprinter van or SUV keeps the group together for dinner and nightlife, with one pickup point and one flat rate." },
    ],
    ctaTitle: "Book Georgetown Car Service",
    ctaSubtitle: "Reserve chauffeured transportation anywhere in Georgetown. Call (877) 609-1919.",
  },

  "capitol-hill-limo-service": {
    metaTitle: "Capitol Hill, DC Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service on Capitol Hill, DC — government travel, Union Station transfers, Eastern Market events. Call (877) 609-1919.",
    eyebrow: "CAPITOL HILL · WASHINGTON, DC",
    h1: "Capitol Hill, DC Limo Service",
    subtitle: "Chauffeured transportation on Capitol Hill — government and advocacy travel, Union Station transfers, Eastern Market and Barracks Row events.",
    image: IMAGES.corporate,
    alt: "Luxury chauffeured sedan near the U.S. Capitol on Capitol Hill, DC — 92 Limo Service",
    highlightsHeading: "Why Capitol Hill Books 92 Limo Service",
    intro: [
      "Capitol Hill's security perimeter, restricted parking near congressional office buildings, and the unpredictable street closures that come with hearings, votes and demonstrations make professional chauffeured transportation the practical choice for anyone working the Hill regularly — staff, lobbyists, association executives and visiting constituents alike.",
      "We run government, association and advocacy clients to and from the House and Senate office buildings, committee hearings and fly-in meeting days, as well as Union Station arrivals and departures and evening trips to Eastern Market and the Barracks Row restaurant strip.",
      "A sedan is the standard choice for an individual meeting day; an SUV or Sprinter van covers a visiting delegation or a full fly-in group moving between multiple Hill meetings on the same schedule, with the vehicle staying with the group all day under hourly service.",
      "Discretion and punctuality matter most here — chauffeurs are background-checked, professionally dressed, and briefed on the day's schedule in advance so a meeting running long or a vote delaying a departure does not derail the rest of the day.",
    ],
    highlights: [
      { title: "Capitol Hill Logistics Know-How", desc: "Chauffeurs familiar with security perimeters, restricted parking and hearing-day street closures." },
      { title: "Fly-In & Delegation Days", desc: "Hourly as-directed service keeps one vehicle with a visiting group across a full day of Hill meetings." },
      { title: "Union Station Transfers", desc: "Train arrivals and departures met directly, with luggage handled." },
      { title: "Flat & Hourly Pricing", desc: "Point-to-point rides are flat rate; multi-stop days are hourly with transparent terms." },
      { title: "24/7, 365", desc: "Early hearing days, late votes and evening Barracks Row dinners — all covered." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Corporate Car Service — Washington, DC", to: "/corporate-car-service-dc" },
          { label: "Nonprofit & Association Car Service — DC", to: "/nonprofit-association-car-service-dc" },
          { label: "Embassy & Diplomatic Car Service — Washington, DC", to: "/embassy-diplomatic-car-service-washington-dc" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Corporate Transportation", to: "/corporate-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "Can you navigate Capitol Hill's security perimeter and restricted parking?", a: "Yes — our chauffeurs work the Hill regularly and are familiar with building access points, restricted zones and hearing-day street closures." },
      { q: "Do you handle fly-in days for a visiting delegation?", a: "Yes — hourly as-directed service keeps one vehicle and chauffeur with your group across a full day of back-to-back Hill meetings." },
      { q: "Can you meet a Union Station arrival?", a: "Yes — Amtrak and MARC arrivals and departures are met directly at Union Station, with luggage handled." },
      { q: "Is the service discreet for government and association clients?", a: "Yes — chauffeurs are background-checked, professionally dressed and briefed on your schedule in advance; corporate accounts include consolidated monthly invoicing." },
      { q: "What happens if a hearing or vote runs long and delays my departure?", a: "Your chauffeur tracks your actual schedule, not a fixed clock, so a delayed hearing or vote doesn't leave you stranded." },
    ],
    ctaTitle: "Book Capitol Hill Car Service",
    ctaSubtitle: "Reserve chauffeured transportation for your next Hill visit. Call (877) 609-1919.",
  },

  "dupont-circle-limo-service": {
    metaTitle: "Dupont Circle, DC Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service in Dupont Circle, DC — embassy row, think tanks, restaurants and nightlife. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "DUPONT CIRCLE · WASHINGTON, DC",
    h1: "Dupont Circle, DC Limo Service",
    subtitle: "Chauffeured transportation in Dupont Circle — Embassy Row, think tanks and nonprofits, and the neighborhood's dense restaurant and nightlife scene.",
    image: IMAGES.sedan,
    alt: "Luxury chauffeured sedan near Dupont Circle in Washington, DC — 92 Limo Service",
    highlightsHeading: "Why Dupont Circle Books 92 Limo Service",
    intro: [
      "Dupont Circle sits at the center of DC's embassy and think-tank corridor, with Massachusetts Avenue's Embassy Row running directly through the neighborhood — a geography where chauffeured service is less a convenience than an expectation for the diplomatic, nonprofit and policy clients based here.",
      "We run daily trips for embassy staff, think-tank and NGO executives, and conference attendees staying in or meeting near Dupont Circle, alongside the evening restaurant and nightlife traffic the neighborhood is equally known for.",
      "A sedan covers an individual meeting day or dinner reservation; an SUV or Sprinter van handles a visiting delegation or a group evening out, with hourly service keeping one vehicle and chauffeur on call across a full schedule of back-to-back appointments.",
      "Chauffeurs are experienced with embassy security protocols and discreet pickup arrangements where privacy matters, and corporate and institutional accounts get consolidated monthly invoicing.",
    ],
    highlights: [
      { title: "Embassy Row Experience", desc: "Chauffeurs familiar with embassy security protocols and discreet pickup arrangements." },
      { title: "Think Tank & NGO Corridor", desc: "Daily service for the policy and advocacy organizations clustered around Dupont Circle." },
      { title: "Conference & Hotel Transfers", desc: "Airport-to-hotel transfers for conference attendees, with flight tracking." },
      { title: "Flat & Hourly Pricing", desc: "Point-to-point rides are flat rate; multi-stop days are hourly with transparent terms." },
      { title: "24/7, 365", desc: "Early meetings, embassy events and late dinners — all covered." },
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
          { label: "Embassy & Diplomatic Car Service — Washington, DC", to: "/embassy-diplomatic-car-service-washington-dc" },
          { label: "Nonprofit & Association Car Service — DC", to: "/nonprofit-association-car-service-dc" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Chevy Chase & Bethesda: Diplomatic & Executive Car Service — Blog", to: "/blog/chevy-chase-bethesda-diplomatic-executive-car-service" },
          { label: "Corporate Car Service — Washington, DC", to: "/corporate-car-service-dc" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve embassies along Embassy Row near Dupont Circle?", a: "Yes — our chauffeurs are experienced with embassy security protocols and discreet pickup and drop-off arrangements." },
      { q: "Can you handle conference attendees staying near Dupont Circle?", a: "Yes — flight-tracked airport transfers directly to Dupont Circle hotels are a regular booking, from DCA, Dulles and BWI." },
      { q: "Do think tanks and nonprofits set up corporate accounts with you?", a: "Yes — consolidated monthly invoicing, priority dispatch and a dedicated contact are available for institutional accounts." },
      { q: "Can you keep one vehicle with us for a full day of meetings?", a: "Yes — hourly as-directed service keeps one vehicle and chauffeur with you across back-to-back appointments." },
      { q: "Do you serve Dupont Circle's restaurant and nightlife scene in the evening?", a: "Yes — dinner reservations and group nights out are common bookings, with a sedan for small parties or a Sprinter van for a larger group." },
    ],
    ctaTitle: "Book Dupont Circle Car Service",
    ctaSubtitle: "Reserve chauffeured transportation in Dupont Circle. Call (877) 609-1919.",
  },

  "navy-yard-dc-limo-service": {
    metaTitle: "Navy Yard, DC Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service in Navy Yard, DC — Nationals Park, Audi Field, waterfront dining. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "NAVY YARD · WASHINGTON, DC",
    h1: "Navy Yard, DC Limo Service",
    subtitle: "Chauffeured transportation in DC's Navy Yard — Nationals Park, Audi Field, The Wharf-adjacent waterfront, and the neighborhood's booming restaurant scene.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV in the Navy Yard neighborhood of Washington, DC — 92 Limo Service",
    highlightsHeading: "Why Navy Yard Books 92 Limo Service",
    intro: [
      "Navy Yard has grown into one of DC's busiest waterfront neighborhoods, anchored by Nationals Park and Audi Field and surrounded by a restaurant and rooftop-bar scene that fills up fast on game nights and weekends — exactly the conditions where a chauffeured drop-off beats circling for street parking or a garage space.",
      "We run Nationals and D.C. United game-day transportation, corporate happy hours and client entertainment at Navy Yard's waterfront restaurants, and residential moves for the neighborhood's fast-growing apartment towers, with the same flat, transparent pricing on every trip.",
      "A sedan or SUV covers a couple or small group for dinner or a game; a Sprinter van keeps a larger group together for a corporate outing or a game-day gathering, with everyone arriving and leaving at the same time.",
      "The post-event window is where pre-booking matters most — thousands of fans leaving Nationals Park or Audi Place at once drive rideshare pricing up fast, while your flat rate was set before first pitch or kickoff.",
    ],
    highlights: [
      { title: "Game-Day Timing Know-How", desc: "Chauffeurs who know Navy Yard's event-night traffic pattern around Nationals Park and Audi Field." },
      { title: "Waterfront Dining Familiar", desc: "Regular drop-offs at Navy Yard's restaurant and rooftop-bar row." },
      { title: "Beats Post-Event Surge", desc: "Your rate is locked at booking, immune to the price spike after a game lets out." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the ride, with gratuity, tolls and parking disclosed before confirmation." },
      { title: "24/7, 365", desc: "Day games, night games and late dinners along the waterfront — all covered." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Nationals Park & Audi Field Transportation", to: "/nationals-park-transportation" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Nationals Park & Audi Field Sports Guide — Blog", to: "/blog/nationals-park-audi-field-dc-sports-transportation" },
          { label: "Corporate Car Service — Washington, DC", to: "/corporate-car-service-dc" },
          { label: "Capitol Hill Limo Service", to: "/capitol-hill-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you drop me close to Nationals Park or Audi Field from Navy Yard?", a: "Yes — chauffeurs know the neighborhood's event-day traffic pattern and use the approach that avoids the worst of the pre-game backup." },
      { q: "Is car service cheaper than Navy Yard event parking?", a: "Often comparable once garage premiums are counted, and you skip the post-event exit queue entirely. Call (877) 609-1919 for a quote." },
      { q: "Do you handle corporate happy hours at Navy Yard restaurants?", a: "Yes — client entertainment and team happy hours along the waterfront restaurant row are a regular booking, with group vehicles available." },
      { q: "Can a group ride together to a Nationals or D.C. United game?", a: "Yes — a Sprinter van keeps a group of up to a dozen-plus together on one flat rate." },
      { q: "Do you serve Navy Yard residents for everyday trips, not just events?", a: "Yes — airport transfers, corporate travel and evenings out from Navy Yard are regular, non-event-day bookings too." },
    ],
    ctaTitle: "Book Navy Yard Car Service",
    ctaSubtitle: "Reserve chauffeured transportation for your next game or dinner. Call (877) 609-1919.",
  },

  "adams-morgan-limo-service": {
    metaTitle: "Adams Morgan, DC Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service in Adams Morgan, DC — nightlife, dining, brunch and weekend events. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "ADAMS MORGAN · WASHINGTON, DC",
    h1: "Adams Morgan, DC Limo Service",
    subtitle: "Chauffeured transportation in Adams Morgan — 18th Street's nightlife and restaurant row, weekend brunch and a safe, flat-rate ride home at the end of the night.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV staged near 18th Street in Adams Morgan, Washington, DC — 92 Limo Service",
    highlightsHeading: "Why Adams Morgan Books 92 Limo Service",
    intro: [
      "Adams Morgan's 18th Street corridor is one of DC's densest nightlife and restaurant strips, with weekend street closures, minimal parking and a late-night crowd that makes a chauffeured ride the more comfortable option both for getting there and for the ride home at the end of the night.",
      "We run bachelor and bachelorette parties, birthday celebrations, weekend brunch groups and general nights out along 18th Street and Columbia Road, bringing groups in from across DC, Maryland and Northern Virginia and getting everyone home safely afterward.",
      "A sedan handles a couple or small group; an SUV or Sprinter van keeps a larger party together for a bar crawl or celebration, with one flat rate covering the whole group instead of several people splitting separate rideshares that may not even arrive together.",
      "Late-night pickups are a specialty here — your chauffeur is staged nearby and ready whenever the group decides to call it a night, rather than waiting on rideshare availability in one of DC's busiest weekend nightlife zones.",
    ],
    highlights: [
      { title: "18th Street Nightlife Know-How", desc: "Chauffeurs familiar with weekend street closures and the neighborhood's parking realities." },
      { title: "Groups Stay Together", desc: "A Sprinter van or SUV keeps a bachelorette party, birthday group or bar crawl together all night." },
      { title: "Safe, Reliable Ride Home", desc: "Late-night pickups staged and ready whenever your group is done, no app-search required." },
      { title: "Flat, Transparent Pricing", desc: "One quote for the whole night, with gratuity, tolls and parking disclosed before confirmation." },
      { title: "24/7, 365", desc: "Weekend brunch, Friday happy hour and 2 a.m. pickups — all covered." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
      "Business Sedan — Mercedes E-Class",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Bachelor & Bachelorette Party Transportation — Blog", to: "/blog/bachelor-bachelorette-party-transportation-maryland" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Birthday Limo — Maryland", to: "/birthday-limo-maryland" },
          { label: "Dupont Circle Limo Service", to: "/dupont-circle-limo-service" },
          { label: "Party Bus — Maryland", to: "/party-bus-maryland" },
        ],
      },
    ],
    faqs: [
      { q: "Can you navigate Adams Morgan's weekend street closures?", a: "Yes — chauffeurs who regularly work 18th Street know the weekend closure pattern and plan the pickup and drop-off accordingly." },
      { q: "Do you handle bachelorette and birthday groups?", a: "Yes — a Sprinter van or SUV keeps the whole group together for a bar crawl or celebration, on one flat rate." },
      { q: "How late can you pick up from Adams Morgan?", a: "As late as your group needs — 2 a.m. pickups on a Saturday night are a routine booking, with the chauffeur staged nearby and ready." },
      { q: "Is it safer than rideshare for a late-night group?", a: "Our chauffeurs are background-checked professionals in a maintained fleet, and the vehicle and pickup time are confirmed in advance rather than left to an app's availability at 2 a.m." },
      { q: "Can you handle a weekend brunch group too?", a: "Yes — Sunday brunch along 18th Street and Columbia Road is as common a booking as Saturday-night nightlife." },
    ],
    ctaTitle: "Book Adams Morgan Car Service",
    ctaSubtitle: "Reserve a safe, flat-rate ride for your next night out. Call (877) 609-1919.",
  },

  // ============================================================
  // CITY + MISSING SERVICE-TIER PAGES (6)
  // ============================================================
  "baltimore-corporate-car-service": {
    metaTitle: "Baltimore Corporate Car Service | 92 Limo",
    metaDescription:
      "Corporate car service in Baltimore, MD — executive sedans, airport transfers, client pickups & monthly invoicing. Call (877) 609-1919.",
    eyebrow: "BALTIMORE, MD · CORPORATE",
    h1: "Baltimore Corporate Car Service",
    subtitle: "Executive chauffeured transportation for Baltimore businesses — client pickups, airport transfers, roadshows and a monthly invoice your finance team will actually like.",
    image: IMAGES.corporate,
    alt: "Executive chauffeured sedan for Baltimore corporate travel — 92 Limo Service",
    highlightsHeading: "Why Baltimore Businesses Choose 92 Limo Service",
    intro: [
      "Baltimore's corporate base runs from the Inner Harbor's financial and insurance firms to the Johns Hopkins medical and research complex, the port and logistics sector around Dundalk, and the growing biotech corridor stretching toward the Baltimore–Washington Parkway. 92 Limo Service runs corporate accounts across all of it, with the same flat, transparent pricing and professional chauffeurs everywhere.",
      "A corporate account replaces ad-hoc rideshare receipts with negotiated flat rates, priority dispatch, background-checked chauffeurs and one consolidated monthly invoice coded by traveler or cost center — a meaningful upgrade for any Baltimore company that sends executives to BWI regularly or hosts visiting clients.",
      "Visiting client and candidate transportation is a frequent Baltimore booking: a chauffeur meeting a flight at BWI with a name sign and delivering the guest directly to an Inner Harbor hotel or headquarters sets a tone that a rideshare text cannot match, for a fraction of the cost of the dinner on the same itinerary.",
      "Hourly as-directed service covers multi-stop days — a client visit downtown, a site tour near the port, and a return flight, all with the same vehicle and chauffeur rather than three separate bookings.",
    ],
    highlights: [
      { title: "Inner Harbor to Port Corridor", desc: "Daily corporate coverage from downtown Baltimore's financial district to the Dundalk port and logistics corridor." },
      { title: "Corporate Accounts", desc: "Negotiated flat rates, priority dispatch and one consolidated monthly invoice." },
      { title: "Client & Candidate Pickups", desc: "Flight-tracked BWI meet-and-greet transfers directly to your Baltimore office or hotel." },
      { title: "Hourly As-Directed Service", desc: "One vehicle and chauffeur for multi-stop business days." },
      { title: "24/7 Dispatch", desc: "Early flights and last-minute schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
          { label: "Corporate Travel Guide for Maryland Executives — Blog", to: "/blog/corporate-travel-guide-maryland" },
          { label: "Law Firm Car Service — Maryland & DC", to: "/law-firm-car-service-maryland-dc" },
          { label: "Financial Services Car Service — Maryland & DC", to: "/financial-services-car-service-maryland-dc" },
        ],
      },
    ],
    faqs: [
      { q: "Do you set up corporate accounts for Baltimore companies?", a: "Yes — negotiated flat rates, priority dispatch and one consolidated monthly invoice coded by traveler or cost center. Email info@92limo.com to set one up." },
      { q: "Can you meet visiting clients or candidates at BWI?", a: "Yes — flight-tracked pickups with a name sign at baggage claim are a routine Baltimore corporate booking, delivered directly to your office or hotel." },
      { q: "Do you cover Baltimore's whole business corridor, not just downtown?", a: "Yes — from the Inner Harbor financial district to Johns Hopkins, the port and logistics corridor near Dundalk, and the biotech corridor toward the BW Parkway." },
      { q: "How does hourly as-directed service work for a Baltimore business day?", a: "One vehicle and chauffeur stay with you for the hours you book, moving between stops — a client visit, a site tour, an airport run — on your schedule." },
      { q: "Can you provide a certificate of insurance for vendor onboarding?", a: "Yes. Certificates of insurance and vendor onboarding paperwork are available on request, and 92 Transportation LLC operates under Maryland PSC Carrier #6325." },
    ],
    ctaTitle: "Set Up Baltimore Corporate Car Service",
    ctaSubtitle: "Start a corporate account or book a single trip. Call (877) 609-1919.",
  },

  "bethesda-wedding-limo-service": {
    metaTitle: "Bethesda Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Bethesda, MD — couple's car, wedding party Sprinter, guest shuttles. Flat written quotes. Call (877) 609-1919.",
    eyebrow: "BETHESDA, MD · WEDDINGS",
    h1: "Bethesda Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation in Bethesda — the couple's car, a wedding-party Sprinter and hotel guest shuttles, planned around your Bethesda venue.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Bethesda, MD wedding — 92 Limo Service",
    highlightsHeading: "Why Bethesda Couples Choose 92 Limo Service",
    intro: [
      "Bethesda's wedding venues — from downtown hotel ballrooms to estate properties along the Beltway's inner suburbs — bring their own logistics: tight downtown drop-off zones, guests staying across several nearby hotels, and a getting-ready-to-ceremony drive that often crosses the Beltway or Wisconsin Avenue during peak traffic. We plan the day around all of it.",
      "A typical Bethesda wedding books a chauffeured sedan or SUV for the couple, a Sprinter van for the wedding party between prep, photos and ceremony, and looped guest shuttles between host hotels and the venue — staggered at night's end so early leavers and last dancers both get home gracefully.",
      "We have driven Bethesda's downtown hotel ballrooms and the area's private estate venues directly, so timeline planning accounts for the real drive times and loading-zone realities of each, not generic estimates.",
      "Every quote is flat and written in advance — vehicles, hours, fuel, tolls and gratuity policy spelled out before you book, so there is nothing to negotiate on the wedding day itself.",
    ],
    highlights: [
      { title: "Bethesda Venue Experience", desc: "Chauffeurs who have worked Bethesda's downtown hotel ballrooms and estate venues before." },
      { title: "The Full Wedding-Day Fleet", desc: "A chauffeured sedan or SUV for the couple, a Sprinter for the wedding party, and guest shuttles." },
      { title: "Beltway-Aware Timeline Planning", desc: "Routes and pickup times built around real Beltway and Wisconsin Avenue traffic, not optimistic guesses." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
      { title: "Book 6-9 Months Ahead", desc: "Peak Bethesda wedding Saturdays sell out early — early booking locks the vehicle and the price." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Bethesda Limo Service", to: "/bethesda-limo-service" },
          { label: "Bethesda Corporate Car Service", to: "/bethesda-corporate-car-service" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
          { label: "How to Choose a Wedding Limo Service in Maryland — Blog", to: "/blog/wedding-limo-service-maryland" },
          { label: "Montgomery County, MD Limo Service", to: "/montgomery-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "What vehicles do Bethesda weddings typically use?", a: "A chauffeured sedan or SUV for the couple, a Sprinter van for the wedding party, and guest shuttles when hotels sit away from the venue. The right mix follows from mapping your specific day." },
      { q: "Have you worked Bethesda's downtown wedding venues before?", a: "Yes — our chauffeurs are familiar with Bethesda's hotel ballrooms and nearby estate venues, including their loading zones and timing quirks." },
      { q: "How far in advance should we book a Bethesda wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October — Sprinters and limousines sell out first." },
      { q: "What should a wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms. We quote flat and transparent from the first conversation." },
      { q: "Do you provide guest shuttles for Bethesda hotels?", a: "Yes — timed hotel-to-venue loops with staggered returns, built with your planner's timeline." },
    ],
    ctaTitle: "Book Your Bethesda Wedding Transportation",
    ctaSubtitle: "Tell us the date, venue and guest count, and we'll map the rest. Call (877) 609-1919.",
  },

  "bethesda-prom-limo-service": {
    metaTitle: "Bethesda Prom Limo Service | 92 Limo",
    metaDescription:
      "Prom limo & party-bus service in Bethesda, MD — safe, background-checked chauffeurs, flat rates, group Sprinter vans. Call (877) 609-1919.",
    eyebrow: "BETHESDA, MD · PROM",
    h1: "Bethesda Prom Limo Service",
    subtitle: "Safe, professionally chauffeured prom transportation for Bethesda-area students — flat rates parents can plan around and a Sprinter van that keeps the whole group together.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV for Bethesda, MD prom night — 92 Limo Service",
    highlightsHeading: "Why Bethesda Parents Choose 92 Limo Service",
    intro: [
      "Prom night in Bethesda means a group of students moving between a photo location, dinner, the dance itself and often an after-party — exactly the kind of multi-stop evening a background-checked professional chauffeur handles better than a rideshare patchwork or a parent playing shuttle driver.",
      "A Sprinter van keeps a full group of friends together for the whole night on one flat rate, with a professional chauffeur who stays with the group rather than dropping off and disappearing between stops.",
      "Parents book us specifically for the accountability: a licensed, insured company with background-checked chauffeurs, a confirmed pickup and drop-off schedule, and a direct phone line if plans change mid-evening — a materially different arrangement than an unsupervised ride-hailing app.",
      "Spring prom season is Bethesda's tightest vehicle-availability window of the year, competing with the same Sprinter and limousine fleet that Montgomery County's other high schools are booking — reserve well ahead for your date.",
    ],
    highlights: [
      { title: "Background-Checked Chauffeurs", desc: "A licensed, insured professional driver, not an unsupervised rideshare arrangement." },
      { title: "The Whole Group, One Vehicle", desc: "A Sprinter van keeps a full group of friends together for photos, dinner and the dance." },
      { title: "Parent Peace of Mind", desc: "Confirmed pickup and drop-off schedule, with a direct phone line if plans change." },
      { title: "Flat, Transparent Pricing", desc: "One rate for the night, agreed before you book." },
      { title: "Book Early for Prom Season", desc: "Late April through early June is Maryland's tightest vehicle-availability window." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325." },
    ],
    vehicles: [
      "Sprinter Shuttle — Mercedes Sprinter",
      "Premium SUV — Lincoln Navigator",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Bethesda Limo Service", to: "/bethesda-limo-service" },
          { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
          { label: "Best Limo Service for Prom in Maryland — Blog", to: "/blog/best-limo-service-for-prom-in-maryland" },
          { label: "Rockville Prom Limo Service", to: "/rockville-prom-limo-service" },
          { label: "Silver Spring Prom Limo Service", to: "/silver-spring-prom-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Are your prom chauffeurs background-checked?", a: "Yes — every chauffeur is background-checked and professionally trained, and the vehicle and schedule are confirmed with parents in advance." },
      { q: "How many students fit in one vehicle for prom?", a: "A Sprinter van comfortably seats a full group of friends together; smaller groups can take a premium SUV. Tell us the group size and we'll recommend the right fit." },
      { q: "Can parents confirm the schedule and reach the chauffeur directly?", a: "Yes — pickup, dinner and drop-off times are confirmed in advance, and dispatch is reachable by phone throughout the night." },
      { q: "How far ahead should we book Bethesda prom transportation?", a: "As early as possible — prom season from late April through early June is the tightest vehicle-availability window of the year across Montgomery County." },
      { q: "What does Bethesda prom transportation cost?", a: "A party-ready vehicle for a five-hour evening typically runs $500-$900 depending on vehicle and date. Call (877) 609-1919 for an exact quote." },
    ],
    ctaTitle: "Book Bethesda Prom Transportation",
    ctaSubtitle: "Reserve your date before the spring prom-season rush. Call (877) 609-1919.",
  },

  "potomac-wedding-limo-service": {
    metaTitle: "Potomac, MD Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Potomac, MD — estate venues, couple's car, wedding-party Sprinter, guest shuttles. Call (877) 609-1919.",
    eyebrow: "POTOMAC, MD · WEDDINGS",
    h1: "Potomac, MD Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation for Potomac's estate venues and private properties — planned around your specific ceremony, photos and reception timeline.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Potomac, MD estate wedding — 92 Limo Service",
    highlightsHeading: "Why Potomac Couples Choose 92 Limo Service",
    intro: [
      "Potomac's large-lot estate properties and private venues bring a specific wedding-transportation challenge: long private driveways, limited turnaround space for oversized vehicles, and guests often staying well away from the venue itself in Bethesda or Rockville hotels. We plan around all of it, vehicle by vehicle.",
      "A chauffeured sedan or SUV typically carries the couple for their key day-of moves; a Sprinter van moves the wedding party between prep, photos and ceremony without the turning-radius problems a stretch limousine can run into on a gravel or narrow estate driveway; and looped guest shuttles connect host hotels to the venue on a staggered schedule.",
      "Potomac's wooded, winding roads also mean photo-stop logistics matter — we build in the extra few minutes a private-property location adds to the timeline, rather than working off a generic estimate.",
      "Every quote is flat and written in advance: vehicles, hours, fuel, tolls and gratuity policy spelled out before you book.",
    ],
    highlights: [
      { title: "Estate & Private-Venue Experience", desc: "Vehicles sized correctly for long driveways and limited turnaround space." },
      { title: "The Full Wedding-Day Fleet", desc: "Couple's car, wedding-party Sprinter and guest shuttles from host hotels." },
      { title: "Potomac Road Know-How", desc: "Chauffeurs who know the area's wooded, winding roads and realistic drive times." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
      { title: "Book 6-9 Months Ahead", desc: "Peak Potomac wedding Saturdays sell out early." },
    ],
    vehicles: [
      "Premium SUV — Lincoln Navigator",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Potomac Limo Service", to: "/potomac-limo-service" },
          { label: "North Potomac Limo Service", to: "/north-potomac-limo-service" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
          { label: "How to Choose a Wedding Limo Service in Maryland — Blog", to: "/blog/wedding-limo-service-maryland" },
          { label: "Montgomery County, MD Limo Service", to: "/montgomery-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you handle a wedding at a private Potomac estate?", a: "Yes — we size vehicles for long driveways and limited turnaround space, and a Sprinter often replaces a stretch limousine for exactly this reason." },
      { q: "What vehicles work best for a Potomac estate wedding?", a: "A chauffeured sedan or SUV for the couple and a Sprinter van for the wedding party are the standard, driveway-friendly combination." },
      { q: "Do you provide guest shuttles from Bethesda or Rockville hotels?", a: "Yes — timed loops between host hotels and the venue, staggered at night's end for early leavers and last dancers alike." },
      { q: "How far in advance should we book a Potomac wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October." },
      { q: "What should a Potomac wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms — no vague 'call for pricing' quotes." },
    ],
    ctaTitle: "Book Your Potomac Wedding Transportation",
    ctaSubtitle: "Tell us the venue and guest count, and we'll map the vehicles you need. Call (877) 609-1919.",
  },

  "annapolis-prom-limo-service": {
    metaTitle: "Annapolis Prom Limo Service | 92 Limo",
    metaDescription:
      "Prom limo & party-bus service in Annapolis, MD — safe, background-checked chauffeurs, flat rates, Sprinter vans for groups. Call (877) 609-1919.",
    eyebrow: "ANNAPOLIS, MD · PROM",
    h1: "Annapolis Prom Limo Service",
    subtitle: "Safe, professionally chauffeured prom transportation for Annapolis-area students — a Sprinter van for the group and a schedule parents can confirm in advance.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV for Annapolis, MD prom night — 92 Limo Service",
    highlightsHeading: "Why Annapolis Parents Choose 92 Limo Service",
    intro: [
      "Annapolis prom night typically means a group photo stop near City Dock or the Naval Academy waterfront, dinner downtown, and the dance itself — a route that benefits from a chauffeur who already knows Annapolis's historic, permit-sensitive downtown streets and where a Sprinter van can actually park.",
      "A Sprinter van keeps a full group of friends together for the whole night on one flat rate, with a professional chauffeur who stays with the group through photos, dinner and the dance rather than dropping off and disappearing.",
      "Parents book us for the accountability it provides: a licensed, insured company with background-checked chauffeurs, a confirmed schedule, and a direct phone line if an after-party or timing change comes up mid-evening.",
      "Spring prom season is Anne Arundel County's tightest vehicle-availability window — reserve well ahead, since the same fleet also covers nearby Annapolis-area weddings running through the same calendar weeks.",
    ],
    highlights: [
      { title: "Annapolis Downtown Know-How", desc: "Chauffeurs familiar with the historic district's narrow, permit-sensitive streets." },
      { title: "Background-Checked Chauffeurs", desc: "A licensed, insured professional driver, not an unsupervised arrangement." },
      { title: "The Whole Group, One Vehicle", desc: "A Sprinter van keeps a full group of friends together for photos, dinner and the dance." },
      { title: "Parent Peace of Mind", desc: "Confirmed pickup and drop-off schedule, with a direct phone line all night." },
      { title: "Flat, Transparent Pricing", desc: "One rate for the night, agreed before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325." },
    ],
    vehicles: [
      "Sprinter Shuttle — Mercedes Sprinter",
      "Premium SUV — Lincoln Navigator",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Annapolis Limo Service", to: "/annapolis-limo-service" },
          { label: "Annapolis Wedding Limo Service", to: "/annapolis-wedding-limo-service" },
          { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
          { label: "Best Limo Service for Prom in Maryland — Blog", to: "/blog/best-limo-service-for-prom-in-maryland" },
          { label: "Anne Arundel County, MD Limo Service", to: "/anne-arundel-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you navigate Annapolis's historic downtown for prom photos?", a: "Yes — our chauffeurs know the historic district's narrow, permit-sensitive streets and where a Sprinter van can realistically stop and park." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes — every chauffeur is background-checked and professionally trained, with the vehicle and schedule confirmed with parents in advance." },
      { q: "How many students fit in one vehicle?", a: "A Sprinter van comfortably seats a full group together; smaller groups can take a premium SUV. Tell us the group size for a recommendation." },
      { q: "How far ahead should we book Annapolis prom transportation?", a: "As early as possible — late April through early June is the tightest vehicle-availability window of the year in Anne Arundel County." },
      { q: "What does Annapolis prom transportation cost?", a: "A party-ready vehicle for a five-hour evening typically runs $500-$900 depending on vehicle and date. Call (877) 609-1919 for an exact quote." },
    ],
    ctaTitle: "Book Annapolis Prom Transportation",
    ctaSubtitle: "Reserve your date before the spring prom-season rush. Call (877) 609-1919.",
  },

  "hunt-valley-wedding-limo-service": {
    metaTitle: "Hunt Valley Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Hunt Valley, MD — couple's car, wedding-party Sprinter, guest shuttles. Flat written quotes. Call (877) 609-1919.",
    eyebrow: "HUNT VALLEY, MD · WEDDINGS",
    h1: "Hunt Valley Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation in Hunt Valley — hotel ballroom and estate-venue weddings, with the couple's car, a wedding-party Sprinter and guest shuttles.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Hunt Valley, MD wedding — 92 Limo Service",
    highlightsHeading: "Why Hunt Valley Couples Choose 92 Limo Service",
    intro: [
      "Hunt Valley's mix of hotel ballroom venues and nearby Baltimore County estate properties makes it a popular northern-suburb wedding destination, with a drive time to downtown Baltimore and BWI that matters for guests and vendors arriving from out of town.",
      "A chauffeured sedan or SUV carries the couple for the day's key moves; a Sprinter van keeps the wedding party together between getting-ready locations, photos and the ceremony; and looped guest shuttles connect nearby hotels to the venue, staggered at night's end.",
      "We have worked Hunt Valley's hotel venues and the area's estate properties directly, so the timeline accounts for real loading-zone and driveway realities rather than generic assumptions.",
      "Every quote is flat and written in advance — vehicles, hours, fuel, tolls and gratuity policy spelled out before you book, so the wedding day itself has nothing left to negotiate.",
    ],
    highlights: [
      { title: "Hunt Valley Venue Experience", desc: "Chauffeurs who have worked the area's hotel ballrooms and estate venues before." },
      { title: "The Full Wedding-Day Fleet", desc: "Couple's car, wedding-party Sprinter and guest shuttles from nearby hotels." },
      { title: "BWI & Baltimore Proximity", desc: "Convenient positioning for out-of-town guests and vendors flying into BWI." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
      { title: "Book 6-9 Months Ahead", desc: "Peak Hunt Valley wedding Saturdays sell out early." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Hunt Valley Limo Service", to: "/hunt-valley-limo-service" },
          { label: "Hunt Valley Corporate Car Service", to: "/hunt-valley-corporate-car-service" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
          { label: "How to Choose a Wedding Limo Service in Maryland — Blog", to: "/blog/wedding-limo-service-maryland" },
          { label: "Baltimore County, MD Limo Service", to: "/baltimore-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "What vehicles do Hunt Valley weddings typically use?", a: "A chauffeured sedan or SUV for the couple, a Sprinter van for the wedding party, and guest shuttles when hotels sit away from the venue." },
      { q: "Have you worked Hunt Valley's wedding venues before?", a: "Yes — our chauffeurs are familiar with the area's hotel ballrooms and nearby Baltimore County estate venues." },
      { q: "How far in advance should we book a Hunt Valley wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October." },
      { q: "Can you handle guests flying into BWI for the wedding?", a: "Yes — Hunt Valley's position relative to BWI makes coordinated guest and vendor airport pickups a straightforward addition to the wedding-day plan." },
      { q: "What should a wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms." },
    ],
    ctaTitle: "Book Your Hunt Valley Wedding Transportation",
    ctaSubtitle: "Tell us the date, venue and guest count, and we'll map the rest. Call (877) 609-1919.",
  },

  // ============================================================
  // NEW VIRGINIA CITIES (2)
  // ============================================================
  "purcellville-va-limo-service": {
    metaTitle: "Purcellville, VA Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service in Purcellville, VA — Dulles transfers, Loudoun wine country, weddings & corporate travel. Call (877) 609-1919.",
    eyebrow: "PURCELLVILLE, VA · LOUDOUN COUNTY",
    h1: "Purcellville, VA Limo Service",
    subtitle: "Chauffeured transportation for Purcellville and western Loudoun County — Dulles airport transfers, wine-country tours and weddings at the area's farm and vineyard venues.",
    image: IMAGES.wineTour,
    alt: "Luxury chauffeured SUV serving Purcellville, Virginia — 92 Limo Service",
    highlightsHeading: "Why Purcellville Chooses 92 Limo Service",
    intro: [
      "Purcellville sits at the edge of Loudoun County's wine country, about 25 miles from Washington Dulles International Airport — close enough for a straightforward flight-tracked transfer, far enough out that reliable, pre-booked transportation matters more than it would closer to the Beltway.",
      "We run Dulles airport transfers to and from Purcellville and the surrounding western Loudoun communities daily, alongside wine-country tour days through the area's farm wineries and distilleries, and weddings at the region's barn and vineyard venues.",
      "A sedan handles an airport run for one or two travelers; a Sprinter van is the standard choice for a full wine-tour group moving between several wineries on one flat, hourly rate with a designated chauffeur who knows the roads.",
      "Local wedding venues around Purcellville tend to sit on gravel lanes and working farm properties, so we plan vehicle choice around the actual driveway and turnaround space rather than defaulting to a stretch limousine that will not fit.",
    ],
    highlights: [
      { title: "Dulles Proximity", desc: "About 25 miles from IAD, with flight tracking and complimentary wait time on every pickup." },
      { title: "Loudoun Wine Country Know-How", desc: "Chauffeurs who know the area's farm wineries, distilleries and back roads." },
      { title: "Farm & Vineyard Wedding Experience", desc: "Vehicles sized correctly for gravel lanes and working farm properties." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the ride, with every charge disclosed before confirmation." },
      { title: "24/7, 365", desc: "Early Dulles departures and late wine-tour returns — all covered." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Loudoun Wine Country Limo Service", to: "/loudoun-wine-country-limo-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "IAD to Leesburg", to: "/iad-to-leesburg" },
          { label: "Loudoun County Wine Country Chauffeur Tour — Blog", to: "/blog/loudoun-county-wine-country-chauffeur-tour" },
          { label: "Leesburg, VA Limo Service", to: "/leesburg-va-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Purcellville from Dulles Airport?", a: "About 25 miles, roughly 35-45 minutes depending on traffic on Route 7. Every airport ride is flight-tracked with complimentary wait time included." },
      { q: "Do you run wine-tour days through Loudoun's wine country from Purcellville?", a: "Yes — a Sprinter van is the standard choice for a group moving between several wineries on one flat, hourly rate." },
      { q: "Can you handle a wedding at a Purcellville-area farm or vineyard venue?", a: "Yes — we size the vehicle for gravel lanes and working farm properties, often recommending a Sprinter over a stretch limousine for exactly that reason." },
      { q: "How much does Purcellville car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 for a quote." },
      { q: "Do you serve the rest of western Loudoun County too?", a: "Yes — Round Hill, Hamilton, Lovettsville and the surrounding western Loudoun communities are part of our regular service area." },
    ],
    ctaTitle: "Book Purcellville Car Service",
    ctaSubtitle: "Reserve a Dulles transfer, wine tour or wedding-day vehicle. Call (877) 609-1919.",
  },

  "haymarket-va-limo-service": {
    metaTitle: "Haymarket, VA Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service in Haymarket, VA — Dulles transfers, corporate travel, weddings & event transportation. Call (877) 609-1919.",
    eyebrow: "HAYMARKET, VA · PRINCE WILLIAM COUNTY",
    h1: "Haymarket, VA Limo Service",
    subtitle: "Chauffeured transportation for Haymarket and Prince William County — Dulles airport transfers, corporate travel and wedding-day transportation.",
    image: IMAGES.suv,
    alt: "Luxury chauffeured sedan serving Haymarket, Virginia — 92 Limo Service",
    highlightsHeading: "Why Haymarket Chooses 92 Limo Service",
    intro: [
      "Haymarket has grown quickly along the Route 15 and I-66 corridor in Prince William County, bringing in both new residential communities and a corporate base that regularly sends travelers through Dulles and, for East Coast trips, Reagan National.",
      "We run flight-tracked airport transfers from Haymarket to Dulles, Reagan National and BWI, corporate travel for the area's growing business park tenants, and wedding and event transportation for the region's venues, with the same flat, transparent pricing on every trip.",
      "A sedan covers a standard airport run or business trip; an SUV handles a family with luggage; a Sprinter van moves a wedding party or corporate group together on one flat rate.",
      "Haymarket sits within range of Loudoun's wine country to the north and the Manassas and Gainesville business corridors to the south, so we regularly combine a Haymarket pickup with stops in either direction under one hourly reservation.",
    ],
    highlights: [
      { title: "Route 15 / I-66 Corridor Coverage", desc: "Daily service for Haymarket's growing residential and business communities." },
      { title: "All Three Regional Airports", desc: "Dulles, Reagan National and BWI transfers, all flight-tracked." },
      { title: "Flat, Transparent Pricing", desc: "One quote covering the ride, with every charge disclosed before confirmation." },
      { title: "Wine Country & Corridor Combination Trips", desc: "Haymarket pickups easily paired with Loudoun wine-country or Manassas-area stops under one hourly booking." },
      { title: "24/7, 365", desc: "Early flights, late events and last-minute changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Midsize SUV — Lincoln Nautilus",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Manassas, VA Limo Service", to: "/manassas-va-limo-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "Loudoun Wine Country Limo Service", to: "/loudoun-wine-country-limo-service" },
          { label: "Corporate Car Service — Tysons Corner, VA", to: "/corporate-car-service-tysons-corner-va" },
          { label: "Purcellville, VA Limo Service", to: "/purcellville-va-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Which airports do you serve from Haymarket?", a: "Dulles, Reagan National and BWI are all served from Haymarket, with flight tracking and complimentary wait time on every pickup." },
      { q: "Can you combine a Haymarket pickup with a wine-country or Manassas stop?", a: "Yes — hourly as-directed service lets us build a route covering Haymarket plus Loudoun wine country or the Manassas/Gainesville corridor under one reservation." },
      { q: "Do you serve Haymarket's business parks for corporate travel?", a: "Yes — corporate accounts with consolidated monthly invoicing are available for the area's growing business tenant base." },
      { q: "Can you handle a wedding in or near Haymarket?", a: "Yes — a Sprinter van or SUV for the wedding party, with vehicle choice planned around your specific venue." },
      { q: "How much does Haymarket car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 for a quote." },
    ],
    ctaTitle: "Book Haymarket Car Service",
    ctaSubtitle: "Reserve airport, corporate or wedding-day transportation. Call (877) 609-1919.",
  },

  // ============================================================
  // NICHE VERTICAL (1)
  // ============================================================
  "pet-friendly-car-service-maryland": {
    metaTitle: "Pet-Friendly Car Service in Maryland | 92 Limo",
    metaDescription:
      "Pet-friendly chauffeured car service across Maryland — airport transfers, vet visits & moves with your dog or cat. Flat rates. Call (877) 609-1919.",
    eyebrow: "MARYLAND · PET-FRIENDLY TRANSPORTATION",
    h1: "Pet-Friendly Car Service in Maryland",
    subtitle: "Chauffeured transportation that welcomes your dog or cat — airport transfers, vet appointments and moves, in a vehicle prepared in advance for your pet.",
    image: IMAGES.suv,
    alt: "Luxury chauffeured SUV prepared for pet-friendly transportation in Maryland — 92 Limo Service",
    highlightsHeading: "Why Maryland Pet Owners Choose 92 Limo Service",
    intro: [
      "Traveling with a pet rules out most rideshare trips before they start — many drivers decline outright, and the ones who accept offer no guarantee of a clean, prepared vehicle or a driver comfortable with an anxious animal in the back seat. A pre-arranged, pet-friendly chauffeured ride solves the problem by setting expectations in advance rather than at the curb.",
      "We accommodate well-behaved dogs and cats on airport transfers, veterinary and grooming appointments, and household moves, with the vehicle and any needed protective seat covers or carriers arranged ahead of time based on what you tell us at booking.",
      "A full-size SUV is the most common choice for pet travel, offering more room for a carrier or crate than a sedan; a Sprinter van suits a larger dog, multiple pets, or a household move that includes the family pet alongside luggage and boxes.",
      "Tell us your pet's size, carrier needs and temperament when you book, and the right vehicle with the right setup will be ready — no last-minute negotiation and no risk of being turned away.",
    ],
    highlights: [
      { title: "Arranged in Advance", desc: "Tell us about your pet at booking and the vehicle is prepared accordingly — no curb-side surprises." },
      { title: "Airport Transfers With Pets", desc: "BWI, DCA and IAD transfers that accommodate a carrier or crate." },
      { title: "Vet & Grooming Appointments", desc: "Reliable, flat-rate rides for routine and urgent pet appointments." },
      { title: "Moving Day With the Family Pet", desc: "A Sprinter van keeps your pet, luggage and boxes together in one trip." },
      { title: "Flat, Transparent Pricing", desc: "One quote agreed before you book, with any pet-related arrangements included." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Luxury SUV — Chevrolet Suburban",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Maryland Car Service", to: "/maryland-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Senior Car Service — Maryland", to: "/senior-car-service-maryland" },
          { label: "Pet-Friendly Luxury Transportation Guide — Blog", to: "/blog/pet-friendly-luxury-transportation-guide" },
          { label: "Car Seat Service", to: "/car-seat-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do I need to tell you in advance that I'm traveling with a pet?", a: "Yes — tell us your pet's size, carrier needs and temperament when you book, so the vehicle is prepared before you arrive." },
      { q: "What kind of pets can you accommodate?", a: "Well-behaved dogs and cats, typically in a carrier or crate for the ride, are welcome on most bookings. Let us know the specifics when you reserve." },
      { q: "Can I bring my dog on an airport transfer?", a: "Yes — airport transfers with a pet are a regular booking, with an SUV or Sprinter van offering more room for a carrier than a standard sedan." },
      { q: "Is there an extra charge for pet-friendly service?", a: "Any pet-related arrangements are disclosed and included in your flat quote before you confirm the booking — no curbside surprise fees." },
      { q: "Can you help with a household move that includes a pet?", a: "Yes — a Sprinter van keeps your pet, luggage and boxes together in one trip rather than requiring a separate arrangement." },
    ],
    ctaTitle: "Book Pet-Friendly Car Service",
    ctaSubtitle: "Tell us about your pet and we'll have the right vehicle ready. Call (877) 609-1919.",
  },

  // ============================================================
  // DC NEIGHBORHOOD (replacement #15) + SERVICE-TIER GAP (replacement #16)
  // ============================================================
  // Four originally-drafted venue pages (Capital One Arena, M&T Bank
  // Stadium, Merriweather Post Pavilion, Royal Farms Arena) were cut after
  // build-verification found they duplicated existing coverage already
  // hardcoded directly in landingPages.js itself (not in any batch file,
  // which is why the initial slug-collision check against batch files alone
  // missed them): capital-one-arena-transportation and
  // merriweather-post-pavilion-transportation are exact-slug duplicates,
  // mt-bank-stadium-transportation and cfg-bank-arena-transportation (the
  // current name for the venue formerly called Royal Farms Arena) are
  // same-topic duplicates under different slugs. These two pages replace
  // them to keep the batch at 16 genuinely new pages.
  "foggy-bottom-limo-service": {
    metaTitle: "Foggy Bottom, DC Limo Service | 92 Limo",
    metaDescription:
      "Chauffeured limo & car service in Foggy Bottom, DC — GWU, State Department, Kennedy Center and the Watergate. Call (877) 609-1919.",
    eyebrow: "FOGGY BOTTOM · WASHINGTON, DC",
    h1: "Foggy Bottom, DC Limo Service",
    subtitle: "Chauffeured transportation in Foggy Bottom — George Washington University, the State Department corridor, the Kennedy Center and the Watergate complex.",
    image: IMAGES.sClassFirst,
    alt: "Luxury chauffeured sedan near George Washington University in Foggy Bottom, DC — 92 Limo Service",
    highlightsHeading: "Why Foggy Bottom Books 92 Limo Service",
    intro: [
      "Foggy Bottom sits at the intersection of George Washington University's dense campus, the State Department and World Bank corridor along 21st and 23rd Streets, and the Kennedy Center and Watergate complex along the Potomac waterfront — a neighborhood where campus visitor rules, government-building security and limited residential parking all apply within a few blocks of each other.",
      "We run GWU family weekends, move-in days and commencement ceremonies, State Department and World Bank visitor and official transportation, and Kennedy Center performance nights, for clients across DC, Maryland and Northern Virginia.",
      "A sedan covers an individual meeting or a couple heading to a Kennedy Center performance; an SUV or Sprinter van handles a GWU family weekend group or a visiting delegation, with hourly as-directed service keeping one vehicle on call across a full day of campus or government-building stops.",
      "Chauffeurs are familiar with the neighborhood's security checkpoints, GWU's visitor parking restrictions, and the Kennedy Center's performance-night drop-off pattern, so timing and access are never a last-minute question.",
    ],
    highlights: [
      { title: "GWU Campus Familiar", desc: "Move-in days, family weekends and commencement ceremonies are regular bookings." },
      { title: "State Department & World Bank Corridor", desc: "Chauffeurs experienced with government-building security and visitor procedures." },
      { title: "Kennedy Center Performance Nights", desc: "Drop-off and pickup timed to the performance schedule, not a fixed clock." },
      { title: "Flat & Hourly Pricing", desc: "Point-to-point rides are flat rate; multi-stop days are hourly with transparent terms." },
      { title: "24/7, 365", desc: "Early campus move-ins, government meetings and late performance nights — all covered." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
          { label: "Georgetown, DC Limo Service", to: "/georgetown-dc-limo-service" },
          { label: "Corporate Car Service — Washington, DC", to: "/corporate-car-service-dc" },
          { label: "College Graduation Season Transportation — Blog", to: "/blog/college-graduation-season-transportation-maryland-umd" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve George Washington University family weekends and move-in day?", a: "Yes — these are regular bookings, often paired with an airport pickup for family flying in." },
      { q: "Can you navigate State Department and World Bank building security?", a: "Yes — our chauffeurs are experienced with the corridor's government-building check-in procedures and restricted parking." },
      { q: "Do you handle Kennedy Center performance nights?", a: "Yes — drop-off and pickup are timed to the actual performance schedule, including a staged pickup after the show rather than a fixed-time guess." },
      { q: "How much does Foggy Bottom car service cost?", a: "It's a flat rate confirmed before you book, based on vehicle class and exact addresses. Call (877) 609-1919 for a quote." },
      { q: "Can you keep one vehicle with us for a full day of campus and government meetings?", a: "Yes — hourly as-directed service keeps one vehicle and chauffeur with you across multiple stops in the neighborhood." },
    ],
    ctaTitle: "Book Foggy Bottom Car Service",
    ctaSubtitle: "Reserve chauffeured transportation in Foggy Bottom. Call (877) 609-1919.",
  },

  "owings-mills-corporate-car-service": {
    metaTitle: "Owings Mills Corporate Car Service | 92 Limo",
    metaDescription:
      "Corporate car service in Owings Mills, MD — executive sedans, BWI transfers, client pickups & monthly invoicing. Call (877) 609-1919.",
    eyebrow: "OWINGS MILLS, MD · CORPORATE",
    h1: "Owings Mills Corporate Car Service",
    subtitle: "Executive chauffeured transportation for Owings Mills businesses — client pickups, BWI airport transfers and a monthly invoice your finance team will actually like.",
    image: IMAGES.corporate,
    alt: "Executive chauffeured sedan for Owings Mills, MD corporate travel — 92 Limo Service",
    highlightsHeading: "Why Owings Mills Businesses Choose 92 Limo Service",
    intro: [
      "Owings Mills has grown into one of Baltimore County's denser office and corporate campus hubs, anchored by a mix of financial services, insurance and professional-services employers along the McDonogh Road and Reisterstown Road corridor. 92 Limo Service runs corporate accounts here with the same flat, transparent pricing and professional chauffeurs we bring to every trip.",
      "A corporate account replaces ad-hoc rideshare receipts with negotiated flat rates, priority dispatch, background-checked chauffeurs and one consolidated monthly invoice coded by traveler or cost center — a meaningful upgrade for any Owings Mills company that sends executives to BWI regularly or hosts visiting clients.",
      "Visiting client and candidate transportation is a frequent booking here too: a chauffeur meeting a flight at BWI with a name sign and delivering the guest directly to an Owings Mills office or nearby hotel sets a tone a rideshare text cannot match.",
      "Hourly as-directed service covers multi-stop business days — a meeting in Owings Mills, a site visit downtown, and a return flight, all with the same vehicle and chauffeur.",
    ],
    highlights: [
      { title: "Owings Mills Corridor Coverage", desc: "Daily corporate service along the McDonogh Road and Reisterstown Road office corridor." },
      { title: "Corporate Accounts", desc: "Negotiated flat rates, priority dispatch and one consolidated monthly invoice." },
      { title: "Client & Candidate Pickups", desc: "Flight-tracked BWI meet-and-greet transfers directly to your Owings Mills office or hotel." },
      { title: "Hourly As-Directed Service", desc: "One vehicle and chauffeur for multi-stop business days." },
      { title: "24/7 Dispatch", desc: "Early flights and last-minute schedule changes handled around the clock." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Owings Mills Limo Service", to: "/owings-mills-limo-service" },
          { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
          { label: "Baltimore Corporate Car Service", to: "/baltimore-corporate-car-service" },
          { label: "Financial Services Car Service — Maryland & DC", to: "/financial-services-car-service-maryland-dc" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you set up corporate accounts for Owings Mills companies?", a: "Yes — negotiated flat rates, priority dispatch and one consolidated monthly invoice coded by traveler or cost center. Email info@92limo.com to set one up." },
      { q: "Can you meet visiting clients or candidates at BWI?", a: "Yes — flight-tracked pickups with a name sign at baggage claim are a routine booking, delivered directly to your Owings Mills office or hotel." },
      { q: "How far is Owings Mills from BWI?", a: "Roughly 20-25 miles, typically 30-40 minutes depending on traffic on I-795 and the Baltimore Beltway." },
      { q: "How does hourly as-directed service work for an Owings Mills business day?", a: "One vehicle and chauffeur stay with you for the hours you book, moving between stops — a meeting, a site visit, an airport run — on your schedule." },
      { q: "Can you provide a certificate of insurance for vendor onboarding?", a: "Yes. Certificates of insurance and vendor onboarding paperwork are available on request, and 92 Transportation LLC operates under Maryland PSC Carrier #6325." },
    ],
    ctaTitle: "Set Up Owings Mills Corporate Car Service",
    ctaSubtitle: "Start a corporate account or book a single trip. Call (877) 609-1919.",
  },
};
