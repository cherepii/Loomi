import styled from "styled-components"

export const Title = styled.h1`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const PopupBody = styled.div`
  display: flex;
  width: 100%;
`;

export const FlexItem = styled.div`
  padding: 32px;
  width: 50%;

  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const GenderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 23px;
`;

export const GenderItem = styled.div`
  max-width: 153px;
  width: 100%;
  height: 326px;
  position: relative;
  align-items: center;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const GenderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  position: absolute;
  top: 143px;
  left: 0;
  background: #FFFFFF;
  opacity: 0.7; 
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  max-width: 158px;
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:not(:nth-child(n + 7)){
    margin-bottom: 16px;
  }
`;

export const CategoryCover = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const CategoriesBlock = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
