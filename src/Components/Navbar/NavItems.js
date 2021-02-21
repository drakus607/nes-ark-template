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
          <li>Home</li>
          <li>Serwery</li>
          <li>Zasady</li>
          <li>Contact</li>
          <li>Donate</li>
          <li>Discord</li>
        </ul>
        </StyledNavItems>
    )
}

export default NavItems
