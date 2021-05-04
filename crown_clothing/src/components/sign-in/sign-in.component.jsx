import React from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { ButtonsStyled, SignInStyled, TitleStyled } from './sign-in.styled';
import {
  emailSignInStart,
  googleSignInStart,
} from '../redux/user/user.actions';
import { connect } from 'react-redux';

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
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };
  changedHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInStyled>
        <TitleStyled>I already have an account</TitleStyled>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler} className='form'>
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
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
