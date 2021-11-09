import React from "react";
import { StyledBoardContainer, StyledBoardTitle, StyledBoard, StyledSvgContainer } from "./styles/StyledBoard";
import { CoinGecko, CoinMarketCap, DApp, DAppRadar, TokenPocket } from "./styles/StyledIcons";
import { MobileListedStone, MobileListedStoneThree, MobileListedStoneTwo } from "./styles/StyledMobileObjects";
import { StyledListedBigStone, StyledListedSatellite, StyledListedStones } from "./styles/StyledObjects";

function ListedBoard() {
  return (
    <StyledBoardContainer>
      <StyledBoardTitle>
        To Be Listed On
      </StyledBoardTitle>
      <StyledBoard>
        <StyledListedBigStone />
        <StyledListedStones />
        <StyledListedSatellite />
        <StyledSvgContainer>
          <MobileListedStone />
          <MobileListedStoneTwo />
          <MobileListedStoneThree />
          <CoinMarketCap />
          <DAppRadar />
          <TokenPocket />
          <CoinGecko />
          <DApp />
        </StyledSvgContainer>
      </StyledBoard>
    </StyledBoardContainer>
  )
}

export default ListedBoard;