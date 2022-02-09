import React from 'react';
import { Link } from 'react-router-dom';
import SvgSelector from '../svg-selector/svg-selector';
import WithBgButton  from '../with-bg-button';

import "./menu.scss"
import {MENU_LINKS} from "./mock"

const MapLinks = () => {
  return (
    <ul className='menu__block'>
      {MENU_LINKS.map((item) => {
        return (
          <li key={item.text} className="menu__link">
            <Link to={`${item.to}`} href="#">{item.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

const Menu = () => {
  return (
    <nav className='menu-wrapper'>
      <img src='logo.svg' alt='logo' className='logo'/>

      <div className='menu__navigate'>
        <MapLinks />
      </div> 

      <div className='menu__actions'>
        <SvgSelector />
      </div>

      <WithBgButton text="Login" isBg={true}/>

    </nav> 
  );
};


export default Menu;
