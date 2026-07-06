#!/usr/bin/env node
/**
 * Generates src/lib/landingPagesGenerated.js — the bulk SEO landing pages.
 *
 * Every page is built from a fact sheet (distances, highways, landmarks,
 * category specifics) injected into one of several rotating copy templates,
 * so each page carries unique, locally-specific content.
 *
 * Run: node scripts/generateLandingPages.js
 */

const fs = require("fs");
const path = require("path");

const PHONE = "877-679-0100";

// Vehicle label sets — must match `${category} — ${name}` in FLEET (src/lib/data.js)
const SEDAN_TRIO = [
  "Business Sedan — Mercedes E-Class",
  "First Class Sedan — BMW 7 Series",
  "Premium SUV — Cadillac Escalade",
];
const GROUP_TRIO = [
  "Luxury SUV — Chevrolet Suburban",
  "Premium SUV — Cadillac Escalade",
  "Sprinter Executive — Mercedes Sprinter",
];
const CELEBRATION_TRIO = [
  "Premium SUV — Cadillac Escalade",
  "Sprinter Executive — Mercedes Sprinter",
  "First Class Sedan — BMW 7 Series",
];

/* ------------------------------------------------------------------ */
/*  FACT SHEETS                                                        */
/* ------------------------------------------------------------------ */

