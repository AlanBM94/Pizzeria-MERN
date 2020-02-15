import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { white, black, primary, gray } = colors;

const styles = {
  testimonial: {
    width: "18rem",
    background: gray,
    height: "15rem",
    display: "flex",
    flexDirection: "column",
    borderLeft: `6px solid ${primary}`,
    boxShadow: `2px 2px 3px ${black}`,
    [sizes.down("md")]: {
      height: "8rem"
    },
    [sizes.down("xs")]: {
      width: "100%"
    }
  },
  testimonialImage: {
    alignSelf: "end",
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    [sizes.down("md")]: {
      height: "45%"
    },
    "& img": {
      width: "5rem",
      height: "5rem",
      borderRadius: "10rem",
      [sizes.down("md")]: {
        width: "3rem",
        height: "3rem",
        borderRadius: "6rem"
      }
    }
  },
  testimonialText: {
    height: "50%",
    display: "flex",
    padding: "0 1.3rem",
    justifyContent: "center",
    alignItems: "flex-start",
    "& span": {
      fontFamily: "Noto Serif",
      fontWeight: "700",
      fontSize: "1.5rem",
      padding: "3px",
      color: primary
    },
    "& p": {
      color: black,
      fontSize: "1rem",
      fontFamily: "Open Sans",
      fontWeight: "700",
      [sizes.down("md")]: {
        fontSize: "0.8rem",
        margin: "0"
      }
    }
  }
};

export default styles;
