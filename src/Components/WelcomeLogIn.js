import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styled from 'styled-components';



// styled components
const NavOuterDiv = styled.nav`
	 display: flex;
  	flex-direction: row;
  	font-size: 1.5rem;
`;
const DivOneLineADay = styled.div`
	margin-top: 25px;
  	margin-left: 3%;

`;

const DivOtherLinks = styled.div`
	margin-left: 45%;
  	width: 40%;
`;

const UlLinks = styled.div`
	 display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  list-style: none;
	  width: 80%;
	  margin-top: 25px;
`;
const H1Wrapper = styled.h1`
	  margin-top: 200px;
  		font-size: 2rem;
`;

const Button = styled.button`
	font-size: 1.5rem;
   	border-radius: 5px;
    width: 75%;
    color: rgb(218, 216, 250);
    margin: 20px auto;
    background-color: rgb(202, 200, 248);
`;

const Paragraph = styled.p`
	font-size: 1.2rem;
  	color: rgb(119, 136, 150);

`;

class WelcomeLogIn extends React.Component {
	state = {
		email: '',
		password: ''
	}


	handleChanges = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
			
		});
			

	}
	onSubmit = e => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
		return console.log('welcomeLogIn:onSubmit func',this.state);
	}


	render(){
		console.log(this.state);
		return (
			<>
				<Router>
					<NavOuterDiv>
						<DivOneLineADay>
							<Link className='oneADaylink' to='/card'>One Line a Day </Link>
						</DivOneLineADay>
					
						<DivOtherLinks>
						<UlLinks>
							<li>
							<Link className='otherLinks' to='/about-us'>About Us</Link>
							</li>
							<li>
							<Link className='otherLinks' to='/learn-more'>Learn more</Link>
							</li>
							<li>
							<Link  className='otherLinks' to='/sign-up'>Sign Up</Link>
							</li>
						</UlLinks>

						</DivOtherLinks>
					</NavOuterDiv>
			
				
				
				<H1Wrapper>Welcome back!</H1Wrapper>
				
				<form onSubmit={this.onSubmit} className='form'>
					<input className='inputsWelcomePage' 
						type='email' 
						name='email'
						placeholder='Email'
						value={this.state.email}
						onChange={this.handleChanges}
					/>
					<input  className='inputsWelcomePage'
						type='password' 
						name='password'
						placeholder='Password'
						value={this.state.passwoed}
						onChange={this.handleChanges}
					/>
					
					<Button onClick={this.onSubmit} >Sign In</Button>
					<Link className='paragraphLink' to='/sign-up'>
						<Paragraph>Don't have an account? Sign Up</Paragraph>
					</Link>
				</form>
				</Router>
			
			</>
		);
	}
}
export default WelcomeLogIn;