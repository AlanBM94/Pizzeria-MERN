import colors from "../../../styles/colors/colors";
import sizes from "../../../styles/sizes/sizez";

const { primary, black, gray, white, red } = colors;

const styles = {
  listItem: {
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
      textAlign: "left",
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
        color: white,
        fontWeight: "600",
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
  },
  reservationItem: {
    background: gray,
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      [sizes.down("md")]: {
        overflow: "visible!important"
      }
    },

    [sizes.down("md")]: {
      flexDirection: "row",
      width: "100%"
    },
    [sizes.down("xs")]: {
      flexDirection: "column"
    },

    "& p": {
      fontSize: "1rem",
      fontFamily: "Open Sans",
      fontWeight: "400",
      color: black,
      alignSelf: "center",
      margin: "0",
      textAlign: "right",
      [sizes.down("md")]: {
        overflow: "visible!important"
      },
      [sizes.down("xs")]: {
        textAlign: "center"
      }
    }
  },
  mainInfoContainer: {
    display: "flex",
    flexDirection: "column",
    width: "15rem",
    alignItems: "flex-start!important",
    [sizes.down("md")]: {
      alignItems: "flex-start"
    },

    "& h3": {
      fontSize: "1.2rem",
      fontFamily: "Oswald",
      fontWeight: "600",
      color: black,
      margin: "0",
      [sizes.down("xs")]: {
        alignSelf: "center"
      }
    },
    "& p": {
      fontSize: "1rem",
      fontFamily: "Open Sans",
      fontWeight: "400",
      color: black,
      margin: "0",
      textAlign: "left",
      [sizes.down("xs")]: {
        textAlign: "center"
      }
    }
  }
};

export default styles;
