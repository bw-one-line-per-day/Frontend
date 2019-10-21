import React from "react"; 

import aboutusframed from '../Images/aboutusframed.png'; 
import instagram from '../Images/instagram.png'; 
import facebookicon from '../Images/facebookicon.png'; 
import twitter from '../Images/twitter.png'; 

function Footer() {
  return (
    <div className="footer">
    <img src={aboutusframed} alt='About Us' />
    <img src={instagram} alt='Instagram Icon' />
    <img src={facebookicon} alt='Facebook Icon' />
    <img src={twitter} alt='Twitter Icon' />
    </div>
  )
}

export default Footer; 