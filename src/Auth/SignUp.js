import React, { useState } from 'react'
import { axiosWithAuth } from './axiosWithAuth'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components'
import SignUpImage from '../Assets/SignUp.png'
import Button from '../Assets/SignUpButton.png'
//import InactiveButton from '../Assets/SignUpInactiveButton'
import LogoImg from '../Images/Logo.png'
import WelcomeLogIn from '../Components/WelcomeLogIn.js';

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  
  const handleChange = e => {
    setCredentials({
      ...credentials, 
      [e.target.name]: e.target.value
      })}

  const signUp = e => {
    e.preventDefault()
    console.log(credentials)
    axiosWithAuth()
      .post('/auth/register', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        props.history.push('/home')
        console.log(res.data)
      })
      .catch(err => console.log(err))}

  return (
    <>
    <Header>
      <Logo src={LogoImg} />
      <Title>ONE LINE A DAY</Title>
    </Header>
    <Page>
    <img src={SignUpImage} />
        <RegisterBox>
        <h1>Welcome!</h1>
          <form onSubmit={signUp}>
          <RegisterInput
            type='text'
            name='username'
            placeholder='NAME'
            value={credentials.username}
            onChange={handleChange}
          />
          <RegisterInput
            type='password'
            name='password'
            placeholder='PASSWORD'
            value={credentials.password}
            onChange={handleChange}
          />
          <SignUpButton onClick={signUp}><img src={Button}/></SignUpButton>
          </form>
          
          <BackToSignIn>Already have an account?</BackToSignIn>
        
          <Link to='/login'>Sign In</Link>
       
        </RegisterBox>
    </Page>
    </>
  );
};

const Title = styled.h1`
font-size: 5rem;
margin-left: 25%;
color: rgb(234, 126, 76);
`

const Logo = styled.img`
margin-top: 30px;
margin-left: 3%;
width: 83px;
height: 115px;
`
const Header = styled.header`
padding-top: 10px;
display: flex;
flex-direction: row;
background: #FEE5E2;
`

const Page = styled.div`
display: flex;
flex-direction: row;
display: center;
align-items: center;
justify-content: center;
background: #FEE5E2;
height: 100%;
`

const RegisterBox = styled.div`
display: flex;
flex-direction: column;
margin: 10em;
align-items: center;
justify-content: center;
padding: 4em;
`
const RegisterInput = styled.input`
display: flex;
flex-direction: column;
width: 300px;
margin: 2em;
align-items: center;
justify-content: center;
padding: 1em;
border: 1px solid grey;
border-radius: 5px;
background: white;
`
const SignUpButton = styled.button`
display: flex;
flex-direction: column;
margin: 2em;
border: none;
background: none;
`
const BackToSignIn = styled.button`
display: flex;
flex-direction: column;
margin: 2em;
width: 20em;
justify-content: center;
align-items: center;
padding: 1em;
border: none;
background: none;
`
export default SignUp;