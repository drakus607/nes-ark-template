import React from 'react'
import styled from 'styled-components'
import ServerItem from './ServerItem'

const StyledServers = styled.div`
display: flex;
margin: 1rem 5rem;
justify-content: center;
}
`

const ServerStatDiv = () => {
    return (
        <StyledServers>
            <ServerItem id="s1"
            title="Never Ending Survival Core"
            url="steam://rungameid/346110//connect//51.38.145.171:7777"
            pvp="PVP" badge="badge"/>
            <ServerItem id="s2"
            title="Never Ending Survival Sub"
            url="https://google.pl/"
            pvp="NON-PVP" badge="badge nonpvp" />
        </StyledServers>
    )
}

export default ServerStatDiv
