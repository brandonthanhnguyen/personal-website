import React, { Component } from 'react';

import './Map.css';

import world_map from './world-110m.json';

import { Motion, spring } from "react-motion";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

const cities = [
  { name: "Los Angeles", coordinates: [-118.2437,34.0522] },
  { name: "Honolulu", coordinates: [-157.8583,21.3069] },
  { name: "Raleigh", coordinates: [-78.6382,35.7796] },
  { name: "Morgantown", coordinates: [-79.9559,39.6295] },
  { name: "Niagara Falls", coordinates: [-79.0377,43.0962] },
  { name: "Grand Canyon", coordinates: [-112.1130,36.1070] },
  { name: "Rome", coordinates: [12.4964,41.9028] },
  { name: "Venice", coordinates: [12.3155,45.4408] },
  { name: "Athens", coordinates: [23.7275,37.9838] },
  { name: "Budapest", coordinates: [19.0402,47.4979] },
  { name: "Berlin", coordinates: [13.4050,52.5200] },
  { name: "Paris", coordinates: [2.3522,48.8566] },
  { name: "Ho Chi Minh City", coordinates: [106.6297,10.8231] },
]

class Map extends Component {
    constructor() {
      super()
      this.state = {
        center: [0,20],
        zoom: 1,
      }
    }

    handleZoomIn = () => {
      this.setState({
        zoom: this.state.zoom * 2,
      })
    }

    handleZoomOut = () => {
      this.setState({
        zoom: this.state.zoom / 2,
      })
    }

    handleCityClick = (city) => {
      this.setState({
        zoom: 2,
        center: city.coordinates,
      })
    }

    handleReset = () => {
      this.setState({
        center: [0,20],
        zoom: 1,
      })
    }

    render() {
      return (
        <div className="map">
          <button onClick={this.handleZoomIn}>
            { "Zoom in" }
          </button>
          <button onClick={this.handleZoomOut}>
            { "Zoom out" }
          </button>
          <button onClick={this.handleReset}>
            { "Reset" }
          </button>
          <Motion
            defaultStyle={{
              zoom: 1,
              x: 0,
              y: 20,
            }}
            style={{
              zoom: spring(this.state.zoom, {stiffness: 210, damping: 20}),
              x: spring(this.state.center[0], {stiffness: 210, damping: 20}),
              y: spring(this.state.center[1], {stiffness: 210, damping: 20}),
            }}
            >
            {({zoom,x,y}) => (
              <ComposableMap
                projectionConfig={{ scale: 205, rotation: [-11,0,0] }}
                width={980}
                height={551}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                >
                <ZoomableGroup center={[x,y]} zoom={zoom}>
                  <Geographies geography={world_map}>
                    {(geographies, projection) =>
                      geographies.map((geography, i) => geography.id !== "010" && (
                        <Geography
                          key={i}
                          geography={geography}
                          projection={projection}
                          style={{
                            default: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                            hover: {
                              fill: "#CFD8DC",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                            pressed: {
                              fill: "#FF5722",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                          }}
                        />
                    ))}
                  </Geographies>
                  <Markers>
                    {cities.map((city, i) => (
                      <Marker
                        key={i}
                        marker={city}
                        onClick={this.handleCityClick}
                        >
                        <circle
                          cx={0}
                          cy={0}
                          r={6}
                          fill="#FF5722"
                          stroke="#DF3702"
                        />
                      </Marker>
                    ))}
                  </Markers>
                </ZoomableGroup>
              </ComposableMap>
            )}
          </Motion>
        </div>
      )
  }
}

export default Map;
