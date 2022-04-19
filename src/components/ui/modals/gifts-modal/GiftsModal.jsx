import CommonPopup from '../../../common/common-popup'

import {
  GiftsWrapper,
  GiftItem,
  GiftInfo,
  Description
} from "./styles"

const GiftsModal = ({closeModal}) => {
  return (
    <CommonPopup closeModal={closeModal}>
      <GiftsWrapper>
        <GiftItem>
          <GiftInfo cover='woman-gift.jpg'>
            <p>gifts for her</p>
          </GiftInfo>
          <Description>
            Face&Body faves, accessories & more
          </Description>
        </GiftItem>
        <GiftItem>
          <GiftInfo cover='man-gift.jpg'>
            <p>gifts for him</p>
          </GiftInfo>
          <Description>
            Fashion, gadgets, sneakers. He’d like!
          </Description>
        </GiftItem>
      </GiftsWrapper>
    </CommonPopup>
  )
}

export default GiftsModal