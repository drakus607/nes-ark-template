import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.section`
display: flex;
height: 75vh;
background: url('./images/bgimage.jpg');
background-size: cover;

& div {
    background: rgba(255, 255, 255, 0.3);
    width: 100%;
}
`

const Hero = () => {
    return (
        <StyledHero>
            <div>
            <h1>Welcome to <span>BizLand</span></h1>
                <div>
                 <a href="#about">Get Started</a>
                 <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q"> Watch Video <i></i></a>
                </div>
            </div>
        </StyledHero>
    )
}

export default Hero
