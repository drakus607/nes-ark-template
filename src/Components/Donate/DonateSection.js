import React from "react";
import TitleDiv from "../ServersDivs/TitleDiv";
import CoinsSection from "./CoinsSection";
import styled from "styled-components";

const StyledDonate = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 90px 0;
  justify-content: space-around;
`;

const DonateSection = () => {
  return (
    <StyledDonate>
      <TitleDiv
        title="Dotacje"
        subtitle="Poniżej znajdziesz możliwe pakiety dotacji oraz nagród przyznawanych za wsparcie serwera."
      />
      <CoinsSection />
    </StyledDonate>
  );
};

export default DonateSection;
