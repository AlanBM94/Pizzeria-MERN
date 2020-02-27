import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import { AuthContext } from "../context/authContext";
import { MenuContext } from "../context/menuContext";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "./ItemStyles";

const Item = props => {
  const { classes, title, route } = props;
  const authContext = useContext(AuthContext);
  const menuContext = useContext(MenuContext);

  const selectMenuItem = () => {
    if (title === "Cerrar sesión")
      return <MenuItem onClick={authContext.logout}>{title}</MenuItem>;
    if (title === "Pizzas")
      return <MenuItem onClick={menuContext.selectPizzas}>{title}</MenuItem>;
    if (title === "Pastas")
      return <MenuItem onClick={menuContext.selectPastas}>{title}</MenuItem>;
    if (title === "Bebidas")
      return <MenuItem onClick={menuContext.selectDrinks}>{title}</MenuItem>;
    if (title === "Mis comentarios" || title === "Mis reservaciones")
      return <MenuItem>{title}</MenuItem>;
  };

  return (
    <Link to={route} className={classes.item}>
      {selectMenuItem()}
    </Link>
  );
};

export default withStyles(styles)(Item);
