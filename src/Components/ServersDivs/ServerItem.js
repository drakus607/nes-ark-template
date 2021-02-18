import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
display: flex;
margin-left: 1rem;

`

const ServerItem = () => {
    return (
        <StyledItem>
            <h3>Testowy Serwer</h3>
            <p> Coś coś o testowym serwerze</p>
        </StyledItem>
    )
}

export default ServerItem
