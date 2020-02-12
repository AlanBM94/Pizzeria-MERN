import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import PizzaIcon from "../../svg/PizzaIcon";

import styles from "./HeroStyles";

const Hero = props => {
  const { classes } = props;
  return (
    <div className={classes.hero}>
      <div className={classes.heroContenido}>
        <div className={classes.heroTexto}>
          <h2>Las mejores pizzas</h2>
          <span> con los ingredientes más selectos.</span>
        </div>
        <Link to="/ubicacion">
          <Button>Ubicación</Button>
        </Link>
      </div>
      <div className={classes.heroImagen} style={{ color: "white" }}>
        <PizzaIcon />
      </div>
    </div>
  );
};

export default withStyles(styles)(Hero);
