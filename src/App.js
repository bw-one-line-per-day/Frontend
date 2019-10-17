import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './Auth/PrivateRoute';
import SignUp from './Auth/SignUp'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SignUp />
        <Route exact path='/register' component={SignUp}/>
      </div>
    </Router>
  )
}

export default App;
