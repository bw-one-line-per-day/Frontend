import React, { useState } from 'react'
import { axiosWithAuth } from './axiosWithAuth'
import styled from 'styled-components'

const SignUp = (props) => {

  const RegisterBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10em;
    align-items: center;
    justify-content: center;
    padding: 4em;
    border: 1px solid grey;
    border-radius: 3px;
    width: 50%;
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
    `
  const SignUpButton = styled.button`
    display: flex;
    flex-direction: column;
    margin: 2em;
    width: 328px;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: 5px;
    background: blue;
    color: white;
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
        //props.history.push('/dashboard')
        console.log(res.data)
      })
      .catch(err => console.log(err))}

  return (
    <>
      <h1>Welcome!</h1>
      <div>
        <RegisterBox>
          <form onSubmit={signUp}>
          <RegisterInput
            type='text'
            name='username'
            placeholder='Username'
            value={credentials.username}
            onChange={handleChange}
          />
          <RegisterInput
            type='password'
            name='password'
            placeholder='Password'
            value={credentials.password}
            onChange={handleChange}
          />
          <SignUpButton onClick={signUp}>Sign Up</SignUpButton>
          </form>
          <BackToSignIn>Already have an account? Sign In</BackToSignIn>
        </RegisterBox>
      </div>
    </>
  );
};

export default SignUp;