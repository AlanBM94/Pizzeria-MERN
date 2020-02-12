import React from "react";

import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import SectionContainer from "../components/SectionContainer/SectionContainer";
const Main = () => {
  return (
    <>
      <Hero />
      <SectionContainer type="ingredients" />
      <SectionContainer type="testimonials" />
      <SectionContainer type="gallery" />
      <Footer />
    </>
  );
};

export default Main;
