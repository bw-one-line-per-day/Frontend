import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

import { Route } from 'react-router-dom'; 
import { Formik, Form, Field } from 'formik'; 
// import {ContextProvider, StoreContext} from './contextAPI/Context';

        



 function EntryForm() {
  // const [entryTitle, setEntryTitle] = useState('');
  // const [entryContent, setEntryContent] = useState('');

  const [entryData, setEntryData] = useState({
    title: '',
    contents: ''
  });
  


  const handleSubmit = (values, tools) => {
    axios.post ('https://bw-one-line-a-day.herokuapp.com/api/users/:id/posts', values)
      .then(response => {
        tools.resetForm();
      })
      .catch()
      .finally ()
  }

  return (
    <div>
    <Formik
      initialValues = {{title:'', entry: ''}}
      onSubmit = {handleSubmit}
      render ={props => (
       <Form>
         <Field placeholder ='Entry Title' name='title' type='text'/>
         <Field placeholder='Write you one line for today!' name='contents' type='text' />
         <button type='submit'> Save your Entry! </button>
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