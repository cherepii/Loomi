import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 40px 16px;
  overflow: hidden;
  background: linear-gradient(94.17deg, #E2E2E3 0%, #CFD2E0 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-style: italic;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.02em;
`

export const ShoeName = styled.span`
  font-weight: 700;
  font-size: 110px;
  margin-top: -30px;
  letter-spacing: 0.035em;
  color: #C6C8CE;

`

export const Description = styled.p`
  font-size: 13px;
  line-height: 150%;
  letter-spacing: 0.03em;
`

export const ShoeImage = styled.img`
  width: 330px;
  height: 330px;
  filter: drop-shadow(13px 16px 40px rgba(0, 0, 0, 0.3));
  position: absolute;
  right: -40px;
  top: -55px;
  z-index: 4
`