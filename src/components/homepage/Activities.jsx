import React from "react";
import { activities } from "../../data/content";

function Activities() {
  return (
    <section className="py-16" id="activities">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
           <h2 className="text-lg lg:text-lg font-semibold text-dark">
            Available Activities
          </h2>
          <p className="mt-2 text-md lg:text-md font-regular text-gray-600">
            Explore our curated list of activities and experiences during your
            stay
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-sm
                         flex flex-col 
                         group transform transition-transform duration-300 ease-in-out
                         hover:shadow-md border border-gray-300"
            >
              {/* Image container */}
              <div className="p-4  overflow-hidden rounded-sm">
                <div className="w-full h-60 overflow-hidden rounded-sm">
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-sm
                               transform transition-transform duration-500 ease-in-out
                               group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-4 py-4 flex flex-col justify-between flex-1">
                <div>
                  {/* Title */}
                  <h3 className="text-md font-semibold text-dark mb-2">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  {activity.description && (
                    <p className="text-gray-600 text-xs mb-2">
                      {activity.description}
                    </p>
                  )}
                </div>

                {/* Activity Footer */}
                <div className="flex justify-between items-center mt-4">
                  {/* Price */}
                  <span className="font-semibold text-xl text-black">
                    ${activity.price} <span className="text-xs font-medium"> / person</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
