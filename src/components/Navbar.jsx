import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="navbar">
      <div className="color-theme">
        <p onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
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
