// 2026-11-02 content push, batch 2 niche landing pages — 3 new transactional
// pages for venues/institutions that had no dedicated page of their own
// (checked against all 463 existing LANDING_PAGE_SLUGS plus guides.js and
// every blogPosts*.js file first — Joint Base Andrews, American University,
// and MedStar Washington Hospital Center were previously only mentioned as
// highlight bullets inside OTHER pages, e.g. clinton-md-limo-service's
// "Joint Base Andrews Travel" highlight — this batch gives each its own,
// genuinely distinct, non-template page rather than duplicating those
// mentions). Same shape as MARYLAND_BATCH4_PAGES (see marylandPagesBatch4.js
// for the canonical field reference). Merged into LANDING_PAGES by
// src/lib/landingPages.js.
import { IMAGES } from "@/lib/data";

export const NICHE_LANDING_PAGES_BATCH2 = {
  "joint-base-andrews-transportation": {
    metaTitle: "Joint Base Andrews Transportation | 92 Limo Service",
    metaDescription:
      "Chauffeured car service to and from Joint Base Andrews — service members, families, retirements, homecomings. Call (877) 609-1919 to book.",
    eyebrow: "JOINT BASE ANDREWS · PRINCE GEORGE'S COUNTY, MD",
    h1: "Joint Base Andrews Transportation",
    subtitle:
      "Chauffeured sedans, SUVs and Sprinter vans for service members, civilian employees, contractors and visiting families traveling to and from Joint Base Andrews.",
    image: IMAGES.airportPickup,
    alt: "Chauffeured car service for Joint Base Andrews travelers — 92 Limo Service",
    highlightsHeading: "Why Military Families and Base Personnel Book With Us",
    intro: [
      "Joint Base Andrews sits in Prince George's County, Maryland, just outside Camp Springs and Clinton, and is best known as the home of Air Force One and the 89th Airlift Wing. For the service members, civilian employees, contractors, and families who actually travel to and from it, the base means a different kind of trip than a typical airport run or office commute: early-morning reporting times, gate access rules that are the traveler's own responsibility, and family events — retirements, homecomings, change-of-command ceremonies — that cluster a lot of out-of-town guests into one day.",
      "92 Limo Service, the trade name of 92 Transportation LLC, is based in nearby Laurel and licensed as Maryland PSC Carrier #6325. We've carried JBA-connected travelers for years as part of our regular Prince George's County service, and this page exists because the base deserved more than a mention on someone else's city page.",
    ],
    sections: [
      {
        heading: "Base Access Is Yours, the Ride There Is Ours",
        paragraphs: [
          "We don't manage gate access, badges, or base clearance — that's between you and the base, exactly as it should be. What we do is get you to the agreed meeting point outside the gate reliably and on time, or, where visitor policy permits, drive onto the base itself. Tell us which gate you'll use and what time you need to be there when you book, and your chauffeur plans the route and the Beltway/Branch Avenue timing around it.",
        ],
      },
      {
        heading: "PCS Moves, Deployments, and Early Reporting Times",
        paragraphs: [
          "Military travel doesn't run on a 9-to-5 schedule, and neither do we — our dispatch desk answers 24 hours a day. A permanent-change-of-station move, a pre-dawn deployment departure, or a late-night return all get the same flight-tracked, no-surprise pickup as any other airport transfer, whether that transfer starts or ends at JBA, BWI, DCA, or Dulles.",
          "For families managing a PCS move with kids in tow, a Lincoln Navigator or Chevrolet Suburban handles the extra car seats and luggage; for a larger family or a group of reporting service members traveling together, a Mercedes Sprinter keeps everyone in one vehicle instead of splitting across several cars.",
        ],
      },
      {
        heading: "Retirements, Homecomings, and Change-of-Command Ceremonies",
        paragraphs: [
          "Base ceremonies pull in out-of-town family who need airport pickups timed around a ceremony schedule, not the other way around — a grandparent flying into BWI for a retirement ceremony needs to actually make it to the ceremony, not just to a hotel. We plan these as one coordinated trip: airport pickup, hotel drop-off, and the ride to the base event itself, so a family isn't juggling separate rideshares for each leg of a day that already has enough moving parts.",
        ],
      },
      {
        heading: "The Rest of Prince George's County, Right Next Door",
        paragraphs: [
          "JBA sits close to Clinton, Camp Springs, Andrews Manor, and Upper Marlboro, and most trips that start or end at the base naturally connect to one of those areas — a hotel near the base, a restaurant in Clinton, or a home in Upper Marlboro. We serve all of them as part of the same booking, with no separate fare for crossing from the base into the surrounding community.",
        ],
      },
    ],
    highlights: [
      { title: "24/7 Dispatch", desc: "Early reporting times and late-night returns get the same answered-phone, on-time pickup at any hour." },
      { title: "Your Gate Access, Our Timing", desc: "You handle your own base clearance; we handle getting you to the agreed meeting point reliably and on schedule." },
      { title: "Flight-Tracked Airport Connections", desc: "PCS moves and deployments connect to BWI, DCA, or Dulles with real-time flight tracking and complimentary wait time." },
      { title: "Family Events Covered", desc: "Retirements, homecomings and change-of-command ceremonies planned as one coordinated trip, not separate rides." },
      { title: "Right-Sized Vehicles", desc: "Navigator and Suburban for families with car seats and bags; Sprinter for groups traveling together." },
      { title: "Licensed and Insured", desc: "Maryland PSC Carrier #6325, licensed background-checked chauffeurs and commercially insured company-owned vehicles." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Near the Base",
        places: [
          { label: "Clinton", to: "/clinton-md-limo-service" },
          { label: "Camp Springs" },
          { label: "Andrews Manor" },
          { label: "Upper Marlboro", to: "/upper-marlboro-limo-service" },
          { label: "Temple Hills" },
        ],
      },
      {
        region: "Airport Connections",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Government Contractor Car Service", to: "/government-contractor-car-service-maryland" },
          { label: "Fort Washington Limo Service", to: "/fort-washington-limo-service" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Can you drive onto Joint Base Andrews?", a: "Where visitor policy permits, yes — otherwise we meet you at the agreed point just outside the gate you specify. Base access and clearance are always the traveler's own responsibility; we handle the ride and the timing around it." },
      { q: "Do you serve early-morning reporting times and late-night arrivals?", a: "Yes. Our dispatch desk answers 24 hours a day, and early departures or late returns connected to deployments and PCS moves are booked the same way as any other trip." },
      { q: "Can you handle airport connections for a PCS move?", a: "Yes — we connect Joint Base Andrews to BWI, DCA, and Dulles with real-time flight tracking, so a delayed or early flight doesn't cost you a ride." },
      { q: "Do you provide transportation for retirement ceremonies or homecomings?", a: "Yes — we plan these as one coordinated trip covering the airport pickup for out-of-town family, the hotel, and the ride to the ceremony itself." },
      { q: "What vehicles can handle a larger family or group traveling together?", a: "A Chevrolet Suburban or Lincoln Navigator comfortably fits a family with car seats and luggage; a Mercedes Sprinter keeps a larger group or several reporting service members together in one vehicle." },
    ],
    ctaTitle: "Book Your Joint Base Andrews Transportation",
    ctaSubtitle: "Service members, families, and base-connected travel — reserve online or call (877) 609-1919, 24/7.",
  },

  "american-university-car-service": {
    metaTitle: "American University Car Service | 92 Limo Service",
    metaDescription:
      "Chauffeured car service for American University — move-in, parents' weekend, commencement, airport transfers. Call (877) 609-1919 to book.",
    eyebrow: "AMERICAN UNIVERSITY · WASHINGTON, DC",
    h1: "American University Car Service",
    subtitle:
      "Chauffeured sedans, SUVs and Sprinter vans for American University families and visitors — move-in, parents' weekend, commencement, and airport transfers to DCA, BWI, and Dulles.",
    image: IMAGES.airportPickup,
    alt: "Chauffeured car service for American University families and visitors — 92 Limo Service",
    highlightsHeading: "Why AU Families Book With Us",
    intro: [
      "American University sits in upper northwest Washington, DC, in the Tenleytown/Spring Valley area off Massachusetts Avenue — a part of the city built for residential streets, not a steady stream of move-in SUVs and parent visits. The campus is close to the Tenleytown-AU Metro station on the Red Line, which helps students day-to-day, but it does little for a family flying in with luggage, a carload of dorm essentials to move, or a tight commencement-day schedule to keep.",
      "92 Limo Service, the trade name of 92 Transportation LLC, provides chauffeured car service for AU families and visitors — door-to-door from the airport, hotel, or home straight to campus, with no parking search and no Metro transfer carrying bags.",
    ],
    sections: [
      {
        heading: "Move-In and Move-Out Without the Parking Scramble",
        paragraphs: [
          "Move-in and move-out days bring a wave of family vehicles into a campus with limited, tightly managed parking and loading zones. A chauffeured drop-off at the right residence hall entrance — timed to your assigned move-in window — skips the circling and the walk from an overflow lot entirely. For families flying in just for the weekend, a Sprinter or Suburban also solves the logistics of moving a dorm room's worth of belongings in one trip.",
        ],
      },
      {
        heading: "Parents' Weekend and Family Visits",
        paragraphs: [
          "Parents' weekend typically means juggling a campus event schedule, a dinner reservation somewhere in DC, and a hotel stay — often without a car, since most visiting families fly in rather than drive. We handle the full loop: airport pickup, hotel, campus for the scheduled events, and back out to dinner or the airport, as one planned day rather than a series of separate rides.",
        ],
      },
      {
        heading: "Commencement Day Logistics",
        paragraphs: [
          "Commencement at a DC university means road closures, a flood of visiting family, and a schedule that doesn't wait for a late rideshare. Booking a chauffeur who already has your pickup time, hotel, and ceremony timing in hand removes the single biggest risk of the day — a car that can't find you, or can't get through, when the ceremony is starting.",
        ],
      },
      {
        heading: "Getting to AU From Any of the Three Airports",
        paragraphs: [
          "Reagan National is the closest airport to campus, a straightforward run up the GW Parkway or across the river and through upper northwest DC. Dulles and BWI both work just as reliably — Dulles via the Beltway through Northern Virginia, BWI via the Beltway and 495 into the District — and every arrival includes real-time flight tracking with complimentary waiting time, so a delayed flight on move-in day doesn't turn into a missed window.",
        ],
      },
    ],
    highlights: [
      { title: "No Parking Search", desc: "Dropped right at the residence hall or campus entrance — no circling Tenleytown's residential streets for a spot." },
      { title: "Move-In Day Ready", desc: "Sprinter and Suburban options move a dorm room's worth of belongings in one trip, timed to your assigned window." },
      { title: "All Three Airports Covered", desc: "Flight-tracked transfers from DCA, Dulles, and BWI, with complimentary wait time built in." },
      { title: "One Planned Day", desc: "Parents' weekend and commencement booked as a full itinerary — airport, hotel, campus, dinner — not separate rides." },
      { title: "Family-Sized Vehicles", desc: "Navigator and Suburban for visiting families; Sprinter for larger groups or move-in hauls." },
      { title: "Licensed and Insured", desc: "Maryland PSC Carrier #6325, licensed background-checked chauffeurs and commercially insured company-owned vehicles." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Premium SUV — Lincoln Navigator",
      "Luxury SUV — Chevrolet Suburban",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Nearby DC",
        places: [
          { label: "Georgetown University Car Service", to: "/georgetown-university-car-service" },
          { label: "Chevy Chase", to: "/chevy-chase-limo-service" },
          { label: "Bethesda", to: "/bethesda-limo-service" },
        ],
      },
      {
        region: "Airport Connections",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "College Tour Car Service", to: "/college-tour-car-service-maryland-dc" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Can you drop off right at an American University residence hall?", a: "Yes — tell us your move-in window and residence hall when you book, and your chauffeur plans the drop-off accordingly, avoiding the parking search entirely." },
      { q: "Do you serve parents' weekend at American University?", a: "Yes — we commonly book parents' weekend as one full-day itinerary: airport pickup, hotel, campus for scheduled events, and dinner or the return trip, all planned in advance." },
      { q: "Which airport is closest to American University?", a: "Reagan National is closest, a straightforward run through upper northwest DC. Dulles and BWI are served just as reliably, both with real-time flight tracking included." },
      { q: "Can you handle commencement day given the road closures?", a: "Yes — we plan commencement-day pickups around your ceremony time and known road closures in advance, rather than discovering them the morning of." },
      { q: "What vehicle works best for a move-in day with a lot of belongings?", a: "A Chevrolet Suburban or Mercedes Sprinter comfortably moves a dorm room's worth of belongings in one trip, alongside the family traveling with it." },
    ],
    ctaTitle: "Book Your American University Car Service",
    ctaSubtitle: "Move-in, parents' weekend, commencement, and airport transfers — reserve online or call (877) 609-1919.",
  },

  "medstar-washington-hospital-center-transportation": {
    metaTitle: "MedStar Washington Hospital Center Car Service | 92 Limo",
    metaDescription:
      "Chauffeured car service to MedStar Washington Hospital Center in DC — patients, visiting family, medical staff. Call (877) 609-1919 to book.",
    eyebrow: "MEDSTAR WASHINGTON HOSPITAL CENTER · WASHINGTON, DC",
    h1: "MedStar Washington Hospital Center Transportation",
    subtitle:
      "Chauffeured car service to and from MedStar Washington Hospital Center on Michigan Avenue NE — for patients, visiting family, and medical staff, with airport and hotel connections across DC, Maryland, and Virginia.",
    image: IMAGES.airportPickup,
    alt: "Chauffeured car service for MedStar Washington Hospital Center patients and visitors — 92 Limo Service",
    highlightsHeading: "Why Families and Patients Book With Us",
    intro: [
      "MedStar Washington Hospital Center sits on Michigan Avenue NE in Washington, DC, on a large medical campus it shares with Children's National Hospital and the DC VA Medical Center — one of the biggest concentrations of hospital care anywhere in the District. For patients managing a procedure and the family members flying in to be there for it, the hospital campus adds its own layer of complication on top of an already stressful visit: multiple buildings, a parking garage that fills fast, and a schedule built around appointment times, not traffic.",
      "92 Limo Service, the trade name of 92 Transportation LLC, provides chauffeured car service to and from the Hospital Center campus for patients, visiting family, and medical staff — a calmer, door-to-door alternative to driving yourself or navigating a rideshare pickup on an unfamiliar, multi-building campus.",
    ],
    sections: [
      {
        heading: "A Large, Multi-Building Campus",
        paragraphs: [
          "Washington Hospital Center shares its campus with Children's National and the DC VA Medical Center, and the three sit close enough together that a pickup or drop-off meant for one can easily end up at the wrong entrance on a first visit. Tell us exactly which building and entrance you need when you book, and your chauffeur plans the drop-off accordingly rather than leaving you to find it after circling the campus.",
        ],
      },
      {
        heading: "Patients and Procedures: A Calmer Way to Arrive",
        paragraphs: [
          "A procedure day already carries enough stress without adding a parking garage search or a long walk from an overflow lot. A chauffeured drop-off puts a patient right at the entrance they need, and the same vehicle is available for the ride home afterward — a meaningful difference for anyone leaving a procedure under sedation or simply not up to driving themselves.",
        ],
      },
      {
        heading: "Flying in for a Family Member's Care",
        paragraphs: [
          "Out-of-town family flying in for a loved one's hospital stay often land at Reagan National, BWI, or Dulles with little notice and no familiarity with DC traffic. A flight-tracked airport pickup straight to the hospital or a nearby hotel removes one variable from a day that already has enough uncertainty in it, and the same booking covers the return trip once visiting hours end or the stay concludes.",
        ],
      },
      {
        heading: "Medical Staff and Recurring Trips",
        paragraphs: [
          "For hospital staff and medical professionals who need reliable transportation to recurring shifts, conferences held on campus, or hotel stays during a multi-day assignment, the same flat-rate, no-surge booking applies as any other trip — useful for anyone whose schedule doesn't match normal commuting hours.",
        ],
      },
    ],
    highlights: [
      { title: "Right Building, Right Entrance", desc: "Tell us which campus building you need — Hospital Center, Children's National, or the VA Medical Center — and we plan the drop-off accordingly." },
      { title: "Calmer Procedure-Day Arrivals", desc: "Drop-off right at the entrance and a vehicle available again for the ride home, with no self-driving or parking search involved." },
      { title: "Flight-Tracked Family Arrivals", desc: "Out-of-town family flying into DCA, BWI, or Dulles connect straight to the hospital or a nearby hotel, tracked in real time." },
      { title: "No Surge, No Meter", desc: "One flat, transparent rate confirmed before you ride — gratuity, tolls and parking disclosed up front." },
      { title: "Available Around the Clock", desc: "Hospital schedules don't run 9-to-5, and neither does our dispatch desk." },
      { title: "Licensed and Insured", desc: "Maryland PSC Carrier #6325, licensed background-checked chauffeurs and commercially insured company-owned vehicles." },
    ],
    vehicles: [
      "Business Sedan — Mercedes E-Class",
      "Midsize SUV — Lincoln Nautilus",
      "Premium SUV — Lincoln Navigator",
      "Sprinter Shuttle — Mercedes Sprinter",
    ],
    areas: [
      {
        region: "Nearby DC",
        places: [
          { label: "Washington DC Limo Service", to: "/washington-dc-limo-service" },
          { label: "Silver Spring", to: "/silver-spring-limo-service" },
          { label: "Takoma Park", to: "/takoma-park-limo-service" },
        ],
      },
      {
        region: "Airport Connections",
        places: [
          { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
          { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
          { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
        ],
      },
      {
        region: "Related Pages",
        places: [
          { label: "Hospital Transportation Maryland", to: "/hospital-transportation-maryland" },
          { label: "Senior Car Service Maryland", to: "/senior-car-service-maryland" },
          { label: "Book Online", to: "/booking" },
        ],
      },
    ],
    faqs: [
      { q: "Can you drop off at the exact building I need on the medical campus?", a: "Yes — tell us whether you need Washington Hospital Center, Children's National, or the DC VA Medical Center when you book, and your chauffeur plans the drop-off at the right entrance." },
      { q: "Do you provide rides home after a procedure?", a: "Yes — the same booking can cover the ride home, which matters most if you're not able to drive yourself after a procedure or sedation." },
      { q: "Can you pick up family flying in for someone's hospital stay?", a: "Yes — we track flights into DCA, BWI, and Dulles in real time and connect straight to the hospital or a nearby hotel." },
      { q: "Is the rate the same at odd hours, like a late-night discharge?", a: "Yes — one flat, transparent rate applies regardless of time of day, with no surge pricing and no meter." },
      { q: "Do you work with medical staff who need recurring transportation?", a: "Yes — staff and visiting medical professionals with recurring shifts or multi-day assignments book the same flat-rate service as any other trip." },
    ],
    ctaTitle: "Book Your Hospital Center Transportation",
    ctaSubtitle: "Patients, visiting family, and medical staff — reserve online or call (877) 609-1919, 24/7.",
  },
};
