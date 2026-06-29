export const BRAND = {
  name: "92 Limo Service",
  legal: "92 Transportation LLC",
  phone: "877-679-0100",
  phoneHref: "tel:8776790100",
  website: "92limo.com",
  email: "info@92limo.com",
  tagline: "Maryland · Virginia · Washington DC",
};

// NOTE: Images originally hosted on customer-assets.emergentagent.com stopped
// resolving after export (broken-image "?" placeholders). As a temporary fix,
// those keys now point to working static.prod-images.emergentagent.com assets.
// The logo is rendered as a text wordmark in the UI (Navbar/Footer) instead of
// a broken image. Replace these with final brand assets when available.
const _SEDAN =
  "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/655d8f7cd6f99394ed315f9ac97f01222b0623a9afc5d9ecc818eae59085ced7.png";
const _SUV =
  "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/89ad1256135e3c3b8cb79f1ade68f198227183578e600d9435d8cf980287ed10.png";
const _SCLASS =
  "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/8e9f108c5b7d6da49c325447c178b2c487a61641ff7b1bf1afae2ffb78bec0cd.png";
const _SPRINTER =
  "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/c479cbe4d456b167e2be24b577f203537ddc8353b831590f57a0a1660328ab5d.png";
const _CELEBRATION =
  "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/d2635042a70110d4f23ffd14762bf07885e52c9e06a233926ebd8daaae5c54f6.png";
const _HERO =
  "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/ecbb60e43c613244071e98d291b9485a12f345fc1a81894fba9737944bb3a387.png";

export const IMAGES = {
  // Used only for meta/OG images now; UI renders a text wordmark.
  logo: _HERO,
  heroBg: _HERO,
  longDistance:
    "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/951aed2d57b40c303730703a884a469a1ed16b5a2f1171189db874ee5c34f139.png",
  dcSkyline:
    "https://images.unsplash.com/photo-1543372654-b45dd90eeee5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
  escaladeFront: _SUV,
  escaladeAngle: _SUV,
  sprinterGreen: _SPRINTER,
  sprinterPink: _CELEBRATION,
  sClassNav: _SCLASS,
  sedan: _SEDAN,
  suv: _SUV,
  airportPickup:
    "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/fcb877edd4fd67dbdb1f8d154175fa4eacb0dd0b64035217c6df0c50681f772d.png",
  chauffeur:
    "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/dbc94574d72096e152da533fe30d7b8e4e8f411712df2e3b20e8d72ca099136f.png",
  corporate:
    "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/4e743f11fb5c2aaa119ecc61ed61c9fd051fafe32d9825c9962ad9e921fdecca.png",
  wedding:
    "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/c1c56e1276011d54c3bb12cd018d3a1ecbddf6921293b1da212c0024a9c6d805.png",
  sprinterExterior: _SPRINTER,
  sClassFirst: _SCLASS,
  wineTour:
    "https://static.prod-images.emergentagent.com/jobs/0b91ed88-e3b8-45b6-be20-7a661593b184/images/6bc127b9f98ad4de72c310203409d3ddbf90b3882d95a42dbb82d40f029e96f6.png",
  celebration: _CELEBRATION,
  sClassReal: _SCLASS,
  bmw7: _SEDAN,
  escaladeReal: _SUV,
  yukon: _SUV,
  sprinterPartyInterior: _SPRINTER,
};

