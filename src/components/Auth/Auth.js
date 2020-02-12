import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

import styles from "./AuthStyles";

const Auth = props => {
  const { classes } = props;
  return (
    <div className={classes.formContainer}>
      <div className={classes.form}>
        <div className={classes.formNav}>
          <button className={classes.activeButton}>Iniciar Sesión</button>
          <button>Registrarse</button>
        </div>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="password" placeholder="Contraseña" />
          <Button className={classes.formButton}>Iniciar sesión</Button>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(Auth);
