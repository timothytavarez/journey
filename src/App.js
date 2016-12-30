import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DestinationForm from './DestinationForm';
import Destination from './Destination';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Traveler</h2>
        </div>
        <DestinationForm />
        <Destination />
      </div>
    );
  }
}

export default App;