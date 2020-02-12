import React, { useReducer } from "react";
import { withStyles } from "@material-ui/styles";

import { validate } from "../utils/validator";
import styles from "./InputStyles";

const inputReducer = (state, action) => {
  const { value, validators, type } = action;
  switch (type) {
    case "CHANGE":
      return { ...state, value: value, isValid: validate(value, validators) };
    default:
      return state;
  }
};

const Input = props => {
  const {
    placeholder,
    type,
    typeElement,
    id,
    rows,
    initialValue,
    initialIsValid,
    validators,
    classes
  } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialIsValid || false
  });

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: validators
    });
  };

  let element;

  if (typeElement === "input") {
    element = (
      <input
        placeholder={placeholder}
        type={type}
        props={id}
        onChange={changeHandler}
        className={classes.Input}
        value={inputState.value}
      />
    );
  } else {
    element = (
      <textarea
        placeholder={placeholder}
        type={type}
        rows={rows || 3}
        onChange={changeHandler}
        className={classes.Input}
        value={inputState.value}
      />
    );
  }
  return element;
};

export default withStyles(styles)(Input);
