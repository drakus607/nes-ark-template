import React from 'react'
import styled from 'styled-components'
import {CloseMobileHandler} from './Burger'
import {IoClose} from 'react-icons/io5'
import {Link} from 'react-scroll'

const StyledMobileMenu = styled.div`
&.mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
}

&.hidden {
    display: none;
}

&.visible {
    position: fixed;
    background: white;
    z-index: 999;
    animation: SlideIn 0.5s forwards;
}
& ul{
    display: flex;
    flex-direction: column;
    list-style-type: none;    
    text-align: center;
    margin-bottom: 0;
    margin-top: 0.5rem;
}
& li {
    display: block;
    margin: 1rem;
}
& li a {
    color: #444444;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
}
& #close_mobile svg{
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 2%;
    top: 3%;
    cursor: pointer;
}
@keyframes SlideIn {
    0% {
      opacity: 0;
      top: -100%;
    }
    100% {
      opacity: 1;
      top: 0%;
    }
`


const MobileMenu = () => {
    return (
        <StyledMobileMenu id="mobile_menu" className="mobile hidden">
        <ul className="mobile_navlinks">
          <li><Link onClick={CloseMobileHandler} to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link onClick={CloseMobileHandler} to="servers" smooth={true} duration={500}>Serwery</Link></li>
          <li><Link onClick={CloseMobileHandler} to="commands" smooth={true} duration={500}>Komendy</Link></li>
          <li><Link onClick={CloseMobileHandler} to="rules" smooth={true} duration={500}>Zasady</Link></li>
          <li><Link onClick={CloseMobileHandler} to="donate" smooth={true} duration={500}>Donate</Link></li>
          <li><Link onClick={CloseMobileHandler} to="footer" smooth={true} duration={500}>Discord</Link></li>
        </ul>
        <div id="close_mobile" onClick={CloseMobileHandler}><IoClose /></div>
        </StyledMobileMenu>
    )
}

export default MobileMenu
