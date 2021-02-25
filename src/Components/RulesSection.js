import React from "react";
import styled from "styled-components";
import TitleDiv from "./ServersDivs/TitleDiv";

const StyledRules = styled.section`
  overflow: hidden;
  padding: 60px 0;
  font-family: "Poppins", sans-serif;
  color: #444444;
  line-height: 1.5;
  background: #f6f9fe;
  margin-bottom: 2rem;
  & li {
    padding: 0 1rem;
    list-style: none;
    font-size: 0.8rem;
    & span:last-of-type {
      text-decoration: underline;
    }
    & span:first-of-type {
      color: red;
    }
  }
  & div {
    margin-left: 3rem;
    margin-right: 2rem;
  }
  @media (min-width: 680px) {
    li {
      font-size: 1rem;
    }
  }
`;
const rules = [
  {
    id: 1,
    title: "No cheating",
    subtitle: "This includes hacks, map glitches or bots (macros are okay).",
  },
  {
    id: 2,
    title: "Tribe Names",
    subtitle:
      "Your tribe name cannot be offensive, contain advertising or include swear/vulgar words, this is a game (with kids who play) and those who dont take it seriously should go elsewhere",
  },
  {
    id: 3,
    title: "Player Names",
    subtitle:
      "Your player name cannot be something with derogatory terms, swear words ... this indicates you dont take this game seriously and are just here to troll ... if the admin feels the name is offensive it will be changed.",
  },
  {
    id: 4,
    title: "Tribe Limits",
    subtitle:
      "You must not use alliances to skirt the Tribe max e.g build your bases all together in 1 big compound, and must act independently, e.g 1 tribe leader telling the other tribe what to do..",
  },
  {
    id: 5,
    title: "General",
    subtitle:
      "Placing foundations/pillars to claim land or to block mass amount of resource spawns is also disallowed and may result in your structure being removed or entire tribe’s structures wiped (if excessive). Structures that are abandoned or made demolish-able will be auto-demolished by the server.",
  },
  {
    id: 6,
    title: "Advertising",
    subtitle:
      "Players shall not advertise other servers, YouTube or Twitch addresses in game, if you need to share a TS that is fine as long as its related to general chat requests... advertising will result in an immediate ban.",
  },
];

const listItems = rules.map((rule) => (
  <li key={rule.id}>
    <h4>
      {rule.id}. <span>{rule.title}</span> : <span>{rule.subtitle}</span>{" "}
    </h4>{" "}
  </li>
));

const RulesSection = () => {
  return (
    <StyledRules id="rules" name="rules">
      <TitleDiv
        title="Zasady"
        subtitle="Poniżej znajdziesz zasady panujące na serwerach"
      />
      <div>{listItems}</div>
    </StyledRules>
  );
};

export default RulesSection;
