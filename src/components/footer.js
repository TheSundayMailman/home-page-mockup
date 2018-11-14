import React from 'react';

import './footer.css';

function Footer(props) {
  return (
    <footer>
      <section className="help-section">
        <div className="help-title-container">
          <h2>We're here to help</h2>
        </div>
        <div className="help-text-container">
          <p>Support is just a few taps away. You can also get your questions answered by using our help section.</p>
          <a href="https://dailyverse.netlify.com">Get help ></a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
