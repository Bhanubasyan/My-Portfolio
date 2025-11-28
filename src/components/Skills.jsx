import React from "react";
import "../App.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        {/* Soft Skills */}
        <div className="skill-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Soft Skills</h3>
            </div>
            <div className="card-back">
              <ul>
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Leadership</li>
                <li>Time Management</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frontend Skills */}
        <div className="skill-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Frontend</h3>
            </div>
            <div className="card-back">
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
                <li>Responsive UI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skill-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Backend</h3>
            </div>
            <div className="card-back">
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
                <li>Authentication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Problem Solving */}
        <div className="skill-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Problem Solving</h3>
            </div>
            <div className="card-back problem-solve">
             <a href="https://leetcode.com/u/Bhanu2213/"><p>Leetcode </p></a>
              <img
                src="/public\gfg.png"
                alt="Problem Solving Graph"
              />
             <a href="https://www.geeksforgeeks.org/user/bhanubasyan/"><p>GFG</p></a>
              {/* Replace with your actual image */}
             
              <img
                src="/public\leetcode.png"
                alt="Problem Solving Graph"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
