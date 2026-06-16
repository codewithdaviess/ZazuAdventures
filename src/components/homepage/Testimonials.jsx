import React, { useEffect, useState } from "react";
import { User } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { getTestimonials } from "../../services/testimonials";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadTestimonials = async () => {
      try {
        setLoading(true);

        const data = await getTestimonials();

        if (!isMounted) return;

        const normalized = data.map((item) => ({
          id: item.id,
          name: item.author_name || "Anonymous",
          date: item.date
            ? new Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(item.date))
            : "",
          testimonial:
            item.content?.rendered?.replace(/<[^>]*>/g, "").trim() || "",
        }));

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

  return (
    <section className="py-16" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-dark">
            Testimonials
          </h2>

          <p className="mt-2 text-gray-600">
            Hear what our customers have to say about their experience with us.
          </p>
        </div>

        {loading ? (
          <p>Loading testimonials...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : testimonials.length === 0 ? (
          <p>No testimonials available.</p>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-gray-50 rounded-sm p-6 h-full hover:shadow-md transition-shadow duration-300">
                  {/* Profile */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <User size={18} className="text-gray-600" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.testimonial}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Testimonials;