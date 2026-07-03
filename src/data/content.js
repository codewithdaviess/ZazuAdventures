import davies from "../assets/victoriafalls.jpg";
import vfgt1 from "../assets/vfgt1.jpg";
import vfgt2 from "../assets/vfgt2.jpg";
import vfgt3 from "../assets/vfgt3.jpg";
import vfgt4 from "../assets/vfgt4.jpg";
import vfgt5 from "../assets/vfgt5.jpg";
import vfgt6 from "../assets/vfgt6.jpg";
import heroImage from "../assets/victoriafalls.jpg";
import gallery2 from "../assets/BoatCruise.jpg";
import gallery3 from "../assets/Helicopter.jpg";
import boatCruise2 from "../assets/BoatCruise2.jpg";
import helicopter from "../assets/Helicopter.jpg";
import safariWalk from "../assets/SafariGameWalk.jpg";
import safari from "../assets/safari.png";
import contour from "../assets/contourbg.png";

/* =========================
   HERO
========================= */
export const hero = {
  title: "Adventure starts here",
  subtitle:
    "Safaris, river escapes, and unforgettable experiences across Zambia, Zimbabwe, and beyond.",
  ctaText: null,
  ctaLink: null,
  backgroundImageUrl: davies,
};

/* =========================
   COMPANY INFO
========================= */

export const company = {
  name: "Zazu Adventures",
  tagline: "Tours, transfers, and holiday packages in Southern Africa.",
  summary:
    "Zazu Adventures plans and books practical travel services and curated experiences across Zimbabwe, Zambia, and Botswana - built around trusted local partners and clear, upfront communication.",
  whyUs: [
    "Local-first planning with vetted operators and guides.",
    "Clear inclusions, pickup details, and timing before you pay.",
    "Flexible, human support via WhatsApp and email.",
  ],
  contact: {
    phone: "+263 77 517 9744",
    whatsappLink: "https://wa.me/263775179744",
    email: "info@zazuadventures.com",
    base: "Victoria Falls, Zimbabwe",
  },
  notes: [
    "Prices shown are starting rates and can change based on season, pickup area, and group size.",
    "For multi-day packages, we confirm availability before final payment.",
  ],
};

/* =========================
   COMMON POLICIES
========================= */

export const commonPolicies = {
  cancellation:
    "Free cancellation up to 24 hours before start time. Same-day cancellations may be non-refundable depending on operator terms.",
  payment:
    "A deposit may be required to secure limited-availability activities and accommodation-based packages.",
  whatToBring:
    "Passport/ID, comfortable shoes, sun protection, and a light rain jacket during high-water months at Victoria Falls.",
};

export const experiences = [
  {
    id: "victoria-falls-experience",
    slug: "victoria-falls",
    type: "experience",
    tripType: "DAY TRIP",
    category: "Experiences",
    title: "Victoria Falls",
    description: "Guided Falls viewpoints, rainforest walk, and classic photo stops.",
    shortDescription: "Guided waterfalls experience.",
    destination: "Victoria Falls",
    duration: "Half Day",
    priceFrom: 30,
    priceUnit: "per person",
    imageUrl: heroImage,
    destinations: ["victoria-falls"],
    highlights: [
      "Guided rainforest walk",
      "Best viewpoint stops",
      "Local guide commentary",
      "Easy to combine with other activities",
    ],
    includes: ["Guided tour", "Local guide assistance"],
    excludes: ["Park fees", "Tips"],
    policies: commonPolicies,
  },
  {
    id: "flight-of-angels",
    slug: "flight-of-the-angels",
    type: "experience",
    tripType: "DAY TRIP",
    category: "Experiences",
    title: "Flight of the Angels",
    description: "Scenic helicopter flight over Victoria Falls and the gorge.",
    shortDescription: "Scenic helicopter experience.",
    destination: "Victoria Falls",
    duration: "15-25 Minutes",
    priceUnit: "per person",
    imageUrl: gallery3,
    destinations: ["victoria-falls"],
    highlights: [
      "Aerial views of the Falls",
      "Short scenic flight",
      "Great photography opportunity",
    ],
    includes: ["Helicopter seat", "Pilot commentary"],
    excludes: ["Gratuities", "Optional photos"],
    policies: commonPolicies,
  },
  {
    id: "zambezi-river-cruise",
    slug: "zambezi-river-cruise",
    type: "experience",
    tripType: "DAY TRIP",
    category: "Experiences",
    title: "Zambezi River Cruise",
    description: "Relaxed sunset cruising with wildlife and river views.",
    shortDescription: "Sunset cruise on the Zambezi.",
    destination: "Victoria Falls",
    duration: "2 Hours",
    priceUnit: "per person",
    imageUrl: gallery2,
    destinations: ["victoria-falls"],
    highlights: [
      "Relaxed sunset atmosphere",
      "Wildlife viewing along the banks",
      "Great for couples and groups",
    ],
    includes: ["Boat cruise", "Crew assistance"],
    excludes: ["Drinks unless stated", "Tips"],
    policies: commonPolicies,
  },
  {
    id: "boma-dinner-show",
    slug: "boma-dinner-show",
    type: "experience",
    tripType: "DAY TRIP",
    category: "Experiences",
    title: "Boma Dinner Show",
    description: "Dinner, drums, and lively Zimbabwean entertainment.",
    shortDescription: "Dinner and drum show.",
    destination: "Victoria Falls",
    duration: "Evening",
    priceUnit: "per person",
    imageUrl: davies,
    destinations: ["victoria-falls"],
    highlights: [
      "Traditional dinner experience",
      "Live drumming and entertainment",
      "Easy evening add-on",
    ],
    includes: ["Dinner", "Entertainment"],
    excludes: ["Drinks unless stated", "Tips"],
    policies: commonPolicies,
  },
];

