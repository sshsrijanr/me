import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Email from "@material-ui/icons/Email.js";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function SectionContact() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h3 className={classes.title}>Want to Connect!</h3>
          <h4 className={classes.description}>
            You can connect with me on these Social Media Platforms or directly
            mail me. I will response back to you in a couple of hours.
          </h4>
          <center>
            <a
              href="mailto:srijan.ramavat@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button>
                <Email /> Mail
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/srijan-ramavat"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button color="info">
                <i className={classes.socials + " fab fa-linkedin"} /> Connect
              </Button>
            </a>
            <a
              href="https://instagram.com/srijan.ramavat"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button color="rose">
                <i className={classes.socials + " fab fa-instagram"} />
                Follow
              </Button>
            </a>
            <a
              href="https://github.com/srijan-ramavat"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button color="github">
                <i className={classes.socials + " fab fa-github"} /> Star
              </Button>
            </a>
          </center>
        </GridItem>
      </GridContainer>
    </div>
  );
}
