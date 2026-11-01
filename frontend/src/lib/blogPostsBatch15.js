// 2026-11-01 follow-up content push, batch 15 — 2 long-form posts filling
// two genuine local-coverage gaps found by reviewing all existing slugs
// across blogPosts.js, blogPostsBatch2-14.js, costAndComparisonBlogPosts.js
// and blogPostsGenerated.js:
// - Reagan National (DCA) has heavy internal linking from dozens of other
//   posts to /dca-airport-car-service and /dca-airport-limo, and three
//   posts compare DCA against BWI/IAD, but DCA has never had a dedicated
//   cornerstone guide of its own — unlike BWI, which has two guide posts
//   (bwi-airport-car-service-guide-2026, bwi-airport-car-service-guide)
//   plus an entire 10-post sub-cluster (batch10). This post closes that
//   gap with the DCA equivalent of the BWI guide.
// - Gaylord National's ICE! exhibit (mid-November through New Year's, per
//   the existing Oxon Hill landing page in marylandPagesBatch7.js and the
//   National Harbor section of marylandPages.js) is only ever mentioned
//   in passing on landing pages — it has never had its own blog post,
//   despite being one of the single biggest seasonal draws to National
//   Harbor and timed to start within days of this push (today is
//   2026-11-01). Cross-links to the existing National Harbor evening
//   itinerary post (batch11) and the Oxon Hill / National Harbor landing
//   pages.
// Same shape as BLOG_POSTS (see blogPosts.js header comment — intro/
// sections/faqs with q/a keys). Merged into BLOG_POSTS in blogPosts.js,
// after batch 14.
export const BLOG_POSTS_BATCH15 = [
  // ---------------------------------------------------------- POST 1
  {
    slug: "dca-airport-car-service-guide",
    title: "Complete DCA Airport Car Service Guide",
    metaTitle: "DCA Airport Car Service: Complete Guide | 92 Limo",
    metaDescription:
      "Everything about car service at Reagan National (DCA) — terminals, pickup logistics, flat-rate pricing, and timing, from the DMV's 92 Limo Service. (877) 609-1919.",
    category: "Airport Guides",
    date: "2026-11-01",
    readTime: "8 min read",
    excerpt:
      "How DCA car service actually works — which terminal your airline uses, where your chauffeur meets you, what a flat rate includes, and how to time a trip through the region's most centrally located airport.",
    image: "/images/blog/airport-terminal-glass.webp",
    intro: [
      "Ronald Reagan Washington National Airport is the DMV's closest-in airport by far — a straight shot up the GW Parkway or across the 14th Street Bridge from downtown DC, with a Metro stop of its own. That proximity is exactly why DCA trips are so easy to get wrong without local knowledge: the airport's compact footprint means pickup curbs change by terminal, the roads around it carry some of the region's worst rush-hour and event traffic, and a flight that lands at the wrong end of the building can mean an extra ten-minute walk you didn't plan for. This guide covers everything worth knowing about booking DCA car service.",
    ],
    sections: [
      {
        heading: "DCA's Two Terminals, and Why the Difference Matters",
        paragraphs: [
          "DCA consolidated its concourses into two terminals: Terminal 1, generally used by Southwest and a handful of other carriers, and the much larger Terminal 2, home to American Airlines' hub operation along with most other major carriers. The two terminals sit at opposite ends of the airport and are connected by a walkway, but they are not a quick stroll apart — telling your chauffeur which terminal (not just which airline) you're flying saves a mismatched pickup.",
          "Arrivals are simple once the terminal is known: your chauffeur tracks the flight against the gate, not the clock, and meets you curbside on the arrivals level closest to baggage claim, or inside with a name sign if you've added meet-and-greet.",
        ],
      },
      {
        heading: "Why DCA's Location Is Both a Blessing and a Trap",
        paragraphs: [
          "Being minutes from downtown DC is DCA's entire selling point, but the same roads that make it fast also make it fragile. The GW Parkway, the 14th Street Bridge, and the approach from Crystal City and Pentagon City back up hard during rush hour and around any event downtown or at Nationals Park — and because DCA sits so close to all of it, there's very little buffer distance to absorb a bad traffic day. A chauffeur who drives this corridor daily builds that buffer into your pickup time automatically, rather than you discovering it from the back seat on the way to a flight.",
        ],
      },
      {
        heading: "What a Flat Rate Includes",
        paragraphs: [
          "A proper DCA car service quotes one number at booking — the vehicle, the professional chauffeur, fuel, and real-time flight tracking with built-in wait time; gratuity, tolls, and parking are disclosed before confirmation. There's no meter running through a backed-up GW Parkway and no surge multiplier because three flights landed at once. The price confirmed when you book is the price on the receipt.",
        ],
      },
      {
        heading: "Timing the Trip",
        paragraphs: [
          "For departures, build in extra runway beyond the usual two-hour-domestic rule if your trip touches downtown DC during weekday rush hour or overlaps with a Nationals Park, Capital One Arena, or Kennedy Center event — any of which can add real time to a short-distance ride precisely because the distance is normally so short. For arrivals, DCA's compact size is an advantage: baggage claim is rarely far from the curb, so wait time is typically shorter here than at BWI or Dulles even on a busy evening.",
        ],
      },
      {
        heading: "Who Books DCA Car Service",
        paragraphs: [
          "DCA's mix skews heavily toward business travel — Capitol Hill, K Street, and the Crystal City and Pentagon City corridors generate a steady run of same-day and early-morning trips — alongside leisure travelers who'd rather land five minutes from a hotel than deal with a longer ride in from BWI or Dulles. Families and groups usually step up to a Lincoln Navigator or Suburban for the extra luggage room; a Mercedes Sprinter van keeps a larger party together for up to 13.",
        ],
      },
      {
        heading: "Booking Your DCA Transfer",
        paragraphs: [
          "Give us your flight number, terminal if you know it, and party size, and we'll track the flight and have your chauffeur staged when you land. 92 Limo Service serves DCA, Crystal City, Pentagon City, and all of Washington DC, Maryland, and Northern Virginia, 24/7, 365 days a year. Call (877) 609-1919 or book online.",
        ],
      },
    ],
    relatedLinks: [
      { label: "DCA Airport Car Service", to: "/dca-airport-car-service" },
      { label: "DCA Airport Limo", to: "/dca-airport-limo" },
      { label: "DCA Airport Meet & Greet", to: "/dca-airport-meet-and-greet" },
      { label: "BWI vs. DCA vs. IAD: Closest Airport by Destination", to: "/blog/bwi-vs-dca-vs-iad-closest-airport-by-destination" },
      { label: "Book your ride", to: "/booking" },
    ],
    faqs: [
      {
        q: "How do I know which DCA terminal I'm flying from?",
        a: "Check your boarding pass or airline — Southwest and a few others use Terminal 1, while American Airlines and most other carriers use the larger Terminal 2. Tell us the terminal (or airline) when you book so your chauffeur meets you at the right curb.",
      },
      {
        q: "What happens if my flight is delayed?",
        a: "Nothing you need to manage. We track every flight in real time against the gate, not the scheduled time, and your pickup adjusts automatically at no extra charge.",
      },
      {
        q: "Is DCA car service faster than BWI or Dulles?",
        a: "DCA's proximity to downtown DC and its compact terminal layout usually mean a shorter curb-to-car wait than BWI or Dulles — though downtown traffic and event nights can offset that advantage, which is why we build extra time into trips that cross through the city.",
      },
      {
        q: "What's included in a flat-rate DCA quote?",
        a: "The quoted rate covers the vehicle, chauffeur, and flight tracking with built-in wait time. Gratuity, tolls, and parking are disclosed and added before you confirm the booking — there's no meter and no surge pricing.",
      },
      {
        q: "Can you handle a group or extra luggage at DCA?",
        a: "Yes — a Lincoln Navigator or Chevrolet Suburban covers families with extra bags, and a Mercedes Sprinter van keeps groups of up to 13 together in one vehicle.",
      },
    ],
  },

  // ---------------------------------------------------------- POST 2
  {
    slug: "gaylord-national-ice-national-harbor-holiday-chauffeur-guide",
    title: "Gaylord National's ICE! and National Harbor's Holiday Season: A Chauffeur's Guide",
    metaTitle: "National Harbor ICE! Transportation Guide | 92 Limo",
    metaDescription:
      "Getting to Gaylord National's ICE! exhibit and National Harbor's holiday season without the parking garage queue. Call (877) 609-1919 to book.",
    category: "Holiday & Seasonal",
    date: "2026-11-01",
    readTime: "6 min read",
    excerpt:
      "Gaylord National's ICE! exhibit opens for the season in mid-November and runs through New Year's, turning National Harbor's parking garages into the slowest part of the night. Here's the easier way in and out.",
    image: "/images/blog/scenario-doorman.webp",
    intro: [
      "Every year, Gaylord National Resort's atrium turns into a two-million-pound hand-carved ice sculpture exhibit, and National Harbor turns into the DMV's single most popular holiday destination for the better part of two months. ICE! runs from mid-November through New Year's, overlapping with the Capital Wheel's holiday lighting, the waterfront's tree and light displays, and MGM National Harbor's own seasonal draw next door — which means the garages serving all three fill up fast, especially on weekend evenings. A chauffeured drop-off turns that bottleneck into a non-issue.",
    ],
    sections: [
      {
        heading: "Why National Harbor's Parking Gets Especially Bad This Time of Year",
        paragraphs: [
          "On an ordinary night, National Harbor's garages comfortably absorb its restaurant and casino traffic. During ICE! season, Gaylord National's own garage fills with exhibit visitors on top of hotel guests, while the public garages nearby pick up the overflow from families doing the waterfront lights, the Capital Wheel, and dinner all in the same trip. Weekend evenings in December are the worst of it — exactly when most families want to go.",
        ],
      },
      {
        heading: "A Drop-Off Beats a Garage Search",
        paragraphs: [
          "A chauffeured vehicle drops your group right at the Gaylord National entrance and waits nearby or returns at a coordinated pickup time — no circling a garage for a spot, no walking a quarter-mile from an overflow lot with kids and strollers in December cold. For a Sprinter-van-sized group, it also means everyone arrives and leaves together instead of caravanning and trying to park near each other in a garage that may not have adjacent spots to begin with.",
        ],
      },
      {
        heading: "Making a Full Evening of It",
        paragraphs: [
          "Most visitors don't come just for ICE! — a typical night layers in dinner on the waterfront, a ride on the Capital Wheel's holiday lights, and a walk through the Tanger Outlets or the harbor's tree displays. Hourly, as-directed booking covers all of it in one reservation: give your chauffeur a rough window and the vehicle simply stays with you between stops rather than running on a single fixed pickup time. Our National Harbor Evening Itinerary guide covers the MGM and Capital Wheel side of a night out at the Harbor in more depth.",
        ],
      },
      {
        heading: "Booking for the Season",
        paragraphs: [
          "ICE! weekends book up the same garages (and the same car service slots) as everyone else, so reserve ahead, especially for a Friday or Saturday night in December. Tell us your group size and whether you're adding other Harbor stops, and we'll build the evening around one flat rate.",
          "92 Limo Service serves National Harbor, Oxon Hill, and all of Washington DC, Maryland, and Northern Virginia, 24/7 — including every night of ICE! season. Call (877) 609-1919 or book online.",
        ],
      },
    ],
    relatedLinks: [
      { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
      { label: "MGM National Harbor Transportation", to: "/mgm-national-harbor-transportation" },
      { label: "Oxon Hill, MD Limo Service", to: "/oxon-hill-md-limo-service" },
      { label: "National Harbor Evening Itinerary: MGM & Capital Wheel", to: "/blog/national-harbor-evening-itinerary-mgm-capital-wheel-chauffeur" },
      { label: "Book your ride", to: "/booking" },
    ],
    faqs: [
      {
        q: "When does ICE! run at Gaylord National?",
        a: "The exhibit typically runs from mid-November through New Year's, overlapping with National Harbor's other holiday displays and the Capital Wheel's seasonal lighting.",
      },
      {
        q: "Is parking really that difficult during ICE! season?",
        a: "Yes, especially on weekend evenings in December — Gaylord National's own garage fills with exhibit visitors on top of hotel guests, and nearby public garages absorb the overflow from families doing multiple Harbor attractions in one trip.",
      },
      {
        q: "Can you drop us directly at the Gaylord National entrance?",
        a: "Yes — your chauffeur drops you at the entrance and coordinates a pickup location and time afterward, so there's no garage to find on either end.",
      },
      {
        q: "Can we combine ICE! with other National Harbor stops in one trip?",
        a: "Yes — hourly, as-directed booking lets you add the Capital Wheel, MGM National Harbor, dinner, or Tanger Outlets to the same reservation without booking separate rides.",
      },
      {
        q: "Do you handle groups during the holiday season?",
        a: "Yes — a Mercedes Sprinter van keeps a larger group together in one vehicle, which matters most on the busy weekend nights when garage parking is tightest.",
      },
    ],
  },
];
