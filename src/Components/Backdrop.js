import React from 'react'
import styled from 'styled-components'
import {CloseMobileHandler} from './Navbar/Burger'

const StyleBackdrop = styled.div`{
display: none;
position: fixed;
opacity: 0;
transition: opacity 0.2s linear;
top: 0;
left: 0;
z-index: 998;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.5);

&.open {
    display: block;
    opacity: 1;
    transform: translate(0,0);
}
`

const Backdrop = () => {
    return (
        <StyleBackdrop className="backdrop" onClick={CloseMobileHandler}>

        </StyleBackdrop>
    )
}

export default Backdrop
