import React from 'react';
import './App.css';

import LandingJumbotron from './LandingJumbotron';
import AboutUs from './AboutUs';
import Products from './Products';
import Subscribe from './Subscribe';

function App() {

  return (
    <div>
      <LandingJumbotron />
      <AboutUs />
      <Products />
      <Subscribe />
    </div>
  );
}

export default App;
