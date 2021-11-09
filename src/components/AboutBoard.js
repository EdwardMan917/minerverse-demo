import React from "react";
import { StyledBoardContainer, StyledBoardTitle, StyledBoard, StyledTextContainer } from "./styles/StyledBoard";
import { StyledKeyword } from "./styles/StyledKeyword";
import { MobileAboutStone, MobileAboutStones } from "./styles/StyledMobileObjects";
import { StyledAboutSatellite } from "./styles/StyledObjects";

function AboutBoard() {
  return (
    <StyledBoardContainer>
      <StyledBoardTitle>
        <MobileAboutStone />
        <MobileAboutStones />
        About 
        <StyledKeyword> Minerverse </StyledKeyword>
      </StyledBoardTitle>
      <StyledBoard>
        <StyledAboutSatellite />
        <StyledTextContainer>
          <StyledKeyword> Minerverse </StyledKeyword> is a community-governed platform that offers the most profitable derivatives in the DeFi universe. Bringing the latest Blockchain technology to build an unique and everlasting ecosystem.
        </StyledTextContainer>
      </StyledBoard>
    </StyledBoardContainer>
  )
}

export default AboutBoard;