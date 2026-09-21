// Long-form copy for the Booking, Contact and About pages. Kept free of imports
// so scripts/prerender.js can evaluate it next to data.js — the React pages and
// the prerendered crawler HTML must render the same words. Policy numbers here
// (45/60/15 min waiting, 3 h / 12 h cancellation) mirror POLICY in data.js and
// PoliciesPage.jsx; change them together.

export const BOOKING_CONTENT = {
  stepsHeading: "How Booking Works",
  steps: [
    { title: "Send your trip details", text: "Fill in the form above with your pickup and drop-off addresses, date, time, passenger count and the vehicle class you prefer. For airport pickups add the airline and flight number so dispatch can track the flight. It takes about a minute, and no card is needed to request a quote." },
    { title: "Get a confirmed, transparent quote", text: "A dispatcher reviews every request personally, around the clock, and replies by email, text or phone with a flat quote for your exact route and vehicle. Gratuity, tolls, parking and any other applicable charges are disclosed before you confirm, never after." },
    { title: "Confirm and relax", text: "Approve the quote and your reservation is locked in with a written confirmation. Your card is charged only after we confirm the reservation and the rate with you — never at the time of the online request." },
    { title: "Meet your chauffeur", text: "Chauffeurs arrive early, help with luggage and follow a traffic-aware route. For airport arrivals we monitor your flight and adjust the pickup time automatically if it lands early or late." },
  ],
  sections: [
    {
      heading: "What You Can Reserve Here",
      paragraphs: [
        "This one form books every service 92 Limo Service offers: airport transfers to and from BWI Marshall, Reagan National (DCA), Dulles (IAD), Philadelphia (PHL) and Martin State Airport; corporate and executive travel; hourly as-directed chauffeur service; weddings, proms, birthdays and wine tours; and long-distance private car service to Philadelphia, New York City, the Delaware beaches and anywhere along the I-95 corridor.",
        "Choose the vehicle class that fits your party — Business Sedan, First Class Sedan, Midsize, Luxury or Premium SUV, Mercedes Sprinter van or Sprinter Limo. Reservations are made by vehicle class, and if you are unsure what you need, tell us the passenger and luggage count in the notes and we will recommend the right vehicle.",
      ],
    },
    {
      heading: "When to Book",
      paragraphs: [
        "Book by the night before at the latest, and earlier for pre-dawn airport departures, holidays, graduation and prom season, and major event weekends when vehicles sell out. Sprinter vans, limousines and multi-vehicle wedding or group bookings should be reserved as far ahead as you can. Same-day requests are welcome whenever availability allows — for anything inside the next few hours, calling (877) 609-1919 is faster than the form.",
      ],
    },
    {
      heading: "Changes & Cancellations",
      paragraphs: [
        "Plans change, and our policy is built for that. Sedan and SUV reservations can be cancelled at no charge up to 3 hours before the scheduled pickup time. Sprinter vans, limousines and special-event bookings can be cancelled at no charge up to 12 hours before pickup. To change or cancel, call (877) 609-1919 or reply to your confirmation email; changes are subject to availability and any difference in rate is disclosed before we re-confirm.",
      ],
    },
  ],
  faqHeading: "Booking Questions",
  faqs: [
    { q: "Is my ride confirmed as soon as I submit the form?", a: "Not yet. Submitting the form sends your request to our dispatch team. Your ride is confirmed once we reply with a quote and you approve it — you will receive a written confirmation with every trip detail." },
    { q: "Do I need a credit card to request a quote?", a: "No. The online request does not ask for a card. A valid credit or debit card is required only to confirm the reservation, and it is charged only after we have confirmed the reservation and the rate with you." },
    { q: "Can I book a round trip or several stops?", a: "Yes. Describe the return leg or additional stops in the notes field, or submit the legs as separate requests. For itineraries with several stops or open-ended timing, hourly chauffeur service is usually the better value, and we will quote both ways on request." },
    { q: "Can I book for someone else?", a: "Yes — executive assistants, travel managers and family members book for passengers every day. Enter your own contact details and put the passenger's name and mobile number in the notes so the chauffeur can reach them directly." },
    { q: "What if my flight is delayed or arrives early?", a: "Every airport pickup is flight-tracked, so the pickup time moves with your actual arrival. Airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals, timed from actual touchdown." },
    { q: "Do you provide child car seats?", a: "Car seats can be arranged in advance. Note the child's age and the type of seat needed in the form and we will confirm availability with your quote." },
  ],
};

