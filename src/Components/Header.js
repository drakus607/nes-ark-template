import React from 'react'
import styled from 'styled-components';
import Logo from './Navbar/Logo'
import NavItems from './Navbar/NavItems';

//Style to header
const NavContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 5rem;
padding: 0 5% 0 0;
`


const Header = () => {
    return (
        <NavContainer>
            <Logo/>
            <NavItems/>
            {//miejsce na 2 divy
}
        </NavContainer>
    )
}

export default Header
