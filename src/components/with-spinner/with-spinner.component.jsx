import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styled';

const WithSpinner = WrappedComponent => ({ isFetching, ...otherProps }) =>
  isFetching ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );

export default WithSpinner;
