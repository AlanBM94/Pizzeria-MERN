import React from "react";
import { withStyles } from "@material-ui/styles";

import Tomato from "../../images/Tomato";
import styles from "./SectionContainerStyles";

const SectionContainer = props => {
  const { classes } = props;
  const ingredients = (
    <>
      <div className={classes.leftSideIngredients}>
        <Tomato />
      </div>
      <div className={classes.rightSideIngredients}>
        <h2>Contamos con los mejores ingredientes</h2>
        <p>
          La gente sabe que puede confiar en la seguridad y calidad de nuestros
          productos. La confianza es importante para nosotros – tanto que
          proporcionar alimentos seguros para su consumo está en la parte
          central de nuestros valores. Esa es la razón por la que trabajamos
          arduamente para fabricar productos de calidad que deleiten a nuestros
          consumidores.
        </p>
      </div>
    </>
  );
  const location = (
    <>
      <div className={classes.leftSideLocation}>here is the form</div>
      <div className={classes.leftSideLocation}>here is the map</div>
    </>
  );
  return (
    <div className={classes.container}>
      {props.type === "ingredients" ? ingredients : location}
    </div>
  );
};

export default withStyles(styles)(SectionContainer);
