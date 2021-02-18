import React from 'react'
import styled from 'styled-components';

const StyledNavItems = styled.div`
display: flex;
flex-direction: row;
margin-right: 0.5rem;
& #links {
   display: flex;
   justify-content: space-between;
}

& li {
    list-style-type: none;
    margin-left: 2rem;
}
& li a {
    text-decoration: none;
    color: #222222;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0 0.2rem;
    font-family: "Open Sans", sans-serif;
}
`

const NavItems = () => {
    return (
        <StyledNavItems>
        <ul id="links">
          <li className="active"><a href="index.html">Strona Główna</a></li>
          <li><a href="#about">Sklep VIP</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </StyledNavItems>
    )
}

export default NavItems
