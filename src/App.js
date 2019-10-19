import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './Auth/PrivateRoute';
import SignUp from './Auth/SignUp'
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
