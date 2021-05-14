import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
  }
`;

export const CheckoutHeaderStyled = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
export const HeaderBlockStyled = styled.div`
  text-transform: capitalize;

  &:not(:last-child) {
    flex: 1;
    width: 32%;
  }
`;

export const TotalStyled = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningStyled = styled.div`
  font-size: 20px;
  color: orangered;
  margin: 30px auto;
  text-align: center;
`;
