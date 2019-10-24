import React from "react"; 
import styled from "styled-components"; 

import aboutusframed from '../Images/aboutusframed.png'; 
import instagram from '../Images/instagram.png'; 
import facebookicon from '../Images/facebookicon.png'; 
import twitter from '../Images/twitter.png'; 

function Footer() {
  return (
    <styledFooter>
    <img src={aboutusframed} alt='About Us' />
    <img src={instagram} alt='Instagram Icon' />
    <img src={facebookicon} alt='Facebook Icon' />
    <img src={twitter} alt='Twitter Icon' />
    </styledFooter>
  )
}


const styledFooter = styled.div`
justify-content: space-evenly;
margin: 0 auto;
align-items: center;
display: flex;
width: 40%;
` 
export default Footer; 