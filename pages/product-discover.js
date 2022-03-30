import React, {useEffect} from 'react';

import { AppLayout } from '../src/components/app-layout/app-layout';
import Categories from '../src/components/categories';
import ProductList from "../src/components/product-list"

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { fetchProducts } from '../src/redux/actions/fetch-products';
import withLapiService from '../src/components/hoc-helpers';

const ProductDiscover = ({dataFetching, fetchProducts, filteredProducts }) => {
  useEffect(() => {
    fetchProducts();
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

const mapStateToProps = ({
  productList: {loading, error, filteredProducts}}) => {
    return {
      dataFetching: {
        loading,
        error
      },
      filteredProducts
    }
}

const mapDispatchToProps = (dispatch, { lapiService }) => {
  return bindActionCreators({
    fetchProducts: fetchProducts(lapiService),
  }, dispatch)
}

export default compose(
  withLapiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductDiscover);
