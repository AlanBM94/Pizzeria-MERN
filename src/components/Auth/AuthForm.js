import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import { FormModeContext } from "../shared/context/formModeContext";
import Input from "../shared/FormComponents/Input";
import { useForm } from "../shared/hooks/useForm";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../shared/utils/validator";
import styles from "./AuthFormStyles";

const Auth = props => {
  const formContext = useContext(FormModeContext);
  const { classes } = props;
  const [authFormMode, setAuthFormMode] = useState(
    formContext.formMode || "logIn"
  );
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

  const loginFormHandler = () => {
    setAuthFormMode("logIn");
  };

  const signUpFormHandler = () => {
    setAuthFormMode("signUp");
  };

  const submitFormHandler = e => {
    e.preventDefault();
    if (
      formState.inputs.password.value !== formState.inputs.confirmPassword.value
    ) {
      alert("Las contraseñas no son iguales");
    }
  };

  const authFormModeSignUp = authFormMode === "signUp";
  const authFormModeLogIn = authFormMode === "logIn";

  return (
    <div className={classes.formContainer}>
      <div
        className={`${classes.form} ${authFormModeSignUp &&
          `${classes.formSignUp}`}`}
      >
        <Link to="/">Pizzeria-MERN</Link>
        <div className={classes.formNav}>
          <button
            className={authFormModeLogIn && classes.activeButton}
            onClick={authFormModeLogIn ? signUpFormHandler : loginFormHandler}
            disabled={authFormModeLogIn}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={authFormModeLogIn ? signUpFormHandler : loginFormHandler}
            disabled={authFormModeSignUp}
            className={authFormModeSignUp && classes.activeButton}
          >
            Registrarse
          </button>
        </div>
        <form onSubmit={submitFormHandler}>
          {authFormModeSignUp && (
            <Input
              type="text"
              placeholder="nombre"
              id="nombre"
              typeElement="input"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Este campo es requerido"
              onInput={inputHandler}
            />
          )}
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
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            errorText="Ingresa una contraseña valida, al menos 6 caracteres."
            onInput={inputHandler}
          />
          {authFormModeSignUp && (
            <Input
              type="password"
              placeholder="confirmar contraseña"
              id="confirmPassword"
              typeElement="input"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
              errorText="Ingresa una contraseña valida, al menos 6 caracteres."
              onInput={inputHandler}
            />
          )}
          <Button
            className={classes.formButton}
            disabled={!formState.isValid}
            type="submit"
          >
            {authFormModeLogIn ? "Iniciar sesión" : "Registrarse"}
          </Button>
        </form>
        <Link
          onClick={authFormModeLogIn ? signUpFormHandler : loginFormHandler}
        >
          {authFormModeLogIn ? "Aún no tienes cuenta?" : "Ya tienes cuenta?"}
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Auth);
