  
import React, { useEffect, useState } from 'react'; 
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
    axiosWithAuth.post (`/users/1/posts`, entryData)
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
  

export default EntryForm;



// const onInputChange = event => {
//   setEntryData({
//     ...entryData, 
//     [event.target.name]: event.target.value,
//   })
// };

// const onEntrySubmit = event => {
//   {
//     event.preventDefault(); 
//     axios.post('/', {title, contents})
//   }
// }