import React from "react";
import "./About.css";
import template from '../../Assests/template.png';
import display from '../../Assests/display-pic.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={template} alt="template" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={display} alt="display" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a Software Engineer based in Bengaluru, India, specializing in Android Development and Web Development.</p>
            <p>With a passion for developing efficient and secure software, I have experience in various programming languages, frameworks, and cloud platforms.</p>
            <p>My goal is to create impactful software solutions that drive success and innovation in organizations.</p>
            <p>In my free time, I enjoy building new projects, exploring new technologies, and sharing my knowledge through blogging and speaking at tech events.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5 & CSS</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Spring Boot</p>
              <hr style={{ width: "40%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Android Studio</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>OPEN-SOURCE CONTRIBUTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
