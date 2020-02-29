import React, { useEffect, useContext, useState } from "react";

import List from "../../components/shared/UIElements/List";
import ListItem from "../../components/shared/UIElements/ListItem";
import Navigation from "../../components/shared/Navigation/Navigation";
import LoadingSpinner from "../../components/shared/UIElements/LoadingSpinner";
import ErrorModal from "../../components/shared/UIElements/ErrorModal";
import { AuthContext } from "../../components/shared/context/authContext";
import { useHttpClient } from "../../components/shared/hooks/useHttp";
import { withStyles } from "@material-ui/styles";
import styles from "./MyReservationsStyles";

const MyReservations = props => {
  const { classes } = props;
  const authContext = useContext(AuthContext);
  const [loadedReservations, setLoadedReservations] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchReservations = async () => {
      const responseData = await sendRequest(
        `http://localhost:5000/api/reservations`,
        "GET",
        null,
        { Authorization: "Bearer " + authContext.token }
      );
      console.log(responseData);
      if (responseData) {
        console.log(responseData);
        setLoadedReservations(responseData.reservations);
      }
    };
    fetchReservations();
  }, []);

  const setDateAndHour = date => {
    return `${new Date(date).toDateString()} - ${new Date(
      date
    ).toLocaleTimeString("it-IT")}`;
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} hasFooter />
      <Navigation />
      <div className={classes.container}>
        <h2>Mis reservaciones</h2>
        <List>
          {isLoading && (
            <div style={{ margin: "5rem auto 0 auto" }}>
              <LoadingSpinner />
            </div>
          )}
          {loadedReservations.length === 0 && !isLoading && (
            <h3>No tienes reservaciones</h3>
          )}

          {loadedReservations &&
            !isLoading &&
            loadedReservations.map(comment => (
              <ListItem
                type="reservation"
                location={comment.shop.address}
                dateAndTime={setDateAndHour(comment.date)}
                numberOfPeople={`${comment.numberOfPeople} ${
                  comment.numberOfPeople === 1 ? "persona" : "personas"
                }`}
              />
            ))}
        </List>
      </div>
    </>
  );
};

export default withStyles(styles)(MyReservations);
