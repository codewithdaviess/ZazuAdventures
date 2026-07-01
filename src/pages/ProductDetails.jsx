import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { getProductBySlug } from "../data/content";
import ExpandableText from "../components/shared/ExpandableText";
import { Clock3, Info, Layers, MapPin } from "lucide-react";
import { getProductGallery } from "../lib/productMedia";

function List({ title, items, icon: Icon }) {
  if (!items?.length) return null;
  return (
    <div className="mt-8">
      <h2 className="text-md font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-gray-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            {Icon ? (
              <Icon size={16} className="mt-0.5 shrink-0 text-[#223441]" />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#223441]" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Gallery({ images, index, setIndex }) {
  const carouselImages = useMemo(() => {
    const baseImages = Array.isArray(images) ? images.filter(Boolean) : [];

    return baseImages.slice(0, 3);
  }, [images]);

  if (!carouselImages.length) return null;

  return (
    <div>
      <div className="relative w-full h-[88vh] min-h-[520px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselImages[index]}
            src={carouselImages[index]}
            alt={`Tour image ${index + 1}`}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const scrollToContent = () => {
    const contentSection = document.getElementById("tour-content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  if (!product) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-semibold">Tour not found</h1>
          <p className="mt-3 text-sm text-gray-600">
            The item you're looking for doesn't exist (or the link is wrong).
          </p>
          <Link to="/" className="mt-6 inline-block text-[#223441] underline">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  const galleryImages = getProductGallery(product);

  useEffect(() => {
    setGalleryIndex(0);
  }, [slug, galleryImages.length]);

  useEffect(() => {
    if (galleryImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setGalleryIndex((current) => (current + 1) % galleryImages.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <Layout withNavbarOffset={false}>
      <div className="relative">
        <div className="relative">
          <Gallery
            images={galleryImages}
            index={galleryIndex}
            setIndex={setGalleryIndex}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto max-w-3xl px-6 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                {product.destination}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-wide sm:text-3xl">
                {product.title}
              </h1>
              {/* CTA */}
              <Link
                to="/book"
                className="mt-5 inline-flex items-center rounded-full bg-primary px-6 py-3 border-1 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Book This Tour
              </Link>
            </div>
          </div>

          <div className="absolute left-0 right-0 bottom-6 z-20">
            <div className="mx-auto max-w-6xl px-6">
              <button
                type="button"
                onClick={scrollToContent}
                aria-label="Scroll down"
                className="icon-scroll-button flex flex-col items-center gap-2"
              >
                <span className="icon-scroll" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                  Scroll
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-10 text-center">
          <div className="mx-auto max-w-3xl">
            <ExpandableText
              text={product.longDescription}
              lines={4}
              className="mt-6 text-sm text-gray-900 leading-loose text-left"
              moreLabel="Show more details"
              lessLabel="Show less"
            />
            <div className="mt-8 grid gap-3 text-sm text-gray-700 sm:grid-cols-2 text-left">
              {product.route ? (
                <div className="rounded-sm border border-gray-300 bg-white p-4">
                  <span className="font-semibold text-gray-900">Route:</span>{" "}
                  {product.route}
                </div>
              ) : null}
              {product.pickup ? (
                <div className="sm:col-span-2 rounded-sm border border-gray-300 bg-white p-4 flex items-center gap-2">
                  <MapPin size={16} className="text-[#223441]" />
                  <span className="font-semibold text-gray-900">
                    Pickup:
                  </span>{" "}
                  <span>{product.pickup}</span>
                </div>
              ) : null}
            </div>

            <div className="text-left">
              <List title="Highlights" items={product.highlights} />
              <List title="Start Times" items={product.startTimes} />
              <List title="Includes" items={product.includes} />
              <List title="Not Included" items={product.excludes} />
              <List title="Accessibility" items={product.accessibility} />
              <List title="What to Bring" items={product.whatToBring} />
              <List title="Cancellation" items={product.cancellation} />

              {product.whatToKnow?.length ? (
                <div className="mt-10 rounded-sm border border-gray-300 bg-white p-6 text-left">
                  <div className="flex items-center gap-2">
                    <Info size={18} className="text-[#223441]" />
                    <h2 className="text-md font-semibold">What to know</h2>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-gray-700">
                    {product.whatToKnow.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#223441]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
