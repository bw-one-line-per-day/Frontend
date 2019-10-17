
const WelcomePage = () => {
	return (
		<h1>Welcome!</h1>
		<form>
			<input 
				type='text' 
				name='name'
			/>
			<input 
				type='email' 
				name='email'
			/>
			<input 
				type='password' 
				name='password'
			/>
			<button>Sign Up</button>
			<p>Already have an account? Sign In"sign in is a link"</p>
		</form>
	);
}
export default WelcomePage;