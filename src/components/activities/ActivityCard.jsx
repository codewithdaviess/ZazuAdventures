import React from "react";
import { Link } from "react-router-dom";
import { Clock3 } from "lucide-react";
import RatingDots from "../shared/RatingDots";

function ActivityCard({ activity }) {
  return (
    <Link
      to={`/products/${activity.slug}`}
      className="relative z-10 bg-white rounded-sm flex flex-col group shadow-sm hover:shadow-md transition-all duration-300 overflow-visible"
    >
      {/* Price Badge */}
      <div className="absolute top-6 -left-2 z-20 bg-[#223441] px-4 py-2 shadow-lg rounded-t-sm rounded-br-sm">
        <span className="font-semibold text-lg text-white">
          ${activity.price}
        </span>

        {/* Ribbon Tail */}
        <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[#223441]" />
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-t-sm">
        <div className="w-full h-60 overflow-hidden rounded-t-sm">
          <img
            src={activity.imageUrl}
            alt={activity.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4 flex flex-col flex-1">
        <h3 className="text-md font-bold text-dark mb-2">{activity.title}</h3>

        {activity.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {activity.description}
          </p>
        )}

        <div className="border-t border-gray-300 pt-4 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock3 size={16} />
              <span className="text-xs">{activity.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ActivityCard;
