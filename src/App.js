import React from 'react';


import WelcomeLogIn from './Components/WelcomeLogIn.js';

import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';

import SignUp from './Auth/SignUp';
//import Login from '../Auth/'

import HomePage from './Components/HomePage';
import NewEntryPage from './Components/NewEntryPage';
import EntryArchive from './Components/EntryArchive';

function App() {
  return (
    <Router>

      <div className="App">
        <Route exact path="/" component={SignUp} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/NewEntry" component={NewEntryPage} />
        <PrivateRoute path="/MyEntries" component={EntryArchive} />


      </div>
    </Router>

  );
}

export default App;
