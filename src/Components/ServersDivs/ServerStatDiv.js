import React from 'react'
import styled from 'styled-components'
import ServerItem from './ServerItem'

const StyledServers = styled.div`
display: flex;
height: 60vh;
margin: 1rem 5rem;
justify-content: center;
`

const ServerStatDiv = () => {
    return (
        <StyledServers>
            <ServerItem id="s1"/>
        </StyledServers>
    )
}

export default ServerStatDiv
