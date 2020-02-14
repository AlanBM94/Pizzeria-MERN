import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary, gray } = colors;

const styles = {
  locationMap: {
    height: "100%",
    width: "55%",
    clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%);",
    background: gray,
    [sizes.down("md")]: {
      clipPath: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end"
    },
    [sizes.down("xs")]: {
      height: "45%"
    }
  },
  locationForm: {
    background: white,
    height: "80%",
    width: "30%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    "& h2": {
      margin: "0",
      color: black,
      fontFamily: "Noto Serif",
      fontSize: "1.2rem"
    },
    "& button": {
      width: "40%",
      background: primary,
      color: black,
      fontWeight: "700",
      "&:hover": {
        background: primary
      }
    }
  },
  formControl: {
    "& div": {
      width: "10rem"
    }
  }
};

export default styles;
