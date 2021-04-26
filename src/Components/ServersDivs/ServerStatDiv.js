import React from "react";
import styled from "styled-components";
import ServerItem from "./ServerItem";

const StyledServers = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: center;
    margin: 1rem 5rem;
  }
`;

const ServerStatDiv = () => {
  return (
    <StyledServers>
      <ServerItem
        id="s1"
        title="Never Ending Survival PVE"
        url="steam://rungameid/346110//connect//51.38.145.171:27015"
        status="Online"
        badge="badge nonpvp"
        map="Ragnarok"
      />
      <ServerItem
        id="s2"
        title="Never Ending Survival PVE"
        url="steam://rungameid/346110//connect//51.38.145.171:27025"
        status="Online"
        badge="badge nonpvp"
        map="Extinction"
        players={0}
        max={100}
      />
    </StyledServers>
  );
};

export default ServerStatDiv;
