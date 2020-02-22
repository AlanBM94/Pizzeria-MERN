import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { white, black, primary } = colors;

const styles = {
  container: {
    padding: "0",
    margin: "4rem auto",
    height: "33rem",
    width: "88%",
    display: "flex",
    alignItems: "center",
    background: primary,
    [sizes.down("md")]: {
      flexDirection: "column"
    }
  },
  leftSideIngredients: {
    height: "100%",
    width: "60%",
    clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%);",
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
  rightSideIngredients: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "3rem",
    [sizes.down("md")]: {
      padding: "0"
    },
    "& h2": {
      fontFamily: "Oswald",
      fontSize: "2.3rem",
      fontWeight: "600",
      [sizes.down("md")]: {
        fontSize: "1.8rem"
      },
      [sizes.down("xs")]: {
        fontSize: "1.2rem"
      }
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: "400",
      marginTop: "-1rem",
      lineHeight: "1.8",
      [sizes.down("md")]: {
        width: "80%"
      },
      [sizes.down("xs")]: {
        fontSize: "0.8rem"
      }
    }
  },
  testimonials: {
    background: white,
    display: "flex",
    justifyContent: "space-between"
  },
  locationDesign: {
    height: "35rem",
    [sizes.down("md")]: {
      height: "60rem"
    }
  }
};

export default styles;
