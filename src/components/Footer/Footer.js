import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./FooterStyles.js";

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <p>Este proyecto fue creado por Alan Beltrán Mendoza</p>
    </footer>
  );
};

export default withStyles(styles)(Footer);
