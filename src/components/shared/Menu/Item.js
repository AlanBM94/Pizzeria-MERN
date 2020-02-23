import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import { AuthContext } from "../context/authContext";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "./ItemStyles";

const Item = props => {
  const { classes, title, route } = props;
  const authContext = useContext(AuthContext);

  return (
    <Link to={route} className={classes.item}>
      {title === "Cerrar sesión" ? (
        <>
          <MenuItem onClick={authContext.logout}>{title}</MenuItem>
        </>
      ) : (
        <>
          <MenuItem>{title}</MenuItem>
        </>
      )}
    </Link>
  );
};

export default withStyles(styles)(Item);
