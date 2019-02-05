import React, { Component } from 'react';

import './NavigationBar.css';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import LinkedInLogo from '../../img/Navigation/neon_linkedin.png'
import FacebookLogo from '../../img/Navigation/neon_facebook.png'
import TwitterLogo from '../../img/Navigation/neon_twitter.png'
import InstagramLogo from '../../img/Navigation/neon_instagram.png'

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Brandon Nguyen</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <span className="nav-social-media">
              <a href="https://www.linkedin.com/in/brandon-t-nguyen/" target="_blank"><img className="nav-icon" height="30" width="30" src={LinkedInLogo}/></a>
              <a href="https://www.facebook.com/BrandonNguyenNC" target="_blank"><img className="nav-icon" height="30" width="20" src={FacebookLogo}/></a>
              <a href="https://twitter.com/imbrandonwin" target="_blank"><img className="nav-icon" height="30" width="30" src={TwitterLogo}/></a>
              <a href="https://www.instagram.com/imbrandonwin/" target="_blank"><img className="nav-icon" height="30" width="30" src={InstagramLogo}/></a>
            </span>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
