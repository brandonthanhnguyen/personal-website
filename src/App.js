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
        <div style={{height: '750px', backgroundColor: '#282c34'}}/>
        <PageFooter />
      </div>
    );
  }
}

export default App;
