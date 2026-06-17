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
    title: "Through The Eyes of an Elephant",
    description:
      "Experience Victoria Falls wildlife up close with guided elephant encounters in the Zambezi region.",
    count: catalog.tours?.length ?? 0,
    to: "/experiences/elephant",
    image: destinations[0]?.imageUrl,
    span: "col-span-1 lg:col-span-2",
  },
  {
    title: "Hikes and Cultural Tours",
    description:
      "Explore Victoria Falls trails and immerse yourself in local Zimbabwean culture and heritage.",
    count: catalog.tours?.length ?? 0,
    to: "/experiences/hikes-cultural",
    image: destinations[1]?.imageUrl,
    span: "col-span-1 lg:col-span-2",
  },
  {
    title: "Safari Experiences",
    description:
      "Game drives around Victoria Falls and Zambezi National Park with Big Five wildlife viewing.",
    count: activities?.length ?? 0,
    to: "/experiences/adrenaline-bridge",
    image: destinations[2]?.imageUrl,
    span: "col-span-1 lg:col-span-1",
  },
  {
    title: "White Water Adventures",
    description:
      "World-class Zambezi River rafting through the Batoka Gorge below Victoria Falls.",
    count: activities?.length ?? 0,
    to: "/experiences/white-water",
    image: destinations[3]?.imageUrl,
    span: "col-span-1 lg:col-span-2",
  },
  {
    title: "River Cruise",
    description:
      "Sunset cruises on the Zambezi River with wildlife viewing and scenic Victoria Falls views.",
    count: packages?.length ?? 0,
    to: "/experiences/river-cruise",
    image: destinations[4]?.imageUrl,
    span: "col-span-1 lg:col-span-1",
  },
  {
    title: "Scenic Helicopter Flights",
    description:
      "Aerial views of Victoria Falls and the Zambezi River — the ultimate ‘Flight of Angels’ experience.",
    count: packages?.length ?? 0,
    to: "/experiences/helicopter-flights",
    image: destinations[5]?.imageUrl,
    span: "col-span-1 lg:col-span-2",
  },
  {
    title: "Bridge Adrenaline Adventures",
    description:
      "Bungee jumping, bridge swings, and adrenaline activities over the iconic Victoria Falls Bridge.",
    count: catalog.tours?.length ?? 0,
    to: "/experiences/safari",
    image: destinations[3]?.imageUrl,
    span: "col-span-1 lg:col-span-2",
  },
];

function WhatWeOffer() {
  return (
    <section className="py-16 bg-light" id="what-we-offer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            What We Offer
          </span>

          <h2 className="mt-2 text-xl font-semibold text-dark">
            Unforgettable Victoria Falls Experiences
          </h2>

          <p className="mt-4 text-gray-600  text-md text-center leading-relaxed">
            From thrilling adventures on the Zambezi River to immersive cultural
            encounters and unforgettable wildlife experiences, we curate the
            very best of Victoria Falls to help you create memories that last a
            lifetime.
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[250px] gap-4">
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
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-5">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>

                <span
                  className="
                    mt-4 inline-block px-4 py-2 text-xs font-medium
                    border border-white text-white rounded-sm
                    transition-all duration-300
                    lg:opacity-0 lg:translate-y-2
                    lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  "
                >
                  View Experience
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
