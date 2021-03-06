import colors from "../../../styles/colors/colors";

const { black, white } = colors;

const styles = {
  footer: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "80px" /* Height of the footer */,
    background: black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      color: white
    }
  }
};

export default styles;
