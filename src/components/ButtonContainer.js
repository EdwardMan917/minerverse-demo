import React from "react";
import { StyledButtonContainer, StyledIntroButton } from "./styles/StyledButtons";

function ButtonContainer(){
    return (
        <StyledButtonContainer>
            <StyledIntroButton>Pre-Sale</StyledIntroButton>
            <StyledIntroButton>Launch DApp</StyledIntroButton>
            <StyledIntroButton>Docs</StyledIntroButton>
        </StyledButtonContainer>
    )
}

export default ButtonContainer;