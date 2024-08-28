import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer, Web Developer, and
              Application Developer with 3 months of experience as a Flutter
              Developer Intern at Digixito Pvt. Ltd.
            </p>
            <p>
              I possess a diverse skill set, including Java, HTML, CSS,
              JavaScript, Android Development, Flutter, Dart, Git, and GitHub.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Html, Css & JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Andriod Development</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Dart</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>03+</h1>
              <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>05+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
