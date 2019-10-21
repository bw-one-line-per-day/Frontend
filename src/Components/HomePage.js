import React from "react";
import { Link, Route } from 'react-router-dom'; 

// import EntryForm from './EntryForm.js'; 
import EntryArchive from './EntryArchive.js';
import NewEntryPage from './NewEntryPage.js';  

function HomePage() {
  return (
    <div>
      <Link exact to ='/NewEntry'>
        <button>
          Add An Entry
          </button>
        </Link>
      <Link to ='/MyEntries'>
        <button>
        My Entries 
        </button>
        </Link> 
      <Route exact path='/NewEntry'>
        <NewEntryPage/>
      </Route>
      <Route exact path='/MyEntries'>
        <EntryArchive/>
      </Route>
    </div>
  )
}

export default HomePage; 