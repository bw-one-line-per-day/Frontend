import React from "react"; 

// import SearchBar from './SearchBar.js'; 
import Footer from './Footer.js'; 

import { ReactComponent as TrashCan } from '../Images/trashcan.svg';
import { ReactComponent as Edit } from '../Images/editwithpen.svg'; 

function EntryArchive() {
  return(
    <div className='entry-archive'>
      <button> New Entry </button>
      {/* <SearchBar/> */}
      {/* Date Component? Make it set up the real date and time? */}
      {/* Entry Title and Form in one text box  */}
      <TrashCan />
      <Edit /> 
      <Footer />
    </div>
  )
}

export default EntryArchive; 