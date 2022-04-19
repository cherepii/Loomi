import ShoesBanner from "../../../banners/shoes-banner/ShoesBanner"
import CommonPopup from "../../../common/common-popup"
import {SHOES_CATEGORIES} from "../../../../constants/static"

import {
  FlexWrapper,
  FlexItem,
  ItemTitle,
  ItemBody,
  Category,
  BrandsBody,
  BrandItem
} from "./styles"
import { useState } from "react"
import { brands } from "./brands"

const ShoesModal = ({closeModal}) => {
  const [isActive, setIsActive] = useState(0)
  console.log(isActive)

  const handleClick = (index) => {
    setIsActive(index)
  }

  return (
    <CommonPopup isPadding='32px 32px 0' closeModal={closeModal}>
      <ShoesBanner />

      <FlexWrapper>
        <FlexItem>
          <ItemTitle>Categories</ItemTitle>
          <ItemBody>
            {SHOES_CATEGORIES.map((i, idx) => (
              <Category 
                key={`shoes category ${idx}`}
                isActive={isActive == idx}
                onClick={() => handleClick(idx)}>
                {i.name}
              </Category>
            ))}
          </ItemBody>
        </FlexItem>
        <FlexItem>
          <ItemTitle>Brands</ItemTitle>
          <BrandsBody>
              {brands.map((brand, idx) => (
                  <BrandItem key={`brand categories ${idx}`} src={`brands/${brand}.jpg`}/>
              ))}
          </BrandsBody>
        </FlexItem>
      </FlexWrapper>
    </CommonPopup>
  )
}

export default ShoesModal