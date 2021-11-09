import styled from "styled-components";

export const StyledIntroTitle = styled.div`

  @media (max-width: 800px){
    font-size: 40px;
  }

  color: white;
  text-align: center;
  font-family: "Gotham";
  font-size: 50px;
  margin-bottom: 5%;
`;

export const StyledIntroContent = styled.div`

  @media (max-width: 800px){
    font-size: 22px;
    line-height: 1.5;
  }

  color: white;
  text-align: center;
  font-family: "GothamMedium";
  font-size: 28px;
  line-height: 3rem;
`;

export const StyledIntro = styled.div`
  margin: 10%;
  z-index: 999;
`;