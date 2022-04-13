import CartItem from './cart-item';
import { CartWrapper } from './styles';
import ErrorMessage from "../common/error-boundary"

const CartListContainer = ({ dataFetching, products }) => {
  const {loading, error} = dataFetching;
  console.log(loading)

  if(loading) {
    return <p>loading...</p>
  }
  if(error){
    return <ErrorMessage />
  }
  return (
    <CartWrapper isTwoProducts={products.length <= 2}>
      {products.length ? products.map(product => {
        return (
          <CartItem key={product.id} product={product}/>
        )
      })
      : <div>Products are not found</div>
      }
      
    </CartWrapper>
  )
}

export default CartListContainer;
