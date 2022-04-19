import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, setSortedBy } from '../../redux/actions/sort-products';

import CategoriesItem from './categories-item';
import {CategoriesTitle, CategoriesWrapper} from "./styles"
import { CATEGORIES } from '../../constants/static';
                      // get data from redux store
const Categories = () => {
  const dispatch = useDispatch()
  const products = useSelector(({productList}) => productList.products)
  const filter = useSelector(({productList}) => productList.filter)
  
  const findProductsCategoryCount = (item) => {
    const sortedProductsCount = products.filter(p => item.category === p.category).length;

    const showAllProductsCount = products.length;

    if(item.category === 'all'){
      return showAllProductsCount;
    }
    return sortedProductsCount;
  }

  const isActiveLink = (categoryItem) => {
    return filter === categoryItem.category ? 'active-link' : null
  }

  const handleChangeCategory = (categoryItem) => {
    dispatch(setSortedBy('')) //set sorted by to default value
    dispatch(filterProducts(products, categoryItem.category))
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
export default Categories