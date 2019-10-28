import React, { useEffect, useState, useContext } from 'react'; 
import styled from 'styled-components'; 
import Nav from 'Components/Nav'; 
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom'; 
import { axiosWithAuth } from 'Auth/axiosWithAuth';
import {StoreContext} from '../contextAPI/Context.js'; 

import MyEntriesButton from '../Images/MyEntriesButton.png';

const Edit = (props) => {

const [entry, setEntry] = useState({}); 
const id = parseInt(props.match.params.id,10); 
const { userInfo } = useContext(StoreContext);

  useEffect(function(){
    axiosWithAuth().get(`users/${userInfo.id}/posts`)
      .then(response => {
        console.log(response, "entry to be changed");
        setEntry(response.data.find((event) => event.id === id ))
      }) 
      .catch(error => {
        console.log(error, "can't edit entry"); 
      })
    }, []); 
  console.log(entry, "entry to be edited");
  

  const handleTitleChange = event =>{
    setEntry({ ...entry, title: event.target.value });
  }

  const handleContentsChange = event =>{
    setEntry({...entry, contents: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(entry.title,"editing title");
    console.log(entry.contents, "editing contents");
    axiosWithAuth().put(`users/posts/${id}`, {title: entry.title, contents: entry.contents})
    .then(response => {
      console.log(response, "response of editing a entry"); 
      setEntry(props.history.push("/MyEntries")); 
    })
    .catch(error => {
      console.log(error, "editing fail");
    })
    console.log(entry, "entry after editing"); 
  };

return (
  <PageStyled>
    <Nav /> 
    <div>
    <Button alt={'Click to view all entries'}> <Link to='/MyEntries'>
        <img src={MyEntriesButton} alt={'Click to view all entries'} />
        </Link>
        </Button>
    
    </div>
    <StyledForm>
    <form onSubmit={event => handleSubmit(event)} >   
        <StyledInput type='text' 
        onChange={event => handleTitleChange(event)}
        value={entry.title} />
        <LargeInput type='textarea' 
        onChange={event => handleContentsChange(event)}
        value={entry.contents} /> 
      <label>
        <SubmitButton> Submit! </SubmitButton>
      </label>

    </form>
    </StyledForm>
    <Footer /> 
  </PageStyled>
  )
} 


const PageStyled = styled.div`
  background: #fee5e2;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
display: flex;
flex-direction: column;
border: none;
background: none;
height: 15%;
padding: .50rem;
`
const StyledForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5rem;
margin: 0 auto;
`

const StyledInput = styled.input`
display: flex;
width: 250px;
height: 50px;
text-align: center;
border-radius: 20px;
font-size: medium; 
margin: 1rem auto;
`
const LargeInput = styled.input` 
display: flex;
height: 250px; 
width: 250px; 
text-align: center;
border-radius: 20px; 
font-size: medium; 
`

const SubmitButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
margin: 1rem auto;
height: 50px;
width: 50%;
font-size: medium;
border-radius: 15px;
border: darkorange;
background: orange;
color: white;
`

export default Edit; 