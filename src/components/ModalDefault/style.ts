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
  height: 35%;
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
  }
`;

export const BoxImage = styled.div`
   margin-top: 20px;
   width: 75px;
   height: 75px;
   display: flex;
   justify-content: center;
   align-items: center;
   align-self: center;
   border-radius: 9999px;
   background-color: #ddd;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  flex-direction: column;

  span {
    font-size: 12px;
  }
`;

export const Title = styled.h4`
  color: var(--color-red);
  font-size: 20px;
  font-weight: 600;

  @media(min-width: 768px){
    font-size: 30px;
  }
`;

export const PositionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
