import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background: #106eea;
font-size: 2rem;
color: #ccc;
border: 0;
border-radius: 15px;
box-shadow: 2px 2px #ccc;
cursor: pointer;
font-family: "Poppins", sans-serif;
padding: 0 15px;
}
`



const ConnectButton = (props) => {
    const connectServerHandler = (url) => {
        window.location.href = url;
        //href=`steam://rungameid/346110//connect//51.38.145.171:7777`  ${ip}:${port}
        // onClick -> podstaw IP:PORT i wykonaj hrefa steam://rungameid/346110//connect//IP_SERWERA:PORT
    }
    return (
        <StyledButton id={props.btnId} onClick={() => {connectServerHandler(props.url)}}> {props.text} </StyledButton>
    )
}

export default ConnectButton
