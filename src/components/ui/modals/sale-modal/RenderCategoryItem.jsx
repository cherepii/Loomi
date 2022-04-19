import { CategoryItem, CategoryCover } from "./styles"

const RenderCategoryItem = ({categories, handleChange}) => {
  return (
    <>
      {categories.map(({name, cover, sort}) => {
        return (
          <CategoryItem onClick={() => handleChange(sort)} key={name}>
            <CategoryCover src={cover} alt='cover'/>
            {name}
          </CategoryItem>
        )
      })}
    </>
  )
}

export default RenderCategoryItem;