import React from "react";

import Hero from "../components/Hero/Hero";
import SectionContainer from "../components/SectionContainer/SectionContainer";

const Main = () => {
  return (
    <>
      <Hero />
      <SectionContainer type="ingredients" />
    </>
  );
};

export default Main;
