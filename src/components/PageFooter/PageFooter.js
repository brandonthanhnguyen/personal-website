import React, { Component } from 'react';

import './PageFooter.css';

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="page-footer-title">
                        <h3>Website Info</h3>
                    </div>
                    <p className="page-footer-text">
                        This website was built using the following technologies:
                    </p>
                    <p className="page-footer-text">
                        <a href="https://github.com/brandonthanhnguyen/personal-website" target="_blank" rel="noopener noreferrer">Take a look at my code!</a>
                    </p>
                    <p className="page-footer-text">
                        © 2019 Brandon Nguyen
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="page-footer-title">
                        <h3>Resources Used</h3>
                    </div>
                    <p className="page-footer-text">
                        Neon Social Media Icons - Vector Illustration by <a href="https://vecteezy.com" target="_blank" rel="noopener noreferrer">vecteezy.com</a> 
                    </p>
                </div>
            </div>
        </div>
      </footer>
    );
  }
}

export default PageFooter;