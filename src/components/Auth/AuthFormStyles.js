import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary, gray, red } = colors;

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
    height: "100vh",
    margin: "0",
    padding: "0",
    width: "25rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [sizes.down("xs")]: {
      width: "20rem"
    }
  },
  form: {
    background: gray,
    width: "80%",
    height: "25rem",
    position: "relative",
    "& a:nth-child(1)": {
      position: "absolute",
      top: "-3rem",
      left: "4.5rem",
      textDecoration: "none",
      fontFamily: "Noto Serif",
      fontWeight: "700",
      fontSize: "1.5rem",
      color: black,
      [sizes.down("xs")]: {
        left: "17%"
      }
    },
    "& a": {
      textDecoration: "none",
      color: primary,
      fontWeight: "700"
    },
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
      },
      "& p": {
        fontSize: "0.8rem",
        fontWeight: "700",
        color: red,
        margin: "0",
        padding: "0"
      }
    }
  },
  formSignUp: {
    height: "30rem",
    marginTop: "5rem",
    "& form": {
      height: "75%",
      padding: "1rem 4rem"
    }
  },
  formNav: {
    height: "3.5rem",
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
