import React from 'react'
import styled from 'styled-components'

const StyledInfoBox = styled.div`
display: flex;
flex-direction: column;
    margin-left: 3rem;
    margin-top: 0;
    margin-right: 3rem; 
    padding: 1rem;
    font-size: 2rem;
    color: red;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
}
& h2 {
    margin: 0;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
}
& p {
    padding: 0 15px;
    text-shadow: none;
    font-size: 1rem;
    color: black;
    font-family: "Poppins", sans-serif;
}
`

const InfoBox = () => {
    return (
        <StyledInfoBox>
            <h2>Informacje o serwerze</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </StyledInfoBox>
    )
}

export default InfoBox
