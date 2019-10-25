
import React, { useState, useEffect, useContext } from "react"; 
import { Link } from 'react-router-dom';

import styled from "styled-components"; 
import Footer from './Footer.js'; 
import {StoreContext} from '../contextAPI/Context.js'; 
import Nav from './Nav.js'; 
import EntryForm from './EntryForm.js'; 
import  TrashCan  from '../Images/trashcan.svg';
import  Edit  from '../Images/editwithpen.svg';import AddButton from '../Images/AddButton.png';  
import { axiosWithAuth } from "../Auth/axiosWithAuth.js";

function EntryArchive(props) { 

  const { userInfo } = useContext(StoreContext);

  const [entry, setEntry] = useState([
    {
      id: 1,
      title: 'A beatiful Fall Day',
      contents:
        'Played outside with Aria today, she loves throwing leaves at me and Allie.'
    },
    {
      id: 2,
      title: 'Rainy Days',
      contents: "Rain and a toddler doesn't mix, made cookies today."
    },
    {
      id: 3,
      title: 'Tic Tac Toe',
      contents:
        'Aria and I played Tic Tac Toe on a codepen I made while learning react. I left her win.'
    }
  ]);

  useEffect(function(){
  axiosWithAuth().get(`users/${userInfo.id}/posts`)
    .then(response => {
      console.log(response);
      setEntry(response.data)
    }) 
    .catch(error => {
      console.log(error); 
    })
  }, []);  

  // const addEntryData = post => {
  //   const NewPost = {
  //     id: Date.now(),
  //     title: post.title,
  //     content: post.content
  //   };
  //   setEntry([...entry, NewPost]);
  // };

  return (
    <StyledPage>
      
      <Nav />

      <Button onClick={() => props.history.push}> <img src={AddButton} alt={'Add New Entry'} /></Button>

      <Link to='/NewEntry'> <img src={AddButton} alt={'Add New Entry'} /></Link>
      {/* <Button> <img src={AddButton} alt={'Add New Entry'} /></Button> */}
      {/* <Link to='/'>Sign In</Link> */}


      {entry.map(({id, title, contents}) => { 
        return (
      <div key={id}>
        <p>{title}</p>
        <p>{contents}</p>

      
      {/* <EntryForm addEntryDataFN={addEntryData} /> */}
      <DeleteIcon src={TrashCan} alt={'delete'} onClick={() => axiosWithAuth().delete(`users/posts/${id}`).then(res => setEntry(entry.filter(event => event.id !== id)))} />
      <Link to={`/edit/${id}`}><EditIcon src={Edit} alt={'Edit Entry'} /> 
      </Link>
      </div>
        )
      })}
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background: #fee5e2;
  // height: 100%;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  border: none;
  background: none;
  height: 50px;
`;
const DeleteIcon = styled.img`
  height: 50px;
`;

const EditIcon = styled.img`
  height: 50px;
`;
export default EntryArchive;
