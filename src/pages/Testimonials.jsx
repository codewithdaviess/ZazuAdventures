import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/layout/Layout";
import TestimonialsList from "../components/testimonials/TestimonialsList";

function TestimonialsPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-[#223441] hover:underline"
        >
          Back to home
        </Link>
      </div>

      <TestimonialsList
        title="All Testimonials"
        description="Read the full collection of guest stories and feedback from their time with Zazu Adventures."
      />
    </Layout>
  );
}

export default TestimonialsPage;
