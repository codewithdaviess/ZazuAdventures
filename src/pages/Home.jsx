import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import WhatWeOffer from "../components/homepage/WhatWeOffer";
import Packages from "../components/homepage/Packages";
import MultiDayPackages from "../components/homepage/MultiDayPackages";
import AboutUs from "../components/about/AboutUs";
import Testimonials from "../components/homepage/Testimonials";

function Home() {
  return (
    <Layout withNavbarOffset={false}>
      <Hero />
      <WhatWeOffer />
      <Packages />
      <MultiDayPackages />
      <AboutUs />
      <Testimonials />
    </Layout>
  );
}

export default Home;
