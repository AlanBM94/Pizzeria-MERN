import React, { useReducer, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { validate } from "../utils/validator";
import styles from "./InputStyles";

const inputReducer = (state, action) => {
  const { value, validators, type } = action;
  switch (type) {
    case "CHANGE":
      return { ...state, value: value, isValid: validate(value, validators) };
    case "TOUCH":
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const {
    id,
    onInput,
    placeholder,
    type,
    typeElement,
    rows,
    initialValue,
    initialIsValid,
    errorText,
    validators,
    classes
  } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialIsValid || false
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: validators
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  let element;

  if (typeElement === "input") {
    element = (
      <input
        placeholder={placeholder}
        type={type}
        props={id}
        id={id}
        onChange={changeHandler}
        className={classes.Input}
        onBlur={touchHandler}
        value={value}
      />
    );
  } else if (typeElement === "select") {
    element = (
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor={id}>Ubicación</InputLabel>
        <Select onChange={changeHandler} value={value} id={id} type={type}>
          {props.locations.map(location => (
            <MenuItem key={location.val} value={location.val}>
              {location.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else {
    element = (
      <textarea
        placeholder={placeholder}
        type={type}
        rows={rows || 3}
        id={id}
        onChange={changeHandler}
        className={classes.Input}
        onBlur={touchHandler}
        value={value}
      />
    );
  }
  return (
    <>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </>
  );
};

export default withStyles(styles)(Input);
