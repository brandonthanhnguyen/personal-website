import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

import NavigationBar from './components/Navigation/NavigationBar.js';
import NavigationDots from './components/Navigation/NavigationDots.js';
import PageFooter from './components/PageFooter/PageFooter.js';

import MainHero from './components/MainHero/MainHero.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Experience from './components/Experience/Experience.js';

import scrollToComponent from 'react-scroll-to-component';

import $ from 'jquery';

class App extends Component {

    componentDidMount() {
        if (window.location.pathname === "/") {
            window.addEventListener('scroll', this.handleScroll);
            document.getElementById("dot-introduction").style.backgroundColor = "#007bff";
        }
    }

    componentWillUnmount() {
        if (window.location.pathname === "/") {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = () => {
        var section1 = document.getElementById("section-main-hero");

        if (this.isInViewport(section1)) {
            document.getElementById("dot-introduction").style.backgroundColor = "#007bff";
        } else {
            document.getElementById("dot-introduction").style.backgroundColor = "white";
        }

        var section2 = document.getElementById("section-about-me");

        if (this.isInViewport(section2)) {
            document.getElementById("dot-about").style.backgroundColor = "#007bff";
        } else {
            document.getElementById("dot-about").style.backgroundColor = "white";
        }

        var section3 = document.getElementById("section-experience");

        if (this.isInViewport(section3)) {
            document.getElementById("dot-experience").style.backgroundColor = "#007bff";
        } else {
            document.getElementById("dot-experience").style.backgroundColor = "white";
        }
    }

    isInViewport = (element) => {
        return ($(element).offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($(element).offset().top + $(element).height() - $(window).height() / 2 > $(window).scrollTop());
    }

    scrollTo = (ref) => {
        if (ref === "introduction") {
            scrollToComponent(this.refs.introduction, {align: 'bottom'});
        }

        if (ref === "about") {
            scrollToComponent(this.refs.about, {align: 'top'});
        }

        if (ref === "experience") {
            scrollToComponent(this.refs.experience, {align: 'top'});
        }
    }

    render() {
        return (<Router>
            <div className="App">
                <NavigationBar scrollTo={this.scrollTo}/>

                <Route exact path="/" render={props => <NavigationDots scrollTo={this.scrollTo}/>}/>
                <Route exact path="/" ref="introduction" component={MainHero}/>
                <Route exact path="/" ref="about" component={AboutMe}/>
                <Route exact path="/" ref="experience" component={Experience}/>

                <PageFooter/>
            </div>
        </Router>);
    }
}

export default App;
