import React from "react";
import { connect } from 'react-redux'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
	state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
	};

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword){
			alert(`Passwords don't match`);
			return;
		}

		const { signUpStart } = this.props;
		signUpStart({ email, password, displayName });
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

				<form className='sign-up-form'>
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
					<CustomButton onClick={this.handleSubmit} type='submit'>Sign up</CustomButton>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userDetails => dispatch(signUpStart(userDetails))
})

export default connect(null, mapDispatchToProps)(SignUp);
