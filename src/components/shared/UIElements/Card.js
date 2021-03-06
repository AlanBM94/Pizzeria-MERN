import React, { useState, useContext, useEffect } from "react";
import CommentIcon from "@material-ui/icons/Comment";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Modal from "../UIElements/Modal";
import List from "../UIElements/List";
import Input from "../FormComponents/Input";
import ListItem from "../UIElements/ListItem";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";
import { useHttpClient } from "../hooks/useHttp";
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../context/authContext";
import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from "../utils/validator";
import styles from "./CardStyles";

const Card = props => {
  const { classes, image, title, description, category, id } = props;
  const authContext = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showComments, setShowComments] = useState();
  const [loadedComments, setLoadedComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      comment: {
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

  const createCommentHandler = async e => {
    e.preventDefault();
    const responseData = await sendRequest(
      "http://localhost:5000/api/comments/",
      "POST",
      JSON.stringify({
        comment: formState.inputs.comment.value,
        user: authContext.userId,
        food: id
      }),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authContext.token
      }
    );
    if (responseData) {
      setNewComment(responseData.newComment.comment);
    } else {
      setTimeout(() => {
        clearError();
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchCommentsByFood = async () => {
      const responseData = await sendRequest(
        `http://localhost:5000/api/comments/${id}`
      );
      if (responseData) {
        setNewComment(null);
        setLoadedComments(responseData.comments);
      }
    };
    fetchCommentsByFood();
  }, []);

  return (
    <>
      <ErrorModal error={error} clearError={clearError} hasFooter={false} />

      <Modal
        show={showComments}
        onCancel={closeCommentsHandler}
        header="Comentarios"
        footer={<Button onClick={closeCommentsHandler}>Cerrar</Button>}
      >
        {isLoading && (
          <div style={{ margin: "5rem auto 0 auto" }}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedComments.length === 0 && !newComment && (
          <h3>Esta {category} no tiene comentarios</h3>
        )}

        <List onModal>
          {!isLoading &&
            loadedComments.length > 0 &&
            loadedComments.map(comment => (
              <ListItem
                key={comment._id}
                content={comment.comment}
                imageName="Alan"
                type="comment"
              />
            ))}
          {!isLoading && newComment && (
            <ListItem content={newComment} imageName="Alan" type="comment" />
          )}
        </List>
      </Modal>
      <Modal
        show={showForm}
        onCancel={closeFormHandler}
        header="Escribe un comentario"
        footer={<Button onClick={closeFormHandler}>Cerrar</Button>}
      >
        {!newComment && !isLoading && (
          <form className={classes.form} onSubmit={createCommentHandler}>
            <Input
              type="submit"
              placeholder="Escribe tu comentario"
              id="comment"
              typeElement="area"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(120)]}
              errorText="Ingresa un comentario valido, máximo 120 caracteres."
              onInput={inputHandler}
            />
            <Button disabled={!formState.isValid} type="submit">
              Publicar
            </Button>
          </form>
        )}
        {isLoading && (
          <div style={{ margin: "5rem auto 0 auto" }}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && newComment && <h3>Tu comentario ha sido publicado</h3>}
      </Modal>
      <div className={classes.card}>
        <div className={`${classes.side} ${classes.frontSide} frontSide`}>
          <img
            src={`http://localhost:5000/${image}`}
            className={classes.cardImage}
            alt={title}
          />
        </div>
        <div className={`${classes.side} ${classes.backSide} backSide`}>
          <h3 className={classes.cardTitle}>{title}</h3>
          <p className={classes.cardDescription}>{description}</p>
          <div className={classes.cardFooter}>
            {authContext.token && authContext.userId && (
              <p onClick={showFormHandler}>Comentar</p>
            )}
            <p onClick={showComentsHandler}>
              <CommentIcon />
              {newComment ? loadedComments.length + 1 : loadedComments.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Card);
