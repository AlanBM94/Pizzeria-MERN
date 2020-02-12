import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import Input from "../shared/FormComponents/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../shared/utils/validator";
import styles from "./AuthFormStyles";

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
          <Input
            type="text"
            placeholder="Nombre"
            typeElement="input"
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            typeElement="input"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          />
          <Button className={classes.formButton}>Iniciar sesión</Button>
        </form>
        <Link to="/registrarse">Ya tienes cuenta?</Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Auth);
