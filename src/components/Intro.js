import React from "react";
import { StyledIntro, StyledIntroContent, StyledIntroTitle } from "./styles/StyledIntro";
import { StyledKeyword } from "./styles/StyledKeyword";


function Intro() {
  return (
    <StyledIntro>
      <StyledIntroTitle>
        An entire 
        <StyledKeyword> Minerverse </StyledKeyword>
        is working in your favour.
      </StyledIntroTitle>
      <StyledIntroContent>
        An everlasting ecosystem that gather Social Investment, NFT Finance and Cross-Chain Asset Management.
      </StyledIntroContent>
    </StyledIntro>
  )
}

export default Intro;