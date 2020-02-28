import React, { useContext, useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";

import List from "../../components/shared/UIElements/List";
import ListItem from "../../components/shared/UIElements/ListItem";
import Navigation from "../../components/shared/Navigation/Navigation";
import LoadingSpinner from "../../components/shared/UIElements/LoadingSpinner";
import ErrorModal from "../../components/shared/UIElements/ErrorModal";
import { AuthContext } from "../../components/shared/context/authContext";
import { useHttpClient } from "../../components/shared/hooks/useHttp";
import styles from "./MyCommentsStyles";

const MyComments = props => {
  const { classes } = props;
  const authContext = useContext(AuthContext);
  const [loadedComments, setLoadedComments] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchComments = async () => {
      const responseData = await sendRequest(
        `http://localhost:5000/api/comments`,
        "GET",
        null,
        { Authorization: "Bearer " + authContext.token }
      );
      if (responseData) {
        setLoadedComments(responseData.comments);
      }
    };
    fetchComments();
  }, []);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Navigation />
      <div className={classes.container}>
        <h2>Mis comentarios</h2>
        <List>
          {isLoading && (
            <div style={{ margin: "5rem auto 0 auto" }}>
              <LoadingSpinner />
            </div>
          )}
          {loadedComments.length === 0 && !isLoading && (
            <h3>No tienes comentarios</h3>
          )}
          {loadedComments &&
            !isLoading &&
            loadedComments.map(comment => (
              <ListItem
                key={comment._id}
                id={comment._id}
                content={comment.comment}
                imageName="Alan"
                editableContent
                type="comment"
              />
            ))}
        </List>
      </div>
    </>
  );
};

export default withStyles(styles)(MyComments);
