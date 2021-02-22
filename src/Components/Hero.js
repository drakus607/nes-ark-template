import React from 'react'
import styled from 'styled-components'
import MoreInfo from './HeroItems/MoreInfo'

const BgDiv = styled.div`
background:  linear-gradient(
    rgba(255, 255, 255, 0.6), 
    rgba(255, 255, 255, 0.6)
  ), url('./images/bgimage.jpg');
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const StyledHero = styled.section`
display: flex;
min-height: 65vh;
`

const Hero = () => {
    return (
        <BgDiv>
        <StyledHero id="home" name="home">            
            <MoreInfo/>
        </StyledHero>
        </BgDiv>
    )
}

export default Hero
