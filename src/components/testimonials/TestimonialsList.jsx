import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

import { getTestimonials } from "../../services/testimonials";

function formatTestimonial(item) {
  return {
    id: item.id,
    sortDate: item.date
      ? new Date(item.date).getTime()
      : Number.MAX_SAFE_INTEGER,
    name: item.author_name || "Anonymous",
    date: item.date
      ? new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(item.date))
      : "",
    testimonial: item.content?.rendered?.replace(/<[^>]*>/g, "").trim() || "",
  };
}

function TestimonialsList({
  limit,
  title = "Testimonials",
  description = "Hear what our customers have to say about their experience with us.",
  showViewMore = false,
  viewMoreTo = "/testimonials",
  viewMoreLabel = "View more testimonials",
  variant = "default",
}) {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadTestimonials = async () => {
      try {
        setLoading(true);

        const data = await getTestimonials();

        if (!isMounted) return;

        const normalized = data
          .map(formatTestimonial)
          .sort((a, b) => a.sortDate - b.sortDate);

        setTestimonials(normalized);
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load testimonials");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  const visibleTestimonials = useMemo(() => {
    if (!limit) return testimonials;
    return testimonials.slice(0, limit);
  }, [limit, testimonials]);

  useEffect(() => {
    setActiveIndex(0);
  }, [visibleTestimonials.length]);

  useEffect(() => {
    if (variant !== "stack" || visibleTestimonials.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % visibleTestimonials.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [variant, visibleTestimonials.length]);

  const getStackIndex = (offset) => {
    if (visibleTestimonials.length === 0) return 0;
    return (activeIndex + offset + visibleTestimonials.length) % visibleTestimonials.length;
  };

  const renderCard = (item, extraClassName = "") => (
    <article
      key={item.id}
      className={`flex h-full flex-col rounded-sm bg-gray-50 p-6 transition-all duration-500 ${extraClassName}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
          <User size={18} className="text-gray-600" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
          <p className="text-xs text-gray-500">{item.date}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-gray-600">{item.testimonial}</p>
    </article>
  );

  const button =
    showViewMore && !loading && !error && testimonials.length > 0 ? (
      <Link
        to={viewMoreTo}
        className="inline-flex w-fit items-center justify-center rounded-sm border border-[#223441] px-5 py-3 text-sm font-medium text-[#223441] transition-colors hover:bg-[#223441] hover:text-white"
      >
        {viewMoreLabel}
      </Link>
    ) : null;

  return (
    <section className="py-16" id="testimonials">
      <div className="mx-auto max-w-6xl px-6">
        {variant === "feature" ? (
          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-dark">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>

              {button ? <div className="mt-6">{button}</div> : null}
            </div>

            <div className="lg:col-span-3">
              {loading ? (
                <p>Loading testimonials...</p>
              ) : error ? (
                <p className="text-red-600">{error}</p>
              ) : visibleTestimonials.length === 0 ? (
                <p>No testimonials available.</p>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {visibleTestimonials.map((item) => renderCard(item))}
                </div>
              )}
            </div>
          </div>
        ) : variant === "stack" ? (
          <div className="grid gap-10 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-dark">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>

              {button ? <div className="mt-6">{button}</div> : null}
            </div>

            <div className="lg:col-span-3">
              {loading ? (
                <p>Loading testimonials...</p>
              ) : error ? (
                <p className="text-red-600">{error}</p>
              ) : visibleTestimonials.length === 0 ? (
                <p>No testimonials available.</p>
              ) : (
                <div className="relative mx-auto h-[22rem] w-full max-w-[460px] sm:h-[24rem] sm:max-w-[520px]">
                  {visibleTestimonials.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isNext = index === getStackIndex(1);
                    const isPrev = index === getStackIndex(-1);

                    let cardClasses =
                      "absolute inset-0 flex h-full flex-col rounded-sm bg-gray-50 p-6 shadow-md";

                    if (isActive) {
                      cardClasses +=
                        " z-30 translate-x-0 translate-y-0 scale-100 opacity-100 shadow-2xl";
                    } else if (isNext) {
                      cardClasses +=
                        " z-20 translate-x-4 translate-y-4 scale-[0.98] opacity-70";
                    } else if (isPrev) {
                      cardClasses +=
                        " z-10 -translate-x-4 -translate-y-4 scale-[0.96] opacity-35";
                    } else {
                      cardClasses += " z-0 opacity-0 scale-[0.9]";
                    }

                    return (
                      <div key={item.id} className={cardClasses}>
                        {renderCard(item, "bg-transparent p-0 shadow-none")}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-dark">{title}</h2>
                <p className="mt-2 max-w-2xl text-gray-600">{description}</p>
              </div>

              {button}
            </div>

            {loading ? (
              <p>Loading testimonials...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : visibleTestimonials.length === 0 ? (
              <p>No testimonials available.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleTestimonials.map((item) => renderCard(item))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default TestimonialsList;
