import React from 'react'
import styled from 'styled-components'
import DiscordFrame from './FooterComponents/DiscordFrame'
import TitleDiv from './ServersDivs/TitleDiv'

const StyledFooter = styled.section`
display: flex;
flex-direction: column;
background: #fff;
width: 100%;
`

const Footer = () => {
    return (
        <StyledFooter id="footer">
            <TitleDiv title="Discord" subtitle="Jeśli masz do nas pytania skieruj je na discord lub przez formularz poniżej."/>
            <DiscordFrame/>
        </StyledFooter>
        
    )
}

export default Footer
