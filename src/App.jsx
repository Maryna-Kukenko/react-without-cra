import React from 'react';
import { hot } from 'react-hot-loader';

import './App.css';
import flower from './img/image2.jpg';

const App = () => (
  <div className="app">
    <h1 className="">Flowers</h1>
    <img src={flower} alt="flower-img" />
    <img src={flower} alt="flower-img" />
    <img src={flower} alt="flower-img" />
  </div>
);

export default hot(module)(App);
