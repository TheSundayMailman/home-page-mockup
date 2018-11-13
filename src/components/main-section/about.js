import React from 'react';

import './about.css';

function About(props) {
  return (
    <section className="about">
      <div className="about-row">
        <div className="about-item">
          <div className="about-icon-container">
            <img className="about-icon-bullet" src={require('../../assets/icon_bullets_about.svg')} alt="" />
          </div>
          <div className="about-text-container">
            <h3>About us</h3>
            <p>Our story, leadership, and where we’re going</p>
            <a href="https://dailyverse.netlify.com">Learn more</a>
          </div>
        </div>
        <div className="about-item">
          <div className="about-icon-container">
            <img className="about-icon-bullet" src={require('../../assets/icon_bullets_document.svg')} alt="" />
          </div>
          <div className="about-text-container">
            <h3>Newsroom</h3>
            <p>Company news, partnerships, and app updates</p>
            <a href="https://dailyverse.netlify.com">Learn more</a>
          </div>
        </div>
        <div className="about-item">
          <div className="about-icon-container">
            <img className="about-icon-bullet" src={require('../../assets/icon_bullets_community.svg')} alt="" />
          </div>
          <div className="about-text-container">
            <h3>Community</h3>
            <p>How we’re strengthening cities and communities</p>
            <a href="https://dailyverse.netlify.com">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
