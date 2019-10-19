import React from "react";
import {Route} from 'react-router-dom';
import EntryForm from "./EntryForm";


export default function HomePage() {
  return (
    <div>
      <button>
        Add an Entry
      </button>

      <button>
        My Entries 
      </button>
      <Route path="/NewEnteries" component={EntryForm}/> 
      <Route path="/MyEnteries" component={MyEntries}/> 
    </div>

  )
}

// ask aj about deploying to netlify and linking things?