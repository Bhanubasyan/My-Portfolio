import React from "react";
import "../App.css";

const CertificationCard = ({ title, issuer, year, certificateLink }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <h3>{title}</h3>
          <h4>{issuer}</h4>
          <p className="year">{year}</p>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          {certificateLink ? (
            <a href={certificateLink} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          ) : (
            <p>No link available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
