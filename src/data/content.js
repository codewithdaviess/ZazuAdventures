import davies from "../assets/background.png";
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
    bestTimeToVisit: "High water: March–May. Lower water: August–December.",
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
    id: "kafue",
    name: "Kafue National Park",
    country: "Zambia",
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
    description: "Explore the Falls with a professional guide.",
    shortDescription: "Explore Victoria Falls with a professional local guide.",
    longDescription:
      "Walk through rainforest trails while learning about the geology, history, and seasonal flow of Victoria Falls.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 30,
    priceFrom: 30,
    priceUnit: "per person",
    rating: 4.7,
    reviews: 210,
    duration: "2 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2, contour],
    companyName: "Zazu Adventures",
    highlights: ["Rainforest walk", "Photo stops", "Professional guide"],
    includes: ["Professional guide"],
    excludes: ["Park fees"],
    policies: commonPolicies,
  },

  {
    id: "village-tour",
    slug: "livingstone-village-cultural-tour",
    type: "tour",
    category: "Cultural Tours",
    title: "Village Cultural Tour",
    description: "Experience local traditions and village life.",
    shortDescription:
      "Experience authentic Zambian culture and local traditions.",
    longDescription:
      "Visit a traditional village and experience local customs, crafts, food, and community life.",
    destinationId: "livingstone",
    destinations: ["livingstone"],
    destination: "Livingstone",
    price: 80,
    priceFrom: 80,
    priceUnit: "per person",
    rating: 4.6,
    reviews: 140,
    duration: "3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "devils-pool",
    slug: "victoria-falls-devils-pool",
    type: "activity",
    category: "Adventure Activities",
    title: "Devil’s Pool Experience",
    description: "Swim at the edge of Victoria Falls (seasonal).",
    shortDescription:
      "Swim at the edge of Victoria Falls during low-water season.",
    longDescription:
      "A thrilling guided experience to Devil’s Pool on Livingstone Island.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 135,
    priceFrom: 135,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    duration: "2–3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "airport-transfer",
    slug: "livingstone-airport-transfer",
    type: "transfer",
    category: "Airport Transfers",
    title: "Airport Transfers",
    description: "Private transfers to and from airports.",
    shortDescription: "Comfortable and reliable airport transfers.",
    longDescription:
      "Private airport transfers with professional drivers and luggage assistance.",
    destinationId: "livingstone",
    destinations: ["livingstone"],
    destination: "Livingstone",
    price: 30,
    priceFrom: 30,
    priceUnit: "per person",
    rating: 4.5,
    reviews: 90,
    duration: "1 Hour",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "bridge-swing",
    slug: "victoria-falls-bridge-swing",
    type: "activity",
    category: "Adventure Activities",
    title: "Bridge Swing",
    description: "Free-fall swing over the gorge.",
    shortDescription: "Experience a thrilling free-fall bridge swing.",
    longDescription:
      "Leap from the bridge platform and swing across the Batoka Gorge.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 115,
    priceFrom: 115,
    priceUnit: "per person",
    rating: 4.8,
    reviews: 180,
    duration: "1 Hour",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "bungee-jumping",
    slug: "victoria-falls-bungee-jumping",
    type: "activity",
    category: "Adventure Activities",
    title: "Bungee Jumping",
    description: "111m jump off the Victoria Falls Bridge.",
    shortDescription: "One of the world’s most famous bungee jumps.",
    longDescription:
      "Jump 111 meters from the Victoria Falls Bridge into Batoka Gorge.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 160,
    priceFrom: 160,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 400,
    duration: "1 Hour",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },
];

/* =========================
   PACKAGES
========================= */

export const packages = [
  {
    id: "victoria-falls-guided-tour-museum-lunch",
    slug: "victoria-falls-tour-museum-lunch-package",
    type: "package",
    category: "Packages",
    title: "Victoria Falls Guided Tour + Museum + Lunch",
    description:
      "Guided tour of Victoria Falls with museum visit and traditional lunch experience in Zimbabwe.",
    shortDescription: "Falls tour, museum visit, and lunch combo experience.",
    longDescription:
      "Explore Victoria Falls, enjoy a cultural museum experience, and traditional Zimbabwean lunch.",
    price: 120,
    priceFrom: 120,
    priceUnit: "per person",
    activities: ["guided-falls-tour"],
    rating: 4.7,
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    destinations: ["victoria-falls"],
    policies: commonPolicies,
  },

  {
    id: "zambezi-sunset-cruise-dinner-boma-show",
    slug: "zambezi-sunset-cruise-boma-dinner-package",
    type: "package",
    category: "Packages",
    title: "Zambezi Sunset Cruise + Boma Dinner & Drum Show",
    description:
      "Sunset cruise on the Zambezi River followed by dinner at The Boma.",
    shortDescription: "Sunset cruise combined with dinner and drum show.",
    longDescription:
      "Enjoy a relaxing sunset cruise before a traditional African dinner experience.",
    price: 175,
    priceFrom: 175,
    priceUnit: "per person",
    activities: ["sunset-cruise"],
    rating: 4.8,
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    destinations: ["livingstone", "victoria-falls"],
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
