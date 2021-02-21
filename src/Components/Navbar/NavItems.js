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
    margin-left: 1.5rem;
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
          <li><a href="./#home">Home</a></li>
          <li><a href="./#servers">Serwery</a></li>
          <li><a href="./#rules">Zasady</a></li>
          <li><a href="./#commands">Komendy</a></li>
          <li><a href="./#donate">Donate</a></li>
          <li><a href="./#footer">Discord</a></li>
        </ul>
        </StyledNavItems>
    )
}

export default NavItems
