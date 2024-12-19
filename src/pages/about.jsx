import React from "react";
import AuthButton from "../components/authButton";

const About = () => {
  return (
    <div className="page-body">
      <h1>About Me</h1>
      <p>This is the about page of my personal website.</p>
      <AuthButton title={"SPOTIFY LOGIN"} endpoint={"/login"} />
    </div>
  );
};

export default About;
