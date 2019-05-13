import React, {Component} from 'react';

import './Experience.css';

import logoIBM from '../../img/Experience/logo_ibm.png'
import logoNCSU from '../../img/Experience/logo_ncsu.png'
import logoWingSwept from '../../img/Experience/logo_wingswept.jpg'

import Card from 'react-bootstrap/Card';

class Experience extends Component {
    render() {
        return (<div id="section-experience">
            <hr className="section-divider"/>
            <div className="experience">
                <div className="container-fluid">
                    <h1 className="app-section-title">EXPERIENCE</h1>
                    <div className="work-cards-container">
                        <Card className="work-card">
                            <div className="card-image" style={{
                                    backgroundImage: 'url(' + logoIBM + ')',
                                    backgroundSize: '60%'
                                }}/>
                            <Card.Body>
                                <Card.Title>Software Developer</Card.Title>
                                <Card.Subtitle>IBM</Card.Subtitle>
                                <Card.Subtitle>July 2018 - Present</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card className="work-card">
                            <div className="card-image" style={{
                                    backgroundImage: 'url(' + logoWingSwept + ')',
                                    backgroundSize: '60%'
                                }}/>
                            <Card.Body>
                                <Card.Title>Application Developer Intern</Card.Title>
                                <Card.Subtitle>WingSwept</Card.Subtitle>
                                <Card.Subtitle>May 2016 - May 2018</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card className="work-card">
                            <div className="card-image" style={{
                                    backgroundImage: 'url(' + logoNCSU + ')',
                                    backgroundSize: '35%'
                                }}/>
                            <Card.Body>
                                <Card.Title>Graphic Design Assistant</Card.Title>
                                <Card.Subtitle>NC State Student Health Services</Card.Subtitle>
                                <Card.Subtitle>February 2016 - May 2017</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Experience;
