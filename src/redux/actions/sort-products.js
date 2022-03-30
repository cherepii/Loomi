import {
  FILTER_PRODUCTS,
  FILTER_PRODUCTS_BY_GENDER,
  SORT_PRODUCTS,
  SORT_PRODUCTS_CHANGE
} from "./types"

export const filterProducts = (products, filter) => {
  return{
    type: FILTER_PRODUCTS,
    payload: {
      filter,
      products: filter === 'all' || '' ? products : products.filter(p => p.category === filter)
    }
  }
}

export const sortProductsByString = (products, sort) => {
  return {
    type: SORT_PRODUCTS,
    payload: {
      products: sort === '' ? products : [...products].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
  }
}

export const filterProductsByGender = (products, gender) => {
  return {
    type: FILTER_PRODUCTS_BY_GENDER,
    payload: {
      products: gender === '' ? products : products.filter(p => p.gender === gender),
      filter: '',
      sort: ''
    }
  }
}

export const setSortedBy = (sort) => {
  return {
    type: SORT_PRODUCTS_CHANGE,
    payload: sort
  }
}