import React, { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductGrid from "../components/products/ProductGrid";
import { getAllProducts, getProductsByType } from "../data/content";

const tabs = [
  { label: "All", to: "/products", type: null },
  { label: "Tours", to: "/products/type/tour", type: "tour" },
  { label: "Transfers", to: "/products/type/transfer", type: "transfer" },
  { label: "Packages", to: "/products/type/package", type: "package" },
  { label: "Activities", to: "/products/type/activity", type: "activity" },
  { label: "Accommodation", to: "/products/type/accommodation", type: "accommodation" },
];

function Products() {
  const { type } = useParams();

  const products = useMemo(() => {
    if (!type) return getAllProducts();
    if (type === "accommodation") return [];
    return getProductsByType(type);
  }, [type]);

  const activeTab =
    tabs.find((t) => (t.type ?? null) === (type ?? null))?.label || "All";

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Explore</h1>
            <p className="mt-2 text-sm text-gray-600">
              Browse tours, transfers, packages, and more.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <NavLink
                key={tab.label}
                to={tab.to}
                className={({ isActive }) =>
                  [
                    "rounded-sm border px-3 py-1.5 text-sm font-medium transition",
                    isActive
                      ? "border-[#223441] bg-[#223441] text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-[#223441] hover:text-[#223441]",
                  ].join(" ")
                }
                end={tab.to === "/products"}
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {type === "accommodation" ? (
            <div className="rounded-sm border border-gray-300 bg-white p-6 text-sm text-gray-700">
              Accommodation is coming soon.
            </div>
          ) : products.length ? (
            <ProductGrid products={products} />
          ) : (
            <div className="rounded-sm border border-gray-300 bg-white p-6 text-sm text-gray-700">
              No {activeTab.toLowerCase()} available yet.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Products;

