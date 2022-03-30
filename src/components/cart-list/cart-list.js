import React from 'react'

import CartItem from '../cart-item';
import { CartWrapper } from './styles';
import ErrorMessage from "../error-boundary"

const CartList = ({products}) => {
  return (
      <CartWrapper isTwoProducts={products.length <= 2}>
        {products.length ? 
          <>
            {products.map(product => {
              return (
                <CartItem key={product.id} product={product}/>
              )
            })}
          </>
        : null
        }
        
      </CartWrapper>
  )
}

const CartListContainer = ({ dataFitching, products }) => {
  const {loading, error} = dataFitching;

  if(loading) {
    return <p>loading...</p>
  }
  if(error){
    return <ErrorMessage />
  }
  return (
    <CartList products={products} />
  )
}

export default CartListContainer;
