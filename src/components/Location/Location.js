import React from "react";
import { withStyles } from "@material-ui/styles";

import Navigation from "../shared/Navigation/Navigation";
import SectionContainer from "../SectionContainer/SectionContainer";
import Footer from "../shared/Footer/Footer";
import styles from "./LocationStyles";

const Location = () => {
  return (
    <>
      <Navigation />
      <SectionContainer type="locationDesign" />
      <Footer />
    </>
  );
};

export default withStyles(styles)(Location);
