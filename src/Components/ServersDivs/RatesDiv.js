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
        Mnożnik XP: <span>2x</span>
      </h3>
      <h3>
        Czas oswajania: <span>*XX</span>
      </h3>
      <h3>
        Zbieranie: <span>XX</span>
      </h3>
      <h3>
        Wykluwanie jaj: <span>XX</span>
      </h3>
      <h3>
        Dorastanie: <span>XX</span>
      </h3>
      <h3>
        Maksymalny poziom dino: <span>XX</span>
      </h3>
    </StyledRates>
  );
};

export default RatesDiv;
