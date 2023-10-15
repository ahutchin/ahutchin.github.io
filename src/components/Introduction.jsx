import React from "react";
import "./Introduction.css";
import logo from "../assets/depressed-anime-boy.jpg";
import pfp from "../assets/profile.webp";

const Introduction = () => {
  return (
    <div className="main">
      <img src={logo} alt="blurred background" className="background-img" />
      <div className="block">
        <img src={pfp} alt="profile" className="profile-pic" />
        <div className="text-block">
          <p className="name">Alexander Hutchinson</p>
          <p className="program">University of Waterloo, Systems Design Engineering</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
