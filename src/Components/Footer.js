import React from 'react'
import styled from 'styled-components'
import DiscordFrame from './FooterComponents/DiscordFrame'
import TitleDiv from './ServersDivs/TitleDiv'

const StyledFooter = styled.section`
display: flex;
flex-direction: column;
background: #fff;
#Contacts {
    display: flex;
    justify-content: center;
}
`

const Footer = () => {
    return (
        <StyledFooter>
            <TitleDiv title="Discord" subtitle="Jeśli masz do nas pytania skieruj je na discord lub przez formularz poniżej."/>
            <div id="Contacts">
            <DiscordFrame/>
            </div>
        </StyledFooter>
        
    )
}

export default Footer
