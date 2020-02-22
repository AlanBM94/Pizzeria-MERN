import React, { useState, useContext } from "react";
import CommentIcon from "@material-ui/icons/Comment";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Modal from "../UIElements/Modal";
import List from "../UIElements/List";
import Input from "../FormComponents/Input";
import ListItem from "../UIElements/ListItem";
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../context/authContext";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH
} from "../utils/validator";
import styles from "./CardStyles";

const Card = props => {
  const { classes, image, title, description, category } = props;
  const authContext = useContext(AuthContext);
  const [showComments, setShowComments] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      createComment: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const showComentsHandler = () => {
    setShowComments(true);
  };

  const closeCommentsHandler = () => {
    setShowComments(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const closeFormHandler = () => {
    setShowForm(false);
  };

  const createCommentHandler = e => {
    e.preventDefault();
    alert("Quieres crear un comentario");
  };

  return (
    <>
      <Modal
        show={showComments}
        onCancel={closeCommentsHandler}
        header="Comentarios"
        footer={<Button onClick={closeCommentsHandler}>Cerrar</Button>}
      >
        <List onModal>
          <ListItem content="Esta es una gran pizza" imageName="Alan" />
          <ListItem content="Esta es una gran pizza" imageName="Alan" />
          <ListItem content="Esta es una gran pizza" imageName="Alan" />
          <ListItem content="Esta es una gran pizza" imageName="Alan" />
          <ListItem content="Esta es una gran pizza" imageName="Alan" />
        </List>
      </Modal>
      <Modal
        show={showForm}
        onCancel={closeFormHandler}
        header="Escribe un comentario"
        footer={<Button onClick={closeFormHandler}>Cerrar</Button>}
      >
        <form className={classes.form} onSubmit={createCommentHandler}>
          <Input
            type="submit"
            placeholder="Escribe tu comentario"
            id="createComment"
            typeElement="area"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(120)]}
            errorText="Ingresa un comentario valido, máximo 120 caracteres."
            onInput={inputHandler}
          />
          <Button disabled={!formState.isValid} type="submit">
            Publicar
          </Button>
        </form>
      </Modal>
      <div className={classes.card}>
        <div className={`${classes.side} ${classes.frontSide} frontSide`}>
          <img src={image} className={classes.cardImage} />
        </div>
        <div className={`${classes.side} ${classes.backSide} backSide`}>
          <h3 className={classes.cardTitle}>{title}</h3>
          <p className={classes.cardDescription}>{description}</p>
          <div className={classes.cardFooter}>
            {authContext.isLoggedIn && (
              <p onClick={showFormHandler}>Comentar</p>
            )}
            <p onClick={showComentsHandler}>
              <CommentIcon />
              99
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Card);