const guidedWalkingInfo = {
  startTimes: [
    "08:00 AM - Cooler temperatures and lighter crowds",
    "10:00 AM - Bright mid-morning visibility",
    "02:00 PM - Strong spray and dramatic light",
  ],
  includes: [
    "Professional English-speaking guide",
    "Bottled water during the tour",
    "Raincoat during high-water season",
    "Hotel transfer within Victoria Falls town",
  ],
  excludes: [
    "Victoria Falls National Park entry fees",
    "Guide gratuities",
    "Personal snacks and drinks",
  ],
  accessibility: [
    "Established walking paths with regular stops",
    "Suitable for most fitness levels",
    "Children are welcome with an adult",
    "Some sections may be slippery in peak spray season",
  ],
  whatToBring: [
    "Comfortable walking shoes",
    "Waterproof jacket or light poncho",
    "Camera or phone for photos",
    "Passport or ID for park entry if needed",
    "Sunscreen, sunglasses, and a hat",
  ],
  cancellation: [
    "Free cancellation up to 24 hours before departure",
    "Late cancellations may not qualify for a refund",
    "Severe weather may trigger a reschedule",
  ],
};

const culturalTourInfo = {
  startTimes: [
    "09:00 AM - Best for a relaxed morning visit",
    "12:00 PM - Midday departure with flexible pacing",
    "03:00 PM - Cooler late-afternoon option",
  ],
  includes: [
    "Local cultural guide",
    "Village visit and storytelling",
    "Community interaction",
    "Bottled water during the visit",
  ],
  excludes: [
    "Personal tips and gratuities",
    "Optional craft purchases",
    "Special donations unless arranged",
  ],
  accessibility: [
    "Mostly level walking through village paths",
    "Suitable for most travellers",
    "Children are welcome with an adult",
    "Some homes and paths may be uneven or sandy",
  ],
  whatToBring: [
    "Comfortable clothes",
    "Closed shoes or sandals with support",
    "Water bottle",
    "Respectful clothing for cultural visits",
  ],
  cancellation: [
    "Free cancellation up to 24 hours before departure",
    "Community events may require a new date",
    "Weather or local ceremonies can affect timing",
  ],
};

const adventureInfo = {
  startTimes: [
    "07:00 AM - Best conditions for early departures",
    "09:00 AM - Popular mid-morning slot",
    "01:00 PM - Afternoon departure when available",
  ],
  includes: [
    "Professional safety briefing",
    "Guide supervision throughout the activity",
    "Required safety gear or harnessing",
    "Bottled water or refreshments where applicable",
  ],
  excludes: [
    "Park, bridge, or activity fees if charged separately",
    "Gratuities",
    "Personal photos or optional media packages",
  ],
  accessibility: [
    "Best for travellers comfortable with active adventure",
    "May involve steps, ladders, or uneven ground",
    "Weight, age, or height limits may apply",
    "Weather and water levels can affect participation",
  ],
  whatToBring: [
    "Comfortable activewear",
    "Closed shoes where required",
    "Photo ID if requested by the operator",
    "Secure place for valuables",
  ],
  cancellation: [
    "Free cancellation up to 24 hours before departure",
    "Operator safety rules may lead to rescheduling",
    "Weather and river levels can affect access",
  ],
};

const scenicFlightInfo = {
  startTimes: [
    "08:00 AM - Clear early light and calmer winds",
    "10:30 AM - Great visibility over the Falls",
    "03:00 PM - Warmer light and dramatic shadows",
  ],
  includes: [
    "Pilot commentary",
    "Helicopter seat",
    "Safety briefing before departure",
    "Airport or heliport coordination",
  ],
  excludes: [
    "Airport taxes or heliport fees if charged separately",
    "Gratuities",
    "Optional photo or video packages",
  ],
  accessibility: [
    "Suitable for most travellers",
    "Boarding may require a small step into the aircraft",
    "Weight limits may apply per seat or aircraft",
    "Flights depend on weather and visibility",
  ],
  whatToBring: [
    "Camera or phone",
    "Sunglasses",
    "Light jacket",
    "Photo ID if required",
  ],
  cancellation: [
    "Free cancellation up to 24 hours before departure",
    "Flights can be delayed or rescheduled for weather",
    "Visibility conditions may affect flight routes",
  ],
};