export const CONTACT_CONTENT = {
  reachHeading: "The Best Way to Reach Us",
  reach: [
    { title: "Call or text — fastest, 24/7", text: "Dial or text (877) 609-1919 at any hour. Our dispatch line is staffed around the clock. Use the phone for anything time-sensitive: a ride in the next few hours, a change to today's reservation, a delayed flight, or locating your chauffeur at the terminal." },
    { title: "Email — for details and documents", text: "Write to info@92limo.com for itineraries, event schedules, corporate account setup, certificates of insurance, vendor onboarding paperwork and receipts. Email is monitored by the same 24/7 dispatch team." },
    { title: "Contact form — for general questions", text: "The form on this page goes to the same dispatch inbox. It is ideal for questions about our fleet, service area, special requests and feedback on a recent ride. To reserve a ride, the booking page collects the trip details we need to quote you accurately." },
  ],
  sections: [
    {
      heading: "What We Can Help You With",
      paragraphs: [
        "Most messages we receive fall into a few groups: questions about which vehicle fits a party and its luggage; quotes for weddings, proms, wine tours and multi-vehicle group moves; corporate travel managers opening an account with consolidated monthly invoicing; changes to an existing reservation; items left behind in a vehicle; and feedback about a chauffeur or a trip. Whatever the reason, include your name, a phone number and — if it concerns a booked ride — the pickup date, so the dispatcher who picks it up can act on it immediately.",
        "If you left something in one of our vehicles, call as soon as you notice. Vehicles are checked after every ride, so the sooner we hear from you the easier it is to reunite you with it.",
      ],
    },
    {
      heading: "Our Office & Service Territory",
      paragraphs: [
        "92 Limo Service is the trade name of 92 Transportation LLC, licensed by the Maryland Public Service Commission as Carrier #6325. Our office is at 9836 Lyon Ave, Laurel, MD 20723 — midway between Baltimore and Washington, which is how we cover BWI Marshall, Reagan National and Dulles from one dispatch center. Rides are by reservation and chauffeurs come to you, so there is no need to visit the office to book or pay.",
        "We serve all of Maryland and Baltimore City, every Washington DC neighborhood, Northern Virginia including Arlington, Alexandria, Fairfax, Tysons and Loudoun, plus the Delaware beaches, southern Pennsylvania and long-distance trips to Philadelphia and New York City.",
      ],
    },
  ],
  faqHeading: "Contact Questions",
  faqs: [
    { q: "What are your business hours?", a: "Dispatch and reservations are open 24 hours a day, 365 days a year, including holidays. Chauffeured rides run around the clock as well, so pre-dawn airport departures and late-night arrivals are routine." },
    { q: "How quickly will I get a reply?", a: "Calls and texts to (877) 609-1919 get the fastest response. Emails and contact-form messages go to the same 24/7 dispatch team and are answered in the order received. If your request is about a ride in the next 24 hours, please call instead of writing." },
    { q: "How do I change or cancel an existing reservation?", a: "Call (877) 609-1919 or reply to your confirmation email. Sedan and SUV reservations cancel free of charge up to 3 hours before pickup; Sprinter vans, limousines and special-event bookings up to 12 hours before pickup." },
    { q: "Can I get a quote through the contact form?", a: "You can, but the booking page is faster because it asks for the pickup and drop-off addresses, date, time and vehicle class we need to price the trip. Every request is answered with a transparent quote before anything is charged." },
    { q: "Who do I contact about a corporate account?", a: "Email info@92limo.com with your company name and approximate travel volume, or call and ask for corporate accounts. We will set up consolidated invoicing, a dedicated account contact and any vendor paperwork your company requires." },
  ],
};

