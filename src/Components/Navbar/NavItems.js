import React from 'react'
import styled from 'styled-components';

const StyledNavItems = styled.div`
display: flex;
flex-direction: row;
margin-right: 0.5rem;
& #links {
   display: flex;
   justify-content: space-between;
   margin-right: 3rem;
}

& li {
    list-style-type: none;
    margin-left: 2rem;
    text-decoration: none;
    color: #222222;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0 0.2rem;
    font-family: "Open Sans", sans-serif;
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
          <li>Strona Główna</li>
          <li>Serwery</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        </StyledNavItems>
    )
}

export default NavItems
