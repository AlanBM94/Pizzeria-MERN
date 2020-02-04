const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "left"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {
    background: "#131212",
    boxShadow: "none"
  },
  btnNormal: {
    color: "#ffff",
    textTransform: "capitalize"
  },
  btnIniciarSesion: {
    margin: "0 1rem"
  },
  fullButton: {
    background: "#FEC600",
    border: "2px solid #FEC600",
    color: "#ffff",
    transition: "all 0.2s ease",
    textTransform: "capitalize",
    marginLeft: "1rem",
    "&:hover": {
      background: "transparent",
      border: "2px solid #FEC600",
      color: "#ffff"
    }
  },
  logo: {
    textDecoration: "none",
    color: "#ffff"
  }
};

export default styles;
