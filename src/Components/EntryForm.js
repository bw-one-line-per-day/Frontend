
import React, { useState, useEffect, useContext } from 'react'; 
import { Route, Link } from 'react-router-dom';
import { axiosWithAuth } from '../Auth/axiosWithAuth'; 
import { Formik, Form, Field } from 'formik'; 

import styled from "styled-components"; 
import Nav from './Nav.js'; 
import Footer from './Footer.js'; 
import SaveEntryButton from '../Images/';

import {StoreContext} from 'contextAPI/Context.js';

    
function EntryForm(props) {
  console.log(props);
  const { userInfo } = useContext(StoreContext);
  //console.log(userInfo);

  // useEffect(() => {
  //   <Link to></Link>
  // }, [handleSubmit]) 

  const [entryData, setEntryData] = useState({
    title: '',
    contents: ''
    
  });

  const handleSubmit = (props, tools) => {
    axiosWithAuth().post (`users/${userInfo.id}/posts`, entryData)
      .then(response => {
        console.log(response);
      })

      .then(()=> {
        props.history.push('/MyEntries');
      })
      
      .catch( (error) =>
        console.log(error)
        
      )}

  const onInputChange = event => {
    setEntryData({
      ...entryData, 
      [event.target.name]: event.target.value,
    })
    //console.log(entryData);
  };

  return (
    <StyledPage>
    <Nav />
      <div>
        <Formik
          initialValues = {{title:'', entry: ''}}
          onSubmit = {handleSubmit}
          render ={props => (
            <StyledForm>
                
              <StyledEntryTitle className ='entryTitle' placeholder ='ENTRY TITLE' name='title' type='text' value= {entryData.title} onChange={onInputChange} />

              <StyledEntryContents className = 'entryContents' placeholder="ADD YOUR TEXT" name='contents' type='text' value= {entryData.contents} onChange={onInputChange} />

              <StyledEntryButton type='submit' onSubmit={handleSubmit}> <SaveEntryButton img src={SaveEntryButton} alt={'Click here to sign out'} /> </StyledEntryButton>
            </StyledForm>
          )}
          />
      </div>
    <Footer />
    </StyledPage>
  )

}
  
const StyledPage = styled.div`
  background: #fee5e2;
  height: 100vw;
  display: block;
  width: 90%;
  margin: 0 auto;
  
`;

const StyledForm = styled.form`
  display: block;
  
`;

const StyledEntryTitle = styled.input`
  display: block;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  height: 3rem;
  border-radius: 10px;
  border: 1px;
`;

const StyledEntryContents = styled.input`
  display: block;
  width: 90%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  margin-right: auto;
  margin-left: auto;
  height: 10rem;
  border-radius: 10px;
  border: 2px;

`;

// const StyledField = styled(Field)`
// `;



const SaveEntryImg = styled.img`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin: 2em;
  border: none;
  background: none;
`;

const StyledEntryButton = styled.button`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin: 2em;
  border: none;
  background: none;
`;



export default EntryForm;






