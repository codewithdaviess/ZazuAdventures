import React from "react";
import { packages } from "../../data/content";
import ActivitiesSection from "../activities/ActivitiesSection";

const popularPackageSlugs = [
  "guided-falls-tour-lunch-sunset-cruise",
  "am-safari-helicopter-boma",
  "bamba-tram-falls-boma",
  "lion-elephant-walk-heli-sunset-cruise",
  "early-morning-falls-heli-boma",
];

function Packages() {
  const popularPackages = popularPackageSlugs
    .map((slug) => packages.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <ActivitiesSection
      id="packages"
      title="Popular Packages"
      heading="All Inclusive Holiday Packages"
      items={popularPackages}
    />
  );
}

export default Packages;
