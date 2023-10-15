import React from "react";
import "./Contact.css";
import Linkedin from "../assets/linkedin.png";
import Email from "../assets/email.png";
import Github from "../assets/github.png";

const Contact = () => {
  return (
    <div className="Contact-Container">
      <p className="Title">Contact me</p>
      <div className="Contact-sub-container">
        <p id="contact-text">See something you like? Lets chat</p>
        <a
          href="https://www.linkedin.com/in/ahutchin/"
          target="_blank"
          className="Linkedin"
        >
          <img src={Linkedin} alt="Linkedin img" className="contact-img" />
        </a>
        <a
          href="mailto:ahutchin2003@gmail.com"
          target="_blank"
          className="Email"
        >
          <img src={Email} alt="Email img" className="contact-img" />
        </a>
        <a
          href="https://github.com/ahutchin"
          target="_blank"
          className="Github"
        >
          <img src={Github} alt="Github img" className="contact-img" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
