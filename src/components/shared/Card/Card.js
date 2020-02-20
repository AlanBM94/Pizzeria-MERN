import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./CardStyles";

const Card = props => {
  const { classes, image, title, description, category } = props;

  const seeComentsHandler = () => {
    console.log("hola");
  };

  return (
    <div className={classes.card}>
      <div className={`${classes.side} ${classes.frontSide} frontSide`}>
        <img src={image} className={classes.cardImage} />
      </div>
      <div className={`${classes.side} ${classes.backSide} backSide`}>
        <h3 className={classes.cardTitle}>{title}</h3>
        <p className={classes.cardDescription}>{description}</p>
        <div className={classes.cardFooter}>
          <p>{props.category}</p>
          <p onClick={seeComentsHandler} style={{ color: "black" }}>
            Comentarios
          </p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Card);
