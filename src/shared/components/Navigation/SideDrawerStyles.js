import sizes from "../../../sizes/sizez";

const styles = {
  sideDrawer: {
    height: "100vh",
    padding: "1rem 0 25rem 0",
    zIndex: "10",
    width: "60%",
    position: "fixed",
    background: "#FEC600",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    "& a": {
      textDecoration: "none"
    }
  },
  btnNavResponsive: {
    marginTop: "1.5rem"
  }
};

export default styles;
