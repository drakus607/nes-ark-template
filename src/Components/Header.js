import React from 'react'
import styled from 'styled-components';
import Logo from './Navbar/Logo'
import NavItems from './Navbar/NavItems';
import Burger from './Navbar/Burger'

const NavContainer = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 4.5rem;
padding: 0 2% 0 0;
position: fixed;
width: 100%;
background: white;
z-index: 997;
box-shadow: 0 4px 4px -4px rgb(0 0 0 / 20%);
@media(min-width: 520px){
    align-items: flex-start;
}
@media(min-width: 960px){
    #mobile_nav {
        display: none;
    }
}
`
const Header = () => {
    return (
        <NavContainer>
            <Logo/>
            {(window.innerWidth >= 960) ? <NavItems/> : null}
            <Burger />
        </NavContainer>
    )
}

export default Header
