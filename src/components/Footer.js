import React from "react";
import { StyledFooter, StyledFrontMountain, StyledBackMountain } from "./styles/StyledFooter";
import { ReactComponent as MountainBack } from "../assets/images/svgs/footer-mountain-back.svg";
import { ReactComponent as Mountain } from "../assets/images/svgs/footer-mountain.svg";
import { StyledCapsule, StyledCar } from "./styles/StyledObjects";

function Footer() {
  return (
    <StyledFooter>
      {/* <MountainBack />
      <Mountain /> */}
      <StyledBackMountain>
        <MountainBack />
      </StyledBackMountain>

      <StyledFrontMountain>
        <Mountain />
      </StyledFrontMountain>

      <StyledCapsule />
      <StyledCar />
    </StyledFooter>
  )
}

export default Footer;