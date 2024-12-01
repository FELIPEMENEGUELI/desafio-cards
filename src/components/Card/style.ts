import styled from "styled-components";

export const Card = styled.div`
  width: 170px;
  height: 267px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #E5E5E5;
  border: 1px solid #E4E4E4;
  border-radius: 8px;
  opacity: 1;
  
  @media(min-width: 1400px) {
    width: 234px;
    height: 267px;
  }
`;

export const Image = styled.img`
  background: #F6F4F6 0% 0% no-repeat padding-box;
  border: 1px solid #E4E4E4;
  opacity: 1;
  border-radius: 100px;
  margin-top: 28px;
  margin-left: 40px;
  width: 95px;
  height: 95px;
  
  @media(min-width: 1400px) {
    margin-left: 69px;
    width: 95px;
    height: 95px;
  }
`;

export const Title = styled.div`
  margin-top: 7px;
  height: 40px;
  text-align: center;
  font: 16px/20px Muli;
  color: #4d4d4d;
  font-weight: bold;
  opacity: 0.9;
  background: var(--cor-branco);
  font-size: 16px;
  font-family: "Mulish", serif;
  text-transform: capitalize;

  @media(min-width: 1400px) {
    margin-left: 21px;
    width: 191px;
    height: 40px;
  }
`;

export const BoxButtons = styled.div`
  height: 43px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #0000000F;
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 28px;
  padding: 0 5px;
  
  @media(min-width: 1400px) {
    padding: 0 18px;
    height: 40px;
  }
`;

export const Button = styled.button`
  left: 196px;
  opacity: 1;
  display: flex;
  align-items: center;
  border: none;
  font-size: 15px;
  color: #999;
  background-color: var(--cor-branco);
  font-family: "Mulish", serif;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.color ? props.color : "#000"};
  }
`;

export const Icon = styled.img`
  width: 13px;
  height: 14px;
  margin-right: 12px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const LineVertical = styled.div`
  top: 611px;
  left: 286px;
  width: 0px;
  height: 22px;
  border: 1px solid #F6F4F6;
  opacity: 1;
`;

export const Line = styled.div`
  margin-top: 22.5px;
  margin-left: 35px;
  width: 105px;
  height: 0px;
  border: 1px solid #F0EFF0;
  opacity: 1;
  
  @media(min-width: 1400px) {
    width: 169px;
    margin-left: 31.5px;
  }
`;