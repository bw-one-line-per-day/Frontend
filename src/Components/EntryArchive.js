
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

  const [entry, setEntry] = useState([userInfo]);
  //   {
  //     id: 1,
  //     title: 'A beatiful Fall Day',
  //     contents:
  //       'Played outside with Aria today, she loves throwing leaves at me and Allie.'
  //   },
  //   {
  //     id: 2,
  //     title: 'Rainy Days',
  //     contents: "Rain and a toddler doesn't mix, made cookies today."
  //   },
  //   {
  //     id: 3,
  //     title: 'Tic Tac Toe',
  //     contents:
  //       'Aria and I played Tic Tac Toe on a codepen I made while learning react. I left her win.'
  //   }
  // ]);

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
      <Link to='/NewEntry'> <img src={AddButton} alt={'Add New Entry'} /></Link>
      <AllEntries>
      {entry.map(({id, title, contents}) => { 
        return (
      
      <EachEntry key={id}>
        <h3>{title}</h3>
        <p>{contents}</p>
        <div>
      <DeleteIcon src={TrashCan} alt={'delete'} onClick={() => axiosWithAuth().delete(`users/posts/${id}`).then(res => setEntry(entry.filter(event => event.id !== id)))} />
      <Link to={`/edit/${id}`}><EditIcon src={Edit} alt={'Edit Entry'} /> 
      </Link>
      </div> 
      </EachEntry>
        )
      })}
      </AllEntries>
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  background: #fee5e2;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DeleteIcon = styled.img`
  height: 35px;
  padding-right: .25rem;
  padding-left: .25rem;
`;

const EditIcon = styled.img`
  height: 35px;
  padding-right: .25rem;
  padding-left: .25rem;
`;

const AllEntries = styled.div`
display: flex;
flex-direction: row;
padding: .5rem;
width: 90%;
flex-flow: wrap;
justify-content: space-evenly;
margin: 1rem auto;
`

const EachEntry = styled.div`
display: flex;
flex-direction: column;
padding: .25rem;
margin: .10rem auto;
border: 1px solid darkorange;
border-radius: 15px;
text-align: center;
margin-bottom: inherit; 
background-color: #fef3f4
`
export default EntryArchive;
