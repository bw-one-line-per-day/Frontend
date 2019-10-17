import React, { useState } from "react";
import { axiosWithAuth } from './axiosWithAuth';

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
    e.preventDefault();
    axiosWithAuth()
      .post('/auth/register', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        //props.history.push('/dashboard')
      })
      .catch(err => console.log(err))}

  return (
    <>
      <h1>Welcome!</h1>
      <div>
        <form onSubmit={signUp}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Sign Up</button>
        </form>
        <button>Already have an account? Sign In</button>
      </div>
    </>
  );
};

export default SignUp;