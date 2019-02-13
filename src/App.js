import React, {Component} from 'react';
import './App.css';

import NavigationBar from './components/Navigation/NavigationBar.js';
import PageFooter from './components/PageFooter/PageFooter.js';

import MainHero from './components/MainHero/MainHero.js';
import AboutMe from './components/AboutMe/AboutMe.js';

import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
    scrollTo = (ref) => {
        if (ref === "home") {
            scrollToComponent(this.refs.home, {align: 'top'});
        }

        if (ref === "about") {
            scrollToComponent(this.refs.about, {align: 'top'});
        }
    }

    render() {
        return (
            <div className="App">
            <NavigationBar scrollTo={this.scrollTo}/>
            <MainHero ref="home"/>
            <AboutMe ref="about"/>
            <PageFooter/>
            </div>
        );
    }
}

export default App;
