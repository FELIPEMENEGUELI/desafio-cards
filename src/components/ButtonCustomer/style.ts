import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-orange);
  border-radius: 5px;
  width: 70px;
  height: 25px;
  color: #fff;
  font-size: 10px;
  border: none;
  box-shadow: 1px 2px 15px #999;
  cursor: pointer;
  
  @media(min-width: 768px){
    font-size: 15px;
    width: 100px;
    height: 35px;
  }
`;
