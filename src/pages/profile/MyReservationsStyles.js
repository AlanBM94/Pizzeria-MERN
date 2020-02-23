import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary } = colors;

const styles = {
  container: {
    minHeight: "40rem",
    width: "100%",
    padding: "2rem 5.5rem",
    "& h2": {
      margin: "0",
      marginTop: "1rem",
      marginBottom: "3rem",
      fontFamily: "Oswald",
      fontSize: "2rem",
      fontWeight: "700"
    },
    [sizes.down("xs")]: {
      padding: "2rem 3rem"
    }
  }
};

export default styles;
