import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import userImage from "../../../images/Alan.jpg";

import styles from "./ListItemStyles";

const ListItem = props => {
  const { classes, imageName, content, editableContent } = props;

  let overflowType =
    content.length >= 90 ? { overflow: "scroll" } : { overflow: "visible" };

  return (
    <li className={classes.ListItem}>
      <img src={userImage} alt={imageName} />
      <p style={overflowType}>{content}</p>
      {editableContent && (
        <div>
          <Button>Editar</Button>
          <Button>Eliminar</Button>
        </div>
      )}
    </li>
  );
};

export default withStyles(styles)(ListItem);