// slug pieces are appended per-category below.
const CITIES = [
  // --- Maryland
  { name: "Baltimore", st: "MD", slug: "baltimore", mins: 15, miles: 10, roads: "I-95 and MD-295", spots: "the Inner Harbor, Fells Point, and Camden Yards", vibe: "Charm City's hotels, offices, and event venues", air: "BWI" },
  { name: "Washington DC", st: "DC", slug: "washington-dc", mins: 50, miles: 32, roads: "the BW Parkway and I-95", spots: "Capitol Hill, Georgetown, and the K Street corridor", vibe: "the capital's hotels, embassies, and federal offices", air: "DCA" },
  { name: "Annapolis", st: "MD", slug: "annapolis", mins: 30, miles: 22, roads: "I-97 and US-50", spots: "the Naval Academy, City Dock, and Eastport", vibe: "Maryland's historic capital and sailing scene", air: "BWI" },
  { name: "Columbia", st: "MD", slug: "columbia-md", mins: 20, miles: 15, roads: "MD-100 and US-29", spots: "Merriweather Post Pavilion, the Mall in Columbia, and the Gateway corridor", vibe: "Howard County's planned-community neighborhoods and office parks", air: "BWI" },
  { name: "Bethesda", st: "MD", slug: "bethesda", mins: 55, miles: 38, roads: "I-95 and the Beltway", spots: "NIH, Walter Reed, and Bethesda Row", vibe: "Montgomery County's medical and business hub", air: "DCA" },
  { name: "Rockville", st: "MD", slug: "rockville", mins: 60, miles: 42, roads: "the Beltway and I-270", spots: "Rockville Town Square, King Farm, and the I-270 tech corridor", vibe: "the county seat's biotech and government offices", air: "IAD" },
  { name: "Silver Spring", st: "MD", slug: "silver-spring", mins: 45, miles: 34, roads: "I-95 and the Beltway", spots: "downtown Silver Spring, NOAA, and the FDA campus", vibe: "the thriving downtown just north of DC", air: "DCA" },
  { name: "Bowie", st: "MD", slug: "bowie-md", mins: 30, miles: 24, roads: "US-50 and MD-197", spots: "Bowie Town Center, Fairwood, and Old Town Bowie", vibe: "Prince George's County's largest city", air: "BWI" },
  { name: "Laurel", st: "MD", slug: "laurel-md", mins: 20, miles: 14, roads: "MD-295 and Route 198", spots: "Main Street, Russett, and Maryland City", vibe: "the midpoint between Baltimore and Washington", air: "BWI" },
  { name: "Greenbelt", st: "MD", slug: "greenbelt-md", mins: 30, miles: 22, roads: "the BW Parkway and I-495", spots: "NASA Goddard, Roosevelt Center, and Greenbelt Park", vibe: "the historic planned community off the Parkway", air: "BWI" },
  { name: "Gaithersburg", st: "MD", slug: "gaithersburg", mins: 60, miles: 45, roads: "I-270 and the ICC (MD-200)", spots: "Rio Lakefront, Crown, and the Kentlands", vibe: "the I-270 technology corridor", air: "IAD" },
  { name: "Frederick", st: "MD", slug: "frederick-md", mins: 60, miles: 55, roads: "I-70 and US-15", spots: "historic downtown Frederick, Fort Detrick, and Carroll Creek", vibe: "Western Maryland's fast-growing hub", air: "BWI" },
  { name: "Waldorf", st: "MD", slug: "waldorf-md", mins: 55, miles: 45, roads: "US-301 and MD-5", spots: "the Waldorf Marketplace corridor, St. Charles, and Charles County government offices", vibe: "Southern Maryland's commercial center", air: "DCA" },
  { name: "Chesapeake Beach", st: "MD", slug: "chesapeake-beach", mins: 60, miles: 45, roads: "MD-260 and Route 4", spots: "the boardwalk, Rod 'N' Reel Resort, and North Beach", vibe: "Calvert County's bayside resort towns", air: "BWI" },
  { name: "Ocean City", st: "MD", slug: "ocean-city-md", mins: 135, miles: 130, roads: "US-50 and the Bay Bridge", spots: "the boardwalk, the Route 1 corridor, and West Ocean City", vibe: "Maryland's beach resort", air: "BWI" },
  { name: "Towson", st: "MD", slug: "towson", mins: 25, miles: 18, roads: "I-695 and I-83", spots: "Towson University, GBMC, and Towson Town Center", vibe: "Baltimore County's business seat", air: "BWI" },
  { name: "Glen Burnie", st: "MD", slug: "glen-burnie", mins: 10, miles: 6, roads: "I-97 and MD-2", spots: "Marley Station, Point Pleasant, and Ferndale", vibe: "the airport's closest neighbor", air: "BWI" },
  { name: "Ellicott City", st: "MD", slug: "ellicott-city", mins: 25, miles: 18, roads: "US-29 and US-40", spots: "historic Main Street, Turf Valley, and Centennial Park", vibe: "Howard County's historic mill town", air: "BWI" },
  { name: "Elkridge", st: "MD", slug: "elkridge", mins: 12, miles: 8, roads: "I-95, Route 1, and Route 100", spots: "the Route 1 corridor and Patapsco Valley State Park", vibe: "one of Maryland's oldest settlements", air: "BWI" },
  { name: "Catonsville", st: "MD", slug: "catonsville", mins: 20, miles: 13, roads: "I-695 and US-40", spots: "Frederick Road, UMBC, and Music City Maryland's venues", vibe: "the arts-friendly west side of Baltimore County", air: "BWI" },
  { name: "Bel Air", st: "MD", slug: "bel-air", mins: 45, miles: 35, roads: "I-95 and US-1", spots: "Main Street, Harford Mall, and the Ma & Pa Trail", vibe: "Harford County's seat", air: "BWI" },
  { name: "Aberdeen", st: "MD", slug: "aberdeen", mins: 50, miles: 40, roads: "I-95 and US-40", spots: "Aberdeen Proving Ground, Ripken Stadium, and the MARC station", vibe: "Harford County's defense hub", air: "BWI" },
  { name: "Germantown", st: "MD", slug: "germantown", mins: 65, miles: 50, roads: "I-270 and MD-118", spots: "the Soccerplex, Milestone, and Clarksburg Premium Outlets", vibe: "upcounty Montgomery's residential hub", air: "IAD" },
  { name: "College Park", st: "MD", slug: "college-park", mins: 25, miles: 20, roads: "the BW Parkway and US-1", spots: "the University of Maryland, Discovery District, and Route 1 corridor", vibe: "the university city", air: "BWI" },
  { name: "Severna Park", st: "MD", slug: "severna-park", mins: 15, miles: 10, roads: "I-97 and MD-2", spots: "Round Bay, Chartwell, and Olde Severna Park", vibe: "the Severn-to-Magothy peninsula", air: "BWI" },
  // --- Virginia
  { name: "Arlington", st: "VA", slug: "arlington-va", mins: 55, miles: 40, roads: "the BW Parkway and I-395", spots: "the Pentagon, Amazon HQ2, and Rosslyn", vibe: "the federal and tech corridor across the Potomac", air: "DCA" },
  { name: "Alexandria", st: "VA", slug: "alexandria-va", mins: 60, miles: 45, roads: "I-95 and the Wilson Bridge", spots: "Old Town, Del Ray, and the Carlyle district", vibe: "the historic seaport city", air: "DCA" },
  { name: "Fairfax", st: "VA", slug: "fairfax-va", mins: 70, miles: 55, roads: "I-95 and I-66", spots: "George Mason University, Fairfax City, and Fair Oaks", vibe: "Northern Virginia's county hub", air: "IAD" },
  { name: "Tysons Corner", st: "VA", slug: "tysons-corner", mins: 65, miles: 50, roads: "the Beltway and Route 123", spots: "Tysons Galleria, Capital One Center, and the Silver Line corridor", vibe: "Virginia's downtown of corporate headquarters", air: "IAD" },
  { name: "Fredericksburg", st: "VA", slug: "fredericksburg-va", mins: 90, miles: 80, roads: "I-95 South", spots: "the historic downtown, Mary Washington, and Central Park", vibe: "the growing I-95 corridor city", air: "DCA" },
  { name: "McLean", st: "VA", slug: "mclean-va", mins: 60, miles: 48, roads: "the Beltway and the GW Parkway", spots: "Tysons, the CIA campus corridor, and Langley", vibe: "one of NoVA's most exclusive communities", air: "IAD" },
  { name: "Reston", st: "VA", slug: "reston-va", mins: 70, miles: 55, roads: "the Dulles Toll Road", spots: "Reston Town Center and the Dulles tech corridor", vibe: "the planned community at the heart of the Dulles corridor", air: "IAD" },
  { name: "Ashburn", st: "VA", slug: "ashburn-va", mins: 75, miles: 60, roads: "the Dulles Greenway", spots: "One Loudoun, data-center alley, and Brambleton", vibe: "Loudoun County's tech capital", air: "IAD" },
  { name: "Leesburg", st: "VA", slug: "leesburg-va", mins: 80, miles: 65, roads: "the Dulles Greenway and Route 7", spots: "the historic downtown, Lansdowne, and Loudoun wine country", vibe: "Loudoun's historic county seat", air: "IAD" },
  // --- Pennsylvania
  { name: "York", st: "PA", slug: "york-pa", mins: 60, miles: 55, roads: "I-83 South", spots: "downtown York, the WellSpan campus, and the York Expo Center", vibe: "south-central Pennsylvania's manufacturing hub", air: "BWI" },
  { name: "Hanover", st: "PA", slug: "hanover-pa", mins: 70, miles: 60, roads: "MD-30 and PA-94", spots: "the square, Utz country, and South Hanover", vibe: "the snack-food capital on the Mason-Dixon line", air: "BWI" },
  { name: "Gettysburg", st: "PA", slug: "gettysburg-pa", mins: 85, miles: 70, roads: "US-15 North", spots: "the battlefield, Gettysburg College, and the historic square", vibe: "America's most visited battlefield town", air: "BWI" },
  { name: "Lancaster", st: "PA", slug: "lancaster-pa", mins: 90, miles: 80, roads: "US-30 and PA-283", spots: "downtown Lancaster, Amish country, and Franklin & Marshall", vibe: "Pennsylvania Dutch country's city center", air: "BWI" },
  { name: "Harrisburg", st: "PA", slug: "harrisburg-pa", mins: 90, miles: 85, roads: "I-83 North", spots: "the Capitol complex, City Island, and the West Shore", vibe: "Pennsylvania's capital", air: "BWI" },
  { name: "Hershey", st: "PA", slug: "hershey-pa", mins: 100, miles: 95, roads: "I-83 and US-322", spots: "Hersheypark, the Hotel Hershey, and the Giant Center", vibe: "the sweetest place on earth", air: "BWI" },
  // --- Delaware
  { name: "Wilmington", st: "DE", slug: "wilmington-de", mins: 70, miles: 70, roads: "I-95 North", spots: "the Riverfront, Rodney Square, and the corporate district", vibe: "Delaware's corporate capital", air: "BWI" },
  { name: "Newark", st: "DE", slug: "newark-de", mins: 60, miles: 58, roads: "I-95 North", spots: "the University of Delaware, Main Street, and Christiana", vibe: "the university town off I-95", air: "BWI" },
  { name: "Dover", st: "DE", slug: "dover-de", mins: 85, miles: 80, roads: "US-301 and DE-1", spots: "Dover Air Force Base, the Capitol complex, and Dover Motor Speedway", vibe: "Delaware's capital", air: "BWI" },
  { name: "Middletown", st: "DE", slug: "middletown-de", mins: 65, miles: 62, roads: "US-301", spots: "the historic Main Street and Westown", vibe: "fast-growing southern New Castle County", air: "BWI" },
];

const AIRPORT_PAGES = [
  { slug: "bwi-airport-car-service", kw: "BWI Airport Car Service", airport: "BWI Marshall Airport", code: "BWI", angle: "car" },
  { slug: "bwi-airport-transportation", kw: "BWI Airport Transportation", airport: "BWI Marshall Airport", code: "BWI", angle: "transportation" },
  { slug: "bwi-airport-shuttle", kw: "BWI Airport Shuttle", airport: "BWI Marshall Airport", code: "BWI", angle: "shuttle" },
  { slug: "dca-airport-limo", kw: "DCA Reagan Airport Limo", airport: "Reagan National Airport (DCA)", code: "DCA", angle: "limo" },
  { slug: "dca-airport-car-service", kw: "DCA Airport Car Service", airport: "Reagan National Airport (DCA)", code: "DCA", angle: "car" },
  { slug: "iad-airport-limo", kw: "IAD Dulles Airport Limo", airport: "Dulles International Airport (IAD)", code: "IAD", angle: "limo" },
  { slug: "iad-airport-car-service", kw: "IAD Airport Car Service", airport: "Dulles International Airport (IAD)", code: "IAD", angle: "car" },
  { slug: "airport-limo-baltimore", kw: "Airport Limo Service Baltimore", airport: "BWI Marshall Airport", code: "BWI", angle: "citylimo", city: "Baltimore" },
  { slug: "airport-limo-washington-dc", kw: "Airport Limo Service Washington DC", airport: "all three DC-area airports", code: "DCA", angle: "citylimo", city: "Washington DC" },
];

