import {MENU_LINKS} from "./mock"
import { MenuLink, MenuBlock } from "./styles"

const RenderLink = ({setModal, activeLink, setActiveLink}) => {

  const onLinkChange = (item, idx) => {
    setModal(item.to)
    setActiveLink(idx)
  }

  const checkActiveClass = (idx) => {
    return activeLink === idx ? 'active' : ' '
  }

  return (
    <MenuBlock>
      {MENU_LINKS.map((item, index) => {
        return (
          <MenuLink
            className={checkActiveClass(index)}
            key={item.text} 
            onPointerEnter={() => onLinkChange(item, index)}>
              
            <a href="#">{item.text}</a>
          </MenuLink> 
        )
      })}
    </MenuBlock>
  )
}

export default RenderLink;