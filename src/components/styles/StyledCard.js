import styled from "styled-components";

export const StyledCardTitle = styled.div`
  
  text-align: center;
  width: 100%;
  font-family: "Gotham";
  font-size: 27px;
  margin-bottom: 10%;
`;

export const StyledCardIcon = styled.div`
  height: 116px;
  max-height: 116px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;

export const StyledCardContent = styled.div`
  height: 40%;
  width: 100%;
  color: #ffffff;
  font-family: "GothamLight";
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10%;
  line-height: 30px;
`;

export const StyledCard = styled.div`

  @media (max-width: 800px) {
    width: 90%;
    margin-bottom: 40px;
    padding: 5% 2% 5% 2%;
  }

  z-index: 2;
  width: 30%;
  border-style: solid;
  border-width: 1px;
  border-color: #494949;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 2%;
  background: #141414;
  margin: 0 2% 0 2%;
`;

export const StyledCardContainer = styled.div`

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  z-index: 2;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
`;