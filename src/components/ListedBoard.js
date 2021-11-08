import React from "react";
import { StyledBoardContainer, StyledBoardTitle, StyledBoard, StyledSvgContainer, StyledSvgWrapper } from "./styles/StyledBoard";
import { ReactComponent as CoinMarketCapIcon } from "../assets/images/svgs/coin-market-cap.svg";
import { ReactComponent as CoinGeckoIcon } from "../assets/images/svgs/coin-gecko.svg";
import { ReactComponent as DAppIcon } from "../assets/images/svgs/dapp.svg";
import { ReactComponent as DAppRadarIcon } from "../assets/images/svgs/dapp-radar.svg";
import { ReactComponent as TokenPocketIcon } from "../assets/images/svgs/token-pocket.svg";
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

          <StyledSvgWrapper>
            <CoinMarketCapIcon/>
          </StyledSvgWrapper>

          <StyledSvgWrapper>
            <CoinGeckoIcon/>
          </StyledSvgWrapper>

          <StyledSvgWrapper>
            <TokenPocketIcon/>
          </StyledSvgWrapper>

          <StyledSvgWrapper>
            <DAppRadarIcon/>
          </StyledSvgWrapper>

          <StyledSvgWrapper>
            <DAppIcon/>
          </StyledSvgWrapper>

        </StyledSvgContainer>
      </StyledBoard>
    </StyledBoardContainer>
  )
}

export default ListedBoard;