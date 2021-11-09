import styled from "styled-components";

export const StyledBoardTitle = styled.div`

  @media (max-width: 800px){
    width: auto;
    border-width: 2px;
    font-size: 25px;
    height: 40px;
  }

  white-space: pre-wrap;
  z-index: 2;
  padding: 1rem;
  margin-top: 15%;
  margin-bottom: -47.5px;
  width: 450px;
  height: 60px;
  border-style: solid;
  border-radius: 20px;
  border-color: #ffffff;
  border-width: 4px;
  font-family: "Gotham";
  font-size: 40px;
  background: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBoard = styled.div`

  @media (max-width: 800px){
    min-height: 350px;
    border-radius: 17px;
  }

  z-index: 1;
  width: 100%;
  min-height: 450px;
  border-style: solid;
  border-radius: 34px;
  border-color: #ffffff;
  border-width: 0.75px;
  background: #000000;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: -15%;
  position: relative;
`;

export const StyledSvgWrapper = styled.div`

  @media (max-width: 800px) {
    flex-direction: column;
  }

  height: 110px;
  min-width: 40%;
  margin: 2% 3% 2% 3%;
`;

export const StyledSvgContainer = styled.div`

  @media (max-width: 800px) {
    flex-direction: column;
  }

  z-index: 999;
  padding-top: 8%;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const StyledTextContainer = styled.div`

  @media (max-width: 470px){
    width: auto;
    font-size: 18px;
    line-height: 2;
    margin: -8% 5% 0 5%;
  }

  @media (min-width: 471px) and (max-width: 800px){
    width: auto;
    font-size: 18px;
    line-height: 2;
    margin: -15% 5% 0 5%;
  }


  margin: -10% 5% 0 5%;
  text-align: center;
  font-family: "GothamLight";
  font-size: 29px;
  line-height: 3rem;
  color: #ffffff;
`;

export const StyledBoardContainer = styled.div`
  
  @media (max-width: 800px){
    min-height: 350px;
  }

  padding-top: 5%;
  min-height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;