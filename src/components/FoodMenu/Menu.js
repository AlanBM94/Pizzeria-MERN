import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./MenuStyles";

const Menu = props => {
  const { classes, type } = props;
  return (
    <div className={classes.container}>
      <h2>{type.toUpperCase()}</h2>
    </div>
  );
};

export default withStyles(styles)(Menu);
