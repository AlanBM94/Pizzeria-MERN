import sizes from "../../../sizes/sizez";
const styles = {
  root: {
    flexGrow: 1,
    "& a": {
      textDecoration: "none"
    }
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
    boxShadow: "none",
    padding: "0 2rem",
    [sizes.down("xs")]: {
      height: "64px",
      padding: "0"
    }
  },
  btnNormal: {
    color: "#ffff",
    textTransform: "capitalize",
    [sizes.down("xs")]: {
      display: "none"
    }
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
    },
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  logo: {
    textDecoration: "none",
    color: "#ffff",
    fontFamily: "Noto Serif",
    fontWeight: "700"
  },
  btnBurguer: {
    display: "none",
    [sizes.down("xs")]: {
      width: "2rem",
      height: "2rem",
      background: "transparent",
      border: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      marginRight: "1.5rem",
      cursor: "pointer",
      "&:focus": {
        outline: "none"
      },
      "& span": {
        display: "block",
        width: "2rem",
        height: "2.5px",
        background: "white"
      }
    }
  }
};

export default styles;
