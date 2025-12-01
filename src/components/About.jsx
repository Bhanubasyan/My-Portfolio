import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about-section container">

      <div className="row align-items-center">

        {/* LEFT TEXT SECTION */}
        <div className="col-md-7 about-left">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I’m <strong>Bhanu </strong>, a passionate Frontend Web Developer
            who loves creating fast, responsive and modern websites using React, 
            JavaScript, and UI frameworks. 
          </p>

          <p className="about-text">
            I enjoy learning new technologies and building real-world projects.
            My goal is to become a highly skilled full-stack developer.
          </p>

          {/* Highlights */}
          <ul className="about-highlights">
            <li>✔ 6+ Months of Hands-on Frontend Experience</li>
            <li>✔ Strong in JavaScript, React, Bootstrap</li>
            <li>✔ Builds responsive & clean UI/UX</li>
            <li>✔ Problem-solving mindset</li>
          </ul>

          <a href="/My-Portfolio/Bhanu_CV.pdf" download className="btn btn-outline-dark mt-3">
            Download CV
          </a>
        </div>

        {/* RIGHT SIDE IMAGE OR INFO BOX */}
        <div className="col-md-5 about-right">
          <div className="about-card">
            <h4>Tech Stack</h4>
            <p>React • JavaScript • Bootstrap • HTML • CSS</p>

            <h4 className="mt-3">Education</h4>
            <p>B.Tech in Computer Science (Pursuing)</p>

            <h4 className="mt-3">Interests</h4>
            <p>Web Development • UI/UX • Open Source</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
