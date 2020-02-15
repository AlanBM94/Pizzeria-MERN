import React from "react";

import Menu from "../components/FoodMenu/Menu";
import Navigation from "../components/shared/Navigation/Navigation";
import Footer from "../components/shared/Footer/Footer";

const FoodMenu = props => {
  const { type } = props;
  return (
    <>
      <Navigation />
      <Menu type={type} />
      <Footer />
    </>
  );
};

export default FoodMenu;
