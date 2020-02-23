import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";

import Item from "./Item";
import styles from "./MenuStyles";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    this.props.closeResponsiveMenu();
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, type } = this.props;
    let items;
    if (type === "menu") {
      items = [
        <Item route="/pizzas" title="Pizzas" />,
        <Item route="/pastas" title="Pastas" />,
        <Item route="/bebidas" title="Bebidas" />
      ];
    } else {
      items = [
        <Item route="/misComentarios" title="Mis comentarios" />,
        <Item route="/misReservaciones" title="Mis reservaciones" />,
        <Item route="/" title="Cerrar sesión" />
      ];
    }

    return (
      <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={
            this.props.responsive
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
          onClose={this.handleClose}
        >
          {items}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
