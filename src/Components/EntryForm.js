
  
import React, { useEffect, useState } from 'react'; 
import styled from "styled-components"; 
import axios from 'axios'; 
import { axiosWithAuth } from '../Auth/axiosWithAuth'; 
import { Route } from 'react-router-dom'; 
import { Formik, Form, Field } from 'formik'; 

// import {StoreContext} from './contextAPI/Context';

        



 function EntryForm() {
  // const [entryTitle, setEntryTitle] = useState('');
  // const [entryContent, setEntryContent] = useState('');

  const [entryData, setEntryData] = useState({
    title: '',
    contents: ''
    
  });
  
  console.log(entryData);

  const handleSubmit = (entryData, tools) => {
    axiosWithAuth.post (`/users//posts`, entryData)
      .then(response => {
        tools.resetForm();
        console.log(response);
      })
      .catch( (error) =>
        console.log(error)
        
      )
      
  }

  const onInputChange = event => {
    setEntryData({
      ...entryData, 
      [event.target.name]: event.target.value,
    })
    console.log(entryData);
  };

  return (
    <div>
    <Formik
      initialValues = {{title:'', entry: ''}}
      onSubmit = {handleSubmit}
      render ={props => (
       <Form>
         <Field placeholder ='Entry Title' name='title' type='text' value= {entryData.title} onChange={onInputChange}/>
         <Field placeholder='Write you one line for today!' name='contents' type='text' value= {entryData.contents} onChange={onInputChange} />
         <button type='submit' onSubmit={handleSubmit}> Save your Entry! </button>
       </Form>
       
      )}
   />
   </div>
  )

}
  
const StyledPage = styled.div`

`


    //   <Form>
    //   <label>
    //     <input type ='text' placeholder= 'Entry Content' onChange={evt => setEntryContent(evt.target.value)} />
    //   </label>

    //   <button> </button>
    // </Form>

export default EntryForm;




// const onInputChange = event => {
//   setEntryData({
//     ...entryData, 
//     [event.target.name]: event.target.value,
//   })
// };


//the form entry page returns whatever is submitted into the Form onSubmit
//might be useful to put the userEntry input into a variable that takes and object/array
// then have a <button onSubmit={does something with userData}></button>
//state lives in the parent component and any functions necessary to change state exist at the same level
//if a child needs to change state then it will receive the tools it needs through PROPS at the parent level



// what about onChange={handleChangle} within each imput of the form? 

// const onEntrySubmit = event => {
//   {
//     event.preventDefault(); 
//     axios.post('/', {title, contents})
//   }
// }

