import React from "react"; 
import styled from "styled-components"; 

import aboutusframed from '../Images/aboutusframed.png'; 
import instagram from '../Images/instagram.png'; 
import facebookicon from '../Images/facebookicon.png'; 
import twitter from '../Images/twitter.png'; 

function Footer() {
  return (
    <div>
    <a href='https://bw-one-line-per-day.github.io/UI/about/'><StyledImg src={aboutusframed} alt='About Us' /> </a>
    <StyledImg src={instagram} alt='Instagram Icon' />
    <StyledImg src={facebookicon} alt='Facebook Icon' />
    <StyledImg src={twitter} alt='Twitter Icon' />
    </div>
  )
}


const StyledImg = styled.img`
padding: 3rem; 
`
export default Footer; 