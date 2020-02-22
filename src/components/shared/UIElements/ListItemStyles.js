import colors from "../../../styles/colors/colors";
import sizes from "../../../styles/sizes/sizez";

const { primary, black, gray, white, red } = colors;

const styles = {
  ListItem: {
    minHeight: "5rem",
    background: gray,
    width: "90%",
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "5px",
    [sizes.down("md")]: {
      flexDirection: "column"
    },
    "& img": {
      width: "4rem",
      height: "4rem",
      borderRadius: "8rem",
      marginRight: "1rem"
    },
    "& p": {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "1rem",
      width: "100%",
      height: "100%",
      color: black,
      [sizes.down("md")]: {
        overflow: "scroll!important"
      }
    },
    "& div": {
      marginLeft: "auto",
      display: "flex",
      "& button": {
        opacity: "0.8",
        transition: "all 0.3s ease",
        "&:hover": {
          opacity: "1"
        }
      },
      "& button:nth-child(1)": {
        background: primary,
        border: "2px solid transparent",
        marginRight: "1rem",
        [sizes.down("md")]: {
          marginRight: "0",
          marginBottom: "1rem"
        }
      },
      "& button:nth-child(2)": {
        background: red,
        border: "2px solid transparent"
      },
      [sizes.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
      }
    }
  }
};

export default styles;
