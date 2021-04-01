import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import Schedule from "@material-ui/icons/Schedule";
import DeleteSweep from "@material-ui/icons/DeleteSweep";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import ocularProfile from "assets/img/ocular_profile.png";
import bookIt from "assets/img/bookit.png";
import cleanItUp from "assets/img/cleanItUp.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProject() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div>
            <h3 className={classes.title}>Projects</h3>
          </div>
          <GridContainer className={classes.grid}>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 3, md: 3 },
                  contentGrid: { xs: 12, sm: 9, md: 9 },
                }}
                tabs={[
                  {
                    tabButton: "BookItUp",
                    tabIcon: Schedule,
                    tabContent: (
                      <div>
                        <span>
                          <span>
                            <img
                              src={bookIt}
                              alt="..."
                              className={
                                classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid +
                                " " +
                                classes.image
                              }
                              width="300"
                              height="250"
                            />
                          </span>
                          <p>
                            Web app for booking tickets for events (like
                            BookMyShow). We have created this web app using Vue
                            js for the frontend and Django(REST) for the
                            backend. This website has two parts, the first part
                            for the customer to check events and book tickets,
                            and the second part for admin to register events and
                            check sales.
                            <br />
                            To check the admin panel, click on the settings icon
                            on the top right corner, select login with these
                            credentials:
                            <br />
                            <a href="http://bookit-webapp.herokuapp.com/">
                              BookIt Website
                            </a>{" "}
                            <br />
                            username - admin, <br />
                            password - admin1234
                          </p>
                        </span>
                      </div>
                    ),
                  },
                  {
                    tabButton: "Ocular Profile",
                    tabIcon: SupervisedUserCircle,
                    tabContent: (
                      <span>
                        <span>
                          <img
                            src={ocularProfile}
                            alt="..."
                            className={
                              classes.imgRaised +
                              " " +
                              classes.imgRounded +
                              " " +
                              classes.imgFluid +
                              " " +
                              classes.image
                            }
                            width="220"
                            height="250"
                          />
                        </span>
                        <p>
                          The objective of this project is to provide a service
                          or software that is capable of fetching personal
                          information about users available through social media
                          websites with the help of facial recognition.
                          Eventually develop into a security system to be used
                          by police to identify criminals.
                          <br />
                          In this project we have used OpenCV for developing
                          Facial Recognition Algorithm and Collected Data for
                          learning via Social Media APIs and Trained an AI for
                          Detection. UI of this software is designed in TKinter.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "CleanItUp",
                    tabIcon: DeleteSweep,
                    tabContent: (
                      <span>
                        <span>
                          <img
                            src={cleanItUp}
                            alt="..."
                            className={
                              classes.imgRaised +
                              " " +
                              classes.imgRounded +
                              " " +
                              classes.imgFluid +
                              " " +
                              classes.image
                            }
                            width="300"
                            height="250"
                          />
                        </span>
                        <p>
                          Online Portal for BMC where they can directly access
                          the staff and administration to manage complaints
                          against the Garbage collection. They have separate
                          panels to update the Status of Complaints.
                          <br />
                          This project is build using Php Framework Codeigniter.
                          For Database we have used MySQL Server. In this
                          project, I have implemented GIS system for tracking
                          location of complaint.
                        </p>
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