// Verifiable company facts — AboutPage.jsx pairs these with icons by index.
export const ABOUT_CONTENT = {
  who: [
    "92 Limo Service is the trade name of 92 Transportation LLC, a Maryland-based luxury ground transportation company licensed by the Maryland Public Service Commission as Carrier #6325. We provide chauffeured airport, corporate, hourly, wedding and long-distance transportation across Washington DC, Maryland, and Northern Virginia.",
    "Our leadership and chauffeur team bring more than 15 years of transportation industry experience — airport operations, executive travel and event logistics — to every reservation. That experience shows in the details: chauffeurs positioned early, flights tracked in real time, and a live dispatcher on the phone 24 hours a day.",
    "Every vehicle we dispatch is commercially insured, inspected daily and detailed before each ride. Whether you're a frequent business traveler, planning a wedding, or coordinating group transportation, 92 Limo Service is the partner you can count on — every mile, every time.",
  ],
  facts: [
    { label: "Legal entity", value: "92 Transportation LLC, doing business as 92 Limo Service" },
    { label: "Headquarters", value: "9836 Lyon Ave, Laurel, MD 20723 — serving the DC–Baltimore metro" },
    { label: "Operating authority", value: "Maryland Public Service Commission Carrier #6325" },
    { label: "Insurance", value: "Commercial auto liability coverage on every vehicle; certificates of insurance available to corporate clients on request" },
    { label: "Experience", value: "15+ years of transportation industry experience across our leadership and chauffeur team" },
    { label: "Dispatch", value: "24/7 live dispatch and reservations — 365 days a year" },
  ],
  standards: [
    "Licensed, background-checked and drug-tested chauffeurs",
    "Business attire, name-sign greetings and luggage assistance",
    "Defensive-driving standards and traffic-aware route planning",
    "Vehicles detailed before every ride and inspected daily",
    "Real-time flight tracking on every airport pickup",
    "Discretion: what is said in the car stays in the car",
  ],
  corporate: [
    "Monthly consolidated invoicing and itemized receipts",
    "Dedicated account contact and priority dispatch",
    "Roadshow, conference and multi-stop coordination",
    "Certificates of insurance and vendor onboarding paperwork",
    "Standing airport pickups for visiting executives and clients",
  ],
  territory: [
    "Washington, DC — all neighborhoods",
    "Maryland — all 23 counties and Baltimore City",
    "Northern Virginia — Arlington, Alexandria, Fairfax, Tysons, Loudoun",
    "Delaware beaches and Wilmington · York & Lancaster, PA",
    "Long-distance to Philadelphia, New York City and the I-95 corridor",
  ],
  airportsNote:
    "Real-time flight tracking on every pickup, with 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international. Meet & greet inside baggage claim is available for an additional charge.",
  fleetNote:
    "Late-model sedans, SUVs and Mercedes Sprinter vans owned and maintained by 92 Transportation LLC — no brokered rides. Reservations are made by vehicle class.",
  values: [
    { title: "Safety First", desc: "Licensed, insured, and rigorously maintained vehicles operated by professional chauffeurs." },
    { title: "Uncompromising Quality", desc: "A meticulously detailed, late-model fleet and white-glove service on every ride." },
    { title: "Punctuality", desc: "Traffic-aware planning and built-in buffers mean we're early, never late." },
    { title: "Genuine Hospitality", desc: "Courteous, discreet chauffeurs who treat every guest like a VIP." },
  ],
};

