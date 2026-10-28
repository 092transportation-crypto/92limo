// 2026-10-28 SEO round-8 push, batch 13 — 20 new hand-written landing pages.
// Same shape as MARYLAND_LANDING_PAGES / MARYLAND_BATCH3-12_PAGES (see
// marylandPages.js header). Merged into LANDING_PAGES by src/lib/landingPages.js.
//
// Before drafting, all 444 existing landing-page slugs were enumerated via a
// Node vm-sandbox eval of the real data files — including the ~33 hardcoded
// literal entries inside landingPages.js itself (bwi-airport-limo,
// cruise-transfers, sports-events, the bwi-to-*/dca-to-*/iad-to-* route pages,
// the stadium/venue pages, etc.), NOT just the batch files — per the known bug
// class from round 7 where that literal-entry set was missed by a batch-only
// scan. All 20 slugs below were checked against the full 444-slug set and are
// genuinely new.
//
// Three groups:
// 1. Missing-service-tier pages for cities that already have SOME but not all
//    of corporate/wedding/prom coverage (Hunt Valley prom, Owings Mills
//    wedding + prom, Laurel MD wedding + prom, Potomac corporate + prom).
// 2. Virginia city + service-tier pages — every existing VA city
//    (arlington-va-limo-service, alexandria-va-limo-service, etc.) only has
//    the generic city page; none had a wedding or corporate tier the way MD
//    cities do. Added 5: Arlington wedding, Alexandria wedding, McLean
//    corporate, Reston corporate, Fairfax wedding.
// 3. Niche/venue/seasonal verticals with no existing coverage: Cherry
//    Blossom Festival (DC's biggest seasonal event, no page existed despite
//    Preakness/Renaissance Festival/MD State Fair/Boat Show all being
//    covered), Ripken Stadium/Aberdeen IronBirds (distinct from the
//    Pimlico/Camden Yards/M&T Bank Stadium pages that already exist),
//    Laurel Park Racetrack (distinct from Pimlico — a different, standalone
//    track, fittingly local since Laurel, MD is the company's home base),
//    quinceañera (bar/bat mitzvah already covered, this demographic wasn't),
//    brewery/distillery tours (parallel vertical to the existing wine-tour
//    pages, no overlap), employee shuttle service (recurring B2B vertical,
//    distinct from one-off corporate-car-service intent), Georgetown
//    University and Johns Hopkins University car service (distinct from the
//    existing johns-hopkins-hospital PATIENT-transport page and the existing
//    university-of-maryland-transportation page — different schools,
//    different intent, cross-linked to avoid any overlap).
import { IMAGES } from "@/lib/data";