const SERVICE_PAGES = [
  { slug: "wedding-limo-maryland", kw: "Wedding Limo Service Maryland", noun: "wedding limo service", region: "Maryland", occasions: "ceremonies, receptions, and send-offs", venues: "waterfront venues in Annapolis, barns in Frederick County, and downtown Baltimore hotels", trio: CELEBRATION_TRIO, img: "sClassNav" },
  { slug: "wedding-car-service-dc", kw: "Wedding Car Service Washington DC", noun: "wedding car service", region: "Washington DC", occasions: "ceremonies, receptions, and guest shuttles", venues: "DC hotels, historic mansions, and Georgetown venues", trio: CELEBRATION_TRIO, img: "sClassNav" },
  { slug: "prom-limo-maryland", kw: "Prom Limo Service Maryland", noun: "prom limo service", region: "Maryland", occasions: "proms, homecomings, and formals", venues: "high schools across Anne Arundel, Howard, and Montgomery counties", trio: CELEBRATION_TRIO, img: "sprinterPink" },
  { slug: "prom-limo-baltimore", kw: "Prom Limo Baltimore", noun: "prom limo service", region: "Baltimore", occasions: "proms, homecomings, and graduations", venues: "Baltimore City and Baltimore County schools and venues", trio: CELEBRATION_TRIO, img: "sprinterPink" },
  { slug: "corporate-limo-dc", kw: "Corporate Limo Service Washington DC", noun: "corporate limo service", region: "Washington DC", occasions: "roadshows, board meetings, and client visits", venues: "K Street, Capitol Hill, and the convention center", trio: SEDAN_TRIO, img: "corporate" },
  { slug: "executive-car-service-maryland", kw: "Executive Car Service Maryland", noun: "executive car service", region: "Maryland", occasions: "executive travel, investor meetings, and airport runs", venues: "Baltimore's business district, Columbia Gateway, and the I-270 corridor", trio: SEDAN_TRIO, img: "corporate" },
  { slug: "black-car-service-baltimore", kw: "Black Car Service Baltimore", noun: "black car service", region: "Baltimore", occasions: "business travel, dinners, and airport transfers", venues: "Harbor East, the Inner Harbor, and Mount Vernon", trio: SEDAN_TRIO, img: "sedan" },
  { slug: "black-car-service-dc", kw: "Black Car Service Washington DC", noun: "black car service", region: "Washington DC", occasions: "government, legal, and business travel", venues: "downtown DC, the Wharf, and Navy Yard", trio: SEDAN_TRIO, img: "sedan" },
  { slug: "luxury-car-service-maryland", kw: "Luxury Car Service Maryland", noun: "luxury car service", region: "Maryland", occasions: "special occasions, date nights, and VIP travel", venues: "fine dining, theaters, and waterfront venues statewide", trio: SEDAN_TRIO, img: "sClassNav" },
  { slug: "chauffeur-service-baltimore", kw: "Chauffeur Service Baltimore", noun: "chauffeur service", region: "Baltimore", occasions: "hourly hires, events, and airport travel", venues: "the Inner Harbor, Fells Point, and Baltimore County", trio: SEDAN_TRIO, img: "chauffeur" },
  { slug: "chauffeur-service-washington-dc", kw: "Chauffeur Service Washington DC", noun: "chauffeur service", region: "Washington DC", occasions: "hourly hires, embassy visits, and evening events", venues: "Georgetown, Capitol Hill, and Dupont Circle", trio: SEDAN_TRIO, img: "chauffeur" },
  { slug: "birthday-limo-maryland", kw: "Birthday Limo Service Maryland", noun: "birthday limo service", region: "Maryland", occasions: "milestone birthdays, surprise pickups, and nights out", venues: "restaurants, rooftop bars, and casinos across the state", trio: CELEBRATION_TRIO, img: "sprinterPink" },
  { slug: "bachelorette-party-limo", kw: "Bachelorette Party Limo", noun: "bachelorette party limo service", region: "Maryland and DC", occasions: "bachelorette and bachelor parties, winery crawls, and club nights", venues: "Fells Point, the Wharf, and Maryland wine country", trio: CELEBRATION_TRIO, img: "sprinterPink" },
  { slug: "wine-tour-limo-maryland", kw: "Wine Tour Limo Maryland", noun: "wine tour limo service", region: "Maryland", occasions: "winery tours, brewery crawls, and vineyard weddings", venues: "Boordy Vineyards, Black Ankle, and Linganore wine country", trio: GROUP_TRIO, img: "longDistance" },
  { slug: "casino-trip-limo", kw: "Casino Trip Limo Service", noun: "casino limo service", region: "Maryland and DC", occasions: "casino nights, poker runs, and group outings", venues: "Live! Casino, MGM National Harbor, and Horseshoe Baltimore", trio: GROUP_TRIO, img: "suv" },
  { slug: "concert-limo-dc", kw: "Concert Limo Service Washington DC", noun: "concert limo service", region: "Washington DC", occasions: "concerts, shows, and festival nights", venues: "Capital One Arena, the Anthem, and Merriweather Post Pavilion", trio: GROUP_TRIO, img: "suv" },
  { slug: "sports-event-transportation-dc", kw: "Sports Event Transportation Washington DC", noun: "sports event transportation", region: "Washington DC", occasions: "game days, tailgates, and championship nights", venues: "Capital One Arena, Nationals Park, Audi Field, and FedEx Field", trio: GROUP_TRIO, img: "suv" },
  { slug: "graduation-limo-maryland", kw: "Graduation Limo Service Maryland", noun: "graduation limo service", region: "Maryland", occasions: "commencements, family celebrations, and campus pickups", venues: "UMD College Park, Johns Hopkins, Towson, UMBC, and the Naval Academy", trio: GROUP_TRIO, img: "sprinterGreen" },
  { slug: "funeral-transportation-maryland", kw: "Funeral Transportation Maryland", noun: "funeral transportation", region: "Maryland", occasions: "services, processions, and family transport", venues: "funeral homes, churches, and cemeteries statewide", trio: GROUP_TRIO, img: "sedan", tone: "somber" },
  { slug: "hospital-transportation-maryland", kw: "Hospital Transportation Maryland", noun: "hospital transportation", region: "Maryland", occasions: "appointments, discharges, and out-of-town treatment visits", venues: "Johns Hopkins, University of Maryland Medical Center, and NIH", trio: SEDAN_TRIO, img: "sedan", tone: "care" },
];

