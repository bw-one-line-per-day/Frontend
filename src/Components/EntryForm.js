import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { Route } from 'react-router-dom'; 
import { withFormik, Form, Field } from 'formik'; 
import {StoreContext} from '../contextAPI/Context.js';
        



 function EntryForm() {
  const [entryTitle, setEntryTitle] = useState('');
  const [entryContent, setEntryContent] = useState('');
  

  return (
     <Form 
    //onSubmit={evt => {
    //   evt.preventDefault(); 
    //   axios.post('/', {title, contents})
    // }}
    >
      <label>
        <input type ='text' placeholder= 'Entry Title' onChange={evt => setEntryTitle(evt.target.value)} />
      </label>

      <label>
        <input type ='text' placeholder= 'Entry Content' onChange={evt => setEntryContent(evt.target.value)} />
      </label>

      <button> </button>
    </Form>
  )
} 

export default EntryForm;

//the form entry page returns whatever is submitted into the Form onSubmit 
//might be useful to put the userEntry input into a variable that takes and object/array
// then have a <button onSubmit={does something with userData}></button>
//state lives in the parent component and any functions necessary to change state exist at the same level
//if a child needs to change state then it will receive the tools it needs through PROPS at the parent level