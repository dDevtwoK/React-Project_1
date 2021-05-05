import React, { useState } from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { ButtonsStyled, SignInStyled, TitleStyled } from './sign-in.styled';
import {
  emailSignInStart,
  googleSignInStart,
} from '../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;
  const submitHandler = e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  const changedHandler = e => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInStyled>
      <TitleStyled>I already have an account</TitleStyled>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler} className='form'>
        <FormInput
          name='email'
          type='email'
          value={email}
          changedHandler={changedHandler}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          changedHandler={changedHandler}
          required
          label='password'
        />
        <ButtonsStyled>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </ButtonsStyled>
      </form>
    </SignInStyled>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
