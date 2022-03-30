import styled from "styled-components"

const CategoriesWrapper = styled.div`
  max-width: 225px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 103px;
`;

const CategoriesTitle = styled.h4` 
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #887568;
  margin-bottom: 24px;
`;

const CategoryLink = styled.li `
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  user-select: none;
  
  & > p {
    line-height: 150%;
  }

  &.active-link {
    background: #E09C7F;
    transition: .3s;
    & > p {
      color: #fff;
    }
    & >span:nth-child(2) {
      background: #fff;
    }
    & >span:nth-child(3) {
      color: #FFFFFF;
      opacity: 0.7;
      
    }
  }
`;

const Dot = styled.span`
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #7E7B77;
  margin: 0 8px 0 4px;
`;

const CategoryCount = styled.span`
  line-height: 150%;
  text-align: right;
  color: #7E7B77;
  font-weight: 400;
`;

export {
  CategoriesWrapper,
  CategoriesTitle,
  CategoryCount,
  Dot,
  CategoryLink
}