import styled from "styled-components";

export const PopupHeader = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  min-height: 172px;
  background: url(sale-popup-bg.jpg);
`;

export const PopupTextBlock = styled.div`
  max-width: 533px;
  width: 100%;
  text-align: center;
  color: #887568;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 13px;
  font-weight: 400;

  & > span {
    padding: 6px 3px 0;
    background: #FFD8C7;
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
`;