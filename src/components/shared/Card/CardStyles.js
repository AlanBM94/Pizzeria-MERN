import colors from "../../../styles/colors/colors";

const { primary, black, gray } = colors;

const styles = {
  card: {
    height: "20rem",
    width: "15rem",
    perspective: "150rem",
    mozPerspective: "150rem",
    position: "relative",
    margin: 0,
    padding: 0,
    "&:hover": {
      cursor: "pointer"
    },
    "&:hover div:nth-child(1)": {
      transform: "rotateY(-180deg)"
    },
    "&:hover div:nth-child(2)": {
      transform: "rotateY(0)"
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
  frontSide: {
    background: "red"
  },
  backSide: {
    position: "relative",
    transform: "rotateY(180deg)",
    background: primary
  },
  cardImage: {
    width: "100%",
    height: "100%"
  }
};

export default styles;
