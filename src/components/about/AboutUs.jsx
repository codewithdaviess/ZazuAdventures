import React from "react";
import aboutImage from "../../assets/aboutimage.png";
import { MapPin, ShieldCheck, Star, Users } from "lucide-react";

const stats = [
  {
    id: "experience",
    value: "2.5+",
    label: "Years of experience",
    icon: Star,
  },
  {
    id: "local",
    value: "Local",
    label: "Travel knowledge",
    icon: MapPin,
  },
  {
    id: "support",
    value: "24/7",
    label: "Travel support",
    icon: ShieldCheck,
  },
  {
    id: "guests",
    value: "Tailored",
    label: "Trips and experiences",
    icon: Users,
  },
];

function AboutUs() {
  return (
    <section className="py-16 lg:py-20" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8A6A3D]">
              How it started
            </p>

            <h2 className="mt-3 text-lg font-semibold tracking-tight text-[#223441] lg:text-3xl">
              A small idea that grew into a trusted travel brand
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 text-md">
              Zazu Adventures began with a simple goal: make travel around
              Southern Africa feel effortless, personal, and memorable. What
              started as helping friends, families, and first-time visitors plan
              meaningful trips has grown into a travel service built on local
              knowledge, reliable partners, and honest communication. We focus
              on the little details that make a big difference, from clear
              pickup arrangements and well-timed itineraries to activities that
              truly reflect the beauty of the places we call home.
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src={aboutImage}
                alt="Zazu Adventures travel experience"
                className="h-[450px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
