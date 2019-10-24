import React from "react";
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components'; 

import EntryArchive from './EntryArchive.js';
import NewEntryPage from './NewEntryPage.js';  

import StartWritingButton from '../Images/StartWritingButton.png'; 
import MyEntriesButton from '../Images/MyEntriesButton.png'; 

function HomePage() {
  return (
    <StyledPage>
      <Button onClick={NewEntryPage}>
        <img src={StartWritingButton} alt={'Click for new entry'} />
      </Button>
      <Button onClick={EntryArchive} alt={'Click to view all entries'}> 
        <img src={MyEntriesButton} alt={'Click to view all entries'} />
        </Button>
      {/* <Route path="/userHome"> <HomePage /> </Route> */}
      <Route path="/NewEntry"> <NewEntryPage/>  </Route> 
      <Route path="/MyEntries"> <EntryArchive/> </Route> 
    </StyledPage>
  )
}

const StyledPage = styled.div`
display: flex;
flex-direction: row;
display: center;
align-items: center;
justify-content: center;
background: #FEE5E2;
height: 100%;
`

const Button = styled.button`
display: flex;
flex-direction: column;
margin: 2em;
border: none;
background: none;
`

export default HomePage; 
