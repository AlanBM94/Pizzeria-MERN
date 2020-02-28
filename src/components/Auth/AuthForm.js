import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import Modal from "../shared/UIElements/Modal";
import { useHttpClient } from "../shared/hooks/useHttp";
import { FormModeContext } from "../shared/context/formModeContext";
import { AuthContext } from "../shared/context/authContext";
import Input from "../shared/FormComponents/Input";
import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
import ErrorModal from "../shared/UIElements/ErrorModal";
import { useForm } from "../shared/hooks/useForm";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../shared/utils/validator";
import styles from "./AuthFormStyles";

const Auth = props => {
  const formContext = useContext(FormModeContext);
  const authContext = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { classes } = props;
  const [authFormMode, setAuthFormMode] = useState(
    formContext.formMode || "logIn"
  );

  const [formState, inputHandler, setFormData] = useForm(
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
    formContext.logInFormHandler();
    setFormData(
      {
        ...formState.inputs,
        name: undefined,
        confirmPassword: undefined
      },
      formState.inputs.email.isValid && formState.inputs.password.isValid
    );
    setAuthFormMode("logIn");
  };

  const signUpFormHandler = () => {
    formContext.signUpFormHandler();
    setAuthFormMode("signUp");
  };

  const signUp = async () => {
    const responseData = await sendRequest(
      "http://localhost:5000/api/users/signup",
      "POST",
      JSON.stringify({
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
        passwordConfirmed: formState.inputs.passwordConfirmed.value
      }),
      {
        "Content-Type": "application/json"
      }
    );
    if (responseData) {
      authContext.login(responseData.userId, responseData.token);
    }
  };

  const logIn = async () => {
    const responseData = await sendRequest(
      "http://localhost:5000/api/users/login",
      "POST",
      JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value
      }),
      {
        "Content-Type": "application/json"
      }
    );
    if (responseData) {
      authContext.login(responseData.userId, responseData.token);
    }
  };

  const submitFormHandler = async e => {
    e.preventDefault();
    const numberOfLoginInputs = Object.values(formState.inputs).length === 2;
    if (formContext.formMode === "logIn" || numberOfLoginInputs) {
      logIn();
    } else {
      signUp();
    }
  };

  const authFormModeSignUp = authFormMode === "signUp";
  const authFormModeLogIn = authFormMode === "logIn";

  return (
    <>
      <ErrorModal error={error} onClear={clearError} hasFooter />

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
          {isLoading && (
            <div style={{ margin: "5rem auto 0 auto" }}>
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && (
            <>
              <form onSubmit={submitFormHandler}>
                {authFormModeSignUp && (
                  <Input
                    type="text"
                    placeholder="nombre"
                    id="name"
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
                    id="passwordConfirmed"
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
              <a
                onClick={
                  authFormModeLogIn ? signUpFormHandler : loginFormHandler
                }
              >
                {authFormModeLogIn
                  ? "Aún no tienes cuenta?"
                  : "Ya tienes cuenta?"}
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Auth);
