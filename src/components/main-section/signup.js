import React from 'react';

import './signup.css';

function Signup(props) {
  return (
    <section className="signup">
      <div className="signup-row">
        <div className="signup-item">
          <div className="signup-link-container">
            <h2>Signup to drive</h2>
          </div>
        </div>
        <div className="signup-item">
          <div className="signup-link-container">
            <h2>Signup to ride</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
