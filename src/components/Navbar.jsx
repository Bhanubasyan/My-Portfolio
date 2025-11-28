import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const PortfolioNavbar = () => {
  return (
    <section id="home">
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <div className="navbar-dp"></div>

        {/* LOGO */}

        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Bhanu 
        </Navbar.Brand>

        {/* TOGGLER BUTTON FOR MOBILE */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* COLLAPSABLE NAV ITEMS */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">
              Home
            </Nav.Link>

            <Nav.Link href="#about" className="mx-2">
              About
            </Nav.Link>

            <Nav.Link href="#skills" className="mx-2">
              Skills
            </Nav.Link>

            <Nav.Link href="#projects" className="mx-2">
              Projects
            </Nav.Link>
 <Nav.Link href="#experince" className="mx-2">
              Experience
            </Nav.Link>

<Nav.Link href="#certifications" className="mx-2">
             Certifications
            </Nav.Link>

            <Nav.Link href="#contact" className="mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
};

export default PortfolioNavbar;
