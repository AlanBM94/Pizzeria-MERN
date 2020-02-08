import sizes from "../styles/sizes/sizez";

const styles = {
  tomato: {
    height: "33rem",
    [sizes.down("md")]: {
      height: "13rem"
    },
    [sizes.down("xs")]: {
      height: "7rem",
      width: "7rem",
      borderRadius: "14rem"
    }
  }
};

export default styles;
