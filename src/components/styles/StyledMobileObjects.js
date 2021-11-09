import styled from "styled-components";

import AboutStone from "../../assets/images/stone-mobile-about-1.png";
import AboutStones from "../../assets/images/stone-mobile-about-2.png";
import AggregatorStone from "../../assets/images/stone-mobile-about-3.png";


import AuditStone from "../../assets/images/stone-mobile-audited-1.png";
import AuditStoneTwo from "../../assets/images/stone-mobile-audited-2.png";

import ListedStone from "../../assets/images/stone-mobile-listed-1.png";
import ListedStoneTwo from "../../assets/images/stone-mobile-listed-3.png";
import ListedStoneThree from "../../assets/images/stone-mobile-listed-4.png";

import ListedSatellite from "../../assets/images/satellite-listed.png";


const MobileObject = styled.div`

  @media (max-width: 800px) {
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
  }

  display: none;
`;

export const MobileAboutStone = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 50px;
    height: 50px;
    transform: translateX(-80px) translateY(-40px);
    background-image: url(${AboutStone});
    position: absolute;
  }
`;

export const MobileAboutStones = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
    transform: translateX(300px) translateY(10px);
    background-image: url(${AboutStones});
    position: absolute;
  }
`;

export const MobileAggregatorStone = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 150px;
    height: 150px;
    transform: translateX(-10px) translateY(-80px);
    background-image: url(${AggregatorStone});
    position: absolute;
  }
`;

export const MobileAuditStone = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
    transform: translateX(-170px) translateY(20px);
    background-image: url(${AuditStone});
    position: absolute;
  }
`;

export const MobileAuditStoneTwo = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
    transform: translateX(190px) translateY(280px);
    background-image: url(${AuditStoneTwo});
    position: absolute;
  }
`;

export const MobileListedStone = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 100px;
    height: 200px;
    transform: translateX(-150px) translateY(-10px);
    background-image: url(${ListedStone});
    position: absolute;
  }
`;

export const MobileListedStoneTwo = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
    transform: translateX(160px) translateY(50px);
    background-image: url(${ListedStoneTwo});
    position: absolute;
  }
`;

export const MobileListedStoneThree = styled(MobileObject)`
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
    float: left;
    transform: rotate(25deg) translateY(200px);
    background-image: url(${ListedStoneThree});
    position: absolute;
  }
`;

export const MobileListedSatellite = styled(MobileObject)`
  @media (max-width: 800px) {
    z-index: 1;
    width: 150px;
    height: 150px;
    transform: translateX(100px) translateY(50px);
    background-image: url(${ListedSatellite});
    position: absolute;
  }
`;