import React from 'react'

import { CategoryCount, CategoryLink, Dot } from "../categories/styles"
import { ArrowSvg } from '../svg-selector/svg-selector';

export const CategoriesItem = ({
  category, 
  count = 0, 
  onCategorySelect, 
  isActiveLink }) => {

  return (
    <CategoryLink 
      className={isActiveLink} 
      onClick={onCategorySelect}>

      <p className=''>{category.name}</p>
      <Dot></Dot>
      <CategoryCount>{count}</CategoryCount>
      <ArrowSvg />
    </CategoryLink>
  )
}

export default CategoriesItem;
