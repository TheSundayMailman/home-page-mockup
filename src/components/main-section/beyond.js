import React from 'react';

import './beyond.css';

function Beyond(props) {
  return (
    <section className="beyond">
      <h1>Beyond ridesharing</h1>
      <div className="service-row">
        <div className="service-container">
          <img src={require('../../assets/uber_eats.svg')} alt=""/>
          <h2>Uber Eats</h2>
          <p>Delicious eats, delivered easy</p>
          <a href="https://dailyverse.netlify.com">Learn more</a>
        </div>
        <div className="service-container">
          <img src={require('../../assets/uber_business.svg')} alt=""/>
          <h2>Uber for Business</h2>
          <p>How teams move people and guests</p>
          <a href="https://dailyverse.netlify.com">Learn more</a>
        </div>
        <div className="service-container">
          <img src={require('../../assets/uber_jump.svg')} alt=""/>
          <h2>JUMP Bikes</h2>
          <p>Dock-less bikes, featuring e-assist</p>
          <a href="https://dailyverse.netlify.com">Learn more</a>
        </div>
        <div className="service-container">
          <img src={require('../../assets/uber_freight.svg')} alt=""/>
          <h2>Uber Freight</h2>
          <p>Freedom to haul the way you want</p>
          <a href="https://dailyverse.netlify.com">Learn more</a>
        </div>
        <div className="service-container">
          <img src={require('../../assets/uber_elevate.svg')} alt=""/>
          <h2>Uber Air</h2>
          <p>The future of urban arial rides</p>
          <a href="https://dailyverse.netlify.com">Learn more</a>
        </div>
      </div>
    </section>
  );
}

export default Beyond;
