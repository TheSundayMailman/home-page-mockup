import React from 'react';

import './news.css';

function News(props) {
  return (
    <section className="news">
      <h1>Latest news</h1>
      <div className="news-row">
        <div className="news-item left-col">
          <img src={require('../../assets/news-1.png')} alt="news1" />
          <h2>Built for drivers, with drivers</h2>
          <p>The new Driver app helps you earn smarter and supports you–like a partner–at every turn.</p>
          <a href="https://dailyverse.netlify.com">Learn more ></a>
        </div>
        <div className="news-item right-col">
          <img src={require('../../assets/news-2.png')} alt="news1" />
          <h2>The Uber Visa Card</h2>
          <p>Earn on what you do. Get to what you love.</p>
          <a href="https://dailyverse.netlify.com">Apply now ></a>
        </div>
      </div>
    </section>
  );
}

export default News;
