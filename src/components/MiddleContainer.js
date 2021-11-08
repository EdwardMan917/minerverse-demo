import React from "react";
import { StyledMiddleContainer } from "./styles/StyledMiddleContainer";
import Intro from "./Intro";
import ButtonContainer from "./ButtonContainer";
import AboutBoard from "./AboutBoard";
import AboutCards from "./AboutCards"
import AuditBoard from "./AuditBoard";
import ListedBoard from "./ListedBoard";
import Separator from "./Separator";
import Share from "./Share";


function MiddleContainer() {
  return (
    <StyledMiddleContainer>
      <Intro />
      <ButtonContainer />
      <AboutBoard />
      <AboutCards />
      <AuditBoard />
      <Separator />
      <ListedBoard />
      <Separator />
      <Share />
    </StyledMiddleContainer>
  )
}

export default MiddleContainer;