import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomizedTimeline from "components/Timeline/CustomTimeline.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionWork() {
  const classes = useStyles();
  const education_data = [
    {
      title: "University of Mumbai",
      description: ["B.E. Computer Engineering", "CGPA: 8"],
      time: "Jun 2015 - May 2019",
    },
    {
      title: "Swarneela International School",
      description: ["Higher Secondary (12th)", "Percentage: 85%"],
      time: "Apr 2014 - Mar 2015",
    },
    {
      title: "Swarneela International School",
      description: ["Higher Secondary (10th)", "Percentage: 87%"],
      time: "Apr 2012 - Mar 2013",
    },
  ];
  const work_data = [
    {
      title: "Media.net (Adtech), Mumbai",
      description: [
        "Web Application Developer (Full-Time)",
        "1. Created and Enhanced multiple Ad serving Strategies",
        "2. Developed Scripts for automating tasks",
        "3. Created/Updated Stored Procedures for Data Analysis",
        "4. Developed internal Analytics Web Applications",
      ],
      time: "Jun 2021 - Present",
    },
    {
      title: "Zaya Learning labs (Edtech), Mumbai",
      description: [
        "SDE (Full-Time)",
        "1. Built multiple apps with 10K+ active users from scratch",
        "2. Developed Various Restful APIs for Multiple Projects",
        "3. CI/CD pipelines for  Web Apps, Backend APIs",
      ],
      time: "Jul 2019 - Oct 2020",
    },
    {
      title: "AlphaGen Menufi, Mumbai",
      description: [
        "Php Developer (Part-Time)",
        "Spearheaded Project Management and developed Restaurant Automation Application",
      ],
      time: "Dec 2017 - Feb 2018",
    },
    {
      title: "Didimos Web Solutions, Mumbai",
      description: [
        "Front-End Developer (Intern)",
        "Developed Portfolio Websites",
      ],
      time: "Apr 2016",
    },
  ];
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <center>
            <h3 className={classes.title}>Education and Experience</h3>
          </center>
          <GridContainer>
            <GridItem xs={10} sm={10} md={12}>
              <h3>
                <small>Experience</small>
              </h3>
              <CustomizedTimeline section="work" section_datas={work_data} />
            </GridItem>
            <GridItem xs={10} sm={10} md={12}>
              <h3>
                <small>Education</small>
              </h3>
              <CustomizedTimeline
                section="education"
                section_datas={education_data}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
