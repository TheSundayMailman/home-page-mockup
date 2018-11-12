import React from 'react';

import WhereTo from './main-section/where-to.js';
import Beyond from './main-section/beyond.js';
import Safety from './main-section/safety.js';
import LatestNews from './main-section/latest.js';
import Doors from './main-section/doors.js';
import About from './main-section/about.js';
import Signup from './main-section/signup.js';

function Main(props) {
  return (
    <main>
      <WhereTo />
      <Beyond />
      <Safety />
      <LatestNews />
      <Doors />
      <About />
      <Signup />
    </main>
  );
}

export default Main;
