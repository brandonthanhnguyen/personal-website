import React, { Component } from "react";

import "./Experience.css";

import logoARA from "../../assets/images/Experience/logo_ara.png";
import logoIBM from "../../assets/images/Experience/logo_ibm.png";
import logoNCSU from "../../assets/images/Experience/logo_ncsu.png";
import logoWingSwept from "../../assets/images/Experience/logo_wingswept.jpg";

import Card from "react-bootstrap/Card";

class Experience extends Component {
  render() {
    return (
      <div id="section-experience">
        <hr className="section-divider" />
        <div className="experience">
          <div className="container-fluid">
            <h1 className="app-section-title">EXPERIENCE</h1>
            <div className="work-cards-container">
              <Card className="work-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: "url(" + logoARA + ")",
                    backgroundSize: "40%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Staff Software Engineer</Card.Title>
                  <Card.Subtitle>Applied Research Associates</Card.Subtitle>
                  <Card.Subtitle>March 2020 - Present</Card.Subtitle>
                  <Card.Text>
                    • Lead UI Engineer for several production applications,
                    supporting complex workflows and 3D model generation
                    <br />
                    • Developed high-performance front-end systems using React
                    and Vue, with a strong focus on accessibility and
                    maintainability
                    <br />
                    • Designed and integrated REST APIs, partnering closely with
                    backend teams on data models and service contracts
                    <br />
                    • Deployed containerized applications using Docker and
                    Kubernetes in cloud-based environments
                    <br />
                    • Applied UI/UX best practices through iterative stakeholder
                    feedback to improve usability and workflow efficiency
                    <br />
                    • Delivered features across the full software development
                    lifecycle in Agile (Scrum and Kanban) teams
                    <br />• Served as intern program coordinator, mentoring
                    interns and driving successful full-time conversions
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="work-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: "url(" + logoIBM + ")",
                    backgroundSize: "60%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Software Developer</Card.Title>
                  <Card.Subtitle>IBM</Card.Subtitle>
                  <Card.Subtitle>July 2018 - March 2020</Card.Subtitle>
                  <Card.Text>
                    • Developed and deployed full-stack, microservices-based
                    applications for a major federal client
                    <br />
                    • Built responsive front-end interfaces using React, HTML,
                    CSS, and JavaScript
                    <br />
                    • Implemented backend services using Java, integrating with
                    MySQL and NoSQL databases
                    <br />• Earned the GBS Service Excellence Award for
                    designing and delivering a UI Design & Development training
                    course
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="work-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: "url(" + logoWingSwept + ")",
                    backgroundSize: "60%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Application Developer Intern</Card.Title>
                  <Card.Subtitle>WingSwept</Card.Subtitle>
                  <Card.Subtitle>May 2016 - May 2018</Card.Subtitle>
                  <Card.Text>
                    • Developed full-stack web applications using JavaScript,
                    HTML, CSS, Java, and MySQL
                    <br />
                    • Built hybrid mobile applications using AngularJS and Ionic
                    <br />
                    • Collaborated directly with customers to troubleshoot
                    issues and improve the user experience
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="work-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: "url(" + logoNCSU + ")",
                    backgroundSize: "35%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Graphic Design Assistant</Card.Title>
                  <Card.Subtitle>
                    NC State Student Health Services
                  </Card.Subtitle>
                  <Card.Subtitle>February 2016 - May 2017</Card.Subtitle>
                  <Card.Text>
                    • Designed digital and print media using Adobe Illustrator
                    and Photoshop
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