export const FLEET = [
  {
    name: "Economy Class — Executive Sedan",
    tagline: "Comfortable, cost-effective luxury for up to 3 guests",
    pax: 3,
    bags: 2,
    img: IMAGES.sedan,
    alt: "Black economy class executive sedan for 92 Limo airport car service",
    features: ["Leather interior", "Bottled water", "Professional chauffeur"],
  },
  {
    name: "Business Class — BMW 7 Series",
    tagline: "Refined comfort for executives and business travel",
    pax: 3,
    bags: 2,
    img: IMAGES.bmw7,
    alt: "Black BMW 7 Series business class luxury sedan, 92 Limo Service fleet",
    features: ["Premium flagship sedan", "Climate-controlled cabin", "USB charging"],
  },
  {
    name: "First Class — Mercedes-Benz S-Class",
    tagline: "The flagship sedan for VIP and luxury travel",
    pax: 3,
    bags: 2,
    img: IMAGES.sClassReal,
    alt: "Black Mercedes-Benz S-Class first class flagship luxury sedan",
    features: ["Flagship comfort", "Ambient lighting", "Privacy glass"],
  },
  {
    name: "Luxury SUV — GMC Yukon XL",
    tagline: "Spacious ride for groups and extra luggage",
    pax: 6,
    bags: 6,
    img: IMAGES.yukon,
    alt: "Black GMC Yukon XL luxury SUV for group chauffeur service in Maryland",
    features: ["Captain seating", "Generous cargo", "Tinted privacy glass"],
  },
  {
    name: "Premium SUV — Cadillac Escalade",
    tagline: "Commanding luxury and executive presence",
    pax: 5,
    bags: 5,
    img: IMAGES.escaladeReal,
    alt: "Black Cadillac Escalade premium SUV limousine service Maryland DC",
    features: ["Executive presence", "Premium audio", "USB charging"],
  },
  {
    name: "Sprinter Executive Van",
    tagline: "Group travel with theater-style luxury",
    pax: 13,
    bags: 12,
    img: IMAGES.sprinterExterior,
    alt: "Black Mercedes Sprinter executive van group transportation Washington DC",
    features: ["Ambient mood lighting", "Conference seating", "Smart TV"],
  },
];

export const SERVICES = [
  { icon: "Plane", title: "Airport Transfers", desc: "On-time transfers to BWI, DCA, IAD, Martin State & PHL with flight tracking and meet & greet.", link: "/airport-transportation" },
  { icon: "Briefcase", title: "Corporate Travel", desc: "Reliable, discreet executive transportation for business across the DMV.", link: "/corporate-transportation" },
  { icon: "Heart", title: "Wedding Limo", desc: "Elegant arrivals and bridal-party transport for your special day.", link: "/wedding-transportation" },
  { icon: "Wine", title: "Wine Tours", desc: "Relaxed, chauffeured tours of Maryland & Virginia wine country.", link: "/wine-tours" },
  { icon: "Cake", title: "Birthdays", desc: "Make any birthday unforgettable with a stylish, worry-free ride.", link: "/birthday-celebrations" },
  { icon: "Sparkles", title: "Proms", desc: "Safe, supervised, and stylish prom transportation parents trust.", link: "/prom-transportation" },
  { icon: "Clock", title: "Hourly Chauffeur", desc: "A dedicated vehicle and chauffeur at your disposal, by the hour.", link: "/hourly-chauffeur" },
  { icon: "Route", title: "Long-Distance Travel", desc: "City-to-city private car service to NYC, Philadelphia, Delaware & beyond.", link: "/long-distance-transportation" },
];

export const AIRPORTS = [
  { code: "BWI", name: "BWI Airport Car Service", desc: "Baltimore/Washington International Thurgood Marshall Airport transfers with curbside or meet & greet pickup." },
  { code: "DCA", name: "DCA Airport Car Service", desc: "Ronald Reagan Washington National Airport — fast, central transfers with flight monitoring." },
  { code: "IAD", name: "IAD Airport Car Service", desc: "Washington Dulles International Airport luxury transfers, including international arrivals." },
  { code: "MTN", name: "Martin State Airport", desc: "Private and general-aviation transfers to Martin State Airport (MTN) and nearby communities." },
  { code: "PHL", name: "PHL Airport Car Service", desc: "Philadelphia International Airport long-distance transfers for business and leisure travelers." },
];

export const AIRPORT_FEATURES = [
  "Real-time flight tracking",
  "Curbside pickup",
  "Meet & greet option",
  "24/7 availability",
];

export const ROUTES = [
  { from: "Washington DC", to: "Baltimore" },
  { from: "Annapolis", to: "BWI Airport" },
  { from: "Washington DC", to: "IAD Airport" },
  { from: "Washington DC", to: "DCA Airport" },
  { from: "Baltimore", to: "Annapolis" },
  { from: "Maryland", to: "New York City" },
  { from: "Maryland", to: "Philadelphia (PHL)" },
  { from: "Maryland", to: "Delaware" },
];

