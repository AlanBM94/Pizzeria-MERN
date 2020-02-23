import React from "react";

import List from "../../components/shared/UIElements/List";
import Navigation from "../../components/shared/Navigation/Navigation";
import { withStyles } from "@material-ui/styles";
import styles from "./ProfileStyles";

const Profile = props => {
  const { classes } = props;
  return (
    <>
      <Navigation />
      <div>this is the profile</div>
    </>
  );
};

export default withStyles(styles)(Profile);
