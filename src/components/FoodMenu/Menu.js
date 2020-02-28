import React, { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../shared/hooks/useHttp";
import { withStyles } from "@material-ui/styles";
import { MenuContext } from "../shared/context/menuContext";
import Card from "../shared/UIElements/Card";
import styles from "./MenuStyles";
import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
import ErrorModal from "../shared/UIElements/ErrorModal";

const Menu = props => {
  const { classes, type } = props;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedFood, setLoadedFood] = useState();
  const menuContext = useContext(MenuContext);
  const { category } = menuContext;
  const selectedType = type.slice(0, -1);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/food/${selectedType}`
        );
        setLoadedFood(responseData.food);
      } catch (error) {}
    };
    fetchFood();
  }, [sendRequest, category]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div className={classes.container}>
        <h2>{type.toUpperCase()}</h2>
        <div className={classes.cardsContainer}>
          {isLoading && (
            <div style={{ margin: "5rem auto 0 auto" }}>
              <LoadingSpinner />
            </div>
          )}
          {!isLoading &&
            loadedFood &&
            loadedFood.map(food => (
              <Card
                key={food._id}
                id={food._id}
                image={food.image}
                category={food.category}
                title={food.title}
                description={food.description}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Menu);
