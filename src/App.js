import React from 'react';

import './App.css';
import HomePage from './Components/HomePage.js'; 
import Nav from './Components/nav.js'; 
import EntryForm from './Components/EntryForm.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
      <EntryForm/>
    </div>
  );
}

export default App;
