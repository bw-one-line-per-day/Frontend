import React from "react"; 
import styled from "styled-components"; 

import aboutusframed from '../Images/aboutusframed.png'; 
import instagram from '../Images/instagram.png'; 
import facebookicon from '../Images/facebookicon.png'; 
import twitter from '../Images/twitter.png'; 

function Footer() {
  return (
    <div>
    <StyledImg img src={aboutusframed} alt='About Us' />
    <StyledImg img src={instagram} alt='Instagram Icon' />
    <StyledImg img src={facebookicon} alt='Facebook Icon' />
    <StyledImg img src={twitter} alt='Twitter Icon' />
    </div>
  )
}


const StyledImg = styled.img`
padding: 3rem; 
`
export default Footer; 