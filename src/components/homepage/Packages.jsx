import React from "react";
import { packages } from "../../data/content";
import ActivitiesSection from "../activities/ActivitiesSection";

function Packages() {
  return (
    <ActivitiesSection
      id="packages"
      title="Popular Packages"
      heading="All Inclusive Holiday Packages"
      items={packages}
    />
  );
}

export default Packages;
