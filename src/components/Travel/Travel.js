import React, { Component } from 'react';

import './Travel.css';

import Map from './Map/Map.js';

class Travel extends Component {
    render() {
      return (
        <div className="travel container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <h1 className="app-section-title">TRAVEL</h1>
                    <p className="app-section-body-text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl tellus, scelerisque eu consectetur eget, ullamcorper sit amet urna. Suspendisse a neque cursus, malesuada est in, mollis risus. In hac habitasse platea dictumst. Proin nec dolor sit amet risus accumsan volutpat quis id ipsum. Phasellus libero dolor, lacinia vel gravida nec, posuere eu mauris. Vivamus viverra metus vitae nunc pellentesque bibendum. Cras facilisis viverra finibus. Donec laoreet libero dui. Donec sit amet venenatis nibh, non suscipit erat. Ut scelerisque pulvinar neque non hendrerit. Nam eu tellus sed nulla dapibus rutrum vel eu arcu. Mauris venenatis tristique magna in venenatis.
                    </p>
                </div>
                <div className="col-md-9">
                    <Map/>
                </div>
            </div>
        </div>
      )
  }
}

export default Travel;
