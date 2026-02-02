import React, { Component } from "react";

import "./MainHero.css";

import Button from "react-bootstrap/Button";

import HeroImage from "../../assets/images/MainHero/hero_image.jpeg";

class MainHero extends Component {
  componentDidMount() {
    const overlay = document.getElementById("hero-overlay");

    setTimeout(function () {
      overlay.style.transform = "translateY(0)";
      overlay.style.opacity = 100;
    }, 500);
  }

  render() {
    return (
      <div className="main-hero container-fluid" id="section-main-hero">
        <div className="row row-eq-height hero-row">
          <canvas
            className="col-md-12 main-hero-col1"
            style={{ backgroundImage: "url(" + HeroImage + ")" }}
          />
          <div id="hero-overlay" className="col-md-4 main-hero-col2">
            <div className="main-hero-text-container">
              <h1 className="main-hero-subtitle hero-subtitle1">This is me,</h1>
              <h1 className="main-hero-title">Brandon Nguyen</h1>
              <h1 className="main-hero-subtitle hero-subtitle2">
                Developer & Designer
              </h1>
              <p className="main-hero-text">
                Software Engineer with 7+ years of experience designing,
                developing, and deploying full-stack, cloud-based web
                applications. Strong expertise in JavaScript, HTML, CSS, React,
                Vue, Node.js, and REST APIs, with hands-on experience in
                microservices architectures, containerization, and cloud
                infrastructure. Proven ability to deliver high-quality software
                across the full development lifecycle in Agile environments,
                with a strong focus on UI/UX best practices, performance, and
                scalability.
              </p>
              <p className="main-hero-text">
                My passion is turning complex systems into{" "}
                <span className="hero-emphasis">
                  clean, high-performance user experiences.
                </span>
              </p>
              <a href="mailto:me@nguyenbrandon.com?subject=Website%20Contact">
                <Button className="main-hero-button" variant="outline-primary">
                  Let&#39;s Connect
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHero;
