import React from 'react'
import styled from 'styled-components'

const LogoDiv = styled.div`
display: flex;
& span {
    color: #106eea;
}
`;

const StyledLogo = styled.h1`
text-decoration: none;
font-size: 2rem;
margin-left: 4rem;
line-height: 1;
font-weight: 600;
letter-spacing: 0.8px;
font-family: "Poppins", sans-serif;
`

const Logo = () => {
    return (
        <LogoDiv>
            <StyledLogo><span>N</span>ever <span>E</span>nding <span>S</span>urvival</StyledLogo>
        </LogoDiv>

    )
}

export default Logo
