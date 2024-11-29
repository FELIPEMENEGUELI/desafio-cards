import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.color ? props.color : '#E76316'};
  border-radius: 5px;
  width: 70px;
  height: 25px;
  color: ${(props) => props.title ? props.title : '#fff'};
  border-color: ${(props) => props.title ? '#f00' : 'transparent'};
  font-size: 10px;
  box-shadow: 1px 2px 10px #999;
  cursor: pointer;
  
  @media(min-width: 768px){
    font-size: 18px;
    width: 173px;
    height: 48px;
  }
`;
