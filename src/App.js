import React from 'react';

import WelcomeLogIn from './Components/WelcomeLogIn.js';

import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';

import SignUp from './Auth/SignUp';
//import Login from '../Auth/'


import HomePage from './Components/HomePage';
import NewEntryPage from './Components/NewEntryPage';
import EntryArchive from './Components/EntryArchive';
import Edit from './Components/Edit'; 


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={WelcomeLogIn} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/NewEntry" component={NewEntryPage} />
        <PrivateRoute path="/MyEntries" component={EntryArchive} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
