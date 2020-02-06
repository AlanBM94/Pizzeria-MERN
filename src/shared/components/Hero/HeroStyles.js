import colors from "../../../styles/colors/colors";

const { black, white, primary } = colors;

const styles = {
  hero: {
    background: black,
    width: "100%",
    height: "calc(100vh - 64px)",
    display: "flex"
  },
  heroContenido: {
    width: "50%",
    height: "100%",
    padding: "6rem 3.5rem 0 3.5rem",
    display: "flex",
    flexDirection: "column",
    "& button": {
      marginTop: "5rem",
      maxWidth: "15rem",
      color: white,
      background: primary,
      border: `2px solid ${primary}`,
      "&:hover": {
        background: "transparent",
        border: `2px solid ${primary}`,
        color: white
      }
    }
  },
  heroTexto: {
    "& h2": {
      fontFamily: "Noto Serif",
      textAlign: "left",
      color: white,
      fontSize: "3rem",
      fontWeight: "700"
    },
    "& span": {
      display: "block",
      color: white,
      marginTop: "-1.5rem",
      textAlign: "left",
      fontSize: "1.8rem",
      fontWeight: "400"
    }
  },
  heroImagen: {
    width: "50%",
    height: "100%",
    padding: "4rem 3.5rem 0 3.5rem"
  }
};

export default styles;
