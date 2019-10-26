import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 

const Edit = (props) => {
  useEffect (() => {
    const id = props.match.params.id; 
  }
  
  )
return (
  <div>
    <Link to='/MyEntries'> 
    <button > here</button>
    </Link>
    <form>
      <input type='text' defaultValue='test' 
      // defaultValue={props.title} 
      />
      <textarea rows='10' cols='50'> 
      testing 
      {/* {props.contents} */}
      </textarea> 
    </form>
  </div>
)
} 

export default Edit; 