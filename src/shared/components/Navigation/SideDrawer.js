import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import SimpleMenu from "../Menu/Menu";
import styles from "./SideDrawerStyles";

const SideDrawer = props => {
  const { classes } = props;
  return (
    <div className={classes.sideDrawer}>
      <SimpleMenu responsive={true} />
      <Button>Iniciar Sesión</Button>
      <Button variant="contained">Registrarse</Button>
    </div>
  );
};

export default withStyles(styles)(SideDrawer);
