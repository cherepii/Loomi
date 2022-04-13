import { useState } from 'react'
import { Link } from 'react-router-dom';
import { HeartSvg } from '../../common/svg-selector/SvgSelector';

import { 
  ProductImage, 
  ProductItem, 
  ProductTitle, 
  ProductPrice,
  DiscountBlock,
  HeartIcon,
  Lines,
  Line } from './styles'

const CartItem = ({product}) => {
  const [isHeartActive, setHeartActive] = useState(false);
  const [viewImage, setViewImage] = useState(0)
  const [isActiveLine, setIsActiveLine] = useState(0)
  const [showLines, setShowLines] = useState(false)

  const {imagesPerView, title, price, discount} = product;

  const activeClass = (idx) => {
    return isActiveLine === idx ? 'active' : ''
  }

  const handleChange = (idx) => {
    setViewImage(idx);
    setIsActiveLine(idx)
  }

  const RenderLine = () => {
    return (
      imagesPerView.map((i, idx) => {
        return (
          <Line 
            className={activeClass(idx)}
            count={imagesPerView.length} 
            onPointerEnter={() => handleChange(idx)} 
            key={idx}
          />
        )
      })
    )
  }

  return (
    <ProductItem>
      {discount && 
        <DiscountBlock>-{discount}%</DiscountBlock>
      }

      <HeartIcon isActive={isHeartActive} onClick={() => setHeartActive(true)}>
        <HeartSvg />
      </HeartIcon>

      <ProductImage 
        onPointerEnter={() => setShowLines(true)} 
        onPointerLeave={() => setShowLines(false)}>

        <img src={imagesPerView[viewImage]}/>

        {showLines && 
          <Lines>
            <RenderLine />
          </Lines>
        }
      </ProductImage>
      
        <Link to={'/'}>
          <ProductTitle>{title}</ProductTitle>
        </Link>
        <ProductPrice>{price}</ProductPrice>
    </ProductItem>
  )
}

export default CartItem;