export const WHY = [
  { icon: "CheckCircle2", title: "On-Time, Every Time", desc: "We build in buffers and track traffic so you're never left waiting." },
  { icon: "BadgeCheck", title: "Professional Chauffeurs", desc: "Licensed, vetted, and impeccably presented drivers." },
  { icon: "Sparkles", title: "Clean Luxury Vehicles", desc: "Spotless, late-model fleet detailed before every ride." },
  { icon: "Clock", title: "24/7 Reservations", desc: "Book any time — day or night — with round-the-clock support." },
  { icon: "DollarSign", title: "Affordable, Clear Pricing", desc: "Transparent all-inclusive quotes with no hidden fees." },
  { icon: "Plane", title: "Airport Flight Tracking", desc: "We monitor your flight and adjust pickup automatically." },
  { icon: "Building2", title: "Corporate-Ready Service", desc: "Billing, receipts, and standards built for business travel." },
];

export const TESTIMONIALS = [
  { name: "Daniel R.", role: "Corporate Client, Washington DC", quote: "Flawless airport pickup at IAD. The chauffeur was waiting, the Escalade was immaculate, and we arrived early. Our go-to for executive travel.", rating: 5 },
  { name: "Priya M.", role: "Wedding, Annapolis", quote: "The Sprinter van made our wedding day unforgettable — the comfort wowed our entire bridal party. Punctual and so professional.", rating: 5 },
  { name: "James T.", role: "Frequent Traveler, Bethesda", quote: "I book the S-Class for every BWI run. Always on time, transparent pricing, and the smoothest ride in the DMV.", rating: 5 },
  { name: "Alicia W.", role: "Event Planner, Arlington", quote: "Coordinated a wine tour and a corporate gala — both ran like clockwork. Clean vehicles, courteous drivers, zero stress.", rating: 5 },
];

export const AREAS = [
  "Washington DC", "Northern Virginia", "Annapolis", "Baltimore", "Bowie",
  "Crofton", "Crownsville", "Davidsonville", "Odenton", "Edgewater", "Arnold",
  "Severna Park", "Riva", "Rockville", "Bethesda", "Arlington", "Alexandria",
  "Tysons", "BWI Airport", "Philadelphia",
];

export const FAQS = [
  { q: "What airport transportation services do you provide to BWI Airport?", a: "We provide reliable airport transportation to and from BWI Airport, including private airport car service, executive transportation, luxury airport limo service, and group airport transfers for business and leisure travelers." },
  { q: "Is your airport transportation service available 24 hours a day?", a: "Yes — our 24/7 service operates around the clock, providing dependable rides to BWI, DCA, IAD, PHL, and Martin State Airport for early-morning departures and late-night arrivals." },
  { q: "What areas do you serve for airport transportation in Maryland?", a: "We cover Annapolis, Baltimore, Bowie, Crofton, Crownsville, Davidsonville, Odenton, Edgewater, Arnold, Severna Park, Riva, and surrounding Maryland areas, with service to BWI, DCA, IAD, PHL, and Martin State Airport." },
  { q: "How do I book a ride or get a free quote?", a: "Use the booking form on our Contact page, get an instant estimate, or simply call us at 877-679-0100. We confirm every reservation with an all-inclusive quote." },
  { q: "Are tolls and gratuity included in the price?", a: "Yes — our quotes are all-inclusive (base fare, tolls, taxes, and standard gratuity). Extra stops, extended wait time, and late-night surcharges may apply." },
  { q: "What vehicles are in your fleet?", a: "Economy Class sedans, Business Class (Mercedes-Benz E-Class), First Class (Mercedes-Benz S-Class), the Premium SUV (Cadillac Escalade), and the Sprinter Executive Van for groups." },
  { q: "Do you offer wine tours, weddings, proms, and birthdays?", a: "Absolutely. Beyond airport and corporate travel, we offer wine tours, wedding limo service, prom transportation, and birthday celebrations across Maryland, Virginia, and Washington DC." },
];

export const SERVICE_TYPES = [
  "Airport Transfer", "Corporate Travel", "Wedding", "Wine Tour", "Birthday",
  "Prom", "Hourly Chauffeur", "Long-Distance Trip", "Point-to-Point",
];

export const VEHICLE_TYPES = FLEET.map((f) => f.name);