const raftingInfo = {
  startTimes: [
    "07:30 AM - Cooler start for the morning run",
    "09:00 AM - Standard departure for most days",
    "11:00 AM - Later start when river conditions allow",
  ],
  includes: [
    "Certified river guides",
    "Safety briefing and river equipment",
    "Life jacket and paddle",
    "Support team coordination",
  ],
  excludes: [
    "Park fees",
    "Transport if not arranged",
    "Photos and video packages",
  ],
  accessibility: [
    "Requires a reasonable level of fitness and mobility",
    "Guests should be comfortable in moving water",
    "Not suitable for all ages or medical conditions",
    "Route may change with river conditions",
  ],
  whatToBring: [
    "Quick-dry clothes",
    "Closed shoes",
    "Change of clothes",
    "Dry bag for anything left behind",
  ],
  cancellation: [
    "Free cancellation up to 24 hours before departure",
    "River conditions can affect the route or start time",
    "Safety decisions remain with the river guide team",
  ],
};

const transferInfo = {
  startTimes: [
    "On request - Coordinated with your flight or hotel schedule",
    "Early morning - Ideal for departures",
    "Late afternoon - Useful for arrivals and hotel check-ins",
  ],
  includes: [
    "Private vehicle",
    "Professional driver",
    "Luggage assistance",
    "Door-to-door pickup within the booked area",
  ],
  excludes: [
    "Tips",
    "Extra waiting time unless arranged",
    "Special baggage handling fees if applicable",
  ],
  accessibility: [
    "Suitable for most travellers",
    "Easy hotel and airport pickup coordination",
    "Vehicle access may depend on road conditions",
    "Advance notice helps for special luggage needs",
  ],
  whatToBring: [
    "Flight details",
    "Phone contact",
    "Booking reference",
    "Passport or ID for airport check-in if needed",
  ],
  cancellation: [
    "Free cancellation up to 24 hours before pickup",
    "Late changes may depend on driver availability",
    "Flight delays should be shared as soon as possible",
  ],
};

const packageInfo = {
  startTimes: [
    "08:00 AM - Early start for the full-day program",
    "10:00 AM - Mid-morning start for selected combinations",
    "Flexible - Coordinated around the included activities",
  ],
  includes: [
    "All activities listed in the package",
    "Coordination between operators",
    "Bottled water during scheduled touring",
    "Support with timing and pickup planning",
  ],
  excludes: [
    "Accommodation unless stated",
    "Park fees and attraction entry fees unless stated",
    "Gratuities",
    "Personal extras, drinks, and optional add-ons",
  ],
  accessibility: [
    "Best for travellers comfortable with a full day out",
    "Some activities may include stairs, walking, or transfers",
    "Timing can shift slightly between operators",
    "Specific activity limits still apply to each included component",
  ],
  whatToBring: [
    "Passport or ID",
    "Comfortable clothes",
    "Camera",
    "Sun protection",
    "Cash or card for extras",
  ],
  cancellation: [
    "Free cancellation up to 24 hours before the first activity",
    "Package changes may depend on partner availability",
    "Weather or operator issues may require a reschedule",
  ],
};

/* =========================
   PACKAGES
========================= */

