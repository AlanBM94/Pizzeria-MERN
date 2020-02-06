import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/styles";

import styles from "./BackDropStyles.js";

const Backdrop = props => {
  const { classes } = props;
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default withStyles(styles)(Backdrop);
