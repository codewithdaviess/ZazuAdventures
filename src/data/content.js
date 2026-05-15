import davies from "../assets/background.png";

export const hero = {
  title: "Adventure starts here",
  subtitle:
    "Safaris, river escapes, and unforgettable experiences across Zambia and beyond.",
  ctaText: null,
  ctaLink: null,
  backgroundImageUrl: davies,
};

export const destinations = [
  {
    name: "Livingstone",
    country: "Zambia",
    size: "large",
    imageUrl: davies,
  },
  {
    name: "Lower Zambezi",
    country: "Zambia",
    size: "small",
    imageUrl: davies,
  },
  {
    name: "South Luangwa",
    country: "Zambia",
    size: "large",
    imageUrl: davies,
  },
  {
    name: "Kafue National Park",
    country: "Zambia",
    size: "large",
    imageUrl: davies,
  },
  {
    name: "Victoria Falls",
    country: "Zambia / Zimbabwe",
    size: "small",
    imageUrl: davies,
  },
  {
    name: "Victoria Falls",
    country: "Zambia / Zimbabwe",
    size: "small",
    imageUrl: davies,
  },
];

export const aboutCards = [
  {
    id: "mission",
    icon: "target",
    title: "Our mission",
    description:
      "Make exploring Southern Africa simple, safe, and unforgettable — from first idea to final sunset.",
  },
  {
    id: "vision",
    icon: "eye",
    title: "Our vision",
    description:
      "Build a trusted adventure brand that connects travelers to authentic experiences and local expertise.",
  },
  {
    id: "values",
    icon: "leaf",
    title: "Responsible travel",
    description:
      "We prioritize low-impact itineraries, ethical wildlife encounters, and community-first partners.",
  },
  {
    id: "partners",
    icon: "handshake",
    title: "Curated partners",
    description:
      "We work with vetted guides and operators so you can book with confidence.",
  },
];

export const activities = [
  {
    id: "sunset-cruise",
    title: "Zambezi Sunset Cruise",
    description:
      "Glide along the Zambezi with drinks and snacks as the sky turns gold.",
    destination: "Livingstone",
    price: 65,
    imageUrl: davies,
    companyName: "Zazu Adventures",
    companyLogoUrl: "/webicon.svg",
    isUs: true,
  },
  {
    id: "walking-safari",
    title: "Guided Walking Safari",
    description:
      "A closer look at the bush — tracks, birds, and big stories with a pro guide.",
    destination: "South Luangwa",
    price: 120,
    imageUrl: davies,
    companyName: "Zazu Adventures",
    companyLogoUrl: "/webicon.svg",
    isUs: true,
  },
  {
    id: "falls-daytrip",
    title: "Victoria Falls Day Trip",
    description:
      "A full-day guided visit with flexible add-ons like a helicopter flip or gorge swing.",
    destination: "Victoria Falls",
    price: 95,
    imageUrl: davies,
    companyName: "Zazu Adventures",
    companyLogoUrl: "/webicon.svg",
    isUs: true,
  },
   {
    id: "binga-daytrip",
    title: "Binga Falls Day Trip",
    description:
      "A full-day guided visit with flexible add-ons like a helicopter flip or gorge swing.",
    destination: "Victoria Falls",
    price: 95,
    imageUrl: davies,
    companyName: "Zazu Adventures",
    companyLogoUrl: "/webicon.svg",
    isUs: true,
  },
];
