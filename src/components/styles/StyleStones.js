import styled from "styled-components";
import stoneOne from "../../assets/images/stone-1.png";
import stoneTwo from "../../assets/images/stone-2.png";
import stoneThree from "../../assets/images/stone-3.png";


export const StyledStonesBack = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  background: url(${stoneOne});
`;

export const StyledStonesMiddle = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  background: url(${stoneTwo});
`;

export const StyledStonesFront = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  background: url(${stoneThree});
`;