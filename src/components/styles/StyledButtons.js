import styled from "styled-components";


export const StyledButtonContainer = styled.div`

  @media (max-width: 800px){
    flex-direction: column;
    height: 250px;
    margin-top: -30px;
    margin-bottom: -70px;
  }

  width: 100%;
  height: 50px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledIntroButton = styled.button`

  @media (max-width: 1100px) {
    margin: 0 1% 0 1%;
  }

  @media (max-width: 800px){
    width: 250px;
    margin: 10px 0 10px 0;
  }
  
  &:active{
    background: #e1db00;
  }

  user-select: none;
  font-family: "Gotham";
  font-size: 23px;
  border-radius: 4px;
  border: 0px;
  background: #faf300;
  color: #000000;
  height: 50px;
  width: 220px;
  margin: 0 3% 0 3%;
`;

