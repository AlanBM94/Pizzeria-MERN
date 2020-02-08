import sizes from "../styles/sizes/sizez";

const styles = {
  Icon: {
    width: "70%",
    height: "70%",
    [sizes.down("md")]: {
      width: "75%",
      height: "50%"
    }
  }
};

export default styles;
