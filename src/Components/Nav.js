import React from "react"; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 
import Logo from '../Images/Logo.png'; 

function Nav() {
  return (
    <StyledNav>
    <div className='Nav-Container'>
      <img src={Logo} alt='note pad with pen' /> 
      <h1> One Line a Day </h1> 
      {/* <Link to='aboutus'> About Us </Link> */}
      <div>
      <button onClick={signOut}> Sign Out </button>
      </div>
      </StyledNav>
    </div>
  )
}


const StyledNav = styled.div`
display: flex; 
padding: 2.5rem;
margin: 1rem; 
background: #FEE5E2;
`

export default Nav; 
