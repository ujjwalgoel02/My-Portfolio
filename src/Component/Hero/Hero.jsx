import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1IfLIDmVmXpcJWf0aePQ5oc7sQKQR5c33/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Ujjwal Goel,</span> a frontend, web, and application
        developer.
      </h1>
      <p>
        I am a recent B-Tech graduate from India, specializing in frontend
        development, web development, and application development. As a fresher,
        I'm eager to apply my skills and continue growing in the field.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor_link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div onClick={openResume} className="hero-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
