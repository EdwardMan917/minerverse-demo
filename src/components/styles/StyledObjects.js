import styled, { keyframes } from "styled-components";
import Moon from "../../assets/images/moon.png";
import Earth from "../../assets/images/earth.png";
import LightUFO from "../../assets/images/ufo-1.png";
import FlyingUFO from "../../assets/images/ufo-2.png";
import UFO from "../../assets/images/ufo-3.png";
import Capsule from "../../assets/images/capsule.png";
import Car from "../../assets/images/car.png";

import ListedBigStone from "../../assets/images/stone-listed-1.png";
import ListedStones from "../../assets/images/stone-listed-2.png";
import ListedSatellite from "../../assets/images/satellite-listed.png";


export const StyledMoon = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 20% !important;
  background-position-y: 20% !important;
  background: url(${Moon}) no-repeat;
`;

export const StyledEarth = styled.div`
  z-index: 1;
  height: 1100px;
  width: 500px;
  position: absolute;
  right: 0px;
  bottom: 500px;
  background: url(${Earth}) no-repeat;
`;

const UFOSlide = keyframes`
  0% { transform: translateX(0px) translateY(0px); }
 100% { transform: translateX(4px) translateY(4px); }
`;

export const StyledLightUFO = styled.div`
  z-index: 1;
  top: 0;
  right: 0;
  height: 300px;
  width: 300px;
  background-position-y: 80% !important;
  background-position-x: 50% !important;
  position: absolute;
  background: url(${LightUFO}) no-repeat;
  animation-name: ${UFOSlide};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const StyledFlyingUFO = styled.div`
  z-index: 5;
  width: 116px;
  height: 64px;
  position: absolute;
  background: url(${FlyingUFO}) no-repeat;
`;

export const StyledUFO = styled.div`
  z-index: 5;
  width: 142px;
  height: 90px;
  right: 230px;
  bottom: 1010px;
  position: absolute;
  background: url(${UFO}) no-repeat;
  animation-name: ${UFOSlide};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const StyledCapsule = styled.div`
  height: 210px;
  width: 180px;
  bottom: -2px;
  left: 255px;
  background: url(${Capsule}) no-repeat;
  background-size: contain;
  position: absolute;
`;

export const StyledCar = styled.div`
  height: 110px;
  width: 111px;
  bottom: -2px;
  right: 25%;
  background: url(${Car}) no-repeat;
  background-size: contain;
  position: absolute;
`;

export const StyledListedBigStone = styled.div`
  height: 256px;
  width: 314px;
  top: -210px;
  left: -60px;
  background: url(${ListedBigStone}) no-repeat;
  background-size: contain;
  transform-origin: top right;
  position: absolute;
`;

export const StyledListedStones = styled.div`
  height: 170px;
  width: 185px;
  bottom: -10px;
  right: -40px;
  background: url(${ListedStones}) no-repeat;
  background-size: contain;
  transform-origin: bottom right;
  position: absolute;
`;

export const StyledListedSatellite = styled.div`
  height: 317px;
  width: 328px;
  bottom: -20px;
  left: -300px;
  background: url(${ListedSatellite}) no-repeat;
  background-size: contain;
  position: absolute;
`;