import React from 'react';


import WelcomeLogIn from './Components/WelcomeLogIn.js';

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './Auth/PrivateRoute';

import SignUp from './Auth/SignUp'
import HomePage from './Components/HomePage';
import EntryForm from './Components/EntryForm'



function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path='/' component={SignUp} />
    <Switch>
      <Route path='/login' component={WelcomeLogIn}/>
      <PrivateRoute path='/home' component={HomePage} />
      <PrivateRoute path='/NewEntry' component={EntryForm} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
