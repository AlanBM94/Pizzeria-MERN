import sizes from "../../../styles/sizes/sizez";
import colors from "../../../styles/colors/colors";

const { black, white, primary, gray } = colors;

const styles = {
  Input: {
    width: "100%",
    textAlign: "center",
    background: white,
    border: "none",
    padding: "0.5rem 1rem",
    borderBottom: "2px solid transparent",
    "&:focus": {
      outline: "none",
      borderBottom: `2px solid ${primary}`
    }
  },
  formControl: {
    width: "10rem"
  }
};

export default styles;
