import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  & > div:not(:nth-child(3n)){
    margin-right: ${({isTwoProducts}) => isTwoProducts ? "22px" : 'auto'}
  }
`;