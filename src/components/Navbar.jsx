import React from "react";
import playerIcon from "../assets/playerIcon.svg";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="player-info">
        <img src={playerIcon} alt="profile" className="profile-img" />
        <p className="player-info-text">Info</p>
      </div>
      <div className="link-div">
        <ul className="page-links">
          <li className="link">Home</li>
          <li className="link">Experience</li>
          <li className="link">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