export const VEHICLE_RATES = {
  "Economy Class — Executive Sedan": { base: 70, perMile: 2.8, perHour: 80 },
  "Business Class — BMW 7 Series": { base: 90, perMile: 3.3, perHour: 100 },
  "First Class — Mercedes-Benz S-Class": { base: 110, perMile: 3.8, perHour: 125 },
  "Luxury SUV — GMC Yukon XL": { base: 110, perMile: 3.7, perHour: 120 },
  "Premium SUV — Cadillac Escalade": { base: 120, perMile: 4.0, perHour: 135 },
  "Sprinter Executive Van": { base: 160, perMile: 4.5, perHour: 175 },
};

export const CITIES = [
  { slug: "annapolis", name: "Annapolis", region: "Anne Arundel County", airport: "BWI" },
  { slug: "baltimore", name: "Baltimore", region: "Baltimore City", airport: "BWI" },
  { slug: "bowie", name: "Bowie", region: "Prince George's County", airport: "BWI" },
  { slug: "crofton", name: "Crofton", region: "Anne Arundel County", airport: "BWI" },
  { slug: "crownsville", name: "Crownsville", region: "Anne Arundel County", airport: "BWI" },
  { slug: "davidsonville", name: "Davidsonville", region: "Anne Arundel County", airport: "BWI" },
  { slug: "odenton", name: "Odenton", region: "Anne Arundel County", airport: "BWI" },
  { slug: "edgewater", name: "Edgewater", region: "Anne Arundel County", airport: "BWI" },
  { slug: "arnold", name: "Arnold", region: "Anne Arundel County", airport: "BWI" },
  { slug: "severna-park", name: "Severna Park", region: "Anne Arundel County", airport: "BWI" },
  { slug: "riva", name: "Riva", region: "Anne Arundel County", airport: "BWI" },
  { slug: "columbia", name: "Columbia", region: "Howard County", airport: "BWI" },
  { slug: "laurel", name: "Laurel", region: "Prince George's County", airport: "BWI" },
  { slug: "rockville", name: "Rockville", region: "Montgomery County", airport: "IAD" },
  { slug: "bethesda", name: "Bethesda", region: "Montgomery County", airport: "DCA" },
  { slug: "silver-spring", name: "Silver Spring", region: "Montgomery County", airport: "DCA" },
];

export const NAV_SERVICES = [
  { label: "Airport Transfers", to: "/airport-transportation" },
  { label: "Corporate Travel", to: "/corporate-transportation" },
  { label: "Wedding Limo", to: "/wedding-transportation" },
  { label: "Wine Tours", to: "/wine-tours" },
  { label: "Birthdays", to: "/birthday-celebrations" },
  { label: "Proms", to: "/prom-transportation" },
  { label: "Hourly Chauffeur", to: "/hourly-chauffeur" },
  { label: "Long-Distance Travel", to: "/long-distance-transportation" },
];

const AIRPORT_VEHICLES = ["Economy Class — Executive Sedan", "Premium SUV — Cadillac Escalade", "Sprinter Executive Van"];
const LUXURY_VEHICLES = ["First Class — Mercedes-Benz S-Class", "Premium SUV — Cadillac Escalade", "Sprinter Executive Van"];

