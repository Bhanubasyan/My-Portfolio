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
    I’m <strong>Bhanu</strong>, a passionate Frontend Web Developer with a strong interest in building
    fast, responsive, and user-friendly web applications. I specialize in technologies like 
    React, JavaScript, HTML, CSS, and modern UI frameworks to create clean and engaging user experiences.
  </p>

  <p className="about-text">
    I enjoy transforming ideas into real-world projects and continuously improving my development skills.
    I have hands-on experience in building projects like password checkers, file encryption tools, and
    other web applications that solve practical problems.
  </p>

  <p className="about-text">
    Currently, I am expanding my knowledge towards backend development using Node.js and working towards
    becoming a full-stack developer. I am also actively improving my problem-solving skills and Data Structures
    & Algorithms for better coding efficiency and technical growth.
  </p>

  {/* Highlights */}
  <ul className="about-highlights">
    <li>✔ 6+ Months of Hands-on Frontend Development Experience</li>
    <li>✔ Strong in React, JavaScript, HTML, CSS & Bootstrap</li>
    <li>✔ Experience in building real-world projects</li>
    <li>✔ Learning Backend (Node.js) & Full Stack Development</li>
    <li>✔ Problem-solving mindset with focus on DSA</li>
  </ul>

  <a 
    href="/portfolio/My-Portfolio/Bhanu-software-developerCV.pdf" 
    download 
    className="btn btn-outline-dark mt-3"
  >
    Download CV
  </a>
</div>
        {/* RIGHT SIDE IMAGE OR INFO BOX */}
        <div className="col-md-5 about-right">
  <div className="about-card">
    
    <h4>Tech Stack</h4>
    <ul>
      <li>Frontend: React, JavaScript, HTML, CSS, Bootstrap</li>
      <li>Backend: Node.js, Express.js</li>
      <li>Programming: Python</li>
      <li>Database: MongoDB (if applicable)</li>
      <li>Tools: Git, GitHub</li>
    </ul>

    <h4 className="mt-3">Education</h4>
    <ul>
      <li>🎓 B.Tech in Computer Science – 75%+ (Pursuing)</li>
      <li>🏫 Class 12th – 70% (GIC Niranjanpur)</li>
      <li>🏫 Class 10th – 84% (GIC Niranjanpur)</li>
    </ul>

    <h4 className="mt-3">Interests</h4>
    <ul>
      <li>Web Development</li>
      <li>Full Stack Development</li>
      <li>Backend Development</li>
      <li>UI/UX Design</li>
      <li>Open Source Contribution</li>
      <li>Problem Solving</li>
      <li>Data Structures & Algorithms</li>
    </ul>

  </div>
</div>

      </div>
    </section>
  );
};

export default About;
