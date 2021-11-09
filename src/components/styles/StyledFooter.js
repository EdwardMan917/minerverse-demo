import styled from "styled-components";
import FrontMountain from "../../assets/images/svgs/footer-mountain.svg";
import BackMountain from "../../assets/images/svgs/footer-mountain-back.svg";

export const MountainBack = styled.div`

  @media (max-width: 800px) {
    width: 200vw;
    transform: translateX(-220px);
  }

  width: 100%;
  height: 2000px;
  bottom: 0px;
  position: absolute;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-image: url(${BackMountain});
`;

export const Mountain = styled.div`

  @media (max-width: 800px) {
    width: 200vw;
    transform: translateX(-220px);
  }

  width: 100%;
  height: 1000px;
  bottom: 0px;
  position: absolute;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-image: url(${FrontMountain});
`;

export const StyledFooter = styled.div`
  width: 100%;
  bottom: 0px;
  z-index: 3;
  position: absolute;
`;