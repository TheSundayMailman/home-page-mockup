import React from 'react';

import NavBar from './components/navbar.js';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
