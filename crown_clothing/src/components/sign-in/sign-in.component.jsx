import React from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ButtonsStyled, SignInStyled, TitleStyled } from './sign-in.styled';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };
  changedHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignInStyled>
        <TitleStyled>I already have an account</TitleStyled>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            changedHandler={this.changedHandler}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            changedHandler={this.changedHandler}
            required
            label='password'
          />
          <ButtonsStyled>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </ButtonsStyled>
        </form>
      </SignInStyled>
    );
  }
}

export default SignIn;
