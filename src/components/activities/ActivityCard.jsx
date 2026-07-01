import React from "react";
import { Link } from "react-router-dom";
import { Clock3 } from "lucide-react";
import { getTripLabel } from "../../lib/tripLabel";
import { getProductCoverImage } from "../../lib/productMedia";

function ActivityCard({ activity }) {
  const price = activity?.priceFrom ?? activity?.price ?? null;
  const tripLabel = getTripLabel(activity);
  const showDuration = Boolean(activity?.duration);

  return (
    <Link
      to={`/tours/${activity.slug}`}
      className="relative z-10 bg-white rounded-sm flex flex-col group shadow-sm hover:shadow-md transition-all duration-300 overflow-visible"
    >
      {/* Price Badge */}
      <div className="absolute top-6 -left-2 z-20 bg-[#223441] px-4 py-2 shadow-lg rounded-t-sm rounded-br-sm">
        {price != null ? (
          <span className="font-semibold text-lg text-white">${price}</span>
        ) : null}

        {/* Ribbon Tail */}
        <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[#223441]" />
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-t-sm">
        <div className="w-full h-60 overflow-hidden rounded-t-sm">
          <img
            src={getProductCoverImage(activity)}
            alt={activity.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4 flex flex-col flex-1">
        <h3 className="text-md font-bold text-dark mb-2 line-clamp-2">
          {activity.title}
        </h3>

        {tripLabel && (
          <div className="mb-2">
            <span className="inline-flex rounded-full py-1 text-xs font-regular uppercase tracking-wide text-gray-700">
              {tripLabel}
            </span>
          </div>
        )}

        {showDuration ? (
          <div className="border-t border-gray-300 pt-4 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock3 size={16} />
                <span className="text-xs">{activity.duration}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-auto" />
        )}
      </div>
    </Link>
  );
}

export default ActivityCard;
