import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

import { withFormik, Form, Field } from 'formik'; 
import {StoreContext} from '../contextAPI/Context.js';
        



 function EntryForm() {
  const [entryTitle, setEntryTitle] = useState('');
  const [entryContent, setEntryContent] = useState('');
  


  return(
    <div className='entry-form'>
      <Form>
      <Field type='text' name='Title' value={entryData.title} placeholder='Title'/>
      <Field component='textarea' value={entryData.content} type='text' name='contents' placeholder='Write about your day...' />
      <button type='submit'> Save </button>
      </Form>
      {entryData.map(entry => (      
        <ul key={entry.id}>
          <li>Title: {entry.Title}</li>
          <li>Entry: {entry.textArea}</li>
        </ul>
      ))}
      </div> 
  )
}

const myMapPropstoValues = props => {
  console.log(props); 
  const returnObj = {
    Title: props.Title || '',
    Entry: props.Entry || ''
    } ;
    return returnObj; 
}

const myhandleSubmit = (values, {setStatus}) => {
  console.log('Submitted Entry!');
  axios
  .post('https://bw-one-line-a-day.herokuapp.com/api/users/:id/posts') //Where :id in URL is user id, Takes an object including: { title: "title", contents: "contents" }, Returns id of post
  .then(response => {
    console.log(response); 
    setStatus(response.data); 
  })
  .catch(err => console.log(err)); 
}


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