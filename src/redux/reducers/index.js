import { combineReducers } from "redux";
import productList from "./product-list"
import sortProducts from "./sort-products";

const rootReducer = combineReducers({
  productList,
  sortProducts
})

export default rootReducer;