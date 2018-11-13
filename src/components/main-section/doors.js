import React from 'react';

import './doors.css';

function Doors(props) {
  return (
    <section className="blip">
      <div className="blip-container">
        <div className="blip-left">
          <div className="blip-text-container">
            <h1>Doors are always opening</h1>
            <p>Opportunity is everywhere. Get out there and find it with Uber.</p>
            <a href="https://dailyverse.netlify.com">See video ></a>
          </div>
        </div>
        <div className="blip-right">
          <img src={require('../../assets/door.jpg')} alt ="door" />
        </div>
      </div>
    </section>
  );
}

export default Doors;
