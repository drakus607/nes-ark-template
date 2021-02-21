import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.button` 
position: absolute;
  top: 30%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.2rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
@media(min-width: 420px){
  top: 25%;
  right: 10%;
  width: 1.5rem;
  height: 2rem;
}  
@media(min-width: 530px){
  width: 2rem;
  height: 2rem;
}
`


export const OpenMobileHandler = () => {
  const menu = document.getElementById('mobile_menu');
  const backdrop = document.querySelector('.backdrop');
  menu.classList.toggle('hidden');
  menu.classList.toggle('visible');
  backdrop.classList.toggle('open');
}
export const CloseMobileHandler = () => {
  const menu = document.getElementById('mobile_menu');
  const backdrop = document.querySelector('.backdrop');
  menu.classList.remove('visible');
  menu.classList.add('hidden');
  backdrop.classList.remove('open');

}

const Burger = () => {
    return (
        <StyledBurger id="mobile_nav" onClick={OpenMobileHandler}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger
