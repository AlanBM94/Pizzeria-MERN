import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary, gray } = colors;

const styles = {
  formButton: {
    width: "100%",
    fontWeight: "700",
    background: primary,
    color: white,
    "&:hover": {
      background: primary
    }
  },
  activeButton: {
    background: `${gray}!important`
  },
  formContainer: {
    height: "calc(100vh - 140px)",
    margin: "0",
    padding: "0",
    width: "25rem",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    background: gray,
    width: "80%",
    height: "25rem",
    "& form": {
      height: "70%",
      padding: " 2rem 4rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      "& input": {
        width: "100%",
        textAlign: "center",
        background: white,
        border: "none",
        padding: "0.5rem 1rem",
        borderBottom: "2px solid transparent",
        "&:focus": {
          outline: "none",
          borderBottom: `2px solid ${primary}`
        }
      }
    }
  },
  formNav: {
    height: "15%",
    display: "flex",
    background: primary,
    "& button": {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "1rem",
      textAlign: "center",
      fontWeight: "700",
      color: black,
      "&:focus": {
        outline: "none"
      }
    }
  }
};

export default styles;
