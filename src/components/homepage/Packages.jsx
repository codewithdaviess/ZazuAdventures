import React from "react";
import { packages } from "../../data/content";
import ActivitiesSection from "../activities/ActivitiesSection";

function Packages() {
  return (
    <ActivitiesSection
      id="packages"
      title="Packages"
      heading="Simple Package Combos"
      subtitle="A clean set of ready-made Victoria Falls packages built around the most popular combinations we offer."
      items={packages}
    />
  );
}

export default Packages;
