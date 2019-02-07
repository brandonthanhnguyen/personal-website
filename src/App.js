import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/Navigation/NavigationBar.js';
import PageFooter from './components/PageFooter/PageFooter.js';

import MainHero from './components/MainHero/MainHero.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <MainHero />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <PageFooter />
      </div>
    );
  }
}

export default App;
