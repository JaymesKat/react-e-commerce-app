import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form'>
        <FormInput
          name='displayName'
          type='text'
          label='Display Name'
          handleChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name='password'
          label='Password'
          type='password'
          handleChange={handleChange}
          value={password}
          required
        />

        <FormInput
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          handleChange={handleChange}
          value={confirmPassword}
          required
        />
        <CustomButton onClick={handleSubmit} type='submit'>
          Sign up
        </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userDetails) => dispatch(signUpStart(userDetails)),
});

export default connect(null, mapDispatchToProps)(SignUp);
