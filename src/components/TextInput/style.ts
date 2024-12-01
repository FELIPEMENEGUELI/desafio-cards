import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  top: 100px;
  
  @media(min-width: 1400px){
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    width: 1050px;
    left: 158px;
    top: 185px;
  } 
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  background: var(---cor-branco) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  position: absolute;
  border: none;
  outline: none;
  padding-left: 25px;
  color: #757575;
  text-align: left;
  font-size: 16px;
  cursor: pointer;

  @media(min-width: 1400px){
    height: 75px;
    font-size: 24px;
  }
`;

export const IconStyle = styled.img`
  right: 10px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 25px;
  position: absolute;
  
  @media(min-width: 1400px){
    height: 49px;
    right: 25px;
  }
`;