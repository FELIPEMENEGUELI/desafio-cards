import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #99999970;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000060;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1; 
  backdrop-filter: blur(0.8px);
`;

export const ContainerCard = styled.div`
  width: 15rem;
  height: 40%;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  .icon-close{
    cursor: pointer;
    position: absolute;
    right: -15px;
    top: -15px;
    background-color: #E76316;
    border-radius: 50px;
    padding: 2px;
    width: 22px;
    height: 22px;
  }

  @media(min-width: 768px) {
    width: 438px;
    height: 434px;

    .icon-close{
      width: 34px;
      height: 34px;
    }
  }
`;

export const BoxImage = styled.div`
   width: 95px;
   height: 95px;
   display: flex;
   justify-content: center;
   align-items: center;
   align-self: center;
   border-radius: 9999px;
   background-color: #ddd;
   margin-top: 20px;

   @media(min-width: 768px) {
    width: 159px;
    height: 159px;
    margin-top: 45px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;

  @media(min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

export const BoxDelete = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  flex-direction: column;

  span {
    font-size: 12px;
  }

  @media(min-width: 768px){
    span {
      font-size: 14px;
    }
  }
`;

export const Title = styled.h4`
  color: var(--color-red);
  font-size: 20px;
  font-weight: 600;

  @media(min-width: 768px){
    font-size: 32px;
  }
`;

export const PositionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 15px;
  
  @media(min-width: 768px){
    width: 80%;
    margin-top: 15px;
  }
`;

interface ButtonProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color ? props.color : "#fff"};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#fff"};
  border-color: ${(props) => props.borderColor ? props.borderColor : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  width: 90px;
  height: 30px;

  @media(min-width: 768px){
    width: 165px;
    height: 48px;
    font-size: 18px;
  }
`;
