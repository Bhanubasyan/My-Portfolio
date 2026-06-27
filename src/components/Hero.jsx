import "../App.css";
import dp from "/dp.png";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="hero-section container">
      <div className="row align-items-center">
        <div className="col-lg-7 hero-left">
          <div className="eyebrow">Frontend / Backend / AI</div>
          <h3 className="hello">Hi, I am</h3>
          <h1 className="hero-name">Bhanu</h1>
          <h2 className="hero-title">Software Developer</h2>

          <p className="hero-tagline">
            I build modern web applications across frontend, backend, and AI-powered features
            using React, JavaScript, Node.js, APIs, and practical product thinking.
          </p>

          <div className="hero-buttons">
            <a href="/Bhanu-Software-engineer.pdf" download className="btn btn-primary-portfolio">
              <Download size={18} /> Download Resume
            </a>
            <a href="#projects" className="btn">
              View Projects <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Bhanubasyan" target="_blank" rel="noopener noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhanu-b82596253/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a href="mailto:bhanubasyan@gmail.com">
              <Mail size={17} /> Email
            </a>
          </div>

          <div className="hero-skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Backend</span>
            <span>AI Tools</span>
            <span>Node.js</span>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <strong>10+</strong>
              <span>Projects shipped</span>
            </div>
            <div className="stat-card">
              <strong>6+</strong>
              <span>Months hands-on</span>
            </div>
            <div className="stat-card">
              <strong>Full</strong>
              <span>Stack developer</span>
            </div>
          </div>
        </div>

        <div className="col-lg-5 hero-right">
          <div className="profile-stage">
            <img src={dp} alt="Bhanu profile" className="hero-dp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
