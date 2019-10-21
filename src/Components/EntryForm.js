import React, { useEffect } from 'react'; 
import axios from 'axios'; 
import { withFormik, Form, Field, validateYupSchema} from 'formik'; 



function EntryForm() {
  const [entryData, setEntryData] = useState([]); //?? [], {}, null?

  useEffect (() => {
    if (props.status) {
      setEntryData([...entryData, props.status]); 
    }
  }, [props.state]) 

  return(
    <div className='entry-form'>
      <Form>
        {/* not sure about component='textarea' */}
      <Field component='textarea' type='text' name='Title' placeholder='Title'/>
      <Field type='text' name='textArea' placeholder='Write about your day...' />
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
  .post(  )
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