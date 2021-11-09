import React from "react";
import { StyledFooter, Mountain, MountainBack } from "./styles/StyledFooter";
import { StyledCapsule, StyledCar } from "./styles/StyledObjects";

function Footer() {
  return (
    <StyledFooter>
      <MountainBack />
      <Mountain />
      <StyledCapsule />
      <StyledCar />
    </StyledFooter>
  )
}

export default Footer;