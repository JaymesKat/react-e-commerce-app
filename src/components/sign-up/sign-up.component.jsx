import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			display: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({
			display: "",
			email: "",
			password: "",
			confirmPassword: ""
		});
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-up'>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='displayName'
						type='text'
						label='displayName'
						handleChange={this.handleChange}
						value={this.state.email}
					/>
					<FormInput
						name='email'
						type='email'
						label='email'
						handleChange={this.handleChange}
						value={this.state.email}
						required
					/>
					<FormInput
						label='password'
						type='password'
						handleChange={this.handleChange}
						value={this.state.password}
						required
					/>

					<FormInput
						label='confirmPassword'
						type='confirmPassword'
						handleChange={this.handleChange}
						value={this.state.confirmPassword}
						required
					/>
					<CustomButton type='submit'>Sign up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
