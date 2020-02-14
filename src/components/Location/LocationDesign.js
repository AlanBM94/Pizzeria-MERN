import React from "react";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Map from "../shared/Map/Map";

import styles from "./LocationDesignStyles";

const LocationDesign = props => {
  const { classes } = props;
  return (
    <>
      <div className={classes.locationMap}></div>
      <form className={classes.locationForm}>
        <h2>Busca tu pizzeria más cercana</h2>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-simple">Ubicación</InputLabel>
          <Select>
            <MenuItem value={10}>Iztacalco</MenuItem>
            <MenuItem value={20}>Neza</MenuItem>
            <MenuItem value={30}>Gustavo A Madero</MenuItem>
          </Select>
        </FormControl>
        <Button>Buscar</Button>
      </form>
    </>
  );
};

export default withStyles(styles)(LocationDesign);
