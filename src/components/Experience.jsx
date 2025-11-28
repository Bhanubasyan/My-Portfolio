import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "React.js Developer Intern",
    company: "Ciperschool",
    duration: "Nov 2025 - Jan 2026",
    details: "Built reusable React components and handled frontend state management.",
    certificateLink: "https://www.ciperschool.com/certificate/react-intern"
  },
  {
    role: "Frontend Developer",
    company: "Freelance Projects",
    duration: "2024 - 2025",
    details: "Created portfolio websites and small web apps using React and JS.",
    certificateLink: null
  },
  {
    role: "UI/UX Intern",
    company: "DesignLab",
    duration: "2024",
    details: "Designed wireframes and prototypes for client projects.",
    certificateLink: "https://www.designlab.com/certificate/uiux"
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2023 - Present",
    details: "Contributed to React and JS open-source repositories.",
    certificateLink: null
  }
];

const Experience = () => {
  return (
    <section id="experince" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="cards-grid">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
