import React from "react";
import "../App.css";
import dp from "/dp.png"; // your profile image

const Hero = () => {
  return (
    <section id="hero" className="hero-section container">
      <div className="row align-items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="col-md-6 hero-left">
          <h3 className="hello">Hi, I’m</h3>
          <h1 className="hero-name">Bhanu </h1>
          <h2 className="hero-title">Frontend Web Developer</h2>

          <p className="hero-tagline">
            I build fast, responsive and user-friendly web applications using React, JavaScript & modern UI tools.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="/Bhanu_Resume.pdf" className="btn btn-outline-dark btn-lg">Download Resume</a>
            <a href="#contact" className="btn btn-outline-dark btn-lg">Hire Me</a>
          </div>

          {/* Social Icons */}
          <div className="hero-social">
            <a href="https://github.com/Bhanubasyan" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
            <a href="mailto:youremail@gmail.com">Email</a>
          </div>

          {/* Skills */}
          <div className="hero-skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>Node.js</span>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-md-6 hero-right">
          <img src={dp} alt="profile" className="hero-dp" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
