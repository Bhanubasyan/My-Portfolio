import React from "react";
import CertificationCard from "./CertificationCard";

const certifications = [
  {
    title: "Frontend Web Development",
    issuer: "Coursera",
    year: "2025",
    certificateLink: "https://coursera.org/certificate/frontend"
  },
  {
    title: "React.js Developer",
    issuer: "Udemy",
    year: "2025",
    certificateLink: "https://udemy.com/certificate/react"
  },
  {
    title: "Full Stack Development",
    issuer: "Internshala",
    year: "2024",
    certificateLink: "https://internshala.com/certificate/fullstack"
  },
  {
    title: "JavaScript Mastery",
    issuer: "edX",
    year: "2024",
    certificateLink: "https://edx.org/certificate/js-mastery"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="cards-grid">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
