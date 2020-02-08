import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./TestimonialStyles";
import userImage from "../../images/Alan.jpg";

const Testimonial = props => {
  const { classes } = props;
  return (
    <div className={classes.testimonial}>
      <div className={classes.testimonialImage}>
        <img src={userImage} alt="Alan" />
      </div>
      <div className={classes.testimonialText}>
        <p>
          <span>"</span>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(Testimonial);
