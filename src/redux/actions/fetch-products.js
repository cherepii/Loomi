import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST
} from "./types"

const productsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

const productsLoaded = (newProducts) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: newProducts
  }
}

export const productsFetchError = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = (lapiService) => () => (dispatch) => {
  dispatch(productsRequest());
  lapiService.getProducts()
    .then(data => dispatch(productsLoaded(data)))
    .catch(err => dispatch(productsFetchError(err)))

}
