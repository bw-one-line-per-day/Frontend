import React from "react";
import {Route, Link} from 'react-router-dom';

import EntryArchive from './EntryArchive.js';
import NewEntryPage from './NewEntryPage.js';  

function HomePage() {
  return (
    <div>
      <Link to="/NewEntry"><button>
        Add an Entry
      </button></Link>
      <Link to="/EntryArchive"><button> 
        My Entries 
        </button></Link> 
      <Route exact path="/"> <HomePage /> </Route>
      <Route path="/NewEntry"> <NewEntryPage/>  </Route> 
      <Route path="/MyEntries"> <EntryArchive/> </Route> 
    </div>
  )
}

export default HomePage; 
