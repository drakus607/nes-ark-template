import React from 'react'
import styled from 'styled-components'
import DiscordFrame from './FooterComponents/DiscordFrame'
import TitleDiv from './ServersDivs/TitleDiv'

const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
background: #fff;
width: 100%;
& p {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 0.6rem;
    margin: 0;
}
& span{
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.1px;
}
& p:first-of-type{
    margin-top: 0.5rem;
}
`

const Footer = () => {
    return (
        <StyledFooter id="footer" name="footer">
            <TitleDiv title="Discord" subtitle="Jeśli masz do nas pytania skieruj je na discord lub przez formularz poniżej."/>
            <DiscordFrame/>
            <p>Projekt i wykonanie: <span>  NES-ARK Team</span></p>
            <p>Wszelkie prawa zastrzeżone.</p>
        </StyledFooter>
        
    )
}

export default Footer
