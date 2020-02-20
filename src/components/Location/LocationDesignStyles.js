import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary, gray, red } = colors;

const styles = {
  disabledButton: {
    opacity: 0.6
  },
  activeButton: {
    opacity: 1
  },
  locationMap: {
    height: "100%",
    width: "55%",
    clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%);",
    background: gray,
    overflow: "hidden",
    [sizes.down("md")]: {
      clipPath: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      width: "100%"
    },
    [sizes.down("xs")]: {
      height: "45%"
    }
  },
  locationForm: {
    background: white,
    minHeight: "80%",
    width: "30%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",

    "& div div input": {
      border: "none",
      height: "2rem",
      width: "80%",
      background: gray,
      color: black,
      padding: "1rem"
    },
    [sizes.down("md")]: {
      width: "100%",
      margin: "0",
      background: gray
    },
    "& h2": {
      margin: "0",
      color: black,
      fontFamily: "Noto Serif",
      fontSize: "1.2rem"
    },
    "& button:last-child ": {
      width: "40%",
      background: primary,
      color: black,
      fontWeight: "700",
      "&:hover": {
        background: primary
      }
    },
    "& input": {
      background: gray,
      width: "50%"
    },
    "& p": {
      color: red,
      fontSize: "0.8rem",
      height: "1rem",
      fontWeight: "700",
      marginTop: "-2rem"
    }
  }
};

export default styles;
