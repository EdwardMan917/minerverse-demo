import React from 'react';
import { StyledShareTitle, StyledIconWrapper, StyledIconContainer, StyledEnding } from './styles/StyledShare';
import { ReactComponent as TwitterIcon } from '../assets/images/social_medias/twitter.svg';
import { ReactComponent as TelegramIcon } from '../assets/images/social_medias/telegram.svg';
import { ReactComponent as MediumIcon } from '../assets/images/social_medias/medium.svg';
import { ReactComponent as DiscordIcon } from '../assets/images/social_medias/discord.svg';
import { StyledKeyword } from './styles/StyledKeyword';


function Share() {
  return (
    <div>
      <StyledShareTitle>
        Stay Connected With Us
      </StyledShareTitle>
      <StyledIconContainer>

        <StyledIconWrapper>
          <TwitterIcon/>
        </StyledIconWrapper>
       
        <StyledIconWrapper>
          <TelegramIcon/>
        </StyledIconWrapper>

        <StyledIconWrapper>
          <MediumIcon/>
        </StyledIconWrapper>

        <StyledIconWrapper>
          <DiscordIcon/>
        </StyledIconWrapper>

      </StyledIconContainer>
      <StyledEnding>
        In DeFi, possibilities are as numerous as the stars.
        <br/>
        You create your own <StyledKeyword>Minerverse</StyledKeyword> as you go along.
      </StyledEnding>
    </div>
  )
}

export default Share;