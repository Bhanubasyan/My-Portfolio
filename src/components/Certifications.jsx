import React from "react";
import CertificationCard from "./CertificationCard";

const certifications = [
  {
    title: "International Conference Participation",
    issuer: "Uttarakhand Technical University (HRDI & MIT Gopeshwar)",
    year: "2025",
    certificateLink:"https://www.linkedin.com/posts/bhanu-b82596253_international-conference-certificate-ugcPost-7408027384286859264-jx05?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6OdBIBEqLwICXYfGjw_sv2SIZHcwVyRO4"
  },
  {
    title: "Data Visualization Masterclass: Sales Analysis Dashboard-II",
    issuer: "The IoT Academy",
    year: "2025",
    certificateLink:"https://www.linkedin.com/posts/bhanu-b82596253_certificate-ugcPost-7395065798584721408-9E-8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6OdBIBEqLwICXYfGjw_sv2SIZHcwVyRO4"
  },
  {
    title: "Cyber Security Intern",
    issuer: "Codec Technologies Pvt. Ltd. (AICTE Internship)",
    year: "2025",
    certificateLink:"https://www.linkedin.com/posts/bhanu-b82596253_internship-certificate-ugcPost-7376929540742451200-kQwq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6OdBIBEqLwICXYfGjw_sv2SIZHcwVyRO4"
  },
  {
    title: "Campus Ambassador – E-Summit",
    issuer: "IIT Roorkee",
    year: "2024 - Present",
    certificateLink:"https://certificate.givemycertificate.com/c/9ab39fef-8e7e-4ef5-8777-a5c0826fb8ef"
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