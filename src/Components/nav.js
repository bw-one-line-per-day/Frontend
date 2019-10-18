import React from "react"; 
import { Link } from 'react-router-dom'; 

function Nav() {
  return (
    <div className='Nav-Container'>
      <h2> One Line a Day </h2> 
      <Link to='aboutus'> About Us </Link>
      <Link to='signout'>  Sign Out </Link>
    </div>
  )
}

export default Nav; 