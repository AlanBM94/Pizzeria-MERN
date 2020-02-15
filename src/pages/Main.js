import React from "react";

import Hero from "../components/Hero/Hero";
import Navigation from "../components/shared/Navigation/Navigation";
import Footer from "../components/shared/Footer/Footer";
import SectionContainer from "../components/SectionContainer/SectionContainer";
const Main = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <SectionContainer type="ingredients" />
      <SectionContainer type="testimonials" />
      <SectionContainer type="gallery" />
      <Footer />
    </>
  );
};

export default Main;
