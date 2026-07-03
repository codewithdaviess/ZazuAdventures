import placeholder from "../assets/placeholder.png";
import victoriaFalls from "../assets/victoriafalls.jpg";
import boatCruise from "../assets/BoatCruise.jpg";
import boatCruise2 from "../assets/BoatCruise2.jpg";
import helicopter from "../assets/Helicopter.jpg";
import helicopter2 from "../assets/Helicopter2.jpg";
import helicopter3 from "../assets/Helicopter3.jpg";
import helicopter4 from "../assets/Helicopter4.jpg";
import safariWalk from "../assets/SafariGameWalk.jpg";
import safari from "../assets/safari.png";
import boma from "../assets/boma.jpg";

const mediaBySlug = {
  "victoria-falls-guided-tour": {
    cover: victoriaFalls,
    gallery: [victoriaFalls],
  },
  "victoria-falls-bridge-tour": {
    cover: victoriaFalls,
    gallery: [victoriaFalls],
  },
  "monde-village-cultural-tour": {
    cover: placeholder,
    gallery: [placeholder],
  },
  "victoria-falls-devils-pool": {
    cover: victoriaFalls,
    gallery: [victoriaFalls],
  },
  "17-mins-flight-of-angels": {
    cover: helicopter,
    gallery: [helicopter, helicopter2, helicopter3],
  },
  "25-mins-flight-of-angels": {
    cover: helicopter2,
    gallery: [helicopter2, helicopter3, helicopter4],
  },
  "half-day-white-water-rafting": {
    cover: placeholder,
    gallery: [placeholder],
  },
  "full-day-white-water-rafting": {
    cover: placeholder,
    gallery: [placeholder],
  },
  "victoria-falls-bridge-swing": {
    cover: placeholder,
    gallery: [placeholder],
  },
  "victoria-falls-bungee-jumping": {
    cover: placeholder,
    gallery: [placeholder],
  },
  "livingstone-airport-transfer": {
    cover: placeholder,
    gallery: [placeholder],
  },
  "victoria-falls": {
    cover: victoriaFalls,
    gallery: [victoriaFalls, boatCruise],
  },
  "flight-of-the-angels": {
    cover: helicopter,
    gallery: [helicopter, helicopter2, helicopter3],
  },
  "zambezi-river-cruise": {
    cover: boatCruise,
    gallery: [boatCruise, boatCruise2],
  },
  "boma-dinner-show": {
    cover: boma,
    gallery: [boma],
  },
  "guided-falls-tour-lunch-sunset-cruise": {
    cover: victoriaFalls,
    gallery: [victoriaFalls, boatCruise],
  },
  "victoria-falls-chobe-5-days-4-nights": {
    cover: victoriaFalls,
    gallery: [victoriaFalls, boatCruise],
  },
  "hwange-victoria-falls-chobe-nata-8-days-7-nights": {
    cover: safari,
    gallery: [safariWalk, victoriaFalls, boatCruise2],
  },
  "hwange-victoria-falls-chobe-okavango-delta-11-days-10-nights": {
    cover: safariWalk,
    gallery: [safariWalk, safari, boatCruise2],
  },
  "cape-town-kruger-vic-falls-chobe-11-days-10-nights": {
    cover: helicopter,
    gallery: [helicopter, safari, victoriaFalls],
  },
  "zim-zam-falls-and-city-tour": {
    cover: victoriaFalls,
    gallery: [victoriaFalls],
  },
  "am-safari-helicopter-boma": {
    cover: safari,
    gallery: [safariWalk, helicopter, boma],
  },
  "bamba-tram-falls-boma": {
    cover: victoriaFalls,
    gallery: [victoriaFalls, boma],
  },
  "lion-elephant-walk-heli-sunset-cruise": {
    cover: safariWalk,
    gallery: [safariWalk, helicopter, boatCruise],
  },
  "early-morning-falls-heli-boma": {
    cover: victoriaFalls,
    gallery: [victoriaFalls, helicopter, boma],
  },
  "am-safari-lion-cheetah-dinner-cruise": {
    cover: safari,
    gallery: [safariWalk, boatCruise],
  },
  "vfa-airport-to-victoria-falls-hotel": {
    cover: placeholder,
    gallery: [placeholder],
  },
  "victoria-falls-3-day-classic": {
    cover: victoriaFalls,
    gallery: [victoriaFalls, boatCruise2, helicopter4],
  },
};

const offerImages = {
  "Victoria Falls": victoriaFalls,
  "Helicopter Flights": helicopter,
  "Zambezi River Cruise": boatCruise,
  "Boma Dinner Show": boma,
};

function getSlug(product) {
  return product?.slug?.toLowerCase?.() ?? "";
}

function getTitle(product) {
  return product?.title?.toLowerCase?.() ?? "";
}

export function getProductCoverImage(product) {
  const slug = getSlug(product);
  const title = getTitle(product);

  return mediaBySlug[slug]?.cover ?? mediaBySlug[title]?.cover ?? placeholder;
}

export function getProductGallery(product) {
  const slug = getSlug(product);
  const title = getTitle(product);
  const gallery = mediaBySlug[slug]?.gallery ?? mediaBySlug[title]?.gallery ?? [];

  return gallery.length ? gallery : [getProductCoverImage(product)];
}

export function getOfferImage(title) {
  return offerImages[title] ?? placeholder;
}
