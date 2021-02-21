import React from 'react'
import styled from 'styled-components'
import {CloseMobileHandler} from './Burger'

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
}
& ul{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: auto auto;    
    text-align: center;
}
& li {
    margin: 1rem;
}
& a {
    color: #444444;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 700;
}
`


const MobileMenu = () => {
    return (
        <StyledMobileMenu id="mobile_menu" className="mobile hidden">
        <ul className="mobile_navlinks">
          <li><a onClick={CloseMobileHandler} href="./#home">Home</a></li>
          <li><a onClick={CloseMobileHandler} href="./#servers">Serwery</a></li>
          <li><a onClick={CloseMobileHandler} href="./#rules">Zasady</a></li>
          <li><a onClick={CloseMobileHandler} href="./#commands">Komendy</a></li>
          <li><a onClick={CloseMobileHandler} href="./#donate">Donate</a></li>
          <li><a onClick={CloseMobileHandler} href="./#footer">Discord</a></li>
        </ul>
        </StyledMobileMenu>
    )
}

export default MobileMenu
