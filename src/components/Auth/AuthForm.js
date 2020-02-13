import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import Input from "../shared/FormComponents/Input";
import { useForm } from "../shared/hooks/useForm";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../shared/utils/validator";
import styles from "./AuthFormStyles";

const Auth = props => {
  const { classes } = props;
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );
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
            placeholder="email"
            id="email"
            typeElement="input"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Este campo es requerido"
            onInput={inputHandler}
          />
          <Input
            type="password"
            placeholder="contraseña"
            id="password"
            typeElement="input"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            errorText="Ingresa una contraseña valida, al menos 5 caracteres."
            onInput={inputHandler}
          />
          <Button className={classes.formButton} disabled={!formState.isValid}>
            Iniciar sesión
          </Button>
        </form>
        <Link to="/registrarse">Ya tienes cuenta?</Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Auth);
