import sizes from "../styles/sizes/sizez";

const styles = {
  tomato: {
    height: "33rem",
    [sizes.down("md")]: {
      height: "13rem"
    },
    [sizes.down("xs")]: {
      height: "7rem"
    }
  }
};

export default styles;
