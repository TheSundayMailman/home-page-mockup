import React from 'react';

import NavBar from './components/navbar.js';
import Header from './components/header.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
