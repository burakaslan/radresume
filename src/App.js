import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import Logo from './logo.svg';
class App extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="rad"/>
        <Resume />
      </div>
    );
  }
}

export default App;
