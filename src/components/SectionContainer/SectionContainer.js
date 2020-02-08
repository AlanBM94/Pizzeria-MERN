import React from "react";
import { withStyles } from "@material-ui/styles";

import Tomato from "../../images/Tomato";
import Testimonial from "../Testimonial/Testimonial";
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

  const testimonial = (
    <>
      <Testimonial text="Las mejores pizzas que he probado." />
      <Testimonial text="Todos los ingredientes son frescos y de gran calidad." />
      <Testimonial text="Las reservaciones son siempre seguras y el trato es muy bueno." />
    </>
  );

  const location = (
    <>
      <div className={classes.leftSideLocation}>here is the form</div>
      <div className={classes.leftSideLocation}>here is the map</div>
    </>
  );

  const selectType = type => {
    if (type === "ingredients") return ingredients;
    if (type === "testimonials") return testimonial;
    if (type === "location") return location;
  };

  const selectClassName = (type, classes) => {
    if (type === "testimonials") return classes.testimonials;
    if (type === "location") return classes.location;
  };

  return (
    <div
      className={`${classes.container} ${selectClassName(props.type, classes)}`}
    >
      {selectType(props.type)}
    </div>
  );
};

export default withStyles(styles)(SectionContainer);
