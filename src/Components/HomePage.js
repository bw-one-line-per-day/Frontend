import React from "react";
import { Link, Route } from 'react-router-dom'; 

import EntryForm from './EntryForm.js'; 

function HomePage() {
  return (
    <div>
      <Link to ='/NewEntry'>
        <button>
          Add An Entry
          </button>
        </Link>
      <button>
      My Entries 
      </button>
      <Route path='/NewEntry'>
        <EntryForm/>
      </Route>
    </div>
  )
}

export default HomePage; 