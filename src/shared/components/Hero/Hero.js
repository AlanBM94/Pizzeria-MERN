import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./HeroStyles";

const Hero = props => {
  const { classes } = props;
  return (
    <div className={classes.hero}>
      <div className={classes.heroContenido}></div>
      <div className={classes.heroImagen}></div>
    </div>
  );
};

export default withStyles(styles)(Hero);
