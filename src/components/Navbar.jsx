import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/experience">
        <button>Experience</button>
      </Link>
      <Link to="/projects">
        <button>Project</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </>
  );
};

export default Navbar;
