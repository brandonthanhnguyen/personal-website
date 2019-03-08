import React, { Component } from 'react';

import './MainHero.css';

import Button from 'react-bootstrap/Button';
import Particles from 'react-particles-js';

import PlaceholderMountains from '../../img/MainHero/placeholder_mountains.jpg';

class MainHero extends Component {

  componentDidMount() {
    var overlay = document.getElementById('hero-overlay');

    setTimeout(function() {
        overlay.style.transform = "translateY(0)";
        overlay.style.opacity = 100;
    }, (500));
  }

  render() {
    return (
      <div className="main-hero container-fluid" id="section-main-hero">
        <div className="row row-eq-height hero-row">
            <Particles className="col-md-12 main-hero-col1" params={{
                    "particles": {
                      "number": {
                        "value": 75,
                        "density": {
                          "enable": true,
                          "value_area": 1000
                        }
                      },
                      "color": {
                        "value": "#d3d3d3"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#d3d3d3"
                        },
                        "polygon": {
                          "nb_sides": 5
                        }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 0.5,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#d3d3d3",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    }
                }} style={{backgroundImage: 'url(' + PlaceholderMountains + ')'}}/>
            <div id="hero-overlay" className="col-md-4 main-hero-col2">
                <div className="main-hero-text-container">
                    <h1 className="main-hero-subtitle hero-subtitle1">This is me,</h1>
                    <h1 className="main-hero-title">Brandon Nguyen</h1>
                    <h1 className="main-hero-subtitle hero-subtitle2">Developer & Designer</h1>
                    <p className="main-hero-text">
                        I am a software engineer specializing in front-end development. I have a strong creative eye that allows me to incorporate photography/videography, graphic design, and animation into my work.
                    </p>
                    <p className="main-hero-text">
                        My passion is transforming simple ideas into <span className="hero-emphasis">modern</span> and <span className="hero-emphasis">fully immersive</span> user experiences.
                    </p>
                    <a href="mailto:me@nguyenbrandon.com?subject=Website%20Contact"><Button className="main-hero-button" variant="outline-primary">Let's Connect</Button></a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default MainHero;
