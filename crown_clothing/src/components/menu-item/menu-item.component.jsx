import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  BackgroundImageStyled,
  ContentStyled,
  MenuItemContainer,
  SubtitleStyled,
  TitleStyled,
} from './menu-item.styled';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      large={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageStyled className='background-image' image={imageUrl} />
      <ContentStyled className='content'>
        <TitleStyled>{title.toUpperCase()}</TitleStyled>
        <SubtitleStyled>SHOP NOW</SubtitleStyled>
      </ContentStyled>
    </MenuItemContainer>
  );
};
export default withRouter(MenuItem);
