import sizes from "../../../styles/sizes/sizez";
import colors from "../../../styles/colors/colors";

const { white } = colors;

const styles = {
  btnMenu: {
    color: white,
    textTransform: "capitalize",
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  btnMenuResponsive: {
    color: white,
    textTransform: "capitalize",
    display: "block"
  },
  btnMenuItem: {
    textDecoration: "none",
    color: "black"
  }
};

export default styles;
