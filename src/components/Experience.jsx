import React from "react";
import "./Experience.css";
import NationalGrid from "../assets/NationalGrid.png";
import Fiix from "../assets/Fiix.png";
import ESDC from "../assets/ESDC.jpg";

const Experience = () => {
  return (
    <div className="base-container">
      <p className="Title">Experience</p>
      <div className="container">
        <img src={NationalGrid} alt="National Grid Logo" className="img" />
        <div className="info">
          <h1>Data Engineer</h1>
          <h2>National Grid │ May 2023 — Aug 2023</h2>
          <p>
            Developed the Inactive Service Program Database with Microsoft
            Access to improve fieldwork efficiency by identifying high priority
            clients
          </p>

          <p>
            Streamlined the ISP Database integration by processing 30,000
            records and creating 10 fields on account information using Excel
          </p>
        </div>
      </div>
      <div className="container">
        <img src={Fiix} alt="Logo" className="img" />
        <div className="info">
          <h1>Data Engineer</h1>
          <h2>Fiix by Rockwell Automation │ Sept 2022 — Jan 2023</h2>
          <p>
            Reported on 12M sales opportunities in Power BI by creating
            data driven insights and interactive visualizations with Power Query
            and DAX
          </p>

          <p>
            Identified actionable insights into sales efficiency by transforming
            5 data tables that depict Sales team performance
          </p>
        </div>
      </div>
      <div className="container">
        <img src={ESDC} alt="Logo" className="img" />
        <div className="info">
          <h1>Data Engineer</h1>
          <h2>
            Employment and Social Development Canada │ Jan 2022 — Apr 2022
          </h2>
          <p>
            Analyzed 100 fields, and 30 business metrics
            with SQL Dev, creating a comprehensive document identifying relevant
            EI pipeline data for presentational use
          </p>

          <p>
            Inspected 300 views from Oracle DataLake sources with ADF,
            identifying essential agent dimensions for refining business
            insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
