import colors from "../../../styles/colors/colors";
import sizes from "../../../styles/sizes/sizez";

const { primary, black, gray, white } = colors;

const styles = {
  card: {
    height: "20rem",
    width: "15rem",
    perspective: "150rem",
    mozPerspective: "150rem",
    position: "relative",
    margin: 0,
    padding: 0,
    marginTop: "3rem",
    "&:hover": {
      cursor: "pointer"
    },
    "&:hover div:nth-child(1)": {
      transform: "rotateY(-180deg)"
    },
    "&:hover div:nth-child(2)": {
      transform: "rotateY(0)"
    },
    [sizes.down("md")]: {
      margin: "3rem 1rem"
    }
  },
  side: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    overflow: "hidden",
    transition: "all .6s ease"
  },
  frontSide: {},
  backSide: {
    position: "relative",
    transform: "rotateY(180deg)",
    background: black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    "& h3": {
      color: white,
      fontSize: "1.2rem",
      margin: "0"
    },
    "& p": {
      color: white,
      fontSize: "0.9rem",
      opacity: "0.8"
    }
  },
  cardImage: {
    width: "100%",
    height: "100%"
  },
  cardFooter: {
    background: primary,
    width: "100%",
    height: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    "& p:nth-child(1)": {
      fontSize: "0.9rem",
      fontWeight: "700",
      color: black,
      textTransform: "capitilize"
    },
    "& p:nth-child(2)": {
      fontSize: "0.9rem",
      fontWeight: "400",
      opacity: "0.6",
      borderBottom: `2px solid ${black}`,
      textTransform: "capitalize",
      transition: "all 0.3s ease",
      "&:hover": {
        opacity: "1"
      }
    }
  }
};

export default styles;
