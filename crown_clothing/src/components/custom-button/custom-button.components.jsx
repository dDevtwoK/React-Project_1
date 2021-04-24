import React from 'react';
import './custom-button.styled.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
