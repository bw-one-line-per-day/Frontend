import React from "react"; 

import { ReactComponent as SearchIcon } from '../Images/search.svg'; 
function SearchBar () {

  return (
    <div>
      <form>
        <input type='search' name='searchbar' >  
        <SearchIcon />
        Search Entry By Date 
        </input>
      </form>
    </div>
  )
}


export default SearchBar; 