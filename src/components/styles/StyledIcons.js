import styled from "styled-components";
import CertikIcon from "../../assets/images/svgs/certik.svg";
import CoinMarketCapIcon from "../../assets/images/svgs/coin-market-cap.svg";
import CoinGeckoIcon from "../../assets/images/svgs/coin-gecko.svg";
import DAppIcon from "../../assets/images/svgs/dapp.svg";
import DAppRadarIcon from "../../assets/images/svgs/dapp-radar.svg";
import TokenPocketIcon from "../../assets/images/svgs/token-pocket.svg";

export const Certik = styled.div`

  @media (max-width: 800px) {
    max-width: 260px;
    width: 80%;
    height: 70px;
  }

  width: 80%;
  height: 120px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-image: url(${CertikIcon});
`;

const Icon = styled.div`
    
  @media (max-width: 800px) {
    max-width: 260px;
    width: 80%;
    height: 70px;
    margin: 5% 0 5% 0;
  }

  width: 40%;
  height: 120px;
  margin: 2%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;

export const CoinMarketCap = styled(Icon)`
  background-image: url(${CoinMarketCapIcon});
`;

export const CoinGecko = styled(Icon)`
  background-image: url(${CoinGeckoIcon});
`;

export const DApp = styled(Icon)`
    background-image: url(${DAppIcon});
`;

export const DAppRadar = styled(Icon)`
  background-image: url(${DAppRadarIcon});
`;

export const TokenPocket = styled(Icon)`
  background-image: url(${TokenPocketIcon});
`;