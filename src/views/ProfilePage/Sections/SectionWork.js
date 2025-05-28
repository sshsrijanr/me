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
        "Senior Web Application Developer (Full-Time)",
        "1. Developed support for Multi-language Contextual Ad serving using a Large Language Model.",
        "2. Optimised services in the recommendation system reduced response time by 25%.",
      ],
      time: "Jan 2025 - Present",
    },
    {
      title: "Media.net (Adtech), Mumbai",
      description: [
        "Web Application Developer L3 (Full-Time)",
        "1. Designed and implemented LLD for exploration strategies for machine learning models, optimizing selection for various use cases.",
        "2. Developed an Ad-serving strategy powered by a vector search infrastructure to efficiently index and retrieve ads for Contextual Ad Targeting, leading to a 5% increase in RPM.",
        "3. Integrated Prometheus into microservices for real-time monitoring and alerting, enabling proactive issue resolution and ensuring 100% uptime.",
        "4. Redesigned microservices using Kafka and Airflow, enabling parallel processing and multi-database support, resulting in a 20% faster data pipeline.",
        "5. Optimized a Java-based monolithic application, reducing memory usage by 15% and improving system latency by 10%.",
      ],
      time: "Jan 2024 - Dec 2024",
    },
    {
      title: "Media.net (Adtech), Mumbai",
      description: [
        "Web Application Developer L2 (Full-Time)",
        "1. Developed and optimized ad-serving strategy using historical data to identify the best possible ads, achieving a 2% increase in CTR and conversions",
        "2. Applied Classification Algorithms resulting in 10% better contextual ad-serving",
        "3. Executed database migration projects from MySQL to Aerospike, ensuring a 10% cost reduction and uninterrupted operations",
        "4. Served as a Directly Responsible Individual for the Ad-serving platform, identified issues in the system and fixed them, reducing downtime incidents by 95%, and restoring services within an average of 10 minutes during interruptions",
      ],
      time: "Jan 2022 - Dec 2023",
    },
    {
      title: "Media.net (Adtech), Mumbai",
      description: [
        "Web Application Developer (Full-Time)",
        "1. Architected and developed internal analytics web applications for robust data analysis, making analysis 30% faster for project managers",
        "2. Enhanced the Legacy codebase with new features, enabling businesses to make decisions 20% faster",
        "3. Used K-means clustering in PySpark to analyze large datasets, identifying 25 key Ad Campaigns",
        "4. Leveraged expertise to streamline project and release plans, boosting delivery times by 20% and productivity by 15% through collaboration with the project manager",
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
