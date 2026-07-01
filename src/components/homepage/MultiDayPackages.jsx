import React from "react";
import { packages } from "../../data/content";
import ActivitiesSection from "../activities/ActivitiesSection";

const multiDayPackageSlugs = [
  "victoria-falls-3-day-classic",
  "zim-zam-falls-and-city-tour",
  "am-safari-lion-cheetah-dinner-cruise",
  "guided-falls-tour-lunch-sunset-cruise",
];

function MultiDayPackages() {
  const multiDayPackages = multiDayPackageSlugs
    .map((slug) => packages.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <ActivitiesSection
      id="multiday-packages"
      title="Multiday Packages"
      heading="More Ways to Explore"
      items={multiDayPackages}
    />
  );
}

export default MultiDayPackages;
