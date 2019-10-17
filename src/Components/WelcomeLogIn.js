import React from 'react';


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


	render(){
		console.log(this.state);
		return (
			<>
				<h1>Welcome back!</h1>
				<form>
					
					<input 
						type='email' 
						name='email'
						placeholder='Email'
						value={this.state.email}
						onChange={this.handleChanges}
					/>
					<input 
						type='password' 
						name='password'
						placeholder='Password'
						value={this.state.passwoed}
						onChange={this.handleChanges}
					/>
					<button>Sign In</button>
					<p>Don't have an account? Sign UP</p>
				</form>
			</>
		);
	}
}
export default WelcomeLogIn;