import React, { useEffect, useState, useContext } from 'react'; 
import { Link } from 'react-router-dom'; 
import { axiosWithAuth } from 'Auth/axiosWithAuth';
import {StoreContext} from '../contextAPI/Context.js'; 

const Edit = (props) => {

const [entry, setEntry] = useState({}); 
const id = parseInt(props.match.params.id,10); 
const { userInfo } = useContext(StoreContext);

  useEffect(function(){
    axiosWithAuth().get(`users/${userInfo.id}/posts`)
      .then(response => {
        console.log(response, "entry to be changed");
        setEntry(response.data.find((event) => event.id === id ))
      }) 
      .catch(error => {
        console.log(error, "can't edit entry"); 
      })
    }, []); 
  console.log(entry, "entry to be edited");
  

  const handleTitleChange = event =>{
    setEntry({ ...entry, title: event.target.value });
  }

  const handleContentsChange = event =>{
    setEntry({...entry, contents: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(entry.title,"editing title");
    console.log(entry.contents, "editing contents");
    axiosWithAuth().put(`users/posts/${id}`, {title: entry.title, contents: entry.contents})
    .then(response => {
      console.log(response, "response of editing a entry"); 
      setEntry(props.history.push("/MyEntries")); 
    })
    .catch(error => {
      console.log(error, "editing fail");
    })
    console.log(entry, "entry after editing"); 
  };

return (
  <div>
    <Link to='/MyEntries'> 
    <button > here</button>
    </Link>
    <form onSubmit={event => handleSubmit(event)} >   
        <input type='text' 
        onChange={event => handleTitleChange(event)}
        value={entry.title} />
        <input type='textarea' rows='10' cols='50' 
        onChange={event => handleContentsChange(event)}
        value={entry.contents} /> 
      <label>
        <button> Submit! </button>
      </label>

    </form>
  </div>
  )
} 

export default Edit; 