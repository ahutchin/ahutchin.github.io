import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="navbar">
      <div className="color-theme">
        <p onClick={toggleTheme}>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
      <div className="navbar-links">
        <ul className="page-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/more">More</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
