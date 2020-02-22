import sizes from "../../../styles/sizes/sizez";

import colors from "../../../styles/colors/colors";

const { black, white, shadow, primary } = colors;

const styles = {
  modal: {
    zIndex: "100",
    position: "fixed",
    top: "15vh",
    left: "10%",
    width: "80%",
    background: white,
    boxShadow: shadow,
    borderRadius: "8px",
    [sizes.down("md")]: {
      left: "calc(50% - 20rem)",
      width: "40rem"
    },
    [sizes.down("sm")]: {
      left: "calc(50% - 10rem)",
      width: "20rem"
    },
    [sizes.down("xs")]: {
      top: "7vh",
      left: "calc(50% - 9rem)",
      width: "18rem"
    },
    "& button": {
      border: `2px solid ${primary}`,
      color: white,
      padding: "0.5rem 2rem"
    }
  },
  modalHeader: {
    width: "100%",
    padding: "1rem 0.5rem",
    background: primary,
    color: white,
    "& h2": {
      margin: "0.5rem"
    }
  },
  modalContent: {
    padding: "1rem 0.5rem",
    minHeight: "20rem"
  },
  modalFooter: {
    padding: "1rem 0.5rem",
    background: black
  }
};

export default styles;
