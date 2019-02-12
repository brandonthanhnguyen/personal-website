import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/Navigation/NavigationBar.js';
import PageFooter from './components/PageFooter/PageFooter.js';

import MainHero from './components/MainHero/MainHero.js';
import AboutMe from './components/AboutMe/AboutMe.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <MainHero />

        <AboutMe />

        <PageFooter />
      </div>
    );
  }
}

export default App;