export const PRESS_CONTENT = {
  title: "Press & Media | 92 Limo Service | Laurel, MD",
  description:
    "Press and media resources for 92 Limo Service (92 Transportation LLC) — company facts, boilerplate, recognition, logo and media contact. Laurel, Maryland.",
  h1: "Press & Media",
  subtitle: "Company facts, approved boilerplate, recognition and a direct line for journalists, bloggers and event organizers.",
  boilerplateHeading: "About 92 Limo Service",
  boilerplate: [
    "92 Limo Service is the trade name of 92 Transportation LLC, a chauffeured ground transportation company based at 9836 Lyon Ave, Laurel, Maryland. Licensed by the Maryland Public Service Commission as Carrier #6325, the company provides airport transfers, corporate travel, hourly chauffeur service, wedding and event transportation, and long-distance private car service across Maryland, Washington DC and Northern Virginia.",
    "The company serves BWI Marshall, Reagan National, Washington Dulles, Philadelphia International and Martin State airports with real-time flight tracking on every pickup, and operates a fleet of late-model sedans, SUVs and Mercedes Sprinter vans with 24/7 live dispatch. Its leadership and chauffeur team bring more than 15 years of transportation industry experience.",
  ],
  factsHeading: "Fast Facts",
  facts: [
    { label: "Company", value: "92 Limo Service (92 Transportation LLC)" },
    { label: "Address", value: "9836 Lyon Ave, Laurel, MD 20723" },
    { label: "Phone", value: "(877) 609-1919" },
    { label: "Email", value: "info@92limo.com" },
    { label: "Operating authority", value: "Maryland Public Service Commission Carrier #6325" },
    { label: "Hours", value: "Dispatch and reservations 24/7, 365 days a year" },
    { label: "Service area", value: "Maryland, Washington DC, Northern Virginia, Delaware and southern Pennsylvania" },
    { label: "Airports", value: "BWI, DCA, IAD, PHL and Martin State" },
  ],
  recognitionHeading: "Recognition",
  recognition: [
    "2026 Quality Business Award Winner",
    "Recognized among the top 1% of American businesses for quality",
    "Recognized as the leading limousine service in Reisterstown, MD",
    "Chamber of Commerce member — verified business directory listing",
  ],
  topicsHeading: "Topics We Can Speak To",
  topics: [
    "Getting to and from BWI, Reagan National and Dulles — timing, traffic and what travelers get wrong",
    "Event-day transportation at Maryland and DC venues: stadiums, arenas, casinos, race days and festivals",
    "Corporate travel and duty of care in the Baltimore–Washington region",
    "Wedding and prom transportation planning and safety",
    "How licensed chauffeured car service differs from rideshare and taxis",
  ],
  contactHeading: "Media Contact",
  contact:
    "Email info@92limo.com with \"Press\" in the subject line, or call (877) 609-1919 — dispatch is staffed around the clock and will route your request. Please include your outlet, deadline and the topic you are covering. The 92 Limo Service logo below may be used for editorial coverage of the company.",
};

export const PARTNERS_CONTENT = {
  title: "Partner & Referral Program | 92 Limo Service",
  description:
    "Partner with 92 Limo Service — a licensed Maryland chauffeur company for hotels, planners, venues, travel managers and affiliate operators. (877) 609-1919.",
  h1: "Partners & Referral Program",
  subtitle: "A dependable ground-transportation partner in Maryland, DC and Northern Virginia for the businesses whose clients need to arrive well.",
  intro: [
    "When you recommend a car service, your reputation rides in the back seat. 92 Limo Service works with hotels, planners, venues, travel professionals and other operators who need a licensed, insured, around-the-clock partner for the Baltimore–Washington region — and who want their clients treated as carefully as they would treat them themselves.",
    "Every referred trip is handled like any 92 Limo Service reservation: a quote confirmed before the ride, real-time flight tracking on airport pickups, licensed and background-checked chauffeurs, and a dispatcher available 24 hours a day.",
  ],
  whoHeading: "Who We Partner With",
  who: [
    { title: "Hotels & Concierge Desks", text: "Airport transfers, dinner runs and as-directed service for guests, arranged with one call or email at any hour." },
    { title: "Wedding & Event Planners", text: "Couple and wedding-party vehicles plus guest shuttles, scheduled around your timeline and coordinated with your venue." },
    { title: "Venues & Wineries", text: "A car service you can name with confidence when guests ask how to get home safely." },
    { title: "Travel Agents & Corporate Travel Managers", text: "Consolidated invoicing, certificates of insurance, vendor onboarding paperwork and a dedicated account contact." },
    { title: "Executive Assistants", text: "Standing airport pickups for visiting executives and clients, with itineraries handled by dispatch." },
    { title: "Affiliate Limousine Operators", text: "On-the-ground coverage for your clients' Maryland, DC and Virginia trips — BWI, DCA and IAD included — under Maryland PSC Carrier #6325." },
  ],
  howHeading: "How the Program Works",
  how: [
    { title: "Get in touch", text: "Email info@92limo.com or call (877) 609-1919 and tell us about your business and the trips you expect to refer." },
    { title: "Agree the arrangement", text: "Referral terms depend on the type of partnership. We agree them with you in writing so there are no surprises on either side." },
    { title: "Refer with one message", text: "Send the trip details by phone, email or the booking form. We confirm the quote with your client — or with you, if you book on their behalf." },
    { title: "We deliver the ride", text: "Your client is met on time by a professional chauffeur in an immaculate vehicle, and you hear about it only if you want to." },
  ],
  ctaHeading: "Start a Partnership",
  cta: "Email info@92limo.com with \"Partnership\" in the subject line, or call (877) 609-1919. Tell us who you are, where your clients travel and how you prefer to work, and we will reply with the arrangement that fits.",
};
