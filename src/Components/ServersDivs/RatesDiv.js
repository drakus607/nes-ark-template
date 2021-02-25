import React from "react";
import styled from "styled-components";

const StyledRates = styled.div`
  & span {
    color: #106eea;
  }
`;

const RatesDiv = (props) => {
  return (
    <StyledRates>
      <h3>
        Ilość osób na serwerze:{" "}
        <span>
          {props.players} / {props.max}
        </span>
      </h3>
      <h3>
        Mnożnik XP: <span>{props.ping}</span>
      </h3>
      <h3>
        Taming Speed: <span>*XX</span>
      </h3>
      <h3>
        Harvest: <span>XX</span>
      </h3>
      <h3>
        Egg Hatch: <span>XX</span>
      </h3>
      <h3>
        Maturation: <span>XX</span>
      </h3>
      <h3>
        Max lvl dino: <span>XX</span>
      </h3>
    </StyledRates>
  );
};

export default RatesDiv;
