import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F6F4F6CC 0% 0% no-repeat padding-box;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 772px;
  width: 100%;
  
  @media(min-width: 1400px){
    width: 1440px;
  }
`;

export const ContainerCard = styled.div`
  top: 144px;
  left: 501px;
  width: 400px;
  height: 434px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  opacity: 1;

  .icon-close {
    top: 150px;
    left: 922px;
    width: 34px;
    height: 34px;
    background: var(--cor-destaque) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E7631636;
    opacity: 1;
    border-radius: 50px;
    position: absolute;
    border: none;
    color: var(--cor-branco);
    font-size: 16px;
    font-weight: 700;
    font-family: "Mulish", serif;
    cursor: pointer;
  }

  @media(min-width: 1400px){
    width: 438px;
  }
`;

export const BoxImage = styled.div`
  margin-top: 50px;
  margin-left: 125px;
  width: 159px;
  height: 159px;
  background: #DB25250F 0% 0% no-repeat padding-box;
  border: 6px solid #E4E4E4;
  opacity: 1;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(min-width: 1400px){
    margin-left: 140px;
  }
`;

export const Image = styled.img`
  width: 68px;
  height: 68px;
  color: #DB2525;
  opacity: 1;
`;

export const Title = styled.h4`
  margin-top: 25px;
  width: 100%;
  height: 40px;
  color: var(--cor-erro);
  text-align: center;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  letter-spacing: 0px;
  opacity: 1;
  font-size: 32px;
  font-family: "Mulish", serif;
`;

export const ConfirmDelete = styled.span`
  margin-top: 13px;
  margin-left: 105px;
  width: 100%;
  height: 15px;
  color: var(--cor-texto);
  text-align: left;
  letter-spacing: 0px;
  color: #454545;
  text-transform: uppercase;
  opacity: 1;
  font-size: 12px;
  font-family: "Mulish", serif;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;

  @media(min-width: 1400px){
    margin-left: 135px;
  }
  
`;

interface ButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  marginLeft?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color ? props.color : "#fff"};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#fff"};
  border-color: ${(props) => props.borderColor ? props.borderColor : "#DB2525"};
  cursor: pointer;
  border: ${(props) => props.borderColor ? "1px solid #DB2525" : "0px"};
  margin-top: 22px;
  width: 165px;
  height: 48px;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
  font-size: 18px;
  font-family: "Mulish", serif;
  font-weight: 700;
  margin-left: 15px;
  
  @media(min-width: 1400px){
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : "0px"};
  }
`;

export const Line = styled.div`
  margin-top: 28px;
  margin-left: 50px;
  width: 300px;
  height: 0px;
  border: 1px solid #E4E4E4;
  opacity: 1;
  
  @media(min-width: 1400px){
    margin-left: 36px;
    width: 364px;
  }
`;