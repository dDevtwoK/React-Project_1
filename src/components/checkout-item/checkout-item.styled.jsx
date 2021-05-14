import styled from 'styled-components';

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const NameStyled = styled.span`
  width: 23%;
`;
export const QuantityStyled = styled.span`
  width: 23%;
  display: flex;
  justify-content: flex-start;
`;
export const ArrowRight = styled.div`
  cursor: pointer;
  padding-left: 10px;
`;
export const ArrowLeft = styled.div`
  cursor: pointer;
  padding-right: 10px;
`;
export const PriceStyled = styled.span`
  width: 23%;
  padding-left: 5px;
`;
export const RemoveButtonStyled = styled.div`
  padding-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;
