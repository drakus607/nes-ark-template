import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
    text-align: center;
    padding-bottom: 0.9rem;
    box-sizing: border-box;
    display: block;

& h2 {
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #106eea;
    padding: 8px 20px;
    margin: 0;
    background: #e7f1fd;
    display: inline-block;
    border-radius: 50px;
}
& h3 {
    font-family: "Poppins",sans-serif;
    color: #444444;
    line-height: 1.5;
}
`


const TitleDiv = (props) => {
    return (
        <StyledTitle>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
        </StyledTitle>
    )
}

export default TitleDiv
