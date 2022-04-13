import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  align-items: start;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: ${props => props.isLarge ? "32px" : "16px"}
`;