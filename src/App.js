import React from 'react';

import './App.css';
import HomePage from './Components/HomePage.js'; 
import Nav from './Components/Nav.js'; 

function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
    </div>
  );
}

export default App;
