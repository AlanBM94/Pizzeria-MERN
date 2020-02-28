import colors from "../../../styles/colors/colors";

const { blackBackground } = colors;

const styles = {
  backdrop: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    background: blackBackground,
    zIndex: "10"
  }
};

export default styles;
