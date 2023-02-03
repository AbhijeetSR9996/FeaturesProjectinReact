import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  FReact
} from './NavbarElements';
import Modal from '../../pages/Modal';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <FReact />
          <NavLink to='/' style={{ textDecoration: 'none', color: '#000', fontSize: 20, paddingLeft: '15rem 10rem', marginRight: '10rem', marginLeft: '-5rem' }}>
            smass
          </NavLink>
          <NavLink to='/howitworks' activeStyle>
            How it works
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/pricing' activeStyle>
            Pricing
          </NavLink>
          <NavLink to='/reviews' activeStyle>
            Reviews
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Join the team</NavBtnLink>
        </NavBtn>
      </Nav>
      <Modal />
    </>
  );
};

export default Navbar;