import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1746px;
  background: #F6F4F6 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Box = styled.div`
  opacity: 1;
  height: 1218px;
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;

  @media(min-width: 1400px) {
    margin-left: 0;
    margin-right: 0;
    width: 1056px;
    margin-left: 158px;
  }
`;

export const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleSearch = styled.span`
  left: 168px;
  height: 40px;
  text-align: left;
  font: 16px;
  color: #5F1478;
  opacity: 1;
  font-family: "Mulish", serif;
  
  @media(min-width: 1400px){
    font-size: 32px;
  }
`;

export const UlCards = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  margin-top: 10px;
  padding-bottom: 153px;
  justify-content: center;
  
  @media(min-width: 1400px){
    margin-top: 34px;
    gap: 35px;
    justify-content: space-between;
  }
`;
