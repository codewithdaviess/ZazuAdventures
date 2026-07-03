import React from "react";
import { packages } from "../../data/content";
import ActivitiesSection from "../activities/ActivitiesSection";

const multiDayPackageSlugs = [
  "victoria-falls-chobe-5-days-4-nights",
  "hwange-victoria-falls-chobe-nata-8-days-7-nights",
  "hwange-victoria-falls-chobe-okavango-delta-11-days-10-nights",
  "cape-town-kruger-vic-falls-chobe-11-days-10-nights",
];

function MultiDayPackages() {
  const multiDayPackages = multiDayPackageSlugs
    .map((slug) => packages.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <ActivitiesSection
      id="multiday-packages"
      title="MULTIDAY PACKAGES"
      heading="More Ways to Explore"
      items={multiDayPackages}
    />
  );
}

export default MultiDayPackages;
