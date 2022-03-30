import React, {useState} from 'react'
import Select from "react-select"
import {ArrowSvg} from "../svg-selector"

import { connect } from 'react-redux'
import { sortProductsByString, setSortedBy } from '../../redux/actions/sort-products'

import { 
  COLOR_OPTION,
  SORT_OPTIONS,
  SIZE_OPTION, 
  STYLE_OPTION} from './mock'

import {
  FiltersWrapper,
  Results,
  FiltersBody,
  FilterItem,
  PriceFilter
} from "./styles"


const Filters = ({
  productResults = 0, 
  filteredProducts, 
  sortProductsByString,
  setSortedBy,
  sortedBy}) => {

  const [size, setSize] = useState('')
  const [style, setStyle] = useState('size')
  const [color, setColor] = useState('')

  const findSortedBy = (sortState, options) => {
    return sortState ? options.find(o => o.value === sortState) : ''
  }

  const onSortedChange = ({value}) => {
    setSortedBy(value)
  
    
    sortProductsByString(filteredProducts, value)
  }

  const onColorChange = (newValue) => {
    setColor(newValue)
  }

  return (
    <FiltersWrapper>
      <Results>{productResults} results</Results>
      <FiltersBody>

        <FilterItem>
          <Select 
            placeholder='Sort By'
            classNamePrefix='custom-select'
            isSearchable={false}
            onChange={onSortedChange}
            value={findSortedBy(sortedBy, SORT_OPTIONS)}
            options={SORT_OPTIONS}
          />
        </FilterItem>

        <PriceFilter>
          <p>Price: $0 - 150$ </p>
          <ArrowSvg/>
        </PriceFilter>

        <FilterItem>
          <Select 
            placeholder='Size'
            classNamePrefix='custom-select'
            isSearchable={false}
            onChange={onColorChange}
            value={findSortedBy(size, SIZE_OPTION)}
            options={SIZE_OPTION}
          />
        </FilterItem>

        <FilterItem>
          <Select 
            placeholder='Style'
            classNamePrefix='custom-select'
            isSearchable={false}
            onChange={onSortedChange}
            value={findSortedBy(style, STYLE_OPTION)}
            options={STYLE_OPTION}   
          />
        </FilterItem>

        <FilterItem>
          <Select 
            placeholder='Color'
            classNamePrefix='custom-select'
            isSearchable={false}
            onChange={onColorChange}
            value={findSortedBy(color, COLOR_OPTION)}
            options={COLOR_OPTION}
          />
        </FilterItem>

      </FiltersBody>
    </FiltersWrapper>
  )
}

const mapStateToProps = props => ({
  filteredProducts: props.productList.filteredProducts,
  sortedBy: props.sortProducts.sortedBy
})

export default connect(
  mapStateToProps,
  {sortProductsByString, setSortedBy}
)(Filters);