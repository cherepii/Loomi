import { useDispatch, useSelector } from 'react-redux'

import {filterProducts, filterProductsByGender, setSortedBy} from '../../../../redux/actions/sort-products'

import CommonPopup from '../../../common/common-popup'
import SaleBanner from '../../../banners/sale-banner/SaleBanner'
import RenderCategoryItem from './RenderCategoryItem'

import { MODAL_CATEGORIES } from './mock'

import * as Styled from './styles'

const SaleModal = ({ closeModal }) => {
  const dispatch = useDispatch()
  const products = useSelector(({productList}) => productList.products)

  const handleChange = (sort) => {
    dispatch(filterProducts(products, sort))
    closeModal()
    dispatch(setSortedBy(''))
  }

  const onGenderChange = (gender) => {
    closeModal();

    dispatch(filterProductsByGender(products, gender))
  }

  return (
    <CommonPopup isPadding closeModal={closeModal}>
      <SaleBanner />

      <Styled.PopupBody>
        <Styled.FlexItem>
          <Styled.Title>Shop by sex</Styled.Title>
          <Styled.GenderBlock>
            <Styled.GenderItem onClick={() => onGenderChange('man')}>
              <img src='man.png' alt='man'/>
              <Styled.GenderInfo>for him</Styled.GenderInfo>
            </Styled.GenderItem>
            <Styled.GenderItem onClick={() => onGenderChange('woman')}>
              <img src='woman.png' alt='woman'/>
              <Styled.GenderInfo>for her</Styled.GenderInfo>
            </Styled.GenderItem>
          </Styled.GenderBlock>
        </Styled.FlexItem>
        <Styled.FlexItem>
          <Styled.Title>Categories</Styled.Title>
          <Styled.CategoriesBlock>
            <RenderCategoryItem handleChange={handleChange} categories={MODAL_CATEGORIES}/>
          </Styled.CategoriesBlock>
        </Styled.FlexItem>
      </Styled.PopupBody>
    </CommonPopup>
  )
}

export default SaleModal