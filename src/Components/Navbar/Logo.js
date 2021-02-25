import React from 'react'
import styled from 'styled-components'

const LogoDiv = styled.div`
display: flex;
& span {
    color: #106eea;
}
`;

const StyledLogo = styled.h1`
padding: 0;
text-decoration: none;
font-size: 1.2rem;
margin-left: 2rem;
line-height: 1;
font-weight: 600;
cursor: grab;
letter-spacing: 0.8px;
font-family: "Poppins", sans-serif;
@media(min-width: 420px){
    font-size: 1.5rem;
}
@media(min-width: 530px){
    font-size: 2rem;
    margin-left: 3rem;
}
@media(min-width: 1100px){
    padding-right: 2rem;
}
`

const Logo = () => {
    return (
        <LogoDiv>
            <StyledLogo><span>N</span>ever <span>E</span>nding <span>S</span>urvival</StyledLogo>
        </LogoDiv>

    )
}

export default Logo
