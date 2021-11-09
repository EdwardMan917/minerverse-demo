import React, { useRef, useState, useEffect, forwardRef } from "react";
import { StyledMiddleContainer } from "./styles/StyledMiddleContainer";
import Intro from "./Intro";
import ButtonContainer from "./ButtonContainer";
import AboutBoard from "./AboutBoard";
import AboutCards from "./AboutCards"
import AuditBoard from "./AuditBoard";
import ListedBoard from "./ListedBoard";
import Separator from "./Separator";
import Share from "./Share";
import { MobileListedSatellite } from "./styles/StyledMobileObjects";


function MiddleContainer() {

  let IntroRef = React.createRef();

  const [rect, setRect] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(IntroRef);
      if(IntroRef != null && IntroRef.current != null){
        setRect(IntroRef.current.getBoundingClientRect());
        // console.log(rect);
      }
    });
  });

  return (
    <StyledMiddleContainer >
      <Intro ref={IntroRef} />
      <ButtonContainer />
      <AboutBoard />
      <AboutCards />
      <AuditBoard />
      <Separator />
      <ListedBoard />
      <MobileListedSatellite />
      <Separator />
      <Share />
    </StyledMiddleContainer>
  )
}

export default MiddleContainer;