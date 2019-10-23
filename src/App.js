import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './Auth/PrivateRoute';

import SignUp from './Auth/SignUp'
//import Login from '../Auth/'
import HomePage from './Components/HomePage';
import EntryForm from './Components/EntryForm'



function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={SignUp} />
      
      <PrivateRoute path='/home' component={HomePage} />
      <PrivateRoute path='/entry' component={EntryForm} />
      </div>
    </Router>
  );
}

export default App;
