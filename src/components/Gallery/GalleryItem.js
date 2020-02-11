import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./GalleryItemStyles.js";

const GalleryItem = props => {
  const { classes } = props;
  return (
    <div>
      <img src={props.image} />
    </div>
  );
};

export default withStyles(styles)(GalleryItem);
