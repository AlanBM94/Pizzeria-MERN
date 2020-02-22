import React from "react";
import { withStyles } from "@material-ui/styles";

import Card from "../shared/UIElements/Card";
import styles from "./MenuStyles";
import pizza1 from "../../images/pizza-1.jpg";
import pizza2 from "../../images/pizza-2.jpg";
import pizza3 from "../../images/pizza-3.jpg";
import pizza4 from "../../images/pizza-4.jpg";
import pasta1 from "../../images/pasta-1.jpg";
import pasta2 from "../../images/pasta-2.jpg";
import pasta3 from "../../images/pasta-3.jpg";
import pasta4 from "../../images/pasta-4.jpg";
import bebida1 from "../../images/bebida-1.jpg";
import bebida2 from "../../images/bebida-2.jpg";
import bebida3 from "../../images/bebida-3.jpg";
import bebida4 from "../../images/bebida-4.jpg";

const Menu = props => {
  const { classes, type } = props;
  let cards;
  if (type === "pizzas") {
    cards = (
      <>
        <Card
          image={pizza1}
          category={type}
          title="Pizza de peperoni"
          description="Esta es una pizza de peperoni muy rica"
        />
        <Card
          image={pizza2}
          category={type}
          title="Pizza hawaiana"
          description="Esta es una pizza hawaiana muy rica"
        />
        <Card
          image={pizza3}
          category={type}
          title="Pizza de queso"
          description="Esta es una pizza de queso muy rica"
        />
        <Card
          image={pizza4}
          category={type}
          title="Pizza de carnes frías"
          description="Esta es una pizza de carnes frías muy rica"
        />
      </>
    );
  } else if (type === "pastas") {
    cards = (
      <>
        <Card
          image={pasta1}
          category={type}
          title="Esta es la primera pasta"
          description="Esta es la pasta 1 y está muy rica"
        />
        <Card
          image={pasta2}
          category={type}
          title="Esta es la segunda pasta"
          description="Esta es la pasta 2 y está muy rica"
        />
        <Card
          image={pasta3}
          category={type}
          title="Esta es la tercera pasta"
          description="Esta es la pasta 3 y está muy rica"
        />
        <Card
          image={pasta4}
          category={type}
          title="Esta es la cuarta pasta"
          description="Esta es la pasta 4 y está muy rica"
        />
      </>
    );
  } else {
    cards = (
      <>
        <Card
          image={bebida1}
          category={type}
          title="Esta es la primera bebida"
          description="Esta es la bebida 1 y está muy rica"
        />
        <Card
          image={bebida2}
          category={type}
          title="Esta es la segunda bebida"
          description="Esta es la bebida 2 y está muy rica"
        />
        <Card
          image={bebida3}
          category={type}
          title="Esta es la tercera bebida"
          description="Esta es la bebida 3 y está muy rica"
        />
        <Card
          image={bebida4}
          category={type}
          title="Esta es la cuarta bebida"
          description="Esta es la bebida 4 y está muy rica"
        />
      </>
    );
  }

  return (
    <div className={classes.container}>
      <h2>{type.toUpperCase()}</h2>
      <div className={classes.cardsContainer}>{cards}</div>
    </div>
  );
};

export default withStyles(styles)(Menu);