const VEHICLE_PAGES = [
  { slug: "mercedes-s-class-rental-maryland", kw: "Mercedes S-Class Rental Maryland", vehicle: "Mercedes-Benz S-Class", cls: "flagship luxury sedan", pax: "up to 3 passengers", best: "executive travel, weddings, and VIP airport transfers", img: "sClassNav", trio: SEDAN_TRIO },
  { slug: "cadillac-escalade-limo", kw: "Cadillac Escalade Limo Service", vehicle: "Cadillac Escalade", cls: "premium full-size SUV", pax: "up to 6 passengers", best: "families, executives, and red-carpet arrivals", img: "escaladeFront", trio: GROUP_TRIO },
  { slug: "lincoln-navigator-limo", kw: "Lincoln Navigator Limo Service", vehicle: "Lincoln Navigator", cls: "American luxury SUV", pax: "up to 6 passengers", best: "airport transfers, proms, and group nights out", img: "suv", trio: GROUP_TRIO },
  { slug: "sprinter-van-rental-maryland", kw: "Sprinter Van Rental Maryland", vehicle: "Mercedes Sprinter", cls: "executive van", pax: "up to 14 passengers", best: "group airport runs, wine tours, and corporate shuttles", img: "sprinterGreen", trio: GROUP_TRIO },
  { slug: "party-bus-baltimore", kw: "Party Bus Baltimore", vehicle: "Sprinter Limo", cls: "limo-style party van", pax: "up to 12 passengers", best: "birthdays, bachelorette parties, and nights on the town", img: "sprinterPink", trio: CELEBRATION_TRIO },
  { slug: "stretch-limo-baltimore", kw: "Stretch Limo Alternative Baltimore", vehicle: "Sprinter Limo", cls: "modern stretch-limo alternative", pax: "up to 12 passengers", best: "weddings, proms, and milestone celebrations", img: "sprinterPink", trio: CELEBRATION_TRIO },
  { slug: "suv-car-service-dc", kw: "SUV Car Service Washington DC", vehicle: "Chevrolet Suburban", cls: "full-size luxury SUV", pax: "up to 6 passengers", best: "families with luggage, security details, and group airport travel", img: "suv", trio: GROUP_TRIO },
  { slug: "bmw-7-series-chauffeur", kw: "BMW 7 Series Chauffeur Service", vehicle: "BMW 7 Series", cls: "first-class executive sedan", pax: "up to 3 passengers", best: "C-suite travel, client pickups, and premium airport service", img: "sedan", trio: SEDAN_TRIO },
];

const ROUTE_PAGES = [
  { slug: "baltimore-to-dc-car-service", kw: "Baltimore to DC Car Service", from: "Baltimore", to: "Washington DC", miles: 40, time: "55–75 minutes", roads: "the BW Parkway or I-95", dropoffs: "Capitol Hill, K Street offices, Georgetown, and every downtown hotel" },
  { slug: "dc-to-baltimore-limo", kw: "DC to Baltimore Limo Service", from: "Washington DC", to: "Baltimore", miles: 40, time: "55–75 minutes", roads: "the BW Parkway or I-295", dropoffs: "the Inner Harbor, Harbor East, Johns Hopkins, and Camden Yards" },
  { slug: "baltimore-to-annapolis-limo", kw: "Baltimore to Annapolis Limo", from: "Baltimore", to: "Annapolis", miles: 30, time: "40–50 minutes", roads: "I-97 South", dropoffs: "the Naval Academy, City Dock, Eastport, and waterfront venues" },
  { slug: "dca-to-baltimore", kw: "DCA to Baltimore Car Service", from: "Reagan National Airport (DCA)", to: "Baltimore", miles: 45, time: "60–80 minutes", roads: "the BW Parkway", dropoffs: "the Inner Harbor, Fells Point, Johns Hopkins, and BWI-area hotels" },
  { slug: "baltimore-to-philadelphia-limo", kw: "Baltimore to Philadelphia Limo", from: "Baltimore", to: "Philadelphia", miles: 100, time: "about 2 hours", roads: "I-95 North", dropoffs: "Center City hotels, PHL Airport, the sports complex, and University City" },
  { slug: "dc-to-new-york-car-service", kw: "DC to New York Car Service", from: "Washington DC", to: "New York City", miles: 225, time: "about 4 hours", roads: "I-95 and the New Jersey Turnpike", dropoffs: "Manhattan hotels, JFK, LaGuardia, and Newark" },
  { slug: "baltimore-to-new-york-limo", kw: "Baltimore to New York Limo", from: "Baltimore", to: "New York City", miles: 190, time: "3.5–4 hours", roads: "I-95 North", dropoffs: "Midtown, downtown, Brooklyn, and all three NYC-area airports" },
  { slug: "maryland-to-jfk-airport", kw: "Maryland to JFK Airport Car Service", from: "Maryland", to: "JFK Airport", miles: 210, time: "about 4 hours", roads: "I-95 and the Verrazzano", dropoffs: "every JFK terminal, timed to your check-in window" },
  { slug: "maryland-to-newark-airport", kw: "Maryland to Newark Airport Car Service", from: "Maryland", to: "Newark Liberty Airport (EWR)", miles: 175, time: "about 3.5 hours", roads: "I-95 and the New Jersey Turnpike", dropoffs: "every EWR terminal, timed to your check-in window" },
];

/* ------------------------------------------------------------------ */
/*  SHARED COPY POOLS                                                  */
/* ------------------------------------------------------------------ */

const CORE_HIGHLIGHTS = [
  { title: "Flat, All-Inclusive Pricing", desc: "One transparent quote covering tolls, taxes, and gratuity. No meters, no surge, no surprises." },
  { title: "Professional Chauffeurs", desc: "Background-checked, professionally dressed, and trained to arrive early — every ride, every time." },
  { title: "24/7 Availability", desc: "Pre-dawn departures and red-eye arrivals are covered. We operate around the clock, every day of the year." },
  { title: "Late-Model Luxury Fleet", desc: "Mercedes, BMW, Cadillac, and Sprinter vehicles — detailed before every trip, with water and chargers on board." },
  { title: "Real-Time Flight Tracking", desc: "Airport pickups adjust automatically when flights run early or late — at no extra charge." },
  { title: "Easy Booking", desc: `Reserve online in minutes or call ${PHONE}. Every booking is confirmed with an all-inclusive quote.` },
];

function pickHighlights(unique) {
  // 2-3 page-specific highlights + core pool to fill to 6
  const out = [...unique];
  for (const h of CORE_HIGHLIGHTS) {
    if (out.length >= 6) break;
    if (!out.some((u) => u.title === h.title)) out.push(h);
  }
  return out.slice(0, 6);
}

const CORE_FAQS = [
  { q: "How is pricing calculated?", a: "Every trip is quoted as a flat, all-inclusive rate before you book. The price covers tolls, taxes, and standard gratuity — there is no meter and no surge pricing." },
  { q: "How far in advance should I book?", a: `We recommend booking at least 24 hours ahead, and earlier for weekends and special events. Same-day requests are welcome when vehicles are available — call ${PHONE} anytime.` },
  { q: "Are your chauffeurs licensed and insured?", a: "Yes. 92 Limo Service is fully licensed and commercially insured, and every chauffeur is background-checked and professionally trained." },
];

