import davies from "../assets/background.png";
import vfgt1 from "../assets/vfgt1.jpg";
import vfgt2 from "../assets/vfgt2.jpg";
import vfgt3 from "../assets/vfgt3.jpg";
import vfgt4 from "../assets/vfgt4.jpg";
import vfgt5 from "../assets/vfgt5.jpg";
import vfgt6 from "../assets/vfgt6.jpg";
import heroImage from "../assets/background.png";
import gallery2 from "../assets/background2.png";
import gallery3 from "../assets/background3.png";
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

/* =========================
   DESTINATIONS
========================= */

export const destinations = [
  {
    id: "victoria-falls",
    name: "Victoria Falls",
    country: "Zimbabwe",
    description:
      "Iconic waterfall adventures, rainforest walks, helicopter flights, and sunset cruises on the Zambezi.",
    bestTimeToVisit: "High water: Marchâ€“May. Lower water: Augustâ€“December.",
    size: "small",
    imageUrl: gallery2,
  },
  {
    id: "hwange",
    name: "Hwange National Park",
    country: "Zimbabwe",
    description:
      "Gateway to Victoria Falls on the Zambian side, with river cruises, cultural visits, and easy connections to national parks.",
    bestTimeToVisit:
      "May to October for drier weather and easier wildlife viewing; March to May for higher water.",
    size: "large",
    imageUrl: gallery3,
  },
  {
    id: "chobe",
    name: "Chobe",
    country: "Botswana",
    description:
      "Riverfront camps, canoe safaris, and game drives with big views of the Zambezi escarpment.",
    bestTimeToVisit:
      "June to October for peak wildlife viewing; shoulder months can be excellent.",
    size: "small",
    imageUrl: davies,
  },
  {
    id: "okavango-delta",
    name: "Okavango Delta",
    country: "Botswana",
    description: "Famous for walking safaris, leopards, and excellent guiding.",
    bestTimeToVisit:
      "June to October for safari season; November is hot and rainy season affects roads.",
    size: "large",
    imageUrl: davies,
  },
  {
    id: "kafue",
    name: "Kafue National Park",
    country: "Zambia",
    description:
      "Huge wilderness with floodplains, forests, and remote safari lodges.",
    bestTimeToVisit:
      "July to October for best access; some camps close in rainy season.",
    size: "large",
    imageUrl: davies,
  },
  {
    id: "zafue",
    name: "Zafue National Park",
    country: "Gambia",
    description:
      "Huge wilderness with floodplains, forests, and remote safari lodges.",
    bestTimeToVisit:
      "July to October for best access; some camps close in rainy season.",
    size: "small",
    imageUrl: davies,
  },
];

/* =========================
   ACTIVITIES
========================= */

