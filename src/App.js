import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import Logo from './logo.svg';
import Settings from './Settings';

class App extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="rad"/>
        <Resume />
        <Settings />
      </div>
    );
  }
}

export default App;