/* ------------------------------------------------------------------ */
/*  BUILDERS                                                           */
/* ------------------------------------------------------------------ */

function cityPage(c, i) {
  const introSets = [
    [
      `Looking for a limo service in ${c.name}, ${c.st} you can set your watch by? 92 Limo Service provides chauffeured luxury transportation across ${c.vibe} — airport transfers, corporate travel, weddings, and nights out. Every ride comes with a professional chauffeur, a late-model luxury vehicle, and a flat rate quoted before you book.`,
      `Airport travel is our specialty. From ${c.name}, ${c.air === "BWI" ? `BWI Marshall is about ${c.mins} minutes away` : `we serve BWI, DCA, and Dulles — with ${c.air} often the most convenient`}, and our chauffeurs use ${c.roads} to keep your transfer smooth and predictable. We track your flight in real time, adjust for delays automatically, and include generous wait time on arrivals.`,
      `We know ${c.name} — from ${c.spots}. That local knowledge matters when a highway backs up or an event closes streets. Your chauffeur plans around it, so you arrive relaxed and on time.`,
      `Choose the vehicle that fits the trip: a Mercedes E-Class or BMW 7 Series for business, a Cadillac Escalade or Suburban for families and luggage, or a Mercedes Sprinter van for groups of up to 14. Whatever you ride in, it arrives detailed, stocked with water, and driven by a chauffeur who treats your time as the priority.`,
    ],
    [
      `92 Limo Service is the chauffeured car and limo service ${c.name}, ${c.st} residents call when the trip has to go right. We serve ${c.vibe} with luxury sedans, SUVs, and Sprinter vans — available 24 hours a day, 365 days a year.`,
      `Most of our ${c.name} clients start with an airport transfer. ${c.air === "BWI" ? `The run to BWI Marshall takes about ${c.mins} minutes via ${c.roads}` : `We cover BWI, DCA, and Dulles from ${c.name}, using ${c.roads}`}, and every airport ride includes real-time flight tracking, meet-and-greet options, and full luggage assistance. Early flight? Your chauffeur is at your door before dawn. Delayed arrival? We adjust at no charge.`,
      `Beyond the airport, we handle corporate travel, weddings, proms, wine tours, and hourly charters throughout the area — including ${c.spots}. One number, one trusted chauffeur partner, for every trip on your calendar.`,
      `Pricing is simple: a flat, all-inclusive quote up front. No surge pricing on rainy Fridays, no meter anxiety in traffic. Just a spotless vehicle, a professional chauffeur, and a rate you approved before you booked. Call ${PHONE} or book online in minutes.`,
    ],
    [
      `From ${c.spots}, 92 Limo Service covers every corner of ${c.name}, ${c.st} with professional chauffeured transportation. Whether it is a ${c.mins <= 30 ? "quick" : "comfortable"} airport run, a business meeting, or a special evening, you get the same standard: on time, immaculate, and flat-rated.`,
      `Airport transfers from ${c.name} are door-to-door. ${c.air === "BWI" ? `BWI Marshall sits roughly ${c.miles} miles away — about ${c.mins} minutes via ${c.roads}` : `Depending on your terminal, we route via ${c.roads} to BWI, DCA, or Dulles`}. Your chauffeur tracks the flight, loads the luggage, and delivers you curbside with time to spare. Returns work the same way, with wait time built in for delays.`,
      `Our fleet matches the occasion. Executives choose the Mercedes E-Class and BMW 7 Series. Families and beach-bound groups take the Escalade or Suburban. Wedding parties, wine tours, and corporate shuttles fill our Mercedes Sprinter vans — everyone together, luggage and all.`,
      `Booking takes minutes and every reservation is confirmed with an all-inclusive quote. That is why ${c.name} clients keep our number saved: ${PHONE}, answered 24/7.`,
    ],
  ];
  const intro = introSets[i % 3];
  return {
    slug: `${c.slug}-limo-service`,
    entry: {
      metaTitle: `Limo Service ${c.name} ${c.st} | 92 Limo Service`,
      metaDescription: `Luxury limo & car service in ${c.name}, ${c.st}. Airport transfers to BWI, DCA & IAD, corporate travel, weddings & events. Flat rates, pro chauffeurs, 24/7.`,
      eyebrow: `${c.name.toUpperCase()}, ${c.st}`,
      h1: `Limo Service in ${c.name}, ${c.st}`,
      subtitle: `Chauffeured luxury transportation for ${c.name} — airport transfers, corporate travel, and special events, quoted flat and driven right.`,
      image: i % 2 === 0 ? "sedan" : "suv",
      alt: `Luxury chauffeured vehicle serving ${c.name}, ${c.st} — 92 Limo Service`,
      highlightsHeading: `Why ${c.name} Rides With 92 Limo Service`,
      intro,
      highlights: pickHighlights([
        { title: `Local ${c.name} Knowledge`, desc: `Our chauffeurs know ${c.spots} — and the fastest ways around ${c.roads} traffic.` },
        { title: c.air === "BWI" ? `~${c.mins} Minutes to BWI` : "All Three Airports Covered", desc: c.air === "BWI" ? `Door-to-terminal in about ${c.mins} minutes via ${c.roads}, with flight tracking on every ride.` : `BWI, DCA, and Dulles are all served from ${c.name}, with flight tracking on every ride.` },
      ]),
      vehicles: i % 3 === 0 ? SEDAN_TRIO : GROUP_TRIO,
      faqs: [
        { q: `How much does a limo service in ${c.name} cost?`, a: `Rates depend on distance and vehicle, and every trip is quoted flat before you book — tolls, taxes, and gratuity included. Call ${PHONE} or request a quote online for an exact price.` },
        { q: `How long is the ride from ${c.name} to the airport?`, a: c.air === "BWI" ? `${c.name} to BWI Marshall is about ${c.miles} miles — roughly ${c.mins} minutes via ${c.roads}, traffic depending. We build in buffer time so you never cut it close.` : `From ${c.name} we serve BWI, DCA, and Dulles. Your quote includes a recommended pickup time with buffer built in for traffic on ${c.roads}.` },
        { q: `Do you offer 24/7 service in ${c.name}?`, a: `Yes. We operate around the clock, every day of the year — early departures, red-eye arrivals, and late nights out in ${c.name} are all covered.` },
        ...CORE_FAQS.slice(0, 2),
      ],
      ctaTitle: `Book Your ${c.name} Chauffeur`,
      ctaSubtitle: `Flat-rate luxury transportation anywhere in ${c.name}, ${c.st} — reserve in minutes.`,
    },
  };
}

