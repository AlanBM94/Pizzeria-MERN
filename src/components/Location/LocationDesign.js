import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import { AuthContext } from "../shared/context/authContext";
import { useHttpClient } from "../shared/hooks/useHttp";
import { VALIDATOR_REQUIRE } from "../shared/utils/validator";
import Input from "../shared/FormComponents/Input";
import { useForm } from "../shared/hooks/useForm";
import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
import ErrorModal from "../shared/UIElements/ErrorModal";
import Map from "../shared/Map/Map";
import styles from "./LocationDesignStyles";

const LocationDesign = props => {
  const { classes } = props;
  const { sendRequest, isLoading, error, clearError } = useHttpClient();
  const [shop, setShop] = useState(null);
  const history = useHistory();
  const authContext = useContext(AuthContext);
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

  const noLocationValue = formState.inputs.location.value === "";

  const submitReservationHandler = async e => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        pizzaShop: formState.inputs.location.value._id,
        date: formState.inputs.dateAndTime.value,
        numberOfPeople: formState.inputs.numberOfPeople.value
      })
    );
    const responseData = await sendRequest(
      "http://localhost:5000/api/reservations/",
      "POST",
      JSON.stringify({
        pizzaShop: formState.inputs.location.value._id,
        date: new Date(formState.inputs.dateAndTime.value),
        numberOfPeople: formState.inputs.numberOfPeople.value
      }),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authContext.token
      }
    );
    if (responseData) {
      history.push("/misReservaciones");
    }
  };

  const setReservationData = () => {
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

  const findShopId = () => {
    let id;
    if (formState.inputs.location.value === "Iztacalco") id = "0001";
    if (formState.inputs.location.value === "Nezahualcoyotl") id = "0002";
    if (formState.inputs.location.value === "Gustavo A Madero") id = "0003";
    return id;
  };

  const selectLocationHandler = async () => {
    setIsLocationForm(false);
    setReservationData();
    const id = findShopId();
    const responseData = await sendRequest(
      `http://localhost:5000/api/pizzaShops/shop/${id}`
    );
    if (responseData) {
      const findedShop = responseData.pizzaShop[0];
      setShop(findedShop);
      setFormData({
        ...formState.inputs,
        location: {
          value: findedShop,
          isValid: true
        }
      });
    } else {
      setShop(null);
      setIsLocationForm(true);
    }
  };

  return (
    <>
      <ErrorModal error={error} clearError={clearError} />
      <div className={classes.locationMap}>
        <ErrorModal error={error} onClear={clearError} hasFooter />
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <Map
            center={
              (shop && shop.location.coordinates) || [-99.0693269, 19.4045178]
            }
            zoom={15}
            location={shop && shop.location.coordinates}
          />
        )}
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
        {isLocationForm && !shop && (
          <Input
            typeElement="select"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE]}
            errorText="Debes de ingresar una delegación"
            id="location"
            initialValue="Iztacalco"
            title="Ubicación"
            items={locations}
          />
        )}

        {!isLocationForm && shop && (
          <>
            <span>{formState.inputs.location.value.address}</span>
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
        {isLoading && <LoadingSpinner />}
        {isLocationForm ? (
          <Button
            type="button"
            onClick={selectLocationHandler}
            disabled={noLocationValue && !shop}
            className={
              noLocationValue ? classes.disabledButton : classes.activeButton
            }
          >
            Buscar
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={!formState.isValid}
            className={
              !formState.isValid ? classes.disabledButton : classes.activeButton
            }
          >
            Reservar
          </Button>
        )}
      </form>
    </>
  );
};

export default withStyles(styles)(LocationDesign);
