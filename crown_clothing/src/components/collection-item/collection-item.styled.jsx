import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.components';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      display: flex;
      opacity: 0.7;
    }
  }
`;
export const ImageStyled = styled.div`
  width: 90%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ image }) => `url(${image})`};
`;
export const CollectionFooter = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const NameStyled = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const PriceStyled = styled.span`
  width: 10%;
`;
export const AddButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  top: 250px;
  opacity: 0.7;
  display: none;
  border: 1px solid black;
`;
