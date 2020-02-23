import React from "react";

import List from "../../components/shared/UIElements/List";
import ListItem from "../../components/shared/UIElements/ListItem";
import Navigation from "../../components/shared/Navigation/Navigation";
import { withStyles } from "@material-ui/styles";
import styles from "./MyCommentsStyles";

const MyComments = props => {
  const { classes } = props;
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <h2>Mis comentarios</h2>
        <List>
          <ListItem
            content="Esta es una gran pizza"
            imageName="Alan"
            editableContent
            type="comment"
          />
          <ListItem
            content="Esta es una gran pizza"
            imageName="Alan"
            editableContent
            type="comment"
          />
          <ListItem
            content="Esta es una gran pizza"
            imageName="Alan"
            editableContent
            type="comment"
          />
          <ListItem
            content="Esta es una gran pizza"
            imageName="Alan"
            editableContent
            type="comment"
          />
        </List>
      </div>
    </>
  );
};

export default withStyles(styles)(MyComments);
