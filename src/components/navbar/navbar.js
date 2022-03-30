import React, {useState} from 'react';

import SvgSelector from '../svg-selector/svg-selector';
import WithBgButton  from '../with-bg-button';
import {SalePopup, GiftsPopup} from '../modals';

import RenderLink from './render-link';
import * as Styled from "./styles"

const Navbar = () => {
  const [modal, setModal] = useState('')
  const [activeLink, setActiveLink] = useState(-1)

  return (
    <>
      <Styled.Menu>
        <Styled.MenuWrapper>
          <Styled.Logo src='logo.svg' alt='logo' />

          <Styled.MenuNavigate>
            <RenderLink 
              activeLink={activeLink} 
              setActiveLink={setActiveLink} 
              setModal={setModal}
            />
          </Styled.MenuNavigate> 

          <Styled.MenuActions>
            <SvgSelector />
          </Styled.MenuActions>

          <WithBgButton text="Login"/>
        </Styled.MenuWrapper> 
      </Styled.Menu>
      {/* modal windows */}
      <RenderModal setActiveLink={setActiveLink} modal={modal} setModal={setModal}/>
    </>
  );
};

const RenderModal = ({modal, setModal, setActiveLink}) => {

  const onModalChange = () => {
    setActiveLink(-1);
    setModal('')
  }

  switch(modal){
    case 'sale':
      return <SalePopup closeModal={() => onModalChange()}/>
    
    case 'gifts':
      return <GiftsPopup closeModal={() => onModalChange()}/>
    
    default: 
      return null
  }
}


export default Navbar;
