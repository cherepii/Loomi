import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS_BY_GENDER
} from "../actions/types"

const productList = (state, action) => {
  //initial State
  if(state == undefined){
    return {
      products: [],
      filteredProducts: [],
      filter: 'all',
      loading: true,
      error: null
    }
  }

  switch(action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        products: [],
        filteredProducts: []
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
        filteredProducts: action.payload
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
        filteredProducts: []
      }

    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload.products, 
        filter: action.payload.filter
      }

    case FILTER_PRODUCTS_BY_GENDER:
      return {
        ...state,
        filteredProducts: action.payload.products,
        filter: action.payload.filter
      }

    case SORT_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload.products
      }

    default: 
      return state
  }
}

export default productList;