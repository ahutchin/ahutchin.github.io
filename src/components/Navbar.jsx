import React from "react";
import "./Navbar.css";
import playerIcon from "../assets/playerIcon.svg";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="player-info">
        <img src={playerIcon} alt="profile" className="profile-img" />
        <p className="player-info-text">Info</p>
      </div>
      <div className="tabs">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
