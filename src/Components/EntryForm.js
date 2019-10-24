import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { withFormik, Form, Field } from 'formik'; 
          // validateYupSchema


function EntryForm(props) {
  const [entryData, setEntryData] = useState([]); //?? [], {}, null?

  useEffect (() => {
    if (props.status) {
      setEntryData([...entryData, props.status]); 
    }
  }, [props.state]) 

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

const formikObj = {
  mapPropsToValues: myMapPropstoValues,
  handleSubmit: myhandleSubmit,
  // validationSchema: yumSchema ?? 
}; 


const EnhancedEntryForm = withFormik(formikObj); 

const FormikEntryForm = EnhancedEntryForm(EntryForm);

export default FormikEntryForm; 
