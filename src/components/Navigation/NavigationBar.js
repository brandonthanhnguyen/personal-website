import React, { Component } from "react";

import "./NavigationBar.css";

import { Navbar, Nav } from "react-bootstrap";

import LinkedInLogo from "../../assets/images/Navigation/neon_linkedin.png";
import GitHubLogo from "../../assets/images/Navigation/neon_github.png";
class NavigationBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="#home">
          <span className="nav-logo">Brandon Nguyen</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <span className="nav-social-media">
              <a
                href="https://www.linkedin.com/in/brandonthanhnguyen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="nav-icon"
                  height="30"
                  width="30"
                  alt="LinkedInLogo"
                  src={LinkedInLogo}
                />
              </a>
            </span>
            <span className="nav-social-media">
              <a
                href="https://github.com/brandonthanhnguyen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="nav-icon"
                  height="30"
                  width="30"
                  alt="GitHubLogo"
                  src={GitHubLogo}
                />
              </a>
            </span>
          </Nav>
          <Nav>
            <Nav.Link className="nav-text" href="/">
              HOME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
