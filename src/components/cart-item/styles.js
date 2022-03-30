import styled from "styled-components";

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 39px;
`;

export const ProductImage = styled.div`
  max-width: 276px;
  width: 100%;
  height: 416px; 
  cursor: pointer;
  position: relative;
  
  &> img {
    width: 100%;
    height: 100%;
  }
`;

export const ProductTitle = styled.p`
  font-size: 13px;
  line-height: 150%;
  letter-spacing: 0.03em;
  margin: 16px 0 12px;
`;

export const ProductPrice = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #F4A482;
  text-align: center;
  display: block;
`;

export const DiscountBlock = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 22;
  top: 16px;
  left: 0;
  width: 40px;
  height: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
  background: #EB5757;
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  cursor: pointer;
  
  & > svg {
    & > path {
      fill: ${props => props.isActive ? '#EB5757;' : 'rgba(255, 255, 255, 0.4)'};
    }
  }
  
`;

export const Lines = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Line = styled.span`
  height: 100%;
  width: ${({count}) => 240 / count + 'px'};

  &:not(:last-child){
    margin-right: 6px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 16px;
    background: rgba(244, 244, 244, 0.7);
    height: 3px;
    width: ${({count}) => 240 / count + 'px'};
  }

  &.active {
    ::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 16px;
      background: #fff !important;
      height: 3px;
      width: ${({count}) => 240 / count + 'px'};
    }
  }

  
`;