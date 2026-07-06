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

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#223441] lg:text-5xl">
              A small idea that grew into a trusted travel brand
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">
              Zazu Adventures began with a simple goal: make travel around
              Southern Africa feel effortless, personal, and memorable. What
              started as helping friends, families, and first-time visitors plan
              meaningful trips has grown into a travel service built on local
              knowledge, reliable partners, and honest communication. We focus
              on the little details that make a big difference, from clear
              pickup arrangements and well-timed itineraries to activities that
              truly reflect the beauty of the places we call home.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.id}
                    className="rounded-2xl bg-gray-100 p-4 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#223441]">
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    <p className="mt-3 text-lg font-semibold text-[#223441]">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-full bg-[#8A6A3D]/10 lg:block" />
            <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 rounded-full bg-[#223441]/10 lg:block" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={aboutImage}
                alt="Zazu Adventures travel experience"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
