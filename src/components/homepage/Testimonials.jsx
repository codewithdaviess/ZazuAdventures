import React from "react";
import TestimonialsList from "../testimonials/TestimonialsList";

function Testimonials() {
  return (
    <TestimonialsList
      limit={3}
      showViewMore
      viewMoreTo="/testimonials"
      viewMoreLabel="View more"
      variant="stack"
    />
  );
}

export default Testimonials;
