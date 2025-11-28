import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h2 className="project-title">My Projects</h2>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Text to Speech App</h3>
              <p>HTML • CSS • JS</p>
            </div>

            <div className="project-back">
              <p>
                A fast and simple text-to-speech converter supporting multiple
                voices.
              </p>
              <a href="https://bhanubasyan.github.io/Text-To-Speech-Converter/" target="_blank">🔗 Live Demo</a>
              <a href="https://github.com/Bhanubasyan/Text-To-Speech-Converter" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Eco Snap Web</h3>
              <p>React • Node  • CSS</p>
            </div>

            <div className="project-back">
              <p>
                EcoSnap is a web application built using Bolt.new that helps users identify waste types through image recognition and suggests proper disposal or recycling methods. Users can simply take a photo of an item, and the app will guide them on how to dispose of it sustainably.
              </p>
              <a href="https://github.com/Bhanubasyan/EcoSnap-App">🔗 Live Demo</a>
              <a href="https://ecosnap-app.netlify.app/">💻 GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Zomato Listing Page</h3>
              <p>HTML , CSS , NODE </p>
            </div>

            <div className="project-back">
              <p>
               A restaurant listing webpage similar to Zomato with search and filter functionalities.
              </p>
              <a href="https://zomato-restaurant-listing.netlify.app/">🔗 Live Demo</a>
              <a href="https://github.com/Bhanubasyan/restaurant-listing">💻 GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Portfolio Website</h3>
              <p>React • CSS • Responsive UI</p>
            </div>

            <div className="project-back">
              <p>
                A modern, fully responsive portfolio built with animations and
                reusable components.
              </p>
              <a href="https://bhanubasyan.github.io/My-Portfolio/">🔗 Live Demo</a>
              <a href="https://github.com/Bhanubasyan/My-Portfolio">💻 GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
