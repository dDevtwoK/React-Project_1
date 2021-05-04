import React from 'react';

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';

import { SignUpContainer, TitleStyled } from './sign-up.styled';
import { connect } from 'react-redux';
import { signUpStart } from '../redux/user/user.actions';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  submitHandler = async e => {
    const { signUpStart } = this.props;
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Mat khau phai giong nhau');
      return;
    }
    if (password.length < 6) {
      alert('Mat khau phai co it nhat 6 ki tu');
    }
    console.log(this.props);

    signUpStart({ displayName, email, password });
  };
  changedHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleStyled>I do not have an account</TitleStyled>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.submitHandler}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.changedHandler}
            label='Display name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.changedHandler}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.changedHandler}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.changedHandler}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: data => dispatch(signUpStart(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
