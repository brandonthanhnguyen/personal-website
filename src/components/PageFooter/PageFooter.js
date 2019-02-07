import React, { Component } from 'react';

import './PageFooter.css';

import ReactIcon from '../../img/PageFooter/icon_react.png';
import BootstrapIcon from '../../img/PageFooter/icon_bootstrap.png';
import GithubIcon from '../../img/PageFooter/icon_github_light.png';
import NodeJsIcon from '../../img/PageFooter/icon_node_js.png';

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 page-footer-col1">
                    <div className="page-footer-title">
                        <h3>Website Info</h3>
                    </div>
                    <p className="page-footer-text">
                        This website was built using the following technologies:
                    </p>
                    <div className="page-footer-icons">
                        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><div className="footer-icon" style={{backgroundImage: 'url(' + NodeJsIcon + ')'}}></div></a>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><div className="footer-icon" style={{backgroundImage: 'url(' + ReactIcon + ')'}}></div></a>
                        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><div className="footer-icon" style={{backgroundImage: 'url(' + BootstrapIcon + ')'}}></div></a>
                        <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer"><div className="footer-icon" style={{backgroundImage: 'url(' + GithubIcon + ')'}}></div></a>
                    </div>
                    <p className="page-footer-text">
                        <a href="https://github.com/brandonthanhnguyen/personal-website" target="_blank" rel="noopener noreferrer">Take a look at my code!</a>
                    </p>
                </div>
                <div className="col-md-6 page-footer-col2">
                    <div className="page-footer-title">
                        <h3>Resources Used</h3>
                    </div>
                    <p className="page-footer-text">
                        Neon Social Media Icons - Vector Illustration by <a href="https://www.vecteezy.com/vector-art/142829-neon-social-media-logos" target="_blank" rel="noopener noreferrer">vecteezy.com</a>
                    </p>
                    <p className="page-footer-text">
                        <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer">Poppins Font</a>
                    </p>
                    <p className="page-footer-text">
                        <a href="https://www.dafont.com/hearth-stone.font" target="_blank" rel="noopener noreferrer">Hearth Stone Font</a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="page-footer-text copyright">
                        © 2019 Brandon Nguyen
                    </p>
                </div>
            </div>
        </div>
      </footer>
    );
  }
}

export default PageFooter;
