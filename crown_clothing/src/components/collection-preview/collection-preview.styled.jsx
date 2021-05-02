import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const TitleStyled = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  transition: hover 0.3s ease-in;
  &:hover {
    color: #999;
    cursor: pointer;
  }
`;
export const PreviewStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
