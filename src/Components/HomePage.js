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

function HomePage() {
  return (
    <StyledPage>
    <Nav />
    <LeftDiv>
    <ButtonArea>
      <Button onClick={NewEntryPage}>
        <img src={StartWritingButton} alt={'Click for new entry'} />
      </Button>
      <Button onClick={EntryArchive} alt={'Click to view all entries'}> 
        <img src={MyEntriesButton} alt={'Click to view all entries'} />
        </Button>
        <QuoteDiv>
        <h2><img src={Quotes} alt={'quotes'} />Change your thoughts and you change your world. <img src={Quotes} alt={'quotes'} /></h2> 
        <h4> - Norman Vincent Peale </h4>
        </QuoteDiv>
        </ButtonArea>
        </LeftDiv>
      
      <Route path="/NewEntry"> <NewEntryPage/>  </Route> 
      <Link to="/NewEntryPage"/>
      <Route path="/MyEntries"> <EntryArchive/> </Route> 
      <Link to="/EntryArchive"/> 
      <GirlDiv>
      <img src={HomePageGirl} alt={'girl'}/>
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
`

const Button = styled.button`
display: flex;
flex-direction: column;
margin: 2em;
border: none;
background: none;
`

const GirlDiv = styled.div`
display: flex;
flex-direction: row;
background: #FEE5E2;

`
const ButtonArea = styled.div`
display: flex; 
flex-direction: row; 
padding: 4rem; 
`

const QuoteDiv = styled.div`
margin: 0 auto; 
display: flex; 
flex-direction: column; 
`
const LeftDiv = styled.div`
display: flex; 
flex-direction: column; 
`
export default HomePage; 
