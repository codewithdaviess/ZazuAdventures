import React from "react";
import ActivityCard from "./ActivityCard";

function ActivitiesSection({
  id = "activities",
  title = "Available Activities",
  subtitle = "Discover exciting adventures, wildlife encounters, cultural experiences, and unforgettable moments during your stay in Victoria Falls.",
  items = [],
  sectionClassName = "py-16",
  containerClassName = "max-w-6xl mx-auto px-6",
}) {
  if (!items?.length) return null;

  return (
    <section className={sectionClassName} id={id}>
      <div className={containerClassName}>
        {/* Header */}
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {title}
          </span>

          <h2 className="mt-2 text-xl  font-semibold text-dark">
            Experiences for Every Type of Traveller
          </h2>

          {subtitle && (
            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Activities Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;