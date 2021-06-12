import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import TypedComponent from "components/Typed/typed.js";
import SectionWork from "./Sections/SectionWork.js";
import SectionProject from "./Sections/SectionProject.js";
import SectionTools from "./Sections/SectionTools.js";
import SectionContact from "./Sections/SectionContact.js";

import profile from "assets/img/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <Parallax small filter image={require("assets/img/bg2.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Srijan Ramavat</h3>
                    <h4>
                      <TypedComponent />
                    </h4>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p style={{ fontSize: "16px", paddingBottom: "50px" }}>
                Hello, I am <u>Srijan Ramavat</u> a Software Engineer with 1+
                years of experience in software development and quality-focused
                on &apos;Getting things done right&apos;.
                <br />
                I love to learn new technologies and use them in building new
                projects. Developed and deployed multiple Restful APIs using
                Django Rest Framework in Servers using Gunicorn, Supervisor, and
                Nginx and build infrastructure for CI/CD pipeline and build
                multiple web-applications using Vue.JS and deployed them in
                Azure Container and serve as a CDN, Heroku, and Netlify.
                <br />{" "}
              </p>
            </div>
          </div>
        </div>
        <SectionWork />
        <SectionProject />
        <SectionTools />
        <SectionContact />
      </div>
      <Footer />
    </div>
  );
}
