import React from "react";
import styled from "styled-components";

const StyledInfoBox = styled.div`
display: flex;
flex-direction: column;
    margin-left: 1rem;
    margin-top: 0;
    margin-right: 3rem; 
    padding: 1rem;
    font-size: 2rem;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    font-family: "Poppins", sans-serif;
}
& h2 {
    margin: 0;
    font-size: 1rem;
    color: red;
}
& p {
    padding: 0 15px;
    font-size: 0.8rem;
    color: black;
}
& i {
    font-size: 0.7rem;
}
@media(min-width:400px){
    h2{
        font-size: 1.2rem;
    }
    & p {
        font-size: 0.95rem;
    }
}

@media(min-width: 515px){
    margin-left: 3rem;
    & h2 {
        font-size: 2rem;
    }
    & p {
        font-size: 1.1rem;
    }
}
`;

const InfoBox = () => {
  return (
    <StyledInfoBox>
      <h2>Informacje o serwerze</h2>
      <p>
        Projekt NES ARK jest przedsięwzięciem, zakładającym utworzenie sieci
        serwerów do gry ARK: Survival Evolved. W niedalekiej przyszłości
        społeczność będzie głosować nad ustawieniami gry oraz dodatkami w każdym
        z kolejnych sezonów. Każdy z serwerów będzie przygotowany na przyjęcie
        graczy Epic Games oraz Steam . Aktualnie świętujemy rozpoczęcie
        pierwszego sezonu, życzymy wam dobrej zabawy i udanych łowów.
        <i> - Administracja NES ARK</i>
      </p>
    </StyledInfoBox>
  );
};

export default InfoBox;
