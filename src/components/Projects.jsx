import "../App.css";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Clayora",
    stack: "React / Node.js / MongoDB",
    description:
      "A full-stack product platform with modern UI, authentication, and scalable backend integration.",
    live: "https://clayora.onrender.com/",
    github: "https://github.com/Bhanubasyan/ClayOra",
  },
  {
    title: "Code Trace",
    stack: "React / Node.js / MongoDB",
    description:
      "A browser-based code visualizer that shows execution flow, memory changes, console output, and data structures step by step.",
    live: "https://code-trace-rosy.vercel.app/",
    github: "https://github.com/Bhanubasyan/Code-Trace",
  },
  {
    title: "Finance Dashboard",
    stack: "React / REST API / Secure UI",
    description:
      "A responsive finance dashboard with analytics views, optimized API usage, caching, and light/dark interface patterns.",
    live: "http://finance-dashboard-mmbd.onrender.com/",
    github: "https://github.com/Bhanubasyan/Finance-Dashboard",
  },
  {
    title: "Inventory Dashboard",
    stack: "React / Node.js / MongoDB",
    description:
      "A full-stack inventory management system with authentication, product tracking, and dashboard analytics.",
    live: "https://inventory-dasboard.onrender.com/",
    github: "https://github.com/Bhanubasyan/vehicle-management-system",
  },
  {
    title: "EcoSnap App",
    stack: "React / Node.js / AI",
    description:
      "An AI-based waste detection app that identifies items and suggests recycling methods for sustainability workflows.",
    live: "https://ecosnap-app.netlify.app/",
    github: "https://github.com/Bhanubasyan/EcoSnap-App",
  },
  {
    title: "CipherSQL Studio",
    stack: "React / Node.js / Database",
    description:
      "A secure SQL project for managing database queries and exploring encryption-focused data handling.",
    live: "https://ciphersqlstudio-assignment-1.onrender.com/",
    github: "https://github.com/Bhanubasyan/CipherSQLStudio-Assignment",
  },
  {
    title: "Zomato Listing Page",
    stack: "HTML / CSS / Node.js",
    description:
      "A restaurant listing experience with search, filtering, and clean responsive layout patterns.",
    live: "https://zomato-restaurant-listing.netlify.app/",
    github: "https://github.com/Bhanubasyan/restaurant-listing",
  },
  {
    title: "Traffic Control System",
    stack: "Python / SUMO / Simulation",
    description:
      "An ongoing intelligent traffic control project using Python and SUMO for adaptive signal control experiments.",
    live: "",
    github: "",
  },
  {
    title: "Text to Speech App",
    stack: "HTML / CSS / JavaScript",
    description:
      "A simple text-to-speech converter with multiple voice support and a quick browser-first interface.",
    live: "https://bhanubasyan.github.io/Text-To-Speech-Converter/",
    github: "https://github.com/Bhanubasyan/Text-To-Speech-Converter",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <p className="section-kicker">Selected work</p>
      <h2 className="project-title">Projects with real product thinking</h2>
      <p className="section-lead">
        A focused set of frontend and full-stack builds, from dashboards and learning
        tools to secure utilities and sustainability projects.
      </p>

      <div className="project-container">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-inner">
              <div className="project-front">
                <h3>{project.title}</h3>
                <p>{project.stack}</p>
              </div>

              <div className="project-back">
                <p>{project.description}</p>
                <div className="project-actions">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
