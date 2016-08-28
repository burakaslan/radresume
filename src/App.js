import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import Logo from './logo.svg';
import Settings from './Settings';
import Reducers from './redux/reducers';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(Reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <img className="logo" src={Logo} alt="rad"/>
          <Resume />
          <Settings />
        </div>
      </Provider>
    );
  }
}

export default App;
