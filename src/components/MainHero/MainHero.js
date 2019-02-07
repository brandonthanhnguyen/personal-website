import React, { Component } from 'react';

import './MainHero.css';

import Button from 'react-bootstrap/Button';

import PlaceholderMountains from '../../img/MainHero/placeholder_mountains.jpg';

class MainHero extends Component {
  render() {
    return (
      <div className="main-hero container-fluid">
        <div className="row align-items-center">
            <div className="col-md-8 main-hero-col1" style={{backgroundImage: 'url(' + PlaceholderMountains + ')'}}>
            </div>
            <div className="col-md-4 main-hero-col2">
                <div className="main-hero-text-container">
                    <h1 className="main-hero-subtitle hero-subtitle1">This is me,</h1>
                    <h1 className="main-hero-title">Brandon Nguyen</h1>
                    <h1 className="main-hero-subtitle hero-subtitle2">Developer & Designer</h1>

                    <p className="main-hero-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate mi ut mauris posuere maximus. Aenean sodales turpis ac quam lobortis, eu venenatis sapien tincidunt. Aliquam nulla felis, egestas sed enim quis, aliquet ornare dui. Sed scelerisque arcu diam, ac interdum sem convallis ut.
                    </p>
                    <Button className="main-hero-button" variant="outline-primary">Let's Connect</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default MainHero;
