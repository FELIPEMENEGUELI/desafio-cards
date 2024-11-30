import styled from "styled-components";

export const Input = styled.input`
  top: 100px;
  left: 15px;
  width: 85%;
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
    top: 147px;
    width: 1046px;
    left: 168px;
  }
`;

export const IconStyle = styled.img`
  top: 115px;
  right: 54px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 25px;
  position: absolute;
  
  @media(min-width: 650px){
    right: 105px;
  }

  @media(min-width: 850px){
    right: 145px;
  }

  @media(min-width: 1200px){
    right: 175px;
  }
  
  @media(min-width: 1400px){
    height: 49px;
    left: 1150px;
    top: 157px;
    width: 70px;
  }
`;