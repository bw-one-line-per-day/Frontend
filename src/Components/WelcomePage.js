import React from 'react';


class WelcomePage extends React.Component {
	state = {
		name: '',
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
				<h1>Welcome!</h1>
				<form>
					<input 
						type='text' 
						name='name'
						placeholder='Name'
						value={this.state.name}
						onChange={this.handleChanges}
					/>
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
					<button>Sign Up</button>
					<p>Already have an account? Sign In"sign in is a link"</p>
				</form>
			</>
		);
	}
}
export default WelcomePage;