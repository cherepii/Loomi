import {
  Wrapper,
  Title,
  ShoeName,
  ShoeImage,
  Description
} from "./styles"

const ShoesBanner = () => {
  return (
    <Wrapper>
      <Title>Season discount</Title>
      <ShoeName>sneakers</ShoeName>
      <Description>Up to 50% discount with “SEASON2021” promocode</Description>
      <ShoeImage src="shoe.png"/>
    </Wrapper>
  )
}

export default ShoesBanner