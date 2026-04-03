import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h2 className="project-title">My Projects</h2>

      <div className="project-container">

     
      
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Clayora</h3>
              <p>React • Node.js • MongoDB</p>
            </div>

            <div className="project-back">
              <p>
                A full-stack web application built for managing and showcasing products
                with modern UI, authentication, and scalable backend integration.
              </p>
              <a href="https://clayora.onrender.com/" target="_blank">🔗 Live</a>
              <a href="https://github.com/Bhanubasyan/ClayOra" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>


        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Zomato Listing Page</h3>
              <p>HTML • CSS • Node.js</p>
            </div>

            <div className="project-back">
              <p>
                A restaurant listing platform with search and filter functionality.
              </p>
              <a href="https://zomato-restaurant-listing.netlify.app/" target="_blank">🔗 Live </a>
              <a href="https://github.com/Bhanubasyan/restaurant-listing" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>

       
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Inventory Dashboard</h3>
              <p>React • Node.js • MongoDB</p>
            </div>

            <div className="project-back">
              <p>
                A full-stack inventory management system with authentication, product tracking,
                and dashboard analytics.
              </p>
              <a href="https://inventory-dasboard.onrender.com/" target="_blank">🔗 Live </a>
              <a href="https://github.com/Bhanubasyan/vehicle-management-system" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>

   
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Traffic Control System</h3>
              <p>Python • SUMO • Simulation</p>
            </div>

            <div className="project-back">
              <p> 
                Ogoing project to develop an intelligent traffic control system using Python and SUMO for traffic simulation. The system will optimize traffic flow and reduce congestion through real-time data analysis and adaptive signal control.
              </p>
              <a href="#" target="_blank">🔗 Live </a>
              <a href="#" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>

       
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>CipherSQL Studio</h3>
              <p>React • Node.js • Database</p>
            </div>

            <div className="project-back">
              <p>
                A secure SQL project for managing and encrypting database queries.
              </p>
              <a href="https://ciphersqlstudio-assignment-1.onrender.com/" target="_blank">🔗 Live </a>
              <a href="https://github.com/Bhanubasyan/CipherSQLStudio-Assignment" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>

      
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Portfolio Website</h3>
              <p>React • CSS • Responsive UI</p>
            </div>

            <div className="project-back">
              <p>
                A modern responsive portfolio showcasing projects and skills.
              </p>
              <a href="https://bhanubasyan.github.io/My-Portfolio/" target="_blank">🔗 Live </a>
              <a href="https://github.com/Bhanubasyan/My-Portfolio" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>


        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Text to Speech App</h3>
              <p>HTML • CSS • JavaScript</p>
            </div>

            <div className="project-back">
              <p>
                A fast and simple text-to-speech converter supporting multiple voices.
              </p>
              <a href="https://bhanubasyan.github.io/Text-To-Speech-Converter/" target="_blank">🔗 Live </a>
              <a href="https://github.com/Bhanubasyan/Text-To-Speech-Converter" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>

      
        <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>EcoSnap App</h3>
              <p>React • Node.js • CSS</p>
            </div>

            <div className="project-back">
              <p>
                AI-based waste detection app that identifies items and suggests recycling methods.
              </p>
              <a href="https://ecosnap-app.netlify.app/" target="_blank">🔗 Live </a>
              <a href="https://github.com/Bhanubasyan/EcoSnap-App" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>

      
       <div className="project-card">
          <div className="project-inner">
            <div className="project-front">
              <h3>Finance Dashboard (Secure & Scalable UI)</h3>
              <p>React • JavaScript(ES6+) • REST API</p>
            </div>

            <div className="project-back">
              <p> 
               A modern and responsive Finance Dashboard built using React, focused on clean UI, performance optimization, and secure data handling. The application visualizes financial data through interactive components while ensuring protection against common vulnerabilities like data exposure and excessive server requests. Designed with scalability and real-world best practices in mind.
               📊 Interactive financial charts and analytics
🌙 Light/Dark mode UI
⚡ Optimized API calls with caching
🔒 Secure handling of sensitive data
📱 Fully responsive design
              </p>
              <a href="http://finance-dashboard-mmbd.onrender.com/" target="_blank">🔗 Live </a>
              <a href="https://github.com/Bhanubasyan/Finance-Dashboard" target="_blank">💻 GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;