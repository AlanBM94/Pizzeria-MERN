import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.btnMenu}
        >
          Menú
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/pizzas" className={classes.btnMenuItem}>
            <MenuItem onClick={this.handleClose}>Pizzas</MenuItem>
          </Link>
          <Link to="/pastas" className={classes.btnMenuItem}>
            <MenuItem onClick={this.handleClose}>Pastas</MenuItem>
          </Link>
          <Link to="/bebidas" className={classes.btnMenuItem}>
            <MenuItem onClick={this.handleClose}>Bebidas</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
