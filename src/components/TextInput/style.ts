import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1px;
  border-radius: 5px;
  width: 80%;
  position: absolute;
  left: 10%;
  z-index: 1;
  top: 50%;
  
  @media (min-width: 768px) {
    left: 25%;
    width: 50%;
    font-size: 18px;
  } 
`;

export const Input = styled.input`
  background-color: #fff;
  width: 100%;
  padding: 0px 20px;
  border-radius: 5px;
  height: 40px;
  color: #000;
  border: 0;
  border: none;
  outline: none;
  transition: box-shadow 0.3s ease, background-color 0.1s ease;

  &:focus {
    box-shadow: 0 0 8px #999999;
    background-color: #f0f8ff;
  } 
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
  padding-right: 5px;
  border-radius: 5px;
  background-color: #fff;
`;