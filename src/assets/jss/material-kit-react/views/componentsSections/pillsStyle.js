import { container, title } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginBottom: "20px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  image: {
    float: "left",
    margin: "0 2.5em 2em 0",
    top: "0.25em",
  },
  grid: {
    borderRadius: "5px",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)",
  },
};

export default pillsStyle;
