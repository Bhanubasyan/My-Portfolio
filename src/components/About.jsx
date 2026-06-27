import "../App.css";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about-section container">
      <div className="row align-items-center g-4">
        <div className="col-lg-7 about-left">
          <p className="section-kicker">About me</p>
          <h2 className="about-title">Building interfaces that feel fast, clean, and useful.</h2>

          <p className="about-text">
            I am <strong>Bhanu</strong>, a frontend web developer focused on React,
            JavaScript, HTML, CSS, and modern UI frameworks. I enjoy converting ideas into
            responsive applications with clean layouts, reusable components, and smooth user flows.
          </p>

          <p className="about-text">
            My project work includes dashboards, product platforms, learning tools,
            AI-based web apps, and secure utility projects. I am also expanding into Node.js,
            Express, MongoDB, and DSA so I can build stronger full-stack products.
          </p>

          <ul className="about-highlights">
            <li>Frontend development</li>
            <li>React component systems</li>
            <li>REST API integration</li>
            <li>Responsive UI</li>
            <li>DSA practice</li>
          </ul>

          <a href="/Bhanu-software-developerCV.pdf" download className="btn">
            <Download size={18} /> Download CV
          </a>
        </div>

        <div className="col-lg-5 about-right">
          <div className="about-card">
            <h4>Tech Stack</h4>
            <ul>
              <li>Frontend: React, JavaScript, HTML, CSS, Bootstrap</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB</li>
              <li>Tools: Git, GitHub, Vite</li>
            </ul>

            <h4>Education</h4>
            <ul>
              <li>B.Tech in Computer Science, pursuing</li>
              <li>Class 12th, GIC Niranjanpur</li>
              <li>Class 10th, GIC Niranjanpur</li>
            </ul>

            <h4>Interests</h4>
            <ul>
              <li>Full-stack development</li>
              <li>UI/UX design</li>
              <li>Open source contribution</li>
              <li>Problem solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
