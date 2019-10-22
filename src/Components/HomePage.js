import React from "react";
import {Route} from 'react-router-dom';
import EntryForm from "./EntryForm";


// import EntryForm from './EntryForm.js'; 
import EntryArchive from './EntryArchive.js';
import NewEntryPage from './NewEntryPage.js';  

function HomePage() {
  return (
    <div>
      <button>
        Add an Entry
      </button>

      <button>
        My Entries 
      </button>
      <Route path="/NewEnteries" component={EntryForm}/> 
  
    </div>
  )
}


