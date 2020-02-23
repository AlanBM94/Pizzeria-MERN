import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import userImage from "../../../images/Alan.jpg";

import styles from "./ListItemStyles";

const ListItem = props => {
  const {
    classes,
    imageName,
    content,
    editableContent,
    type,
    location,
    dateAndTime,
    numberOfPeople
  } = props;

  let overflowType;

  if (type === "comment") {
    overflowType =
      content.length >= 90 ? { overflow: "scroll" } : { overflow: "visible" };
  }

  let item =
    type === "comment" ? (
      <>
        <li className={classes.listItem}>
          <img src={userImage} alt={imageName} />
          <p style={overflowType}>{content}</p>
          {editableContent && (
            <div>
              <Button>Editar</Button>
              <Button>Eliminar</Button>
            </div>
          )}
        </li>
      </>
    ) : (
      <>
        <li className={`${classes.listItem} ${classes.reservationItem}`}>
          <div className={classes.mainInfoContainer}>
            <h3>{location}</h3>
            <p>{dateAndTime}</p>
          </div>
          <p>{numberOfPeople}</p>
        </li>
      </>
    );

  return item;
};

export default withStyles(styles)(ListItem);
