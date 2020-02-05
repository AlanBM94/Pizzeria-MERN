import sizes from "../../../sizes/sizez";

const styles = {
  sideDrawer: {
    height: "100vh",
    padding: "1rem 0 20rem 0",
    zIndex: "10",
    width: "200px",
    position: "fixed",
    background: "#FEC600",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    btnMenuResponsive: {
      [sizes.down("xs")]: {
        display: "block"
      }
    }
  }
};

export default styles;
