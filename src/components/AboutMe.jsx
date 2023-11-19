import React from "react";

const AboutMe = () => {
  const Sentences = [
    { id: 1, sentence: "I am a Systems Design Engineering student at the University of Waterloo trying to discover my passions by following what drives me." },
    { id: 2, sentence: "I am interested in Software Development with a background in Data Engineering and Analytics. My experience with data allows me to tackle problems with deeper understanding of the product and business space." },
    { id: 3, sentence: "I want to contribute towards developing a meaningful product while tackling challenging problems. At the core, being able to work with something I am genuinely interested in is what creates fulfillment in what I do." },
  ];

  return (
    // I still think there is a better way to do this, but this will suffice
    <>
      <h1 className="section-title">About Me</h1>
      <div className="about-me-container">
        {Sentences.map((Sentences) => (
          <div className="about-me-sentences" key={Sentences.id}>
            <p className="bullet-point">◉</p>
            <p>{Sentences.sentence}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutMe;
