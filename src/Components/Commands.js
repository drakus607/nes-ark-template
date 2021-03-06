import React from "react";
import styled from "styled-components";
import TitleDiv from "./ServersDivs/TitleDiv";

const StyledCommands = styled.section`
  overflow: hidden;
  padding: 60px 0;
  color: #444444;
  line-height: 1.5;
  background: #fff;
  text-align: center;
  & li {
    list-style: none;
    font-size: 1.4rem;
    padding: 0 1rem;
    & span:first-of-type {
      color: red;
    }
  }
`;

const commands = [
  { id: 1, command: "/sklep", desc: "Aby otworzyć sklep" },
  { id: 2, command: "/kup [przedmiot]", desc: "podstaw nazwę przedmiotu, którą zamierzasz kupić" },
  { id: 3, command: "/pomocsklep", desc: "aby uzyskać pomoc dotyczącą funkcjonowania sklepu" },
  { id: 4, command: "/sprzedaj", desc: "aby otworzyć menu sprzedaży" },
];

const commandItem = commands.map((item) => (
  <li key={item.id}>
    <h4>
      <span>{item.command}</span> - <span>{item.desc}</span>
    </h4>
  </li>
));

const Commands = () => {
  return (
    <StyledCommands className="container" id="commands" name="commands">
      <TitleDiv
        title="Komendy"
        subtitle="Poniżej znajdziesz listę dostępnych komend na serwerze"
      />
      {commandItem}
    </StyledCommands>
  );
};

export default Commands;
