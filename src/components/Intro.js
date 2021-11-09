import React from "react";
import { StyledIntro, StyledIntroContent, StyledIntroTitle } from "./styles/StyledIntro";
import { StyledKeyword } from "./styles/StyledKeyword";


const Intro = React.forwardRef((props, ref) => (
  <StyledIntro ref={ref} >
    <StyledIntroTitle>
      An entire 
      <StyledKeyword> Minerverse </StyledKeyword>
      is working in your favour.
    </StyledIntroTitle>
    <StyledIntroContent>
      An everlasting ecosystem that gather Social Investment, NFT Finance and Cross-Chain Asset Management.
    </StyledIntroContent>
  </StyledIntro>
  
));

export default Intro;