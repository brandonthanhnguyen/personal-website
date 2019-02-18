import React, {Component} from 'react';

import './AboutMe.css';

import ProgressBar from 'react-bootstrap/ProgressBar';
import awsBadge from '../../img/AboutMe/badge_aws.png'
import icpBadge from '../../img/AboutMe/badge_icp.svg'

import $ from 'jquery';

class AboutMe extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var element = document.getElementById("skillbar-html");

        if (this.isInViewport(element)) {
            var progressBars = document.getElementsByClassName("progress-bar");

            setTimeout(function() {
                for (var i = 0; i < progressBars.length; i++) {
                    if (progressBars[i].style.width === "0%") {
                        progressBars[i].style.width = progressBars[i].innerHTML;
                    }
                }
            }, (500));
        }
    }

    isInViewport = (element) => {
        var elemTop = $(element).offset().top;
        var elemBottom = elemTop + $(element).height();

        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    render() {
        return (<div className="about-me">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="app-section-title">ABOUT ME</h1>
                        <p className="app-section-body-text">Hey everyone!</p>
                        <p className="app-section-body-text">I am a 23-year-old from North Carolina living in Cumberland, Maryland.</p>
                        <p className="app-section-body-text">I currently work as a technical consultant for IBM Global Business Services and received my B.S. in Computer Science from NC State University in 2018.</p>
                        <p className="app-section-body-text">My main areas of focus are web development and UI/UX design. I strive to create visually-appealing applications that are both fully functional and intuitive. I also maintain a diverse skillset and have experience working in all areas of the stack including database management, Java development, cloud applications, etc.</p>
                        <h1 className="app-section-title" style={{
                                marginTop: '2rem'
                            }}>PERSONAL INTERESTS</h1>
                        <p className="app-section-body-text">In my spare time, I like to stay active through running and playing sports such as basketball and football.</p>
                        <p className="app-section-body-text">I am also an avid traveller who dreams of seeing all of the world's major attractions (cliché I know). My last trip was a small tour around Western Europe and I plan to visit Southeast Asia next.</p>
                        <p className="app-section-body-text about-last">I sometimes dabble in other forms of digital media.&nbsp;<a href="/">Check out some of my work!</a>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h1 className="app-section-title">SKILLS & PROFICIENCY</h1>
                        <div className="skillbar-container">
                            <div className="skillbar">
                                <span className="skillbar-title">HTML/CSS/JavaScript</span>
                                <ProgressBar id="skillbar-html" min="0" max="100" now="0" label="95%"/>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">Node.js</span>
                                <ProgressBar id="skillbar-node" min="0" max="100" now="0" label="70%"/>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">React</span>
                                <ProgressBar id="skillbar-react" min="0" max="100" now="0" label="85%"/>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">Java</span>
                                <ProgressBar id="skillbar-java" min="0" max="100" now="0" label="80%"/>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">Amazon Web Services/IBM Cloud</span>
                                <ProgressBar id="skillbar-cloud" min="0" max="100" now="0" label="70%"/>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">SQL</span>
                                <ProgressBar id="skillbar-sql" min="0" max="100" now="0" label="75%"/>
                            </div>

                            <div className="skillbar">
                                <span className="skillbar-title">Photoshop</span>
                                <ProgressBar id="skillbar-photoshop" min="0" max="100" now="0" label="80%"/>
                            </div>
                        </div>
                        <div className="badges-container">
                            <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank" rel="noopener noreferrer"><div className="about-me-badge" style={{backgroundImage: 'url(' + awsBadge + ')'}} /></a>
                            <a href="https://icagile.com/" target="_blank" rel="noopener noreferrer"><div className="about-me-badge" style={{backgroundImage: 'url(' + icpBadge + ')'}} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default AboutMe;
