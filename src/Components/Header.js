import React from 'react'
import styled from 'styled-components';
import Logo from './Navbar/Logo'
import NavItems from './Navbar/NavItems';

const NavContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 4.5rem;
padding: 0 5% 0 0;
position: fixed;
width: 100%;
background: white;
`


const Header = () => {
    return (
        <NavContainer>
            <Logo/>
            <NavItems/>
        </NavContainer>
    )
}

export default Header
