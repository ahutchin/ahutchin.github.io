import React from "react";
import Linkedin from "../assets/linkedin.png";
import Email from "../assets/email.png";
import Github from "../assets/github.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="section-title">Contact me</h1>
      <div className="contact-container">
        <p className="contact-text">See something you like? Lets chat</p>
        <div className="contact-link-box">
          <a href="https://www.linkedin.com/in/ahutchin/" target="_blank" className="contact-link">
            <img src={Linkedin} alt="Linkedin img" className="contact-img" />
          </a>
          <a href="mailto:ahutchin2003@gmail.com" target="_blank" className="contact-link">
            <img src={Email} alt="Email img" className="contact-img" />
          </a>
          <a href="https://github.com/ahutchin" target="_blank" className="contact-link">
            <img src={Github} alt="Github img" className="contact-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
