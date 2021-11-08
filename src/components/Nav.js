import React from "react";
import { StyledNav } from "./styles/StyledNav";
import { ReactComponent as Minerverse } from "../assets/images/svgs/minerverse.svg";


function Nav() {
  return (
    <StyledNav>
      <Minerverse style={{height: "45px" }} />
    </StyledNav>
  )
}

export default Nav;