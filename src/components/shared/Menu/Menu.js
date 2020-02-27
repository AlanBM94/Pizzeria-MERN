import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import Item from "./Item";
import styles from "./MenuStyles";

const SimpleMenu = props => {
  const [anchorEl, setAnchorEl] = useState();
  const { classes, type, closeResponsiveMenu } = props;
  let items;
  if (type === "menu") {
    items = [
      <Item key="pizzas" route="/pizzas" title="Pizzas" />,
      <Item key="pastas" route="/pastas" title="Pastas" />,
      <Item key="bebidas" route="/bebidas" title="Bebidas" />
    ];
  } else {
    items = [
      <Item
        key="misComentarios"
        route="/misComentarios"
        title="Mis comentarios"
      />,
      <Item
        key="misReservaciones"
        route="/misReservaciones"
        title="Mis reservaciones"
      />,
      <Item key="cerrarSesión" route="/" title="Cerrar sesión" />
    ];
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    closeResponsiveMenu();
  };

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className={
          props.responsive
            ? `${classes.btnMenuResponsive}`
            : `${classes.btnMenu}`
        }
      >
        {type === "menu" ? "Menú" : "Perfil"}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div onClick={handleClose}>{items}</div>
      </Menu>
    </div>
  );
};

export default withStyles(styles)(SimpleMenu);