function airportPage(a, i) {
  const isLimo = a.angle === "limo" || a.angle === "citylimo";
  const noun = a.angle === "shuttle" ? "private shuttle service" : isLimo ? "limo service" : a.angle === "transportation" ? "airport transportation" : "airport car service";
  const cityLine = a.city ? ` for ${a.city} travelers` : "";
  const introSets = [
    [
      `92 Limo Service provides premium ${noun} to and from ${a.airport}${cityLine} — 24 hours a day, 365 days a year. Your chauffeur tracks the flight, meets you at baggage claim or curbside, handles every bag, and drives a spotless luxury vehicle to your door. No shuttles, no shared vans, no surge pricing.`,
      `Arrivals are effortless. We monitor your inbound flight in real time, so an early landing or a two-hour delay changes nothing — your vehicle is staged when you walk out. Choose curbside pickup or an inside meet-and-greet with a name sign, and enjoy generous complimentary wait time while you clear baggage claim.`,
      `Departures run just as smoothly. We calculate your pickup around traffic and check-in windows, build in buffer time, and get you to ${a.airport} relaxed rather than rushed. ${a.code === "BWI" ? "We serve every BWI terminal and the nearby hotels, park-and-rides, and Amtrak station." : a.code === "DCA" ? "We serve every DCA terminal, plus Crystal City and Pentagon City hotels." : "We serve every IAD terminal and the Dulles-corridor hotels and offices."}`,
      `Ride your way: Mercedes E-Class and BMW 7 Series sedans for business travel, Cadillac Escalades and Suburbans for families with luggage, and Mercedes Sprinter vans that keep groups of up to 14 together. Every trip is quoted as a flat, all-inclusive rate before you book.`,
    ],
    [
      `When the flight matters, the ride to the airport should never be the weak link. 92 Limo Service delivers ${noun} at ${a.airport}${cityLine} with professional chauffeurs, late-model luxury vehicles, and flat all-inclusive rates — trusted by business travelers, families, and frequent flyers across the DMV.`,
      `Every airport booking includes real-time flight tracking. Land early and your chauffeur is already there. Get delayed and your pickup adjusts automatically, free of charge. Inside meet-and-greet with a name sign is available on request, and luggage assistance is always included.`,
      `${a.city ? `We cover every ${a.city} neighborhood, hotel, and office` : "We cover all of Maryland, Washington DC, Northern Virginia, southern Pennsylvania, and Delaware"} — so the same trusted service that picks you up at home can return you there after the trip. Round-trip bookings guarantee your return ride before you even take off.`,
      `Corporate accounts get priority scheduling, consolidated billing, and a dedicated contact. Families get car seats on request and vehicles with real luggage room. Everyone gets the same promise: on time, immaculate, and flat-rated. Call ${PHONE} anytime.`,
    ],
  ];
  return {
    slug: a.slug,
    entry: {
      metaTitle: `${a.kw} | 92 Limo Service`,
      metaDescription: `${a.kw} with flight tracking, meet & greet, and flat all-inclusive rates. Pro chauffeurs and luxury vehicles, 24/7. Book online or call ${PHONE}.`,
      eyebrow: a.code === "BWI" ? "BWI MARSHALL" : a.code === "DCA" ? "REAGAN NATIONAL" : "DULLES INTERNATIONAL",
      h1: a.kw,
      subtitle: `Reliable, chauffeured ${noun} at ${a.airport} — flight-tracked pickups, flat rates, and luxury vehicles around the clock.`,
      image: "airportPickup",
      alt: `Chauffeur meeting a traveler — ${a.kw.toLowerCase()} by 92 Limo Service`,
      highlightsHeading: `What Makes Our ${a.code} Service Different`,
      intro: introSets[i % 2],
      highlights: pickHighlights([
        { title: "Meet & Greet Available", desc: "Your chauffeur waits inside with a name sign and walks you to the vehicle — ideal for first visits and VIP guests." },
        { title: "Generous Free Wait Time", desc: "Complimentary wait time on every arrival — 60 minutes domestic, 90 international — while you clear baggage claim." },
      ]),
      vehicles: SEDAN_TRIO,
      faqs: [
        { q: `Where does my chauffeur meet me at ${a.code}?`, a: `Your choice: curbside on the arrivals level, or inside at baggage claim with a name sign (meet & greet). Pickup instructions are confirmed with your booking.` },
        { q: "What happens if my flight is delayed?", a: "Nothing you need to manage. We track every flight in real time and adjust your pickup automatically — there is no extra charge for flight delays." },
        { q: `Do you serve ${a.code} at night and early morning?`, a: `Yes. We operate 24/7, so 4 AM departures and midnight arrivals at ${a.airport} get the same reliable service.` },
        ...CORE_FAQS,
      ].slice(0, 6),
      ctaTitle: `Reserve Your ${a.code} Ride`,
      ctaSubtitle: `Flight-tracked, flat-rated ${noun} — book online in minutes or call ${PHONE}.`,
    },
  };
}