export const activities = [
  {
    id: "guided-falls-tour",
    slug: "victoria-falls-guided-tour",
    type: "tour",
    category: "Guided Tours",
    title: "Guided Tour of Victoria Falls",
    duration: "2 Hours",
    groupSize: "1-50 People",
    activityType: "Guided Walking Tour",
    departureLocation: "Victoria Falls Rainforest Entrance",
    languages: ["English"],
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 30,
    priceFrom: 30,
    childPriceFrom: 15,
    infantPriceFrom: 0,
    priceUnit: "per person",
    rating: 4.7,
    reviews: 210,
    shortDescription: "A guided rainforest walk with the best viewpoints at Victoria Falls.",
    description: "Experience Victoria Falls on a guided walking tour through the rainforest with panoramic viewpoints, local insights, and plenty of photo stops.",
    longDescription: "Explore Victoria Falls on a relaxed guided walk through the rainforest. Your guide will explain the geology, history, and local stories behind the Falls while stopping at the best viewing points for photos and spray-filled views.\n\nThis is the most popular first-time experience in Victoria Falls because it combines easy walking, great photo moments, and a clear introduction to the waterfall, the rainforest, and the Zambezi gorge.",
    imageUrl: davies,
    gallery: [vfgt1, vfgt2, vfgt3, vfgt4, vfgt5, vfgt6],
    companyName: "Zazu Adventures",
    highlights: [
      "Guided rainforest walk with a local expert",
      "Multiple panoramic viewpoints",
      "Great photography stops",
      "History, geology, and local stories",
      "Suitable for most travellers",
    ],
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
    itineraryDays: [
      {
        day: 1,
        title: "Arrival & Rainforest Exploration",
        locationId: "victoria-falls",
        details: "Meet your guide at the rainforest entrance and walk the viewpoints while learning the history, geology, and local significance of the Falls.",
        activityIds: [],
      },
    ],
    policies: commonPolicies,
  },

  {
    id: "falls-bridge-tour",
    slug: "victoria-falls-bridge-tour",
    type: "tour",
    category: "Guided Tours",
    title: "Victoria Falls Bridge Tour",
    duration: "2 Hours",
    groupSize: "1-20 People",
    activityType: "Guided Heritage Walk",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 30,
    priceFrom: 30,
    priceUnit: "per person",
    rating: 4.7,
    reviews: 145,
    shortDescription: "Walk the Falls viewpoints and the historic bridge area.",
    description: "Explore the Falls with a professional guide and add the Victoria Falls Bridge history and border views.",
    longDescription: "This tour combines the classic Victoria Falls rainforest walk with a look at the historic bridge area. It is a good choice if you want a slightly broader heritage experience that includes the bridge, the gorge, and surrounding viewpoints.\n\nYour guide will explain the engineering history of the bridge, the role it played in the region, and the wider story of Victoria Falls as a border landmark between Zimbabwe and Zambia.",
    imageUrl: davies,
    gallery: [heroImage, gallery2, contour],
    companyName: "Zazu Adventures",
    highlights: [
      "Classic Falls viewpoints",
      "Historic bridge commentary",
      "Border and gorge views",
      "Photo-friendly stops",
    ],
    includes: ["Professional guide", "Bottled water"],
    excludes: ["Park fees", "Bridge activity fees if applicable"],
    whatToBring: [
      "Comfortable walking shoes",
      "Passport or ID if crossing viewpoints",
      "Camera for bridge shots",
    ],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "Late changes depend on availability",
    ],
    policies: commonPolicies,
  },

  {
    id: "village-tour",
    slug: "monde-village-cultural-tour",
    type: "tour",
    category: "Cultural Tours",
    title: "Village Cultural Tour",
    duration: "3 Hours",
    groupSize: "1-15 People",
    activityType: "Cultural Visit",
    destinationId: "livingstone",
    destinations: ["livingstone"],
    destination: "Livingstone",
    price: 80,
    priceFrom: 80,
    priceUnit: "per person",
    rating: 4.6,
    reviews: 140,
    shortDescription: "A guided visit into village life, traditions, and crafts.",
    description: "Visit a traditional village and experience local customs, crafts, food, and community life.",
    longDescription: "This cultural tour is designed to give you a respectful and genuine look at village life around Livingstone. You will meet local hosts, learn about everyday routines, and hear stories about traditions, family life, and community values.\n\nIt is a slower, more personal experience than the adventure activities and works well for travellers who want context and connection alongside the Falls.",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    highlights: [
      "Authentic cultural exchange",
      "Local storytelling",
      "Traditional crafts and daily life",
      "Community-focused visit",
    ],
    includes: ["Local guide", "Village visit experience"],
    excludes: ["Tips", "Optional craft purchases"],
    whatToBring: ["Comfortable clothes", "Water", "Respectful attitude"],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "Village visits may be rescheduled for community events",
    ],
    policies: commonPolicies,
  },

  {
    id: "devils-pool",
    slug: "victoria-falls-devils-pool",
    type: "activity",
    category: "Adventure Activities",
    title: "Devils Pool Experience",
    duration: "2-3 Hours",
    groupSize: "2-12 People",
    activityType: "Seasonal Adventure",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 135,
    priceFrom: 135,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    shortDescription: "Swim at the edge of Victoria Falls in low-water season.",
    description: "A thrilling guided experience to Devils Pool on Livingstone Island, available in the right seasonal window.",
    longDescription: "Devils Pool is one of the most famous seasonal experiences in the Victoria Falls region. Depending on water levels and access conditions, you can travel to Livingstone Island and, with expert guidance, swim right at the edge of the Falls.\n\nBecause availability is seasonal and weather-dependent, we always confirm the exact access window before booking. It is a premium experience and one of the most memorable things you can do at Victoria Falls.",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    highlights: [
      "Seasonal edge-of-the-Falls swim",
      "Guided Livingstone Island access",
      "Bucket-list Victoria Falls experience",
      "Premium small-group adventure",
    ],
    includes: ["Guided access", "Island transfer", "Safety briefing"],
    excludes: ["Park fees", "Optional gratuities"],
    whatToBring: [
      "Swimwear",
      "Towel and dry clothes",
      "Passport or ID",
      "Waterproof bag for valuables",
    ],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "Seasonal access can change with water levels",
    ],
    policies: commonPolicies,
  },

  {
    id: "flight-of-angels-17",
    slug: "17-mins-flight-of-angels",
    type: "activity",
    category: "Adventure Activities",
    title: "17 Min Helicopter Flight",
    duration: "17 Minutes",
    groupSize: "1-3 People",
    activityType: "Scenic Flight",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 135,
    priceFrom: 135,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    shortDescription: "A short scenic flight over Victoria Falls and the gorge.",
    description: "A thrilling aerial overview of Victoria Falls, the Zambezi River, and the surrounding gorge.",
    longDescription: "The 17 minute helicopter flight is the classic Flight of Angels style overview. It gives you a compact but spectacular look at Victoria Falls from the air, including the full curtain of water, the Zambezi River, and the dramatic Batoka Gorge.\n\nThis is ideal if you want a shorter aerial experience that still delivers the big views and photo moments.",
    imageUrl: vfgt5,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    highlights: [
      "Classic aerial Falls views",
      "Great for first-time visitors",
      "See the Zambezi and gorge from above",
      "Short and high-impact experience",
    ],
    includes: ["Pilot commentary", "Helicopter seat", "Safety briefing"],
    excludes: ["Airport fees", "Gratuities"],
    whatToBring: ["Camera or phone", "Sunglasses", "Light jacket"],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "Flights depend on weather and visibility",
    ],
    policies: commonPolicies,
  },

  {
    id: "flight-of-angels-25",
    slug: "25-mins-flight-of-angels",
    type: "activity",
    category: "Adventure Activities",
    title: "25 Min Helicopter Flight",
    duration: "25 Minutes",
    groupSize: "1-3 People",
    activityType: "Scenic Flight",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 285,
    priceFrom: 285,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    shortDescription: "A longer helicopter flight with wider Victoria Falls views.",
    description: "A scenic aerial experience that expands the viewing window over the Falls, river, and gorge.",
    longDescription: "The 25 minute helicopter flight gives you more time in the air and a wider viewing arc, so you see the Falls, Zambezi bends, and gorge from a more relaxed perspective.\n\nIt is the better choice if you want a fuller aerial experience and more time for photos and sweeping landscape views.",
    imageUrl: vfgt6,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    highlights: [
      "Extended aerial viewing time",
      "Big panoramic photo opportunities",
      "More time over the river and gorge",
      "Premium scenic experience",
    ],
    includes: ["Pilot commentary", "Helicopter seat", "Safety briefing"],
    excludes: ["Airport fees", "Gratuities"],
    whatToBring: ["Camera or phone", "Sunglasses", "Light jacket"],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "Flights depend on weather and visibility",
    ],
    policies: commonPolicies,
  },

  {
    id: "white-water-rafting-half-day",
    slug: "half-day-white-water-rafting",
    type: "activity",
    category: "Adventure Activities",
    title: "Half Day White Water Rafting",
    duration: "Half Day",
    groupSize: "4-16 People",
    activityType: "River Adventure",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 165,
    priceFrom: 165,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    shortDescription: "A fast-paced rafting run through the Zambezi rapids.",
    description: "An adrenaline-filled white water rafting trip through the gorge below Victoria Falls.",
    longDescription: "Half day rafting is the classic Victoria Falls adrenaline experience. After a safety briefing, your guides will take you down into the gorge for a sequence of exciting rapids, calm stretches, and big scenery beneath the escarpment.\n\nIt is a great choice for travellers who want strong adventure without committing to a full day on the river.",
    imageUrl: heroImage,
    gallery: [heroImage, gallery2, contour],
    companyName: "Zazu Adventures",
    highlights: [
      "Adrenaline rapids below the Falls",
      "Professional river guides",
      "Great action and scenery mix",
      "Popular Victoria Falls adventure",
    ],
    includes: ["Guides", "Safety gear", "Life jacket", "Paddle"],
    excludes: ["Park fees", "Transport if not arranged"],
    whatToBring: ["Quick-dry clothes", "Closed shoes", "Change of clothes"],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "River conditions can affect the route",
    ],
    policies: commonPolicies,
  },

  {
    id: "white-water-rafting-full-day",
    slug: "full-day-white-water-rafting",
    type: "activity",
    category: "Adventure Activities",
    title: "Full Day White Water Rafting",
    duration: "Full Day",
    groupSize: "4-16 People",
    activityType: "River Adventure",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 235,
    priceFrom: 235,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    shortDescription: "A longer rafting day with more rapids and river time.",
    description: "A full day rafting adventure that gives you more river sections, more rapids, and a bigger Zambezi experience.",
    longDescription: "The full day version is built for travellers who want to spend more time on the Zambezi and enjoy a deeper rafting day. You will cover more rapids and spend longer in the gorge, with the team keeping the pace safe and well guided throughout.\n\nThis is the version to choose if rafting is one of the main reasons you are coming to Victoria Falls.",
    imageUrl: gallery2,
    gallery: [gallery2, heroImage, gallery3],
    companyName: "Zazu Adventures",
    highlights: [
      "Longer day on the river",
      "More rapids and river sections",
      "Big adventure for rafting fans",
      "Experienced rafting guides",
    ],
    includes: ["Guides", "Safety gear", "Life jacket", "Paddle"],
    excludes: ["Park fees", "Transport if not arranged"],
    whatToBring: ["Quick-dry clothes", "Closed shoes", "Change of clothes"],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "River conditions can affect the route",
    ],
    policies: commonPolicies,
  },

  {
    id: "bridge-swing",
    slug: "victoria-falls-bridge-swing",
    type: "activity",
    category: "Adventure Activities",
    title: "Bridge Swing",
    duration: "1 Hour",
    groupSize: "1-12 People",
    activityType: "Adrenaline Activity",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 115,
    priceFrom: 115,
    priceUnit: "per person",
    rating: 4.8,
    reviews: 180,
    shortDescription: "A giant swing over the Batoka Gorge.",
    description: "Leap from the bridge platform and swing across the gorge below Victoria Falls.",
    longDescription: "Bridge Swing is the perfect choice if you want a quick, high-adrenaline hit without a full day commitment. After the harness and safety briefing, you step off the bridge platform and swing in a huge arc through the gorge.\n\nIt is intense, iconic, and one of the most photographed thrill activities in Victoria Falls.",
    imageUrl: vfgt4,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    highlights: [
      "Huge swing over the gorge",
      "Quick but intense adrenaline hit",
      "Iconic Victoria Falls thrill",
      "Great photo and video moment",
    ],
    includes: ["Safety briefing", "Harness", "Guide supervision"],
    excludes: ["Bridge activity fees if applicable", "Gratuities"],
    whatToBring: ["Comfortable clothes", "Closed shoes", "Camera for the viewing area"],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "Weather may affect jump timing",
    ],
    policies: commonPolicies,
  },

  {
    id: "bungee-jumping",
    slug: "victoria-falls-bungee-jumping",
    type: "activity",
    category: "Adventure Activities",
    title: "Bungee Jumping",
    duration: "1 Hour",
    groupSize: "1-8 People",
    activityType: "Adrenaline Jump",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 160,
    priceFrom: 160,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 400,
    shortDescription: "The famous 111m Victoria Falls Bridge bungee.",
    description: "One of the world's most famous bungee jumps, dropping from the Victoria Falls Bridge into the gorge.",
    longDescription: "Bungee Jumping from the Victoria Falls Bridge is the classic bucket-list thrill in the region. At 111 meters, it is a serious adrenaline rush and one of the most famous jumps in the world.\n\nIf you want the biggest single moment of the adventure lineup, this is it.",
    imageUrl: vfgt5,
    gallery: [vfgt5, heroImage, contour],
    companyName: "Zazu Adventures",
    highlights: [
      "111m bridge bungee jump",
      "World-famous Victoria Falls thrill",
      "Pure adrenaline experience",
      "Great for serious adventure seekers",
    ],
    includes: ["Safety briefing", "Harness", "Jump supervision"],
    excludes: ["Bridge activity fees if applicable", "Gratuities"],
    whatToBring: ["Comfortable clothes", "Closed shoes", "Photo ID if required"],
    cancellation: [
      "Free cancellation up to 24 hours before departure",
      "Weather and wind conditions can affect jump timing",
    ],
    policies: commonPolicies,
  },

  {
    id: "airport-transfer",
    slug: "livingstone-airport-transfer",
    type: "transfer",
    category: "Airport Transfers",
    title: "Airport Transfers",
    duration: "1 Hour",
    groupSize: "1-7 People",
    activityType: "Private Transfer",
    destinationId: "livingstone",
    destinations: ["livingstone"],
    destination: "Livingstone",
    price: 30,
    priceFrom: 30,
    priceUnit: "per person",
    rating: 4.5,
    reviews: 90,
    shortDescription: "Private airport pickups and drop-offs with luggage help.",
    description: "Comfortable and reliable airport transfers with professional drivers and luggage assistance.",
    longDescription: "Our airport transfer service is the simple way to get between the airport and your accommodation without stress. We provide a direct, private ride with luggage help and clear pickup coordination.\n\nThis is the most practical option for arrivals, departures, and inter-hotel movement when you want a reliable start or finish to your trip.",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    highlights: [
      "Private airport pickup and drop-off",
      "Professional local driver",
      "Luggage assistance",
      "Simple and reliable travel",
    ],
    includes: ["Private vehicle", "Driver", "Luggage help"],
    excludes: ["Tips", "Extra waiting time unless arranged"],
    whatToBring: ["Flight details", "Phone contact", "Booking reference"],
    cancellation: [
      "Free cancellation up to 24 hours before pickup",
      "Late changes may depend on driver availability",
    ],
    policies: commonPolicies,
  },
];

/* =========================
   PACKAGES
========================= */

export const packages = [
  {
    id: "guided-falls-tour-lunch-sunset-cruise",
    slug: "guided-falls-tour-lunch-sunset-cruise",
    type: "package",
    category: "Packages",
    title: "Falls Tour + Lunch + Sunset Cruise",
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
  ...activities,
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
    products.find(
      (product) => product.slug?.toLowerCase() === slug?.toLowerCase(),
    ) || null
  );
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


