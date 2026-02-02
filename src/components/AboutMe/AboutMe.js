import React, { Component } from "react";

import "./AboutMe.css";

import awsBadge from "../../assets/images/AboutMe/badge_aws.png";
import icpBadge from "../../assets/images/AboutMe/badge_icp.svg";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me" id="section-about-me">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1 className="app-section-title">ABOUT ME</h1>
              <p className="app-section-body-text">Hey everyone!</p>
              <p className="app-section-body-text">
                I&#39;m a Software Engineer based in Raleigh, North Carolina.
              </p>
              <p className="app-section-body-text">
                I currently work as a Staff Software Engineer at Applied
                Research Associates and received my B.S. in Computer Science
                from NC State University in 2018.
              </p>
              <p className="app-section-body-text">
                Most of my experience is full-stack, with a primary focus on
                frontend web development and UI/UX. I specialize in building
                visually polished interfaces that are intuitive, accessible, and
                grounded in real user needs. Alongside my frontend expertise, I
                maintain a broad technical skill set with hands-on experience
                across the stack, including backend services, database design,
                Java development, and cloud-based applications.
              </p>
              <h1
                className="app-section-title"
                style={{
                  marginTop: "2rem",
                }}
              >
                PERSONAL INTERESTS
              </h1>
              <p className="app-section-body-text about-last">
                Outside of work, I enjoy staying active through running and
                playing sports like basketball and bowling. I&#39;m also
                passionate about travel and exploring new cultures, especially
                through food—trying local cuisine is always a highlight of any
                trip. I&#39;ve recently traveled to South Africa, Vietnam, and
                Singapore, and I&#39;m always looking ahead to the next
                destination and the experiences that come with it.
              </p>
            </div>
            <div className="col-md-6">
              <h1 className="app-section-title">SKILLS</h1>
              <div className="skills-container">
                <h3>Frontend & UI</h3>
                <p>
                  JavaScript, HTML, CSS • Vue, React, Angular • UI/UX
                  Prototyping, Responsive Design
                </p>
                <h3>Back-End & Full Stack</h3>
                <p>Node.js, Java • REST APIs • Microservices Architecture</p>
                <h3>Cloud & DevOps</h3>
                <p>Docker, Kubernetes • AWS • IBM Cloud</p>
                <h3>Databases</h3>
                <p>PostgreSQL • MySQL • MongoDB • NoSQL • SQL Server</p>
                <h3>Tools & Practices</h3>
                <p>
                  Git (GitHub, GitLab, Bitbucket) • Jira • Agile, Scrum, Kanban
                  • CI/CD • Test-Driven Development
                </p>
              </div>
              <div id="badges-container" className="badges-container">
                <a
                  href="https://aws.amazon.com/certification/certified-solutions-architect-associate/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="about-me-badge"
                    id="aws-badge"
                    style={{ backgroundImage: "url(" + awsBadge + ")" }}
                  />
                </a>
                <a
                  href="https://icagile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="about-me-badge"
                    style={{ backgroundImage: "url(" + icpBadge + ")" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
