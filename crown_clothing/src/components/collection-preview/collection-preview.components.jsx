import React from 'react';

import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.components';
import {
  CollectionPreviewContainer,
  PreviewStyled,
  TitleStyled,
} from './collection-preview.styled';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleStyled onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleStyled>
      <PreviewStyled>
        {items
          .filter((_item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewStyled>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
