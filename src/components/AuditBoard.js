import React from "react";
import { StyledBoardContainer, StyledBoardTitle, StyledBoard } from "./styles/StyledBoard";
import { StyledAuditedStone, StyledFlyingUFO } from "./styles/StyledObjects";
import { Certik } from "./styles/StyledIcons";
import { MobileAuditStone, MobileAuditStoneTwo } from "./styles/StyledMobileObjects";

function AuditBoard() {
  return (
    <StyledBoardContainer>
      <StyledFlyingUFO className={"flyPass"} />
      <StyledBoardTitle>
        <MobileAuditStone />
        <MobileAuditStoneTwo />
        To Be Audited By
      </StyledBoardTitle>
      <StyledBoard>
        <StyledAuditedStone />
        <Certik/>
      </StyledBoard>
    </StyledBoardContainer>
  )
}

export default AuditBoard;