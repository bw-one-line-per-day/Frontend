import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from './Auth/PrivateRoute';
// import SignUp from './Auth/SignUp'
import './App.css';
import HomePage from './Components/HomePage.js'; 
import Nav from './Components/Nav.js'; 
import NewEntryPage from './Components/NewEntryPage.js';

function App() {
  console.log('here'); 
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
      <NewEntryPage/>
    </div>
  );
}

export default App;
