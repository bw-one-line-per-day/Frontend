import React from "react"; 
import styled from 'styled-components'; 
import Logo from '../Images/Logo.png'; 
import SignOutButton from '../Images/SignOutButton.png'; 

function Nav() {
  return (
    <StyledNav>
      <LeftDiv>
      <LogoStyled img src={Logo} alt='note pad with pen'/> 
      <LogoTitle> One Line a Day </LogoTitle> 
      </LeftDiv>
      <Button> <ImgStyled img src={SignOutButton} alt={'Click here to sign out'} /> </Button>
    </StyledNav>
  )
}

const LogoTitle = styled.h1`
color: #e36f56;
padding: .25rem; 
`
const StyledNav = styled.div`
display: flex; 
padding: .5rem;
margin: 1rem; 
background: #FEE5E2;
`

const ImgStyled = styled.img`
height: 50px; 
`
const Button = styled.button`
display: flex;
flex-direction: column;
margin: 2rem;
border: none;
background: none;
`  

const LogoStyled = styled.img`
height: 75px; 
padding: .5rem; 
`
const LeftDiv = styled.div`
display: flex; 
margin: auto;
justify-content: left;
align-content: left; 
width: 80%;
`
export default Nav; 
