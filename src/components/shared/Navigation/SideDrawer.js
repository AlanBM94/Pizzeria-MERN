import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";

import SimpleMenu from "../Menu/Menu";
import styles from "./SideDrawerStyles";

const SideDrawer = props => {
  const { classes } = props;
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.sideDrawer}>
        <SimpleMenu responsive={true} closeResponsiveMenu={props.onClick} />
        <Link to="/auth">
          <Button className={classes.btnNavResponsive} onClick={props.onClick}>
            Iniciar Sesión
          </Button>
        </Link>
        <Link to="/auth">
          <Button
            variant="contained"
            className={classes.btnNavResponsive}
            onClick={props.onClick}
          >
            Registrarse
          </Button>
        </Link>
      </div>
    </CSSTransition>
  );
};

export default withStyles(styles)(SideDrawer);
