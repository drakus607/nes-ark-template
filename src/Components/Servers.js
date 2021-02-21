import React from 'react'
import styled from 'styled-components'
import ServerStatDiv from './ServersDivs/ServerStatDiv'
import TitleDiv from './ServersDivs/TitleDiv'

const ServersSection = styled.section`
padding: 60px 0;
overflow: hidden;
font-family: "Open Sans", sans-serif;
color: #444444;
line-height: 1.5;
background: linear-gradient(
    rgba(0, 100, 100, 0.1111), 
    rgba(0, 0, 0, 0.1));
& #s1 {
    padding: 10px;
    text-align: center;
    border-radius: 25px; 
& div {
    margin-right: auto;
    margin-left: auto;
    
}
`


const Servers = () => {
    return (
        <ServersSection id="servers">
            <div>
            <TitleDiv/>
            <ServerStatDiv/>
            </div>
        </ServersSection>
    )
}

export default Servers
