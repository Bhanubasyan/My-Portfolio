import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Frontend Developer (Self Projects)",
    company: "Personal Development",
    duration: "2025 - Present",
    details: "Built multiple real-world projects using React, JavaScript, and modern UI frameworks. Focused on responsive design, reusable components, and performance optimization.",
    certificateLink: null
  },
  {
    role: "Full Stack Developer (Project Based)",
    company: "Academic & Personal Projects",
    duration: "2025",
    details: "Developed full-stack applications like Inventory Dashboard and Clayora using React, Node.js, and MongoDB with authentication and API integration.",
    certificateLink: null
  },
  {
    role: "Hackathon Participant",
    company: "Climate Hackathon",
    duration: "2025",
    details: "Built EcoSnap, an AI-based waste detection app using Bolt.new, focusing on sustainability and real-world problem solving.",
    certificateLink: null
  },
  {
    role: "Open Source & Learning",
    company: "GitHub",
    duration: "2024 - Present",
    details: "Actively learning and improving through GitHub projects, DSA practice, and continuous development in frontend and backend technologies.",
    certificateLink: null
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <p className="section-kicker">Experience</p>
      <h2 className="section-title">Practice shaped through real builds</h2>
      <p className="section-lead">
        Project-based experience across frontend, full-stack apps, hackathon work,
        and continuous learning through GitHub and problem solving.
      </p>
      <div className="cards-grid">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
