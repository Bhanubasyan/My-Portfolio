// src/components/Footer.jsx
import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://github.com/Bhanubasyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bhanu-b82596253/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/basyanBhanu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Bhanu Basyan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
