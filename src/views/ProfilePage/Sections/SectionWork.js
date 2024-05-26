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
        "Web Application Developer L3 (Full-Time)",
        "1. Led the effort to modernize the legacy codebase, which produced a noteworthy 15% increase in memory efficiency and a noteworthy 10% improvement in latency.",
        "2. Planned and carried out faultless database transfer initiatives, guaranteeing resource cost reductions by 5% and continuous operations.",
      ],
      time: "Jan 2024 - Present",
    },
    {
      title: "Media.net (Adtech), Mumbai",
      description: [
        "Web Application Developer L2 (Full-Time)",
        "1. Developed and refined a variety of ad-serving tactics, resulting in 2% increased click-through and conversion rates.",
        "2. Made use of K-Nearest Neighbours Classification to improve and speed up recommendation engines inside the ad-serving network.",
        "3. Improved the functionality of several micro-services based on Service-Oriented Architectures essential to ad-serving operations.",
      ],
      time: "Jan 2022 - Dec 2023",
    },
    {
      title: "Media.net (Adtech), Mumbai",
      description: [
        "Web Application Developer (Full-Time)",
        "1. Architected and developed Internal Analytics Web Applications tailored for robust data analysis.",
        "2. Conducted a comprehensive data analysis to identify potential system enhancements.",
        "3. Engineered and optimized multiple data pipelines essential for ad-serving data, resulting in 20% faster serving",
        "4. Employed sophisticated K-mean Data clustering techniques to discern meaningful patterns from vast datasets.",
      ],
      time: "Jun 2021 - Dec 2021",
    },
    {
      title: "Zaya Learning labs (Edtech), Mumbai",
      description: [
        "SDE (Full-Time)",
        "Pioneered the development of Backend APIs for multiple applications, serving a thriving user base exceeding 10,000 active users.",
        "Implemented CI/CD pipelines to ensure seamless deployment of Web Apps and Backend APIs making development process 30% faster.",
        "Crafted the architectural blueprint and meticulously designed the database structure for project backends.",
        "Engineered Python libraries, facilitating seamless interaction with third-party micro-services.",
      ],
      time: "Jul 2019 - Oct 2020",
    },
    {
      title: "AlphaGen Software Solutions, Mumbai",
      description: [
        "Web Developer (Part-time)",
        "Engineered a product for ordering food in the restaurant using our mobile just by connecting with the available Wi-Fi of the restaurant with an Admin Pane for the Manager to manage and organize segments related to food order and staff.",
      ],
      time: "Dec 2017 - Feb 2018",
    },
    {
      title: "Didimos Web Solutions, Mumbai",
      description: [
        "Frontend Developer (Intern)",
        "A Front-End Website was created by using HTML, CSS, and BOOTSTRAP FRAMEWORK technologies. The website created was a Portfolio for an Academician cum Research Scholar.",
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
