// import sizes from "../../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary, gray } = colors;

const styles = {
  container: {
    minHeight: "40rem",
    width: "100%",
    padding: "2rem 5.5rem",
    "& h2": {
      margin: "0",
      marginTop: "1rem",
      fontFamily: "Noto Serif",
      fontSize: "2rem",
      fontWeight: "700"
    }
  },
  cardsContainer: {
    width: "100%",
    height: "40rem",
    marginTop: "4rem",
    display: "flex",
    justifyContent: "space-between"
  }
};

export default styles;
