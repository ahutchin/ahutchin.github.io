import React from "react";
import Dropdown from "../components/dropdown";

const Experience = () => {
  const experiences = [
    {
      Title: "Software Developer Co-op",
      Desc: "RedIron Technologies │ Sep 2024 - Present",
      Content: [
        "Developed Count Sheet functionalities using C# and .NET, integrating front-end web development with component-based architecture to establish a proof of concept (POC)",
        "Programmed responsive Appearance settings using HTML, CSS, and C# Blazor components, enabling users to control the application’s color scheme, font size, and component border radius",
      ],
    },
    {
      Title: "Software Developer Co-op",
      Desc: "Tree of Life │ Jan 2024 - Apr 2024",
      Content: [
        "Developed 10+ components on point-of-sales (POS) file management page with Angular & Redux, automating file upload, viewing, & validation, saving 2+ developer hours per week",
        "Wrote API endpoints utilizing C# and .NET framework to seamlessly fetch user information and upload files, serving as the backbone for the POS page",
      ],
    },
    {
      Title: "Data Engineer Co-op",
      Desc: "National Grid │ May 2023 — Aug 2023",
      Content: [
        "Developed the Inactive Service Program Database with Microsoft Access to improve fieldwork efficiency by identifying high priority clients",
        "Streamlined the ISP Database integration by processing 30,000 records and creating 10 fields on account information using Excel",
      ],
    },
    {
      Title: "Data Analyst Co-op",
      Desc: "Fiix by Rockwell Automation │ Sept 2022 — Jan 2023",
      Content: [
        "Reported on 12M sales opportunities in Power BI by creating data driven insights and interactive visualizations with Power Query and DAX",
        "Identified actionable insights into sales efficiency by transforming 5 data tables that depict Sales team performance",
      ],
    },
    {
      Title: "Data Engineer Co-op",
      Desc: "Employment and Social Development Canada │ Jan 2022 — Apr 2022",
      Content: [
        "Analyzed 100 fields, and 30 business metrics with SQL Dev, creating a comprehensive document identifying relevant EI pipeline data for presentational use",
        "Inspected 300 views from Oracle DataLake sources with ADF, identifying essential agent dimensions for refining business insights",
      ],
    },
  ];

  return (
    <div className="experience-page page-body">
      <h1>Experience</h1>
      <p>This is the experience page.</p>
      <div className="experiences">
        {experiences.map((experience, index) => (
          <Dropdown
            key={index}
            Title={experience.Title}
            Desc={experience.Desc}
            Content={experience.Content.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
