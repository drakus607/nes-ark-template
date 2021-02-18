import React from 'react'
import styled from 'styled-components'
import ServerStatDiv from './ServersDivs/ServerStatDiv'
import TitleDiv from './ServersDivs/TitleDiv'

const ServersDiv = styled.section`
padding: 60px 0;
overflow: hidden;
font-family: "Open Sans", sans-serif;
color: #444444;
line-height: 1.5;

& div {
    
    margin-right: auto;
    margin-left: auto;
}
`


const Servers = () => {
    return (
        <ServersDiv>
            <div>
            <TitleDiv/>
            <ServerStatDiv/>
            </div>
        </ServersDiv>
    )
}

export default Servers
