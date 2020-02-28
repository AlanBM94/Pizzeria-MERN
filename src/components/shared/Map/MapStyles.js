import sizes from "../../../styles/sizes/sizez";

const styles = {
  map: {
    width: "80%",
    height: "80%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    [sizes.down("md")]: {
      width: "100%",
      height: "100%",
      top: "0",
      left: "0"
    }
  }
};

export default styles;
