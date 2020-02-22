import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Modal from "../UIElements/Modal";
import styles from "./CardStyles";

const Card = props => {
  const { classes, image, title, description, category } = props;
  const [showComments, setShowComments] = useState(false);

  const seeComentsHandler = () => {
    setShowComments(true);
  };

  const closeCommentsHandler = () => {
    setShowComments(false);
  };

  return (
    <>
      <Modal
        show={showComments}
        onCancel={closeCommentsHandler}
        header="Comentarios"
        footer={<Button onClick={closeCommentsHandler}>Cerrar</Button>}
      >
        Here are the comments
      </Modal>
      <div className={classes.card}>
        <div className={`${classes.side} ${classes.frontSide} frontSide`}>
          <img src={image} className={classes.cardImage} />
        </div>
        <div className={`${classes.side} ${classes.backSide} backSide`}>
          <h3 className={classes.cardTitle}>{title}</h3>
          <p className={classes.cardDescription}>{description}</p>
          <div className={classes.cardFooter}>
            <p>Comentar</p>
            <p onClick={seeComentsHandler} style={{ color: "black" }}>
              +99
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Card);
