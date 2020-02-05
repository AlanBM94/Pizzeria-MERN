import sizes from "../../../sizes/sizez";
const styles = {
  btnMenu: {
    color: "#ffff",
    textTransform: "capitalize",
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  btnMenuResponsive: {
    color: "#ffff",
    textTransform: "capitalize",
    display: "block"
  },
  btnMenuItem: {
    textDecoration: "none",
    color: "black"
  }
};

export default styles;
