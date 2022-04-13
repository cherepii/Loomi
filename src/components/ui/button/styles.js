import styled from "styled-components";

export const CommonButton = styled.button`
  background: ${({isBg}) => isBg || "#F4A482"};
  font-weight: 500;
  font-size: 13px;
  color: #fff;
  padding: 10px 0;
  border: 1px solid #F4A482;
  cursor: pointer;
  width: ${({width}) => width || "88px"}
`;