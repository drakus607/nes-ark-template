import React from 'react'
import styled from 'styled-components'
import InfoBox from './InfoBox'

const MoreInfoDiv = styled.div`
display: flex;
flex-direction: column;
}
&  h1 {
    text-shadow: 2px 1px #eee;
    align-self: flex-start;
    margin-top: 9rem;
    margin-left: 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #222222;
    font-family: "Poppins", sans-serif;
    & span {
        color: #106eea;
        line-height: 1;
        font-weight: 600;
        letter-spacing: 0.8px;}
@media(min-width: 515px){
h1{
    font-size: 2rem;
}}
@media(min-width: 730px){
h1 {
    font-size: 3rem;
}}
 
`


const MoreInfo = () => {
    return (
        <MoreInfoDiv data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="aos-init">
            <h1>Witaj na serwerze<br></br> <span>Never Ending Survival ARK</span></h1>
            <InfoBox />
        </MoreInfoDiv> 
    )
}

export default MoreInfo
