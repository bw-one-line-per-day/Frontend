import React from 'react'; 
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
      <input type='text' defaultValue='test'/>
      <textarea rows='10' cols='50'> 
      testing 
      </textarea> 
    </form>
  </div>
)
} 

export default Edit; 