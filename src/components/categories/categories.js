import React, {useState} from 'react';
import { ArrowSvg } from '../svg-selector/svg-selector';
import {CategoriesWrapper, CategoryCount, CategoriesTitle, CategoryLink, Dot} from "./styles"

const Categories = ({categories}) => {
  const [activeLink, setActiveLink] = useState(0); 

  const handleActiveLink = (index) => {
    return activeLink === index ? 'active-link' : null
  }

  return (
    <CategoriesWrapper>
      <CategoriesTitle>Categories</CategoriesTitle>
      <ul>
        {categories.map(({name, count}, index) => {
          return (
            <CategoryLink className={handleActiveLink(index)} key={name} onClick={() => setActiveLink(index)}>
              <p className=''>{name}</p>
              <Dot></Dot>
              <CategoryCount>{count}</CategoryCount>
              <ArrowSvg />
            </CategoryLink>
          )
        })}
      </ul>
      
    </CategoriesWrapper>
  )
};

export default Categories;
