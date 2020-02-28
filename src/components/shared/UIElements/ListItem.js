import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from "../utils/validator";
import Modal from "../UIElements/Modal";
import { AuthContext } from "../context/authContext";
import { useForm } from "../hooks/useForm";
import Input from "../FormComponents/Input";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";
import { useHttpClient } from "../hooks/useHttp";
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
    numberOfPeople,
    id
  } = props;
  const authContext = useContext(AuthContext);

  const { sendRequest, isLoading, error, clearError } = useHttpClient();
  const [showUpdateCommentForm, setShowUpdateCommentForm] = useState(false);
  const [showDeleteCommentForm, setShowDeleteCommentForm] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(null);
  const [deletedComment, setDeletedComment] = useState(null);
  const [formState, inputHandler] = useForm(
    {
      comment: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const showUpdateCommentFormHandler = () => {
    setShowUpdateCommentForm(true);
  };

  const closeUpdateCommentFormHandler = () => {
    setShowUpdateCommentForm(false);
  };

  const showDeleteCommentFormHandler = () => {
    setShowDeleteCommentForm(true);
  };

  const closeDeleteCommentFormHandler = () => {
    setShowDeleteCommentForm(false);
  };

  const updateCommentHandler = async e => {
    e.preventDefault();
    const responseData = await sendRequest(
      `http://localhost:5000/api/comments/${id}`,
      "PATCH",
      JSON.stringify({
        comment: formState.inputs.comment.value
      }),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authContext.token
      }
    );
    if (responseData) {
      setUpdatedComment(responseData.comment.comment);
    }
  };

  const deleteCommentHandler = async () => {
    const responseData = await sendRequest(
      `http://localhost:5000/api/comments/${id}`,
      "DELETE",
      null,
      {
        Authorization: "Bearer " + authContext.token
      }
    );
    if (responseData) {
      setDeletedComment(true);
    }
  };

  let overflowType;

  if (type === "comment") {
    overflowType =
      content.length >= 90 ? { overflow: "scroll" } : { overflow: "visible" };
  }

  let item =
    type === "comment" ? (
      <>
        <ErrorModal error={error} onClear={clearError} hasFooter />
        <Modal
          show={showUpdateCommentForm}
          onCancel={closeUpdateCommentFormHandler}
          header="Edita tu comentario"
          footer={
            <Button onClick={closeUpdateCommentFormHandler}>Cerrar</Button>
          }
        >
          {isLoading && (
            <div style={{ margin: "5rem auto 0 auto" }}>
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && !updatedComment && (
            <form onSubmit={updateCommentHandler}>
              <Input
                type="submit"
                placeholder="Edita tu comentario"
                initialValue={content}
                initialValid={true}
                id="comment"
                typeElement="area"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(120)]}
                errorText="Ingresa un comentario valido, máximo 120 caracteres."
                onInput={inputHandler}
              />
              <Button type="submit" disabled={!formState.isValid}>
                Editar comentario
              </Button>
            </form>
          )}
          {!isLoading && updatedComment && (
            <h3>Tu comentario ha sido actualizado</h3>
          )}
        </Modal>
        <Modal
          show={showDeleteCommentForm}
          onCancel={closeDeleteCommentFormHandler}
          header="Elimina tu comentario"
          footer={
            <>
              <Button onClick={closeDeleteCommentFormHandler}>
                {deletedComment ? "Atras" : "Cancelar"}
              </Button>
              {!deletedComment && (
                <Button onClick={deleteCommentHandler}>Eliminar</Button>
              )}
            </>
          }
        >
          {isLoading && <LoadingSpinner />}
          {!deletedComment && !isLoading && (
            <h3>
              Estas seguro que deseas borrar tu comentario? No podrás deshacer
              esa acción
            </h3>
          )}
          {deletedComment && !isLoading && (
            <h3>Tu comentario ha sido eliminado</h3>
          )}
        </Modal>
        {!deletedComment && (
          <li className={classes.listItem}>
            <img src={userImage} alt={imageName} />
            <p style={overflowType}>
              {updatedComment ? updatedComment : content}
            </p>
            {editableContent && (
              <div>
                <Button onClick={showUpdateCommentFormHandler}>Editar</Button>
                <Button onClick={showDeleteCommentFormHandler}>Eliminar</Button>
              </div>
            )}
          </li>
        )}
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
