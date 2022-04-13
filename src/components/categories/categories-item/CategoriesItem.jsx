import { CategoryCount, CategoryLink, Dot } from "../styles"
import { ArrowSvg } from '../../common/svg-selector/SvgSelector';

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
