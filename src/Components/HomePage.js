import React from "react";
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components'; 

import EntryArchive from './EntryArchive.js';
import NewEntryPage from './NewEntryPage.js';  
import Nav from './Nav.js'; 
import Footer from './Footer.js'; 

import StartWritingButton from '../Images/StartWritingButton.png'; 
import MyEntriesButton from '../Images/MyEntriesButton.png'; 
import HomePageGirl from '../Images/HomePageGirl.png'; 
import Quotes from '../Images/Quotes.png'; 

function HomePage(props) {
  return (
    <StyledPage>
    <Nav />
      <ButtonArea>
      <Button><Link to='/NewEntry'>
        <img src={StartWritingButton} alt={'Click for new entry'} />
        </Link>
      </Button>

      <Button alt={'Click to view all entries'}> <Link to='/MyEntries'>
        <img src={MyEntriesButton} alt={'Click to view all entries'} />
        </Link>
        </Button>
        </ButtonArea>
        <QuoteDiv>
        <h2><QuoteImg src={Quotes} alt={'quotes'} />Change your thoughts and you change your world. <QuoteImg src={Quotes} alt={'quotes'} /></h2> 
        <Author> - Norman Vincent Peale </Author>
        </QuoteDiv>
      <GirlDiv>
      <Girl img src={HomePageGirl} alt={'girl'}/>
      </GirlDiv>
      <Footer />
    </StyledPage>
  )
}

const StyledPage = styled.div`
background: #FEE5E2;
height: 100%;
display: flex; 
flex-direction: column; 
height: 98%;
`

const Button = styled.button`
display: flex;
flex-direction: column;
border: none;
background: none;
height: 33%;
`

const GirlDiv = styled.div`
display: flex;
flex-direction: row;
background: #FEE5E2;
padding: .20rem;
`
const Girl = styled.img`
height: 500px;
display: flex;
flex-direction: column;
margin: 0 auto; 
`

const ButtonArea = styled.div`
display: flex;
margin: .25rem auto;
justify-content: center;
padding: 3rem;
`

const QuoteDiv = styled.div` 
margin: .25rem auto;
display: flex;
flex-flow: column;
justify-content: center;
padding-left: 3rem;
width: 75%; 
font-size: large; 
`

const Author = styled.h3`
display: flex;
justify-content: center;
margin: 0 auto;
`
const QuoteImg = styled.img`
height: 2rem; 
`
export default HomePage; 
