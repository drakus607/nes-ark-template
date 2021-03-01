import React from "react";
import styled from "styled-components";

const StyledDiscordFrame = styled.iframe`
  outline: none;
  border: 0;
  margin: auto;
`;

const DiscordFrame = () => {
  return (
    <StyledDiscordFrame
      className="container"
      loading="lazy"
      src="https://discord.com/widget?id=813071398452330567&theme=dark"
      height="400px"
      allowtransparency="true"
      frameborder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></StyledDiscordFrame>
  );
};

export default DiscordFrame;
