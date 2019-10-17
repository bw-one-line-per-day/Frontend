import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './Auth/PrivateRoute';
import SignUp from './Auth/SignUp'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={SignUp}/>
        <PrivateRoute exact path="/" component={}/>
      </div>
    </Router>
  )
}

export default App;
