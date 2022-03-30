import React  from 'react';

import { connect } from 'react-redux';
import { filterProducts, sortProductsByString, setSortedBy } from '../../redux/actions/sort-products';

import CategoriesItem from '../categories-item';
import {CategoriesTitle, CategoriesWrapper} from "./styles"
import { CATEGORIES } from './mock';

                      // get data from redux store
const Categories = ({setSortedBy, products, filter, filterProducts }) => {

  const findProductsCategoryCount = (item) => {
    const sortedProductsCount = products.filter(p => item.category === p.category).length;

    const showAllPRoductsCount = products.length;

    if(item.category === 'all'){
      return showAllPRoductsCount;
    }
    return sortedProductsCount;
  }

  const isActiveLink = (categoryItem) => {
    return filter === categoryItem.category ? 'active-link' : null
  }

  const handleChangeCategory = (categoryItem) => {
    setSortedBy('') //set sorted by to default value
    filterProducts(products, categoryItem.category)
  }

  return (
    <CategoriesWrapper>
      <CategoriesTitle>Categories</CategoriesTitle>
      <ul>
        {CATEGORIES.map((item) => {
          return (
            <CategoriesItem 
              key={item.name} 
              category={item}
              onCategorySelect={() => handleChangeCategory(item)}
              isActiveLink={isActiveLink(item)}
              count={findProductsCategoryCount(item)}
            />
          )
        })}
      </ul>
    </CategoriesWrapper>
  )
};

const mapStateToProps = state => ({
  products: state.productList.products,
  filteredProducts: state.productList.filteredProducts,
  filter: state.productList.filter
})

export default connect(
  mapStateToProps, {filterProducts, sortProductsByString, setSortedBy})
(Categories);