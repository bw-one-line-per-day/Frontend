import React, { useEffect, useState, useContext } from 'react'; 
import { Link } from 'react-router-dom'; 
import { axiosWithAuth } from 'Auth/axiosWithAuth';
import {StoreContext} from '../contextAPI/Context.js'; 

const Edit = (props) => {

const [entry, setEntry] = useState(); 
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
  

  useEffect(function(){
    axiosWithAuth().put(`users/posts/${id}`, {title: entry.title, contents: entry.contents})
    .then(response => {
      console.log(response, "response of editing a entry"); 
      setEntry(response.data); 
    })
    .catch(error => {
      console.log(error, "editing fail");
    })
  }, []);
  console.log(entry, "entry after editing"); 

  const handleSubmit = event => {
    event.preventDefault();
    console.log(entry.title,"editing title");
    console.log(entry.contents, "editing contents");
  };

return (
  <div>
    <Link to='/MyEntries'> 
    <button > here</button>
    </Link>
    <form onSubmit={event => handleSubmit(event)} >   
      <label >
        <input type='text' defaultValue='title'>
          {entry.title} 
        </input> 
      </label>
      <label>
        <textarea rows='10' cols='50'> 
          {entry.contents}
        </textarea> 
      </label>
      <label>
        <button> Submit! </button>
      </label>

    </form>
  </div>
  )
} 

export default Edit; 