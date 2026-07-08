import React from "react";
import { Link } from "react-router-dom";
import { experiences } from "../../data/content";
import { getOfferImage } from "../../lib/productMedia";

const offerings = [
  {
    title: "Victoria Falls",
    slug: "victoria-falls",
    description:
      "Guided waterfall viewpoints, rainforest walks, and the region's signature views.",
    to: "/experiences/victoria-falls",
    image: getOfferImage("Victoria Falls"),
  },
  {
    title: "Helicopter Flights",
    slug: "flight-of-the-angels",
    description:
      "Scenic flights over the Falls and the Zambezi gorge with sweeping aerial views.",
    to: "/experiences/flight-of-the-angels",
    image: getOfferImage("Helicopter Flights"),
  },
  {
    title: "Zambezi River Cruise",
    slug: "zambezi-river-cruise",
    description:
      "Relaxed sunset cruising on the Zambezi with wildlife and riverbank scenery.",
    to: "/experiences/zambezi-river-cruise",
    image: getOfferImage("Zambezi River Cruise"),
  },
  {
    title: "Boma Dinner Show",
    slug: "boma-dinner-show",
    description:
      "An evening of food, drumming, and lively local entertainment.",
    to: "/experiences/boma-dinner-show",
    image: getOfferImage("Boma Dinner Show"),
  },
];

function WhatWeOffer() {
  const pricedOfferings = offerings.map((item) => {
    const source = experiences.find((experience) => experience.slug === item.slug);

    return {
      ...item,
      priceFrom: source?.priceFrom ?? source?.price ?? null,
    };
  });

  return (
    <section className="relative overflow-hidden py-16 bg-light" id="what-we-offer">
      <div className="absolute -left-24 top-8 hidden h-56 w-56 rounded-full bg-[#223441]/10 lg:block" />
      <div className="absolute -right-20 bottom-0 hidden h-72 w-72 rounded-full bg-[#8A6A3D]/10 lg:block" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A6A3D]">
            Top Selling
          </span>

          <h2 className="mt-3 text-2xl font-semibold text-dark lg:text-2xl">
            Loved by travellers across the region
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {pricedOfferings.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group relative overflow-hidden rounded-sm shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={`${item.title} in Victoria Falls Zambezi region`}
                className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#223441] shadow-lg">
                {item.priceFrom != null ? `From $${item.priceFrom}` : "Enquire"}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/90">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
