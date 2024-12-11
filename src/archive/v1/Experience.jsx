import React from "react";

import NationalGrid from "../assets/NationalGrid.png";
import Fiix from "../assets/Fiix.png";
import ESDC from "../assets/ESDC.jpg";
import RedDoor from "../assets/RedDoor.png";

import ExperienceList from "./ExperienceList";

const Experience = () => {
  // List of Experiences
  const Experiences = [
    {
      id: 1,
      title: "Data Engineer",
      Company: "Employment and Social Development Canada │ Jan 2022 — Apr 2022",
      achievements: [
        "Analyzed 100 fields, and 30 business metrics with SQL Dev, creating a comprehensive document identifying relevant EI pipeline data for presentational use",
        "Inspected 300 views from Oracle DataLake sources with ADF, identifying essential agent dimensions for refining business insights",
      ],
      Logo: ESDC,
    },
    {
      id: 2,
      title: "Data Analyst",
      Company: "Fiix by Rockwell Automation │ Sept 2022 — Jan 2023",
      achievements: [
        "Reported on 12M sales opportunities in Power BI by creating data driven insights and interactive visualizations with Power Query and DAX",
        "Identified actionable insights into sales efficiency by transforming 5 data tables that depict Sales team performance",
      ],
      Logo: Fiix,
    },
    {
      id: 3,
      title: "Data Engineer",
      Company: "National Grid │ May 2023 — Aug 2023",
      achievements: [
        "Developed the Inactive Service Program Database with Microsoft Access to improve fieldwork efficiency by identifying high priority clients",
        "Streamlined the ISP Database integration by processing 30,000 records and creating 10 fields on account information using Excel",
      ],
      Logo: NationalGrid,
    },
    {
      id: 4,
      title: "Software Developer",
      Company: "Red Door Design and Staging │ Sept 2023 — Present",
      achievements: [
        "Developing an end to end web and mobile application with JavaScript, React, and Firebase to create a user friendly inventory management application for 10 active users",
        "Applying Firebase operations to create, read, update, and delete data from realtime database",
      ],
      Logo: RedDoor,
    },
  ];

  return <ExperienceList Experiences={Experiences} title="Experience"/>;
};

export default Experience;