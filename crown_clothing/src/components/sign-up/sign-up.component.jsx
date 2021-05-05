import React, { useState } from 'react';

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';

import { SignUpContainer, TitleStyled } from './sign-up.styled';
import { connect } from 'react-redux';
import { signUpStart } from '../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const submitHandler = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Mat khau phai giong nhau');
      return;
    }
    if (password.length < 6) {
      alert('Mat khau phai co it nhat 6 ki tu');
    }

    signUpStart({ displayName, email, password });
  };
  const changedHandler = e => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleStyled>I do not have an account</TitleStyled>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={submitHandler}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={changedHandler}
          label='Display name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={changedHandler}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={changedHandler}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={changedHandler}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: data => dispatch(signUpStart(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
