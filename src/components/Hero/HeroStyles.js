import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary } = colors;

const styles = {
  hero: {
    background: black,
    width: "100%",
    height: "calc(100vh - 64px)",
    display: "flex",
    [sizes.down("md")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  heroContenido: {
    width: "50%",
    height: "100%",
    padding: "6rem 5.5rem 0 5.5rem",
    display: "flex",
    flexDirection: "column",
    "& a": {
      width: "215px",
      display: "flex",
      textDecoration: "none",
      [sizes.down("md")]: {
        margin: "0 auto"
      }
    },
    [sizes.down("md")]: {
      padding: "3rem 5.5rem",
      width: "100%"
    },
    [sizes.down("sm")]: {
      padding: "3rem 0",
      height: "52%"
    },
    "& button": {
      marginTop: "5rem",
      width: "100%",
      color: white,
      background: "transparent",
      border: `2px solid ${primary}`,
      [sizes.down("md")]: {
        margin: "2rem auto"
      },

      "&:hover": {
        background: primary,
        border: `2px solid ${primary}`,
        color: white
      }
    }
  },
  heroTexto: {
    "& h2": {
      fontFamily: "Oswald",
      textAlign: "left",
      color: white,
      fontSize: "3rem",
      fontWeight: "600",
      [sizes.down("md")]: {
        fontSize: "2.5rem",
        textAlign: "center"
      },
      [sizes.down("sm")]: {
        fontSize: "1.8rem",
        textAlign: "center"
      }
    },
    "& span": {
      display: "block",
      color: white,
      marginTop: "-1.5rem",
      textAlign: "left",
      fontSize: "1.8rem",
      fontWeight: "400",
      [sizes.down("md")]: {
        fontSize: "1.3rem",
        textAlign: "center"
      },
      [sizes.down("sm")]: {
        fontSize: "1rem",
        textAlign: "center"
      }
    }
  },
  heroImagen: {
    width: "50%",
    height: "100%",
    padding: "4rem 3.5rem 0 3.5rem",
    [sizes.down("md")]: {
      padding: "0",
      height: "45%"
    }
  }
};

export default styles;
