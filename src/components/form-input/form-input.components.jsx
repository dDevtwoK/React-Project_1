import React from 'react';
import {
  FormInputLabelStyled,
  FormInputStyled,
  GroupContainer,
} from './form-input.styled';

const FormInput = ({ changedHandler, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputStyled onChange={changedHandler} {...otherProps} />
    {label ? (
      <FormInputLabelStyled
        className={`${otherProps.value.length ? 'shrink' : ''}`}
      >
        {label}
      </FormInputLabelStyled>
    ) : null}
  </GroupContainer>
);

export default FormInput;
