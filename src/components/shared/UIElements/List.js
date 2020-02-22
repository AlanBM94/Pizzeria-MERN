import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./ListStyles";

const List = props => {
  const { classes, onModal } = props;
  return (
    <div
      className={classes.ListContainer}
      style={onModal && { overflow: "scroll", height: "20rem" }}
    >
      <ul>{props.children}</ul>
    </div>
  );
};

export default withStyles(styles)(List);
