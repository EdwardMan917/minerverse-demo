import styled from "styled-components";


export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledIntroButton = styled.button`
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
  height: 100%;
  width: 220px;
  margin: 0 3% 0 3%;
`;

