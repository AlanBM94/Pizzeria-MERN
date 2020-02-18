import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import { VALIDATOR_REQUIRE } from "../shared/utils/validator";
import Input from "../shared/FormComponents/Input";
import { useForm } from "../shared/hooks/useForm";
import Map from "../shared/Map/Map";
import styles from "./LocationDesignStyles";

const LocationDesign = props => {
  const { classes } = props;
  const [formState, inputHandler, setFormData] = useForm(
    {
      location: {
        value: "",
        isValid: false
      },
      numberOfPeople: {
        value: "",
        isValid: false
      },
      dateAndTime: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const [isLocationForm, setIsLocationForm] = useState(true);

  const locations = ["Iztacalco", "Gustavo A Madero", "Nezahualcoyotl"];

  const submitReservationHandler = e => {
    e.preventDefault();
    console.log(formState);
  };

  const changeDateHandler = date => {
    console.log(date, '"jajajajajajejejejjijijiji"');
    formState.inputs.dateAndTime.value = date;
    formState.inputs.dateAndTime.isValid = true;
  };

  const selectLocationHandler = () => {
    setIsLocationForm(false);
    setFormData(
      {
        ...formState.inputs,
        numberOfPeople: { value: "", isValid: false },
        dateAndTime: {
          value: "",
          isValid: false
        }
      },
      formState.inputs.location.isValid &&
        formState.inputs.numberOfPeople.isValid &&
        formState.inputs.dateAndTime.isValid
    );
  };

  return (
    <>
      <div className={classes.locationMap}>
        <Map center={{ lat: 48.8583701, lng: 2.2922926 }} zoom={15} />
      </div>
      <form
        className={classes.locationForm}
        onSubmit={submitReservationHandler}
      >
        <h2>
          {isLocationForm
            ? "Busca tu pizzeria más cercana"
            : "Haz tu reservación "}
        </h2>
        {isLocationForm && (
          <Input
            typeElement="select"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE]}
            errorText="Debes de ingresar una delegación"
            id="location"
            title="Ubicación"
            items={locations}
          />
        )}

        {!isLocationForm && (
          <>
            <span>{formState.inputs.location.value}</span>
            <Input
              typeElement="select"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE]}
              errorText="Debes de ingresar un número de personas"
              id="numberOfPeople"
              items={[1, 2, 3, 4, 5]}
              title="#Personas"
            />
            <Input
              typeElement="dateAndTime"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE]}
              errorText="Debes de ingresar fecha y hora"
              id="dateAndTime"
            />
          </>
        )}
        {isLocationForm ? (
          <Button
            type="button"
            onClick={selectLocationHandler}
            disabled={formState.inputs.location.value === ""}
          >
            Buscar
          </Button>
        ) : (
          <Button type="submit" disabled={!formState.isValid}>
            Reservar
          </Button>
        )}
      </form>
    </>
  );
};

export default withStyles(styles)(LocationDesign);
