import React from 'react'
import styled from 'styled-components'
import TitleDiv from './ServersDivs/TitleDiv';

const StyledCommands = styled.section`
overflow: hidden;
padding: 60px 0;
font-family: "Poppins", sans-serif;
color: #444444;
line-height: 1.5;
background: #fff;
text-align: center;
& li {
    list-style: none;
    font-size: 1.4rem;
    & span:first-of-type {
        color: red;
    }
}
`

const commands =[{ id:1,command: "/reset", desc:"cos resetuje"},
{ id:2,command: "/sklep", desc:"otwiera sklep"},
{ id:3,command: "/start", desc:"wysyla na pozycje start"},
{id:4,command: "/costam", desc:"costamcośtamuje"},
{id:5,command: "/template", desc:"testowe"}];

const commandItem = commands.map((item) => <li key={commands.id}>
    <h4><span>{item.command}</span> - <span>{item.desc}</span> </h4>  </li>);

const Commands = () => {
    return (
        <StyledCommands id="commands">
            <TitleDiv title="Komendy" subtitle="Poniżej znajdziesz listę dostępnych komend na serwerze"/>
            {commandItem}
        </StyledCommands>
    )
}

export default Commands
