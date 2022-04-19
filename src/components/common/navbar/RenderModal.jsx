import {SaleModal, GiftsModal, ShoesModal} from '../../ui/modals';

const RenderModal = ({modal, setModal}) => {

  const onModalChange = () => {
    setModal('')
  }

  switch(modal){
    case 'sale':
      return <SaleModal closeModal={() => onModalChange()}/>
    
    case 'gifts':
      return <GiftsModal closeModal={() => onModalChange()}/>

    case 'shoes':
      return <ShoesModal closeModal={() => onModalChange()}/>
    
    default: 
      return null
  }
}

export default RenderModal