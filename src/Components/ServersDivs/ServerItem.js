import React from 'react'
import styled from 'styled-components'
import ConnectButton from './ConnectButton'
import RatesDiv from './RatesDiv'

const StyledItem = styled.div`
margin-top: 2rem;
margin-left: 1rem;
margin-right: 1rem;
padding: 1rem;
background: #fff;
border: 1px solid #e2eefd;
font-family: "Poppins",sans-serif;
text-align: center;
overflow: hidden;
& h2 {
    padding: 1.5rem;
    text-shadow: 2px 2px white;
    border-radius: 25px;
    box-sizing: border-box;
    box-shadow: inset 20px 20px 30px #f6f9fe, inset -20px -20px 30px #FFFFFF, blur(8px);
}
& #btn_1:hover, #btn_1:active{
    color:white;
    background: #0092b3;
}
& .badge {
    position: absolute;
    top: -20px;
    right: 0px;
    margin: 0;
    font-size: 1rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotate(45deg) translate(4.2rem, -1rem);
    transform-origin: center;
    width: 11rem;
    text-align: center;
}
& .nonpvp {
    background: green;
}
@media(min-width: 760px){
    margin-top: 0;
}
`

const ServerItem = (props) => {
    return (
        <StyledItem data-aos-anchor="#home" id={props.id} data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600">            
            <h2>{props.title}</h2>
            <h3 className={props.badge}>{props.pvp}</h3>
            <RatesDiv/>
            <ConnectButton btnId="btn_1" text="Połącz" url={props.url} />          
        </StyledItem>
        
    )
}

export default ServerItem
