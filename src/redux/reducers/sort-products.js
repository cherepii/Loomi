import { 
  SORT_PRODUCTS_CHANGE, 
  FILTER_PRODUCTS_BY_GENDER } from "../actions/types";

const sortProducts = (state, action) => {
  //initial State
  if(state == undefined){
    return {
      sortedBy: ''
    }
  }

  switch(action.type){
    case SORT_PRODUCTS_CHANGE:
      return {
        sortedBy: action.payload
      }
    case FILTER_PRODUCTS_BY_GENDER:
      return {
        sortedBy: action.payload.sort
      }

    default: 
      return state
  }
}

export default sortProducts;