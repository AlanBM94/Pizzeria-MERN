import React from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

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

  const locations = [
    {
      val: "IZT",
      name: "Iztacalco"
    },
    {
      val: "GAM",
      name: "Gustavo A Madero"
    },
    {
      val: "NZ",
      name: "Nezahualcoyotl"
    }
  ];

  return (
    <>
      <div className={classes.locationMap}>
        <Map center={{ lat: 48.8583701, lng: 2.2922926 }} zoom={15} />
      </div>
      <form className={classes.locationForm}>
        <h2>Busca tu pizzeria más cercana</h2>
        <Input
          typeElement="select"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE]}
          errorText="Debes de ingresar una delegación"
          id="location"
          locations={locations}
        />
        <Button disabled={!formState.isValid}>Buscar</Button>
      </form>
    </>
  );
};

export default withStyles(styles)(LocationDesign);
