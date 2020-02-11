import sizes from "../../styles/sizes/sizez";
import colors from "../../styles/colors/colors";

const { black, white, primary } = colors;

const styles = {
  gallery: {
    background: "white",
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    gridGap: "1rem",
    "& div:nth-child(1)": {
      gridRow: "1 / 3",
      gridColumn: "1 / 3",
      "& img": {
        width: "300px",
        height: "170px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(2)": {
      gridRow: "1 / 1",
      gridColumn: "3 / 4",
      "& img": {
        width: "140px",
        height: "80px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(3)": {
      gridRow: "1 / 3",
      gridColumn: "4 / 6",
      "& img": {
        width: "300px",
        height: "170px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(4)": {
      gridRow: "1 / 2",
      gridColumn: "6 / -1",
      "& img": {
        width: "140px",
        height: "80px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(5)": {
      gridRow: "2 / 3",
      gridColumn: "3 / 4",
      "& img": {
        width: "140px",
        height: "75px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(6)": {
      gridRow: "2 / 3",
      gridColumn: "6 / -1",
      "& img": {
        width: "140px",
        height: "80px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(7)": {
      gridRow: "3 / 6",
      gridColumn: "5 / -1",
      "& img": {
        width: "300px",
        height: "280px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(8)": {
      gridRow: "3 / 5",
      gridColumn: "3 / 5",
      "& img": {
        width: "300px",
        height: "180px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(9)": {
      gridRow: "6 / 7",
      gridColumn: "3 / 5",
      "& img": {
        width: "350px",
        height: "80px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(10)": {
      gridRow: "3 / -1",
      gridColumn: "1 / 3",
      "& img": {
        width: "300px",
        height: "350px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(11)": {
      gridRow: "5 / 6",
      gridColumn: "3 / 5",
      "& img": {
        width: "350px",
        height: "80px",
        objectFit: "cover",
        display: "block"
      }
    },
    "& div:nth-child(12)": {
      gridRow: "6 / 7",
      gridColumn: "5 / -1",
      "& img": {
        width: "350px",
        height: "80px",
        objectFit: "cover",
        display: "block"
      }
    }
  }
};

export default styles;
