import React, { Component } from 'react';

import './Travel.css';

import Map from './Map/Map.js';
import {Helmet} from "react-helmet";

class Travel extends Component {
    render() {
      return (
        <div className="travel container-fluid">
            <Helmet>
                <title>Brandon Nguyen | Travel</title>
            </Helmet>

            <div className="row">
                <div className="col-md-3">
                    <p className="app-section-body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet dui id pellentesque commodo. Donec sed massa mi. Proin dictum arcu eu felis mattis cursus. Nulla eget eros et nulla fermentum condimentum non sed mi. Nullam ante turpis, tempor non orci vitae, cursus imperdiet dolor. Duis accumsan auctor dolor sed sollicitudin. Pellentesque ut arcu ullamcorper eros malesuada venenatis. In iaculis scelerisque felis. Aliquam tempus vehicula nibh sit amet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget massa eu purus porttitor placerat et vitae felis.
                    </p>
                </div>
                <div className="col-md-9">
                    <Map/>
                </div>
            </div>
        </div>
      )
  }
}

export default Travel;
