import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const BoxMain = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 20px;

  span {
    color: var(--color-purple);
    font-weight: 500;
    text-align: center;
  }
  
  @media(min-width: 768px){
    width: 60%;
    span {
      font-size: 22px;
    }
  }
`;

export const BoxSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PositionCards = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
  flex-wrap: wrap; 
  /* justify-content: flex-start; */
  
  justify-content: space-evenly;
  @media(min-width: 768px){
    gap: 20px;
    /* gap: 35px; */
  }
`;