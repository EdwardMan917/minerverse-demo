import React from "react";
import { StyledCardContainer, StyledCard, StyledCardTitle, StyledCardIcon, StyledCardContent} from "./styles/StyledCard";
import { StyledKeyword } from "./styles/StyledKeyword";
import { ReactComponent as OptimzerIcon} from "../assets/images/svgs/optimizer.svg";
import { ReactComponent as FinanceIcon } from "../assets/images/svgs/nft-finance.svg";
import { ReactComponent as AggregatorIcon } from "../assets/images/svgs/aggregator.svg";


function AboutCards(){
  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledCardTitle>
          <StyledKeyword>Optimizer</StyledKeyword>
        </StyledCardTitle>
        <StyledCardIcon>
          <OptimzerIcon/>
        </StyledCardIcon>
        <StyledCardContent>
          Optimizing your investment by following professional and individual portfolios with one single click.
        </StyledCardContent>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>
          <StyledKeyword>NFT Finance</StyledKeyword>
        </StyledCardTitle>
        <StyledCardIcon>
          <FinanceIcon/>
        </StyledCardIcon>
        <StyledCardContent>
          Utilising crypto collectables to generate a financial ecosystem and offer an engaging DeFi + NFT experience.
        </StyledCardContent>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>
          <StyledKeyword>Aggregator</StyledKeyword>
        </StyledCardTitle>
        <StyledCardIcon>
          <AggregatorIcon/>
        </StyledCardIcon>
        <StyledCardContent>
          Managing and controlling all your crypto assets in one place through our cross-chains assets aggregator.
        </StyledCardContent>
      </StyledCard>
    </StyledCardContainer>
  )
}

export default AboutCards;