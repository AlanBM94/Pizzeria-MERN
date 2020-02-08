import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./TomatoStyles";

const Tomato = props => {
  const { classes } = props;
  return (
    <img
      src="https://images.unsplash.com/photo-1576982832772-9dc1779033a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
      alt="Tomato"
      className={classes.tomato}
    />
  );
};

export default withStyles(styles)(Tomato);
