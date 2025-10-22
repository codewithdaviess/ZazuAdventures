import React, { useState, useEffect } from "react";

export default function Header() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      tagline: "Travel to",
      title: "The Maldives",
      location: "Indian Ocean, South Asia",
    },
    {
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80",
      tagline: "Visit",
      title: "Paris",
      location: "France, Europe",
    },
    {
      image: "https://images.unsplash.com/photo-1518684079-7dfbb3b446c7?auto=format&fit=crop&w=1600&q=80",
      tagline: "Explore",
      title: "Victoria Falls",
      location: "Zimbabwe, Africa",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[current];

  return (
    <header className="relative h-screen w-full flex items-end md:items-center justify-start overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 px-6 pb-16 md:pb-0 md:pl-20 max-w-3xl text-white">
        <p className="text-sm uppercase tracking-widest text-gray-200 mb-2">
          {currentSlide.tagline}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          {currentSlide.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          {currentSlide.location}
        </p>
      </div>
    </header>
  );
}