export const MARYLAND_BATCH13_PAGES = {
  // ------------------------------------------------- MISSING SERVICE TIERS
  "hunt-valley-prom-limo-service": {
    metaTitle: "Hunt Valley Prom Limo Service | 92 Limo",
    metaDescription:
      "Prom limo service in Hunt Valley, MD — background-checked chauffeurs, Sprinter vans for groups, flat rates. Call (877) 609-1919 to book.",
    eyebrow: "HUNT VALLEY, MD · PROM",
    h1: "Hunt Valley Prom Limo Service",
    subtitle: "Safe, professionally chauffeured prom night transportation for Hunt Valley-area students — one flat rate for the whole group.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV for Hunt Valley, MD prom night — 92 Limo Service",
    highlightsHeading: "Why Hunt Valley Parents Choose 92 Limo Service",
    intro: [
      "Hunt Valley prom night usually means a photo stop at one of the area's parks or hotel lawns, dinner along York Road or at Hunt Valley Towne Centre, and the dance itself — three stops that are far easier on one flat-rate vehicle than three separate rides.",
      "A Sprinter van keeps the whole friend group together for the entire night, with a professional chauffeur who stays with them through photos, dinner and the dance rather than a single drop-off.",
      "Parents book us for the accountability: a licensed, insured Maryland company, background-checked chauffeurs, and a confirmed schedule with a direct phone line if plans shift mid-evening.",
      "Hunt Valley sits in one of Baltimore County's busiest spring corporate and event corridors, so the same fleet that handles weekday business travel here also covers prom season — book early once your school's date is set.",
    ],
    highlights: [
      { title: "The Whole Group, One Vehicle", desc: "A Sprinter van keeps friends together for photos, dinner and the dance." },
      { title: "Background-Checked Chauffeurs", desc: "A licensed, insured professional driver, not an unsupervised arrangement." },
      { title: "Parent Peace of Mind", desc: "Confirmed pickup and drop-off schedule, with a direct phone line all night." },
      { title: "Hunt Valley Know-How", desc: "Chauffeurs familiar with York Road, Shawan Road, and the Towne Centre area." },
      { title: "Flat, Transparent Pricing", desc: "One rate for the night, agreed before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325." },
    ],
    vehicles: [
      "Sprinter Shuttle — Mercedes Sprinter",
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Hunt Valley Limo Service", to: "/hunt-valley-limo-service" },
          { label: "Hunt Valley Wedding Limo Service", to: "/hunt-valley-wedding-limo-service" },
          { label: "Hunt Valley Corporate Car Service", to: "/hunt-valley-corporate-car-service" },
          { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
          { label: "Baltimore County, MD Limo Service", to: "/baltimore-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How many students fit in one vehicle?", a: "A Sprinter van comfortably seats a full group together; smaller groups can take a premium SUV. Tell us the group size for a recommendation." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes — every chauffeur is background-checked and professionally trained, with the vehicle and schedule confirmed with parents in advance." },
      { q: "Can the vehicle wait through dinner and a photo stop?", a: "Yes. Prom bookings are hourly and as-directed, so dinner, photos and the dance are all covered by the same vehicle and chauffeur." },
      { q: "How far ahead should we book Hunt Valley prom transportation?", a: "As early as possible — spring weekends are the tightest vehicle-availability window of the year in Baltimore County." },
      { q: "What does Hunt Valley prom transportation cost?", a: "A party-ready vehicle for a five-hour evening typically runs $500-$900 depending on vehicle and date. Call (877) 609-1919 for an exact quote." },
    ],
    ctaTitle: "Book Hunt Valley Prom Transportation",
    ctaSubtitle: "Reserve your date before the spring prom-season rush. Call (877) 609-1919.",
  },

  "owings-mills-wedding-limo-service": {
    metaTitle: "Owings Mills, MD Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Owings Mills, MD — couple's car, wedding-party Sprinter, guest shuttles, flat rates. Call (877) 609-1919.",
    eyebrow: "OWINGS MILLS, MD · WEDDINGS",
    h1: "Owings Mills, MD Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation for Owings Mills venues and nearby estate properties — planned around your ceremony and reception timeline.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for an Owings Mills, MD wedding — 92 Limo Service",
    highlightsHeading: "Why Owings Mills Couples Choose 92 Limo Service",
    intro: [
      "Owings Mills weddings run the gamut from ballroom venues near Foundry Row to private estates farther out toward Reisterstown and Glyndon, and the right transportation plan looks different for each. We build the vehicle plan around your specific venue rather than a one-size-fits-all package.",
      "A chauffeured sedan or SUV typically carries the couple for the day's key arrivals and exits, while a Sprinter van keeps the wedding party together between getting-ready locations, photos and the ceremony — and can also run a guest shuttle loop from a Baltimore County hotel block if your guest list is spread out.",
      "Every quote is flat and written in advance: vehicles, hours, fuel, tolls and gratuity policy spelled out before you book, with no surprise add-ons after the fact.",
      "Peak Owings Mills wedding Saturdays from late spring through fall book out early, so the earlier you confirm a date, the more vehicle options stay available.",
    ],
    highlights: [
      { title: "Venue-Specific Planning", desc: "Vehicles and timing sized to your exact Owings Mills or nearby estate venue." },
      { title: "The Full Wedding-Day Fleet", desc: "Couple's car, wedding-party Sprinter and optional guest shuttles." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "Baltimore County Know-How", desc: "Chauffeurs familiar with Owings Mills, Reisterstown and Glyndon-area roads and venues." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
      { title: "Book Early", desc: "Peak Saturdays from May through October sell out first." },
    ],
    vehicles: [
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Owings Mills Limo Service", to: "/owings-mills-limo-service" },
          { label: "Owings Mills Corporate Car Service", to: "/owings-mills-corporate-car-service" },
          { label: "Owings Mills Prom Limo Service", to: "/owings-mills-prom-limo-service" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
          { label: "Baltimore County, MD Limo Service", to: "/baltimore-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve estate venues near Owings Mills, not just ballrooms?", a: "Yes — we plan vehicle size and timing around private estate driveways and turnaround space the same way we do for any venue." },
      { q: "What vehicles work best for an Owings Mills wedding?", a: "A sedan or SUV for the couple and a Sprinter van for the wedding party is the standard combination; a second Sprinter can run a guest shuttle if needed." },
      { q: "Do you provide guest shuttles from Baltimore County hotels?", a: "Yes — timed loops between a host hotel and the venue, scheduled around your ceremony and reception times." },
      { q: "How far in advance should we book an Owings Mills wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October." },
      { q: "What should an Owings Mills wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms." },
    ],
    ctaTitle: "Book Your Owings Mills Wedding Transportation",
    ctaSubtitle: "Tell us the venue and guest count, and we'll map the vehicles you need. Call (877) 609-1919.",
  },

  "owings-mills-prom-limo-service": {
    metaTitle: "Owings Mills Prom Limo Service | 92 Limo",
    metaDescription:
      "Prom limo service in Owings Mills, MD — background-checked chauffeurs, Sprinter vans for groups, flat rates. Call (877) 609-1919 to book.",
    eyebrow: "OWINGS MILLS, MD · PROM",
    h1: "Owings Mills Prom Limo Service",
    subtitle: "Safe, professionally chauffeured prom night transportation for Owings Mills-area students — one flat rate for the whole group.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV for Owings Mills, MD prom night — 92 Limo Service",
    highlightsHeading: "Why Owings Mills Parents Choose 92 Limo Service",
    intro: [
      "Owings Mills prom night typically means a photo stop near Foundry Row or a park, dinner at one of the area's restaurants, and the dance — all easier on one flat-rate vehicle than juggling separate rides and pickup times.",
      "A Sprinter van keeps the whole friend group together for the entire night, with a professional chauffeur who stays with them through photos, dinner and the dance.",
      "Parents book us for the accountability: a licensed, insured Maryland company, background-checked chauffeurs, and a confirmed schedule with a direct phone line if plans shift.",
      "Spring is Baltimore County's tightest vehicle-availability window of the year — reserve well ahead, since the same fleet also covers nearby weddings and graduations running through the same weeks.",
    ],
    highlights: [
      { title: "The Whole Group, One Vehicle", desc: "A Sprinter van keeps friends together for photos, dinner and the dance." },
      { title: "Background-Checked Chauffeurs", desc: "A licensed, insured professional driver, not an unsupervised arrangement." },
      { title: "Parent Peace of Mind", desc: "Confirmed pickup and drop-off schedule, with a direct phone line all night." },
      { title: "Owings Mills Know-How", desc: "Chauffeurs familiar with Foundry Row, Reisterstown Road and the surrounding area." },
      { title: "Flat, Transparent Pricing", desc: "One rate for the night, agreed before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325." },
    ],
    vehicles: [
      "Sprinter Shuttle — Mercedes Sprinter",
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Owings Mills Limo Service", to: "/owings-mills-limo-service" },
          { label: "Owings Mills Wedding Limo Service", to: "/owings-mills-wedding-limo-service" },
          { label: "Owings Mills Corporate Car Service", to: "/owings-mills-corporate-car-service" },
          { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
          { label: "Hunt Valley Prom Limo Service", to: "/hunt-valley-prom-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How many students fit in one vehicle?", a: "A Sprinter van comfortably seats a full group together; smaller groups can take a premium SUV." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes — every chauffeur is background-checked and professionally trained, with the vehicle and schedule confirmed with parents in advance." },
      { q: "Can the vehicle cover photos, dinner and the dance in one booking?", a: "Yes. Prom bookings are hourly and as-directed, so all three stops are covered by the same vehicle and chauffeur." },
      { q: "How far ahead should we book Owings Mills prom transportation?", a: "As early as possible — spring weekends are the tightest vehicle-availability window of the year." },
      { q: "What does Owings Mills prom transportation cost?", a: "A party-ready vehicle for a five-hour evening typically runs $500-$900 depending on vehicle and date. Call (877) 609-1919 for an exact quote." },
    ],
    ctaTitle: "Book Owings Mills Prom Transportation",
    ctaSubtitle: "Reserve your date before the spring prom-season rush. Call (877) 609-1919.",
  },

  "laurel-md-wedding-limo-service": {
    metaTitle: "Laurel, MD Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Laurel, MD — couple's car, wedding-party Sprinter, guest shuttles, flat rates. Locally based. Call (877) 609-1919.",
    eyebrow: "LAUREL, MD · WEDDINGS",
    h1: "Laurel, MD Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation for Laurel-area venues, from a company based right in Laurel — every vehicle dispatches close to home.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Laurel, MD wedding — 92 Limo Service",
    highlightsHeading: "Why Laurel Couples Choose 92 Limo Service",
    intro: [
      "92 Limo Service is headquartered right in Laurel, Maryland, which means your wedding-day vehicles aren't driving in from across the region — they're dispatching from down the road, with a real margin built into every pickup time.",
      "A chauffeured sedan or SUV typically carries the couple for the day's key arrivals and exits, while a Sprinter van keeps the wedding party together between getting-ready locations, the ceremony and the reception, with capacity for a guest shuttle loop if your celebration spans multiple venues.",
      "Laurel's location between Baltimore and Washington DC makes it a popular, central choice for mixed guest lists — we regularly run routes to venues in both directions and know the realistic drive times each way.",
      "Every quote is flat and written in advance: vehicles, hours, fuel, tolls and gratuity policy spelled out before you book.",
    ],
    highlights: [
      { title: "Locally Based in Laurel", desc: "Our home base is in Laurel — vehicles dispatch close by, with real time margin built in." },
      { title: "The Full Wedding-Day Fleet", desc: "Couple's car, wedding-party Sprinter and optional guest shuttles." },
      { title: "Baltimore-Washington Corridor Know-How", desc: "Realistic drive times to venues in either direction for mixed guest lists." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325, with background-checked, professionally dressed chauffeurs." },
      { title: "Book Early", desc: "Peak Saturdays from May through October sell out first." },
    ],
    vehicles: [
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Laurel, MD Limo Service", to: "/laurel-md-limo-service" },
          { label: "Laurel, MD Corporate Car Service", to: "/laurel-md-corporate-car-service" },
          { label: "Laurel, MD Prom Limo Service", to: "/laurel-md-prom-limo-service" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
          { label: "BWI to Laurel, MD", to: "/bwi-to-laurel-md" },
        ],
      },
    ],
    faqs: [
      { q: "Is 92 Limo Service actually based in Laurel?", a: "Yes — our office is in Laurel, MD, which means wedding-day vehicles dispatch nearby rather than driving in from across the region." },
      { q: "What vehicles work best for a Laurel wedding?", a: "A sedan or SUV for the couple and a Sprinter van for the wedding party is the standard combination; additional vans run guest shuttles for larger lists." },
      { q: "Do you serve venues toward both Baltimore and DC from Laurel?", a: "Yes — Laurel's central location means we regularly run wedding routes in both directions and plan realistic drive times each way." },
      { q: "How far in advance should we book a Laurel wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October." },
      { q: "What should a Laurel wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms." },
    ],
    ctaTitle: "Book Your Laurel, MD Wedding Transportation",
    ctaSubtitle: "Tell us the venue and guest count, and we'll map the vehicles you need. Call (877) 609-1919.",
  },

  "laurel-md-prom-limo-service": {
    metaTitle: "Laurel, MD Prom Limo Service | 92 Limo",
    metaDescription:
      "Prom limo service in Laurel, MD — background-checked chauffeurs, Sprinter vans for groups, flat rates, locally based. Call (877) 609-1919.",
    eyebrow: "LAUREL, MD · PROM",
    h1: "Laurel, MD Prom Limo Service",
    subtitle: "Safe, professionally chauffeured prom night transportation for Laurel-area students, dispatched from our own home base.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV for Laurel, MD prom night — 92 Limo Service",
    highlightsHeading: "Why Laurel Parents Choose 92 Limo Service",
    intro: [
      "Laurel prom night usually means a photo stop at a local park, dinner along Route 1 or in nearby Columbia or Fort Meade, and the dance — three stops that are easier on one flat-rate vehicle than three separate rides.",
      "Because our office is in Laurel, your prom vehicle dispatches from close by rather than crossing the region to reach you, and the chauffeur stays with the group through photos, dinner and the dance.",
      "Parents book us for the accountability: a licensed, insured Maryland company, background-checked chauffeurs, and a confirmed schedule with a direct phone line if plans change mid-evening.",
      "Spring is Laurel's tightest vehicle-availability window of the year — reserve well ahead, since the same fleet also covers nearby weddings and graduations running through the same weeks.",
    ],
    highlights: [
      { title: "Locally Based in Laurel", desc: "Your vehicle dispatches from our own home base, close by." },
      { title: "The Whole Group, One Vehicle", desc: "A Sprinter van keeps friends together for photos, dinner and the dance." },
      { title: "Background-Checked Chauffeurs", desc: "A licensed, insured professional driver, not an unsupervised arrangement." },
      { title: "Parent Peace of Mind", desc: "Confirmed pickup and drop-off schedule, with a direct phone line all night." },
      { title: "Flat, Transparent Pricing", desc: "One rate for the night, agreed before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325." },
    ],
    vehicles: [
      "Sprinter Shuttle — Mercedes Sprinter",
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Laurel, MD Limo Service", to: "/laurel-md-limo-service" },
          { label: "Laurel, MD Wedding Limo Service", to: "/laurel-md-wedding-limo-service" },
          { label: "Laurel, MD Corporate Car Service", to: "/laurel-md-corporate-car-service" },
          { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
          { label: "College Park Limo Service", to: "/college-park-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How many students fit in one vehicle?", a: "A Sprinter van comfortably seats a full group together; smaller groups can take a premium SUV." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes — every chauffeur is background-checked and professionally trained, with the vehicle and schedule confirmed with parents in advance." },
      { q: "Does being based in Laurel make pickup faster?", a: "Generally yes — our vehicles dispatch from our Laurel office rather than driving in from elsewhere in the region." },
      { q: "How far ahead should we book Laurel prom transportation?", a: "As early as possible — spring weekends are the tightest vehicle-availability window of the year." },
      { q: "What does Laurel prom transportation cost?", a: "A party-ready vehicle for a five-hour evening typically runs $500-$900 depending on vehicle and date. Call (877) 609-1919 for an exact quote." },
    ],
    ctaTitle: "Book Laurel, MD Prom Transportation",
    ctaSubtitle: "Reserve your date before the spring prom-season rush. Call (877) 609-1919.",
  },

  "potomac-corporate-car-service": {
    metaTitle: "Potomac, MD Corporate Car Service | 92 Limo",
    metaDescription:
      "Executive & corporate car service in Potomac, MD — airport transfers, roadshows, billing accounts, flat rates. Call (877) 609-1919.",
    eyebrow: "POTOMAC, MD · CORPORATE",
    h1: "Potomac, MD Corporate Car Service",
    subtitle: "Discreet, polished chauffeured transportation for Potomac executives, clients and visiting business travelers.",
    image: IMAGES.corporate,
    alt: "Business executive entering a black luxury SUV in Potomac, MD — 92 Limo Service",
    highlightsHeading: "Why Potomac Businesses Choose 92 Limo Service",
    intro: [
      "Potomac is home to a concentration of executives, consultants, and private company leadership who expect transportation to match the standard set everywhere else in their day — on time, discreet, and without the uncertainty of a different rideshare driver each trip.",
      "We provide point-to-point airport transfers to BWI, DCA and IAD, hourly as-directed service for a day of meetings or client entertaining, and standing corporate accounts with consolidated monthly billing for companies and households that book regularly.",
      "Chauffeurs are vetted, professionally dressed, and trained in discretion — conversations and destinations stay private, a baseline expectation for executive clients and the households and family offices we also regularly serve in Potomac.",
      "Every quote is flat and transparent, with gratuity, tolls and any other applicable charges disclosed before confirmation — no metering, no surge pricing.",
    ],
    highlights: [
      { title: "Executive Chauffeurs", desc: "Vetted, professional drivers presented in business attire, trained in discretion." },
      { title: "BWI, DCA & IAD Transfers", desc: "Flight-tracked airport transportation to and from all three regional airports." },
      { title: "Corporate Billing", desc: "Centralized invoicing, receipts, and account management for standing clients." },
      { title: "Hourly As-Directed Service", desc: "One chauffeur and vehicle for a full day of meetings, stops or client entertaining." },
      { title: "Confidential & Secure", desc: "Privacy glass and a strict discretion policy for sensitive travel." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "Potomac Limo Service", to: "/potomac-limo-service" },
          { label: "Potomac Prom Limo Service", to: "/potomac-prom-limo-service" },
          { label: "Potomac Wedding Limo Service", to: "/potomac-wedding-limo-service" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "Montgomery County, MD Limo Service", to: "/montgomery-county-md-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you set up corporate accounts for Potomac businesses and households?", a: "Yes — negotiated rates, priority dispatch and one consolidated monthly invoice. Email info@92limo.com to set one up." },
      { q: "Can you handle a client's airport arrival with a name sign?", a: "Yes — flight-tracked pickups with optional meet & greet at baggage claim are a routine booking." },
      { q: "Do you provide hourly service for a full business day?", a: "Yes. One vehicle and chauffeur stay with you for the hours you book, moving between meetings and stops on your schedule." },
      { q: "How discreet is the service?", a: "Discretion is a working standard — conversations and destinations stay private, shared only with the people who booked." },
      { q: "Can you provide a certificate of insurance for vendor paperwork?", a: "Yes. Certificates of insurance and vendor onboarding documents are available on request." },
    ],
    ctaTitle: "Set Up Potomac Corporate Car Service",
    ctaSubtitle: "Start a corporate account or book a single trip. Call (877) 609-1919.",
  },

  "potomac-prom-limo-service": {
    metaTitle: "Potomac Prom Limo Service | 92 Limo",
    metaDescription:
      "Prom limo service in Potomac, MD — background-checked chauffeurs, Sprinter vans for groups, flat rates. Call (877) 609-1919 to book.",
    eyebrow: "POTOMAC, MD · PROM",
    h1: "Potomac Prom Limo Service",
    subtitle: "Safe, professionally chauffeured prom night transportation for Potomac-area students — one flat rate for the whole group.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV for Potomac, MD prom night — 92 Limo Service",
    highlightsHeading: "Why Potomac Parents Choose 92 Limo Service",
    intro: [
      "Potomac prom night usually means a photo stop at a park or a family's backyard, dinner in Bethesda or Rockville, and the dance itself — a route that benefits from a chauffeur who knows the area's winding, wooded roads and realistic drive times.",
      "A Sprinter van keeps the whole friend group together for the entire night, with a professional chauffeur who stays with them through photos, dinner and the dance rather than a single drop-off.",
      "Parents book us for the accountability: a licensed, insured Maryland company, background-checked chauffeurs, and a confirmed schedule with a direct phone line if an after-party or timing change comes up.",
      "Spring is Montgomery County's tightest vehicle-availability window of the year — reserve well ahead, since the same fleet also covers nearby Potomac weddings running through the same calendar weeks.",
    ],
    highlights: [
      { title: "The Whole Group, One Vehicle", desc: "A Sprinter van keeps friends together for photos, dinner and the dance." },
      { title: "Background-Checked Chauffeurs", desc: "A licensed, insured professional driver, not an unsupervised arrangement." },
      { title: "Potomac Road Know-How", desc: "Chauffeurs familiar with the area's wooded, winding roads and realistic drive times." },
      { title: "Parent Peace of Mind", desc: "Confirmed pickup and drop-off schedule, with a direct phone line all night." },
      { title: "Flat, Transparent Pricing", desc: "One rate for the night, agreed before you book." },
      { title: "Licensed & Insured", desc: "Maryland PSC Carrier No. 6325." },
    ],
    vehicles: [
      "Sprinter Shuttle — Mercedes Sprinter",
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Potomac Limo Service", to: "/potomac-limo-service" },
          { label: "Potomac Corporate Car Service", to: "/potomac-corporate-car-service" },
          { label: "Potomac Wedding Limo Service", to: "/potomac-wedding-limo-service" },
          { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
          { label: "North Potomac Limo Service", to: "/north-potomac-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How many students fit in one vehicle?", a: "A Sprinter van comfortably seats a full group together; smaller groups can take a premium SUV." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes — every chauffeur is background-checked and professionally trained, with the vehicle and schedule confirmed with parents in advance." },
      { q: "Can you handle a private-driveway pickup?", a: "Yes — our chauffeurs are experienced with Potomac's private, winding roads and limited turnaround space." },
      { q: "How far ahead should we book Potomac prom transportation?", a: "As early as possible — spring weekends are the tightest vehicle-availability window of the year." },
      { q: "What does Potomac prom transportation cost?", a: "A party-ready vehicle for a five-hour evening typically runs $500-$900 depending on vehicle and date. Call (877) 609-1919 for an exact quote." },
    ],
    ctaTitle: "Book Potomac Prom Transportation",
    ctaSubtitle: "Reserve your date before the spring prom-season rush. Call (877) 609-1919.",
  },

  // ------------------------------------------------- VIRGINIA SERVICE TIERS
  "arlington-va-wedding-limo-service": {
    metaTitle: "Arlington, VA Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Arlington, VA — couple's car, wedding-party Sprinter, guest shuttles across DC. Call (877) 609-1919.",
    eyebrow: "ARLINGTON, VA · WEDDINGS",
    h1: "Arlington, VA Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation for Arlington venues and across the Potomac into Washington DC — planned to your exact timeline.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for an Arlington, VA wedding — 92 Limo Service",
    highlightsHeading: "Why Arlington Couples Choose 92 Limo Service",
    intro: [
      "Arlington weddings frequently cross the Potomac for photos at the monuments or a reception in downtown DC, which means the transportation plan has to account for bridge traffic and federal-city parking restrictions — not just a straight point-to-point route.",
      "A chauffeured sedan or SUV typically carries the couple for the day's key arrivals and exits, while a Sprinter van keeps the wedding party together between getting-ready locations, photo stops, and the ceremony or reception, wherever in Arlington or DC it lands.",
      "Our chauffeurs plan around Rosslyn, Clarendon, Crystal City and Pentagon City traffic patterns and know the realistic timing for a DC monuments photo stop before a reception back in Arlington.",
      "Every quote is flat and written in advance: vehicles, hours, fuel, tolls and gratuity policy spelled out before you book.",
    ],
    highlights: [
      { title: "Arlington-to-DC Experience", desc: "Chauffeurs who plan around bridge traffic and federal-city parking for cross-river weddings." },
      { title: "The Full Wedding-Day Fleet", desc: "Couple's car, wedding-party Sprinter and optional guest shuttles." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "Neighborhood Know-How", desc: "Experience with Rosslyn, Clarendon, Crystal City and Pentagon City venues." },
      { title: "Licensed & Insured", desc: "Commercially insured vehicles with background-checked, professionally dressed chauffeurs." },
      { title: "Book Early", desc: "Peak Saturdays from May through October sell out first." },
    ],
    vehicles: [
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Arlington, VA Limo Service", to: "/arlington-va-limo-service" },
          { label: "Alexandria, VA Wedding Limo Service", to: "/alexandria-va-wedding-limo-service" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Wedding Limo & Chauffeur Service", to: "/wedding-transportation" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you handle a wedding that crosses between Arlington and DC?", a: "Yes — this is a routine route for us. Chauffeurs plan around bridge traffic and DC parking restrictions for photo stops at the monuments or a downtown reception." },
      { q: "What vehicles work best for an Arlington wedding?", a: "A sedan or SUV for the couple and a Sprinter van for the wedding party is the standard combination." },
      { q: "Do you provide guest shuttles from Arlington hotels?", a: "Yes — timed loops between a host hotel and the venue, scheduled around your ceremony and reception times." },
      { q: "How far in advance should we book an Arlington wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October." },
      { q: "What should an Arlington wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms." },
    ],
    ctaTitle: "Book Your Arlington, VA Wedding Transportation",
    ctaSubtitle: "Tell us the venue and guest count, and we'll map the vehicles you need. Call (877) 609-1919.",
  },

  "alexandria-va-wedding-limo-service": {
    metaTitle: "Alexandria, VA Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Alexandria, VA — couple's car, wedding-party Sprinter, Old Town-ready chauffeurs. Call (877) 609-1919.",
    eyebrow: "ALEXANDRIA, VA · WEDDINGS",
    h1: "Alexandria, VA Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation for Old Town Alexandria and the surrounding area — planned around cobblestone streets and limited venue parking.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for an Alexandria, VA wedding — 92 Limo Service",
    highlightsHeading: "Why Alexandria Couples Choose 92 Limo Service",
    intro: [
      "Old Town Alexandria's cobblestone streets, historic district parking restrictions, and waterfront venues make wedding-day logistics trickier than a standard suburban venue — our chauffeurs know exactly where a Sprinter van can stage and where a sedan is the better choice.",
      "A chauffeured sedan or SUV typically carries the couple for the day's key arrivals and exits, while a Sprinter van keeps the wedding party together between getting-ready locations, the ceremony, and a reception at one of Alexandria's waterfront or historic venues.",
      "Guest shuttles are a popular add-on for Alexandria weddings, looping between a hotel block near King Street and the venue so out-of-town guests never have to navigate historic-district parking themselves.",
      "Every quote is flat and written in advance: vehicles, hours, fuel, tolls and gratuity policy spelled out before you book.",
    ],
    highlights: [
      { title: "Old Town Know-How", desc: "Chauffeurs familiar with cobblestone streets, historic-district parking, and waterfront venues." },
      { title: "The Full Wedding-Day Fleet", desc: "Couple's car, wedding-party Sprinter and optional guest shuttles." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "King Street Hotel Shuttles", desc: "Guest-shuttle loops between a hotel block and the venue." },
      { title: "Licensed & Insured", desc: "Commercially insured vehicles with background-checked, professionally dressed chauffeurs." },
      { title: "Book Early", desc: "Peak Saturdays from May through October sell out first." },
    ],
    vehicles: [
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Alexandria, VA Limo Service", to: "/alexandria-va-limo-service" },
          { label: "Arlington, VA Wedding Limo Service", to: "/arlington-va-wedding-limo-service" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Wedding Limo & Chauffeur Service", to: "/wedding-transportation" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can a Sprinter van navigate Old Town Alexandria's cobblestone streets?", a: "Yes — our chauffeurs know where a Sprinter van can realistically stage and park in the historic district, and when a sedan is the better call for a tight street." },
      { q: "What vehicles work best for an Alexandria wedding?", a: "A sedan or SUV for the couple and a Sprinter van for the wedding party is the standard combination." },
      { q: "Do you provide guest shuttles from King Street hotels?", a: "Yes — timed loops between a King Street-area hotel block and the venue, scheduled around your ceremony and reception." },
      { q: "How far in advance should we book an Alexandria wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October." },
      { q: "What should an Alexandria wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms." },
    ],
    ctaTitle: "Book Your Alexandria, VA Wedding Transportation",
    ctaSubtitle: "Tell us the venue and guest count, and we'll map the vehicles you need. Call (877) 609-1919.",
  },

  "mclean-va-corporate-car-service": {
    metaTitle: "McLean, VA Corporate Car Service | 92 Limo",
    metaDescription:
      "Executive car service in McLean, VA — airport transfers, client meetings, billing accounts, discreet chauffeurs. Call (877) 609-1919.",
    eyebrow: "MCLEAN, VA · CORPORATE",
    h1: "McLean, VA Corporate Car Service",
    subtitle: "Discreet, polished chauffeured transportation for McLean executives, government contractors and visiting clients.",
    image: IMAGES.corporate,
    alt: "Business executive entering a black luxury SUV in McLean, VA — 92 Limo Service",
    highlightsHeading: "Why McLean Businesses Choose 92 Limo Service",
    intro: [
      "McLean's concentration of government contractors, consultancies, and corporate headquarters near Tysons means transportation expectations run high — punctual, discreet, and consistent, trip after trip.",
      "We provide point-to-point airport transfers to IAD, DCA and BWI, hourly as-directed service for a day of meetings or client entertaining, and standing corporate accounts with consolidated monthly billing for companies that book regularly.",
      "Chauffeurs are vetted, professionally dressed, and trained in discretion, which matters in particular for McLean's government and defense-adjacent client base, where confidentiality is a baseline expectation rather than a special request.",
      "Every quote is flat and transparent, with gratuity, tolls and any other applicable charges disclosed before confirmation — no metering, no surge pricing.",
    ],
    highlights: [
      { title: "Executive Chauffeurs", desc: "Vetted, professional drivers presented in business attire, trained in discretion." },
      { title: "IAD, DCA & BWI Transfers", desc: "Flight-tracked airport transportation to and from all three regional airports." },
      { title: "Corporate Billing", desc: "Centralized invoicing, receipts, and account management for standing clients." },
      { title: "Government & Defense Experience", desc: "Familiarity with facility-access procedures common to McLean's contractor base." },
      { title: "Confidential & Secure", desc: "Privacy glass and a strict discretion policy for sensitive travel." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "McLean, VA Limo Service", to: "/mclean-va-limo-service" },
          { label: "Reston, VA Corporate Car Service", to: "/reston-va-corporate-car-service" },
          { label: "Tysons Corner Limo Service", to: "/tysons-corner-limo-service" },
          { label: "Corporate Car Service — Tysons Corner, VA", to: "/corporate-car-service-tysons-corner-va" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "Do you set up corporate accounts for McLean businesses?", a: "Yes — negotiated rates, priority dispatch and one consolidated monthly invoice. Email info@92limo.com to set one up." },
      { q: "Can you provide a certificate of insurance for vendor or facility onboarding?", a: "Yes. Certificates of insurance and vendor onboarding documents are available on request." },
      { q: "Do you handle visiting delegations arriving at IAD?", a: "Yes — flight-tracked pickups with optional meet & greet, including staggered pickups for a group arriving across several flights." },
      { q: "How discreet is the service?", a: "Discretion is a working standard — conversations and destinations stay private, shared only with the people who booked." },
      { q: "Do you provide hourly service for a full business day?", a: "Yes. One vehicle and chauffeur stay with you for the hours you book, moving between meetings and stops on your schedule." },
    ],
    ctaTitle: "Set Up McLean Corporate Car Service",
    ctaSubtitle: "Start a corporate account or book a single trip. Call (877) 609-1919.",
  },

  "reston-va-corporate-car-service": {
    metaTitle: "Reston, VA Corporate Car Service | 92 Limo",
    metaDescription:
      "Executive car service in Reston, VA — airport transfers, client meetings, billing accounts, discreet chauffeurs. Call (877) 609-1919.",
    eyebrow: "RESTON, VA · CORPORATE",
    h1: "Reston, VA Corporate Car Service",
    subtitle: "Discreet, polished chauffeured transportation for Reston Town Center executives, tech companies and visiting clients.",
    image: IMAGES.corporate,
    alt: "Business executive entering a black luxury SUV in Reston, VA — 92 Limo Service",
    highlightsHeading: "Why Reston Businesses Choose 92 Limo Service",
    intro: [
      "Reston's Town Center corridor is home to a dense cluster of technology companies and corporate offices, many with employees and clients flying through Dulles on a regular cadence — a routine we're built around.",
      "We provide point-to-point airport transfers to IAD, DCA and BWI, hourly as-directed service for a day of meetings or client entertaining, and standing corporate accounts with consolidated monthly billing for companies that book regularly.",
      "Because Dulles is just minutes from Reston, we're frequently the first and last leg of a business trip for Reston-based teams — flight-tracked pickups so a delay never costs a traveler a connection or a meeting.",
      "Every quote is flat and transparent, with gratuity, tolls and any other applicable charges disclosed before confirmation — no metering, no surge pricing.",
    ],
    highlights: [
      { title: "Executive Chauffeurs", desc: "Vetted, professional drivers presented in business attire, trained in discretion." },
      { title: "Minutes from Dulles (IAD)", desc: "Fast, flight-tracked transfers for Reston's frequent Dulles-based business travel." },
      { title: "Corporate Billing", desc: "Centralized invoicing, receipts, and account management for standing clients." },
      { title: "Tech-Industry Familiarity", desc: "Experience with Reston Town Center's technology and corporate office base." },
      { title: "Confidential & Secure", desc: "Privacy glass and a strict discretion policy for sensitive travel." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "Reston, VA Limo Service", to: "/reston-va-limo-service" },
          { label: "McLean, VA Corporate Car Service", to: "/mclean-va-corporate-car-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "IAD to Reston", to: "/iad-to-reston" },
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
        ],
      },
    ],
    faqs: [
      { q: "Do you set up corporate accounts for Reston businesses?", a: "Yes — negotiated rates, priority dispatch and one consolidated monthly invoice. Email info@92limo.com to set one up." },
      { q: "How quickly can you get a traveler to Dulles from Reston?", a: "Reston is minutes from IAD — we build a comfortable, traffic-aware buffer into every pickup rather than cutting it close." },
      { q: "Can you handle a visiting delegation or client group?", a: "Yes — staggered pickups for a group arriving on different flights are routinely coordinated as one reservation." },
      { q: "How discreet is the service?", a: "Discretion is a working standard — conversations and destinations stay private, shared only with the people who booked." },
      { q: "Do you provide hourly service for a full business day?", a: "Yes. One vehicle and chauffeur stay with you for the hours you book, moving between meetings and stops on your schedule." },
    ],
    ctaTitle: "Set Up Reston Corporate Car Service",
    ctaSubtitle: "Start a corporate account or book a single trip. Call (877) 609-1919.",
  },

  "fairfax-va-wedding-limo-service": {
    metaTitle: "Fairfax, VA Wedding Limo Service | 92 Limo",
    metaDescription:
      "Wedding transportation in Fairfax, VA — couple's car, wedding-party Sprinter, guest shuttles, flat rates. Call (877) 609-1919.",
    eyebrow: "FAIRFAX, VA · WEDDINGS",
    h1: "Fairfax, VA Wedding Limo Service",
    subtitle: "Chauffeured wedding transportation for Fairfax venues and Northern Virginia's wider wedding corridor — planned to your exact timeline.",
    image: IMAGES.wedding,
    alt: "Luxury chauffeured vehicle for a Fairfax, VA wedding — 92 Limo Service",
    highlightsHeading: "Why Fairfax Couples Choose 92 Limo Service",
    intro: [
      "Fairfax weddings range from historic Old Town Fairfax venues to George Mason University-area event spaces and private estates farther into the county — each with its own access and parking considerations.",
      "A chauffeured sedan or SUV typically carries the couple for the day's key arrivals and exits, while a Sprinter van keeps the wedding party together between getting-ready locations, photos and the ceremony, with capacity for a guest shuttle loop if your celebration spans a hotel block and a separate venue.",
      "Our chauffeurs know Fairfax County's main arteries — Route 50, Route 29, and the Fairfax County Parkway — well enough to build realistic timing into the day, not a generic estimate.",
      "Every quote is flat and written in advance: vehicles, hours, fuel, tolls and gratuity policy spelled out before you book.",
    ],
    highlights: [
      { title: "Fairfax County Know-How", desc: "Chauffeurs who know the county's main arteries and realistic drive times between venues." },
      { title: "The Full Wedding-Day Fleet", desc: "Couple's car, wedding-party Sprinter and optional guest shuttles." },
      { title: "Flat, Written Quotes", desc: "Vehicles, hours, fuel, tolls and gratuity policy spelled out before you book." },
      { title: "Old Town & Estate Experience", desc: "Comfortable with both historic Old Town Fairfax venues and private estate properties." },
      { title: "Licensed & Insured", desc: "Commercially insured vehicles with background-checked, professionally dressed chauffeurs." },
      { title: "Book Early", desc: "Peak Saturdays from May through October sell out first." },
    ],
    vehicles: [
      "Premium SUV — Cadillac Escalade",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Fairfax, VA Limo Service", to: "/fairfax-va-limo-service" },
          { label: "Arlington, VA Wedding Limo Service", to: "/arlington-va-wedding-limo-service" },
          { label: "Chantilly, VA Limo Service", to: "/chantilly-va-limo-service" },
          { label: "Wedding Limo & Chauffeur Service", to: "/wedding-transportation" },
          { label: "Maryland Wedding Limo Service", to: "/maryland-wedding-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve both Old Town Fairfax venues and private estates?", a: "Yes — we plan vehicle size and timing around each venue type, whether it's a historic downtown address or a private property with a long driveway." },
      { q: "What vehicles work best for a Fairfax wedding?", a: "A sedan or SUV for the couple and a Sprinter van for the wedding party is the standard combination; additional vans run guest shuttles for larger lists." },
      { q: "Do you provide guest shuttles from Fairfax hotels?", a: "Yes — timed loops between a host hotel and the venue, scheduled around your ceremony and reception times." },
      { q: "How far in advance should we book a Fairfax wedding?", a: "Six to nine months for peak-season Saturdays in May, June, September and October." },
      { q: "What should a Fairfax wedding transportation quote include?", a: "Everything, in writing: vehicles, hours, fuel, tolls, gratuity policy and overtime terms." },
    ],
    ctaTitle: "Book Your Fairfax, VA Wedding Transportation",
    ctaSubtitle: "Tell us the venue and guest count, and we'll map the vehicles you need. Call (877) 609-1919.",
  },

  // ------------------------------------------------- NICHE, VENUE & SEASONAL
  "national-cherry-blossom-festival-transportation-dc": {
    metaTitle: "Cherry Blossom Festival Transportation DC | 92 Limo",
    metaDescription:
      "Chauffeured transportation for the National Cherry Blossom Festival in DC — skip the parking and road closures. Call (877) 609-1919.",
    eyebrow: "NATIONAL CHERRY BLOSSOM FESTIVAL",
    h1: "National Cherry Blossom Festival Transportation",
    subtitle: "Skip the road closures and impossible parking around the Tidal Basin — arrive for peak bloom in a chauffeured, climate-controlled vehicle.",
    image: IMAGES.dcSkyline,
    alt: "Luxury black car near the Tidal Basin during the National Cherry Blossom Festival in Washington DC — 92 Limo Service",
    highlightsHeading: "Why Festival Visitors Choose 92 Limo Service",
    intro: [
      "The National Cherry Blossom Festival draws over a million visitors to the Tidal Basin over several weeks each spring, and the District responds with extensive road closures, parking bans, and gridlock around the Jefferson Memorial and West Potomac Park during peak bloom. A chauffeured drop-off removes the entire problem — your driver knows which streets are open on a given festival day and gets you as close to the action as the closures allow.",
      "We regularly handle festival-week bookings for out-of-town visitors staying in Maryland or Virginia who want a relaxed, chauffeured day trip into DC rather than wrestling with Metro crowds or festival-season rideshare surge pricing, as well as locals who would rather not search for parking near some of the most restricted blocks in the city.",
      "Peak bloom dates shift year to year with the weather, and festival organizers often announce them only days in advance — we track the forecast and festival updates alongside your flight or schedule, the same way we track flights for airport pickups, so your booking can flex if the date moves.",
      "Beyond the Tidal Basin, many visitors combine the festival with a broader DC day — the Smithsonian museums, a monuments tour, or dinner in Georgetown — all covered under the same hourly, as-directed booking.",
    ],
    highlights: [
      { title: "Beats the Road Closures", desc: "Chauffeurs track festival-week street closures and get you as close as access allows." },
      { title: "No Festival-Season Parking Search", desc: "Skip the hunt for parking near some of the most restricted blocks in DC." },
      { title: "Flexible for Peak Bloom Timing", desc: "We track forecasts and festival updates, since peak bloom shifts year to year." },
      { title: "Combine With a Full DC Day", desc: "Hourly, as-directed service covers the Tidal Basin, the Smithsonian, and dinner in one booking." },
      { title: "Comfortable Group Travel", desc: "Sprinter vans keep families and groups together instead of splitting across rideshares." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation — no festival-week surge pricing." },
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
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
          { label: "Maryland Renaissance Festival Transportation", to: "/maryland-renaissance-festival-transportation" },
          { label: "Embassy & Diplomatic Car Service — Washington, DC", to: "/embassy-diplomatic-car-service-washington-dc" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
        ],
      },
    ],
    faqs: [
      { q: "Can you get close to the Tidal Basin during festival road closures?", a: "Yes — our chauffeurs track the festival's published street closures and get you as close as access allows that day." },
      { q: "Do you know when peak bloom will be?", a: "We track the National Park Service forecast and festival updates and can flex your booking if the predicted date shifts." },
      { q: "Can we combine the festival with other DC sightseeing?", a: "Yes — hourly, as-directed service is popular for a full festival-week day covering the Tidal Basin, the Smithsonian, and dinner." },
      { q: "Is pricing higher during the festival?", a: "No. We quote the same flat, transparent rate year-round, with no festival-season surge pricing." },
      { q: "Can you handle a family or larger group?", a: "Yes — Sprinter vans and SUVs keep families and groups together for the day, with room for strollers and gear." },
    ],
    ctaTitle: "Book Cherry Blossom Festival Transportation",
    ctaSubtitle: "Reserve your chauffeur for peak bloom before festival-week dates fill up. Call (877) 609-1919.",
  },

  "ripken-stadium-aberdeen-ironbirds-transportation": {
    metaTitle: "Ripken Stadium / Aberdeen IronBirds Car Service | 92 Limo",
    metaDescription:
      "Chauffeured game-day transportation to Ripken Stadium for Aberdeen IronBirds games — no parking, safe ride home. Call (877) 609-1919.",
    eyebrow: "RIPKEN STADIUM · ABERDEEN IRONBIRDS",
    h1: "Ripken Stadium & Aberdeen IronBirds Transportation",
    subtitle: "Chauffeured game-day transportation to Ripken Stadium in Aberdeen — drop off at the gate and skip the lot entirely.",
    image: IMAGES.suv,
    alt: "Black luxury SUV providing game-day transportation to Ripken Stadium in Aberdeen, MD",
    highlightsHeading: "Why Fans Choose 92 Limo Service for IronBirds Games",
    intro: [
      "Ripken Stadium in Aberdeen, Maryland is home to the Aberdeen IronBirds and the Cal Ripken, Sr. Youth Baseball Complex — a different venue entirely from Camden Yards and M&T Bank Stadium downtown, and one that draws plenty of families from across Harford County and beyond for a relaxed minor-league night out.",
      "92 Limo Service provides chauffeured transportation to Ripken Stadium for IronBirds games, youth tournaments at the adjoining complex, and special stadium events — we pick you up at home, a hotel, or the office and drop you right at the gate, no parking lot to navigate on the way in or out.",
      "Families traveling for a youth tournament weekend often book us for the full visit rather than a single game — hotel-to-complex shuttles across multiple tournament days, with the same familiar chauffeur each trip.",
      "For evening games with a post-game crowd, having a chauffeur waiting means no walking through a dark parking lot and no surge-priced rideshare — just a comfortable, pre-arranged ride home.",
    ],
    highlights: [
      { title: "Drop-Off at the Gate", desc: "Arrive right at Ripken Stadium — no parking lots, no long walks." },
      { title: "Youth Tournament Shuttles", desc: "Multi-day hotel-to-complex transportation for families at the Cal Ripken, Sr. Youth Baseball Complex." },
      { title: "Safe Rides Home", desc: "Enjoy the game — your chauffeur handles the evening drive home." },
      { title: "Group & Family Travel", desc: "SUVs and Sprinter vans keep families and groups together, with room for gear." },
      { title: "Harford County Know-How", desc: "Chauffeurs familiar with Aberdeen and the surrounding Harford County area." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "Aberdeen Limo Service", to: "/aberdeen-limo-service" },
          { label: "Oriole Park at Camden Yards Transportation", to: "/oriole-park-camden-yards-transportation" },
          { label: "M&T Bank Stadium Transportation", to: "/mt-bank-stadium-transportation" },
          { label: "Harford County Limo Service", to: "/aberdeen-limo-service" },
          { label: "Sports & Events", to: "/sports-events" },
        ],
      },
    ],
    faqs: [
      { q: "Is Ripken Stadium the same as Camden Yards?", a: "No — Ripken Stadium in Aberdeen, MD is a separate venue, home to the Aberdeen IronBirds and the Cal Ripken, Sr. Youth Baseball Complex. We also provide dedicated service to Camden Yards for Orioles games." },
      { q: "Can you shuttle a youth team between a hotel and the complex over a tournament weekend?", a: "Yes — this is a common booking. We can run the same loop across multiple tournament days with a familiar chauffeur." },
      { q: "Can you drop us right at the stadium gate?", a: "Yes — we time the drop-off for the gate, avoiding the parking lot entirely." },
      { q: "How does pickup work after an evening game?", a: "We coordinate a specific pickup location and time and stage your vehicle nearby so you're not waiting in a dark lot." },
      { q: "Can you handle a large family or group?", a: "Yes — SUVs and Sprinter vans keep groups together with room for gear and equipment." },
    ],
    ctaTitle: "Book Ripken Stadium Transportation",
    ctaSubtitle: "Reserve your ride to the next IronBirds game or youth tournament. Call (877) 609-1919.",
  },

  "laurel-park-racetrack-transportation": {
    metaTitle: "Laurel Park Racetrack Car Service | 92 Limo",
    metaDescription:
      "Chauffeured transportation to Laurel Park Racetrack in Laurel, MD — thoroughbred racing, no parking hassle. Call (877) 609-1919.",
    eyebrow: "LAUREL PARK RACETRACK",
    h1: "Laurel Park Racetrack Transportation",
    subtitle: "Chauffeured transportation to Laurel Park Racetrack, Maryland's year-round thoroughbred track — right in our own home town.",
    image: IMAGES.suv,
    alt: "Black luxury SUV providing transportation to Laurel Park Racetrack in Laurel, MD",
    highlightsHeading: "Why Racegoers Choose 92 Limo Service",
    intro: [
      "Laurel Park Racetrack is a standalone thoroughbred racing venue in Laurel, Maryland — distinct from Pimlico Race Course in Baltimore, home of the Preakness Stakes, which we also serve. Laurel Park runs live racing and simulcast wagering through much of the year, drawing a steady local and regional crowd rather than a single marquee event day.",
      "Because 92 Limo Service is headquartered in Laurel, this is one of our most local bookings — your chauffeur dispatches from just down the road, which means tighter, more dependable pickup windows than a company driving in from across the region.",
      "Racing groups and corporate outings book us for a relaxed day at the track without anyone needing to drive, drink responsibly, or deal with the track's parking lots — we handle the whole loop, drop-off through pickup.",
      "We also run the same trip for simulcast and off-track betting visits, and for groups combining a Laurel Park outing with dinner elsewhere in the Baltimore-Washington corridor the same day.",
    ],
    highlights: [
      { title: "Locally Based in Laurel", desc: "Our home base is right in Laurel — vehicles dispatch close by, with dependable pickup windows." },
      { title: "A Different Track Than Pimlico", desc: "Laurel Park is a separate, standalone venue from Pimlico Race Course and the Preakness." },
      { title: "No Parking Lot Hassle", desc: "Drop-off and pickup handled directly, without navigating track parking." },
      { title: "Group & Corporate Outings", desc: "SUVs and Sprinter vans keep racing groups together for the day." },
      { title: "Safe Rides Home", desc: "A relaxed day at the track without anyone needing to drive." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "Laurel, MD Limo Service", to: "/laurel-md-limo-service" },
          { label: "Preakness Stakes Transportation", to: "/preakness-stakes-transportation" },
          { label: "Pimlico Race Course Transportation", to: "/pimlico-race-course-transportation" },
          { label: "Live! Casino & Hotel Maryland Transportation", to: "/live-casino-hotel-maryland-transportation" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
        ],
      },
    ],
    faqs: [
      { q: "Is Laurel Park Racetrack the same as Pimlico?", a: "No — Laurel Park is a separate, standalone thoroughbred track in Laurel, MD. Pimlico Race Course in Baltimore, home of the Preakness Stakes, is a different venue that we also serve." },
      { q: "Is 92 Limo Service really based in Laurel?", a: "Yes — our office is in Laurel, MD, which means Laurel Park bookings are among our most local, with dependable, close-by dispatch." },
      { q: "Can you handle a corporate or group outing to the track?", a: "Yes — SUVs and Sprinter vans keep racing groups and corporate outings together for the day." },
      { q: "Can you combine a Laurel Park visit with dinner elsewhere?", a: "Yes — hourly, as-directed service covers the track and a dinner stop in the same booking." },
      { q: "What does the price include?", a: "A flat, transparent quote covering the base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation." },
    ],
    ctaTitle: "Book Laurel Park Racetrack Transportation",
    ctaSubtitle: "Reserve your ride for race day — locally based in Laurel. Call (877) 609-1919.",
  },

  "quinceanera-limo-service-maryland": {
    metaTitle: "Quinceañera Limo Service Maryland | 92 Limo",
    metaDescription:
      "Elegant quinceañera limo & party-bus service across Maryland, DC & VA — Sprinter vans for the whole court. Call (877) 609-1919.",
    eyebrow: "QUINCEAÑERA TRANSPORTATION",
    h1: "Quinceañera Limo Service — Maryland",
    subtitle: "Elegant, reliable chauffeured transportation for the quinceañera's court of honor and family across Maryland, DC and Virginia.",
    image: IMAGES.celebration,
    alt: "Luxury chauffeured SUV for a quinceañera celebration in Maryland — 92 Limo Service",
    highlightsHeading: "Why Families Choose 92 Limo Service for Quinceañeras",
    intro: [
      "A quinceañera is built around a sequence of meaningful arrivals — the Mass or church ceremony, portraits, and the grand entrance at the reception hall — and the transportation should match the formality of the day without becoming one more thing for the family to coordinate.",
      "A luxury sedan or SUV is a popular choice for the quinceañera's own arrival, while a Mercedes Sprinter van keeps the full court of honor — the damas and chambelanes — together for photos and the ride between the ceremony and the reception.",
      "We work with the family or event planner to build the timeline around the church, the photographer's schedule, and the reception hall's entrance choreography, so the vehicle is exactly where it needs to be for each moment.",
      "Every quote is flat and transparent, covering the base transportation charge, with gratuity, tolls and any other applicable charges disclosed before confirmation.",
    ],
    highlights: [
      { title: "Elegant Arrival Vehicles", desc: "A luxury sedan or SUV for the quinceañera's own grand entrance." },
      { title: "The Full Court of Honor", desc: "A Sprinter van keeps the damas and chambelanes together for photos and the reception." },
      { title: "Timeline Coordination", desc: "We plan pickups around the ceremony, portraits, and the reception entrance." },
      { title: "Bilingual-Friendly Booking", desc: "Our team is glad to confirm details by phone in English or with a Spanish-speaking family member." },
      { title: "Photo-Ready Vehicles", desc: "Immaculately detailed cars that look beautiful in every photograph." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
    ],
    vehicles: [
      "Premium SUV — Cadillac Escalade",
      "First Class Sedan — BMW 7 Series",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Birthday Limo & Party Transportation", to: "/birthday-celebrations" },
          { label: "Bar/Bat Mitzvah Limo Service — Maryland", to: "/bar-bat-mitzvah-limo-service-maryland" },
          { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
          { label: "Baby Shower Limo Service — Maryland", to: "/baby-shower-limo-service-maryland" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "How many people fit in the court-of-honor vehicle?", a: "A Mercedes Sprinter van seats up to 13, comfortably covering most courts of damas and chambelanes together." },
      { q: "Can you plan around the church ceremony and portrait session?", a: "Yes — tell us the full day's schedule and we build pickups around the Mass, photos, and the reception entrance." },
      { q: "Does someone on your team speak Spanish?", a: "Our dispatch team is glad to confirm booking details with a Spanish-speaking family member by phone; call (877) 609-1919 to arrange." },
      { q: "Can the vehicle be decorated for the occasion?", a: "Light decor such as a sash or sign is welcome — ask when you book so we can plan the setup." },
      { q: "How far in advance should we book?", a: "A few weeks ahead is ideal, and earlier during the busiest spring and summer quinceañera months." },
    ],
    ctaTitle: "Book Quinceañera Transportation",
    ctaSubtitle: "Reserve elegant transportation for the celebration. Call (877) 609-1919.",
  },

  "brewery-distillery-tour-transportation-maryland": {
    metaTitle: "Brewery & Distillery Tour Transportation MD | 92 Limo",
    metaDescription:
      "Chauffeured brewery & distillery tours across Maryland — safe rides between stops, Sprinter vans for groups. Call (877) 609-1919.",
    eyebrow: "BREWERY & DISTILLERY TOURS",
    h1: "Brewery & Distillery Tour Transportation — Maryland",
    subtitle: "A relaxed, chauffeured day touring Maryland's craft breweries and distilleries — nobody drives, everybody tastes.",
    image: IMAGES.wineTour,
    alt: "Mercedes Sprinter van for a Maryland brewery and distillery tour — 92 Limo Service",
    highlightsHeading: "Why Groups Choose 92 Limo Service for Brewery & Distillery Tours",
    intro: [
      "Maryland's craft beer and spirits scene has grown well beyond its wine country, with standout breweries and distilleries scattered from Baltimore City to Frederick County and the Eastern Shore. 92 Limo Service provides the same chauffeured, as-directed touring model we use for wine tours, built for beer and spirits tastings instead.",
      "Tell us your preferred stops — or ask for suggestions by region — and we build the day's route and timing around them, typically two to three stops with time for a relaxed lunch in between.",
      "An SUV comfortably covers smaller groups, while a Mercedes Sprinter van keeps a full group of up to 13 together for a bachelor or bachelorette outing, a birthday, or a company team day.",
      "The vehicle and chauffeur stay with your group for the whole day, booked hourly and as-directed, so nobody has to designate a driver or watch the clock.",
    ],
    highlights: [
      { title: "Statewide Coverage", desc: "Breweries and distilleries from Baltimore City to Frederick County and the Eastern Shore." },
      { title: "Custom Route Planning", desc: "Tell us your stops, or ask for suggestions — we build the day's timing around them." },
      { title: "Nobody Drives", desc: "A dedicated chauffeur for the whole outing, so everyone can taste without worry." },
      { title: "Group-Ready Vehicles", desc: "SUVs for smaller groups, Sprinter vans for up to 13 touring together." },
      { title: "Flexible, Hourly Booking", desc: "The vehicle stays with your group all day, as-directed." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "Maryland Wine Tour Transportation", to: "/maryland-wine-tour-transportation" },
          { label: "Wine Tour Chauffeur Service", to: "/wine-tours" },
          { label: "Bachelorette Party Limo", to: "/bachelorette-party-limo" },
          { label: "Birthday Limo & Party Transportation", to: "/birthday-celebrations" },
          { label: "Loudoun Wine Country Limo Service", to: "/loudoun-wine-country-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Do we need to book the breweries or distilleries ourselves?", a: "Yes — venues take their own tasting reservations and some require them for groups. Send us the confirmed times and we build the route around them." },
      { q: "How many stops fit in a day?", a: "Most groups enjoy two to three stops with time for a relaxed lunch in between." },
      { q: "What vehicle works best?", a: "An SUV for up to 5 guests, or a Mercedes Sprinter for groups up to 13 so everyone rides together." },
      { q: "How is a brewery or distillery tour priced?", a: "Hourly, as-directed — the vehicle and chauffeur stay with your group all day. Call (877) 609-1919 for a quote." },
      { q: "Can we combine breweries and a winery in the same day?", a: "Yes — tell us your preferred mix and we'll plan a realistic route and timing." },
    ],
    ctaTitle: "Book a Brewery or Distillery Tour",
    ctaSubtitle: "Plan a relaxed day of tastings — nobody has to drive. Call (877) 609-1919.",
  },

  "employee-shuttle-service-maryland": {
    metaTitle: "Employee Shuttle Service Maryland | 92 Limo",
    metaDescription:
      "Recurring employee shuttle service for Maryland & DC companies — scheduled routes, consolidated billing. Call (877) 609-1919.",
    eyebrow: "EMPLOYEE SHUTTLE SERVICE",
    h1: "Employee Shuttle Service — Maryland & DC",
    subtitle: "Recurring, scheduled shuttle transportation for Maryland and DC-area companies — office-to-office, parking lot to campus, or home to work.",
    image: IMAGES.corporate,
    alt: "Mercedes Sprinter van used for a Maryland employee shuttle route — 92 Limo Service",
    highlightsHeading: "Why Companies Choose 92 Limo Service for Employee Shuttles",
    intro: [
      "Not every corporate transportation need is a one-off ride — many Maryland and DC-area employers need a recurring, scheduled shuttle: a satellite parking lot to a secure campus, a train station to an office park, or a regular loop between two office locations. That's a different booking shape than our standard corporate car service, and we set it up as its own standing arrangement.",
      "A typical employee shuttle runs on a fixed or semi-fixed schedule, with one or more Sprinter vans assigned to the route and a dedicated point of contact for schedule changes, holidays, and headcount adjustments.",
      "We coordinate directly with HR, facilities, or office management to build a schedule around actual shift times and parking or security logistics, rather than a generic loop that doesn't match how your team actually moves.",
      "Billing is consolidated into one monthly invoice, scaled to the schedule you run — a far simpler arrangement than employees separately expensing individual rideshare trips.",
    ],
    highlights: [
      { title: "Recurring, Scheduled Routes", desc: "A fixed or semi-fixed shuttle loop built around your actual shift and office hours." },
      { title: "Dedicated Shuttle Vehicles", desc: "Sprinter vans assigned to your route, not a different driver every day." },
      { title: "HR & Facilities Coordination", desc: "We work directly with your team to plan the schedule and any changes." },
      { title: "Consolidated Monthly Billing", desc: "One invoice for the whole program, scaled to the schedule you run." },
      { title: "Security & Campus Familiarity", desc: "Chauffeurs accustomed to badge-in procedures and secure-campus logistics." },
      { title: "Flat, Transparent Pricing", desc: "One quoted program rate, with all charges disclosed before confirmation." },
    ],
    vehicles: [
      "Sprinter Shuttle — Mercedes Sprinter",
      "Sprinter Executive — Mercedes Sprinter",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Corporate & Executive Car Service", to: "/corporate-transportation" },
          { label: "Biotech & Pharma Car Service — Maryland", to: "/pharma-biotech-car-service-maryland" },
          { label: "Government Contractor Car Service — Maryland", to: "/government-contractor-car-service-maryland" },
          { label: "Technology Company Car Service — Maryland", to: "/tech-company-car-service-maryland" },
          { label: "Hourly Chauffeur Service", to: "/hourly-chauffeur" },
        ],
      },
    ],
    faqs: [
      { q: "Is this different from a one-time corporate car booking?", a: "Yes — an employee shuttle is a recurring, scheduled program with dedicated vehicles, set up as its own standing arrangement rather than individual trip bookings." },
      { q: "Can you coordinate with our HR or facilities team?", a: "Yes — we work directly with HR, facilities, or office management to build a schedule around real shift times and site logistics." },
      { q: "How is a shuttle program billed?", a: "One consolidated monthly invoice scaled to the schedule you run, rather than individual trip receipts." },
      { q: "Can your chauffeurs handle secure-campus or badge-in procedures?", a: "Yes — our chauffeurs are accustomed to the access procedures common at secure corporate and government-adjacent campuses." },
      { q: "How do we set up a new shuttle program?", a: "Email info@92limo.com with your route, schedule, and headcount, and we will propose a vehicle plan and flat program quote." },
    ],
    ctaTitle: "Set Up an Employee Shuttle Program",
    ctaSubtitle: "Email info@92limo.com or call (877) 609-1919 to design your company's route.",
  },

  "georgetown-university-car-service": {
    metaTitle: "Georgetown University Car Service | 92 Limo",
    metaDescription:
      "Car service for Georgetown University students, parents & visitors — move-in, commencement, parents weekend. Call (877) 609-1919.",
    eyebrow: "GEORGETOWN UNIVERSITY",
    h1: "Georgetown University Car Service",
    subtitle: "Reliable chauffeured transportation for Georgetown University students, parents and visitors — airport runs, move-in day, and commencement.",
    image: IMAGES.sedan,
    alt: "Luxury sedan providing car service near Georgetown University in Washington DC — 92 Limo Service",
    highlightsHeading: "Why Georgetown Families Choose 92 Limo Service",
    intro: [
      "Georgetown University's campus sits in one of DC's most traffic- and parking-restricted neighborhoods, which makes move-in day, parents weekend, and commencement weekend genuinely harder to navigate than they need to be. We run this route regularly and know the realistic timing and best drop-off approach for each.",
      "Airport runs are the most common booking — flight-tracked pickups from DCA, IAD or BWI for a student arriving for the semester or a parent flying in for a visit, with a chauffeur who knows exactly where to stage near campus housing or the main gates.",
      "Move-in and move-out days bring their own challenge: loading a semester's worth of belongings into a vehicle built for luggage, not boxes — tell us what you're bringing and we'll recommend the right vehicle, typically an SUV or Sprinter van rather than a sedan.",
      "For commencement weekend and other peak dates, we recommend booking well ahead, since the same limited pool of Georgetown-familiar chauffeurs is in high demand across the entire graduating class's visiting families.",
    ],
    highlights: [
      { title: "Campus-Area Know-How", desc: "Chauffeurs familiar with Georgetown's restricted streets and the best drop-off points near campus." },
      { title: "Flight-Tracked Airport Runs", desc: "DCA, IAD and BWI pickups timed to the actual flight, not the schedule." },
      { title: "Move-In & Move-Out Ready", desc: "SUVs and Sprinter vans sized for a semester's worth of belongings." },
      { title: "Commencement & Parents Weekend", desc: "Experience with Georgetown's peak visiting weekends — book ahead." },
      { title: "Distinct From Hospital Transport", desc: "This page is for the university campus — see our Johns Hopkins Hospital page for medical transport." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "Johns Hopkins University Car Service", to: "/johns-hopkins-university-car-service" },
          { label: "University of Maryland Transportation", to: "/university-of-maryland-transportation" },
          { label: "Georgetown, DC Limo Service", to: "/georgetown-dc-limo-service" },
          { label: "College Tour Car Service — Maryland & DC", to: "/college-tour-car-service-maryland-dc" },
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
        ],
      },
    ],
    faqs: [
      { q: "Can you navigate Georgetown's restricted streets for a drop-off?", a: "Yes — our chauffeurs know the realistic staging and drop-off points near campus housing and the main gates." },
      { q: "Do you handle move-in and move-out day?", a: "Yes — tell us what you're bringing and we'll recommend an SUV or Sprinter van sized for a semester's worth of belongings." },
      { q: "Can you pick up a student arriving at DCA, IAD or BWI?", a: "Yes — flight-tracked pickups from all three airports, with the vehicle ready regardless of a delay." },
      { q: "How far ahead should we book for commencement weekend?", a: "As early as possible — Georgetown-familiar chauffeurs are in high demand across the entire graduating class's visiting families." },
      { q: "Is this the same as your Johns Hopkins Hospital page?", a: "No — this page covers Georgetown University's campus. For Johns Hopkins, see our separate Johns Hopkins University (campus) and Johns Hopkins Hospital (patient transport) pages." },
    ],
    ctaTitle: "Book Georgetown University Transportation",
    ctaSubtitle: "Reserve airport, move-in, or visiting-weekend transportation. Call (877) 609-1919.",
  },

  "johns-hopkins-university-car-service": {
    metaTitle: "Johns Hopkins University Car Service | 92 Limo",
    metaDescription:
      "Car service for Johns Hopkins University students, parents & visitors — Homewood campus, move-in, commencement. Call (877) 609-1919.",
    eyebrow: "JOHNS HOPKINS UNIVERSITY",
    h1: "Johns Hopkins University Car Service",
    subtitle: "Reliable chauffeured transportation for the Johns Hopkins University Homewood campus in Baltimore — students, parents and visitors.",
    image: IMAGES.sedan,
    alt: "Luxury sedan providing car service near the Johns Hopkins University Homewood campus in Baltimore — 92 Limo Service",
    highlightsHeading: "Why Johns Hopkins Families Choose 92 Limo Service",
    intro: [
      "This page covers the Johns Hopkins University Homewood campus in Baltimore — undergraduate students, parents, and visitors. If you're looking for patient or hospital-visitor transportation to the Johns Hopkins Hospital medical campus in East Baltimore, see our dedicated hospital transportation page instead; the two campuses are in different parts of the city with different logistics.",
      "Airport runs are the most common university booking — flight-tracked pickups from BWI, DCA or IAD for a student arriving for the semester or a parent flying in for a visit, dropped directly at campus housing or a nearby hotel.",
      "Move-in and move-out days bring their own challenge: loading a semester's worth of belongings into a vehicle built for luggage, not boxes — tell us what you're bringing and we'll recommend an SUV or Sprinter van rather than a sedan.",
      "For commencement weekend, family weekend, and other peak dates, we recommend booking well ahead, since the same limited pool of Baltimore-area chauffeurs is in high demand across the whole visiting class.",
    ],
    highlights: [
      { title: "Homewood Campus Know-How", desc: "Chauffeurs familiar with the Homewood campus area and nearby Baltimore neighborhoods." },
      { title: "Flight-Tracked Airport Runs", desc: "BWI, DCA and IAD pickups timed to the actual flight, not the schedule." },
      { title: "Move-In & Move-Out Ready", desc: "SUVs and Sprinter vans sized for a semester's worth of belongings." },
      { title: "Commencement & Family Weekend", desc: "Experience with JHU's peak visiting weekends — book ahead." },
      { title: "Distinct From Hospital Transport", desc: "This page is for the university campus — see our Johns Hopkins Hospital page for patient and medical-visitor transport." },
      { title: "Flat, Transparent Pricing", desc: "One quoted rate, with all charges disclosed before confirmation." },
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
          { label: "Georgetown University Car Service", to: "/georgetown-university-car-service" },
          { label: "Limo Service Near Johns Hopkins Hospital", to: "/limo-service-near-johns-hopkins-hospital" },
          { label: "University of Maryland Transportation", to: "/university-of-maryland-transportation" },
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "College Tour Car Service — Maryland & DC", to: "/college-tour-car-service-maryland-dc" },
        ],
      },
    ],
    faqs: [
      { q: "Is this the same as your Johns Hopkins Hospital page?", a: "No — this page covers the Johns Hopkins University Homewood campus (students, parents, visitors). For the Johns Hopkins Hospital medical campus, see our Limo Service Near Johns Hopkins Hospital page." },
      { q: "Do you handle move-in and move-out day?", a: "Yes — tell us what you're bringing and we'll recommend an SUV or Sprinter van sized for a semester's worth of belongings." },
      { q: "Can you pick up a student arriving at BWI, DCA or IAD?", a: "Yes — flight-tracked pickups from all three airports, dropped directly at campus housing or a nearby hotel." },
      { q: "How far ahead should we book for commencement or family weekend?", a: "As early as possible — Baltimore-area chauffeurs are in high demand across the whole visiting class on these weekends." },
      { q: "Can you also serve nearby Baltimore hotels for visiting family?", a: "Yes — we regularly combine campus drop-offs with hotel transfers for parents and visiting family in the same trip." },
    ],
    ctaTitle: "Book Johns Hopkins University Transportation",
    ctaSubtitle: "Reserve airport, move-in, or visiting-weekend transportation. Call (877) 609-1919.",
  },
};
