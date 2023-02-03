import { FaBars,FaReact,FaArrowLeft,FaArrowRight } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  //background: #63D471;
  borderRadius:10;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  &.active {
    //color: #000000;
    color: red;
    text-decoration: underline;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #000000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    &.active {
      color: red;
    }
  }
`;

export const FReact = styled(FaReact)`
  color: red;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    //top: 0;
    right: 10;
    transform: translate(-100%, 75%);
    font-size: 2.8rem;
    cursor: pointer;
  }
`;

export const FaLeft = styled(FaArrowLeft)`
  color: grey;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    //top: 0;
    //right: 50;
    transform: translate(-100%, 75%);
    font-size: 2.8rem;
    cursor: pointer;
  }
`;

export const FaRight = styled(FaArrowRight)`
  color: grey;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    //top: 0;
    //left: 20;
    transform: translate(-100%, 75%);
    font-size: 2.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  background: red;
  padding: 10px 22px;
  color: #000000;
  //outline: none;
  //outline-width:2px;
  //outline-color:black;
  //border: none;
  borderWidth: "6";
  border-color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f1f1f1;
    color: red;
  }
`;