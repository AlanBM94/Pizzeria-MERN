import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { VALIDATOR_REQUIRE } from "../shared/utils/validator";
import Input from "../shared/FormComponents/Input";
import { useForm } from "../shared/hooks/useForm";
import Map from "../shared/Map/Map";
import styles from "./LocationDesignStyles";

const LocationDesign = props => {
  const { classes } = props;
  const [formState, inputHandler] = useForm(
    {
      location: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const [isLocationForm, setIsLocationForm] = useState(true);
  const [locationValue, setLocationValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const locations = ["Iztacalco", "Gustavo A Madero", "Nezahualcoyotl"];

  const submitLocationForm = e => {
    e.preventDefault();
    setLocationValue(formState.inputs.location.value);
    setIsLocationForm(false);
  };

  return (
    <>
      <div className={classes.locationMap}>
        <Map center={{ lat: 48.8583701, lng: 2.2922926 }} zoom={15} />
      </div>
      <form className={classes.locationForm} onSubmit={submitLocationForm}>
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
            <Input
              typeElement="input"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE]}
              errorText="El correo electrónico es necesario"
              placeholder={locationValue}
              id="email"
              disabled
            />
            <Input
              typeElement="select"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE]}
              errorText="Debes de ingresar un número de personas"
              id="numeroPersonas"
              items={[1, 2, 3, 4, 5]}
              title="#Personas"
            />

            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </>
        )}
        <Button disabled={!formState.isValid} type="submit">
          {isLocationForm ? "Buscar" : "Reservar"}
        </Button>
      </form>
    </>
  );
};

export default withStyles(styles)(LocationDesign);
