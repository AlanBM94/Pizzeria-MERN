import sizes from "../../../styles/sizes/sizez";
import colors from "../../../styles/colors/colors";

const { black, white, primary } = colors;

const styles = {
  root: {
    flexGrow: 1,
    "& a": {
      textDecoration: "none"
    }
  },
  grow: {
    flexGrow: 1,
    textAlign: "left",
    [sizes.down("xs")]: {
      textAlign: "right",
      paddingRight: "5px"
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {
    background: black,
    boxShadow: "none",
    padding: "0 4rem",
    [sizes.down("md")]: {
      padding: "0",
      height: "64px"
    }
  },
  btnNormal: {
    color: white,
    textTransform: "capitalize",
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  btnIniciarSesion: {
    margin: "0 1rem"
  },
  fullButton: {
    background: primary,
    border: `2px solid ${primary}`,
    color: white,
    transition: "all 0.2s ease",
    textTransform: "capitalize",
    marginLeft: "1rem",
    "&:hover": {
      background: "transparent",
      border: `2px solid ${primary}`,
      color: white
    },
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  logo: {
    textDecoration: "none",
    color: white,
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
