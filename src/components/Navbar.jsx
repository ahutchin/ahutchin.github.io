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
          <li>
            <a href="#" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
