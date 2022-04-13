import styled from "styled-components";

export const Popup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  z-index: 222;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const PopupBody = styled.div`
  margin-top: 70px;
  max-width: 790px;
  width: 100%;
  padding: ${({isPadding}) => isPadding ? 0 : '32px' };
  background: #fff;
  cursor: default;
`;