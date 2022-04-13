import styled from "styled-components";

export const MenuSvg = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:not(:last-child){
    margin-right: 26px;
  }
  &:hover {
    path {
      stroke: #f5895a;
      transition: .2s;
    }
  }
`

export const Arrow = styled.svg`
  margin-left: auto;
`