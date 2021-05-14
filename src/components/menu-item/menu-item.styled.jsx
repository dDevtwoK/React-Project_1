import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;
  height: ${({ large }) => (large ? '380px' : '240px')};

  cursor: pointer;
  &:hover {
    & .background-image {
      transform: scale(1.1);
    }
    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageStyled = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: absolute;
  transition: transform 5s ease;
  background-image: ${({ image }) => `url(${image})`};
`;

export const ContentStyled = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgba(240, 248, 255, 0.705);
  opacity: 0.6;
  transition: opacity 0.2s;
  font-family: 'Antonio', sans-serif;
  font-size: 32px;
`;

export const TitleStyled = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;
export const SubtitleStyled = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
