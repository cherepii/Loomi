import styled from "styled-components";

export const GiftsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GiftItem = styled.div`
  max-width: 351px;
  width: 100%;
  cursor: pointer;
`;

export const Description = styled.div`
  padding: 20px 24px;
  font-size: 14px;
  line-height: 150%;
  color: #222326;
  opacity: 0.7;
`

export const GiftInfo = styled.div`
  height: 173px;
  width: 100%;
  background: url(${props => props.cover});
  display: flex;
  align-items: flex-end;

  & > p {
    margin: 0 24px 24px;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`