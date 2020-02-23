import React from "react";

import List from "../../components/shared/UIElements/List";
import ListItem from "../../components/shared/UIElements/ListItem";
import Navigation from "../../components/shared/Navigation/Navigation";
import { withStyles } from "@material-ui/styles";
import styles from "./MyReservationsStyles";

const MyReservations = props => {
  const { classes } = props;
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <h2>Mis reservaciones</h2>
        <List>
          <ListItem
            type="reservation"
            location="Iztacalco"
            dateAndTime="20 de Febrero - 12:30pm"
            numberOfPeople="3 personas"
          />
          <ListItem
            type="reservation"
            location="Iztacalco"
            dateAndTime="20 de Febrero - 12:30pm"
            numberOfPeople="3 personas"
          />
          <ListItem
            type="reservation"
            location="Iztacalco"
            dateAndTime="20 de Febrero - 12:30pm"
            numberOfPeople="3 personas"
          />
          <ListItem
            type="reservation"
            location="Iztacalco"
            dateAndTime="20 de Febrero - 12:30pm"
            numberOfPeople="3 personas"
          />
          <ListItem
            type="reservation"
            location="Iztacalco"
            dateAndTime="20 de Febrero - 12:30pm"
            numberOfPeople="3 personas"
          />
          <ListItem
            type="reservation"
            location="Iztacalco"
            dateAndTime="20 de Febrero - 12:30pm"
            numberOfPeople="3 personas"
          />
        </List>
      </div>
    </>
  );
};

export default withStyles(styles)(MyReservations);
