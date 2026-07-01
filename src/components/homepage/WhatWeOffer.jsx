import React from "react";
import { Link } from "react-router-dom";
import {
  catalog,
  packages,
  activities,
  destinations,
} from "../../data/content";

const offerings = [
  {
    title: "Victoria Falls",
    description:
      "Game drives around Victoria Falls and Zambezi National Park with Big Five wildlife viewing.",
    count: activities?.length ?? 0,
    to: "/experiences/victoria-falls",
    image: destinations[2]?.imageUrl,
    span: "col-span-1 lg:col-span-1",
  },
  {
    title: "Helicopter Flights",
    description:
      "World-class Zambezi River rafting through the Batoka Gorge below Victoria Falls.",
    count: activities?.length ?? 0,
    to: "/experiences/flight-of-the-angels",
    image: destinations[3]?.imageUrl,
    span: "col-span-1 lg:col-span-1",
  },
  {
    title: "Zambezi River Cruise",
    description:
      "Sunset cruises on the Zambezi River with wildlife viewing and scenic Victoria Falls views.",
    count: packages?.length ?? 0,
    to: "/experiences/zambezi-river-cruise",
    image: destinations[4]?.imageUrl,
    span: "col-span-1 lg:col-span-1",
  },
  {
    title: "Boma Dinner Show",
    description:
      "Experience Victoria Falls wildlife up close with guided elephant encounters in the Zambezi.",
    count: catalog.tours?.length ?? 0,
    to: "/experiences/boma-dinner-show",
    image: destinations[0]?.imageUrl,
    span: "col-span-1 lg:col-span-1",
  },
];

function WhatWeOffer() {
  return (
    <section className="py-16 bg-light" id="what-we-offer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium  tracking-wider text-primary">
            Top Selling
          </span>

          <h2 className="mt-2 text-xl font-semibold text-dark">
            Loved by thousands of Travelers
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[450px] gap-4">
          {offerings.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className={`group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`${item.title} in Victoria Falls Zambezi region`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end items-start text-left p-5">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-white mt-2 font-regular text-sm">
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
