import "../App.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <p className="section-kicker">Capabilities</p>
      <h2 className="section-title">Skills that support modern web apps</h2>
      <p className="section-lead">
        A practical stack for building polished interfaces, connecting APIs, and improving
        application structure over time.
      </p>

      <div className="skills-container">

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

        <div className="skill-card">
          <div className="card-inner">
            <div className="card-front">
              <h3>Problem Solving</h3>
            </div>
            <div className="card-back problem-solve">
             <a href="https://leetcode.com/u/Bhanu2213/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              <img
                src="/gfg.png"
                alt="Problem Solving Graph"
              />
             <a href="https://www.geeksforgeeks.org/user/bhanubasyan/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
             
              <img
                src="/leetcode.png"
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
