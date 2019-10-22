import React from "react"; 
import { Form, Field} from 'formik'; 

import  search  from '../Images/search.svg'; 
function SearchBar () {

  return (
    <div>
      <Form>
        <Field type='text' name='searchbar' placeholder='Search Entry By Date'/>
        
      </Form>
    </div>
  )
}


export default SearchBar; 