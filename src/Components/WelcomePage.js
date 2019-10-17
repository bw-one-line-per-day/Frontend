import React from 'react';


const WelcomePage = () => {
	return (
		<>
			<h1>Welcome!</h1>
			<form>
				<input 
					type='text' 
					name='name'
					placeholder='Name'
				/>
				<input 
					type='email' 
					name='email'
					placeholder='Email'
				/>
				<input 
					type='password' 
					name='password'
					placeholder='Password'
				/>
				<button>Sign Up</button>
				<p>Already have an account? Sign In"sign in is a link"</p>
			</form>
		</>
	);
}
export default WelcomePage;