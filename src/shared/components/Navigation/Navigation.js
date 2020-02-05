import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import SimpleMenu from "../Menu/Menu";
import SideDrawer from "./SideDrawer";
import styles from "./NavigationStyles";

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SideDrawer />
      <AppBar position="static" className={classes.navigation}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/" className={classes.logo}>
              Pizzeria-MERN
            </Link>
          </Typography>
          <SimpleMenu responsive={false} />
          <Button
            className={`${classes.btnNormal} ${classes.btnIniciarSesion}`}
          >
            Iniciar Sesión
          </Button>
          <Button variant="contained" className={classes.fullButton}>
            Registrarse
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
