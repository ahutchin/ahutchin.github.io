import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Introduction />
        <Experience />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
};

export default App;
