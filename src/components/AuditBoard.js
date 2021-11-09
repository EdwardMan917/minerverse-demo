import React from "react";
import { StyledBoardContainer, StyledBoardTitle, StyledBoard } from "./styles/StyledBoard";
import { ReactComponent as CertikIcon } from "../assets/images/svgs/certik.svg";
import { StyledAuditedStone, StyledFlyingUFO } from "./styles/StyledObjects";

function AuditBoard() {
  return (
    <StyledBoardContainer>
      <StyledFlyingUFO className={"flyPass"} />
      <StyledBoardTitle>
        To Be Audited By
      </StyledBoardTitle>
      <StyledBoard>
        <StyledAuditedStone />
        <CertikIcon/>
      </StyledBoard>
    </StyledBoardContainer>
  )
}

export default AuditBoard;