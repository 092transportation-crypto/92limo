// SEO round-6 push (2026-10-23) — SEMrush keyword-gap report.
// Same shape as MARYLAND_LANDING_PAGES / MARYLAND_BATCH3-9_PAGES (see
// marylandPages.js header). Merged into LANDING_PAGES by src/lib/landingPages.js.
//
// Deliberately NOT named marylandPagesBatchN.js: a concurrent session was
// independently working on an unrelated "BWI content expansion" task in this
// same repo and happened to also reach for the next sequential batch number
// (marylandPagesBatch10.js) for its own content. To avoid any file-path or
// import-line collision with that session (or any future session reaching
// for the next batch number), this file was moved to a descriptive,
// non-sequential name instead. See src/lib/bwiAirportPages.js for that
// session's equivalent file and its own note on this.
//
// 22 new keyword-targeted pages plus one extra (`maryland-wedding-limo-service`,
// see note below) = 23 entries total.
//
// Three keyword-cannibalization clusters are handled deliberately rather than
// stamped out identically — see the comment above each cluster:
//   1. BWI <-> Dulles (IAD): `bwi-to-dulles-airport` and `bwi-to-washington-dulles`
//      sit alongside the EXISTING `bwi-to-dulles` page (same physical route).
//      Each of the three gets a distinct angle (see below) instead of three
//      near-identical rewrites of the same copy.
//   2. Baltimore car-service cluster: `baltimore-car-service`,
//      `private-car-service-baltimore`, `town-car-service-baltimore`,
//      `car-service-baltimore-to-dc`, `limo-service-baltimore-to-dc` each take
//      a different angle (general/point-to-point, privacy/VIP, classic sedan,
//      business commuter route, group/event route) so they don't read as the
//      same page with the H1 swapped. They also sit near two EXISTING pages
//      covering adjacent ground (`bwi-to-washington-dc`, `baltimore-to-washington-dc`),
//      so the Baltimore<->DC pages here lean specifically into "car service"
//      (daily/business point-to-point) vs "limo service" (groups/events) to
//      stay distinct from those too.
//   3. Columbia, MD cluster: `cab-service-columbia-md`, `columbia-limousine-service`,
//      `limo-service-columbia-md`, `car-service-columbia-md` each take a
//      different angle (taxi-alternative/local errands, special-occasion
//      limousine, corporate/business, everyday hourly car service). Note:
//      `limo-service-columbia-md` overlaps conceptually with the EXISTING
//      generated page `columbia-md-limo-service` (h1 "Limo Service in
//      Columbia, MD") — that page is a general city overview, so this one is
//      written specifically around Columbia's corporate/office-park travelers
//      and the Merriweather District business corridor to stay differentiated.
//
// `maryland-wedding-limo-service` note: the requested keyword "wedding limo
// service in maryland" already resolves to a root-mounted BLOG POST
// (slug "wedding-limo-service-maryland" in blogPosts.js) — that URL cannot be
// reused for a second page. A second blog post, "limo-service-for-weddings-
// maryland", ALSO already targets near-identical phrasing ("Wedding Limo
// Service in Maryland: What to Know"). Rather than edit either blog post's
// title/H1 to chase the exact phrase — which would just create near-duplicate
// titles between two existing posts — this adds one clean, transactional
// LANDING PAGE at a new, non-colliding slug so the commercial "book now"
// intent has a proper booking page with FAQ/LocalBusiness schema, while both
// existing blog posts keep their "how to choose" / "how it works" framing and
// now cross-link to this page (see blogPosts.js edits).
import { IMAGES } from "@/lib/data";

// Renamed from SEDAN_TRIO/GROUP_TRIO (2026-10-23) — those names collided
// with the identically-named local consts already declared in
// landingPages.js, which broke scripts/generateSitemap.js, prerender.js
// and generateRouteSlugs.js (all three flatten every landing-page data
// file plus landingPages.js itself into one shared scope via vm-eval, so
// two files can't declare the same top-level const). Values unchanged.
const BATCH10_SEDAN_TRIO = [
  "Business Sedan — Mercedes E-Class",
  "First Class Sedan — BMW 7 Series",
  "Premium SUV — Lincoln Navigator",
];
const BATCH10_GROUP_TRIO = [
  "Luxury SUV — Chevrolet Suburban",
  "Premium SUV — Lincoln Navigator",
  "Sprinter Executive — Mercedes Sprinter",
];
const LOCAL_TRIO = [
  "Business Sedan — Mercedes E-Class",
  "Midsize SUV — Lincoln Nautilus",
  "Luxury SUV — Chevrolet Suburban",
];
const CELEBRATION_TRIO = [
  "Premium SUV — Lincoln Navigator",
  "Sprinter Executive — Mercedes Sprinter",
  "First Class Sedan — BMW 7 Series",
];

