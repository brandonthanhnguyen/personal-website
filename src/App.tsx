import React, { useEffect, useCallback } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./components/Navigation/NavigationBar";
import NavigationDots from "./components/Navigation/NavigationDots";
import PageFooter from "./components/PageFooter/PageFooter";

import MainHero from "./components/MainHero/MainHero";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";

const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  return rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
};

const App: React.FC = () => {
  const handleScroll = useCallback(() => {
    const section1 = document.getElementById("section-main-hero");
    const section2 = document.getElementById("section-about-me");
    const section3 = document.getElementById("section-experience");
    const dotIntro = document.getElementById("dot-introduction");
    const dotAbout = document.getElementById("dot-about");
    const dotExp = document.getElementById("dot-experience");

    if (section1 && dotIntro) {
      dotIntro.style.backgroundColor = isInViewport(section1)
        ? "#007bff"
        : "white";
    }
    if (section2 && dotAbout) {
      dotAbout.style.backgroundColor = isInViewport(section2)
        ? "#007bff"
        : "white";
    }
    if (section3 && dotExp) {
      dotExp.style.backgroundColor = isInViewport(section3)
        ? "#007bff"
        : "white";
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      const dotIntro = document.getElementById("dot-introduction");
      if (dotIntro) dotIntro.style.backgroundColor = "#007bff";
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollTo = (ref: string): void => {
    const idMap: Record<string, string> = {
      introduction: "section-main-hero",
      about: "section-about-me",
      experience: "section-experience",
    };
    const el = document.getElementById(idMap[ref]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <Route
          exact
          path="/"
          render={() => <NavigationDots scrollTo={scrollTo} />}
        />
        <Route exact path="/" component={MainHero} />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/" component={Experience} />

        <PageFooter />
      </div>
    </Router>
  );
};

export default App;
