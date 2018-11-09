import React from 'react';

import '../styles/header.css';

function Header(props) {
  return (
    <header>
      <div className="header-container">
        <div className="header-right">
          <div className="header-img-container">
            <img className="header-img" src={require('../assets/header.png')} alt="placeholder" />
          </div>
        </div>
        <div className="header-left">
          <div className="title-text-container">
            <h1>Move the way you want</h1>
          </div>
          <div className="drive-ride-container">
            <div className="drive">
              <h2>Drive</h2>
              <p>Drive when you want. Find opportunities around you.</p>
              <p>Learn more.</p>
            </div>
            <div className="ride">
              <h2>Ride</h2>
              <p>Tap your phone. Get where you're headed.</p>
              <p>Learn more.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
