import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDoc }  from '../../firebase/firebase.utils';

import "./sign-up.styles.scss";

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword){
			alert(`Passwords don't match`);
			return;
		}

		try{
			const { user } = auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDoc(user, { displayName });
			
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		}
		catch(error){
			console.error(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						name='displayName'
						type='text'
						label='Display Name'
						handleChange={this.handleChange}
						value={displayName}
						required
					/>
					<FormInput
						name='email'
						type='email'
						label='Email'
						handleChange={this.handleChange}
						value={email}
						required
					/>
					<FormInput
						name='password'
						label='Password'
						type='password'
						handleChange={this.handleChange}
						value={password}
						required
					/>

					<FormInput
						name='confirmPassword'
						label='Confirm Password'
						type='password'
						handleChange={this.handleChange}
						value={confirmPassword}
						required
					/>
					<CustomButton type='submit'>Sign up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
