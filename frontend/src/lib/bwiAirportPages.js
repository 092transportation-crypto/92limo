// BWI airport content expansion (2026-10-23), requested to compete for
// BWI keywords alongside the dedicated BWI storefront (bwichauffeur.com).
// Same entry shape as MARYLAND_BATCH3-9_PAGES; merged into LANDING_PAGES
// by landingPages.js. Named separately from marylandPagesBatchN.js (rather
// than claiming the next batch number) because another session was
// concurrently writing its own, unrelated marylandPagesBatch10.js in this
// same repo — see the git history around 2026-10-23 for both.
//
// This site already had very deep BWI coverage before this file —
// "bwi-airport-limo" (flagship), "bwi-airport-car-service",
// "bwi-corporate-transportation", "bwi-airport-meet-and-greet", and
// dedicated "bwi-to-<city>" route pages for roughly 25 destinations
// (Annapolis, Baltimore, Columbia, Laurel, Washington DC, Ocean City,
// Rockville, Frederick, Silver Spring, Tysons, McLean, Leesburg, Sterling,
// Odenton, Crofton, Bowie, Towson, Hunt Valley, Ellicott City, Bethesda,
// Dulles, Arlington, Alexandria, the Delaware beaches...), plus
// "black-car-service-baltimore/dc/maryland" and a Baltimore cruise-port
// page ("cruise-transfers"). Every title in the original request for this
// batch ("BWI airport limo service", "BWI airport car service", "BWI to
// Columbia MD limo", "BWI to Laurel MD car service", "BWI to Annapolis
// limo", "BWI to DC car service", "BWI meet and greet service", "BWI
// corporate car service", "BWI to Baltimore limo") already matches one of
// those existing pages almost verbatim — publishing a near-duplicate
// slug/title for the same search intent would cannibalize a page that's
// already live, not add new coverage. So this file instead fills the
// real remaining gaps: BWI route pages for close-in Anne Arundel/Howard
// County towns and federal/corporate destinations that had NO dedicated
// "bwi-to-<city>" page yet (verified against landingPageSlugs.js before
// writing), plus genuinely new BWI sub-topics (private aviation, the rail
// station, long-term parking, red-eye departures, airport-to-airport
// transfer to DCA) that no existing BWI page or guide covers. The one
// exception is "BWI black car service" — existing black-car-service pages
// are city-wide (Baltimore/DC/Maryland), so an airport-specific one,
// scoped to corporate/executive arrivals rather than repeating the
// city-wide pitch, is a real gap.
export const BWI_AIRPORT_PAGES = {
  // -------------------------------------------------- THEMATIC: BLACK CAR
  "bwi-black-car-service": {
    metaTitle: "BWI Black Car Service | 92 Limo Service",
    metaDescription:
      "Executive black car service at BWI Marshall Airport — corporate accounts, flight tracking, discreet professional chauffeurs. Flat rates, 24/7. (877) 609-1919.",
    eyebrow: "BWI MARSHALL AIRPORT",
    h1: "BWI Black Car Service",
    subtitle:
      "A dedicated black car tier for BWI arrivals and departures — executive sedans, discreet professional chauffeurs, and flat corporate pricing, built for business travelers rather than the general airport crowd.",
    image: "/images/site/corporate.webp",
    alt: "Executive black car waiting at BWI Marshall Airport for a corporate traveler — 92 Limo Service",
    highlightsHeading: "Why Executives Book Our BWI Black Car Service",
    intro: [
      "\"Black car\" at BWI means a specific, consistent standard: a late-model executive sedan, a chauffeur in business attire, and a quiet, climate-controlled cabin — not whichever vehicle happens to be nearest when a rideshare app matches you. 92 Limo Service runs this as its own tier at BWI Marshall Airport, separate from standard sedan bookings, for executives, visiting clients, and corporate accounts who need the trip to look and feel the part before the meeting even starts.",
      "The chauffeur is staged curbside or waits inside at baggage claim with a name sign, tracks your inbound flight automatically, and handles every bag without being asked. For board members, outside counsel, or a client flying in for a single high-stakes meeting, that first fifteen minutes off the plane sets the tone for the whole visit — a black car service is built specifically for that moment, where a standard airport pickup is not.",
      "Corporate accounts get consolidated monthly billing, a dedicated contact, and priority scheduling during high-volume weeks, so a travel coordinator can book a visiting executive's BWI pickup the same way they book a flight — once, correctly, with no follow-up call needed to confirm the car showed up.",
    ],
    highlights: [
      { title: "Executive Sedan Fleet", desc: "Mercedes E-Class and BMW 7 Series sedans, detailed and inspected before every BWI pickup." },
      { title: "Discreet, Professional Chauffeurs", desc: "Business-attired, background-checked drivers trained for client-facing and confidential travel." },
      { title: "Flight Tracking Included", desc: "Pickup adjusts automatically to your actual arrival — no texting ahead about a delay." },
      { title: "Corporate Account Billing", desc: "Consolidated monthly invoicing and a dedicated contact for frequent business travel." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet clients or executives inside baggage claim with a name sign." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you ride, with gratuity, tolls and parking disclosed up front." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
    ],
    areas: [
      {
        region: "Related BWI Pages",
        places: [
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
          { label: "Black Car Service in DC", to: "/black-car-service-dc" },
          { label: "Black Car Service in Baltimore", to: "/black-car-service-baltimore" },
          { label: "Corporate Transportation (Pillar Page)", to: "/corporate-transportation" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "What's the difference between black car service and a standard airport sedan?", a: "Both use a professional sedan, but black car service at BWI is booked and billed as its own corporate tier — business-attired chauffeurs, a consistent executive sedan standard, and account billing built for repeat business travel rather than a one-off leisure trip." },
      { q: "Can my company set up a corporate account for BWI black car service?", a: "Yes. Corporate accounts get consolidated monthly invoicing, a dedicated contact and priority scheduling. Call (877) 609-1919 to set one up." },
      { q: "Do you offer meet & greet for visiting clients or executives?", a: "Yes — your chauffeur can wait inside baggage claim with a printed name sign and assist with luggage. Additional charge applies." },
      { q: "What happens if the executive's flight into BWI is delayed?", a: "Nothing you need to manage. We track the flight in real time and adjust the pickup automatically, with complimentary wait time built in." },
      { q: "How much does BWI black car service cost?", a: "Every trip is a flat, transparent rate confirmed before you book — call (877) 609-1919 or request a corporate quote online." },
    ],
    ctaTitle: "Book BWI Black Car Service",
    ctaSubtitle: "Executive sedans, discreet chauffeurs, flat corporate pricing. Call (877) 609-1919 or set up a corporate account online.",
  },

  // -------------------------------------------- THEMATIC: SOUTHWEST / BWI
  "bwi-southwest-airlines-terminal": {
    metaTitle: "BWI Southwest Airlines Car Service | 92 Limo",
    metaDescription:
      "Flying Southwest out of BWI? Chauffeured car service timed to Southwest's gates and baggage claim, with flight tracking. Flat rates, 24/7. (877) 609-1919.",
    eyebrow: "BWI MARSHALL AIRPORT",
    h1: "BWI Southwest Airlines Car Service",
    subtitle:
      "BWI is one of Southwest Airlines' largest operations on the East Coast — our chauffeurs know the baggage-claim pattern on a heavy Southwest day and stage accordingly, so your pickup isn't stuck behind someone else's rideshare wait.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeur meeting a Southwest Airlines passenger at BWI Marshall Airport baggage claim",
    highlightsHeading: "Why Southwest Flyers at BWI Book 92 Limo Service",
    intro: [
      "Southwest Airlines runs one of its largest schedules anywhere out of BWI Marshall, which means the terminal's baggage-claim level can get genuinely crowded during Southwest's peak banks — multiple open-seating flights landing close together, carousels running at once, and a curb full of rideshare drivers all converging on the same stretch of road at the same time. A chauffeur dispatched against your specific flight, rather than summoned the moment you land, skips that scramble entirely.",
      "Because Southwest doesn't assign seats, families and groups flying together often end up scattered through the cabin and exit the jet bridge at different times — which makes a fixed meeting point more useful than it would be on an airline with assigned boarding groups. Your chauffeur waits at one confirmed spot with a name sign (optional meet & greet) so the group can regroup once, not search for each other at the curb.",
      "Flight tracking is standard on every BWI booking, so a Southwest flight that boards late or holds on the tarmac doesn't cost you anything — your pickup time adjusts automatically, and complimentary wait time is built into every arrival.",
    ],
    highlights: [
      { title: "Timed to Southwest's Peak Banks", desc: "Chauffeurs plan around BWI's busiest Southwest arrival windows, not just a generic airport average." },
      { title: "One Fixed Meeting Point", desc: "Helpful for open-seating groups who exit the jet bridge separated — everyone regroups in one place." },
      { title: "Flight Tracking Included", desc: "A late or held Southwest departure doesn't change your confirmed pickup — it just adjusts automatically." },
      { title: "Meet & Greet Available", desc: "Your chauffeur can meet you inside at baggage claim with a name sign for an additional charge." },
      { title: "Room for Checked Bags", desc: "SUVs and Sprinter vans for Southwest's generous two-free-checked-bag groups and families." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you fly, with gratuity, tolls and parking disclosed up front." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related BWI Pages",
        places: [
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "BWI Airport Meet & Greet", to: "/bwi-airport-meet-and-greet" },
          { label: "BWI 24 Hour Car Service", to: "/bwi-24-hour-airport-car-service" },
          { label: "BWI Red-Eye & Early Morning Car Service", to: "/bwi-red-eye-early-morning-car-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Do you track Southwest flights specifically?", a: "Yes — we track every arriving flight in real time regardless of airline, including Southwest's open-seating departures, and adjust your pickup automatically for a late gate or hold." },
      { q: "My family is scattered through the cabin on open seating — how do we all meet the driver?", a: "Your chauffeur waits at one confirmed meeting point (curbside or inside with meet & greet), so your group can regroup there once everyone has cleared the jet bridge and baggage claim." },
      { q: "Is BWI busier with Southwest than other airlines?", a: "BWI is one of Southwest's largest operations, so baggage claim and the arrivals curb can get crowded during peak Southwest banks. A pre-arranged chauffeur skips that scramble." },
      { q: "Can you handle our group's checked bags?", a: "Yes — our SUVs and Sprinter vans have dedicated luggage space for Southwest's two-free-checked-bag groups and larger families." },
      { q: "How much does it cost?", a: "Every trip is a flat, transparent rate confirmed before you fly — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI Southwest Pickup",
    ctaSubtitle: "Timed to the terminal's busiest Southwest banks, flat-rated and flight-tracked. Call (877) 609-1919.",
  },

  // --------------------------------------------- THEMATIC: PRIVATE AVIATION
  "bwi-private-jet-terminal": {
    metaTitle: "BWI Private Jet & FBO Car Service | 92 Limo",
    metaDescription:
      "Chauffeured car service to BWI's private aviation (FBO) terminal — timed to your departure, discreet, flat-rate. Charter and corporate flyers. (877) 609-1919.",
    eyebrow: "BWI MARSHALL AIRPORT",
    h1: "BWI Private Jet & FBO Terminal Car Service",
    subtitle:
      "Ground transportation to and from BWI's private aviation terminal (FBO) — separate from the commercial terminal, timed to your charter or company aircraft's actual departure.",
    image: "/images/site/corporate.webp",
    alt: "Executive car at BWI's private aviation terminal for a charter flight passenger — 92 Limo Service",
    highlightsHeading: "Why Private Aviation Travelers Book 92 Limo Service",
    intro: [
      "BWI's fixed-base operator (FBO) terminal handles private, charter and corporate aircraft separately from the main commercial concourse — a different entrance, a different curb, and a very different pace than the public terminal. A ground transportation provider that only runs the commercial side can genuinely get this wrong, sending a chauffeur to the wrong building or quoting a drive time that assumes commercial-terminal traffic patterns that don't apply here.",
      "We coordinate directly against your charter operator's or flight department's actual departure and arrival windows rather than a generic flight-tracker feed, since private aviation schedules shift later and with less notice than a commercial flight number does. Your chauffeur waits at the FBO curb, ready the moment your aircraft taxis in, with the same discretion a private-aviation traveler expects — no name sign held up in a crowded public baggage hall, no waiting at the wrong door.",
      "This is most often booked by corporate flight departments, charter brokers arranging ground transportation for a client, and families or executives flying privately for a single trip — and it's quoted the same way every other BWI trip is: one flat, transparent rate confirmed before you ride.",
    ],
    highlights: [
      { title: "FBO-Specific Pickup", desc: "Your chauffeur goes to BWI's private aviation terminal, not the commercial concourse — the correct curb, every time." },
      { title: "Coordinated to Your Actual Schedule", desc: "We work directly from your charter operator's or flight department's departure window, not a generic flight tracker." },
      { title: "Discreet Service", desc: "No crowded public terminal, no name sign in a busy hall — a quiet, direct pickup suited to private travel." },
      { title: "Corporate Flight Department Accounts", desc: "Consolidated billing and a dedicated contact for companies that fly privately on a recurring basis." },
      { title: "Executive Sedans & SUVs", desc: "The same premium fleet used for our black car and corporate accounts." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you fly, with gratuity, tolls and parking disclosed up front." },
    ],
    vehicles: [
      "First Class Sedan — BMW 7 Series",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Executive — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related BWI Pages",
        places: [
          { label: "BWI Black Car Service", to: "/bwi-black-car-service" },
          { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "Martin State Airport (General Aviation)", to: "/booking" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Do you serve BWI's private aviation (FBO) terminal, or just the commercial side?", a: "Both — we run regular pickups at BWI's private aviation terminal for charter, corporate and privately-owned aircraft, separate from the commercial concourse." },
      { q: "How do you time the pickup if there's no commercial flight number to track?", a: "We coordinate directly with your charter operator or flight department against the actual scheduled departure or arrival, and stay in contact if that time shifts, which happens more often with private aviation than commercial flights." },
      { q: "Can a charter broker book ground transportation on behalf of a client?", a: "Yes — charter brokers and flight departments regularly book on a client's behalf. Call (877) 609-1919 to set up the trip or a standing corporate account." },
      { q: "Is this more expensive than standard BWI airport car service?", a: "Pricing is based on vehicle class and trip details like any other BWI trip — call for a flat, confirmed quote. There's no separate FBO surcharge." },
      { q: "Can you handle a same-day charter booking?", a: "Often, yes — call (877) 609-1919 directly for same-day private aviation pickups; availability depends on current fleet and timing." },
    ],
    ctaTitle: "Book BWI Private Jet Terminal Car Service",
    ctaSubtitle: "Discreet, flat-rate ground transportation coordinated to your actual charter schedule. Call (877) 609-1919.",
  },

  // --------------------------------------------- THEMATIC: RAIL STATION
  "bwi-rail-station-car-service": {
    metaTitle: "BWI Rail Station Car Service | 92 Limo Service",
    metaDescription:
      "Car service to and from the BWI Rail Station — Amtrak and MARC Penn Line connections, flat rates, no shuttle wait. Call (877) 609-1919, 24/7.",
    eyebrow: "BWI MARSHALL AIRPORT",
    h1: "BWI Rail Station Car Service",
    subtitle:
      "Connecting between a flight and Amtrak or MARC at the BWI Rail Station — or starting your trip from the station instead of the terminal — in one private car, no shuttle bus required.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured car at the BWI Rail Station for an Amtrak or MARC connection — 92 Limo Service",
    highlightsHeading: "Why Travelers Connecting at BWI Rail Station Book Us",
    intro: [
      "The BWI Rail Station sits about a mile from the airport terminal and is served by Amtrak's Northeast Corridor trains and MARC's Penn Line — a genuinely useful connection for travelers combining a flight with a train leg, but one that technically requires the airport's free shuttle bus to bridge that mile, with its own wait and schedule. A private car service skips that step entirely: one vehicle, door to door, timed to your actual flight or train rather than a shuttle's fixed loop.",
      "This is a common booking for a few specific trips: flying into BWI and continuing north or south by rail instead of renting a car, arriving by train and needing a ride onward rather than waiting for a connecting flight, or simply avoiding the shuttle-bus wait entirely when traveling with family, luggage, or on a tight connection window.",
      "Every booking includes flight or arrival-time coordination, so if your inbound leg runs late, your pickup adjusts with it — the same flat-rate, flight-tracked standard as every other BWI transfer we run.",
    ],
    highlights: [
      { title: "Skips the Shuttle Bus", desc: "One private vehicle covers the roughly one-mile gap between the terminal and BWI Rail Station directly." },
      { title: "Amtrak & MARC Connections", desc: "Timed to Northeast Corridor Amtrak departures or MARC Penn Line schedules." },
      { title: "Flight or Train Tracking", desc: "Your pickup adjusts automatically if your inbound flight or train runs late." },
      { title: "No Lost Time With Luggage", desc: "Avoid hauling bags onto a shuttle bus for a one-mile transfer." },
      { title: "Works Both Directions", desc: "Flying in and continuing by rail, or arriving by train and continuing by air — either direction, one booking." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you ride, with gratuity, tolls and parking disclosed up front." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Midsize SUV — Lincoln Aviator",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related BWI Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
          { label: "Baltimore Limo Service", to: "/baltimore-limo-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Where is the BWI Rail Station relative to the airport terminal?", a: "About a mile away, connected by the airport's free shuttle bus. A private car service covers that same distance directly, without the shuttle's wait or fixed schedule." },
      { q: "Which trains serve the BWI Rail Station?", a: "Amtrak's Northeast Corridor trains and MARC's Penn Line, which runs between Washington, DC and Perryville, MD through Baltimore." },
      { q: "Can you time my pickup to a MARC or Amtrak arrival?", a: "Yes — tell us your scheduled arrival when you book, and we track it and adjust the pickup if the train runs late." },
      { q: "Is this cheaper than the shuttle bus?", a: "The free shuttle bus is cheaper for a single rider with no luggage and no time pressure. A private car costs more but saves the wait, handles bags, and goes directly on your schedule." },
      { q: "How much does it cost?", a: "Every trip is a flat, transparent rate confirmed before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI Rail Station Connection",
    ctaSubtitle: "Skip the shuttle bus — one private car between your flight and your Amtrak or MARC train. Call (877) 609-1919.",
  },

  // ------------------------------------------ THEMATIC: PARKING ALTERNATIVE
  "bwi-long-term-parking-alternative": {
    metaTitle: "BWI Long-Term Parking Alternative | 92 Limo",
    metaDescription:
      "Skip BWI's long-term parking lots entirely — flat-rate car service to and from the airport instead. Compare the real cost. Call (877) 609-1919, 24/7.",
    eyebrow: "BWI MARSHALL AIRPORT",
    h1: "A Long-Term Parking Alternative at BWI",
    subtitle:
      "Flying out for a week or longer? A flat-rate car service to and from BWI is often a wash on cost against long-term parking — and skips the lot entirely, both ways.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeur loading luggage curbside at BWI Marshall Airport instead of a long-term parking shuttle",
    highlightsHeading: "What You're Actually Comparing",
    intro: [
      "BWI's own long-term parking runs a daily rate that adds up fast on a week-long or longer trip — and that published rate doesn't include the two shuttle-bus rides (there and back) between the lot and the terminal, or the time spent waiting for one. A round-trip car service quote, by contrast, is one flat number that includes door-to-door pickup and drop-off on both ends, with no running daily meter and no shuttle wait.",
      "For a trip of roughly a week or more, the two often land close enough in total cost that the deciding factor becomes convenience rather than price: no lugging bags to a shuttle stop, no walking a parking garage in the dark after a late-arriving flight, and no finding your own car again after a week away. For a shorter trip of a day or two, driving and self-parking is usually still the cheaper option — we'll tell you honestly when that's the case rather than pushing the car service by default.",
      "If you do go with a car service, the booking covers both legs: a drop-off timed to your departure and a return pickup timed to your actual arrival, flight-tracked so a delay on the way home doesn't leave you stranded curbside.",
    ],
    highlights: [
      { title: "One Flat Round-Trip Rate", desc: "Covers both the drop-off and the return pickup, with no running daily parking charge." },
      { title: "No Shuttle Bus, Either Way", desc: "Door-to-door on both legs — no walking a parking lot with bags before or after a flight." },
      { title: "Return-Trip Flight Tracking", desc: "Your pickup on the way home adjusts automatically if your return flight is delayed." },
      { title: "Best for Trips of About a Week or Longer", desc: "We'll tell you honestly if self-parking is the cheaper option for a shorter trip." },
      { title: "Works for Groups, Too", desc: "One SUV or Sprinter for the whole family often beats paying for a second parked car's worth of fees." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate for the full round trip, with gratuity, tolls and any other charges disclosed up front." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related BWI Pages",
        places: [
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "BWI Red-Eye & Early Morning Car Service", to: "/bwi-red-eye-early-morning-car-service" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Is car service actually cheaper than BWI long-term parking?", a: "For trips of roughly a week or longer, the total cost is often close once you add up the parking lot's daily rate across the whole trip. For a day or two, self-parking is usually still cheaper — we'll say so." },
      { q: "Do you book both the drop-off and the return pickup together?", a: "Yes, as one combined round-trip reservation, so your return ride is guaranteed and timed to your actual arrival flight." },
      { q: "What if my return flight is delayed?", a: "We track it and adjust your pickup automatically, with complimentary wait time included — the same as any BWI arrival." },
      { q: "Is this worth it for a family or group trip?", a: "Often, yes — one SUV or Sprinter van for the group can come out ahead of paying to park a car for the same stretch of time, especially with 2+ travelers." },
      { q: "How do I get an exact comparison for my trip?", a: "Call (877) 609-1919 with your dates and we'll give you a flat round-trip quote to compare against the parking lot's posted daily rate." },
    ],
    ctaTitle: "Skip BWI Parking — Book Your Round Trip",
    ctaSubtitle: "One flat rate for drop-off and return pickup, flight-tracked both ways. Call (877) 609-1919.",
  },

  // --------------------------------------------- THEMATIC: BWI <-> DCA
  "bwi-to-dca-airport-transfer": {
    metaTitle: "BWI to DCA Airport Transfer | 92 Limo Service",
    metaDescription:
      "Chauffeured transfer between BWI and Reagan National (DCA) — connecting flights, mis-booked airports, or a shorter-hop itinerary. Flat rates. (877) 609-1919.",
    eyebrow: "BWI → DCA",
    h1: "BWI to Reagan National (DCA) Airport Transfer",
    subtitle:
      "A direct chauffeured transfer between BWI Marshall and Reagan National — for connecting itineraries, a cheaper fare into one airport and out of the other, or simply switching airports mid-trip.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan on an airport-to-airport transfer between BWI and Reagan National (DCA)",
    highlightsHeading: "Why Travelers Book an Airport-to-Airport Transfer",
    intro: [
      "Flying into one DC-area airport and out of another is a common way to save on fares or fit a tighter schedule across the region's three major airports — and BWI to DCA (or the reverse) is one of the most frequently booked combinations, about 35 to 40 miles depending on the route taken around Baltimore and the Fort Meade corridor. It's not a trip most rideshare apps or DC taxis are built to quote cleanly, since it crosses jurisdiction lines and isn't a typical in-city fare.",
      "92 Limo Service runs this as a standard point-to-point transfer, quoted as one flat rate regardless of which airport you're starting or ending at. We track your inbound flight into BWI (or DCA) and time the pickup to your actual arrival, then deliver you to the departing terminal with enough buffer for security and a connecting flight — not a rushed best-case estimate.",
      "This route also covers a less obvious case: a traveler who lands at the wrong airport relative to where they're actually headed, or a last-minute itinerary change that swaps airports after a booking is already made. One call gets a direct transfer moving, with real-time tracking on both ends.",
    ],
    highlights: [
      { title: "About 35-40 Minutes", desc: "A direct transfer between BWI and DCA, timed around the Baltimore-Washington corridor's traffic patterns." },
      { title: "Flight Tracking on Both Ends", desc: "Your pickup at the first airport adjusts to your actual arrival; drop-off timing accounts for your next flight's check-in." },
      { title: "Works Either Direction", desc: "BWI to DCA or DCA to BWI, booked the same way, at the same flat rate structure." },
      { title: "Built-In Connection Buffer", desc: "We plan drop-off timing around realistic security and gate-walk time, not a bare-minimum estimate." },
      { title: "Room for Luggage", desc: "SUVs available for connecting travelers with a full set of checked bags and carry-ons." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you ride, with gratuity, tolls and parking disclosed up front." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Airport Pages",
        places: [
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "DCA Airport Limo", to: "/dca-airport-limo" },
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
          { label: "DCA to Washington DC", to: "/dca-to-washington-dc" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How long does a transfer between BWI and DCA take?", a: "About 35 to 40 minutes depending on traffic and the exact route, roughly 35 to 40 miles through the Baltimore-Washington corridor." },
      { q: "Can you time my drop-off to make a connecting flight?", a: "Yes — tell us your departure flight when you book, and we plan the drop-off with a realistic buffer for security and the walk to your gate, not a bare-minimum estimate." },
      { q: "What if my inbound flight is delayed?", a: "We track it and adjust the pickup automatically, with complimentary wait time included, the same as any other airport pickup." },
      { q: "Do you run this transfer in both directions?", a: "Yes — BWI to DCA and DCA to BWI, booked the same way at the same flat-rate structure." },
      { q: "How much does it cost?", a: "Every trip is a flat, transparent rate confirmed before you book — call (877) 609-1919 or request a quote online." },
    ],
    ctaTitle: "Book Your BWI-DCA Airport Transfer",
    ctaSubtitle: "One flat rate, flight-tracked on both ends, in either direction. Call (877) 609-1919.",
  },

  // --------------------------------------------- THEMATIC: RED-EYE / EARLY
  "bwi-red-eye-early-morning-car-service": {
    metaTitle: "BWI Red-Eye & Early Morning Car Service | 92 Limo",
    metaDescription:
      "Pre-dawn departures and red-eye arrivals at BWI, covered reliably — scheduled chauffeurs, not an app gamble. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "BWI MARSHALL AIRPORT",
    h1: "BWI Red-Eye & Early Morning Car Service",
    subtitle:
      "The first departure banks leave BWI around 5 to 6 a.m., and red-eyes land in the middle of the night — exactly when rideshare supply is thinnest. A scheduled chauffeur is committed to your pickup regardless of the hour.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan arriving for a pre-dawn pickup ahead of an early-morning BWI departure",
    highlightsHeading: "Why Early and Late Flyers Book Ahead",
    intro: [
      "Between roughly 3 and 6 a.m., on-demand driver supply around BWI thins out considerably — fewer drivers are working that window, and the ones who are can see surge pricing on a request made from a quiet suburban address at that hour. A pre-booked chauffeur reservation sidesteps the entire problem: your pickup is confirmed the night before, at a flat rate agreed in advance, regardless of how thin the overnight market happens to be that particular morning.",
      "Red-eye arrivals work the same way in reverse. Landing at BWI at 1 or 2 a.m. after a cross-country flight is not the moment to discover that nobody's working the app near your home address — a scheduled chauffeur is simply there, tracking your actual landing time (red-eyes run late more often than daytime flights), with the same complimentary wait time as any other arrival.",
      "This is one of our most reliable booking categories precisely because the stakes of a no-show are highest in the dark: an early-morning pickup that doesn't show up can mean a missed flight, and a red-eye pickup that doesn't show up means standing at an empty curb at 2 a.m. We treat both with the same priority as a daytime booking, not an afterthought.",
    ],
    highlights: [
      { title: "Confirmed the Night Before", desc: "A flat-rate reservation locked in ahead of time, immune to overnight surge pricing or thin driver supply." },
      { title: "Covers 24 Hours, Every Day", desc: "Pre-dawn departures and middle-of-the-night arrivals get the same priority as any daytime booking." },
      { title: "Flight Tracking Included", desc: "Red-eyes that land late don't cost you anything — your pickup adjusts automatically." },
      { title: "No App-Gamble Mornings", desc: "No checking a rideshare app at 4 a.m. hoping a driver is nearby and not charging surge." },
      { title: "Complimentary Wait Time", desc: "45 minutes domestic, 60 minutes international, timed from actual touchdown, any hour of the night." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you ride, with gratuity, tolls and parking disclosed up front — no overnight surcharge." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related BWI Pages",
        places: [
          { label: "BWI 24 Hour Car Service", to: "/bwi-24-hour-airport-car-service" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "BWI Southwest Airlines Car Service", to: "/bwi-southwest-airlines-terminal" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Do you really run pickups at 3 or 4 a.m.?", a: "Yes — pre-dawn departures are one of our most common booking types, confirmed the night before so there's no scramble in the morning." },
      { q: "Is there a surcharge for overnight or red-eye pickups?", a: "No separate overnight surcharge. Your rate is the same flat, transparent quote as any other BWI trip, confirmed before you book." },
      { q: "What if my red-eye flight lands later than scheduled?", a: "We track it and adjust your pickup automatically, with complimentary wait time included — the same policy as any arrival, any hour." },
      { q: "How far ahead should I book an early-morning pickup?", a: "As early as you can, especially around holidays — but we also take same-day and last-minute requests when a vehicle is available. Call (877) 609-1919 any time." },
      { q: "Is this more reliable than requesting a rideshare that morning?", a: "That's the entire point of booking ahead — your chauffeur is committed to your reservation the night before, independent of how thin overnight driver supply happens to be." },
    ],
    ctaTitle: "Book Your Early-Morning or Red-Eye BWI Ride",
    ctaSubtitle: "Confirmed the night before, flat-rated, immune to overnight surge pricing. Call (877) 609-1919.",
  },

  // ===================================================== ROUTE PAGES =====
  "bwi-to-glen-burnie": {
    metaTitle: "BWI to Glen Burnie, MD Car Service | 92 Limo",
    metaDescription:
      "BWI Airport to Glen Burnie, MD car service — one of our shortest, most frequent transfers. Flat rates, flight tracking, 24/7. Call (877) 609-1919.",
    eyebrow: "BWI → GLEN BURNIE, MD",
    h1: "BWI to Glen Burnie, MD Car Service",
    subtitle:
      "A quick, frequently-booked run for 92 Limo Service — Glen Burnie residents and Arundel Mills-area travelers get a flat-rate, flight-tracked ride from BWI in about 10 minutes.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan for BWI Airport to Glen Burnie, MD car service — 92 Limo Service",
    highlightsHeading: "Why Glen Burnie Trusts 92 Limo Service",
    intro: [
      "Glen Burnie sits just a few miles north of BWI Marshall off MD-170 — about 10 minutes and 5 miles, one of the shortest transfers anywhere in our service area. Its mix of longtime Anne Arundel County residents, Arundel Mills shoppers and visitors, and Fort Meade-adjacent commuters makes it one of the airport's most consistent short-haul runs.",
      "Because the drive is so short, Glen Burnie is also one of the easiest pickups to cover on short notice — a chauffeur working the BWI corridor can typically reach a Glen Burnie address quickly, which matters for an early-morning departure or a same-day request. Every arrival includes real-time flight tracking, so your pickup adjusts automatically if a flight lands early or late, with 45 minutes of complimentary wait on domestic arrivals and 60 on international.",
      "Whether it's a solo business trip, a family heading out on vacation, or a group routed through Arundel Mills for a weekend in town, every fare is quoted as one flat, transparent rate before you ride — gratuity, tolls and parking disclosed up front, no meter and no surge.",
    ],
    highlights: [
      { title: "About 10 Minutes from BWI", desc: "One of the shortest, most convenient transfers in our entire service area, via MD-170." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Arundel Mills & Fort Meade Proximity", desc: "Regular pickups for Arundel Mills visitors and Fort Meade-adjacent commuters alike." },
      { title: "Fast Same-Day Availability", desc: "The short drive makes last-minute and early-morning Glen Burnie bookings easier to cover." },
      { title: "Family & Group Options", desc: "SUVs and Sprinter vans available for families and groups traveling together." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
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
          { label: "Glen Burnie Limo Service", to: "/glen-burnie-limo-service" },
          { label: "BWI to Severn", to: "/bwi-to-severn" },
          { label: "BWI to Linthicum", to: "/bwi-to-linthicum" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Glen Burnie from BWI Airport?", a: "About 10 minutes and 5 miles via MD-170 — one of the shortest transfers anywhere in our service area." },
      { q: "Can you handle a same-day or early-morning booking from Glen Burnie?", a: "Yes. Because the drive is so short, we can usually accommodate same-day requests and pre-dawn departures with little lead time." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included — 45 minutes domestic, 60 minutes international." },
      { q: "Do you serve Arundel Mills as well as residential Glen Burnie?", a: "Yes — Arundel Mills shoppers and visitors are a regular part of this route alongside residential Glen Burnie pickups." },
      { q: "How much does BWI to Glen Burnie car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online, with gratuity, tolls and parking disclosed before you confirm." },
    ],
    ctaTitle: "Book Your BWI to Glen Burnie Transfer",
    ctaSubtitle: "One of the shortest runs in our territory, flat-rated and flight-tracked. Call (877) 609-1919.",
  },

  "bwi-to-linthicum": {
    metaTitle: "BWI to Linthicum, MD Car Service | 92 Limo",
    metaDescription:
      "BWI Airport to Linthicum, MD car service — the closest residential community to the airport. Flat rates, flight tracking, 24/7. (877) 609-1919.",
    eyebrow: "BWI → LINTHICUM, MD",
    h1: "BWI to Linthicum, MD Car Service",
    subtitle:
      "Linthicum sits closer to BWI Marshall than almost anywhere else in our territory — about 6 minutes door to door, flat-rated and flight-tracked.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan for BWI Airport to Linthicum, MD car service — 92 Limo Service",
    highlightsHeading: "Why Linthicum Residents Book 92 Limo Service",
    intro: [
      "Linthicum is about as close to BWI Marshall as a residential community gets — roughly 2 miles and 6 minutes via Camp Meade Road and Nursery Road, right along the airport's northern edge. Many Linthicum residents chose the area specifically for that proximity, whether for frequent business travel or simply the convenience of a short ride home after a long flight.",
      "That short distance makes Linthicum one of our easiest same-day and early-morning bookings — a chauffeur can be at your door quickly, which matters when a flight is booked last-minute or departs before sunrise. Every booking still includes full flight tracking and complimentary wait time, the same standard as a longer transfer, just with a much shorter drive to get there.",
      "Whether you're a frequent flyer who picked Linthicum for exactly this reason, or hosting a visitor who's landing nearby, every fare is one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 6 Minutes from BWI", desc: "One of the shortest transfers we offer anywhere, via Camp Meade Road and Nursery Road." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Fastest Same-Day Availability", desc: "The shortest drive in our territory means the easiest last-minute booking to cover." },
      { title: "Popular With Frequent Flyers", desc: "Many Linthicum residents chose the area specifically for its proximity to BWI." },
      { title: "Room for Groups", desc: "SUVs and Sprinter vans available for families or groups traveling together." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Midsize SUV — Lincoln Aviator",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Linthicum, MD Limo Service", to: "/limo-service-linthicum-md" },
          { label: "BWI to Glen Burnie", to: "/bwi-to-glen-burnie" },
          { label: "BWI to Hanover, MD", to: "/bwi-to-hanover-md" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How close is Linthicum to BWI Airport?", a: "About 6 minutes and 2 miles via Camp Meade Road and Nursery Road — one of the shortest transfers we offer." },
      { q: "Is same-day booking easier because the drive is so short?", a: "Yes — a chauffeur working the BWI corridor can typically reach a Linthicum address quickly, which helps with last-minute and early-morning requests." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with 45 minutes of complimentary wait on domestic arrivals and 60 on international." },
      { q: "Do you serve both residential Linthicum and nearby business addresses?", a: "Yes — we cover residential pickups as well as the office and hotel properties along the airport's northern edge." },
      { q: "How much does BWI to Linthicum car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Linthicum Transfer",
    ctaSubtitle: "One of the shortest rides in our territory, flat-rated and flight-tracked. Call (877) 609-1919.",
  },

  "bwi-to-hanover-md": {
    metaTitle: "BWI to Hanover, MD Car Service | 92 Limo Service",
    metaDescription:
      "BWI Airport to Hanover, MD car service — Arundel Mills, Arundel Preserve and Live! Casino covered. Flat rates, flight tracking, 24/7. (877) 609-1919.",
    eyebrow: "BWI → HANOVER, MD",
    h1: "BWI to Hanover, MD Car Service",
    subtitle:
      "Hanover's mix of Arundel Mills shoppers, Live! Casino & Hotel guests, and Arundel Preserve residents gets a flat-rate, flight-tracked ride from BWI in about 10 minutes.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured SUV for BWI Airport to Hanover, MD car service — 92 Limo Service",
    highlightsHeading: "Why Hanover Travelers Book 92 Limo Service",
    intro: [
      "Hanover, Maryland — not to be confused with the Pennsylvania town of the same name we also serve further north — sits just off MD-100 and MD-713, about 10 minutes and 5 miles from BWI Marshall. It's one of the region's busiest mixed-use corridors, home to Arundel Mills mall, Live! Casino & Hotel, and the newer Arundel Preserve residential and office development, which means our Hanover pickups range from weekend casino trips to business travelers staying at one of the corridor's hotels.",
      "Because so many Hanover trips involve a hotel or casino pickup rather than a private residence, our chauffeurs know the specific loading areas and valet patterns at Live! Casino & Hotel and the Arundel Mills properties, so there's no circling to find the right entrance. Every arrival includes real-time flight tracking and complimentary wait time, the same standard as any BWI transfer.",
      "Groups headed to or from a Live! Casino weekend, a business trip based out of one of the corridor's hotels, or an Arundel Preserve residence all get the same flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 10 Minutes from BWI", desc: "A short, direct run via MD-100 and MD-713 to the Arundel Mills/Hanover corridor." },
      { title: "Live! Casino & Hotel Pickups", desc: "Chauffeurs know the property's loading areas — no circling to find the right entrance." },
      { title: "Arundel Mills & Arundel Preserve Coverage", desc: "Regular pickups across the corridor's retail, hotel and residential developments." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Group-Friendly Vehicles", desc: "SUVs and Sprinter vans for casino weekends and business groups traveling together." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
    ],
    vehicles: [
      "Premium SUV — Lincoln Navigator",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Hanover, MD Limo Service", to: "/limo-service-hanover-md" },
          { label: "BWI to Jessup", to: "/bwi-to-jessup" },
          { label: "BWI to Severn", to: "/bwi-to-severn" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Hanover, MD from BWI Airport?", a: "About 10 minutes and 5 miles via MD-100 and MD-713 — a short, direct run to the Arundel Mills/Hanover corridor." },
      { q: "Do you pick up at Live! Casino & Hotel?", a: "Yes — regularly. Our chauffeurs know the property's loading and valet areas, so pickup is quick and direct." },
      { q: "Is this the same Hanover you serve in Pennsylvania?", a: "No — this page covers Hanover, Maryland near Arundel Mills. We also separately serve Hanover, PA near Gettysburg and York." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "How much does BWI to Hanover, MD car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Hanover, MD Transfer",
    ctaSubtitle: "Flat-rated, flight-tracked pickups across the Arundel Mills corridor. Call (877) 609-1919.",
  },

  "bwi-to-severna-park": {
    metaTitle: "BWI to Severna Park, MD Car Service | 92 Limo",
    metaDescription:
      "BWI Airport to Severna Park, MD car service — flat rates, flight tracking, professional chauffeurs, 24/7. Call (877) 609-1919 for a quote.",
    eyebrow: "BWI → SEVERNA PARK, MD",
    h1: "BWI to Severna Park, MD Car Service",
    subtitle:
      "A comfortable, reliable transfer between BWI Marshall and Severna Park's Broadneck Peninsula communities — about 20 minutes, flat-rated and flight-tracked.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured SUV for BWI Airport to Severna Park, MD car service — 92 Limo Service",
    highlightsHeading: "Why Severna Park Trusts 92 Limo Service",
    intro: [
      "Severna Park sits on the Broadneck Peninsula between the Severn and Magothy Rivers, about 20 minutes and 11 miles from BWI Marshall via I-97 and MD-648. It's one of Anne Arundel County's most established residential communities, and a meaningful share of our Severna Park bookings are business travelers who value a predictable, professional ride over a rideshare roll of the dice for a trip that starts or ends their work week.",
      "Severna Park's neighborhoods — from the Round Bay waterfront to the shops along Ritchie Highway — are well known to our Laurel-based chauffeurs, so pickup addresses are never a guessing game. Every BWI booking includes real-time flight tracking, so an early landing or a delay never costs you a ride, with generous complimentary wait time built into every arrival.",
      "Whether it's a solo business trip, a family heading out on vacation, or guests arriving for an event at one of the area's waterfront venues, every fare is one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 20 Minutes from BWI", desc: "A direct run via I-97 and MD-648 to the Broadneck Peninsula." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Local Neighborhood Knowledge", desc: "Chauffeurs familiar with Round Bay, Ritchie Highway and the surrounding Severna Park communities." },
      { title: "Professional, Reliable Chauffeurs", desc: "A consistent, background-checked driver standard instead of a rideshare gamble." },
      { title: "Family & Event Options", desc: "SUVs and Sprinter vans for families, groups, and waterfront event guests." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
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
          { label: "Severna Park Limo Service", to: "/severna-park-limo-service" },
          { label: "BWI to Pasadena, MD", to: "/bwi-to-pasadena-md" },
          { label: "BWI to Annapolis", to: "/bwi-to-annapolis" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Severna Park from BWI Airport?", a: "About 20 minutes and 11 miles via I-97 and MD-648." },
      { q: "Do you know the Severna Park area well, or just BWI?", a: "Both — our chauffeurs regularly cover Severna Park's neighborhoods, from Round Bay to Ritchie Highway, so pickup addresses are never a guessing game." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with 45 minutes of complimentary wait on domestic arrivals and 60 on international." },
      { q: "Can you handle a group headed to a waterfront event?", a: "Yes — SUVs and Sprinter vans are available for groups and event guests traveling together." },
      { q: "How much does BWI to Severna Park car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Severna Park Transfer",
    ctaSubtitle: "A reliable, flat-rated ride to the Broadneck Peninsula, flight-tracked both ways. Call (877) 609-1919.",
  },

  "bwi-to-pasadena-md": {
    metaTitle: "BWI to Pasadena, MD Car Service | 92 Limo Service",
    metaDescription:
      "BWI Airport to Pasadena, MD car service — flat rates, flight tracking, professional chauffeurs, 24/7. Call (877) 609-1919 for a quote.",
    eyebrow: "BWI → PASADENA, MD",
    h1: "BWI to Pasadena, MD Car Service",
    subtitle:
      "A dependable transfer between BWI Marshall and Pasadena's Mountain Road and Lake Shore communities — about 18 minutes, flat-rated and flight-tracked.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured SUV for BWI Airport to Pasadena, MD car service — 92 Limo Service",
    highlightsHeading: "Why Pasadena Trusts 92 Limo Service",
    intro: [
      "Pasadena stretches along the Patapsco Neck and Mountain Road corridor between Glen Burnie and the Chesapeake Bay, about 18 minutes and 10 miles from BWI Marshall via MD-10. It's a largely residential, waterfront-adjacent community, and most of our Pasadena bookings are families heading out on vacation or business travelers commuting through BWI on a regular schedule.",
      "Because Pasadena spreads out along Mountain Road and Lake Shore with a mix of waterfront communities, our chauffeurs plan the route around the specific neighborhood rather than treating it as one generic drop-off zone. Every BWI arrival includes real-time flight tracking and complimentary wait time, so a delay or an early landing never costs you a ride.",
      "Whether it's a family packing for a week away, a solo business traveler, or a group heading out together, every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 18 Minutes from BWI", desc: "A direct run via MD-10 to the Mountain Road and Lake Shore communities." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Familiar With Pasadena's Waterfront Neighborhoods", desc: "Chauffeurs route around the specific community, not a generic drop-off zone." },
      { title: "Reliable for Regular Commuters", desc: "A consistent chauffeur standard for travelers who fly through BWI on a regular schedule." },
      { title: "Family & Group Options", desc: "SUVs and Sprinter vans for families and groups traveling together." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
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
          { label: "Pasadena, MD Limo Service", to: "/limo-service-pasadena-md" },
          { label: "BWI to Severna Park", to: "/bwi-to-severna-park" },
          { label: "BWI to Glen Burnie", to: "/bwi-to-glen-burnie" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Pasadena, MD from BWI Airport?", a: "About 18 minutes and 10 miles via MD-10." },
      { q: "Do you serve all of Pasadena's neighborhoods, including along Mountain Road?", a: "Yes — Pasadena spreads along Mountain Road and Lake Shore, and our chauffeurs route around the specific community rather than one generic drop-off." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "Can you handle a family trip with a lot of luggage?", a: "Yes — SUVs and Sprinter vans are available with ample luggage space for families and groups." },
      { q: "How much does BWI to Pasadena, MD car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Pasadena, MD Transfer",
    ctaSubtitle: "A dependable, flat-rated ride to Pasadena's waterfront communities. Call (877) 609-1919.",
  },

  "bwi-to-catonsville": {
    metaTitle: "BWI to Catonsville, MD Car Service | 92 Limo",
    metaDescription:
      "BWI Airport to Catonsville, MD car service — UMBC, historic Frederick Road corridor covered. Flat rates, flight tracking, 24/7. (877) 609-1919.",
    eyebrow: "BWI → CATONSVILLE, MD",
    h1: "BWI to Catonsville, MD Car Service",
    subtitle:
      "Catonsville's UMBC community, Frederick Road corridor, and Baltimore County residents get a flat-rate, flight-tracked ride from BWI in about 20 to 25 minutes.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan for BWI Airport to Catonsville, MD car service — 92 Limo Service",
    highlightsHeading: "Why Catonsville Travelers Book 92 Limo Service",
    intro: [
      "Catonsville sits in Baltimore County just west of the city, about 20 to 25 minutes and 13 miles from BWI Marshall via I-695. It's home to the University of Maryland, Baltimore County (UMBC) and a well-preserved historic Frederick Road business district, which means our Catonsville pickups range from visiting parents and prospective students to residents of the neighborhood's older, walkable streets.",
      "UMBC-related travel is a regular part of this route — move-in weekends, parents' visits, commencement, and faculty or visiting-researcher travel through BWI. Chauffeurs familiar with campus access points and the surrounding streets make these pickups and drop-offs straightforward, rather than a slow search for the right entrance.",
      "Every BWI booking, whether tied to the university or not, includes real-time flight tracking and complimentary wait time, and every fare is one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 20-25 Minutes from BWI", desc: "A direct run via I-695 to Catonsville and the surrounding Baltimore County communities." },
      { title: "UMBC Pickups & Drop-Offs", desc: "Familiar with campus access points for move-in weekends, visits and commencement travel." },
      { title: "Historic Frederick Road Corridor", desc: "Regular service to Catonsville's walkable historic business district and residential streets." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Family & Student Group Options", desc: "SUVs and Sprinter vans for move-in weekends and family visits." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Catonsville Limo Service", to: "/catonsville-limo-service" },
          { label: "BWI to Ellicott City", to: "/bwi-to-ellicott-city" },
          { label: "BWI to Towson", to: "/bwi-to-towson" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Catonsville from BWI Airport?", a: "About 20 to 25 minutes and 13 miles via I-695." },
      { q: "Do you handle UMBC move-in weekends and parent visits?", a: "Yes — this is a regular part of the route, and our chauffeurs know the campus access points for a straightforward pickup or drop-off." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "Can you handle a family's luggage for a move-in weekend?", a: "Yes — SUVs and Sprinter vans are available with ample luggage space for move-in trips and family visits." },
      { q: "How much does BWI to Catonsville car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Catonsville Transfer",
    ctaSubtitle: "Flat-rated, flight-tracked service to Catonsville and UMBC. Call (877) 609-1919.",
  },

  "bwi-to-elkridge": {
    metaTitle: "BWI to Elkridge, MD Car Service | 92 Limo Service",
    metaDescription:
      "BWI Airport to Elkridge, MD car service — a quick run along US-1 and I-95. Flat rates, flight tracking, 24/7. Call (877) 609-1919.",
    eyebrow: "BWI → ELKRIDGE, MD",
    h1: "BWI to Elkridge, MD Car Service",
    subtitle:
      "Elkridge's growing business parks and residential communities get a flat-rate, flight-tracked ride from BWI in about 14 minutes.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan for BWI Airport to Elkridge, MD car service — 92 Limo Service",
    highlightsHeading: "Why Elkridge Trusts 92 Limo Service",
    intro: [
      "Elkridge sits along the Patapsco River between Columbia and Baltimore, about 14 minutes and 8 miles from BWI Marshall via Montgomery Road and US-1. It's one of Howard County's fastest-growing areas for both business parks and new residential development, which keeps this route busy with a steady mix of corporate travel and family trips.",
      "A number of national and regional companies have offices along the Elkridge business corridor, and we regularly coordinate airport pickups for visiting employees and clients alongside our standard residential bookings. Every arrival includes real-time flight tracking, so a delayed or early flight never costs a traveler their ride, with complimentary wait time built into every pickup.",
      "Whether it's a corporate visitor, a family heading out on vacation, or a regular business commuter, every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 14 Minutes from BWI", desc: "A quick, direct run via Montgomery Road and US-1." },
      { title: "Business Park Coordination", desc: "Regular pickups for visiting employees and clients at Elkridge's corporate offices." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Fast Same-Day Availability", desc: "The short drive makes last-minute Elkridge bookings easier to cover." },
      { title: "Family & Corporate Options", desc: "Sedans for business travel, SUVs and Sprinter vans for families and groups." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Elkridge Limo Service", to: "/elkridge-limo-service" },
          { label: "BWI to Columbia", to: "/bwi-to-columbia" },
          { label: "BWI to Jessup", to: "/bwi-to-jessup" },
          { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Elkridge from BWI Airport?", a: "About 14 minutes and 8 miles via Montgomery Road and US-1." },
      { q: "Can you coordinate pickups for visiting employees at an Elkridge office?", a: "Yes — this is a regular part of the route. Call (877) 609-1919 to set up a corporate pickup or a standing account." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "Is same-day booking realistic for Elkridge?", a: "Often, yes — the short drive makes last-minute requests easier to cover than longer routes elsewhere in the region." },
      { q: "How much does BWI to Elkridge car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Elkridge Transfer",
    ctaSubtitle: "A quick, flat-rated ride for business and family travel alike. Call (877) 609-1919.",
  },

  "bwi-to-jessup": {
    metaTitle: "BWI to Jessup, MD Car Service | 92 Limo Service",
    metaDescription:
      "BWI Airport to Jessup, MD car service — one of the shortest, most frequent runs in our territory. Flat rates, flight tracking, 24/7. (877) 609-1919.",
    eyebrow: "BWI → JESSUP, MD",
    h1: "BWI to Jessup, MD Car Service",
    subtitle:
      "Jessup's warehouses, distribution centers and residential pockets get a flat-rate, flight-tracked ride from BWI in about 12 minutes — one of our most frequent short-haul routes.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan for BWI Airport to Jessup, MD car service — 92 Limo Service",
    highlightsHeading: "Why Jessup Trusts 92 Limo Service",
    intro: [
      "Jessup sits right between BWI Marshall and Laurel — about 12 minutes and 6 miles via MD-175 and Dorsey Run Road — which makes it one of our most convenient and frequently booked routes, and one of the closest to our own Laurel home base. Jessup's mix of logistics and distribution businesses, light industrial parks, and residential neighborhoods keeps this run busy with both corporate and personal travel.",
      "Because we're based so close by, a Jessup pickup rarely requires much lead time — same-day and early-morning requests are some of the easiest for us to cover anywhere in our service area. Every arrival includes real-time flight tracking and complimentary wait time, so a delayed flight never leaves anyone stranded at the curb.",
      "Whether it's a logistics-industry business traveler, a family trip, or a quick personal errand connected to a flight, every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 12 Minutes from BWI", desc: "One of the shortest, most convenient transfers in our entire service area, via MD-175." },
      { title: "Closest to Our Laurel Base", desc: "Minimal lead time needed — easy same-day and early-morning availability." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Business & Logistics-Corridor Travel", desc: "Regular pickups for Jessup's distribution and light-industrial business community." },
      { title: "Family & Group Options", desc: "SUVs and Sprinter vans for families and groups traveling together." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Midsize SUV — Lincoln Aviator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Jessup, MD Limo Service", to: "/jessup-md-limo-service" },
          { label: "BWI to Elkridge", to: "/bwi-to-elkridge" },
          { label: "BWI to Hanover, MD", to: "/bwi-to-hanover-md" },
          { label: "Laurel, MD Limo Service", to: "/laurel-md-limo-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Jessup from BWI Airport?", a: "About 12 minutes and 6 miles via MD-175 and Dorsey Run Road — one of the shortest transfers in our territory." },
      { q: "Is Jessup close to your home base?", a: "Yes — Jessup sits right between BWI and our Laurel headquarters, which makes same-day and early-morning bookings especially easy to cover." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "Do you serve Jessup's business and logistics corridor?", a: "Yes — regular pickups and drop-offs for Jessup's distribution, warehouse, and light-industrial business community." },
      { q: "How much does BWI to Jessup car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Jessup Transfer",
    ctaSubtitle: "One of our quickest, most convenient runs — flat-rated and flight-tracked. Call (877) 609-1919.",
  },

  "bwi-to-severn": {
    metaTitle: "BWI to Severn, MD Car Service | 92 Limo Service",
    metaDescription:
      "BWI Airport to Severn, MD car service — close to Fort Meade, flat rates, flight tracking, 24/7. Call (877) 609-1919 for a quote.",
    eyebrow: "BWI → SEVERN, MD",
    h1: "BWI to Severn, MD Car Service",
    subtitle:
      "Severn's Fort Meade-adjacent neighborhoods and MARC-line communities get a flat-rate, flight-tracked ride from BWI in about 12 minutes.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan for BWI Airport to Severn, MD car service — 92 Limo Service",
    highlightsHeading: "Why Severn Trusts 92 Limo Service",
    intro: [
      "Severn sits just south of BWI Marshall off MD-170, about 12 minutes and 6 miles away, and shares a border with Fort Meade — which means a meaningful share of our Severn pickups are military families, contractors and personnel connected to the base, alongside residential and MARC-commuter travel.",
      "For a Fort Meade-adjacent address, a licensed, background-checked chauffeur is often preferred over an unfamiliar rideshare driver, and we treat these pickups with the same professionalism as any corporate account. Every BWI booking includes real-time flight tracking, so a delayed flight never costs a Severn traveler their ride, with generous complimentary wait time built in.",
      "Whether it's a military family, a MARC commuter connecting through BWI, or a residential trip, every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 12 Minutes from BWI", desc: "A short, direct run via MD-170 to Severn and the surrounding communities." },
      { title: "Fort Meade-Adjacent Pickups", desc: "A licensed, background-checked chauffeur for military families and contractors near the base." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "MARC Commuter Familiarity", desc: "Regular pickups for travelers connecting through BWI near the Odenton/Severn rail corridor." },
      { title: "Family & Group Options", desc: "SUVs and Sprinter vans for families and groups traveling together." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
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
          { label: "Severn, MD Limo Service", to: "/limo-service-severn-md" },
          { label: "BWI to Fort Meade", to: "/bwi-to-fort-meade" },
          { label: "BWI to Odenton", to: "/bwi-to-odenton" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Severn from BWI Airport?", a: "About 12 minutes and 6 miles via MD-170." },
      { q: "Do you serve Fort Meade personnel traveling through BWI from Severn?", a: "Yes. We regularly provide a licensed, background-checked chauffeur for military and contractor travelers near Fort Meade, in place of an unfamiliar rideshare driver." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "Can you pick up near the Severn/Odenton MARC corridor?", a: "Yes — this is a regular part of the route for travelers connecting through BWI." },
      { q: "How much does BWI to Severn car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Severn Transfer",
    ctaSubtitle: "A quick, flat-rated ride, trusted near Fort Meade. Call (877) 609-1919.",
  },

  "bwi-to-gambrills": {
    metaTitle: "BWI to Gambrills, MD Car Service | 92 Limo Service",
    metaDescription:
      "BWI Airport to Gambrills, MD car service — Waugh Chapel area covered. Flat rates, flight tracking, 24/7. Call (877) 609-1919 for a quote.",
    eyebrow: "BWI → GAMBRILLS, MD",
    h1: "BWI to Gambrills, MD Car Service",
    subtitle:
      "A smooth, dependable ride between BWI Marshall and Gambrills' Waugh Chapel community — about 18 minutes, flat-rated and flight-tracked.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured SUV for BWI Airport to Gambrills, MD car service — 92 Limo Service",
    highlightsHeading: "Why Gambrills Trusts 92 Limo Service",
    intro: [
      "Gambrills sits south of BWI Marshall off MD-170, about 18 minutes and 10 miles away, anchored by the Waugh Chapel Towne Centre shopping and dining district and a steadily growing base of newer residential developments. Most of our Gambrills bookings are families and regular business travelers from this part of Anne Arundel County.",
      "Because Gambrills has grown quickly over the past decade, our chauffeurs stay current on the newer neighborhood layouts around Waugh Chapel rather than relying on an outdated map. Every BWI arrival includes real-time flight tracking and complimentary wait time, so a delayed or early flight never costs a Gambrills traveler their ride.",
      "Whether it's a family heading out on vacation, a business traveler commuting through BWI, or a group trip, every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 18 Minutes from BWI", desc: "A direct run via MD-170 to Gambrills and the Waugh Chapel area." },
      { title: "Current on New Development", desc: "Chauffeurs stay current on Gambrills' growing neighborhoods, not an outdated map." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Waugh Chapel Towne Centre Coverage", desc: "Regular pickups and drop-offs near the area's shopping and dining district." },
      { title: "Family & Group Options", desc: "SUVs and Sprinter vans for families and groups traveling together." },
      { title: "Flat Rate, Confirmed First", desc: "One transparent price before you ride — no metering, no surge." },
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
          { label: "Gambrills, MD Limo Service", to: "/limo-service-gambrills-md" },
          { label: "BWI to Crofton", to: "/bwi-to-crofton" },
          { label: "BWI to Odenton", to: "/bwi-to-odenton" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Gambrills from BWI Airport?", a: "About 18 minutes and 10 miles via MD-170." },
      { q: "Do you cover Gambrills' newer neighborhoods near Waugh Chapel?", a: "Yes — our chauffeurs stay current on the area's newer residential development, not just the older parts of town." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "Can you handle a family trip with a lot of luggage?", a: "Yes — SUVs and Sprinter vans are available with ample luggage space." },
      { q: "How much does BWI to Gambrills car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Gambrills Transfer",
    ctaSubtitle: "A smooth, flat-rated ride to the Waugh Chapel area. Call (877) 609-1919.",
  },

  "bwi-to-fort-meade": {
    metaTitle: "BWI to Fort Meade, MD Car Service | 92 Limo",
    metaDescription:
      "BWI Airport to Fort Meade car service — NSA, U.S. Cyber Command and DISA visitors and personnel. Flat rates, 24/7. Call (877) 609-1919.",
    eyebrow: "BWI → FORT MEADE, MD",
    h1: "BWI to Fort Meade, MD Car Service",
    subtitle:
      "A licensed, background-checked chauffeur for government, military and contractor travel between BWI Marshall and Fort Meade — about 16 minutes, flat-rated.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured sedan for BWI Airport to Fort Meade, MD car service — 92 Limo Service",
    highlightsHeading: "Why Fort Meade Travelers Book 92 Limo Service",
    intro: [
      "Fort Meade is one of the largest federal employers in the region — home to the National Security Agency, U.S. Cyber Command, the Defense Information Systems Agency and dozens of other commands and contractors — and sits about 16 minutes and 9 miles from BWI Marshall via MD-170 and Reece Road. Flying into BWI for TDY travel, a conference, or a contractor assignment and needing a ride to one of the installation's gate areas is one of the most consistent trip types we run, and one we're especially well positioned for given our own Laurel headquarters just up the road.",
      "For an address near a secure-adjacent gate, a licensed, background-checked chauffeur with a known company and a verifiable Maryland PSC carrier number is simply a better fit than an unfamiliar rideshare driver — a detail many Fort Meade visitors and the personnel who host them appreciate without needing to ask for it twice. We handle both individual travelers and standing corporate or agency accounts.",
      "Every BWI booking, whether headed to Fort Meade or elsewhere, includes real-time flight tracking and complimentary wait time, and every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 16 Minutes from BWI", desc: "A direct run via MD-170 and Reece Road to Fort Meade's gate areas." },
      { title: "Licensed & Background-Checked", desc: "A verifiable Maryland PSC carrier for travel near a secure-adjacent installation." },
      { title: "TDY & Contractor Travel", desc: "A regular, reliable option for personnel and contractors flying in for assignments or conferences." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Corporate & Agency Accounts", desc: "Consolidated billing and priority scheduling for standing travel arrangements." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you ride, with gratuity, tolls and parking disclosed up front." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Fort Meade, MD Limo Service", to: "/fort-meade-md-limo-service" },
          { label: "BWI to Odenton", to: "/bwi-to-odenton" },
          { label: "BWI to Severn", to: "/bwi-to-severn" },
          { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How far is Fort Meade from BWI Airport?", a: "About 16 minutes and 9 miles via MD-170 and Reece Road." },
      { q: "Can you pick up personnel or contractors near a secure gate?", a: "Yes — we provide a licensed, background-checked chauffeur with a verifiable Maryland PSC carrier number, suited to pickups near secure-adjacent addresses." },
      { q: "Do you support TDY or conference travel for Fort Meade commands?", a: "Yes — this is a regular trip type for us. Call (877) 609-1919 to set up individual trips or a standing account." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "How much does BWI to Fort Meade car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Fort Meade Transfer",
    ctaSubtitle: "A licensed, background-checked chauffeur for government and contractor travel. Call (877) 609-1919.",
  },

  "bwi-to-national-harbor": {
    metaTitle: "BWI to National Harbor Car Service | 92 Limo",
    metaDescription:
      "BWI Airport to National Harbor car service — Gaylord National, MGM National Harbor, conventions and events. Flat rates, 24/7. (877) 609-1919.",
    eyebrow: "BWI → NATIONAL HARBOR, MD",
    h1: "BWI to National Harbor Car Service",
    subtitle:
      "Flying in for a convention at Gaylord National, a night at MGM National Harbor, or a waterfront event — a direct, flat-rate transfer from BWI, about 40 minutes.",
    image: "/images/site/airport-pickup.webp",
    alt: "Chauffeured SUV for BWI Airport to National Harbor car service — 92 Limo Service",
    highlightsHeading: "Why Conference & Event Travelers Book This Route",
    intro: [
      "National Harbor, on the Potomac waterfront in Prince George's County, is the Gaylord National Resort & Convention Center's home turf and anchors one of the region's busiest event and entertainment destinations alongside MGM National Harbor and The Capital Wheel. It's about 40 minutes and 34 miles from BWI Marshall via MD-295 and the Capital Beltway — a straightforward if longer transfer, one we run often for conference attendees and event guests flying into BWI specifically for a weekend there.",
      "Convention travel has its own logistics: a large group arriving on staggered flights, luggage meant for a multi-day stay, and a drop-off that needs to land at the right Gaylord entrance rather than a general hotel loop. We coordinate group arrivals so travelers aren't left waiting on each other, and our chauffeurs know the resort's and casino's specific loading areas.",
      "Whether it's a single business traveler headed to a conference, a couple booked for a weekend at MGM National Harbor, or a full group flying in together, every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 40 Minutes from BWI", desc: "A direct run via MD-295 and the Capital Beltway to the National Harbor waterfront." },
      { title: "Gaylord National Convention Travel", desc: "Chauffeurs know the resort's specific loading and drop-off areas for conference attendees." },
      { title: "MGM National Harbor Pickups", desc: "Regular service to the casino and resort for weekend and event travel." },
      { title: "Group Arrival Coordination", desc: "We help stagger pickups for groups arriving on different flights, so nobody waits long." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you ride, with gratuity, tolls and parking disclosed up front." },
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
          { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
          { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
          { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How long does it take to get from BWI to National Harbor?", a: "About 40 minutes and 34 miles via MD-295 and the Capital Beltway, depending on traffic." },
      { q: "Can you handle a group arriving on different flights for a conference?", a: "Yes — we regularly coordinate staggered pickups so group members aren't left waiting on each other before heading to Gaylord National together or separately." },
      { q: "Do you drop off directly at Gaylord National or MGM National Harbor?", a: "Yes — our chauffeurs know each property's specific loading and valet areas." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "How much does BWI to National Harbor car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to National Harbor Transfer",
    ctaSubtitle: "Direct, flat-rated service for conventions, casino weekends and waterfront events. Call (877) 609-1919.",
  },

  "bwi-to-georgetown": {
    metaTitle: "BWI to Georgetown, DC Car Service | 92 Limo",
    metaDescription:
      "BWI Airport to Georgetown, DC car service — Georgetown University, M Street, the waterfront. Flat rates, flight tracking, 24/7. (877) 609-1919.",
    eyebrow: "BWI → GEORGETOWN, DC",
    h1: "BWI to Georgetown, DC Car Service",
    subtitle:
      "A direct transfer between BWI Marshall and Georgetown's university, M Street and waterfront districts — about 40 minutes, flat-rated and flight-tracked.",
    image: "/images/site/dc-skyline.webp",
    alt: "Chauffeured sedan for BWI Airport to Georgetown, Washington DC car service — 92 Limo Service",
    highlightsHeading: "Why Georgetown Travelers Book 92 Limo Service",
    intro: [
      "Georgetown is one of Washington, DC's oldest and busiest neighborhoods — Georgetown University, the M Street shopping and dining corridor, and the Potomac waterfront all draw a steady mix of university families, tourists and business travelers flying through BWI. It's about 40 minutes and 32 miles via MD-295 and the Whitehurst Freeway, a route our chauffeurs run often enough to know Georgetown's narrow, one-way streets and limited parking before arriving, not after circling the block.",
      "University-related trips are a regular part of this route — move-in weekends, parents' visits, and graduation travel all bring families through BWI headed straight for Georgetown's campus and surrounding residential streets. We also handle business travelers staying along the waterfront or M Street corridor who book a chauffeur specifically because Georgetown's streets make a rideshare pickup needlessly difficult.",
      "Whether it's a university family, a business traveler, or a weekend visitor, every fare is quoted as one flat, transparent rate — confirmed before you ride, with gratuity, tolls and parking disclosed up front.",
    ],
    highlights: [
      { title: "About 40 Minutes from BWI", desc: "A direct run via MD-295 and the Whitehurst Freeway into Georgetown." },
      { title: "Georgetown University Travel", desc: "Regular move-in, parent-visit and graduation trips, with chauffeurs familiar with campus access." },
      { title: "Comfortable With Georgetown's Streets", desc: "Narrow, one-way streets and limited parking are routine for our chauffeurs, not a surprise." },
      { title: "M Street & Waterfront Coverage", desc: "Regular pickups and drop-offs across Georgetown's shopping, dining and waterfront districts." },
      { title: "Flight Tracking Included", desc: "Your pickup adjusts automatically to your real arrival time, with complimentary wait built in." },
      { title: "Flat, Transparent Pricing", desc: "One confirmed rate before you ride, with gratuity, tolls and parking disclosed up front." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "First Class Sedan — BMW 7 Series",
      "Luxury SUV — Chevrolet Suburban",
    ],
    areas: [
      {
        region: "Related Pages",
        places: [
          { label: "Washington, DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "DCA to Georgetown", to: "/dca-to-georgetown" },
          { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
          { label: "BWI Airport Limo Service", to: "/bwi-airport-limo" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "How long does it take to get from BWI to Georgetown?", a: "About 40 minutes and 32 miles via MD-295 and the Whitehurst Freeway, depending on traffic." },
      { q: "Do you handle Georgetown University move-in and parent weekends?", a: "Yes — this is a regular part of the route, and our chauffeurs are familiar with the university's campus access points." },
      { q: "Is it hard to get a rideshare in Georgetown?", a: "Narrow, one-way streets and limited parking can make it inconvenient. A pre-booked chauffeur who already knows the neighborhood avoids that entirely." },
      { q: "What if my flight into BWI is delayed?", a: "Your chauffeur tracks the flight and adjusts the pickup automatically, with complimentary wait time included." },
      { q: "How much does BWI to Georgetown car service cost?", a: "Every trip is quoted as a flat rate before you ride — call (877) 609-1919 or book online." },
    ],
    ctaTitle: "Book Your BWI to Georgetown Transfer",
    ctaSubtitle: "A direct, flat-rated ride into Georgetown, flight-tracked and on time. Call (877) 609-1919.",
  },
};
