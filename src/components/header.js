import React from 'react';

import './header.css';

function Header(props) {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div className="title-text-container">
            <h1>Move the way you want</h1>
          </div>
          <div className="drive-ride-container">
            <div className="drive">
              <h2>Drive</h2>
              <p>Drive when you want. Find opportunities around you.</p>
              <a className="learn-more-link" href="https://dailyverse.netlify.com">Learn more</a>
              <a className="drive-link" href="https://dailyverse.netlify.com">Sign up to drive</a>
            </div>
            <div className="ride">
              <h2>Ride</h2>
              <p>Tap your phone. Get where you're headed.</p>
              <a className="learn-more-link" href="https://dailyverse.netlify.com">Learn more</a>
              <a className="ride-link" href="https://dailyverse.netlify.com">Sign up to ride</a>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-img-container">
            <img className="header-img" src={require('../assets/header.png')} alt="Hand sticking out from passenger seat." />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
