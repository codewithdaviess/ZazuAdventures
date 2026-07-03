import React from "react";
import { experiences } from "../../data/content";
import ActivitiesSection from "../activities/ActivitiesSection";

function Activities() {
  return <ActivitiesSection title="Experiences" items={experiences} />;
}

export default Activities;
