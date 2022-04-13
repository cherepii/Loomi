import Filters from '../filters'
import CartListContainer from "../cart-list"
import { ProductsWrapper } from './styles'

export const ProductList = ({products, dataFetching}) => {

  return (
    <ProductsWrapper>
      <Filters productResults={products.length}/>
      <CartListContainer products={products} dataFetching={dataFetching} />
    </ProductsWrapper>
  )
}

export default ProductList;