function servicePage(s, i) {
  const somber = s.tone === "somber";
  const care = s.tone === "care";
  const introSets = somber
    ? [[
        `In difficult moments, transportation should be one thing your family does not have to think about. 92 Limo Service provides dignified funeral transportation across ${s.region} — quiet, punctual chauffeured vehicles for immediate family, out-of-town relatives, and clergy, coordinated gently around the service schedule.`,
        `We work directly with families and funeral directors to time every movement: home to church, church to cemetery, and the return. Our chauffeurs are experienced with processions and arrive early, dressed appropriately, with the vehicle immaculate.`,
        `Sedans carry immediate family in comfort, while our SUVs and Sprinter vans keep extended family together — especially helpful when relatives fly in and need airport pickups the same weekend. One call handles every ride.`,
        `Arrangements are handled with care and clear, flat pricing — no surprises added to an already heavy week. Call ${PHONE} and we will take transportation off your list.`,
      ]]
    : care
    ? [[
        `Getting to medical care should be safe, comfortable, and stress-free. 92 Limo Service provides non-emergency hospital transportation across ${s.region} — to ${s.venues} — for appointments, procedures, discharges, and visiting family.`,
        `Our chauffeurs assist from door to door: a steady arm to the vehicle, help with bags and mobility aids, a smooth ride, and drop-off at the correct hospital entrance rather than a distant curb. For discharges, we coordinate with your timing and wait as needed.`,
        `Out-of-town patients rely on us for airport-to-hospital transfers and multi-day treatment schedules. Book recurring rides once and the same reliable service shows up every time — no apps, no strangers, no uncertainty.`,
        `Every trip is quoted flat and in advance. Families can book on behalf of a loved one and receive confirmation when the pickup and drop-off are complete. Call ${PHONE} — we answer 24/7.`,
      ]]
    : [
      [
        `92 Limo Service delivers ${s.noun} across ${s.region} that actually lives up to the occasion. From ${s.venues}, we cover ${s.occasions} with immaculate luxury vehicles, professional chauffeurs, and flat all-inclusive pricing.`,
        `Every detail is planned in advance: pickup times that fit your schedule, routes that dodge traffic, and a chauffeur who arrives early and stays flexible. You will never watch a surge-price countdown or wonder if the driver will show.`,
        `Groups are our strength. Our Cadillac Escalades and Suburbans carry up to six in comfort, and our Mercedes Sprinter vans keep parties of up to 14 together — no splitting the group across rideshares, no one left waiting.`,
        `Booking takes minutes: request a quote online or call ${PHONE}, approve a flat rate, and consider it handled. That is why ${s.region} clients use us again and again.`,
      ],
      [
        `Some rides are just transportation. ${s.kw.replace(/ (Maryland|Washington DC|Baltimore|MD|DC)$/,"")} from 92 Limo Service is part of the event. We provide chauffeured luxury vehicles for ${s.occasions} throughout ${s.region} — polished, punctual, and priced flat.`,
        `Tell us the plan and we build the transportation around it: multiple pickups, photo stops, venue timing, late-night returns. Your chauffeur coordinates with you by text, stays reachable all night, and adapts when the schedule moves.`,
        `The fleet fits every version of the night. A BMW 7 Series or S-Class for an elegant arrival. An Escalade for the crew. A Sprinter for the whole party, with room to celebrate on the way. Every vehicle is detailed before pickup and stocked with water.`,
        `We serve ${s.venues} and everywhere between. One flat quote covers the night — tolls, taxes, and gratuity included. Call ${PHONE} or book online.`,
      ],
    ];
  const intro = introSets[i % introSets.length];
  return {
    slug: s.slug,
    entry: {
      metaTitle: `${s.kw} | 92 Limo Service`,
      metaDescription: `${s.kw} with professional chauffeurs, luxury vehicles & flat all-inclusive rates. Serving ${s.region} 24/7. Book online or call ${PHONE}.`,
      eyebrow: s.kw.toUpperCase(),
      h1: s.kw,
      subtitle: somber
        ? `Dignified, punctual chauffeured transportation for services and family — handled with care across ${s.region}.`
        : care
        ? `Safe, comfortable non-emergency medical transportation across ${s.region} — door to door, on your schedule.`
        : `Chauffeured ${s.noun} for ${s.occasions} — flat rates, luxury vehicles, and flawless timing across ${s.region}.`,
      image: s.img,
      alt: `${s.kw} — 92 Limo Service luxury vehicle`,
      highlightsHeading: somber ? "How We Support Your Family" : `Why Book Your ${s.noun.replace(/ service$/, "")} With Us`,
      intro,
      highlights: pickHighlights(
        somber
          ? [
              { title: "Procession Experience", desc: "Chauffeurs experienced with funeral processions, staging, and coordination with directors." },
              { title: "Family Kept Together", desc: "SUVs and Sprinter vans keep extended family in one vehicle between service locations." },
            ]
          : care
          ? [
              { title: "Door-Through-Door Assistance", desc: "Help to and from the vehicle, with bags and mobility aids, and drop-off at the correct entrance." },
              { title: "Recurring Ride Scheduling", desc: "Set a treatment schedule once — the same dependable service shows up for every appointment." },
            ]
          : [
              { title: "Event Timing, Handled", desc: "Multiple pickups, photo stops, and venue schedules are planned in advance and adjusted on the fly." },
              { title: "Group-Sized Vehicles", desc: "Escalades, Suburbans, and Sprinter vans keep your whole party together — up to 14 passengers." },
            ]
      ),
      vehicles: s.trio,
      faqs: [
        { q: `How much does ${s.noun} cost in ${s.region}?`, a: `Pricing depends on date, duration, and vehicle. Every booking is quoted as one flat, all-inclusive rate — tolls, taxes, and gratuity included. Call ${PHONE} for an exact quote.` },
        somber
          ? { q: "Can you coordinate with our funeral director?", a: "Yes. We regularly work directly with funeral homes on timing, staging, and procession order, so your family does not have to relay logistics." }
          : care
          ? { q: "Can you transport a patient after a procedure?", a: "Yes, for non-emergency discharges. Your chauffeur assists from the hospital entrance to the vehicle and to your door. We coordinate timing with the discharge desk when needed." }
          : { q: "Can you handle multiple stops or pickups?", a: "Absolutely. Multi-stop itineraries, split pickups, and mid-event moves are all standard — just share the plan when you book and we build the schedule around it." },
        { q: "How early should we reserve?", a: `For ${s.occasions.split(",")[0]}, we suggest booking as soon as your date is set — popular weekends fill first. Last-minute requests are welcome when vehicles are available.` },
        ...CORE_FAQS.slice(0, 2),
      ].slice(0, 5),
      ctaTitle: somber ? "Let Us Handle the Transportation" : `Book Your ${s.kw}`,
      ctaSubtitle: somber
        ? `Dignified service, gently coordinated — call ${PHONE} any time.`
        : `Flat-rate, chauffeured, and confirmed in minutes — reserve online or call ${PHONE}.`,
    },
  };
}

function vehiclePage(v, i) {
  const introSets = [
    [
      `Reserve the ${v.vehicle} — a ${v.cls} seating ${v.pax} — with a professional chauffeur from 92 Limo Service. It is the right vehicle for ${v.best}, and it arrives detailed, fueled, and stocked with water and chargers.`,
      `This is chauffeured service, not a rental counter. Your licensed, background-checked chauffeur handles the driving, the luggage, and the timing, so you use the ride to work, relax, or celebrate. Hourly hires, one-way transfers, and airport runs are all available.`,
      `The ${v.vehicle} pairs beautifully with the rest of our fleet for larger plans: sedans lead the executive convoy, SUVs carry the family, and Sprinter vans move the whole group. Mixed-vehicle bookings for weddings and corporate events are quoted as one flat package.`,
      `Availability is 24/7 across Maryland, Washington DC, and Northern Virginia. Request your quote online or call ${PHONE} — every booking is confirmed with one flat, all-inclusive rate.`,
    ],
    [
      `Some occasions deserve a specific vehicle. The ${v.vehicle} is our ${v.cls} — ${v.pax}, chauffeur-driven, and ideal for ${v.best}. 92 Limo Service keeps it showroom-clean and books it around the clock across the DMV.`,
      `Every reservation includes a professional chauffeur who arrives early, loads luggage, and drives the route he has already planned around traffic. Airport pickups add real-time flight tracking and meet-and-greet service at BWI, DCA, and Dulles.`,
      `Book it by the trip or by the hour. Point-to-point transfers are quoted flat; hourly charters keep the vehicle and chauffeur with you for multi-stop days, evening events, or as-directed business travel.`,
      `Compare that to a rideshare guess or a rental you have to drive yourself, and the choice is easy. Call ${PHONE} or reserve online — the ${v.vehicle} books quickly on weekends.`,
    ],
  ];
  return {
    slug: v.slug,
    entry: {
      metaTitle: `${v.kw} | 92 Limo Service`,
      metaDescription: `${v.kw}: chauffeur-driven ${v.cls} (${v.pax}). Flat rates, 24/7 availability across MD, DC & VA. Book online or call ${PHONE}.`,
      eyebrow: "OUR FLEET",
      h1: v.kw,
      subtitle: `A chauffeur-driven ${v.cls} for ${v.best} — flat-rated and available 24/7.`,
      image: v.img,
      alt: `${v.vehicle} — chauffeured ${v.cls} from 92 Limo Service`,
      highlightsHeading: `Why Clients Choose the ${v.vehicle}`,
      intro: introSets[i % 2],
      highlights: pickHighlights([
        { title: `Seats ${v.pax.replace("up to ", "Up to ")}`, desc: `Comfortable, climate-controlled seating for ${v.pax} with generous luggage space.` },
        { title: "Chauffeur Included", desc: "Every booking is chauffeur-driven — licensed, insured, and professionally trained. Never drive yourself." },
        { title: "Hourly or Point-to-Point", desc: "Book a one-way transfer at a flat rate, or keep the vehicle by the hour for multi-stop plans." },
      ]),
      vehicles: v.trio,
      faqs: [
        { q: `Is the ${v.vehicle} self-drive or chauffeured?`, a: `All of our vehicles are chauffeur-driven. Your licensed, insured chauffeur handles driving, luggage, and timing on every reservation.` },
        { q: `How many passengers fit in the ${v.vehicle}?`, a: `The ${v.vehicle} seats ${v.pax} comfortably, with dedicated space for luggage. For larger groups, ask about our Sprinter vans and multi-vehicle packages.` },
        { q: `Can I book the ${v.vehicle} by the hour?`, a: `Yes. Hourly charters keep the vehicle and chauffeur with you for events, meetings, tours, and nights out — quoted flat and in advance.` },
        ...CORE_FAQS.slice(0, 2),
      ].slice(0, 5),
      ctaTitle: `Reserve the ${v.vehicle}`,
      ctaSubtitle: `Chauffeur-driven, flat-rated, and detailed before every trip — book online or call ${PHONE}.`,
    },
  };
}

