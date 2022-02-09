import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.isLarge ? "32px" : "16px"}
`;