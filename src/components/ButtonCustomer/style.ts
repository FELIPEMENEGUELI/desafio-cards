import styled from "styled-components";

export const Button = styled.button`
  left: 1041px;
  width: 120px;
  height: 25px;
  background: var(--cor-destaque) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
  color: var(--cor-branco);
  border: none;
  font-size: 12px;
  font-family: "Mulish", serif;
  cursor: pointer;
  
  @media(min-width: 1400px){
    font-size: 18px;
    left: 1041px;
    width: 173px;
    height: 48px;
  }
`;
