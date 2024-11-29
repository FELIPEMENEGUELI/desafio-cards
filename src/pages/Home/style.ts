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
  width: 95%;
  margin-top: 20px;
  
  @media(min-width: 1089px){
    width: 1056px;
  }
`;

export const TitleSearch = styled.span`
  color: var(--color-purple);
  font-weight: 500;
  text-align: center;

  @media(min-width: 768px){
      font-size: 32px;
    }
`;

export const BoxSearch = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PositionCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UlCards = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap; 
  margin-top: 10px;
  padding-bottom: 20px;
  
  @media(min-width: 1089px){
    margin-top: 20px;
    gap: 37px;
  }
`;
