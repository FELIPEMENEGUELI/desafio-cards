import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BoxMain = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  /* background-color: #999; */
  /* height: 100vh; */
  margin-top: 20px;

  span {
    color: var(--color-purple);
    font-size: 15px;
    font-weight: 500;
    text-align: center;
  }
  
  @media(min-width: 768px){
    
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
