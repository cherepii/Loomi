import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from '../src/components/common/app-layout';
import Categories from '../src/components/categories';  
import ProductList from "../src/components/product-list"

import { fetchProducts } from '../src/redux/actions/fetch-products';
import { useService } from '../src/hooks/useService';

const ProductDiscover = () => {
  const { apiService } = useService()

  const dispatch = useDispatch()
  const filteredProducts = useSelector(({productList}) => productList.filteredProducts)
  const dataFetching = useSelector(({productList}) => ({error: productList.error, loading: productList.loading}))


  useEffect(() => {
    dispatch(fetchProducts(apiService)(dispatch))
  }, [])

  return (
    <AppLayout 
      isLarge 

      left={<Categories />} 
      right={
        <ProductList 
          products={filteredProducts} 
          dataFetching={dataFetching}
        />
      }
    />
  )
};

export default ProductDiscover;
