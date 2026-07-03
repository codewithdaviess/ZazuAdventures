import React from "react";
import Layout from "../components/layout/Layout";
import ProductGrid from "../components/products/ProductGrid";
import { experiences } from "../data/content";

function Experiences() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Experiences
          </span>
          <h1 className="mt-2 text-3xl font-semibold text-dark">
            Explore the essentials
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Handpicked day experiences around Victoria Falls.
          </p>
        </div>

        <div className="mt-8">
          <ProductGrid products={experiences} />
        </div>
      </div>
    </Layout>
  );
}

export default Experiences;
