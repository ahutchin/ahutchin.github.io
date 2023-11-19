import React from "react";

const ExperienceList = ({ Experiences, title }) => {
  return (
    <div className="experience">
      <h1 className="section-title"> {title} </h1>
      {Experiences.toReversed().map((Experiences) => (
        <div className="experience-container" key={Experiences.id}>
          <img src={Experiences.Logo} alt="Logo" className="logo" />
          <div className="text-container">
            <h2 className="experience-title">{Experiences.title}</h2>
            <h3 className="experience-company">{Experiences.Company}</h3>
            {/* There must be a better way to display experience-achievements. Some sort of loop? */}
            <p className="experience-achievements">{Experiences.achievements[0]}</p>
            <p className="experience-achievements">{Experiences.achievements[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
