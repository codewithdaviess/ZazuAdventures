import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Clock3 } from "lucide-react";
import { destinations, activities } from "../data/content";
import { MapPin } from "lucide-react";

function DestinationDetail() {
  const { slug } = useParams();

  const destination = destinations.find((d) => d.id === slug);

  if (!destination) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-2xl font-semibold">Destination not found</h1>
        </div>
      </Layout>
    );
  }

  // Rating circles (clean full / half / empty)
  const renderRating = (rating) => {
    const circles = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // FULL
        circles.push(
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-[#223441] border border-[#223441]"
          />,
        );
      } else if (rating >= i - 0.5) {
        // HALF
        circles.push(
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full border border-[#223441] bg-white"
          />,
        );
      } else {
        // EMPTY
        circles.push(
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full border border-gray-50 bg-white"
          />,
        );
      }
    }

    return circles;
  };

  const filteredActivities = activities.filter(
    (a) => a.destinationId === destination.id,
  );

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <h1 className="text-3xl font-semibold">{destination.name}</h1>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <MapPin size={14} />
          <span>{destination.country}</span>
        </div>

        <p className="mt-4 text-gray-700">{destination.description}</p>

        {/* Activities */}
        <h2 className="mt-10 text-xl font-semibold">
          Things to do in {destination.name}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredActivities.map((activity) => (
            <Link
              key={activity.id}
              to={`/products/${activity.slug}`}
              className="bg-white rounded-sm flex flex-col group
                         transform transition-transform duration-300 ease-in-out
                         hover:shadow-md border border-gray-300"
            >
              {/* Image */}
              <div className="p-4 overflow-hidden rounded-sm">
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
              <div className="px-4 py-4 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-md font-semibold text-dark mb-2">
                  {activity.title}
                </h3>

                {/* Rating + Reviews */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {renderRating(activity.rating)}
                  </div>

                  <span className="text-xs font-semibold text-gray-500">
                    {activity.reviews}
                  </span>
                </div>

                {/* Description */}
                {activity.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {activity.description}
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock3 size={16} />
                    <span className="text-xs">{activity.duration}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">From</span>
                    <span className="font-semibold text-xl text-black">
                      ${activity.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default DestinationDetail;
