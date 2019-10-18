import React from 'react';

import './App.css';
import HomePage from './Components/HomePage.js'; 
import Nav from './Components/nav.js'; 

function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
    </div>
  );
}

export default App;
