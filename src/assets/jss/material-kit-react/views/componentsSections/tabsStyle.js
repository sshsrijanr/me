import { title, container } from "assets/jss/material-kit-react.js";

const tabsStyle = {
  section: {
    background: "#EEEEEE",
    padding: "70px 0",
  },
  container,
  textCenter: {
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "20px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
};

export default tabsStyle;
