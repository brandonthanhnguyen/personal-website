import React from "react";

import "./NavigationDots.css";

interface NavigationDotsProps {
  scrollTo: (ref: string) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ scrollTo }) => {
  return (
    <nav className="navigation-dots" id="vertical-navigation">
      <ul>
        <li onClick={() => scrollTo("introduction")}>
          <a href="/#">
            <span
              className="vertical-navigation-dot"
              id="dot-introduction"
            ></span>
            <span className="vertical-navigation-label">INTRODUCTION</span>
          </a>
        </li>
        <li onClick={() => scrollTo("about")}>
          <a href="/#">
            <span className="vertical-navigation-dot" id="dot-about"></span>
            <span className="vertical-navigation-label">ABOUT ME</span>
          </a>
        </li>
        <li onClick={() => scrollTo("experience")}>
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
};

export default NavigationDots;
