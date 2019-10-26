
import React, { useState, useEffect, useContext } from 'react'; 
//import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../Auth/axiosWithAuth'; 
import { Formik, Form, Field } from 'formik'; 

import styled from "styled-components"; 
import Nav from './Nav.js'; 
import Footer from './Footer.js'; 
import SaveEntryButton from '../Images/SaveEntryButton.png';

import {StoreContext} from 'contextAPI/Context.js';

    
function EntryForm() {

  const { userInfo } = useContext(StoreContext);
  //console.log(userInfo);

  const [entryData, setEntryData] = useState({
    title: '',
    contents: ''
    
  });

  const handleSubmit = (tools) => {
    axiosWithAuth().post (`users/${userInfo.id}/posts`, entryData)
      .then(response => {
        console.log(response);
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
            <Form>
                
              <Field placeholder ='ENTRY TITLE' name='title' type='text' value= {entryData.title} onChange={onInputChange} />

              <Field placeholder="ADD YOUR TEXT" name='contents' type='text' value= {entryData.contents} onChange={onInputChange} />

              <button type='submit' onSubmit={handleSubmit}> <SaveEntryImg img src={SaveEntryButton} alt={'Click here to sign out'} /> </button>
            </Form>
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
  
`;

// const StyledField = styled(Field)`
// `;

const SaveButton = styled.button`
background-color: 
`;

const SaveEntryImg = styled.img`
  width: 90%;
`;



export default EntryForm;






