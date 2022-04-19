import React from 'react'

import {
  PopupHeader,
  PopupTextBlock,
  HeaderTitle,
  HeaderSubtitle
} from "./styles"

const SaleBanner = () => {
  return (
    <PopupHeader>
      <PopupTextBlock>
        <HeaderTitle>Get up to <span>20%</span> discount </HeaderTitle>
        <HeaderSubtitle>Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs.</HeaderSubtitle>
      </PopupTextBlock>
    </PopupHeader>
  )
}

export default SaleBanner