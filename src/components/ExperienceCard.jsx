import React from "react";
import "../App.css";

const ExperienceCard = ({ role, company, duration, details, certificateLink }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <h3>{role}</h3>
          <h4>{company}</h4>
          <p className="duration">{duration}</p>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <p>{details}</p>
          {certificateLink && (
            <a href={certificateLink} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