function routePage(r, i) {
  const introSets = [
    [
      `92 Limo Service provides private, chauffeured car service from ${r.from} to ${r.to} — ${r.miles} miles of door-to-door comfort, typically ${r.time} via ${r.roads}. One flat rate, quoted before you book, covers the entire trip including tolls, taxes, and gratuity.`,
      `Your chauffeur arrives early, loads every bag, and plans the route in real time around traffic. Drop-off works at any address: ${r.dropoffs}. Reverse trips, round trips, and late-night departures are all available 24/7.`,
      `Compare the alternatives: rideshares surge and cancel on long runs, trains lock you to a schedule and a station, and driving yourself means traffic, tolls, and parking. A private chauffeured transfer costs a known flat amount and turns the drive into productive or restful time.`,
      `Choose a Mercedes E-Class or BMW 7 Series for solo and business travel, an Escalade or Suburban for families and luggage, or a Sprinter van that keeps groups of up to 14 together. Call ${PHONE} or book online — every reservation is confirmed with an all-inclusive quote.`,
    ],
    [
      `Need a reliable ride from ${r.from} to ${r.to}? 92 Limo Service runs this route every week — about ${r.miles} miles in ${r.time} via ${r.roads} — with professional chauffeurs, luxury vehicles, and flat all-inclusive pricing.`,
      `Everything is door-to-door. We pick you up at home, the office, or the terminal, and deliver you to ${r.dropoffs}. Luggage help is included, water and chargers are on board, and the cabin stays quiet enough to work or nap the whole way.`,
      `Long-distance trips are where chauffeured service earns its keep: no surge pricing, no driver cancellations an hour before departure, and no handoffs. The vehicle that picks you up is the vehicle that drops you off, with the same chauffeur throughout.`,
      `Round trips and multi-day itineraries are welcome, and corporate accounts get priority scheduling with consolidated billing. Reserve online in minutes or call ${PHONE} — we operate 24/7.`,
    ],
  ];
  return {
    slug: r.slug,
    entry: {
      metaTitle: `${r.kw} | 92 Limo Service`,
      metaDescription: `${r.kw}: private chauffeured transfer, ${r.time} door-to-door. Flat all-inclusive rate, luxury vehicles, 24/7. Book online or call ${PHONE}.`,
      eyebrow: `${r.from.toUpperCase()} → ${r.to.toUpperCase()}`,
      h1: r.kw,
      subtitle: `Private chauffeured transfers from ${r.from} to ${r.to} — ${r.time} door-to-door at one flat, all-inclusive rate.`,
      image: i % 2 === 0 ? "longDistance" : "dcSkyline",
      alt: `Luxury chauffeured vehicle — ${r.kw.toLowerCase()} by 92 Limo Service`,
      highlightsHeading: `The Smart Way to Travel ${r.from} → ${r.to}`,
      intro: introSets[i % 2],
      highlights: pickHighlights([
        { title: "Door-to-Door, Nonstop", desc: `No stations, no layovers, no shared stops — direct from your door to ${r.dropoffs.split(",")[0]} and beyond.` },
        { title: `${r.time[0].toUpperCase()}${r.time.slice(1)} Travel Time`, desc: `About ${r.miles} miles via ${r.roads}, with your chauffeur routing around slowdowns in real time.` },
      ]),
      vehicles: r.miles > 80 ? GROUP_TRIO : SEDAN_TRIO,
      faqs: [
        { q: `How much does car service from ${r.from} to ${r.to} cost?`, a: `The trip is quoted as one flat, all-inclusive rate based on vehicle choice — tolls, taxes, and gratuity included. Call ${PHONE} or request a quote online for an exact price.` },
        { q: `How long does the trip take?`, a: `Plan on ${r.time} for the ${r.miles}-mile run via ${r.roads}, depending on traffic. Your chauffeur monitors conditions and adjusts the route in real time.` },
        { q: "Can I book a round trip?", a: "Yes — round trips and wait-and-return bookings are common on this route, and reserving both legs together guarantees your return vehicle." },
        ...CORE_FAQS.slice(0, 2),
      ].slice(0, 5),
      ctaTitle: `Book ${r.from} to ${r.to}`,
      ctaSubtitle: `Private, flat-rated, and chauffeured — reserve your transfer in minutes.`,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  EMIT                                                               */
/* ------------------------------------------------------------------ */

const pages = [];
CITIES.forEach((c, i) => pages.push(cityPage(c, i)));
AIRPORT_PAGES.forEach((a, i) => pages.push(airportPage(a, i)));
SERVICE_PAGES.forEach((s, i) => pages.push(servicePage(s, i)));
VEHICLE_PAGES.forEach((v, i) => pages.push(vehiclePage(v, i)));
ROUTE_PAGES.forEach((r, i) => pages.push(routePage(r, i)));

const seen = new Set();
for (const p of pages) {
  if (seen.has(p.slug)) throw new Error(`duplicate slug: ${p.slug}`);
  seen.add(p.slug);
}

// Image keys become IMAGES.<key> references in the emitted module.
const body = pages
  .map(({ slug, entry }) => {
    const json = JSON.stringify(entry, null, 2)
      .replace(/^(\s*)"image": "(\w+)"/m, '$1"image": IMAGES.$2')
      .replace(/\n/g, "\n  ");
    return `  "${slug}": ${json},`;
  })
  .join("\n\n");

const out = `// AUTO-GENERATED by scripts/generateLandingPages.js — edit the generator, not this file.
import { IMAGES } from "@/lib/data";

export const GENERATED_LANDING_PAGES = {
${body}
};

export const GENERATED_SLUGS = Object.keys(GENERATED_LANDING_PAGES);
`;

const dest = path.join(__dirname, "..", "src", "lib", "landingPagesGenerated.js");
fs.writeFileSync(dest, out);
console.log(`Wrote ${pages.length} landing pages to ${dest}`);
