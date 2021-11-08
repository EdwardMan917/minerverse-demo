import styled from "styled-components";

export const StyledBackMountain = styled.div`
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    bottom: 0px;
  }

`;

export const StyledFrontMountain = styled.div`
  width: 100%;
  height: 100%;

  svg {
    position: relative;
    bottom: -5px;
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  bottom: 0px;
  z-index: 3;
  position: absolute;
`;