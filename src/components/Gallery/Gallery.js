import React from "react";
import { withStyles } from "@material-ui/styles";

import GalleryItem from "./GalleryItem";
import styles from "./GalleryStyles";
import pizza1 from "../../images/pizza-1.jpg";
import pizza2 from "../../images/pizza-2.jpg";
import pizza3 from "../../images/pizza-3.jpg";
import pizza4 from "../../images/pizza-4.jpg";
import pasta1 from "../../images/pasta-1.jpg";
import pasta2 from "../../images/pasta-2.jpg";
import pasta3 from "../../images/pasta-3.jpg";
import pasta4 from "../../images/pasta-4.jpg";
import bebida1 from "../../images/bebida-1.jpg";
import bebida2 from "../../images/bebida-2.jpg";
import bebida3 from "../../images/bebida-3.jpg";
import bebida4 from "../../images/bebida-4.jpg";

const Gallery = props => {
  const { classes } = props;
  return (
    <div className={classes.gallery}>
      <GalleryItem image={pizza1} className={classes.galleryItem1} />
      <GalleryItem image={pizza2} className={classes.galleryItem2} />
      <GalleryItem image={pizza3} className={classes.galleryItem3} />
      <GalleryItem image={pizza4} className={classes.galleryItem4} />
      <GalleryItem image={pasta1} className={classes.galleryIte5} />
      <GalleryItem image={pasta2} className={classes.galleryItem6} />
      <GalleryItem image={pasta3} className={classes.galleryItem7} />
      <GalleryItem image={pasta4} className={classes.galleryItem8} />
      <GalleryItem image={bebida1} className={classes.galleryItem9} />
      <GalleryItem image={bebida2} className={classes.galleryItem10} />
      <GalleryItem image={bebida3} className={classes.galleryItem11} />
      <GalleryItem image={bebida4} className={classes.galleryItem13} />
    </div>
  );
};

export default withStyles(styles)(Gallery);
