import React from 'react'
import styled from 'styled-components'
import ServerStatDiv from './ServersDivs/ServerStatDiv'
import TitleDiv from './ServersDivs/TitleDiv'

const ServersSection = styled.section`
padding: 60px 0;
overflow: hidden;
font-family: "Poppins", sans-serif;
color: #444444;
line-height: 1.5;
background: #f6f9fe;
& #s2:hover {    
    box-shadow: 0px 0 25px 0 rgb(16 110 234 / 10%);
    border-color: #fff;
    & h2 {
        color: #106eea;
    }
}
& #s1:hover {    
    box-shadow: 0px 0 25px 0 rgb(16 110 234 / 10%);
    border-color: #fff;
    & h2 {
        color: #106eea;
    }
}
`


const Servers = () => {
    return (
        <ServersSection id="servers" name="servers">
            <div>
            <TitleDiv title="Dostępne Serwery" subtitle="Poniżej znajdziesz serwery oraz ich statusy"/>
            <ServerStatDiv/>
            </div>
        </ServersSection>
    )
}

export default Servers
