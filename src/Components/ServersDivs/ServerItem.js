import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
color: red;
`

const ServerItem = () => {
    return (
        <StyledItem id="s1">            
            <h2>NES ARK ROOT</h2>
            <p> Coś coś o testowym serwerze</p>            
        </StyledItem>
        
    )
}

export default ServerItem
