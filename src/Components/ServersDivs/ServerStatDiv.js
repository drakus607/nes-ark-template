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
            <ServerItem id="s1" title="Never Ending Survival Core" ip="url" pvp="PVP" badge="badge"/>
            <ServerItem id="s2" title="Never Ending Survival Sub" ip="url2" pvp="NON-PVP" badge="badge nonpvp" />
        </StyledServers>
    )
}

export default ServerStatDiv
