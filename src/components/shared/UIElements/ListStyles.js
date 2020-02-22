import colors from "../../../styles/colors/colors";
import sizes from "../../../styles/sizes/sizez";

const { primary, black, gray, white } = colors;

const styles = {
  ListContainer: {
    background: white,
    width: "100%",
    minHeight: "20rem",
    "& ul": {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      listDecoration: "none",
      padding: "0"
    },
    "& ul li:not(:first-child)": {
      marginTop: "1rem"
    }
  }
};

export default styles;
