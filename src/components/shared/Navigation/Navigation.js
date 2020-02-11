import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import SimpleMenu from "../Menu/Menu";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop";
import styles from "./NavigationStyles";

function ButtonAppBar(props) {
  const { classes } = props;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openResponsiveMenu = () => {
    setDrawerIsOpen(true);
  };

  const closeResponsiveMenu = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div className={classes.root}>
      {drawerIsOpen && <BackDrop onClick={closeResponsiveMenu} />}
      <SideDrawer show={drawerIsOpen} onClick={closeResponsiveMenu} />
      <AppBar position="static" className={classes.navigation}>
        <Toolbar>
          <button className={classes.btnBurguer} onClick={openResponsiveMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/" className={classes.logo}>
              Pizzeria-MERN
            </Link>
          </Typography>
          <SimpleMenu
            responsive={false}
            closeResponsiveMenu={closeResponsiveMenu}
          />
          <Link to="/iniciarSesion">
            <Button
              className={`${classes.btnNormal} ${classes.btnIniciarSesion}`}
            >
              Iniciar Sesión
            </Button>
          </Link>
          <Link to="/registrarse">
            <Button variant="contained" className={classes.fullButton}>
              Registrarse
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);