export const packages = [
  {
    id: "victoria-falls-chobe-5-days-4-nights",
    slug: "victoria-falls-chobe-5-days-4-nights",
    type: "package",
    tripType: "MULTI DAY TRIP",
    category: "Multiday Packages",
    title: "Victoria Falls, Chobe",
    description: "Best of Victoria Falls and Chobe Safari.",
    shortDescription: "Victoria Falls and Chobe in one itinerary.",
    price: 1450,
    priceFrom: 1450,
    priceUnit: "per person",
    imageUrl: davies,
    gallery: [davies, gallery2, safari],
    destinations: ["victoria-falls", "chobe"],
    duration: "5 Days 4 Nights",
    destination: "Victoria Falls and Chobe",
    route: "Victoria Falls, Zambezi River, and Chobe National Park",
    itineraryDays: [
      {
        day: 1,
        title: "Arrival in Victoria Falls",
        details:
          "Airport meet and greet, transfer to your hotel, sunset cruise on the Zambezi River, and overnight in Victoria Falls.",
        bullets: [
          "Airport meet and greet",
          "Transfer to hotel",
          "Sunset cruise on the Zambezi River",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 2,
        title: "Explore Victoria Falls",
        details:
          "Guided tour of the Falls, followed by a free afternoon for optional helicopter flight, cultural village visit, or other adventure activities.",
        bullets: [
          "Guided tour of the Falls",
          "Free afternoon for optional activities",
          "Overnight in Victoria Falls",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 3,
        title: "Chobe National Park",
        details:
          "Transfer to Botswana for a morning game drive, lunch at a lodge, afternoon Chobe River boat safari, then return to Victoria Falls.",
        bullets: [
          "Transfer to Botswana",
          "Morning game drive",
          "Lunch at a lodge",
          "Afternoon Chobe River boat safari",
          "Return to Victoria Falls",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 4,
        title: "Leisure or Optional Activities",
        details:
          "A flexible day for guests to choose from optional experiences like helicopter flights, white-water rafting, the Boma dinner, or an elephant encounter where available.",
        bullets: [
          "Helicopter flight",
          "White-water rafting",
          "Boma Dinner & Drum Show",
          "Elephant encounter where available",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 5,
        title: "Departure",
        details: "Airport transfer for your onward journey.",
        bullets: ["Airport transfer"],
      },
    ],
    includes: [
      "4 nights accommodation",
      "Breakfast daily",
      "Airport transfers",
      "Guided Victoria Falls tour",
      "Sunset cruise",
      "Full-day Chobe safari with game drive, boat cruise, lunch, and park fees",
      "Professional guide",
      "Bottled water during transfers",
    ],
    excludes: [
      "Flights",
      "Visa fees",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
    ],
    policies: commonPolicies,
  },

  {
    id: "hwange-victoria-falls-chobe-nata-8-days-7-nights",
    slug: "hwange-victoria-falls-chobe-nata-8-days-7-nights",
    type: "package",
    tripType: "MULTI DAY TRIP",
    category: "Multiday Packages",
    title: "Hwange NP, Victoria Falls, Chobe and Nata",
    description:
      "Hwange, Victoria Falls, Chobe and Nata safari circuit.",
    shortDescription: "Hwange, Victoria Falls, Chobe, and Nata.",
    price: 2500,
    priceFrom: 2500,
    priceUnit: "per person",
    imageUrl: safari,
    gallery: [safari, davies, boatCruise2],
    destinations: ["hwange", "victoria-falls", "chobe"],
    duration: "8 Days 7 Nights",
    destination: "Hwange, Victoria Falls, Chobe and Nata",
    route: "Victoria Falls, Hwange National Park, Chobe National Park, and Nata",
    itineraryDays: [
      {
        day: 1,
        title: "Arrival in Victoria Falls",
        details:
          "Airport meet and greet, transfer to hotel, leisure evening, and overnight in Victoria Falls.",
        bullets: [
          "Airport meet and greet",
          "Transfer to hotel",
          "Leisure evening",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 2,
        title: "Victoria Falls",
        details:
          "Guided tour of the Falls and sunset cruise on the Zambezi River.",
        bullets: [
          "Guided tour of the Falls",
          "Sunset cruise on the Zambezi River",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 3,
        title: "Hwange National Park",
        details:
          "Transfer to Hwange for an afternoon game drive and overnight in Hwange.",
        bullets: ["Transfer to Hwange", "Afternoon game drive"],
        overnight: "Hwange",
      },
      {
        day: 4,
        title: "Hwange National Park",
        details:
          "Full-day game drive with picnic lunch and another overnight in Hwange.",
        bullets: ["Full-day game drive", "Picnic lunch"],
        overnight: "Hwange",
      },
      {
        day: 5,
        title: "Chobe National Park",
        details:
          "Transfer to Kasane for an afternoon Chobe River boat cruise and overnight in Kasane.",
        bullets: ["Transfer to Kasane", "Afternoon Chobe River boat cruise"],
        overnight: "Kasane",
      },
      {
        day: 6,
        title: "Chobe National Park",
        details:
          "Morning game drive and a relaxed afternoon with optional activities or leisure time in Kasane.",
        bullets: ["Morning game drive", "Afternoon at leisure or optional activities"],
        overnight: "Kasane",
      },
      {
        day: 7,
        title: "Nata",
        details:
          "Drive to Nata and visit the Makgadikgadi Pans or Nata Bird Sanctuary depending on the season.",
        bullets: [
          "Drive to Nata",
          "Makgadikgadi Pans or Nata Bird Sanctuary visit",
        ],
        overnight: "Nata",
      },
      {
        day: 8,
        title: "Departure",
        details:
          "Transfer to Kasane Airport or Victoria Falls Airport depending on onward travel plans.",
        bullets: ["Transfer to airport"],
      },
    ],
    includes: [
      "7 nights accommodation",
      "Breakfast daily and meals where included by safari lodges",
      "Airport transfers",
      "Guided Victoria Falls tour",
      "Sunset cruise",
      "Hwange game drives",
      "Chobe game drive",
      "Chobe boat cruise",
      "Park fees",
      "Ground transport throughout the tour",
      "Professional guide/driver",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Optional activities",
      "Personal expenses",
    ],
    policies: commonPolicies,
  },

  {
    id: "hwange-victoria-falls-chobe-okavango-delta-11-days-10-nights",
    slug: "hwange-victoria-falls-chobe-okavango-delta-11-days-10-nights",
    type: "package",
    tripType: "MULTI DAY TRIP",
    category: "Multiday Packages",
    title: "Hwange NP, Victoria Falls, Chobe and Okavango Delta",
    description: "Hwange, Victoria Falls, Chobe and Okavango Delta safari.",
    shortDescription: "Hwange, Victoria Falls, Chobe, and Okavango Delta.",
    price: 4800,
    priceFrom: 4800,
    priceUnit: "per person",
    imageUrl: safariWalk,
    gallery: [safariWalk, safari, boatCruise2],
    destinations: ["hwange", "victoria-falls", "chobe", "okavango-delta"],
    duration: "11 Days 10 Nights",
    destination: "Hwange, Victoria Falls, Chobe and Okavango Delta",
    route: "Hwange National Park, Victoria Falls, Chobe, and Okavango Delta",
    itineraryDays: [
      {
        day: 1,
        title: "Arrival in Victoria Falls",
        details:
          "Airport meet and greet, transfer to hotel, and overnight in Victoria Falls.",
        bullets: ["Airport meet and greet", "Transfer to hotel"],
        overnight: "Victoria Falls",
      },
      {
        day: 2,
        title: "Victoria Falls",
        details:
          "Guided tour of the Falls and sunset cruise on the Zambezi River.",
        bullets: ["Guided tour of the Falls", "Sunset cruise on the Zambezi River"],
        overnight: "Victoria Falls",
      },
      {
        day: 3,
        title: "Hwange National Park",
        details: "Transfer to Hwange and an afternoon game drive.",
        bullets: ["Transfer to Hwange", "Afternoon game drive"],
        overnight: "Hwange",
      },
      {
        day: 4,
        title: "Hwange National Park",
        details: "Full-day game drive with picnic lunch.",
        bullets: ["Full-day game drive with picnic lunch"],
        overnight: "Hwange",
      },
      {
        day: 5,
        title: "Chobe National Park",
        details: "Transfer to Kasane and afternoon Chobe River boat cruise.",
        bullets: ["Transfer to Kasane", "Afternoon Chobe River boat cruise"],
        overnight: "Kasane",
      },
      {
        day: 6,
        title: "Chobe National Park",
        details: "Morning game drive and afternoon at leisure or optional activities.",
        bullets: ["Morning game drive", "Afternoon at leisure or optional activities"],
        overnight: "Kasane",
      },
      {
        day: 7,
        title: "Transfer Day",
        details: "Transfer toward the Okavango Delta with an overnight stop as arranged.",
        bullets: ["Transfer toward the Okavango Delta"],
      },
      {
        day: 8,
        title: "Okavango Delta",
        details: "Arrival and delta experience with guided activities.",
        bullets: ["Okavango Delta experience"],
      },
      {
        day: 9,
        title: "Okavango Delta",
        details: "Full day in the delta for safari activities and relaxation.",
        bullets: ["Safari activities", "Relaxation time"],
      },
      {
        day: 10,
        title: "Okavango Delta",
        details: "Leisure day with optional activities and final lodge night.",
        bullets: ["Leisure time", "Optional activities"],
      },
      {
        day: 11,
        title: "Departure",
        details: "Transfer to the departure point for onward travel.",
        bullets: ["Departure transfer"],
      },
    ],
    includes: [
      "10 nights accommodation",
      "Breakfast daily and lodge meals where included",
      "Airport transfers",
      "Guided Victoria Falls tour",
      "Sunset cruise",
      "Hwange game drives",
      "Chobe game drive",
      "Chobe boat cruise",
      "Ground transport throughout the tour",
      "Professional guide/driver",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Optional activities",
      "Personal expenses",
    ],
    policies: commonPolicies,
  },

  {
    id: "cape-town-kruger-vic-falls-chobe-11-days-10-nights",
    slug: "cape-town-kruger-vic-falls-chobe-11-days-10-nights",
    type: "package",
    tripType: "MULTI DAY TRIP",
    category: "Multiday Packages",
    title: "Cape Town, Kruger, Vic Falls and Chobe",
    description: "Cape Town, Kruger, Victoria Falls and Chobe safari.",
    shortDescription: "Cape Town, Kruger, Vic Falls, and Chobe.",
    price: 4800,
    priceFrom: 4800,
    priceUnit: "pp",
    imageUrl: helicopter,
    gallery: [helicopter, safari, davies],
    destinations: ["victoria-falls", "chobe"],
    duration: "11 Days 10 Nights",
    destination: "Cape Town, Kruger, Victoria Falls and Chobe",
    route: "Cape Town, Kruger National Park, Victoria Falls, and Chobe National Park",
    itineraryDays: [
      {
        day: 1,
        title: "Arrive in Cape Town",
        details:
          "Meet and greet at the airport, transfer to hotel, free afternoon, and overnight in Cape Town.",
        bullets: [
          "Meet and greet at the airport",
          "Transfer to hotel",
          "Free afternoon to relax or explore the V&A Waterfront",
        ],
        overnight: "Cape Town",
      },
      {
        day: 2,
        title: "Cape Peninsula Tour",
        details:
          "Drive Chapman's Peak, visit Cape Point and Boulders Beach, then return to Cape Town.",
        bullets: [
          "Chapman's Peak Drive",
          "Cape Point",
          "Boulders Beach penguins",
        ],
        overnight: "Cape Town",
      },
      {
        day: 3,
        title: "Cape Town City Tour",
        details:
          "Table Mountain if weather permits, Bo-Kaap, Company Gardens, and afternoon at leisure.",
        bullets: ["Table Mountain", "Bo-Kaap", "Company Gardens"],
        overnight: "Cape Town",
      },
      {
        day: 4,
        title: "Fly to Kruger",
        details:
          "Morning flight to Kruger or Mpumalanga, transfer to safari lodge, and afternoon game drive.",
        bullets: ["Morning flight to Kruger/Mpumalanga", "Afternoon game drive"],
        overnight: "Near Kruger National Park",
      },
      {
        day: 5,
        title: "Kruger National Park",
        details: "Full-day Big Five safari near Kruger National Park.",
        bullets: ["Full-day Big Five safari"],
        overnight: "Near Kruger National Park",
      },
      {
        day: 6,
        title: "Fly to Victoria Falls",
        details:
          "Morning transfer, flight to Victoria Falls, sunset cruise on the Zambezi River, and overnight in Victoria Falls.",
        bullets: ["Morning transfer", "Flight to Victoria Falls", "Sunset cruise on the Zambezi River"],
        overnight: "Victoria Falls",
      },
      {
        day: 7,
        title: "Victoria Falls",
        details:
          "Guided tour of Victoria Falls with a free afternoon for optional activities.",
        bullets: ["Guided tour of Victoria Falls", "Free afternoon for optional activities"],
        overnight: "Victoria Falls",
      },
      {
        day: 8,
        title: "Chobe National Park",
        details:
          "Full-day Chobe safari with morning game drive, lunch, afternoon boat cruise, then return to Victoria Falls.",
        bullets: [
          "Morning game drive",
          "Lunch",
          "Afternoon boat cruise",
          "Return to Victoria Falls",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 9,
        title: "Victoria Falls Leisure Day",
        details:
          "Leisure day with optional activities such as helicopter flight, Devils Pool, white-water rafting, or Boma dinner.",
        bullets: [
          "Helicopter flight",
          "Devils Pool",
          "White-water rafting",
          "Boma dinner",
        ],
        overnight: "Victoria Falls",
      },
      {
        day: 10,
        title: "Victoria Falls Free Day",
        details:
          "Free day for shopping, cafes, additional excursions, or a farewell dinner.",
        bullets: ["Shopping", "Cafes", "Additional excursions", "Farewell dinner"],
        overnight: "Victoria Falls",
      },
      {
        day: 11,
        title: "Departure",
        details: "Airport transfer for your onward flight.",
        bullets: ["Airport transfer"],
      },
    ],
    includes: [
      "10 nights accommodation",
      "Airport transfers",
      "Domestic/regional flights where sold as an inclusive package",
      "Breakfast daily",
      "Guided Cape Peninsula tour",
      "Cape Town city tour",
      "Kruger full-day safari",
      "Victoria Falls guided tour",
      "Zambezi sunset cruise",
      "Full-day Chobe safari with game drive, boat cruise, lunch, and park fees",
      "Professional guides",
    ],
    excludes: [
      "International flights to or from Southern Africa",
      "Visa fees",
      "Travel insurance",
      "Optional activities",
      "Personal expenses",
      "Some lunches and dinners",
    ],
    policies: commonPolicies,
  },

  {
    id: "guided-falls-tour-lunch-sunset-cruise",
    slug: "guided-falls-tour-lunch-sunset-cruise",
    type: "package",
    category: "Packages",
    title: "Falls Tour + Lunch + Sunset Cruise",
    ...packageInfo,
    description:
      "Guided tour of Victoria Falls with lunch at Lookout Cafe and a sunset cruise.",
    shortDescription: "Falls tour, lunch, and sunset cruise combo.",
    longDescription:
      "Explore Victoria Falls, enjoy lunch at Lookout Cafe, and finish with a relaxed sunset cruise on the Zambezi.",
    price: 120,
    priceFrom: 120,
    priceUnit: "per person",
    imageUrl: heroImage,
    gallery: [heroImage, gallery2, contour],
    destinations: ["victoria-falls"],
    duration: "Full day",
    policies: commonPolicies,
  },

  {
    id: "zim-zam-falls-and-city-tour",
    slug: "zim-zam-falls-and-city-tour",
    type: "package",
    category: "Packages",
    title: "Zim/Zam Falls Tour + Livingstone City Tour + Museum",
    ...packageInfo,
    description:
      "Guided Falls tours on both the Zimbabwe and Zambia sides with a Livingstone city tour and museum visit.",
    shortDescription: "Cross-border Falls and city tour experience.",
    longDescription:
      "See Victoria Falls from both sides, then enjoy a relaxed Livingstone city tour and museum stop.",
    price: 120,
    priceFrom: 120,
    priceUnit: "per person",
    imageUrl: gallery2,
    gallery: [gallery2, heroImage, contour],
    destinations: ["livingstone", "victoria-falls"],
    duration: "Full day",
    policies: commonPolicies,
  },

  {
    id: "am-safari-helicopter-boma",
    slug: "am-safari-helicopter-boma",
    type: "package",
    category: "Packages",
    title: "AM Safari + Helicopter Flight + Boma Dinner",
    ...packageInfo,
    description:
      "Morning safari, scenic helicopter flight, and an evening at The Boma with dinner and drum show.",
    shortDescription: "Safari, helicopter, and Boma dinner combo.",
    longDescription:
      "Start with a morning safari, enjoy a helicopter flight over Victoria Falls, and end the day with dinner and a drum show at The Boma.",
    price: 365,
    priceFrom: 365,
    priceUnit: "per person",
    imageUrl: gallery3,
    gallery: [gallery3, heroImage, contour],
    destinations: ["victoria-falls"],
    duration: "Full day",
    policies: commonPolicies,
  },

  {
    id: "bamba-tram-falls-boma",
    slug: "bamba-tram-falls-boma",
    type: "package",
    category: "Packages",
    title: "AM Bamba Tram + Falls Tour + Boma",
    ...packageInfo,
    description:
      "Ride the Bamba Tram, enjoy a guided tour of the Falls, and finish with The Boma experience.",
    shortDescription: "Tram, Falls tour, and Boma dinner package.",
    longDescription:
      "A simple Victoria Falls day combining the Bamba Tram, a guided Falls tour, and an evening at The Boma.",
    price: 200,
    priceFrom: 200,
    priceUnit: "per person",
    imageUrl: contour,
    gallery: [contour, heroImage, gallery2],
    destinations: ["victoria-falls"],
    duration: "Full day",
    policies: commonPolicies,
  },

  {
    id: "lion-elephant-walk-heli-sunset-cruise",
    slug: "lion-elephant-walk-heli-sunset-cruise",
    type: "package",
    category: "Packages",
    title: "Lion/Elephant Walk + Helicopter Flight + Sunset Cruise",
    ...packageInfo,
    description:
      "A wildlife walk experience paired with a helicopter flight and a sunset cruise.",
    shortDescription: "Wildlife walk, flight, and sunset cruise combo.",
    longDescription:
      "Combine a lion or elephant walk with a helicopter flight over Victoria Falls, then end with a sunset cruise on the Zambezi.",
    price: 450,
    priceFrom: 450,
    priceUnit: "per person",
    imageUrl: vfgt1,
    gallery: [vfgt1, heroImage, gallery3],
    destinations: ["victoria-falls"],
    duration: "Full day",
    policies: commonPolicies,
  },

  {
    id: "early-morning-falls-heli-boma",
    slug: "early-morning-falls-heli-boma",
    type: "package",
    category: "Packages",
    title: "Early Morning Falls Tour + Heli + Boma Dinner",
    ...packageInfo,
    description:
      "An early guided tour of the Falls, a helicopter flight, and dinner with drum show at The Boma.",
    shortDescription: "Early tour, helicopter, and Boma dinner combo.",
    longDescription:
      "Start early with a guided tour of Victoria Falls, take to the air for a helicopter flight, and close out the day with dinner and live drums at The Boma.",
    price: 320,
    priceFrom: 320,
    priceUnit: "per person",
    imageUrl: vfgt2,
    gallery: [vfgt2, heroImage, gallery2],
    destinations: ["victoria-falls"],
    duration: "Full day",
    policies: commonPolicies,
  },

  {
    id: "am-safari-lion-cheetah-dinner-cruise",
    slug: "am-safari-lion-cheetah-dinner-cruise",
    type: "package",
    category: "Packages",
    title: "AM Safari + Lion/Cheetah Walk + Dinner Cruise",
    ...packageInfo,
    description:
      "Morning safari, lion or cheetah walk, and an evening dinner cruise on the Zambezi.",
    shortDescription: "Safari, predator walk, and dinner cruise combo.",
    longDescription:
      "Enjoy a morning safari, add a lion or cheetah walk experience, and finish the day with a calm dinner cruise.",
    price: 360,
    priceFrom: 360,
    priceUnit: "per person",
    imageUrl: vfgt3,
    gallery: [vfgt3, heroImage, gallery3],
    destinations: ["victoria-falls"],
    duration: "Full day",
    policies: commonPolicies,
  },
];

/* =========================
   ABOUT
========================= */

export const aboutCards = [
  {
    id: "mission",
    icon: "target",
    title: "Our mission",
    description:
      "Make exploring Southern Africa simple, safe, and unforgettable.",
  },
  {
    id: "vision",
    icon: "eye",
    title: "Our vision",
    description:
      "Build a trusted adventure brand connecting travelers to authentic experiences.",
  },
  {
    id: "values",
    icon: "leaf",
    title: "Responsible travel",
    description:
      "We prioritize ethical wildlife encounters and community-first tourism.",
  },
  {
    id: "partners",
    icon: "handshake",
    title: "Curated partners",
    description: "We work with vetted guides and operators only.",
  },
];

/* =========================
   CATALOG
========================= */

export const catalog = {
  transfers: [
    {
      id: "vfa-airport-to-victoria-falls-hotel",
      slug: "vfa-airport-to-victoria-falls-hotel",
      type: "transfer",
      category: "Airport Transfers",
      title: "Victoria Falls Airport (VFA) to Town Hotels",
      shortDescription:
        "Private airport pickup or drop-off between VFA and town hotels.",
      longDescription:
        "Reliable private airport transfers with meet-and-greet service.",
      imageUrl: heroImage,
      gallery: [heroImage, gallery2, contour],
      priceFrom: 25,
      priceUnit: "per person",
      duration: "25-40 mins",
      pickup: "VFA airport arrivals or your hotel reception",
      route: "Victoria Falls Airport to Victoria Falls town",
      destinations: ["victoria-falls"],
      includes: ["Private vehicle", "Meet-and-greet", "Bottled water"],
      excludes: ["Visa fees", "Tips"],
      policies: commonPolicies,
    },
  ],

  tours: [
    {
      slug: "victoria-falls-guided-tour",
      type: "tour",
      category: "Guided Tours",
      title: "Guided Tour of Victoria Falls",
      ...guidedWalkingInfo,
      shortDescription:
        "Explore Victoria Falls with a professional local guide.",
      longDescription:
        "Experience one of the Seven Natural Wonders of the World with a guided rainforest walk covering the best viewpoints, history, geology, and photography spots around Victoria Falls.",
      imageUrl: heroImage,
      gallery: [heroImage, gallery2, gallery3, contour],
      priceFrom: 30,
      childPriceFrom: 15,
      infantPriceFrom: 0,
      priceUnit: "per person",
      duration: "2 Hours",
      pickup: "Victoria Falls hotels or rainforest entrance",
      route: "Victoria Falls Rainforest",
      destinations: ["victoria-falls"],
      highlights: [
        "Professional local guide",
        "Best waterfall viewpoints",
        "Photography stops",
        "Rainforest walk",
      ],
      includes: ["Guided tour", "Local guide assistance"],
      excludes: ["Park fees", "Raincoats", "Tips"],
      policies: commonPolicies,
    },
  ],

  packages: [
    {
      id: "victoria-falls-3-day-classic",
      slug: "victoria-falls-3-day-classic",
      type: "package",
      category: "Victoria Falls Packages",
      title: "Victoria Falls 3 Day Classic",
      ...packageInfo,
      shortDescription: "A balanced short break with tours and sunset cruise.",
      longDescription:
        "A clean itinerary combining transfers, Falls tour, and cruise experiences.",
      imageUrl: heroImage,
      gallery: [heroImage, gallery2, contour],
      priceFrom: 320,
      priceUnit: "per person",
      duration: "3 days / 2 nights",
      pickup: "Airport pickup optional",
      destinations: ["victoria-falls"],
      itineraryDays: [
        {
          day: 1,
          title: "Arrival",
          location: "Victoria Falls",
          details: "Transfer and check-in.",
        },
      ],
      includes: ["Guided Falls visit", "Sunset cruise"],
      excludes: ["Accommodation", "Park fees"],
      policies: commonPolicies,
    },
  ],
};

/* =========================
   UNIVERSAL PRODUCTS
========================= */

export const products = [
  ...experiences,
  ...packages,
  ...catalog.transfers,
  ...catalog.tours,
  ...catalog.packages,
];

/* =========================
   HELPERS
========================= */

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return (
    [...experiences, ...products].find(
      (product) => product.slug?.toLowerCase() === slug?.toLowerCase(),
    ) || null
  );
}

export function getExperiences() {
  return experiences;
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getProductsForDestination(destinationId) {
  return products.filter(
    (product) =>
      Array.isArray(product.destinations) &&
      product.destinations.includes(destinationId),
  );
}

export function getProductsByType(type) {
  return products.filter((product) => product.type === type);
}

export function getRelatedProducts(destinationId, currentSlug) {
  return products.filter(
    (product) =>
      product.slug !== currentSlug &&
      product.destinations?.includes(destinationId),
  );
}