export const SERVICE_PAGES = {
  "airport-transportation": {
    metaTitle: "Airport Car Service BWI, DCA, IAD, Martin State & PHL | 92 Limo",
    metaDescription:
      "Premium airport transportation to and from BWI, DCA, IAD, Martin State (MTN) and Philadelphia (PHL). Flight tracking, meet & greet, 24/7 across Maryland, Washington DC & Virginia. Call 877-679-0100.",
    eyebrow: "AIRPORT TRANSPORTATION",
    h1: "Airport Car Service — BWI, DCA, IAD, MTN & PHL",
    subtitle: "Stress-free luxury transfers to every major airport in the region — with real-time flight tracking and curbside or meet & greet pickup.",
    image: IMAGES.airportPickup,
    alt: "Chauffeur meeting a client at airport arrivals with a black luxury car",
    intro:
      "Whether you're flying out of BWI, Reagan National (DCA), Dulles (IAD), Martin State (MTN), or Philadelphia (PHL), 92 Limo Service delivers punctual, polished airport transportation. We monitor your flight in real time and adjust your pickup automatically — so your chauffeur is always ready the moment you land.",
    bullets: [
      { title: "Real-Time Flight Tracking", desc: "We watch your flight and adjust for early arrivals or delays at no extra charge." },
      { title: "Meet & Greet", desc: "Your chauffeur greets you inside the terminal with a name sign and helps with luggage." },
      { title: "Curbside Pickup", desc: "Prefer a quick exit? We'll be waiting curbside the minute you step out." },
      { title: "All Regional Airports", desc: "BWI, DCA, IAD, Martin State (MTN), and Philadelphia (PHL)." },
      { title: "24/7 Availability", desc: "Red-eye or dawn departure — we run around the clock, every day." },
      { title: "All-Inclusive Pricing", desc: "Flat, transparent rates including tolls, parking, and gratuity." },
    ],
    vehicles: AIRPORT_VEHICLES,
  },
  "corporate-transportation": {
    metaTitle: "Corporate Transportation & Executive Car Service | 92 Limo DC, MD, VA",
    metaDescription:
      "Professional corporate car service for executives, roadshows, and client travel across Washington DC, Maryland and Northern Virginia. Reliable, discreet, account-ready. Call 877-679-0100.",
    eyebrow: "CORPORATE TRANSPORTATION",
    h1: "Corporate & Executive Car Service",
    subtitle: "Reliable, discreet chauffeured travel that keeps your executives, clients, and teams moving on schedule across the DMV.",
    image: IMAGES.corporate,
    alt: "Business executive entering a black luxury SUV outside a corporate office",
    intro:
      "From boardroom to airport, 92 Limo Service is the trusted transportation partner for businesses throughout Washington DC, Maryland, and Northern Virginia. We deliver consistency, professionalism, and discretion — backed by corporate billing and dedicated account support.",
    bullets: [
      { title: "Executive Chauffeurs", desc: "Vetted, professional drivers presented in business attire." },
      { title: "Roadshows & Events", desc: "Multi-stop coordination for investor roadshows, conferences, and galas." },
      { title: "Corporate Billing", desc: "Centralized invoicing, receipts, and account management." },
      { title: "Client Hospitality", desc: "Impress visiting clients with seamless door-to-door luxury." },
      { title: "On-Time Guarantee", desc: "Traffic-aware routing and built-in buffers keep meetings on schedule." },
      { title: "Confidential & Secure", desc: "Privacy glass and a strict discretion policy for sensitive travel." },
    ],
    vehicles: LUXURY_VEHICLES,
  },
  "wedding-transportation": {
    metaTitle: "Wedding Limo Service | 92 Limo DC, Maryland & Virginia",
    metaDescription:
      "Elegant wedding limo and chauffeur service across Washington DC, Maryland and Northern Virginia. Luxury sedans, SUVs and Sprinter vans for the couple and bridal party. Call 877-679-0100.",
    eyebrow: "WEDDING LIMO",
    h1: "Wedding Limo & Chauffeur Service",
    subtitle: "Make every arrival unforgettable with pristine luxury vehicles, red-carpet service, and chauffeurs who treat your day like their own.",
    image: IMAGES.wedding,
    alt: "Elegant black luxury sedan decorated with white ribbon and flowers for a wedding",
    intro:
      "Your wedding day deserves transportation as flawless as the celebration. 92 Limo Service provides elegant, reliable rides for the couple, the bridal party, and your guests — coordinated to the minute so everyone arrives relaxed, on time, and in style.",
    bullets: [
      { title: "Couple's Luxury Car", desc: "A spotless flagship sedan or SUV for your grand entrance and exit." },
      { title: "Bridal Party Transport", desc: "Spacious Sprinter vans keep the whole party together and on schedule." },
      { title: "Red-Carpet Service", desc: "Complimentary décor, bottled water, and white-glove chauffeur care." },
      { title: "Guest Shuttles", desc: "Hotel-to-venue shuttle coordination for a seamless guest experience." },
      { title: "Detailed Timeline", desc: "We plan every pickup and transfer around your wedding-day schedule." },
      { title: "Photo-Ready Vehicles", desc: "Immaculately detailed cars that look stunning in every photograph." },
    ],
    vehicles: LUXURY_VEHICLES,
  },
  "wine-tours": {
    metaTitle: "Wine Tour Limo Service | Maryland & Virginia Vineyards | 92 Limo",
    metaDescription:
      "Chauffeured wine tours of Maryland and Virginia wine country. Relax and sip while we drive — luxury sedans, SUVs and Sprinter vans. Serving DC, MD & VA. Call 877-679-0100.",
    eyebrow: "WINE TOURS",
    h1: "Wine Tour Chauffeur Service",
    subtitle: "Savor Maryland & Virginia wine country without worrying about the drive. Sit back, sip, and let your chauffeur handle the rest.",
    image: IMAGES.wineTour,
    alt: "Black luxury SUV with chauffeur at a Maryland vineyard for a wine tour",
    intro:
      "Discover the region's best wineries in total comfort. 92 Limo Service designs relaxed, chauffeured wine tours across Maryland and Northern Virginia — so your group can taste, tour, and toast safely while we take care of the routes and timing.",
    bullets: [
      { title: "Designated Chauffeur", desc: "Enjoy every tasting responsibly — we handle all the driving." },
      { title: "Custom Itineraries", desc: "Visit your favorite vineyards or let us craft the perfect route." },
      { title: "Group Comfort", desc: "Spacious SUVs and Sprinter vans keep your party together." },
      { title: "Flexible Timing", desc: "Linger longer at a winery — your schedule, your pace." },
      { title: "Door-to-Door", desc: "Hassle-free pickup and drop-off at your home or hotel." },
      { title: "All-Inclusive Rates", desc: "Transparent pricing with no surprises at the end of the day." },
    ],
    vehicles: ["Premium SUV — Cadillac Escalade", "Sprinter Executive Van", "First Class — Mercedes-Benz S-Class"],
  },
  "birthday-celebrations": {
    metaTitle: "Birthday Limo Service | Celebrate in Style | 92 Limo DC, MD, VA",
    metaDescription:
      "Make any birthday unforgettable with chauffeured limo service across Washington DC, Maryland and Northern Virginia. Luxury sedans, SUVs and party-ready Sprinter vans. Call 877-679-0100.",
    eyebrow: "BIRTHDAYS",
    h1: "Birthday Limo & Party Transportation",
    subtitle: "Turn heads and skip the parking — celebrate your birthday with a stylish, worry-free ride for you and your guests.",
    image: IMAGES.celebration,
    alt: "Black luxury limousine and SUV outside a celebration venue at night",
    intro:
      "Whether it's a milestone birthday or a fun night out, 92 Limo Service makes the celebration effortless. Our chauffeurs handle pickups, stops, and drop-offs across the DMV so you and your friends can focus entirely on the fun.",
    bullets: [
      { title: "Party-Ready Sprinter", desc: "Ambient lighting and comfortable seating set the mood for the group." },
      { title: "Multiple Stops", desc: "Dinner, drinks, and dancing — we'll get you to every stop on time." },
      { title: "Safe & Reliable", desc: "Professional chauffeurs keep the celebration safe from start to finish." },
      { title: "Door-to-Door", desc: "Pickup and return at your home, hotel, or venue of choice." },
      { title: "Any Group Size", desc: "From an intimate dinner to a full crew in the Sprinter van." },
      { title: "All-Inclusive Pricing", desc: "Clear, upfront rates so there are no surprises." },
    ],
    vehicles: ["Sprinter Executive Van", "Premium SUV — Cadillac Escalade", "First Class — Mercedes-Benz S-Class"],
  },
  "prom-transportation": {
    metaTitle: "Prom Limo Service | Safe & Stylish | 92 Limo DC, Maryland & Virginia",
    metaDescription:
      "Safe, supervised, and stylish prom limo transportation across Washington DC, Maryland and Northern Virginia. Professional chauffeurs parents trust. Call 877-679-0100.",
    eyebrow: "PROMS",
    h1: "Prom Limo Service",
    subtitle: "A picture-perfect, safe entrance to prom — with professional chauffeurs and pristine vehicles that parents trust.",
    image: IMAGES.celebration,
    alt: "Luxury limo and SUV with red carpet for a prom night arrival",
    intro:
      "Give your student a night to remember — and give yourself peace of mind. 92 Limo Service provides safe, supervised prom transportation across the DMV, with reliable timing and professional chauffeurs from pickup to drop-off.",
    bullets: [
      { title: "Safety First", desc: "Licensed, vetted chauffeurs and a strict no-tolerance safety policy." },
      { title: "Group Packages", desc: "Sprinter vans and SUVs keep the whole group together in style." },
      { title: "Photo-Ready Arrival", desc: "A spotless luxury vehicle for that perfect prom entrance." },
      { title: "On-Time, Door-to-Door", desc: "Reliable pickup at home and a safe ride back after the dance." },
      { title: "Parent Peace of Mind", desc: "Clear itineraries and dependable, professional service." },
      { title: "Transparent Pricing", desc: "Upfront prom packages with no hidden fees." },
    ],
    vehicles: ["Sprinter Executive Van", "Premium SUV — Cadillac Escalade", "First Class — Mercedes-Benz S-Class"],
  },
  "hourly-chauffeur": {
    metaTitle: "Hourly Chauffeur Service | As-Directed Car Hire | 92 Limo DC, MD, VA",
    metaDescription:
      "Hire a dedicated luxury vehicle and professional chauffeur by the hour across Washington DC, Maryland and Northern Virginia. Perfect for events, meetings, and nights out. Call 877-679-0100.",
    eyebrow: "HOURLY CHAUFFEUR",
    h1: "Hourly Chauffeur Service",
    subtitle: "Your own luxury vehicle and professional chauffeur, on demand and as-directed — for as long as you need.",
    image: IMAGES.chauffeur,
    alt: "Professional chauffeur opening the door of a black luxury sedan at night",
    intro:
      "When your itinerary calls for flexibility, our hourly chauffeur service puts a dedicated vehicle and driver at your disposal. Ideal for multi-stop business days, shopping and dining, sporting events, concerts, or a night on the town.",
    bullets: [
      { title: "As-Directed Service", desc: "Multiple stops, waiting time, and changing plans — handled with ease." },
      { title: "Dedicated Vehicle", desc: "Your car and chauffeur stay with you for the full reservation." },
      { title: "Events & Nights Out", desc: "Concerts, games, weddings, dinners — arrive and leave in style." },
      { title: "Business Days", desc: "Bounce between meetings across DC, MD, and VA without parking hassles." },
      { title: "Flexible Minimums", desc: "Reasonable hourly minimums with transparent, all-inclusive rates." },
      { title: "Professional Discretion", desc: "Courteous, polished chauffeurs who respect your time and privacy." },
    ],
    vehicles: LUXURY_VEHICLES,
  },
  "long-distance-transportation": {
    metaTitle: "Long-Distance Car Service | DC, MD, VA to NYC, Philly & DE | 92 Limo",
    metaDescription:
      "Long-distance private car service from Washington DC, Maryland and Northern Virginia to New York City, Philadelphia, Delaware and beyond. Comfortable, door-to-door luxury. Call 877-679-0100.",
    eyebrow: "LONG-DISTANCE TRAVEL",
    h1: "Long-Distance Private Car Service",
    subtitle: "Skip the airport hassle and the rental car. Travel city-to-city in total comfort with a professional chauffeur and a luxury vehicle that's all yours.",
    image: IMAGES.longDistance,
    alt: "Black luxury sedan on an open highway at golden hour for long-distance car service",
    intro:
      "When you need to get from the DMV to New York City, Philadelphia, Delaware, or anywhere along the East Coast, 92 Limo Service offers a relaxed, productive alternative to flying or driving yourself. Settle into a pristine sedan or SUV, stay connected, and arrive refreshed — door to door.",
    bullets: [
      { title: "Door-to-Door Comfort", desc: "No terminals, no security lines — we pick you up and drop you exactly where you need to be." },
      { title: "Work or Relax En Route", desc: "Quiet, spacious cabins with charging let you stay productive or unwind." },
      { title: "Experienced Chauffeurs", desc: "Seasoned drivers who know the I-95 corridor and plan around traffic." },
      { title: "Flexible Scheduling", desc: "Early departures, late returns, and multi-city itineraries accommodated." },
      { title: "Group Options", desc: "Travel together in our Sprinter Executive Van for families and teams." },
      { title: "Transparent Flat Rates", desc: "All-inclusive long-distance pricing quoted up front — no surprises." },
    ],
    vehicles: LUXURY_VEHICLES,
  },
};
