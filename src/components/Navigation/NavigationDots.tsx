import React from "react";

import "./NavigationDots.css";

interface NavigationDotsProps {
  scrollTo: (ref: string) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ scrollTo }) => {
  const handleClick = (e: React.MouseEvent, ref: string) => {
    e.preventDefault();
    scrollTo(ref);
  };

  return (
    <nav className="navigation-dots" id="vertical-navigation">
      <ul>
        <li>
          <a href="/" onClick={(e) => handleClick(e, "introduction")}>
            <span
              className="vertical-navigation-dot"
              id="dot-introduction"
            ></span>
            <span className="vertical-navigation-label">INTRODUCTION</span>
          </a>
        </li>
        <li>
          <a href="/" onClick={(e) => handleClick(e, "about")}>
            <span className="vertical-navigation-dot" id="dot-about"></span>
            <span className="vertical-navigation-label">ABOUT ME</span>
          </a>
        </li>
        <li>
          <a href="/" onClick={(e) => handleClick(e, "experience")}>
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
