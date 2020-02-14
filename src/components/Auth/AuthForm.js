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

  return (
    <div className={classes.formContainer}>
      <div
        className={`${classes.form} ${authFormMode === "signUp" &&
          `${classes.formSignUp}`}`}
      >
      <Link to="/">Pizzeria-MERN</Link>
        <div className={classes.formNav}>
          <button
            className={authFormMode === "logIn" && classes.activeButton}
            onClick={
              authFormMode === "logIn" ? signUpFormHandler : loginFormHandler
            }
            disabled={authFormMode === "logIn"}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={
              authFormMode === "logIn" ? signUpFormHandler : loginFormHandler
            }
            disabled={authFormMode === "signUp"}
            className={authFormMode === "signUp" && classes.activeButton}
          >
            Registrarse
          </button>
        </div>
        <form>
          {authFormMode === "signUp" && (
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
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            errorText="Ingresa una contraseña valida, al menos 5 caracteres."
            onInput={inputHandler}
          />
          {authFormMode === "signUp" && (
            <Input
              type="password"
              placeholder="confirmar contraseña"
              id="passwordConfirm"
              typeElement="input"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
              errorText="Ingresa una contraseña valida, al menos 5 caracteres."
              onInput={inputHandler}
            />
          )}
          <Button className={classes.formButton} disabled={!formState.isValid}>
            {authFormMode === "logIn" ? "Iniciar sesión" : "Registrarse"}
          </Button>
        </form>
        <Link
          onClick={
            authFormMode === "logIn" ? signUpFormHandler : loginFormHandler
          }
        >
          {authFormMode === "logIn"
            ? "Aún no tienes cuenta?"
            : "Ya tienes cuenta?"}
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Auth);
