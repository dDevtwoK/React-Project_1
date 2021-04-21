import React from 'react';
import './sign-in.styled.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };
  changedHandler = e => {
    const { value, name } = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);
    return (
      <div className='sign-in'>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            changedHandler={this.changedHandler}
            name='email'
            type='email'
            value={this.state.email}
            required
            label='email'
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            changedHandler={this.changedHandler}
            required
            label='password'
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