export const SEMRUSH_KEYWORD_GAP_PAGES = {
  // ============================================================
  // CLUSTER 1 — BWI <-> DULLES (IAD). Distinct from existing `bwi-to-dulles`
  // and from each other (see header note).
  // ============================================================

  // Angle: general BWI-outbound car service to Dulles for business
  // travelers — point-to-point, cost/time-vs-alternatives framing.
  "bwi-to-dulles-airport": {
    metaTitle: "Baltimore Airport to Dulles Car Service | 92 Limo Service",
    metaDescription:
      "Door-to-door car service from Baltimore (BWI) Airport to Washington Dulles (IAD). Flat rates, flight tracking, 24/7 — built for business travelers.",
    eyebrow: "BALTIMORE (BWI) → DULLES (IAD) — BUSINESS TRAVEL",
    h1: "Baltimore Airport to Dulles Airport Car Service",
    subtitle:
      "A direct, flat-rate transfer from BWI Marshall to Washington Dulles for business travelers who need the other airport without the hassle of a connection.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur loading luggage for a Baltimore Airport to Dulles Airport car service trip",
    highlightsHeading: "The Practical Way Between Two Airports",
    intro: [
      "Plenty of trips start at BWI Marshall and need to continue from Washington Dulles — an outbound leg that only has availability from IAD, a connecting flight that's cheaper out of Dulles, or a client meeting near Herndon or Reston that makes landing at BWI and driving onward the smarter play. 92 Limo Service runs this roughly 50-mile corridor for business travelers who want one predictable cost and one professional driver, not a second security line and a shuttle bus.",
      "The drive typically runs 60 to 90 minutes depending on where traffic sits on I-495 and the Dulles Toll Road, and our chauffeurs build a sensible buffer into every pickup so a Tuesday-morning Beltway slowdown doesn't turn into a sprint through the terminal. Tell us your Dulles departure time when you book and we back-plan the pickup from there, the same way a good travel coordinator would.",
      "This is a different trip than flying a same-day connection through a hub: no second boarding pass, no gate change, no risk of a missed bag transfer. You get in a quiet sedan at BWI's arrivals curb — or we pick you up directly from a Baltimore-area hotel or office if you never flew into BWI at all — and step out of the vehicle at Dulles ready to check in for your next flight.",
      "We quote this route as one flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front. There's no metering, no surge pricing for a Monday-morning rush, and no guessing what the final total will be when you land.",
    ],
    sections: [
      {
        heading: "Who Books This Route",
        paragraphs: [
          "The most common travelers on this leg are consultants and contractors whose outbound flight only runs from Dulles, government and defense-sector employees commuting between a BWI-area home and a Northern Virginia client site, and anyone whose return itinerary was rebooked onto the other airport after a cancellation. A smaller but steady group is travelers connecting to long-haul international flights that depart more frequently out of Dulles than BWI.",
          "Whatever the reason, the value is the same: a known price, a chauffeur who already knows the route and the Dulles terminal layout, and a car that's simply there when you land — no app refresh, no surge multiplier because it's 7 a.m. on a weekday.",
        ],
      },
      {
        heading: "What's Included",
        paragraphs: [
          "Every BWI–Dulles transfer includes real-time flight tracking on the BWI side, so an early or delayed inbound flight adjusts your pickup automatically at no charge, plus the standard complimentary wait time built into every arrival. Choose the Mercedes-Benz E-Class or BMW 7 Series for a solo business trip, or step up to a Lincoln Navigator or Sprinter van if you're traveling with a colleague, extra luggage, or equipment cases.",
        ],
      },
    ],
    highlights: [
      { title: "One Flat Rate", desc: "A single transparent price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation — no surge for a Monday-morning run." },
      { title: "Built-In Buffers", desc: "Chauffeurs plan around I-495 and Dulles Toll Road conditions and back-time the pickup from your actual departure window." },
      { title: "Flight Tracking on the BWI Side", desc: "We watch your inbound BWI flight and adjust pickup automatically for early arrivals or delays." },
      { title: "No Second Security Line", desc: "Skip the connection — one door-to-door vehicle instead of a shuttle bus between terminals." },
      { title: "Business-Ready Cabins", desc: "Quiet sedans with USB charging so you can take a call or review notes before your next flight." },
      { title: "24/7 Availability", desc: "Early-morning connections and late rebookings are covered around the clock." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "How far is it from BWI to Dulles Airport?", a: "About 50 miles, typically a 60 to 90 minute drive depending on traffic on I-495 and the Dulles Toll Road." },
      { q: "Can you pick me up at BWI and take me straight to a Dulles departure?", a: "Yes — this is exactly the trip we run most often on this route, with the pickup timed to your Dulles departure, not just your BWI arrival." },
      { q: "Do you also pick up from a Baltimore hotel or office instead of the airport?", a: "Yes. Many business travelers on this route never fly into BWI at all — we pick up from any Baltimore-area address and drive straight to Dulles." },
      { q: "What if my BWI flight lands early or late?", a: "We track your BWI flight and adjust the pickup automatically, at no extra charge for reasonable delays." },
      { q: "Is the price flat for this distance?", a: "Yes — one transparent rate quoted before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed in advance." },
      { q: "Can you carry extra luggage or equipment cases?", a: "Yes. Our SUVs and Sprinter vans offer generous cargo room for extra bags, sample cases, or equipment." },
    ],
    ctaTitle: "Book Your Baltimore–Dulles Transfer",
    ctaSubtitle: "Reserve a flat-rate chauffeur between BWI and Washington Dulles for your next business trip.",
  },

  // Angle: Washington Dulles as the international-gateway / connecting-flight
  // airport — distinct from the business-commuter framing above.
  "bwi-to-washington-dulles": {
    metaTitle: "BWI to Washington Dulles Airport Car Service | 92 Limo",
    metaDescription:
      "Chauffeured transfers from BWI to Washington Dulles (IAD) for international connections and long-haul departures. Flat rates, flight tracking, 24/7.",
    eyebrow: "BWI → WASHINGTON DULLES — INTERNATIONAL GATEWAY",
    h1: "BWI to Washington Dulles Airport Car Service",
    subtitle:
      "A calm, chauffeured handoff between BWI and Washington Dulles for travelers connecting onto international and long-haul flights.",
    image: IMAGES.dcSkyline,
    alt: "Luxury sedan en route to Washington Dulles International Airport",
    highlightsHeading: "Built for the International Connection",
    intro: [
      "Washington Dulles International is the region's long-haul gateway — the airport where most of the nonstop flights to Europe, the Middle East, Africa, and Asia actually depart. BWI covers the domestic network well, but when the itinerary calls for a true international connection, Dulles is almost always the airport that gets you there. 92 Limo Service runs this transfer specifically for travelers making that jump, not as a generic airport-to-airport shuttle.",
      "That distinction matters for timing. International departures carry longer check-in and security windows than a domestic hop, and Dulles's widebody gates and customs/immigration areas on the arrivals side mean the buffer you need is different from a quick domestic connection. We plan the pickup around your international check-in deadline, not just a generic 'two hours before' rule of thumb, and we build in extra room for the roughly 60-to-90-minute drive across I-495 and the Dulles Toll Road.",
      "The reverse trip matters just as much. International arrivals at Dulles clear customs and immigration before baggage claim, which can add significant, unpredictable time versus a domestic flight. We track your inbound international flight and stage the vehicle for pickup once you've actually cleared, not at the scheduled landing time, so you're never standing curbside wondering where your car is.",
      "Every trip on this route is quoted as one flat, transparent rate confirmed before you book — covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — and we run 24/7, because international schedules rarely land at convenient hours.",
    ],
    sections: [
      {
        heading: "Why Travelers Route Through Dulles From BWI",
        paragraphs: [
          "Dulles hosts the widebody international service that BWI's domestic-focused network generally doesn't carry — nonstops to major hubs in Europe, the Gulf, and Asia. Travelers flying into BWI on a cheaper or more convenient domestic leg, then continuing internationally, are the core audience for this route, along with diplomats, researchers, and international students whose onward journey only departs from IAD.",
          "We also handle the return direction for the same reason: an international arrival at Dulles followed by a short domestic connection that's easier to book or cheaper out of BWI.",
        ],
      },
      {
        heading: "Planning the Connection Correctly",
        paragraphs: [
          "Tell us your international departure time and airline when you book, and we'll back-plan the pickup to respect that carrier's recommended check-in window rather than a one-size-fits-all buffer. On arrival, give us your inbound flight number and we'll monitor it through landing, customs clearance, and baggage, staging your vehicle for when you actually reach the curb.",
        ],
      },
    ],
    highlights: [
      { title: "International-Timing Aware", desc: "Pickups planned around long-haul check-in windows, not a generic domestic buffer." },
      { title: "Customs-Clearance Tracking", desc: "On arrival, we stage your vehicle once you've actually cleared customs — not at scheduled landing time." },
      { title: "Flat, Transparent Rate", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Comfortable for Long Trips", desc: "Quiet cabins to rest or catch up on email before a long-haul departure." },
      { title: "Extra Luggage Welcome", desc: "SUVs and Sprinter vans for the extra bags that come with international travel." },
      { title: "24/7 Availability", desc: "International schedules land at every hour — we're built around that." },
    ],
    vehicles: BATCH10_GROUP_TRIO,
    faqs: [
      { q: "Why would I fly into BWI and connect through Dulles instead of flying directly?", a: "Often the domestic leg into BWI is cheaper or more convenient, while the long-haul international flight only departs from Dulles. We handle the ground connection between the two." },
      { q: "How much buffer do you build in for an international departure?", a: "We plan around your specific airline's recommended international check-in window, which is longer than a standard domestic buffer, and add extra time for I-495 and Dulles Toll Road traffic." },
      { q: "What happens if my international arrival at Dulles is delayed in customs?", a: "We track your inbound flight and monitor the customs and baggage process, staging your vehicle for when you actually reach the curb rather than the scheduled landing time." },
      { q: "Can you handle a group traveling internationally together?", a: "Yes — SUVs and Sprinter vans keep a group together along with the extra luggage that international trips usually involve." },
      { q: "Is the fare flat even though the trip is long-haul adjacent?", a: "Yes, always a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front." },
      { q: "Do you run this route at odd hours?", a: "Yes — we're available 24/7, since long-haul international schedules routinely land and depart overnight and before dawn." },
    ],
    ctaTitle: "Book Your BWI–Dulles International Connection",
    ctaSubtitle: "Reserve a chauffeur timed to your international check-in or arrival, not a generic buffer.",
  },

  // Angle: a general, non-route-specific "Dulles Airport Car Service" page —
  // the IAD counterpart to the flagship bwi-airport-limo page, serving the
  // whole DC/MD/NoVA area, not just the BWI corridor.
  "dulles-airport-car-service": {
    metaTitle: "Dulles Airport Car Service | 92 Limo Service",
    metaDescription:
      "Luxury Dulles (IAD) airport car service across Maryland, DC & Northern Virginia. Flight tracking, optional meet & greet, flat rates, 24/7 chauffeurs.",
    eyebrow: "WASHINGTON DULLES (IAD)",
    h1: "Dulles Airport Car Service",
    subtitle:
      "Professional chauffeured car service to and from Washington Dulles International Airport — serving all of Maryland, DC, and Northern Virginia.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur greeting a traveler for Dulles Airport car service",
    highlightsHeading: "Dulles, Covered From Every Direction",
    intro: [
      "Washington Dulles International Airport (IAD) sits out in Loudoun and Fairfax Counties, well west of the District — which means getting there cleanly depends on knowing the right approach for wherever you're actually coming from. 92 Limo Service provides Dulles airport car service across the full region: Maryland communities along the BW Parkway and I-270 corridor, Washington DC itself, and the Northern Virginia towns that sit closest to the airport, from Reston and Herndon to Tysons and Arlington.",
      "On departures, your chauffeur arrives early, confirms your terminal and airline before pulling away, and drives a route chosen for the time of day — the Dulles Toll Road and the Dulles Greenway both carry heavy commuter traffic at predictable hours, and local knowledge is what keeps a 45-minute drive from becoming an hour and a half. On arrivals, we track your flight, including the longer clearance window that international flights require after landing, and have your vehicle staged and ready when you reach the curb.",
      "Dulles is the region's primary gateway for long-haul international service, so we see a mix every day: business travelers on domestic connections, international arrivals clearing customs with a full set of luggage, and United hub traffic funneling through on tight connections. Whatever your itinerary, the ride is the same — a clean, late-model vehicle, a professional chauffeur, and one flat, transparent rate confirmed before you book.",
      "Optional meet-and-greet service (additional charge) puts your chauffeur inside the terminal with a name sign, which is especially useful at Dulles given the airport's size and the walk from some gates to arrivals. Curbside pickup is standard and included at no extra charge for travelers who prefer to meet their vehicle outside.",
    ],
    sections: [
      {
        heading: "Coverage Across the Region",
        paragraphs: [
          "We run Dulles transfers to and from Maryland (Bethesda, Rockville, Silver Spring, Gaithersburg, and the rest of Montgomery County, plus Baltimore and BWI when travelers are connecting between the two airports), all of Washington DC, and Northern Virginia communities including Reston, Herndon, Sterling, Tysons, McLean, and Arlington.",
          "Corporate accounts with recurring travel to Dulles — consultancies, government contractors, and international nonprofits headquartered in the region — get consolidated monthly billing and priority dispatch rather than booking each trip individually.",
        ],
      },
      {
        heading: "Vehicles for Every Trip",
        paragraphs: [
          "Choose the Mercedes-Benz E-Class or BMW 7 Series for solo and executive travel, the Lincoln Navigator or Chevrolet Suburban for families and VIP arrivals, or a Mercedes Sprinter van when a group needs to stay together along with checked luggage from a long-haul flight.",
        ],
      },
    ],
    highlights: [
      { title: "Served From Every Direction", desc: "Maryland, Washington DC, and Northern Virginia pickups and drop-offs, all coordinated to the same airport." },
      { title: "Flight Tracking", desc: "Real-time monitoring, including extended clearance time for international arrivals." },
      { title: "Optional Meet & Greet", desc: "Your chauffeur can meet you inside the terminal with a name sign. Additional charge applies." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Corporate Accounts", desc: "Consolidated billing and priority dispatch for companies with recurring Dulles travel." },
      { title: "24/7 Service", desc: "Early departures and international red-eye arrivals, covered around the clock." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "Do you serve Dulles from Maryland, not just Virginia?", a: "Yes — we run Dulles transfers from all of Maryland, including Montgomery County, Baltimore, and the BWI corridor, in addition to DC and Northern Virginia." },
      { q: "How do you handle international arrivals at Dulles?", a: "We track your inbound flight and account for the customs and immigration clearance process, staging your vehicle for when you actually reach the curb rather than the scheduled landing time." },
      { q: "Will my chauffeur meet me inside the terminal?", a: "Optional meet & greet with a name sign is available for an additional charge; curbside pickup is standard and included." },
      { q: "Is pricing flat regardless of where I'm coming from?", a: "Yes — every trip is quoted as a flat, transparent rate before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed in advance." },
      { q: "Can my company set up a corporate account for Dulles travel?", a: "Yes. Consolidated monthly invoicing and priority dispatch are available for companies with recurring trips to Dulles." },
      { q: "What if my flight is delayed?", a: "We track your flight and adjust the pickup automatically, with no extra charge for reasonable delays." },
    ],
    ctaTitle: "Book Your Dulles Airport Transfer",
    ctaSubtitle: "Reserve a chauffeur to or from Washington Dulles with flat, transparent pricing.",
  },

  // ============================================================
  // BWI GENERIC-TERM CLUSTER — each takes a distinct angle from the
  // flagship "bwi-airport-limo" page and from each other.
  // ============================================================

  // Angle: outbound-only — getting FROM home/office TO BWI for a departure.
  "car-service-to-bwi": {
    metaTitle: "Car Service to BWI Airport | 92 Limo Service",
    metaDescription:
      "Reliable car service to BWI Marshall Airport from anywhere in Maryland, DC or Northern Virginia. Flat rates, on-time pickups, 24/7. (877) 609-1919.",
    eyebrow: "CAR SERVICE TO BWI — OUTBOUND DEPARTURES",
    h1: "Car Service to BWI Airport",
    subtitle:
      "Dependable, flat-rate car service that gets you to BWI Marshall with time to spare — every departure, every time.",
    image: IMAGES.sedan,
    alt: "Luxury sedan departing for a car service trip to BWI Airport",
    highlightsHeading: "The Part of the Trip You Control",
    intro: [
      "You can't control a flight delay, a gate change, or a crowded TSA line — but you can control whether you leave the house on time, in a vehicle that's actually going to show up. That's the entire job of car service to BWI: a chauffeur who confirms your pickup the night before, arrives early, and drives a route chosen for that day's traffic, not a guess.",
      "92 Limo Service picks up from anywhere in Maryland, Washington DC, or Northern Virginia and drives directly to BWI Marshall's departures curb. We ask for your flight number and departure time when you book, and we back-plan the pickup from there — building in a real buffer for I-95, I-895, and the BW Parkway rather than assuming a clear run every time.",
      "This is the trip most people underrate until it goes wrong: a rideshare that cancels on you at 5 a.m., a friend who's running late, a parking garage that's suddenly full during a holiday travel week. A reserved car service removes all of that uncertainty. Your chauffeur is committed to your pickup window the moment you book, and the vehicle that shows up is clean, professional, and exactly on time.",
      "Every trip to BWI is quoted as a flat, transparent rate confirmed before you book — covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — so there's no guessing what an early-morning or rush-hour trip will cost. We run this service 24/7, because flights don't wait for a decent hour.",
    ],
    sections: [
      {
        heading: "Built Around Your Departure, Not Ours",
        paragraphs: [
          "Early-morning departures are the most common booking for this route, and they're also the one rideshares handle worst — driver availability thins out before sunrise, and surge pricing often spikes exactly when you can least afford a no-show. We staff pre-dawn BWI runs specifically because that's where a dependable, pre-booked vehicle matters most.",
          "For holiday travel weeks, graduations, and conference season, booking even a few days ahead guarantees your preferred vehicle class and locks in the rate before demand pushes rideshare pricing up.",
        ],
      },
      {
        heading: "One Vehicle for the Whole Family or Team",
        paragraphs: [
          "A single Mercedes-Benz E-Class comfortably handles a solo traveler with carry-on luggage; a Lincoln Navigator or Chevrolet Suburban keeps a family and their checked bags together in one trip instead of two cars; and a Mercedes Sprinter van moves an entire team or wedding party to the airport with room to spare.",
        ],
      },
    ],
    highlights: [
      { title: "On-Time Pickup, Every Time", desc: "Chauffeurs confirmed the night before and routed around the day's actual traffic." },
      { title: "Pre-Dawn & Red-Eye Covered", desc: "Full staffing for the earliest departures, when rideshare availability is thinnest." },
      { title: "Flat-Rate Pricing", desc: "One transparent price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Served From Anywhere in the Region", desc: "Pickups across Maryland, DC, and Northern Virginia, all headed straight to BWI." },
      { title: "Right-Sized Vehicles", desc: "From a single business sedan to a full Sprinter van for a group or wedding party." },
      { title: "24/7 Availability", desc: "No departure time is too early or too late for a reserved chauffeur." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "How early should I book a car to BWI?", a: "You can book the same day, but reserving at least a day ahead — and further out during holidays or conference weeks — guarantees your preferred vehicle class and rate." },
      { q: "Will you adjust my pickup time if I see traffic building?", a: "Yes. We monitor conditions on I-95, I-895, and the BW Parkway and can move your pickup earlier if conditions warrant, at no extra charge." },
      { q: "Do you serve pickups from Washington DC and Northern Virginia, not just Maryland?", a: "Yes — this route runs from anywhere in the DC metro area straight to BWI's departures curb." },
      { q: "What's the cancellation policy if my flight changes?", a: "Sedan and SUV bookings can be canceled free of charge up to 3 hours before pickup; Sprinter van bookings require 12 hours' notice for a free cancellation." },
      { q: "Can you handle a group headed to the airport together?", a: "Yes — a Sprinter van keeps a team, wedding party, or extended family together in one vehicle instead of splitting into multiple cars." },
      { q: "Is the price fixed regardless of pickup time?", a: "Yes, always a flat, transparent rate quoted and confirmed before you book." },
    ],
    ctaTitle: "Book Your Ride to BWI",
    ctaSubtitle: "Reserve a flat-rate chauffeur to BWI Marshall Airport — on time, every time.",
  },

  // Angle: "limo" word specifically — luxury/fleet-forward, special occasions
  // via BWI, distinct from the general round-trip bwi-airport-limo flagship.
  "bwi-limo-service": {
    metaTitle: "BWI Limo Service | 92 Limo Service",
    metaDescription:
      "BWI limo service with a luxury fleet of Navigators, BMWs and Sprinter vans. Flat rates, flight tracking, 24/7 chauffeurs for every BWI arrival & departure.",
    eyebrow: "BWI MARSHALL AIRPORT — LUXURY FLEET",
    h1: "BWI Limo Service",
    subtitle:
      "A genuine luxury fleet at BWI Marshall — Navigators, BMW 7 Series sedans, and Sprinter vans — chauffeured for arrivals, departures, and everything in between.",
    image: IMAGES.escaladeFront,
    alt: "Lincoln Navigator limo-class SUV for BWI limo service",
    highlightsHeading: "Why 'Limo Service' Still Means Something Here",
    intro: [
      "The word 'limo' gets used loosely these days, but at 92 Limo Service it still describes the thing itself: a genuine luxury fleet — the Lincoln Navigator, the BMW 7 Series, the Mercedes Sprinter Executive with its upgraded interior and mood lighting — driven by a professional chauffeur, not whoever happened to accept the nearest ride request. BWI limo service with us means you're actually riding in a limo-class vehicle, not a generic sedan with a fancier name.",
      "That distinction matters most for the trips where arrival matters as much as the destination: a milestone anniversary flight home, a quinceañera or sweet sixteen family arrival, a surprise homecoming, or simply a traveler who wants the airport leg of the trip to feel like the rest of it. Our chauffeurs handle luggage, open doors, and treat the ride itself as part of the occasion rather than a logistics problem to solve.",
      "Practically, it works exactly like our standard airport service: real-time flight tracking so an early or delayed arrival never costs you a ride, generous complimentary wait time, and optional meet-and-greet service (additional charge) if you want your chauffeur waiting inside with a name sign rather than at the curb. The difference is the vehicle and the standard it's held to — detailed before every trip, with water and chargers on board, and a chauffeur dressed and trained for the role.",
      "Every BWI limo trip is quoted as one flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front. We run 24/7, so a red-eye arrival gets the same limo-class treatment as a midday pickup.",
    ],
    sections: [
      {
        heading: "The Fleet, Specifically",
        paragraphs: [
          "The Lincoln Navigator is our most-requested limo-class vehicle for airport arrivals — commanding presence, generous luggage room, and seating for up to five without crowding. The BMW 7 Series and Mercedes S-Class deliver the same standard for solo and couple travel. For larger groups, the Sprinter Executive brings true limo-bus energy — upgraded seating and lighting built for celebrations, not just transportation — while still handling an airport luggage load with ease.",
        ],
      },
      {
        heading: "Occasions That Deserve the Fleet",
        paragraphs: [
          "Beyond standard airport runs, BWI limo service is popular for honeymoon departures and arrivals, milestone birthday trips, family reunions landing together, and corporate VIPs whose arrival sets the tone for the visit ahead. Book the vehicle that matches the moment — we'll have it detailed and ready.",
        ],
      },
    ],
    highlights: [
      { title: "A Genuine Luxury Fleet", desc: "Lincoln Navigator, BMW 7 Series, Mercedes S-Class and Sprinter Executive — real limo-class vehicles, not a relabeled sedan." },
      { title: "Flight Tracking", desc: "We monitor your flight and adjust pickup automatically for early arrivals or delays." },
      { title: "Optional Meet & Greet", desc: "Your chauffeur can meet you inside with a name sign. Additional charge applies." },
      { title: "Detailed Before Every Ride", desc: "Every vehicle is cleaned and stocked with water ahead of your trip." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye arrivals get the same limo-class treatment as a midday pickup." },
    ],
    vehicles: CELEBRATION_TRIO,
    faqs: [
      { q: "Is this an actual limousine, not just a black sedan?", a: "Our fleet includes genuine limo-class vehicles — the Lincoln Navigator, BMW 7 Series, Mercedes S-Class, and Sprinter Executive with upgraded interior and lighting — matched to the trip and group size you need." },
      { q: "Can I request a specific vehicle for a special occasion?", a: "Yes — tell us the occasion when you book and we'll recommend and reserve the vehicle that fits, subject to availability." },
      { q: "Do you track flights for limo bookings the same as standard trips?", a: "Yes, every BWI limo booking includes real-time flight tracking and automatic pickup adjustment for delays." },
      { q: "How many passengers can the Sprinter Executive hold?", a: "Up to 14, with full luggage capacity, making it a popular choice for family groups and wedding parties arriving together." },
      { q: "Is pricing flat for limo-class vehicles too?", a: "Yes — every vehicle class is quoted as a flat, transparent rate confirmed before you book, with no metering or surge pricing." },
      { q: "Can you arrange a limo for a return trip as well as arrival?", a: "Yes, round-trip and one-way bookings are both available, and we're happy to match or vary the vehicle for each leg." },
    ],
    ctaTitle: "Book Your BWI Limo",
    ctaSubtitle: "Reserve a genuine limo-class vehicle for your next BWI arrival or departure.",
  },

  // Angle: broadest generic term — all ground-transportation options at BWI,
  // a decision/information page comparing shuttle vs. rideshare vs. car
  // service, distinct from the limo- and point-to-point-themed pages above.
  "bwi-transportation": {
    metaTitle: "BWI Transportation | 92 Limo Service",
    metaDescription:
      "BWI Marshall transportation options compared — chauffeured car service, shuttles & rideshare — plus flat-rate booking across Maryland, DC & Virginia.",
    eyebrow: "BWI MARSHALL AIRPORT — GROUND TRANSPORTATION",
    h1: "BWI Transportation",
    subtitle:
      "Everything you need to get to and from BWI Marshall Airport — compared honestly, and booked with one flat rate.",
    image: IMAGES.airportPickup,
    alt: "Ground transportation pickup area at BWI Marshall Airport",
    highlightsHeading: "Your BWI Ground Transportation Options",
    intro: [
      "'BWI transportation' covers more ground than most people realize: hotel shuttles, the light rail and MARC/Amtrak connections at the BWI Rail Station, rideshare apps, taxis, and private chauffeured car service. Each has a real place depending on your budget, timing, and how much luggage or how many people you're moving. This page is meant to help you choose honestly, then book the one we actually offer — flat-rate chauffeured car service.",
      "Rideshare apps are convenient for a single rider with light luggage and a flexible schedule, but pricing surges unpredictably during peak hours, bad weather, or high-demand weekends, and driver quality varies trip to trip. Hotel shuttles are free but run on a fixed loop schedule that may not match your flight time. Public transit (light rail and the regional rail connections) is the cheapest option but involves transfers and isn't realistic with more than a bag or two.",
      "Private car service sits at the other end: a reserved, professional chauffeur, a known price confirmed before you book, and a vehicle sized to your actual group and luggage. For business travelers, families, groups, and anyone flying at an inconvenient hour, that reliability is usually worth the difference in cost over a rideshare — especially once you factor in surge pricing on the exact mornings and evenings when you need the ride most.",
      "92 Limo Service runs BWI transportation across the full region — all of Maryland, Washington DC, and Northern Virginia — with real-time flight tracking, 24/7 availability, and one flat, transparent rate that covers the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation.",
    ],
    sections: [
      {
        heading: "When Each Option Actually Makes Sense",
        paragraphs: [
          "Choose rideshare if you're solo, traveling light, flexible on timing, and comfortable with variable pricing. Choose transit if budget is the only priority and you have no more than a carry-on. Choose a hotel shuttle if your flight happens to align with its loop and you're staying at that specific property. Choose private car service for any trip where the pickup time matters, where you're carrying real luggage or traveling as a group, where you want a guaranteed price in advance, or where the hour is simply too early or late to count on anything else showing up.",
        ],
      },
      {
        heading: "What Booking With Us Actually Looks Like",
        paragraphs: [
          "You book online or call (877) 609-1919, confirm your flight number and pickup address, and that's the whole process. Your chauffeur arrives early, tracks your flight if you're arriving, and drives a route planned around that day's traffic rather than a fixed app estimate. Vehicles range from a single business sedan to a 14-passenger Sprinter van, so the fleet scales to whatever BWI transportation problem you actually have.",
        ],
      },
    ],
    highlights: [
      { title: "A Real Comparison, Not Just a Sales Page", desc: "Rideshare, transit, shuttle, and private car service — matched honestly to your trip." },
      { title: "One Flat Rate", desc: "A transparent price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation — no surge pricing." },
      { title: "Flight Tracking", desc: "Real-time monitoring and automatic pickup adjustment for every arrival." },
      { title: "Served From the Whole Region", desc: "Maryland, Washington DC, and Northern Virginia, all coordinated to BWI." },
      { title: "Scales to Any Group Size", desc: "Sedans for individuals up to Sprinter vans for groups of 14." },
      { title: "24/7 Availability", desc: "The hours when transit and shuttles are least reliable are exactly when we're built to run." },
    ],
    vehicles: LOCAL_TRIO,
    faqs: [
      { q: "What's the most reliable way to get to BWI?", a: "A reserved private car service, because the pickup time and price are both confirmed before you book, unlike rideshare pricing and availability, which both vary." },
      { q: "Is private car service more expensive than a rideshare?", a: "It depends on timing — rideshare surge pricing during peak hours or bad weather often costs more than our flat rate, and our price never changes once confirmed." },
      { q: "Can I use transit if I only have a carry-on?", a: "Yes, light rail and regional rail connections at the BWI Rail Station work fine for a single rider with minimal luggage and a flexible schedule." },
      { q: "Do hotel shuttles run on a fixed schedule?", a: "Yes, typically a set loop that may not match your exact flight time — reliable only if your schedule happens to align with it." },
      { q: "How do I book your BWI car service?", a: "Online or by calling (877) 609-1919 — provide your flight number and pickup address, and we handle flight tracking and routing from there." },
      { q: "What vehicle should I choose for a family with luggage?", a: "A Luxury SUV or Premium SUV comfortably handles a family and checked bags in one trip; a Sprinter van is better for larger groups." },
    ],
    ctaTitle: "Book Your BWI Transportation",
    ctaSubtitle: "Skip the comparison shopping — reserve a flat-rate chauffeur to or from BWI right now.",
  },

  // Angle: arrivals-focused, meet-and-greet/VIP, distinct from the flagship
  // "bwi-airport-limo" general overview page.
  "bwi-airport-limo-service": {
    metaTitle: "BWI Airport Limo Service — Arrivals & Meet & Greet | 92 Limo",
    metaDescription:
      "BWI Airport limo service built for arrivals — flight tracking, optional in-terminal meet & greet, and a flat rate to anywhere in the region, 24/7.",
    eyebrow: "BWI MARSHALL AIRPORT — ARRIVALS",
    h1: "BWI Airport Limo Service",
    subtitle:
      "A first-class arrival at BWI Marshall — your chauffeur tracks the flight, meets you where you want, and drives you out in a limo-class vehicle.",
    image: IMAGES.sClassFirst,
    alt: "Mercedes-Benz S-Class limo-class sedan for BWI Airport limo service arrivals",
    highlightsHeading: "The First Five Minutes Off the Plane",
    intro: [
      "The first few minutes after landing set the tone for everything that follows — and BWI airport limo service exists specifically to make those minutes effortless. Instead of scanning the arrivals curb for a stranger's car or hunting for a rideshare pin that keeps moving, you step off the plane knowing exactly how you'll be met and where you're headed next.",
      "92 Limo Service tracks your flight from takeoff, so landing early or late changes nothing about your pickup — it simply adjusts. Standard service meets you curbside with a clean, limo-class vehicle ready the moment you're outside. Optional meet-and-greet service (additional charge) puts your chauffeur inside the terminal at baggage claim with a personalized name sign, which matters most for first-time visitors, VIP arrivals, elderly travelers, or anyone who'd rather not navigate an unfamiliar airport alone after a long flight.",
      "This isn't a generic sedan service relabeled for the occasion. Our BWI airport limo fleet includes the Lincoln Navigator, BMW 7 Series, and Mercedes S-Class — vehicles that photograph and feel the part for a homecoming, a VIP visit, or simply a traveler who wants the arrival to match the rest of the trip. Luggage is handled for you, the cabin is quiet and climate-controlled, and the drive to anywhere in Maryland, DC, or Northern Virginia is one continuous, unhurried ride.",
      "Every arrival is quoted as a flat, transparent rate confirmed before you book — covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — and we run this service 24/7, because flights land at every hour of the day and night.",
    ],
    sections: [
      {
        heading: "Meet & Greet, Done Properly",
        paragraphs: [
          "When you add meet-and-greet, your chauffeur checks the arrivals board, confirms your flight has landed, and waits at baggage claim holding a name sign — not pacing near a generic 'ground transportation' sign hoping to spot you. For international arrivals, we account for the additional time customs and immigration can add before you reach the hall.",
        ],
      },
      {
        heading: "Who This Service Is Built For",
        paragraphs: [
          "First-time visitors to the region, executives and VIPs whose arrival is itself part of a visit's impression, elderly parents or relatives who shouldn't have to navigate an unfamiliar terminal alone, and anyone landing after a long or overnight flight who simply wants the next step handled without friction.",
        ],
      },
    ],
    highlights: [
      { title: "In-Terminal Meet & Greet", desc: "Your chauffeur waits at baggage claim with a name sign. Additional charge applies." },
      { title: "Real-Time Flight Tracking", desc: "Early or delayed landings adjust your pickup automatically, at no charge." },
      { title: "Genuine Limo-Class Fleet", desc: "Lincoln Navigator, BMW 7 Series, and Mercedes S-Class for arrivals that match the occasion." },
      { title: "International-Arrival Aware", desc: "We account for customs and immigration time before staging your pickup." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Red-eye and early-morning arrivals get the same standard of service." },
    ],
    vehicles: CELEBRATION_TRIO,
    faqs: [
      { q: "What's included in meet & greet service?", a: "Your chauffeur waits inside the terminal at baggage claim with a personalized name sign and assists with luggage. It's available for an additional charge; standard curbside pickup is included at no extra cost." },
      { q: "Do you adjust for early or delayed landings?", a: "Yes — we track your flight from takeoff and adjust the pickup automatically, at no extra charge for reasonable changes." },
      { q: "Is this different from a standard sedan pickup?", a: "Our limo service fleet includes true limo-class vehicles — the Navigator, BMW 7 Series, and Mercedes S-Class — rather than a general-purpose sedan." },
      { q: "Can you handle an elderly relative traveling alone?", a: "Yes. Meet & greet is especially popular for elderly travelers and first-time visitors who'd rather not navigate the terminal unassisted." },
      { q: "How do you handle international arrivals?", a: "We account for the extra time customs and immigration clearance can add, and stage your vehicle for when you actually reach the curb, not the scheduled landing time." },
      { q: "Is the rate flat regardless of flight delays?", a: "Yes — one flat, transparent rate confirmed before you book, with no extra charge for reasonable delays." },
    ],
    ctaTitle: "Book Your BWI Arrival",
    ctaSubtitle: "Reserve a limo-class chauffeur to meet your flight — curbside or inside the terminal.",
  },

  // ============================================================
  // CLUSTER 2 — COLUMBIA, MD. Four distinct angles; `limo-service-columbia-md`
  // leans corporate/office-park specifically to stay apart from the existing
  // general city page `columbia-md-limo-service` (see header note).
  // ============================================================

  // Angle: taxi-alternative, short local trips, budget-conscious framing.
  "cab-service-columbia-md": {
    metaTitle: "Cab Service Columbia MD | 92 Limo Service",
    metaDescription:
      "A dependable alternative to a cab in Columbia, MD — flat rates, professional chauffeurs, and on-time local rides across Howard County. Call now.",
    eyebrow: "COLUMBIA, MD — LOCAL RIDES",
    h1: "Cab Service Columbia MD",
    subtitle:
      "Local rides across Columbia with the reliability of a dispatched cab and the comfort of a private chauffeur — one known price, every trip.",
    image: IMAGES.sedan,
    alt: "Sedan providing cab-alternative service in Columbia, MD",
    highlightsHeading: "What You Actually Want From a Cab in Columbia",
    intro: [
      "When people search for 'cab service' in Columbia, MD, they're usually after the same basic things a taxi used to promise: show up when you call, charge a fair and predictable price, and get you where you're going without drama. 92 Limo Service delivers exactly that, with a professional chauffeur and a clean vehicle instead of whatever happens to be free on a dispatch radio.",
      "Columbia is spread across ten distinct villages — Wilde Lake, Oakland Mills, Long Reach, Owen Brown, King's Contrivance, Harper's Choice, Hickory Ridge, River Hill, and the rest — connected by Route 29, Broken Land Parkway, and a web of village-center roads that aren't always intuitive to an out-of-town driver. We know this layout the way a longtime local cab company would, which means fewer wrong turns and a faster ride between the Mall in Columbia, Lake Kittamaqundi, Merriweather Post Pavilion, and the village centers in between.",
      "A short local trip — a village-to-village run, a ride to a medical appointment, a trip to the MARC station or a nearby Metro stop — shouldn't require an app with surge pricing or an unpredictable wait. We quote every ride as a flat, transparent rate confirmed before you book, so there's no meter running and no guessing what a five-mile trip across town will cost.",
      "This is the same professional fleet and chauffeur standard we use for airport transfers and corporate accounts, just applied to the everyday local trips that make up most of a resident's actual transportation needs — errands, appointments, dinner out, and the ride home afterward.",
    ],
    sections: [
      {
        heading: "The Trips This Covers",
        paragraphs: [
          "Local point-to-point rides between Columbia's villages, trips to medical appointments at the area's clinics and urgent care centers, rides to and from the Columbia MARC station or nearby bus connections, evenings out when you'd rather not drive home, and short hops for residents who don't drive or are between vehicles. None of these need a limousine — they need a dependable, fairly priced ride, which is exactly what this service is built around.",
        ],
      },
      {
        heading: "How It Compares",
        paragraphs: [
          "Unlike a traditional dispatched cab, you know your price before the car arrives, the vehicle is a late-model sedan or SUV rather than whatever's available, and the chauffeur is background-checked and professionally presented. Unlike a rideshare app, there's no surge multiplier during a Merriweather Post Pavilion concert night or a Sunday-evening rush — the rate you're quoted is the rate you pay.",
        ],
      },
    ],
    highlights: [
      { title: "Flat, Known Pricing", desc: "One transparent rate confirmed before you book — no meter, no surge multiplier." },
      { title: "Knows Every Village", desc: "Fast, direct routing across Columbia's ten villages and connecting roads." },
      { title: "Professional Chauffeurs", desc: "Background-checked and presentable, in a late-model sedan or SUV." },
      { title: "Local Errands & Appointments", desc: "Medical visits, MARC station runs, and everyday local trips, not just events." },
      { title: "On-Time Dispatch", desc: "A confirmed pickup window instead of an unpredictable wait." },
      { title: "24/7 Availability", desc: "Early appointments and late nights out are both covered." },
    ],
    vehicles: LOCAL_TRIO,
    faqs: [
      { q: "Is this cheaper than a rideshare during busy nights?", a: "Often yes, since your rate is confirmed before you book and never changes — rideshare surge pricing can spike during concerts at Merriweather Post Pavilion or weekend evenings." },
      { q: "Do you cover rides between Columbia's villages?", a: "Yes — Wilde Lake, Oakland Mills, Long Reach, Owen Brown, King's Contrivance, Harper's Choice, Hickory Ridge, River Hill, and the rest, all connected by routes our chauffeurs know well." },
      { q: "Can you take me to a medical appointment and wait?", a: "Yes, we offer short wait-and-return trips as well as standard one-way rides — just let us know your needs when booking." },
      { q: "How is this different from calling a traditional cab company?", a: "You get a confirmed price before the car arrives and a background-checked chauffeur in a late-model vehicle, rather than whatever's available on a dispatch radio." },
      { q: "Do you serve the Columbia MARC station?", a: "Yes — short local rides to and from the MARC station and nearby bus connections are a regular part of this service." },
      { q: "Is there a minimum trip distance?", a: "No — we handle short village-to-village hops as readily as longer regional trips." },
    ],
    ctaTitle: "Book Your Columbia Ride",
    ctaSubtitle: "Reserve a flat-rate local car to anywhere in Columbia, MD.",
  },

  // Angle: special-occasion limousine — weddings, proms, anniversaries,
  // nights out, luxury fleet emphasis.
  "columbia-limousine-service": {
    metaTitle: "Columbia Limousine Service | 92 Limo Service",
    metaDescription:
      "Columbia, MD limousine service for weddings, proms, anniversaries & nights out. Navigators, Sprinter Executive vans & BMWs, flat rates, 24/7.",
    eyebrow: "COLUMBIA, MD — SPECIAL OCCASIONS",
    h1: "Columbia Limousine Service",
    subtitle:
      "Limousine-class vehicles for Columbia's weddings, proms, anniversaries, and nights out — reserved, chauffeured, and priced flat.",
    image: IMAGES.sprinterPink,
    alt: "Mercedes Sprinter Executive limousine-style interior for Columbia, MD celebrations",
    highlightsHeading: "When Columbia Celebrates, We're the Ride",
    intro: [
      "Some trips are about getting somewhere; others are part of the event itself. Columbia limousine service with 92 Limo Service covers the second kind — weddings at Belmont Manor or a Columbia-area venue, proms for Howard County high schools, milestone anniversaries, bachelorette and bachelor send-offs, and nights out around the Merriweather District that deserve a vehicle to match the occasion.",
      "Our limousine-class fleet is built for exactly this: the Lincoln Navigator for a commanding, photo-ready arrival; the BMW 7 Series for an elegant couple's car; and the Mercedes Sprinter Executive, finished with upgraded seating and mood lighting, for a wedding party or prom group that wants limo-bus energy without sacrificing comfort or luggage room. Every vehicle arrives detailed, every chauffeur is professionally dressed, and every trip is treated as part of the event, not a logistics afterthought.",
      "Columbia's venues each have their own quirks worth knowing in advance — gravel or narrow lanes at some outdoor wedding sites, limited curb space near the Mall in Columbia and Lake Kittamaqundi during peak event season, and Merriweather Post Pavilion concert nights that can tie up Broken Land Parkway and Little Patuxent Parkway for an hour or more. Our chauffeurs plan around these specifics rather than treating Columbia like a generic suburb.",
      "Every limousine booking is quoted as a flat, transparent rate confirmed before you book — covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — so there's no surprise bill the week after a wedding or prom night.",
    ],
    sections: [
      {
        heading: "Weddings, Specifically",
        paragraphs: [
          "A typical Columbia wedding pairs an Navigator or S-Class for the couple with a Sprinter Executive for the wedding party, timed from getting-ready locations through photos and the ceremony. Book six to nine months ahead for peak season (May, June, September, October), since Sprinter availability competes with spring prom season for the same vehicles.",
        ],
      },
      {
        heading: "Proms and Group Celebrations",
        paragraphs: [
          "For prom night, a Sprinter Executive keeps a group of friends together — safely supervised, on a confirmed schedule, with parents able to track timing — rather than splitting across multiple cars or relying on a rideshare on one of the busiest nights of the year for them. The same vehicle works for milestone birthdays, bachelorette parties, and anniversary nights out around Columbia's restaurants and the Merriweather District.",
        ],
      },
    ],
    highlights: [
      { title: "Limousine-Class Fleet", desc: "Lincoln Navigator, BMW 7 Series, and Mercedes Sprinter Executive with upgraded interior and lighting." },
      { title: "Venue-Aware Chauffeurs", desc: "Local knowledge of Columbia's event venues, gravel lanes, and concert-night traffic." },
      { title: "Weddings & Proms", desc: "Coordinated timelines for wedding parties and supervised group transportation for prom night." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Detailed Before Every Event", desc: "Vehicles cleaned and prepared ahead of each booking — no surprises on the big day." },
      { title: "24/7 Booking & Dispatch", desc: "Early getting-ready pickups and late-night returns are both covered." },
    ],
    vehicles: CELEBRATION_TRIO,
    faqs: [
      { q: "How far ahead should I book a Columbia wedding limo?", a: "Six to nine months for peak-season Saturdays (May, June, September, October), since Sprinter vans and limousines also compete with spring prom demand." },
      { q: "Can you handle a whole prom group together?", a: "Yes — a Mercedes Sprinter Executive keeps a group of friends together on a confirmed, supervised schedule rather than splitting into multiple rides." },
      { q: "Do your chauffeurs know specific Columbia venues?", a: "Yes, including narrow or gravel-lane outdoor sites and the traffic patterns around the Mall in Columbia, Lake Kittamaqundi, and Merriweather Post Pavilion on event nights." },
      { q: "What's the cancellation policy for a special-event booking?", a: "Special-event bookings, including weddings and Sprinter van reservations, require 12 hours' notice for a free cancellation." },
      { q: "Is pricing flat for limousine-class bookings?", a: "Yes — one flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front." },
      { q: "Can I book a limo for an anniversary or birthday, not just a wedding or prom?", a: "Absolutely — the same fleet and chauffeur standard applies to anniversaries, milestone birthdays, and nights out." },
    ],
    ctaTitle: "Book Your Columbia Limousine",
    ctaSubtitle: "Reserve a limousine-class vehicle for your wedding, prom, or next celebration in Columbia.",
  },

  // Angle: corporate/business travel in Columbia's office-park/Merriweather
  // District corridor — kept distinct from the EXISTING general city page
  // "columbia-md-limo-service" (see header note).
  "limo-service-columbia-md": {
    metaTitle: "Limo Service Columbia MD for Business Travel | 92 Limo",
    metaDescription:
      "Corporate limo service for Columbia, MD's office parks and Merriweather District — flat rates, BWI transfers, consolidated billing. 24/7 chauffeurs.",
    eyebrow: "COLUMBIA, MD — CORPORATE TRAVEL",
    h1: "Limo Service Columbia MD",
    subtitle:
      "Executive limo service built for Columbia's business corridor — office-park meetings, client visits, and fast transfers to BWI.",
    image: IMAGES.corporate,
    alt: "Executive sedan for limo service in Columbia, MD's business district",
    highlightsHeading: "Columbia's Business Corridor, Handled Right",
    intro: [
      "Columbia isn't just a residential planned community — it's one of the region's denser office and corporate corridors, anchored by the Merriweather District, Gateway business park, and a mix of established and growing companies along US-29 and Broken Land Parkway. Limo service in Columbia, MD, for business travel means something specific: a chauffeur who respects a meeting schedule the way an employee would, not a generic ride that happens to end up at an office building.",
      "92 Limo Service runs executive transportation for Columbia's corporate community — client visits timed to the minute, airport transfers for out-of-town partners landing at BWI (about 20 minutes away via MD-100 and US-29), and consolidated accounts for companies that need predictable billing rather than a pile of individual expense reports. Our chauffeurs plan around the Gateway corridor's rush-hour patterns and the Route 29 bottlenecks that can turn a 15-minute cross-town meeting into a late arrival if you're not routed correctly.",
      "For companies headquartered in or near Columbia, a corporate account consolidates every ride into one monthly invoice, itemized by traveler or department, with priority dispatch when a last-minute client pickup comes in. For individual business travelers, the same fleet and flat-rate pricing applies trip by trip — no need for a standing account to get the same level of reliability.",
      "Every trip is quoted as a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front. Vehicles range from the Mercedes-Benz E-Class and BMW 7 Series for individual executives to a Sprinter van when a visiting team needs to move together between meetings and BWI.",
    ],
    sections: [
      {
        heading: "The Trips This Covers",
        paragraphs: [
          "Client visits and partner meetings across Columbia's office parks, BWI airport transfers for visiting executives and teams, multi-stop days using hourly chauffeur service rather than booking separate one-way trips, and recurring commutes for companies that want consistent, billable transportation without managing it trip by trip.",
        ],
      },
      {
        heading: "Setting Up a Corporate Account",
        paragraphs: [
          "Email info@92limo.com or call (877) 609-1919 to set up consolidated monthly billing, a dedicated account contact, and priority dispatch for your company's Columbia travel — most accounts are active within a day, and certificates of insurance are available on request for vendor onboarding.",
        ],
      },
    ],
    highlights: [
      { title: "Columbia's Business Corridor", desc: "Local knowledge of the Merriweather District, Gateway corridor, and Route 29 traffic patterns." },
      { title: "~20 Minutes to BWI", desc: "Fast airport transfers for visiting partners and executives via MD-100 and US-29." },
      { title: "Corporate Accounts", desc: "Consolidated monthly invoicing, itemized by traveler or department, with priority dispatch." },
      { title: "Hourly Chauffeur Service", desc: "A dedicated vehicle and driver for multi-stop meeting days, billed as one trip." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Early flights and late client dinners are both covered without notice." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "Do you serve Columbia's office parks and the Merriweather District specifically?", a: "Yes — our chauffeurs regularly work this corridor and plan around its rush-hour and event-night traffic patterns." },
      { q: "How far is Columbia from BWI for a visiting executive?", a: "About 20 minutes via MD-100 and US-29, with real-time flight tracking on every transfer." },
      { q: "Can my company set up consolidated billing?", a: "Yes — corporate accounts get one monthly invoice itemized by traveler or department, plus a dedicated contact and priority dispatch. Email info@92limo.com to start." },
      { q: "What is hourly chauffeur service and when does it make sense?", a: "One vehicle and chauffeur stay with you for a block of hours, ideal for a day with several meetings across Columbia rather than booking separate one-way trips." },
      { q: "Is pricing different for corporate accounts versus individual trips?", a: "The same flat-rate pricing applies either way; a corporate account simply consolidates billing and adds priority dispatch." },
      { q: "Can you provide a certificate of insurance for vendor onboarding?", a: "Yes, available on request for corporate clients setting up an account." },
    ],
    ctaTitle: "Set Up Columbia Corporate Car Service",
    ctaSubtitle: "Reserve a chauffeur for your next Columbia meeting or set up a company account.",
  },

  // Angle: everyday/hourly local car service — errands, residents, by-the-hour.
  "car-service-columbia-md": {
    metaTitle: "Car Service Columbia MD | 92 Limo Service",
    metaDescription:
      "Everyday car service in Columbia, MD — errands, appointments, by-the-hour local rides. Flat rates, professional chauffeurs, 24/7 availability.",
    eyebrow: "COLUMBIA, MD — EVERYDAY LOCAL CAR SERVICE",
    h1: "Car Service Columbia MD",
    subtitle:
      "Dependable, by-the-hour and point-to-point car service for Columbia residents — errands, appointments, and everyday trips, handled flat-rate.",
    image: IMAGES.suv,
    alt: "SUV providing everyday local car service in Columbia, MD",
    highlightsHeading: "For the Trips That Aren't the Airport or a Wedding",
    intro: [
      "Most of the rides a household actually needs aren't airport transfers or weddings — they're the everyday ones: a parent who no longer drives getting to a doctor's appointment, a resident between vehicles who still needs to run errands across town, a family that wants one reliable car for a day full of stops instead of three separate trips. Car service in Columbia, MD, from 92 Limo Service is built around exactly that kind of everyday need, not just the big occasions.",
      "Columbia's village-centered layout means a lot of local trips: Wilde Lake to the Mall in Columbia, Owen Brown to a medical office near Howard County General, Long Reach to a village-center pharmacy. Our chauffeurs know the fastest routes between villages via Route 29, Broken Land Parkway, and the connecting roads, so a short local trip stays short instead of getting stretched by an unfamiliar driver guessing at directions.",
      "Hourly chauffeur service is the real workhorse for a day with multiple stops — a vehicle and driver that stay with you through a string of appointments, errands, or visits, billed as one trip instead of several separate fares. It's a practical option for seniors who no longer drive, families managing a full schedule, or anyone who'd rather not deal with parking at every stop around Columbia's village centers.",
      "Every ride is quoted as a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — whether it's a single short trip or a half-day of hourly service.",
    ],
    sections: [
      {
        heading: "Everyday Trips This Covers",
        paragraphs: [
          "Medical and dental appointments, pharmacy and grocery runs, visits to family or friends across Columbia's villages, trips to the Columbia MARC station or nearby transit connections, and recurring weekly rides for residents who've given up driving but still want to stay independent and mobile.",
        ],
      },
      {
        heading: "Booking Recurring Rides",
        paragraphs: [
          "Many Columbia clients set up standing weekly or biweekly rides for medical appointments or regular errands. We keep your preferences on file, assign a familiar chauffeur when possible, and can bill to a single account for convenience — just call (877) 609-1919 to set it up.",
        ],
      },
    ],
    highlights: [
      { title: "Everyday, Not Just Special Occasions", desc: "Built for appointments, errands, and local trips, not only airport runs and events." },
      { title: "Knows Every Village", desc: "Fast routing between Wilde Lake, Owen Brown, Long Reach, and the rest of Columbia." },
      { title: "Hourly Chauffeur Service", desc: "One vehicle and driver for a day with multiple stops, billed as a single trip." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Recurring Ride Scheduling", desc: "Standing weekly or biweekly bookings for appointments and errands, with a familiar chauffeur when possible." },
      { title: "24/7 Availability", desc: "Early appointments and evening errands are both covered." },
    ],
    vehicles: LOCAL_TRIO,
    faqs: [
      { q: "Can you handle a day with several errands or appointments?", a: "Yes — hourly chauffeur service keeps one vehicle and driver with you through multiple stops, billed as a single trip instead of several fares." },
      { q: "Do you offer recurring rides for medical appointments?", a: "Yes. Many clients set up standing weekly or biweekly rides; we keep preferences on file and assign a familiar chauffeur when possible." },
      { q: "Is this different from your airport or event services?", a: "It's the same professional fleet and chauffeur standard, applied to everyday local trips rather than only airport transfers or special occasions." },
      { q: "How do you price a short local trip?", a: "As a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front." },
      { q: "Do you serve all of Columbia's villages?", a: "Yes — Wilde Lake, Oakland Mills, Long Reach, Owen Brown, King's Contrivance, Harper's Choice, Hickory Ridge, River Hill, and the rest." },
      { q: "Can I book a car for just an hour or two?", a: "Yes, hourly chauffeur service has no obligation beyond the block of time you book." },
    ],
    ctaTitle: "Book Everyday Car Service in Columbia",
    ctaSubtitle: "Reserve a flat-rate chauffeur for your next errand, appointment, or local trip.",
  },

  // ============================================================
  // CLUSTER 3 — BALTIMORE CAR-SERVICE VARIANTS. Each angle distinct from the
  // others and from existing pages (`baltimore-limo-service`,
  // `chauffeur-service-baltimore`, `bwi-to-washington-dc`,
  // `baltimore-to-washington-dc`) — see header note.
  // ============================================================

  // Angle: general point-to-point "car service" overview (vs. "limo"/
  // "chauffeur" framing used by existing pages).
  "baltimore-car-service": {
    metaTitle: "Baltimore Car Service | 92 Limo Service",
    metaDescription:
      "Flat-rate car service across Baltimore — point-to-point rides, BWI transfers, and business travel. Professional chauffeurs, 24/7. (877) 609-1919.",
    eyebrow: "BALTIMORE, MD — POINT-TO-POINT CAR SERVICE",
    h1: "Baltimore Car Service",
    subtitle:
      "Flat-rate, point-to-point car service across Baltimore — the Inner Harbor, hospitals, offices, and everywhere in between.",
    image: IMAGES.heroBg,
    alt: "Black sedan providing car service across Baltimore, MD",
    highlightsHeading: "Baltimore, Door to Door",
    intro: [
      "'Car service' in Baltimore means something specific: a point-to-point ride with a known price and a professional driver, not a stretch limo for a special occasion and not a bare-bones taxi. 92 Limo Service runs exactly that across the city — from the Inner Harbor and Harbor East to Federal Hill, Fells Point, Mount Vernon, and the hospital campuses that bring so many visitors downtown.",
      "Baltimore's street grid is deceptively tricky for an unfamiliar driver: one-way corridors downtown, game-day closures around Camden Yards and M&T Bank Stadium, and harbor-event traffic that can tie up the waterfront for hours. Our chauffeurs drive this city daily and route around whatever's happening that day, rather than following a fixed app estimate that doesn't account for a Friday Orioles game.",
      "Most bookings fall into a few patterns: business travelers moving between downtown offices and client meetings, visitors and families heading to or from Johns Hopkins Hospital, the University of Maryland Medical Center, or Mercy Medical Center, and conference attendees shuttling between the Baltimore Convention Center and their hotel. Whatever the reason, the ride is the same — a clean vehicle, a professional chauffeur, and a flat rate confirmed before you book.",
      "Every trip includes the option to add a BWI airport transfer on either end, since BWI sits only about 10 miles from downtown. Pricing is always quoted as one transparent rate covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation — never a meter, never a surge multiplier on a Saturday night.",
    ],
    sections: [
      {
        heading: "Everyday Point-to-Point Trips",
        paragraphs: [
          "Downtown-to-downtown meetings, a ride to a medical appointment at one of Baltimore's major hospital systems, a trip between a hotel and the Convention Center, or simply a ride home after dinner in Fells Point or Harbor East — this is the everyday use case for Baltimore car service, distinct from a wedding limo or a dedicated BWI airport transfer.",
        ],
      },
      {
        heading: "Local Knowledge That Actually Matters",
        paragraphs: [
          "Game days at Camden Yards and M&T Bank Stadium, harbor festivals, and convention-week congestion are all things our chauffeurs plan around rather than discover mid-trip. That local awareness is the real difference between a dependable car service and a generic ride-hailing trip through an unfamiliar grid.",
        ],
      },
    ],
    highlights: [
      { title: "Point-to-Point, Not Just Events", desc: "Everyday downtown-to-downtown and local trips, not only weddings or airport transfers." },
      { title: "Hospital & Medical Campus Rides", desc: "Reliable transport to Johns Hopkins, UMMC, and Mercy Medical Center." },
      { title: "Game-Day & Event Aware", desc: "Routes planned around Camden Yards, M&T Bank Stadium, and harbor-event traffic." },
      { title: "~10 Minutes From BWI", desc: "Easy add-on airport transfers given Baltimore's short distance from BWI." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Dispatch", desc: "Available for early meetings, late dinners, and everything in between." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "Is this for everyday rides or only special occasions?", a: "Everyday, point-to-point rides are the core of this service — downtown meetings, medical appointments, and local trips, not only weddings or airport transfers." },
      { q: "Do your drivers account for game days and events?", a: "Yes — our chauffeurs plan around Camden Yards, M&T Bank Stadium, and harbor-event traffic rather than relying on a fixed app estimate." },
      { q: "Can you take me to a hospital appointment?", a: "Yes, we regularly provide rides to Johns Hopkins Hospital, the University of Maryland Medical Center, Mercy Medical Center, and other campuses." },
      { q: "Can I add a BWI airport leg to my Baltimore trip?", a: "Yes — BWI is only about 10 miles from downtown, and we're happy to combine a city trip with an airport transfer." },
      { q: "Is the price flat for short in-city trips?", a: "Yes, every trip is quoted as a flat, transparent rate confirmed before you book, regardless of distance." },
      { q: "Do you serve Harbor East, Fells Point, and Federal Hill?", a: "Yes — all of downtown Baltimore and the surrounding neighborhoods are part of our regular service area." },
    ],
    ctaTitle: "Book Your Baltimore Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeur for your next point-to-point ride in Baltimore.",
  },

  // Angle: Baltimore <-> DC, business/commuter point-to-point (vs. the
  // existing general `baltimore-to-washington-dc` overview page and the
  // group/event-focused `limo-service-baltimore-to-dc` below).
  "car-service-baltimore-to-dc": {
    metaTitle: "Car Service Baltimore to DC | 92 Limo Service",
    metaDescription:
      "Business-focused car service from Baltimore to Washington, DC. Flat rates, consolidated corporate billing, and reliable door-to-door transfers, 24/7.",
    eyebrow: "BALTIMORE → WASHINGTON DC — BUSINESS COMMUTE",
    h1: "Car Service Baltimore to DC",
    subtitle:
      "A business traveler's car service between Baltimore and Washington, DC — door-to-door, flat-rate, and built for repeat commuters.",
    image: IMAGES.dcSkyline,
    alt: "Executive sedan for car service from Baltimore to Washington, DC",
    highlightsHeading: "The Corridor's Business Commute, Simplified",
    intro: [
      "Baltimore and Washington, DC sit about 40 miles apart, and a meaningful number of professionals make that trip regularly — attorneys and government consultants with offices in both cities, Johns Hopkins and federal-agency staff shuttling between campuses, and executives who need a predictable commute rather than a daily gamble on the MARC schedule or I-95 traffic. Car service from Baltimore to DC, as we run it, is built specifically for that repeat business traveler.",
      "Door-to-door beats the alternatives on the days that matter most: no fixed MARC departure to catch, no parking to find near K Street or Capitol Hill, and no surge pricing when a Nationals game or a Beltway incident has rideshare rates spiking right when you need to leave. Your chauffeur plans the route — the Baltimore-Washington Parkway (MD-295) or I-95, depending on the day's traffic — and times the pickup to your actual meeting, not a generic schedule.",
      "This is a different emphasis than a one-off trip: we set up many Baltimore–DC business travelers with consolidated monthly billing, so a daily or weekly commute shows up as one invoice instead of a stack of individual receipts, with priority dispatch for recurring pickup times. Individual, non-recurring trips get the exact same flat-rate reliability without needing an account.",
      "Every trip is quoted as one transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — the same known number whether you're commuting on a quiet Tuesday or a Friday with Beltway congestion.",
    ],
    sections: [
      {
        heading: "Who Uses This Route Regularly",
        paragraphs: [
          "Attorneys and consultants with matters in both cities, government and defense-sector professionals splitting time between Baltimore and federal offices in DC, university and hospital staff commuting between campuses, and executives who've simply decided a chauffeured commute is a better use of 60-plus minutes than driving it themselves.",
        ],
      },
      {
        heading: "Setting Up a Recurring Commute",
        paragraphs: [
          "Tell us your regular schedule and we'll assign a consistent pickup window and, where possible, a familiar chauffeur. Corporate accounts get one consolidated monthly invoice itemized by traveler, a dedicated account contact, and priority scheduling — email info@92limo.com or call (877) 609-1919 to set one up.",
        ],
      },
    ],
    highlights: [
      { title: "Built for Repeat Commuters", desc: "Consistent pickup windows and, where possible, a familiar chauffeur for regular riders." },
      { title: "Consolidated Corporate Billing", desc: "One monthly invoice for companies with staff commuting the corridor regularly." },
      { title: "Smart Routing", desc: "MD-295 or I-95, chosen based on that day's actual traffic." },
      { title: "No Fixed Schedule to Catch", desc: "Door-to-door timing instead of a MARC departure or parking search." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Early meetings and late returns are both covered." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "Is this service meant for one-time trips or regular commuters?", a: "Both — individual trips get the same flat-rate reliability as a recurring commute, and regular riders can set up consistent pickup windows and consolidated billing." },
      { q: "How long does the drive take?", a: "Typically 55 to 75 minutes depending on traffic on MD-295 (Baltimore-Washington Parkway) or I-95." },
      { q: "Can my company bill this to one account?", a: "Yes — corporate accounts receive one consolidated monthly invoice itemized by traveler, with a dedicated contact and priority dispatch." },
      { q: "Is pricing fixed even during rush hour?", a: "Yes, every trip is quoted as a flat, transparent rate confirmed before you book, regardless of traffic conditions." },
      { q: "Do you serve both downtown Baltimore and downtown DC?", a: "Yes — pickups and drop-offs anywhere in both cities, including Capitol Hill, K Street, Georgetown, Harbor East, and Mount Vernon." },
      { q: "Can I request the same chauffeur for recurring trips?", a: "We'll assign a familiar chauffeur where possible for regular riders with a consistent schedule." },
    ],
    ctaTitle: "Book Your Baltimore–DC Commute",
    ctaSubtitle: "Reserve flat-rate car service between Baltimore and Washington, DC — or set up a company account.",
  },

  // Angle: privacy/discretion/VIP — distinct from the general overview above.
  "private-car-service-baltimore": {
    metaTitle: "Private Car Service Baltimore | 92 Limo Service",
    metaDescription:
      "Discreet private car service in Baltimore for executives and VIPs — as-directed chauffeur, confidential point-to-point rides, flat rates, 24/7.",
    eyebrow: "BALTIMORE, MD — PRIVATE & DISCREET TRAVEL",
    h1: "Private Car Service Baltimore",
    subtitle:
      "Discreet, as-directed private car service for Baltimore executives, VIPs, and anyone who values privacy as much as punctuality.",
    image: IMAGES.sClassReal,
    alt: "Mercedes-Benz S-Class for private, discreet car service in Baltimore",
    highlightsHeading: "Privacy Is Standard, Not an Upgrade",
    intro: [
      "Some trips need more than a reliable ride — they need a chauffeur who understands that where you're going, who you're meeting, and what you discuss in the car all stay private. Private car service in Baltimore, as 92 Limo Service runs it, treats confidentiality as a baseline standard for every trip, not a premium add-on reserved for a handful of VIP clients.",
      "That standard matters most for a specific set of riders: executives handling sensitive business matters en route to a meeting, visiting dignitaries and delegations whose itinerary isn't public, individuals who simply prefer not to have their schedule or destination discussed, and anyone who wants a car and driver available on an as-directed basis rather than booking each stop as a separate ride. Our chauffeurs are trained to drive quietly, take direction without unnecessary questions, and keep every detail of a trip between the rider and the car.",
      "As-directed, hourly service is the most common format for this kind of trip — a dedicated vehicle and chauffeur that stay with you for a block of hours, moving between stops on your schedule rather than a fixed route. That means no explaining your itinerary to a new driver at each leg, no app history tied to your movements, and no waiting for a new ride to be dispatched between meetings.",
      "Every private car service booking is quoted as a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — and we run this service 24/7, because discretion often matters most at inconvenient hours.",
    ],
    sections: [
      {
        heading: "What 'Discreet' Actually Means Here",
        paragraphs: [
          "No discussion of a passenger's identity, itinerary, or destinations with anyone outside the booking, a chauffeur who reads the room and drives in silence when that's what's wanted, and vehicle choices — tinted glass where appropriate, a Mercedes-Benz S-Class or Lincoln Navigator — that don't draw unnecessary attention.",
        ],
      },
      {
        heading: "As-Directed Service, Explained",
        paragraphs: [
          "Book a block of hours and the vehicle stays with you, moving between stops as your plans require rather than as a fixed reservation. It's the preferred format for executives with multiple confidential meetings, visiting delegations with a tight and private schedule, and anyone who values having a trusted vehicle on call rather than booking leg by leg.",
        ],
      },
    ],
    highlights: [
      { title: "Confidentiality as Standard", desc: "Every rider's itinerary and conversations stay private — not a premium add-on." },
      { title: "As-Directed Hourly Service", desc: "A dedicated vehicle and chauffeur for the full block of time, moving on your schedule." },
      { title: "Executive & Delegation Experience", desc: "Chauffeurs accustomed to sensitive business and private itineraries." },
      { title: "Discreet Vehicle Choices", desc: "The Mercedes-Benz S-Class and Lincoln Navigator, chosen without drawing attention." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Discreet travel at any hour, not just business hours." },
    ],
    vehicles: BATCH10_GROUP_TRIO,
    faqs: [
      { q: "How is confidentiality actually handled?", a: "Standard practice for every trip — a rider's destinations and conversations are shared only with the people who booked the ride, and chauffeurs are trained not to discuss passenger details." },
      { q: "What does as-directed service mean?", a: "You book a block of hours and the vehicle and chauffeur stay with you, moving between stops on your schedule rather than as separate individual rides." },
      { q: "Can you coordinate transportation for a visiting delegation?", a: "Yes — delegations and groups are coordinated as a single reservation, with multiple vehicles arriving together when needed." },
      { q: "Is this service available on short notice?", a: "We recommend booking as far ahead as possible, but same-day requests are accommodated whenever availability allows — call (877) 609-1919 directly for the fastest response." },
      { q: "Is the price still flat for hourly, as-directed bookings?", a: "Yes — hourly service is quoted as a flat, transparent rate for the block of time booked, confirmed before you ride." },
      { q: "Can my company set up a standing private account?", a: "Yes, with consolidated billing, a dedicated contact, and priority dispatch for recurring confidential travel." },
    ],
    ctaTitle: "Arrange Private Car Service",
    ctaSubtitle: "Call (877) 609-1919 to arrange discreet, as-directed transportation in Baltimore.",
  },

  // Angle: classic sedan-focused "town car" service — traditional,
  // old-school professional black car, distinct from the limousine-class
  // and SUV-forward framing elsewhere in this cluster.
  "town-car-service-baltimore": {
    metaTitle: "Town Car Service Baltimore MD | 92 Limo Service",
    metaDescription:
      "Classic town car service in Baltimore, MD — Mercedes & BMW sedans, professional chauffeurs, flat rates for business and airport travel. 24/7.",
    eyebrow: "BALTIMORE, MD — CLASSIC TOWN CAR",
    h1: "Town Car Service Baltimore MD",
    subtitle:
      "The traditional town car experience in Baltimore — an executive sedan, a professional chauffeur, and a flat rate, every time.",
    image: IMAGES.bmw7,
    alt: "Black BMW 7 Series executive sedan for town car service in Baltimore, MD",
    highlightsHeading: "The Sedan Standard, Still the Standard",
    intro: [
      "Before 'black car service' and 'limo' became interchangeable marketing terms, a town car meant something specific: a dark executive sedan, a professional driver in a suit, and a quiet, dependable ride for business travel and airport trips. 92 Limo Service still runs that exact standard in Baltimore — the Mercedes-Benz E-Class and BMW 7 Series, chauffeured, detailed, and reserved in advance.",
      "This is a sedan-first service, built for the trips a town car has always been best at: a single executive heading to a downtown meeting, a solo traveler to or from BWI, a client pickup from a Baltimore hotel, or a quiet ride home after a late flight. We don't push an SUV or a Sprinter van on a one- or two-passenger trip — the right-sized sedan is usually the better, more efficient choice, and it's what we lead with for this service.",
      "Baltimore's downtown grid, hospital campuses, and hotel district all benefit from a driver who already knows the layout — one-way streets near the Inner Harbor, the fastest approach to Johns Hopkins or the convention center, and which routes to avoid on a game night at Camden Yards or M&T Bank Stadium. That local knowledge, paired with the classic sedan standard, is what sets a proper town car service apart from a generic ride-hailing trip.",
      "Every trip is quoted as a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front. We operate 24/7, so an early-morning airport run or a late client dinner both get the same dependable sedan and chauffeur.",
    ],
    sections: [
      {
        heading: "Where a Town Car Fits Best",
        paragraphs: [
          "Single-passenger or two-passenger business trips, BWI airport transfers for solo travelers, hotel-to-meeting pickups downtown, and any ride where a quiet, professional sedan is simply the right tool — rather than defaulting to a larger SUV or a limousine-class vehicle that isn't needed for the trip.",
        ],
      },
      {
        heading: "What's Included",
        paragraphs: [
          "Every town car booking includes a late-model Mercedes-Benz E-Class or BMW 7 Series, a professionally dressed chauffeur, bottled water, USB charging, and — for airport trips — real-time flight tracking with automatic pickup adjustment for delays.",
        ],
      },
    ],
    highlights: [
      { title: "The Classic Sedan Standard", desc: "Mercedes-Benz E-Class and BMW 7 Series, chauffeured — not an upsell to a larger vehicle you don't need." },
      { title: "Right-Sized for Business Travel", desc: "Built for one or two passengers, the trips a town car has always handled best." },
      { title: "Local Downtown Knowledge", desc: "Chauffeurs who know Baltimore's one-way streets, hospital campuses, and game-day detours." },
      { title: "Flight Tracking Included", desc: "Automatic pickup adjustment for BWI arrivals and delays." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Early flights and late meetings, covered around the clock." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "What exactly is a 'town car' versus a regular sedan service?", a: "The term describes a dark executive sedan — a Mercedes-Benz E-Class or BMW 7 Series in our fleet — chauffeured for business and airport travel, as opposed to a limousine-class SUV or Sprinter van." },
      { q: "Is this service better suited for one or two passengers?", a: "Yes — a town car is right-sized for solo and two-passenger trips. For larger groups or extra luggage, we recommend a Luxury SUV or Sprinter van instead." },
      { q: "Do you provide town car service to and from BWI?", a: "Yes, including real-time flight tracking and automatic pickup adjustment for early or delayed flights." },
      { q: "Do your chauffeurs know downtown Baltimore well?", a: "Yes — including one-way street patterns, hospital campus access, and game-day traffic around Camden Yards and M&T Bank Stadium." },
      { q: "Is pricing flat for a town car booking?", a: "Yes, always a flat, transparent rate confirmed before you book, with no metering or surge pricing." },
      { q: "Can I set up a corporate account for recurring town car trips?", a: "Yes — consolidated monthly billing and priority dispatch are available for companies with regular Baltimore sedan travel." },
    ],
    ctaTitle: "Book Your Baltimore Town Car",
    ctaSubtitle: "Reserve a classic chauffeured sedan for your next Baltimore business trip.",
  },

  // ============================================================
  // ADDITIONAL CROSS-CITY / STATEWIDE / MISC. ENTRIES
  // ============================================================

  // Angle: a general, non-airport-route statewide info page, distinct from
  // dulles/bwi-specific pages — covers all three regional airports.
  "airport-transportation-maryland": {
    metaTitle: "Airport Transportation Maryland | 92 Limo Service",
    metaDescription:
      "Airport transportation across Maryland to BWI, DCA & Dulles. Flight tracking, flat rates, and 24/7 chauffeurs serving every Maryland county.",
    eyebrow: "MARYLAND — ALL AIRPORTS",
    h1: "Airport Transportation Maryland",
    subtitle:
      "One car service for every Maryland airport trip — BWI, Reagan National, and Washington Dulles — with flat rates and real-time flight tracking.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur with luggage for airport transportation across Maryland",
    highlightsHeading: "Three Airports, One Reliable Service",
    intro: [
      "Maryland travelers have a genuine choice of airports, and the right one changes depending on the trip: BWI Marshall for the broadest domestic schedule and value fares, Reagan National (DCA) for the fastest access to downtown DC, and Washington Dulles (IAD) for international and long-haul departures. Airport transportation across Maryland, done well, means a car service that handles all three with the same standard, not just the one closest to home.",
      "92 Limo Service covers every Maryland county with flat-rate airport transportation — from Baltimore City and County through Howard, Anne Arundel, Montgomery, Prince George's, and Frederick Counties, out to the Eastern Shore and down to Southern Maryland. Wherever you're starting from, we route to whichever airport your itinerary actually requires, rather than treating BWI as the only option because it happens to be in-state.",
      "Every airport trip includes real-time flight tracking, so early arrivals and delays adjust your pickup automatically at no charge, and generous complimentary wait time is standard on every arrival. Optional meet-and-greet service (additional charge) puts your chauffeur inside the terminal with a name sign at any of the three airports, and curbside pickup is included at no extra cost for travelers who prefer it.",
      "Pricing is always a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — whether the trip is a 15-minute hop from Linthicum to BWI or an hour-and-a-half run from Western Maryland to Dulles.",
    ],
    sections: [
      {
        heading: "Choosing the Right Airport",
        paragraphs: [
          "BWI generally offers the most frequent domestic service and the best value fares for most Maryland origins. DCA is unmatched for speed into downtown Washington but has fewer long-haul options. Dulles carries the region's international widebody service and is often the only option for direct flights to Europe, the Middle East, Africa, and Asia. We're happy to advise on which airport fits a given itinerary when you book.",
        ],
      },
      {
        heading: "Coverage Across Maryland",
        paragraphs: [
          "From Baltimore, Columbia, and Annapolis to Bethesda, Rockville, Silver Spring, Frederick, Waldorf, and the Eastern Shore, our chauffeurs serve the full state with the same flat-rate standard and 24/7 availability — no region is treated as secondary.",
        ],
      },
    ],
    highlights: [
      { title: "All Three Regional Airports", desc: "BWI, Reagan National (DCA), and Washington Dulles (IAD), covered with one consistent standard." },
      { title: "Every Maryland County", desc: "From Baltimore and Howard County to the Eastern Shore and Southern Maryland." },
      { title: "Flight Tracking Included", desc: "Automatic pickup adjustment for early arrivals and delays, at no charge." },
      { title: "Optional Meet & Greet", desc: "In-terminal pickup with a name sign at any of the three airports. Additional charge applies." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Every departure and arrival time, covered statewide." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "Which airport should I use from Maryland?", a: "BWI usually offers the best value and domestic frequency, DCA is fastest into downtown DC, and Dulles carries most long-haul international flights. We can advise based on your specific trip." },
      { q: "Do you serve all of Maryland, or just the Baltimore area?", a: "All of Maryland — Baltimore, Howard, Anne Arundel, Montgomery, Prince George's, and Frederick Counties, plus the Eastern Shore and Southern Maryland." },
      { q: "Is flight tracking included for every airport?", a: "Yes, on all three — BWI, DCA, and Dulles — with automatic pickup adjustment for delays at no extra charge." },
      { q: "Can my chauffeur meet me inside the terminal?", a: "Yes, optional meet & greet with a name sign is available for an additional charge at any of the three airports; curbside pickup is standard and included." },
      { q: "Is pricing the same regardless of which airport I use?", a: "Each route is quoted individually based on distance, but the pricing model is identical — one flat, transparent rate confirmed before you book." },
      { q: "Do you run this service overnight?", a: "Yes, 24/7, covering every early departure and red-eye arrival across the state." },
    ],
    ctaTitle: "Book Your Maryland Airport Transfer",
    ctaSubtitle: "Reserve a flat-rate chauffeur to BWI, Reagan National, or Washington Dulles from anywhere in Maryland.",
  },

  // Angle: Baltimore <-> DC, GROUP/EVENT-focused limo service (vs. the
  // business-commuter "car-service-baltimore-to-dc" above).
  "limo-service-baltimore-to-dc": {
    metaTitle: "Limo Service Baltimore to DC | 92 Limo Service",
    metaDescription:
      "Group limo service from Baltimore to Washington, DC for game days, nights out & events. Sprinter vans & Navigators, flat rates, 24/7 chauffeurs.",
    eyebrow: "BALTIMORE → WASHINGTON DC — GROUPS & EVENTS",
    h1: "Limo Service Baltimore to DC",
    subtitle:
      "Group-ready limo service between Baltimore and Washington, DC — for game days, nights out, and events, with one vehicle for the whole party.",
    image: IMAGES.sprinterPartyInterior,
    alt: "Mercedes Sprinter Executive interior for a group limo trip from Baltimore to DC",
    highlightsHeading: "Keep the Group Together, Both Ways",
    intro: [
      "Baltimore and DC share more than a highway — the two cities trade sports fans, concertgoers, wedding guests, and groups out for a night that starts in one city and ends in the other. Limo service between Baltimore and DC exists for exactly that: a single vehicle that keeps a group together for the whole round trip, instead of splitting into multiple cars, rideshares, or a designated driver stuck sober all night.",
      "A Mercedes Sprinter Executive — with its upgraded seating and mood lighting — comfortably moves a group of up to 14 for a Ravens or Orioles fan trip into DC for a Commanders or Nationals game, a bachelorette or bachelor night bouncing between the two cities, or a wedding guest group making the trip between a Baltimore hotel block and a DC-area venue. A Lincoln Navigator handles a smaller party with the same limo-class comfort.",
      "This is a different trip than a solo business commute: the pickup and return times are built around an event schedule, not a meeting, and the vehicle itself is part of making the night feel like an occasion rather than a logistics problem. Your chauffeur handles the driving and the parking entirely, so the whole group can actually enjoy the game, the show, or the reception without anyone worrying about the drive home.",
      "Every group trip is quoted as a flat, transparent rate confirmed before you book — covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — so splitting the cost among a group is simple and the total is known well before the night starts.",
    ],
    sections: [
      {
        heading: "The Occasions This Covers",
        paragraphs: [
          "Game-day trips between Camden Yards or M&T Bank Stadium and DC's Nationals Park or Audi Field, concert and show nights at either city's major venues, bachelorette and bachelor parties, wedding guest transportation between host hotels and venues in the other city, and milestone celebrations that call for one vehicle and zero designated drivers.",
        ],
      },
      {
        heading: "Planning a Group Round Trip",
        paragraphs: [
          "Tell us your event start time and we'll plan the pickup with a realistic buffer for I-95 or MD-295 traffic; tell us the return time (or leave it open for an event that runs late) and we'll have the vehicle ready whenever your group is. Splitting payment among a group is easy since the total rate is confirmed up front.",
        ],
      },
    ],
    highlights: [
      { title: "Keeps the Whole Group Together", desc: "One Sprinter Executive or Navigator instead of multiple cars or rideshares." },
      { title: "Built Around the Event Schedule", desc: "Pickup and return timed to a game, show, or reception, not a meeting." },
      { title: "No Designated Driver Needed", desc: "Your chauffeur handles the driving and parking for the whole trip." },
      { title: "Game-Day & Event Aware", desc: "Routes planned around stadium traffic in both cities." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation — easy to split among a group." },
      { title: "24/7 Availability", desc: "Late returns from a show or reception are covered without extra charge." },
    ],
    vehicles: BATCH10_GROUP_TRIO,
    faqs: [
      { q: "How many people can the Sprinter hold for a group trip?", a: "Up to 14 passengers with full luggage or gear capacity, making it a popular choice for game-day groups and wedding parties." },
      { q: "Can you time pickup and return around a game or event?", a: "Yes — tell us the start time and we'll back-plan the pickup, and we can leave the return time open if the event might run late." },
      { q: "Is this different from your standard Baltimore–DC car service?", a: "Yes — this route is built for groups and events, with limo-class vehicles like the Sprinter Executive and Navigator, rather than a single business traveler's sedan trip." },
      { q: "How does payment work for a group booking?", a: "The total fare is confirmed up front as one flat, transparent rate, making it simple for a group to split the cost in advance." },
      { q: "What's the cancellation policy for a Sprinter booking?", a: "Sprinter van and special-event bookings require 12 hours' notice for a free cancellation." },
      { q: "Do you serve both directions — Baltimore to DC and back?", a: "Yes, round-trip bookings with a single vehicle for the whole group are the most common way this route is booked." },
    ],
    ctaTitle: "Book Your Group Trip to DC",
    ctaSubtitle: "Reserve a Sprinter or Navigator to keep your whole group together between Baltimore and DC.",
  },

  // Angle: Bethesda, general/everyday local service, distinct from the
  // existing airport-transfer-specific `bwi-to-bethesda` page.
  "car-service-bethesda-md": {
    metaTitle: "Car Service Bethesda MD | 92 Limo Service",
    metaDescription:
      "Everyday car service in Bethesda, MD — NIH, Walter Reed, downtown Bethesda, and local trips. Flat rates, professional chauffeurs, 24/7.",
    eyebrow: "BETHESDA, MD — EVERYDAY LOCAL CAR SERVICE",
    h1: "Car Service Bethesda MD",
    subtitle:
      "Everyday, point-to-point car service around Bethesda — NIH, Walter Reed, downtown Bethesda Row, and the rest of Montgomery County.",
    image: IMAGES.sedan,
    alt: "Sedan providing local car service in Bethesda, MD",
    highlightsHeading: "For the Trips That Aren't a Flight",
    intro: [
      "Not every Bethesda trip starts or ends at an airport. A meaningful share of the rides this community needs are local: a patient and family heading to an appointment at the NIH Clinical Center, a Walter Reed visitor without a car, a downtown Bethesda dinner that ends with a ride home instead of a designated driver, or a resident who simply wants a dependable car for a day of errands. Car service in Bethesda, MD, from 92 Limo Service is built around exactly those everyday trips.",
      "Bethesda's layout — the dense downtown around Bethesda Row and the Metro station, the sprawling NIH and Walter Reed campuses, and the surrounding Montgomery County neighborhoods of Chevy Chase, Potomac, and Rockville — rewards a chauffeur who already knows where the visitor entrances, drop-off points, and parking restrictions actually are. Our chauffeurs drive this area regularly and route around downtown congestion and campus security checkpoints rather than guessing.",
      "Hourly chauffeur service is especially useful here for patients and families managing a multi-stop day — a wait-and-return trip to an NIH appointment, followed by a pharmacy stop and a ride home, all billed as one trip rather than several separate fares. It's also a popular option for business travelers with back-to-back meetings around Bethesda's corporate offices.",
      "Every local trip is quoted as a flat, transparent rate confirmed before you book — covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — whether it's a short hop to Bethesda Row or a half-day of hourly service around Montgomery County.",
    ],
    sections: [
      {
        heading: "Trips This Covers",
        paragraphs: [
          "Appointments and wait-and-return trips at the NIH Clinical Center and Walter Reed National Military Medical Center, downtown Bethesda dinners and evenings out, local errands and pharmacy runs, and point-to-point trips around Chevy Chase, Potomac, and Rockville — the everyday rides that make up most of a resident's actual transportation needs.",
        ],
      },
      {
        heading: "Recurring Medical Appointments",
        paragraphs: [
          "Many Bethesda clients set up standing weekly or biweekly rides for treatment at the NIH or ongoing care at Walter Reed. We keep preferences on file, assign a familiar chauffeur when possible, and can bill to a single account for convenience — call (877) 609-1919 to set it up.",
        ],
      },
    ],
    highlights: [
      { title: "NIH & Walter Reed Local Trips", desc: "Everyday appointment and wait-and-return service, not just airport transfers." },
      { title: "Knows Bethesda's Layout", desc: "Downtown Bethesda Row, Metro access, and campus drop-off points, handled correctly the first time." },
      { title: "Hourly Chauffeur Service", desc: "One vehicle and driver for a multi-stop day, billed as a single trip." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "All of Montgomery County", desc: "Chevy Chase, Potomac, Rockville, and the surrounding communities, not just downtown Bethesda." },
      { title: "24/7 Availability", desc: "Early appointments and evening errands are both covered." },
    ],
    vehicles: LOCAL_TRIO,
    faqs: [
      { q: "Is this different from your BWI-to-Bethesda airport service?", a: "Yes — this is everyday, local car service around Bethesda itself, not an airport transfer. We offer both, depending on your trip." },
      { q: "Can you handle a wait-and-return trip to an NIH appointment?", a: "Yes, we regularly provide wait-and-return service for NIH Clinical Center and Walter Reed appointments." },
      { q: "Do you serve downtown Bethesda for evenings out?", a: "Yes — a ride home from Bethesda Row or a downtown dinner is a common booking." },
      { q: "Can I set up recurring rides for ongoing medical treatment?", a: "Yes, many clients schedule standing weekly or biweekly rides; we keep your preferences on file and assign a familiar chauffeur when possible." },
      { q: "Do you serve the rest of Montgomery County too?", a: "Yes — Chevy Chase, Potomac, Rockville, and the surrounding communities are all part of this service area." },
      { q: "Is pricing flat for a short local trip?", a: "Yes, always a flat, transparent rate confirmed before you book." },
    ],
    ctaTitle: "Book Everyday Car Service in Bethesda",
    ctaSubtitle: "Reserve a flat-rate chauffeur for your next local trip, appointment, or evening out in Bethesda.",
  },

  // Angle: BWI -> DC route, but framed around BWI-AREA hotel/business
  // travelers and day trips rather than flight arrivals — distinct from the
  // existing flight-tracking-focused `bwi-to-washington-dc` page.
  "car-service-from-bwi-to-dc": {
    metaTitle: "Car Service From BWI to DC | 92 Limo Service",
    metaDescription:
      "Flat-rate car service from the BWI area into Washington, DC for conference attendees, day-trippers & business travelers staying near the airport.",
    eyebrow: "BWI AREA → WASHINGTON DC",
    h1: "Car Service From BWI to DC",
    subtitle:
      "A flat-rate ride from the BWI corridor into Washington, DC — built for conference attendees and business travelers based near the airport, not just arriving flights.",
    image: IMAGES.dcSkyline,
    alt: "Sedan providing car service from the BWI area into Washington DC",
    highlightsHeading: "Staying Near BWI, Working in DC",
    intro: [
      "A lot of trips from BWI to DC don't actually start at the terminal. Conference attendees often book hotels in the BWI corridor — Linthicum, Hanover, Arundel Mills — because rates run lower than downtown DC, then need a reliable way into the District for the actual event. Government contractors and businesses with offices near the airport send staff into DC for meetings regularly. This service covers that version of the trip: car service from the BWI area into Washington, DC, whether or not a flight is involved at all.",
      "The drive runs about 45 to 60 minutes depending on the time of day, typically via I-95 or the Baltimore-Washington Parkway, and our chauffeurs plan the route around rush-hour patterns rather than a flat app estimate. Because many of these trips are booked by conference organizers or corporate travel coordinators moving multiple people on the same schedule, we're set up to handle staggered pickups and group bookings from the same hotel or office efficiently.",
      "This is also the right service for day-trippers — visitors staying near BWI for cost reasons who want to see the monuments, museums, or a specific DC destination for the day, then return to their hotel that evening. One flat rate covers the round trip or a planned wait-and-return, so there's no meter running while you're out sightseeing.",
      "Every trip is quoted as a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front. Vehicles range from a single business sedan to a Sprinter van for a group traveling together from the same hotel.",
    ],
    sections: [
      {
        heading: "Who Books This Route",
        paragraphs: [
          "Conference and convention attendees staying at BWI-corridor hotels for value, corporate travelers whose company is based near the airport but has regular business in DC, and tourists and day-trippers using a BWI-area hotel as a base for DC sightseeing.",
        ],
      },
      {
        heading: "Group and Multi-Pickup Bookings",
        paragraphs: [
          "For conference groups or company teams moving together, we coordinate staggered pickups from the same hotel or office and can set up a single billing account for the organizer, with multiple vehicles arriving together for larger parties.",
        ],
      },
    ],
    highlights: [
      { title: "Built for BWI-Area Travelers", desc: "Hotel and office pickups near the airport, not just arriving flights." },
      { title: "Conference & Group Friendly", desc: "Staggered pickups and consolidated billing for groups traveling together." },
      { title: "Day-Trip Wait-and-Return", desc: "One flat rate for a planned round trip into DC and back to your hotel." },
      { title: "Smart Routing", desc: "I-95 or the Baltimore-Washington Parkway, chosen based on the day's actual traffic." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "24/7 Availability", desc: "Early conference sessions and late DC returns are both covered." },
    ],
    vehicles: BATCH10_SEDAN_TRIO,
    faqs: [
      { q: "Do I need to be arriving on a flight to use this service?", a: "No — this service is specifically for travelers already based near BWI, whether at a hotel or office, who need a ride into Washington, DC." },
      { q: "Can you handle a group from a conference hotel?", a: "Yes — we regularly coordinate staggered pickups for conference groups and can set up a single billing account for the organizer." },
      { q: "How long does the drive take?", a: "Typically 45 to 60 minutes depending on traffic, via I-95 or the Baltimore-Washington Parkway." },
      { q: "Can I book a round trip for a day of sightseeing?", a: "Yes — a wait-and-return booking covers the trip into DC and back to your BWI-area hotel for one flat rate." },
      { q: "Is pricing fixed for this route?", a: "Yes, always a flat, transparent rate confirmed before you book, regardless of time of day." },
      { q: "Do you serve hotels in Linthicum, Hanover, and Arundel Mills?", a: "Yes — these are among our most common pickup points for this route." },
    ],
    ctaTitle: "Book Your BWI-Area to DC Ride",
    ctaSubtitle: "Reserve a flat-rate chauffeur from your BWI-area hotel or office into Washington, DC.",
  },

  // Angle: statewide, occasions/use-case organized (distinct from
  // `car-service-maryland`'s county-coverage framing below).
  "maryland-car-service": {
    metaTitle: "Maryland Car Service | 92 Limo Service",
    metaDescription:
      "Maryland car service for airport transfers, corporate travel, weddings & events — statewide coverage, flat rates, professional chauffeurs, 24/7.",
    eyebrow: "MARYLAND — EVERY OCCASION",
    h1: "Maryland Car Service",
    subtitle:
      "One car service for every occasion in Maryland — airport transfers, corporate travel, weddings, and events, quoted flat and driven right.",
    image: IMAGES.suv,
    alt: "Luxury SUV for Maryland car service across occasions",
    highlightsHeading: "Whatever the Occasion, the Same Standard",
    intro: [
      "'Car service' means a different thing depending on why you're booking it, and most companies only do one of those things well. 92 Limo Service runs Maryland car service across every occasion that actually comes up — airport transfers to BWI, DCA, and Dulles; corporate travel for executives and visiting teams; wedding and event transportation; and simple point-to-point rides for anyone who'd rather not drive and park themselves.",
      "For airport travel, that means real-time flight tracking, generous complimentary wait time, and optional meet-and-greet service (additional charge) — the same standard whether you're flying out of BWI for a quick domestic hop or connecting internationally through Dulles. For corporate clients, it means consolidated monthly billing, priority dispatch, and chauffeurs who treat a meeting schedule as seriously as you do. For weddings and events, it means a limousine-class fleet — Lincoln Navigators, Mercedes Sprinter Executive vans — reserved well in advance and detailed before the big day.",
      "What stays constant across every occasion is the pricing model: one flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front. There's no separate 'wedding rate' that's harder to pin down than an airport rate, and no surge pricing that spikes because it happens to be a Saturday night.",
      "We operate 24/7 across the state, so whatever the occasion — a 4 a.m. flight, a 4 p.m. client pickup, or a wedding that runs past midnight — the same professional chauffeurs and late-model fleet are available.",
    ],
    sections: [
      {
        heading: "Matching the Occasion to the Vehicle",
        paragraphs: [
          "A Mercedes-Benz E-Class or BMW 7 Series handles solo business and airport travel. A Lincoln Navigator or Chevrolet Suburban fits families, VIP arrivals, and corporate groups. A Mercedes Sprinter Executive, with its upgraded interior and lighting, is built for weddings, proms, and group celebrations. We help you choose the right vehicle for the occasion rather than defaulting to one option for every trip.",
        ],
      },
      {
        heading: "Corporate and Recurring Accounts",
        paragraphs: [
          "Companies with regular Maryland travel — airport transfers for visiting staff, recurring client pickups, or standing executive commutes — can set up a consolidated account with one monthly invoice, a dedicated contact, and priority dispatch. Email info@92limo.com or call (877) 609-1919 to get started.",
        ],
      },
    ],
    highlights: [
      { title: "Every Occasion, One Standard", desc: "Airport transfers, corporate travel, weddings, and events — all run to the same flat-rate, professional standard." },
      { title: "Statewide Coverage", desc: "Baltimore, Columbia, Annapolis, Bethesda, Frederick, and the rest of Maryland." },
      { title: "Right-Sized Fleet", desc: "From a single executive sedan to a 14-passenger Sprinter Executive for celebrations." },
      { title: "Corporate Accounts", desc: "Consolidated monthly billing and priority dispatch for recurring business travel." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation — no separate 'event rate.'" },
      { title: "24/7 Availability", desc: "Early flights, business meetings, and late weddings — all covered around the clock." },
    ],
    vehicles: BATCH10_GROUP_TRIO,
    faqs: [
      { q: "Do you handle both airport transfers and special events?", a: "Yes — the same company, fleet, and flat-rate pricing standard covers airport transfers, corporate travel, weddings, and events across Maryland." },
      { q: "Is pricing different for weddings versus airport trips?", a: "No — every occasion is quoted as a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front." },
      { q: "Can my company set up an account for recurring travel?", a: "Yes, with consolidated monthly invoicing, a dedicated contact, and priority dispatch. Email info@92limo.com to start." },
      { q: "What vehicle is best for a family versus a wedding party?", a: "A Lincoln Navigator or Chevrolet Suburban fits a family with luggage well; a Mercedes Sprinter Executive is built for wedding parties and larger celebrations." },
      { q: "Do you serve all of Maryland, or just a few cities?", a: "All of Maryland — Baltimore, Columbia, Annapolis, Bethesda, Frederick, and the rest of the state." },
      { q: "Is this service available around the clock?", a: "Yes, 24/7, for any occasion at any hour." },
    ],
    ctaTitle: "Book Your Maryland Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeur for your next airport transfer, meeting, wedding, or event.",
  },

  // Angle: statewide, organized around a service-area/county-coverage list
  // (distinct from `maryland-car-service`'s occasions framing above).
  "car-service-maryland": {
    metaTitle: "Car Service Maryland | 92 Limo Service",
    metaDescription:
      "Car service across every Maryland county — Baltimore, Howard, Anne Arundel, Montgomery & more. Flat rates, pro chauffeurs, 24/7. Call now.",
    eyebrow: "MARYLAND — STATEWIDE COVERAGE",
    h1: "Car Service Maryland",
    subtitle:
      "Flat-rate car service covering every Maryland county — from Baltimore City to the Eastern Shore — with one consistent standard of service.",
    image: IMAGES.sedan,
    alt: "Luxury sedan for car service across Maryland",
    highlightsHeading: "Maryland, County by County",
    intro: [
      "Maryland packs an unusual amount of geographic variety into a small state — dense Baltimore neighborhoods, planned suburban communities like Columbia, the federal-adjacent corridor through Montgomery and Prince George's Counties, historic Annapolis, and the Eastern Shore across the Bay Bridge. Car service across Maryland means actually covering all of it, not just the handful of zip codes closest to BWI.",
      "92 Limo Service runs chauffeured car service in every Maryland county: Baltimore City and County, Howard County (Columbia, Ellicott City), Anne Arundel County (Annapolis, Glen Burnie), Montgomery County (Bethesda, Rockville, Silver Spring, Gaithersburg), Prince George's County (Bowie, Laurel, Greenbelt), Frederick County, Charles County (Waldorf), and out to the Eastern Shore and Ocean City for longer-distance bookings. Wherever you're starting from in the state, the same flat-rate standard applies.",
      "Each county brings its own routing quirks — Baltimore's one-way downtown grid and game-day closures, the BW Parkway and I-270 corridors through the DC suburbs, the Bay Bridge's seasonal backups heading to the Shore — and our chauffeurs plan around them rather than treating the whole state as one generic service area. That local awareness is what keeps a long cross-county trip predictable instead of a guessing game.",
      "Every trip is quoted as a flat, transparent rate confirmed before you book, covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — the same model whether you're booking a short local ride in Columbia or a cross-state trip to Ocean City.",
    ],
    sections: [
      {
        heading: "Coverage by Region",
        paragraphs: [
          "Central Maryland (Baltimore, Howard, Anne Arundel Counties) for airport transfers and urban point-to-point travel; the DC suburbs (Montgomery and Prince George's Counties) for corporate and commuter trips; Western Maryland (Frederick County) for business and leisure travel; Southern Maryland (Charles County) for longer regional trips; and the Eastern Shore, including Ocean City, for seasonal and vacation travel.",
        ],
      },
      {
        heading: "Cross-County and Long-Distance Trips",
        paragraphs: [
          "Beyond single-county service, we regularly run longer trips that cross the state — Baltimore to the Eastern Shore, Montgomery County to Ocean City for a beach weekend, or Frederick County to BWI. These are quoted the same way as any other trip: one flat rate, confirmed before you book.",
        ],
      },
    ],
    highlights: [
      { title: "Every Maryland County", desc: "Baltimore, Howard, Anne Arundel, Montgomery, Prince George's, Frederick, Charles, and the Eastern Shore." },
      { title: "Local Routing Knowledge", desc: "Chauffeurs who plan around each region's specific traffic patterns, from Baltimore's grid to the Bay Bridge." },
      { title: "Cross-County & Long-Distance Trips", desc: "The same flat-rate standard for a short local ride or a cross-state trip." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation." },
      { title: "Professional Chauffeurs Statewide", desc: "The same background-checked, professionally presented standard in every county." },
      { title: "24/7 Availability", desc: "Available statewide, around the clock." },
    ],
    vehicles: LOCAL_TRIO,
    faqs: [
      { q: "Do you serve counties outside the Baltimore-DC corridor?", a: "Yes — we cover every Maryland county, including Frederick County, Charles County, and trips out to the Eastern Shore and Ocean City." },
      { q: "Is pricing different depending on the county?", a: "The rate reflects distance and route, but the pricing model is identical everywhere — one flat, transparent rate confirmed before you book." },
      { q: "Can you handle a long cross-state trip, not just local rides?", a: "Yes, we regularly run longer trips such as Baltimore to the Eastern Shore or Montgomery County to Ocean City." },
      { q: "Do your chauffeurs know regional routing, like Bay Bridge traffic?", a: "Yes — our chauffeurs plan around seasonal Bay Bridge backups, Baltimore's downtown grid, and the DC-suburb commuter corridors." },
      { q: "Is this the same company that handles airport transfers?", a: "Yes — the same fleet and flat-rate standard covers airport transfers, corporate travel, and general car service across the state." },
      { q: "Is service available statewide around the clock?", a: "Yes, 24/7 coverage across every county we serve." },
    ],
    ctaTitle: "Book Your Maryland Car Service",
    ctaSubtitle: "Reserve a flat-rate chauffeur anywhere in Maryland — call (877) 609-1919 or book online.",
  },

  // Angle: Baltimore prom-specific LIMOUSINE experience (vs. the existing
  // generated `prom-limo-baltimore` page's school-logistics framing).
  "baltimore-prom-limousine": {
    metaTitle: "Baltimore Prom Limousine | 92 Limo Service",
    metaDescription:
      "Baltimore prom limousine service — Navigators & Sprinter Executive vans with mood lighting, flat rates, and parent-trusted supervised scheduling.",
    eyebrow: "BALTIMORE, MD — PROM NIGHT",
    h1: "Baltimore Prom Limousine",
    subtitle:
      "A genuine limousine experience for Baltimore prom night — Navigators and Sprinter Executive vans, flat rates, and a schedule parents can trust.",
    image: IMAGES.sprinterPink,
    alt: "Mercedes Sprinter Executive limousine interior for Baltimore prom night",
    highlightsHeading: "The Limousine Part of Prom Night",
    intro: [
      "Prom night in Baltimore has a lot of moving pieces — photos at a group's chosen location, dinner reservations, the dance itself, and sometimes an after-party — but the limousine is the part that makes it feel like an occasion rather than a series of car rides. 92 Limo Service brings a genuine limousine-class fleet to Baltimore prom groups: the Lincoln Navigator for smaller groups, and the Mercedes Sprinter Executive, with its upgraded seating and mood lighting, for a full group that wants real limo-bus energy.",
      "This is the vehicle experience itself as part of the celebration — not just a ride between stops, but a space built for the group to take photos in, play music, and feel like the night has already started the moment the door opens. Our chauffeurs are trained to treat prom groups with the same professionalism as any other booking: on time, well-presented, and focused on getting the group where they need to be, safely and on schedule.",
      "Parents book Baltimore prom limousines specifically because of the supervision and reliability that comes with a professional chauffeur — no risk of an inexperienced teen driver managing a group on a night with a packed schedule, and a confirmed timeline that parents can actually track, from the photo location to dinner to the dance and back home.",
      "Every prom booking is quoted as a flat, transparent rate confirmed before you book — covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed up front — so splitting the cost among a group of friends is simple, with no surprise add-ons after the fact.",
    ],
    sections: [
      {
        heading: "Planning the Night",
        paragraphs: [
          "A typical Baltimore prom booking starts with a photo-location pickup in the late afternoon, moves to a dinner reservation, continues to the school or venue for the dance, and closes with a return trip home or to an after-party — all on one confirmed schedule with a single professional chauffeur.",
        ],
      },
      {
        heading: "Booking Early Matters",
        paragraphs: [
          "Prom season runs April and May across Baltimore City and County schools, and the same Sprinter vans are in demand for spring weddings during that window too. Reserving four to eight weeks ahead secures your group's preferred vehicle and locks in the rate before peak-season demand picks up.",
        ],
      },
    ],
    highlights: [
      { title: "Genuine Limousine Experience", desc: "Lincoln Navigator and Mercedes Sprinter Executive with upgraded seating and mood lighting." },
      { title: "Parent-Trusted Supervision", desc: "A professional chauffeur manages the schedule and the driving — no inexperienced teen behind the wheel." },
      { title: "Full-Night Scheduling", desc: "Photos, dinner, the dance, and the ride home, all on one confirmed timeline." },
      { title: "Flat, Transparent Pricing", desc: "One price covering the base transportation charge, with gratuity, tolls, parking and any other applicable charges disclosed before confirmation — easy to split among the group." },
      { title: "Detailed Before Every Booking", desc: "Vehicles cleaned and prepared ahead of prom night — no surprises when it arrives." },
      { title: "24/7 Booking Support", desc: "Late pickups and after-party returns are both covered." },
    ],
    vehicles: CELEBRATION_TRIO,
    faqs: [
      { q: "How far in advance should we book a Baltimore prom limousine?", a: "Four to eight weeks ahead is ideal, since prom season (April and May) competes with spring wedding season for the same Sprinter vans." },
      { q: "Can the vehicle stay with us through photos, dinner, and the dance?", a: "Yes — a typical booking covers the full evening on one confirmed schedule, from the photo location through dinner, the dance, and the ride home." },
      { q: "How many people fit in the Sprinter Executive?", a: "Up to 14 passengers, with upgraded seating and mood lighting built for the occasion." },
      { q: "Do parents get visibility into the schedule?", a: "Yes — the pickup and drop-off times are confirmed in advance, so parents can track the plan for the night." },
      { q: "Is the price easy to split among a group of friends?", a: "Yes, the total is quoted as one flat, transparent rate confirmed before you book, so splitting the cost is straightforward." },
      { q: "What if our plans change after booking?", a: "Sprinter van and special-event bookings can be adjusted with enough notice; cancellations require 12 hours' notice for a full refund." },
    ],
    ctaTitle: "Book Your Baltimore Prom Limousine",
    ctaSubtitle: "Reserve a limousine-class vehicle for the whole group — photos, dinner, the dance, and home.",
  },

  // ============================================================
  // EXTRA (23rd) PAGE — resolves the "wedding limo service in maryland"
  // keyword via a clean, non-colliding landing-page slug rather than
  // editing either existing blog post's title (see header note).
  // ============================================================
  "maryland-wedding-limo-service": {
    metaTitle: "Maryland Wedding Limo Service | 92 Limo Service",
    metaDescription:
      "Book wedding limo service in Maryland — Navigators, S-Class sedans & Sprinter Executive vans for the couple, wedding party & guest shuttles. 24/7.",
    eyebrow: "MARYLAND — WEDDING TRANSPORTATION",
    h1: "Wedding Limo Service in Maryland",
    subtitle:
      "Book wedding limo service in Maryland — the couple's car, a wedding-party Sprinter, and guest shuttles, quoted flat and reserved with a real chauffeur.",
    image: IMAGES.wedding,
    alt: "Mercedes-Benz S-Class and Sprinter Executive for wedding limo service in Maryland",
    highlightsHeading: "Book the Transportation, Not Just a Quote",
    intro: [
      "If you've already read up on how to choose a Maryland wedding transportation company, this is the page for actually booking it. 92 Limo Service provides wedding limo service across Maryland — from Eastern Shore estates and Baltimore ballrooms to Annapolis waterfront venues and Western Maryland vineyards — with a limousine-class fleet, vetted professional chauffeurs, and a flat, written quote before you commit.",
      "Most Maryland weddings combine three layers of transportation, and we book each one with the same care: an elegant chauffeured car for the couple — a Mercedes-Benz S-Class or Lincoln Navigator photographs beautifully and handles a gown with the right amount of care; a Mercedes Sprinter Executive, finished with upgraded seating and mood lighting, to keep the wedding party together between getting-ready locations, photos, and the ceremony; and looped guest shuttles between host hotels and the venue when parking is limited or the property sits away from where guests are staying.",
      "Maryland's venues each have quirks worth planning around in advance — gravel or narrow lanes at Eastern Shore estates that stretch limousines handle poorly, tight and permit-sensitive curbs at Baltimore's historic venues, waterfront properties in Annapolis that sometimes require shuttle-only guest arrival, and the general reality that peak Maryland wedding Saturdays (May, June, September, October) sell out the same Sprinter vans that spring prom season is also competing for. Our chauffeurs have driven these venues before and plan the day accordingly.",
      "Every wedding booking is quoted as a flat, written rate — vehicles, hours, fuel, tolls, gratuity policy, and overtime terms, all disclosed before you confirm — so there's nothing left to negotiate on the day itself. We recommend booking six to nine months ahead for peak-season Saturdays, and up to a year ahead for holiday weekends.",
    ],
    sections: [
      {
        heading: "What a Full Wedding Booking Includes",
        paragraphs: [
          "A dedicated chauffeur and vehicle for the couple from getting-ready through the ceremony and reception exit; a Sprinter Executive for the wedding party's photo and ceremony moves; and, for larger guest lists, timed shuttle loops between host hotels and the venue, staggered at the end of the night so early leavers and last dancers both get home comfortably.",
        ],
      },
      {
        heading: "Building the Day-Of Timeline",
        paragraphs: [
          "We work backward from your ceremony start time with your planner and photographer, adding realistic buffers for Maryland Saturday traffic and venue-specific access. The result is a written schedule everyone — the couple, the wedding party, and the venue coordinator — can rely on, not a rough estimate pieced together the morning of.",
        ],
      },
    ],
    highlights: [
      { title: "A Limousine-Class Fleet", desc: "Mercedes-Benz S-Class, Lincoln Navigator, and Sprinter Executive with upgraded seating and lighting." },
      { title: "Maryland Venue Experience", desc: "Chauffeurs who already know Eastern Shore gravel lanes, Baltimore's tight curbs, and Annapolis waterfront access." },
      { title: "Guest Shuttle Planning", desc: "Timed hotel-to-venue loops with staggered returns for larger guest lists." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls, gratuity, and overtime terms disclosed before you confirm — nothing negotiated on the day." },
      { title: "Timeline Built With Your Planner", desc: "A realistic, buffer-included schedule worked backward from your ceremony time." },
      { title: "24/7 Booking & Dispatch", desc: "Early getting-ready pickups and late-night send-offs are both covered." },
    ],
    vehicles: CELEBRATION_TRIO,
    areas: [
      {
        region: "Related Reading",
        places: [
          { label: "How to Vet & Choose a Wedding Limo Company", to: "/blog/wedding-limo-service-maryland" },
          { label: "How Wedding Limo Service Actually Works", to: "/blog/limo-service-for-weddings-maryland" },
          { label: "Explore Our Wedding Transportation Service", to: "/wedding-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "How far in advance should we book Maryland wedding limo service?", a: "Six to nine months for peak-season Saturdays in May, June, September, and October — up to twelve months for holiday weekends, since Sprinter vans also compete with spring prom demand." },
      { q: "What vehicles do most Maryland weddings book?", a: "A chauffeured Mercedes-Benz S-Class or Lincoln Navigator for the couple, a Sprinter Executive for the wedding party, and guest shuttles when hotels or parking sit away from the venue." },
      { q: "Do you know how to handle Eastern Shore or waterfront venues?", a: "Yes — our chauffeurs have experience with gravel-lane estates, Baltimore's permit-sensitive historic curbs, and Annapolis waterfront access restrictions, and plan the vehicle mix accordingly." },
      { q: "What does the quote actually include?", a: "A flat, written quote covering vehicles, hours, fuel, tolls, gratuity policy, and overtime terms — everything disclosed before you confirm, with nothing added on the day." },
      { q: "Can you provide guest shuttles for a large wedding?", a: "Yes — timed loops between host hotels and the venue, staggered at the end of the night so both early leavers and last dancers get home comfortably." },
      { q: "What is the cancellation policy for a wedding booking?", a: "Weddings are special-event bookings: cancel at least 12 hours before the scheduled pickup for no charge." },
    ],
    ctaTitle: "Book Maryland Wedding Limo Service",
    ctaSubtitle: "Tell us your date, venues, and guest count — we'll map the transportation and send a flat, written quote.",
  },
};

export const SEMRUSH_KEYWORD_GAP_SLUGS = Object.keys(SEMRUSH_KEYWORD_GAP_PAGES);
