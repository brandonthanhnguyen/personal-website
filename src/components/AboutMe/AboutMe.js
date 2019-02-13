import React, { Component } from 'react';

import './AboutMe.css';

var skills = [
  {
    "type": "HTML",
    "level": 95
  },
  {
    "type": "CSS",
    "level": 90
  },
  {
    "type": "JavaScript",
    "level": 75
  },
  {
    "type": "Node.js",
    "level": 80
  },
  {
    "type": "React",
    "level": 85
  },
  {
    "type": "Java",
    "level": 85
  },
  {
    "type": "MySQL",
    "level": 80
  },
  {
    "type": "AWS",
    "level": 70
  },
]

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="app-section-title">ABOUT ME</h1>
                    <p className="app-section-body-text">Hey everyone!</p>
                    <p className="app-section-body-text">I am a 23-year-old from North Carolina living in Cumberland, Maryland.</p>
                    <p className="app-section-body-text">I currently work as a technical consultant for IBM Global Business Services and received my B.S. in Computer Science from NC State University in 2018.</p>
                    <p className="app-section-body-text">My main areas of focus are web development and UI/UX design. I strive to create visually-appealing applications that are both fully functional and intuitive. I also maintain a diverse skillset and have experience working in all areas of the stack including database management, Java development, cloud applications, etc.</p>
                    <h1 className="app-section-title" style={{marginTop: '2rem'}}>PERSONAL INTERESTS</h1>
                    <p className="app-section-body-text">In my spare time, I like to stay active through running and playing sports such as basketball and football.</p>
                    <p className="app-section-body-text">I am also an avid traveller who dreams of seeing all of the world's major attractions (cliché I know). My last trip was a small tour around Western Europe and I plan to visit Southeast Asia next.</p>
                    <p className="app-section-body-text about-last">I sometimes dabble in other forms of digital media. <a href="/">Check out some of my work!</a></p>
                </div>
                <div className="col-md-6">
                    <h1 className="app-section-title">SKILLS & PROFICIENCY</h1>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
