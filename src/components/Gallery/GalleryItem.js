import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./GalleryItemStyles.js";

const GalleryItem = props => {
  const { classes } = props;
  return (
    <div className={classes.imageContainer}>
      <img src={props.image} alt="" />
    </div>
  );
};

export default withStyles(styles)(GalleryItem);
