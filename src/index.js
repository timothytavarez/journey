import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DestinationForm from './DestinationForm';
import Destination from './Destination';
import './index.css';
import './normalize.css';
import './skeleton.css';

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

const FB_CONFIG = {
  apiKey: "AIzaSyBFyVTgot3EHYugfF9SDudHIfhuOJh4dGg",
  authDomain: "traveler-8d788.firebaseapp.com",
  databaseURL: "https://traveler-8d788.firebaseio.com",
  storageBucket: "traveler-8d788.appspot.com",
  messagingSenderId: "694146198411"
};

firebase.initializeApp(FB_CONFIG);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);