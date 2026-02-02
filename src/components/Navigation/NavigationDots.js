import React, { Component } from "react";
import PropTypes from "prop-types";

import "./NavigationDots.css";

class NavigationDots extends Component {
  scroll(ref) {
    this.props.scrollTo(ref);
  }

  render() {
    return (
      <nav className="navigation-dots" id="vertical-navigation">
        <ul>
          <li onClick={() => this.scroll("introduction")}>
            <a href="/#">
              <span
                className="vertical-navigation-dot"
                id="dot-introduction"
              ></span>
              <span className="vertical-navigation-label">INTRODUCTION</span>
            </a>
          </li>
          <li onClick={() => this.scroll("about")}>
            <a href="/#">
              <span className="vertical-navigation-dot" id="dot-about"></span>
              <span className="vertical-navigation-label">ABOUT ME</span>
            </a>
          </li>
          <li onClick={() => this.scroll("experience")}>
            <a href="/#">
              <span
                className="vertical-navigation-dot"
                id="dot-experience"
              ></span>
              <span className="vertical-navigation-label">EXPERIENCE</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

NavigationDots.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};

export default NavigationDots;
