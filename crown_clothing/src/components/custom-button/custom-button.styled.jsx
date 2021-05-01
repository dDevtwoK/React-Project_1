import styled, { css } from 'styled-components';

const googleSignInStyle = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
  }
`;

const invertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const normalStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const getButtonStyle = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }

  return props.inverted ? invertedStyle : normalStyle;
};

export const ButtonContainer = styled.button`
  width: auto;
  height: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 400;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: 'Antonio', sans-serif;

  ${getButtonStyle}
`;
