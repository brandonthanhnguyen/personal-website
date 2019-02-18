import React, { Component } from 'react';

import './NavigationBar.css';

import { Navbar, Nav } from 'react-bootstrap';

import LinkedInLogo from '../../img/Navigation/neon_linkedin.png'
import FacebookLogo from '../../img/Navigation/neon_facebook.png'
import TwitterLogo from '../../img/Navigation/neon_twitter.png'
import InstagramLogo from '../../img/Navigation/neon_instagram.png'

class NavigationBar extends Component {

  scroll(ref) {
      this.props.scrollTo(ref);
  }

  render() {

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home"><span className="nav-logo">Brandon Nguyen</span></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <span className="nav-social-media">
              <a href="https://www.linkedin.com/in/brandon-t-nguyen/" target="_blank" rel="noopener noreferrer"><img className="nav-icon" height="30" width="30" alt="LinkedInLogo" src={LinkedInLogo}/></a>
              <a href="https://www.facebook.com/BrandonNguyenNC" target="_blank" rel="noopener noreferrer"><img className="nav-icon" height="30" width="20" alt="FacebookLogo"  src={FacebookLogo}/></a>
              <a href="https://twitter.com/imbrandonwin" target="_blank" rel="noopener noreferrer"><img className="nav-icon" height="30" width="30" alt="TwitterLogo"  src={TwitterLogo}/></a>
              <a href="https://www.instagram.com/imbrandonwin/" target="_blank" rel="noopener noreferrer"><img className="nav-icon" height="30" width="30" alt="InstagramLogo" src={InstagramLogo}/></a>
            </span>
          </Nav>
          <Nav>
            <Nav.Link className="nav-text" onClick={() => this.scroll("home")}>HOME</Nav.Link>
            <Nav.Link className="nav-text" onClick={() => this.scroll("about")}>ABOUT</Nav.Link>
            <Nav.Link className="nav-text" onClick={() => this.scroll("experience")}>EXPERIENCE</Nav.Link>
            <Nav.Link className="nav-text" >PORTFOLIO</Nav.Link>
            <Nav.Link className="nav-text">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
