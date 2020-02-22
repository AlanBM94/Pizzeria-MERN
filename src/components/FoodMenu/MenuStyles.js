import sizes from "../../styles/sizes/sizez";
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
      fontFamily: "Oswald",
      fontSize: "2rem",
      fontWeight: "700"
    },
    [sizes.down("xs")]: {
      padding: "2rem 3rem"
    }
  },
  cardsContainer: {
    width: "100%",
    height: "100%",
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [sizes.down("sm")]: {
      justifyContent: "center"
    }
  }
};

export default styles;
