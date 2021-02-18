import React from 'react'
import styled from 'styled-components'
import ServerItem from './ServerItem'

const StyledServers = styled.div`
display: flex;
height: 60vh;
margin: 1rem 5rem;
justify-self: center;
align-self: center;
`


const ServerStatDiv = () => {
    return (
        <StyledServers>
            <ServerItem/>
            <ServerItem/>
            <ServerItem/>
        </StyledServers>
    )
}

export default ServerStatDiv
