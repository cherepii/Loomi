import {Popup, PopupBody} from "./styles"

const CoommonPopup = ({children,  closeModal, isPadding=false}) => {
    return (
      <Popup onClick={closeModal}>
        <PopupBody isPadding={isPadding} onClick={e => e.stopPropagation()}>
          {children}
        </PopupBody>
      </Popup>
    )
}

export default CoommonPopup;