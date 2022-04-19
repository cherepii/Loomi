import styled from "styled-components"

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FlexItem = styled.div`
  width: 50%;
  padding: 32px 0 0;

  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    padding-left: 32px;
  }
`

export const ItemTitle = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 8px;
`

export const ItemBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
`

export const Category = styled.div`
  font-size: 13px;
  letter-spacing: 0.03em;
  line-height: 150%;
  margin-top: 16px;
  cursor: pointer;
  color: ${props => props.isActive ? '#EB5757' : 'inherit'};
`

export const BrandsBody = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const BrandItem = styled.img`
  margin: 16px 0 54px;
  width: 48px;
 
  &:not(:nth-child(3n)){
    margin-right: 92px;
  }
`