import React from "react";
import { destinations } from "../../data/content";

function DestinationGrid() {
  return (
    <section className="py-16 bg-light" id="destinations">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-lg lg:text-lg font-semibold text-dark">
            Explore Our Destinations
          </h2>
          <p className="mt-2 text-md lg:text-md font-regular text-gray-600">
            Discover breathtaking places across Africa
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`group relative rounded-sm overflow-hidden shadow-md hover:shadow-xl transition
                ${dest.size === "large" ? "md:row-span-2" : "row-span-1"}`}
            >
              {/* Image */}
              <img
                src={dest.imageUrl}
                alt={dest.name}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Always visible centered overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 p-4">
                <h3 className="text-white text-md font-semibold">
                  {dest.name}
                </h3>
                <p className="text-white/80 text-xs mt-1">
                  {dest.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationGrid;
