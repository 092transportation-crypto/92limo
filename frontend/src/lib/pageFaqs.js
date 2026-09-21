// Five page-specific FAQs for every page that does not carry its own FAQ data
// (landing pages, guides, blog posts, booking and contact already do). Keyed by
// pathname. Import-free so scripts/prerender.js can evaluate it — the visible
// accordion, the FAQPage JSON-LD and the crawler HTML all read from here.
// Policy numbers mirror POLICY in data.js and PoliciesPage.jsx.

const PHONE_TXT = "(877) 609-1919";
const WAIT_TXT =
  "Airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals, timed from actual touchdown. All other pickups include 15 minutes.";
const CANCEL_TXT =
  "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings cancel free of charge up to 12 hours before pickup.";
const QUOTE_TXT =
  "Every trip is quoted before you ride. The quoted rate covers the base transportation charge, and gratuity, tolls, parking and any other applicable charges are disclosed before you confirm.";

export const PAGE_FAQS = {
  "/services": [
    { q: "What services does 92 Limo Service offer?", a: "Airport transfers (BWI, DCA, IAD, PHL and Martin State), corporate and executive travel, hourly as-directed chauffeur service, weddings, proms, birthdays and anniversaries, wine tours, and long-distance private car service across Maryland, Washington DC and Northern Virginia." },
    { q: "Which service should I book for a day with several stops?", a: "Hourly chauffeur service. You keep the same vehicle and chauffeur for the whole itinerary, stops and waiting included. For a single pickup and drop-off, a point-to-point transfer is usually the better value — we will quote both on request." },
    { q: "Are your services available overnight and on holidays?", a: "Yes. Dispatch and reservations run 24 hours a day, 365 days a year, so pre-dawn airport runs, late-night returns and holiday travel are routine." },
    { q: "How is pricing handled across services?", a: QUOTE_TXT },
    { q: "Can one reservation cover a group with several vehicles?", a: `Yes. Weddings, corporate events and group airport moves are coordinated as a single booking with multiple vehicles — Sprinter vans for groups and sedans or SUVs for VIPs. Call ${PHONE_TXT} or use the booking form and describe the group.` },
  ],
  "/fleet": [
    { q: "How many passengers does each vehicle hold?", a: "Business and First Class Sedans seat up to 3 passengers, the Midsize SUV seats 3 with extra luggage room, Luxury and Premium SUVs seat up to 5, and Mercedes Sprinter vans and the Sprinter Limo seat up to 13." },
    { q: "Which vehicle is best for airport trips with a lot of luggage?", a: "A Luxury or Premium SUV (Chevrolet Suburban or Cadillac Escalade) carries up to 5 passengers and about 5 bags. For larger parties, a Sprinter Shuttle or Sprinter Executive van carries up to 13 passengers with their luggage in one vehicle." },
    { q: "Am I guaranteed the exact make and model shown?", a: "Reservations are made by vehicle class. The exact make and model may vary within that class, and if a vehicle becomes unavailable we provide a comparable or upgraded vehicle at no additional cost — never a smaller one without your agreement." },
    { q: "Are the vehicles owned by 92 Limo Service?", a: "Yes. The fleet is owned and maintained by 92 Transportation LLC, commercially insured, inspected daily and detailed before each ride." },
    { q: "Can I request a child car seat?", a: "Yes. Infant, convertible and booster seats are available on request for an add-on fee that is included in your quote. Tell us the child's age when you book." },
  ],
  "/service-areas": [
    { q: "What areas does 92 Limo Service cover?", a: "All of Maryland including Baltimore City, every Washington DC neighborhood, Northern Virginia, the Delaware beaches and Wilmington, and southern Pennsylvania — plus long-distance trips to Philadelphia and New York City." },
    { q: "Which airports do you serve?", a: "BWI Marshall, Reagan National (DCA), Washington Dulles (IAD), Philadelphia International (PHL) and Martin State Airport, with real-time flight tracking on every pickup." },
    { q: "My town is not listed — can I still book?", a: `Almost certainly. The pages listed here are the places we are asked about most, not the limit of where we drive. Send your pickup and drop-off addresses through the booking form or call ${PHONE_TXT}.` },
    { q: "Do you charge extra for pickups far from your office?", a: "Your quote is based on the full trip, and it is confirmed before you ride. " + QUOTE_TXT },
    { q: "Where is 92 Limo Service based?", a: "Our office is at 9836 Lyon Ave, Laurel, MD 20723 — between Baltimore and Washington, which lets one dispatch center cover BWI, DCA and IAD." },
  ],
  "/about": [
    { q: "Who operates 92 Limo Service?", a: "92 Limo Service is the trade name of 92 Transportation LLC, a Maryland-based chauffeured transportation company with its office at 9836 Lyon Ave, Laurel, MD 20723." },
    { q: "Is 92 Limo Service licensed and insured?", a: "Yes. The company is licensed by the Maryland Public Service Commission as Carrier #6325, and every vehicle carries commercial auto liability coverage. Certificates of insurance are available to corporate clients on request." },
    { q: "How are chauffeurs vetted?", a: "Chauffeurs are licensed, background-checked and drug-tested, and work to professional standards: business attire, luggage assistance, defensive driving and discretion." },
    { q: "Do you broker rides to other companies?", a: "No. Rides are performed in vehicles owned and maintained by 92 Transportation LLC." },
    { q: "Do you offer corporate accounts?", a: "Yes — with monthly consolidated invoicing, itemized receipts, a dedicated account contact and priority dispatch. Email info@92limo.com to set one up." },
  ],
  "/reviews": [
    { q: "Where do these reviews come from?", a: "They are reviews left by clients on our Google Business Profile. The link on this page opens the full list on Google." },
    { q: "How can I leave a review?", a: "Search for 92 Limo Service on Google and choose Write a review on the business profile. Honest feedback — good or bad — helps other travelers and helps us improve." },
    { q: "What do clients mention most often?", a: "Punctuality, clean vehicles, help with luggage and chauffeurs who wait through flight delays — the basics of airport car service done consistently." },
    { q: "What if something went wrong on my ride?", a: `Call ${PHONE_TXT} or email info@92limo.com so we can review the trip records with you. Disputed charges should be reported within 7 days.` },
    { q: "Can I request the same chauffeur again?", a: "You can ask for a specific chauffeur in the notes when you book. We accommodate the request whenever the schedule allows, though it cannot be guaranteed." },
  ],
  "/gallery": [
    { q: "Are these photos of your actual vehicles?", a: "Vehicle images on this site are representative of each vehicle class. Reservations are made by class, and the exact make and model may vary within it." },
    { q: "Can I see a vehicle before booking a wedding or event?", a: `Call ${PHONE_TXT} and we will do our best to arrange a viewing of the vehicle class you are considering, subject to availability.` },
    { q: "What vehicle classes are available?", a: "Business Sedan, First Class Sedan, Midsize SUV, Luxury SUV, Premium SUV, Sprinter Shuttle, Sprinter Executive and Sprinter Limo." },
    { q: "How are vehicles prepared before a ride?", a: "Every vehicle is inspected daily and detailed before each ride." },
    { q: "Which vehicle photographs best for weddings?", a: "Couples usually choose a First Class Sedan or Premium SUV for the couple and a Sprinter for the wedding party. Tell us your party size and we will recommend a combination." },
  ],
  "/coverage": [
    { q: "Do you serve all of Maryland?", a: "Yes — all 23 counties and Baltimore City, from Western Maryland to the Eastern Shore and Ocean City." },
    { q: "Do you cover Delaware and Pennsylvania?", a: "Yes. We serve Delaware including Wilmington and the Bethany and Rehoboth beaches, and southern Pennsylvania including York and Lancaster." },
    { q: "Can you pick up in Virginia and drop off in Maryland?", a: "Yes. Trips that cross between Virginia, DC and Maryland are everyday work, including transfers between Dulles, Reagan National and BWI." },
    { q: "How far will you drive on a long-distance trip?", a: "Philadelphia, New York City and points along the I-95 corridor are common. For anything farther, send the itinerary and we will quote it." },
    { q: "Is the price higher outside the core service area?", a: "Pricing reflects the full trip distance and time. " + QUOTE_TXT },
  ],
  "/policies": [
    { q: "What is the cancellation policy?", a: CANCEL_TXT + " Cancellations inside those windows may be charged up to 100% of the quoted fare." },
    { q: "How much waiting time is included?", a: WAIT_TXT + " Additional waiting time is billed in 15-minute increments and disclosed before confirmation." },
    { q: "When is my card charged?", a: "Only after we confirm your reservation and the rate with you — never at the time of the online request. A temporary pre-authorization hold may be placed before the trip." },
    { q: "What counts as a no-show?", a: "A reservation is treated as a no-show when the passenger cannot be reached and does not appear within the complimentary waiting-time allowance. No-shows are charged the full quoted fare plus applicable charges already incurred." },
    { q: "What happens if my reserved vehicle is unavailable?", a: "We provide a comparable or upgraded vehicle at no additional cost. We never substitute a smaller vehicle without your agreement, and if no comparable vehicle is available you may cancel for a full refund." },
  ],
  "/blog": [
    { q: "What does the 92 Limo Service blog cover?", a: "Practical guides to airport transportation at BWI, DCA and IAD, comparisons of car service with rideshare, local transportation guides for Maryland cities, and planning advice for weddings, corporate travel and events." },
    { q: "Who writes these guides?", a: "They are written by the 92 Limo Service team from day-to-day experience dispatching and driving these routes." },
    { q: "Is BWI, DCA or IAD the best airport for my trip?", a: "It depends on where you are starting and the airline. BWI is closest for most of central Maryland, DCA for close-in DC suburbs, and IAD for many international flights. Our airport guides compare them in detail." },
    { q: "How do I get a quote for a trip mentioned in an article?", a: `Use the booking form or call ${PHONE_TXT}. ` + QUOTE_TXT },
    { q: "Can I suggest a topic?", a: "Yes — email info@92limo.com. Questions from riders are where most of these articles start." },
  ],
  "/press": [
    { q: "Who is the media contact for 92 Limo Service?", a: `Email info@92limo.com with "Press" in the subject line, or call ${PHONE_TXT}. Dispatch is staffed 24/7 and will route your request.` },
    { q: "What is the correct company name to use?", a: "92 Limo Service on first reference; the legal entity is 92 Transportation LLC. The company is licensed by the Maryland Public Service Commission as Carrier #6325." },
    { q: "Can we use your logo and photos?", a: "Yes, for editorial coverage of the company. The logo is available on this page; email us if you need a different format or additional images." },
    { q: "Can you comment on airport and event transportation topics?", a: "Yes. We can speak to ground transportation at BWI, DCA and IAD, event-day logistics at Maryland and DC venues, and corporate travel in the Baltimore–Washington region." },
    { q: "Where is the company located?", a: "9836 Lyon Ave, Laurel, MD 20723, serving Maryland, Washington DC and Northern Virginia." },
  ],
  "/partners": [
    { q: "Who is the partner program for?", a: "Hotels and concierge desks, wedding and event planners, venues, travel agents and corporate travel managers, executive assistants, and other transportation operators who need reliable coverage in Maryland, DC and Northern Virginia." },
    { q: "How do I become a partner?", a: `Email info@92limo.com or call ${PHONE_TXT} and tell us about your business and the kind of trips you expect to refer. We will reply with the arrangement that fits.` },
    { q: "How do referral terms work?", a: "Terms depend on the type of partnership and are agreed in writing with each partner. Contact us and we will walk you through the options." },
    { q: "Will my clients be looked after?", a: "Your referral is handled like any 92 Limo Service reservation: a confirmed quote before the ride, flight tracking on airport pickups, licensed and background-checked chauffeurs, and 24/7 dispatch." },
    { q: "Do you work with other limousine companies?", a: "Yes. Out-of-state operators use us as their on-the-ground affiliate for Baltimore–Washington trips. We are licensed by the Maryland PSC as Carrier #6325 and can provide certificates of insurance." },
  ],

  // Rendered inline by CarSeatServicePage.jsx.
  "/car-seat-service": [
  {
    q: "Is there an extra charge for car seats?",
    a: "Car seats are available on request for a small add-on fee that is included in your fixed quote up front — no surprises at pickup. Let us know how many seats you need when you book and we'll confirm the exact price.",
  },
  {
    q: "What age/weight car seats do you provide?",
    a: "We provide three types: infant car seats for babies 0–12 months up to 22 lbs, convertible car seats for children 1–4 years, and booster seats for children 4–8 years. Tell us your child's age and weight when booking and we'll bring the correct seat.",
  },
  {
    q: "How do I request a car seat?",
    a: "Simply select a car seat when booking online, add it in the reservation notes, or call us at (877) 609-1919. We'll confirm the seat type with you before your trip and have it installed before pickup.",
  },
  {
    q: "Are the car seats clean and sanitized?",
    a: "Yes. Every car seat is inspected, cleaned, and sanitized before each trip. Our chauffeurs check straps, buckles, and padding, and seats are properly installed in the vehicle before your pickup.",
  },
  {
    q: "Can I bring my own car seat?",
    a: "Absolutely. You're welcome to bring your own car seat, and your chauffeur will help install it and store it during your trip. If you're flying, we can also stow it with your luggage at no extra charge.",
  },
],

  // Service pages (ServiceDetail)
  "/airport-transportation": [
    { q: "Which airports do you serve?", a: "BWI Marshall, Reagan National (DCA), Washington Dulles (IAD), Philadelphia International (PHL) and Martin State Airport — both pickups and drop-offs, 24/7." },
    { q: "What happens if my flight is delayed?", a: "Every airport pickup is flight-tracked, so your chauffeur is dispatched against the actual arrival time, not the scheduled one. " + WAIT_TXT },
    { q: "Where will my chauffeur meet me?", a: "Curbside at the arrivals level is included. Meet & greet inside baggage claim with a name sign and luggage assistance is available for an additional charge." },
    { q: "How early should I be picked up for a departure?", a: "We back-calculate the pickup from your flight time with realistic traffic assumptions for the day and hour. Tell us the flight and we will recommend a pickup time when we confirm." },
    { q: "Can you provide car seats for an airport transfer?", a: "Yes. Infant, convertible and booster seats are available on request for an add-on fee included in your quote, installed before the vehicle arrives." },
  ],
  "/corporate-transportation": [
    { q: "Do you offer corporate accounts?", a: "Yes — monthly consolidated invoicing, itemized receipts, a dedicated account contact and priority dispatch. Corporate accounts may be invoiced under separate written terms." },
    { q: "Can an assistant book on behalf of an executive?", a: "Yes. Book with your own contact details and put the passenger's name and mobile number in the notes so the chauffeur can reach them directly." },
    { q: "Can you provide a certificate of insurance and vendor paperwork?", a: "Yes. Certificates of insurance and vendor onboarding documents are available to corporate clients on request." },
    { q: "Do you handle roadshows and multi-stop days?", a: "Yes. Hourly as-directed service keeps one chauffeur and vehicle with the traveler for the full itinerary, with the schedule coordinated by dispatch." },
    { q: "How do you protect passenger confidentiality?", a: "Discretion is a working standard for our chauffeurs: conversations and destinations stay private, and trip details are shared only with the people who booked." },
  ],
  "/wedding-transportation": [
    { q: "How far ahead should we book wedding transportation?", a: "As early as you can once the date and venue are set — Sprinter vans and limousines for peak-season Saturdays are the first vehicles to sell out." },
    { q: "Can you move the wedding party and guests as well as the couple?", a: "Yes. A typical plan pairs a First Class Sedan or Premium SUV for the couple with Sprinter vans (up to 13 passengers each) for the wedding party or guest shuttles between hotel, ceremony and reception." },
    { q: "Do you coordinate with our planner and venue?", a: "Yes. Share the timeline and contacts and dispatch will build the pickup schedule around it, including photo stops and the end-of-night return." },
    { q: "What is the cancellation policy for weddings?", a: "Special-event bookings, including weddings, cancel free of charge up to 12 hours before the scheduled pickup. Inside 12 hours the deposit may be forfeited and up to 100% of the quoted fare may be charged." },
    { q: "How is wedding transportation priced?", a: "Usually hourly for the vehicles that stay with you, and per transfer for simple guest moves. " + QUOTE_TXT },
  ],
  "/wine-tours": [
    { q: "Which wine regions do you cover?", a: "Maryland wine country — including Frederick, Carroll and Montgomery County vineyards — and Northern Virginia's Loudoun County wineries. Tell us where you want to go, or ask for suggestions by region." },
    { q: "How many wineries fit in a day?", a: "Most groups enjoy three, with time for a relaxed lunch. Tastings take longer than people expect, and an unhurried day is a better day." },
    { q: "Do we need to book the tastings ourselves?", a: "Yes — wineries take tasting reservations directly, and many require them for groups. Send us the confirmed times and we build the route and timing around them." },
    { q: "What vehicle works best for a wine tour?", a: "An SUV for up to 5 guests, or a Mercedes Sprinter for groups up to 13 so everyone rides together." },
    { q: "How is a wine tour priced?", a: "Hourly, as-directed — the vehicle and chauffeur stay with your group all day. " + QUOTE_TXT },
  ],
  "/birthday-celebrations": [
    { q: "What vehicles do you offer for birthdays?", a: "Sedans and SUVs for dinners and small groups, and the Mercedes Sprinter Limo or Sprinter vans for parties of up to 13 who want to ride together." },
    { q: "Can we make several stops during the night?", a: "Yes. Birthday bookings are usually hourly and as-directed, so dinner, a venue or two and the ride home are all part of one reservation." },
    { q: "Can you pick up guests from different addresses?", a: "Yes. List the pickup addresses when you book and we will sequence them so the group arrives together." },
    { q: "Is there a cancellation window for party bookings?", a: CANCEL_TXT },
    { q: "Can I book a surprise for someone else?", a: "Yes. Book under your own contact details, add the guest of honor's name in the notes, and tell us it is a surprise so the chauffeur plays along." },
  ],
  "/prom-transportation": [
    { q: "Is prom transportation safe for students?", a: "Chauffeurs are licensed, background-checked and drug-tested, vehicles are commercially insured, and the parent or guardian who books receives the confirmed itinerary." },
    { q: "Who needs to book — the student or a parent?", a: "A parent or guardian should book. A valid credit or debit card is required to confirm every reservation, and the adult who books is our point of contact on the night." },
    { q: "How many students fit in one vehicle?", a: "Up to 5 in a Luxury or Premium SUV and up to 13 in a Mercedes Sprinter or Sprinter Limo." },
    { q: "How early should we book for prom season?", a: "Early. Spring Fridays and Saturdays are the busiest nights of the year for Sprinters and limousines, and they sell out first." },
    { q: "Can the group stop for photos and dinner?", a: "Yes. Prom bookings are typically hourly, so photo locations, dinner and the return home are all covered by the same vehicle and chauffeur." },
  ],
  "/hourly-chauffeur": [
    { q: "What is as-directed hourly service?", a: "You reserve a vehicle and chauffeur for a block of time rather than a single route. Stops, waiting and changes of plan are all included in the time you book." },
    { q: "When is hourly better than point-to-point?", a: "When the day has several stops, open-ended timing, or waiting between appointments. For a single pickup and drop-off, a transfer is usually less expensive — we will quote both on request." },
    { q: "Can I extend the booking on the day?", a: "Yes, subject to the vehicle's next commitment. Tell your chauffeur or call dispatch, and additional time is billed at the confirmed hourly rate." },
    { q: "Does the same chauffeur stay with me?", a: "Yes. One chauffeur and one vehicle stay with you for the whole booking." },
    { q: "How is hourly service priced?", a: "By vehicle class and duration, confirmed before you ride. " + QUOTE_TXT },
  ],
  "/long-distance-transportation": [
    { q: "What long-distance routes do you run most?", a: "Baltimore and Washington to Philadelphia and New York City, airport transfers to PHL, JFK and Newark, and summer trips to Ocean City and the Delaware beaches." },
    { q: "Is long-distance car service priced by the mile or by the hour?", a: "One-way trips are quoted as a flat transfer based on the route. If you need the vehicle to wait and return the same day, we quote the round trip. " + QUOTE_TXT },
    { q: "Can we stop along the way?", a: "Yes. Rest stops are part of any long trip, and planned stops for meals or additional pickups can be built into the quote." },
    { q: "Which vehicle is most comfortable for a multi-hour trip?", a: "A First Class Sedan for one to three travelers, a Premium SUV for up to 5 with luggage, or a Sprinter Executive van for a group that wants to work or rest on the way." },
    { q: "How far in advance should I book?", a: "A few days ahead is ideal for long-distance trips so a chauffeur can be scheduled for the full day. Same-day requests are accommodated when availability allows." },
  ],
  "/anniversary-limo-service": [
    { q: "What does an anniversary limo booking usually include?", a: "A chauffeur and vehicle for the evening — pickup at home or your hotel, the drive to dinner or a show, waiting while you celebrate, and the ride home. Bookings are typically hourly and as-directed." },
    { q: "Which vehicle do couples choose?", a: "Most couples choose a First Class Sedan (BMW 7 Series or Mercedes S-Class). For a celebration with family or friends, a Premium SUV seats up to 5 and the Sprinter Limo up to 13." },
    { q: "Can I arrange a surprise?", a: "Yes. Book under your own details, tell us it is a surprise in the notes, and share any timing your chauffeur should know. If you would like flowers or a note waiting in the car, bring them to the chauffeur or ask us when you book." },
    { q: "Can we combine dinner with another stop?", a: "Yes. A waterfront stop in Annapolis, a show in Baltimore or DC, or a return to the place you were married — hourly service covers as many stops as the evening needs." },
    { q: "How is it priced and what if plans change?", a: QUOTE_TXT + " " + CANCEL_TXT },
  ],
};

// City airport pages (/airport-car-service/<city>) share a template, filled
// with the city's name and nearest airport from CITIES in data.js.
export const cityFaqs = (city) => [
  { q: `How do I book airport car service from ${city.name}?`, a: `Use the booking form or call ${PHONE_TXT} with your ${city.name} pickup address, flight and passenger count. We reply with a confirmed quote before anything is charged.` },
  { q: `Which airport is closest to ${city.name}?`, a: `${city.airport} is the usual choice from ${city.name} (${city.region}), and we serve BWI, DCA, IAD, PHL and Martin State from here as well.` },
  { q: `Do you track flights for pickups returning to ${city.name}?`, a: "Yes. Every airport pickup is flight-tracked, so the chauffeur is dispatched against your actual arrival. " + WAIT_TXT },
  { q: `Can I get an early-morning pickup in ${city.name}?`, a: `Yes. Dispatch runs 24/7, and pre-dawn departures from ${city.name} are booked the day before so your chauffeur is committed — not dependent on who happens to be nearby.` },
  { q: "What does the quote include?", a: QUOTE_TXT },
];
