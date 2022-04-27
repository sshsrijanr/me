import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import DjangoIcon from "assets/img/django.png";
import ReactIcon from "assets/img/react.jpg";
import VueIcon from "assets/img/vue.jpeg";
import PGIcon from "assets/img/postgres.jpeg";
import DRFIcon from "assets/img/dj_rest.jpeg";
import MavenIcon from "assets/img/maven.svg";
import FirebaseIcon from "assets/img/firebase.jpeg";
import JenkinsIcon from "assets/img/jenkins.jpeg";
import MysqlIcon from "assets/img/mysql.png";
import FastlaneIcon from "assets/img/fastlane.jpeg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTools() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Let{"'"}s talk tech</h3>
          <h4 className={classes.description}>
            Here are some of the Framework/Mirco-services/Tools I work alot
            with...
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={2}>
            <img
              src={DjangoIcon}
              width="70"
              height="70"
              alt="django-logo"
            ></img>
            <h5 className={classes.title}>Django</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img src={DRFIcon} width="120" height="70" alt="drf-logo"></img>
            <h5 className={classes.title}>DRF</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img src={ReactIcon} width="70" height="70" alt="react-logo"></img>
            <h5 className={classes.title}>React JS</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img src={VueIcon} width="70" height="70" alt="vue-logo"></img>
            <h5 className={classes.title}>Vue JS</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img
              src={MavenIcon}
              width="120"
              height="70"
              alt="maven-logo"
            ></img>
            <h5 className={classes.title}>Maven(Java)</h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={2}>
            <img src={MysqlIcon} width="70" height="70" alt="mysql"></img>
            <h5 className={classes.title}>MySQL</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img src={PGIcon} width="70" height="70" alt="postgres-logo"></img>
            <h5 className={classes.title}>PostgreSQL</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img
              src={FirebaseIcon}
              width="70"
              height="70"
              alt="firebase-logo"
            ></img>
            <h5 className={classes.title}>Firebase</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img src={JenkinsIcon} width="70" height="70" alt="jenkins"></img>
            <h5 className={classes.title}>Jenkins</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <img src={FastlaneIcon} width="70" height="70" alt="fastlane"></img>
            <h5 className={classes.title}>Fastlane</h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
