import {useState} from 'react';

import { SvgSelector } from '../../common/svg-selector';
import Button from '../../ui/button';
import RenderModal from "./RenderModal"

import RenderLink from './RenderLink';
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

          <Button text="Login"/>
        </Styled.MenuWrapper> 
      </Styled.Menu>
      {/* modal windows */}
      <RenderModal setActiveLink={setActiveLink} modal={modal} setModal={setModal}/>
    </>
  );
};


export default Navbar;
