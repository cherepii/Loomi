import React from "react";
import "./svg-selector.scss"

const SvgSelector = () => {
  return (
    <>
    <svg className="menu_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#222326" strokeMiterlimit="10" strokeLinecap="square"/>
      <path d="M17.5 17.5L13.875 13.875" stroke="#222326" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>

    <svg width="20" height="20" className="menu_svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3671 3.84123C16.9415 3.41541 16.4361 3.07761 15.8799 2.84714C15.3237 2.61667 14.7275 2.49805 14.1254 2.49805C13.5234 2.49805 12.9272 2.61667 12.371 2.84714C11.8147 3.07761 11.3094 3.41541 10.8838 3.84123L10.0004 4.72457L9.11709 3.84123C8.25735 2.98149 7.09129 2.49849 5.87542 2.49849C4.65956 2.49849 3.4935 2.98149 2.63376 3.84123C1.77401 4.70098 1.29102 5.86704 1.29102 7.0829C1.29102 8.29876 1.77401 9.46482 2.63376 10.3246L3.51709 11.2079L10.0004 17.6912L16.4838 11.2079L17.3671 10.3246C17.7929 9.89894 18.1307 9.39358 18.3612 8.83736C18.5917 8.28115 18.7103 7.68497 18.7103 7.0829C18.7103 6.48083 18.5917 5.88465 18.3612 5.32844C18.1307 4.77222 17.7929 4.26686 17.3671 3.84123V3.84123Z" stroke="#222326" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>

    <svg className="menu_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3337 19.1663H1.66699L3.33366 5.83301H16.667L18.3337 19.1663Z" stroke="#222326" strokeMiterlimit="10" strokeLinecap="square"/>
      <path d="M6.66699 8.33301V4.16634C6.66699 2.33301 8.16699 0.833008 10.0003 0.833008C11.8337 0.833008 13.3337 2.33301 13.3337 4.16634V8.33301" stroke="#222326" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>

    </>
  )
}

export const ArrowSvg = () => {
  return (
    <>
      <svg className="arrow" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 11L5.5 6L0.5 1" stroke="white" strokeLinecap="round"/>
      </svg>
    </>
  )
}

export default SvgSelector;