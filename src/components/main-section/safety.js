import React from 'react';

import './safety.css';

function Safety(props) {
  return (
    <section className="blip">
      <div className="blip-container">
        <div className="blip-left">
          <div className="blip-text-container">
            <h1>Your safety is always a top priority</h1>
            <p>We are committed to helping drivers and riders get where they want to go with confidence.</p>
            <a href="https://dailyverse.netlify.com">Learn more ></a>
          </div>
        </div>
        <div className="blip-right">
          <img src={require('../../assets/safety.png')} alt ="safety" />
        </div>
      </div>
    </section>
  );
}

export default Safety;
