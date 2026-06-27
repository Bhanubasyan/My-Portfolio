import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

const PortfolioNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id="home" className="navbar portfolio-navbar fixed-top">
      <div className="container nav-shell">
        <a href="#home" className="brand-lockup" onClick={() => setOpen(false)}>
          <div className="navbar-dp" aria-hidden="true"></div>
          <span>Bhanu</span>
        </a>

        <button className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-menu ${open ? "open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="nav-link" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default PortfolioNavbar;
