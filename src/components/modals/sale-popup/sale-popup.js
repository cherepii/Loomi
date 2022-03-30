import React from 'react'

import { connect } from 'react-redux'
import {filterProducts, filterProductsByGender, setSortedBy} from '../../../redux/actions/sort-products'

import CoommonPopup from '../../common-popup'
import { MODAL_CATEGORIES } from './mock'
import RenderCategoryItem from './category-item'

import {
  PopupHeader,
  HeaderTitle,
  Title,
  HeaderSubtitle,
  PopupTextBlock,
  PopupBody,
  FlexItem,
  GenderBlock,
  GenderItem,
  GenderInfo,
  CategoriesBlock,
} from './styles'

const SalePopup = ({
  closeModal, 
  products, 
  filterProducts,
  filterProductsByGender,
  setSortedBy}) => {

  const handleChange = (sort) => {
    filterProducts(products, sort)
    closeModal()
    setSortedBy('')
  }

  const onGenderChange = (gender) => {
    closeModal();

    filterProductsByGender(products, gender)
    console.log(gender)
  }

  return (
    <CoommonPopup isPadding closeModal={closeModal}>
      <PopupHeader>
        <PopupTextBlock>
          <HeaderTitle>Get up to <span>20%</span> discount </HeaderTitle>
          <HeaderSubtitle>Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs.</HeaderSubtitle>
        </PopupTextBlock>
      </PopupHeader>
      <PopupBody>
        <FlexItem>
          <Title>Shop by sex</Title>
          <GenderBlock>
            <GenderItem onClick={() => onGenderChange('man')}>
              <img src='man.png' alt='man'/>
              <GenderInfo>for him</GenderInfo>
            </GenderItem>
            <GenderItem onClick={() => onGenderChange('woman')}>
              <img src='woman.png' alt='woman'/>
              <GenderInfo>for her</GenderInfo>
            </GenderItem>
          </GenderBlock>
        </FlexItem>
        <FlexItem>
          <Title>Categories</Title>
          <CategoriesBlock>
            <RenderCategoryItem handleChange={handleChange} categories={MODAL_CATEGORIES}/>
          </CategoriesBlock>
        </FlexItem>
      </PopupBody>
    </CoommonPopup>
  )
}

const mapStateToProps = ({productList: {products}}) => {
  return { products }
}

export default connect(
  mapStateToProps, {filterProducts, setSortedBy, filterProductsByGender}
)(SalePopup);